var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { AtomicProperty } from './atomicproperty';
export var NumberProperty = (function (_super) {
    __extends(NumberProperty, _super);
    function NumberProperty() {
        _super.apply(this, arguments);
    }
    NumberProperty.prototype.fallbackValue = function () {
        var value;
        if (this.schema.minimum !== undefined) {
            value = this.schema.minimum;
        }
        else {
            value = 0;
        }
        return value;
    };
    NumberProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (typeof value === 'string') {
            value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
        }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    return NumberProperty;
}(AtomicProperty));
