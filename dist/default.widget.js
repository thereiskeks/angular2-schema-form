import { Component } from '@angular/core';
export var DefaultWidget = (function () {
    function DefaultWidget() {
    }
    DefaultWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-default-field',
                    template: "\n    <p>Cannot find valid type for {{name}}\n  "
                },] },
    ];
    /** @nocollapse */
    DefaultWidget.ctorParameters = function () { return []; };
    return DefaultWidget;
}());
