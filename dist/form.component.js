import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionRegistry, FormPropertyFactory, SchemaPreprocessor, ValidatorRegistry } from './model';
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from './schemavalidatorfactory';
import { WidgetFactory } from './widgetfactory';
export function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
}
;
export var FormComponent = (function () {
    function FormComponent(formPropertyFactory, actionRegistry, validatorRegistry, cdr) {
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.cdr = cdr;
        this.schema = null;
        this.actions = {};
        this.validators = {};
        this.onChange = new EventEmitter();
        this.rootProperty = null;
    }
    FormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.validators) {
            this.setValidators();
        }
        if (changes.actions) {
            this.setActions();
        }
        if (!this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes.schema) {
            SchemaPreprocessor.preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            this.rootProperty.valueChanges.subscribe(function (value) { _this.onChange.emit({ value: value }); });
        }
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
    };
    FormComponent.prototype.setValidators = function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    FormComponent.prototype.setActions = function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    FormComponent.prototype.reset = function () {
        this.rootProperty.reset(null, true);
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-form',
                    template: "<sf-form-element\n  *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"></sf-form-element>",
                    providers: [
                        ActionRegistry,
                        ValidatorRegistry,
                        SchemaPreprocessor,
                        WidgetFactory,
                        {
                            provide: SchemaValidatorFactory,
                            useClass: ZSchemaValidatorFactory
                        }, {
                            provide: FormPropertyFactory,
                            useFactory: useFactory,
                            deps: [SchemaValidatorFactory, ValidatorRegistry]
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: FormPropertyFactory, },
        { type: ActionRegistry, },
        { type: ValidatorRegistry, },
        { type: ChangeDetectorRef, },
    ]; };
    FormComponent.propDecorators = {
        'schema': [{ type: Input },],
        'model': [{ type: Input },],
        'actions': [{ type: Input },],
        'validators': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
    return FormComponent;
}());
