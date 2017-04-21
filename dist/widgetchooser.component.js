import { Component, ChangeDetectorRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetFactory } from './widgetfactory';
export var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetFactory, cdr) {
        if (widgetFactory === void 0) { widgetFactory = null; }
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.widgetInstanciated = new EventEmitter();
    }
    WidgetChooserComponent.prototype.ngOnChanges = function () {
        var ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
        this.widgetInstanciated.emit(ref.instance);
        this.widgetInstance = ref.instance;
        this.cdr.detectChanges();
    };
    WidgetChooserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-widget-chooser',
                    template: "<div #target></div>",
                },] },
    ];
    /** @nocollapse */
    WidgetChooserComponent.ctorParameters = function () { return [
        { type: WidgetFactory, },
        { type: ChangeDetectorRef, },
    ]; };
    WidgetChooserComponent.propDecorators = {
        'widgetInfo': [{ type: Input },],
        'widgetInstanciated': [{ type: Output },],
        'container': [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
    };
    return WidgetChooserComponent;
}());
