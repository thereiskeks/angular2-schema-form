var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { AtomicProperty } from './atomicproperty';
export var StringProperty = (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty() {
        _super.apply(this, arguments);
    }
    StringProperty.prototype.fallbackValue = function () {
        return '';
    };
    return StringProperty;
}(AtomicProperty));
