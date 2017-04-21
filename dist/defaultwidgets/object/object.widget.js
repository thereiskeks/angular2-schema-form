var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component } from '@angular/core';
import { ObjectLayoutWidget } from '../../widget';
export var ObjectWidget = (function (_super) {
    __extends(ObjectWidget, _super);
    function ObjectWidget() {
        _super.apply(this, arguments);
    }
    ObjectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-form-object',
                    template: "<fieldset class=\"row\" *ngFor=\"let fieldset of formProperty.schema.fieldsets\">\n\t<legend *ngIf=\"fieldset.title\">{{fieldset.title}}</legend>\n\t<div class=\"col-6\" *ngFor=\"let fieldId of fieldset.fields\">\n\t\t<sf-form-element [formProperty]=\"formProperty.getProperty(fieldId)\"></sf-form-element>\n\t</div>\n</fieldset>"
                },] },
    ];
    /** @nocollapse */
    ObjectWidget.ctorParameters = function () { return []; };
    return ObjectWidget;
}(ObjectLayoutWidget));
