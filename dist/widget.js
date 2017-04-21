var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
export var Widget = (function () {
    function Widget() {
        this.id = '';
        this.name = '';
        this.schema = {};
    }
    return Widget;
}());
export var ControlWidget = (function (_super) {
    __extends(ControlWidget, _super);
    function ControlWidget() {
        _super.apply(this, arguments);
    }
    ControlWidget.prototype.ngAfterViewInit = function () {
        var _this = this;
        var control = this.control;
        this.formProperty.valueChanges.subscribe(function (newValue) {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
            }
        });
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, true);
        });
        control.valueChanges.subscribe(function (newValue) { _this.formProperty.setValue(newValue, false); });
    };
    return ControlWidget;
}(Widget));
export var ArrayLayoutWidget = (function (_super) {
    __extends(ArrayLayoutWidget, _super);
    function ArrayLayoutWidget() {
        _super.apply(this, arguments);
    }
    return ArrayLayoutWidget;
}(Widget));
export var ObjectLayoutWidget = (function (_super) {
    __extends(ObjectLayoutWidget, _super);
    function ObjectLayoutWidget() {
        _super.apply(this, arguments);
    }
    return ObjectLayoutWidget;
}(Widget));
