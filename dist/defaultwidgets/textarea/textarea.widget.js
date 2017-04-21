var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export var TextAreaWidget = (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        _super.apply(this, arguments);
    }
    TextAreaWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-textarea-widget',
                    template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<textarea [attr.readonly]=\"schema.readOnly\" [name]=\"name\" class=\"text-widget textarea-widget form-control\" [formControl]=\"control\"></textarea>\n</div>"
                },] },
    ];
    /** @nocollapse */
    TextAreaWidget.ctorParameters = function () { return []; };
    return TextAreaWidget;
}(ControlWidget));
