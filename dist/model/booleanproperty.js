var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { AtomicProperty } from './atomicproperty';
export var BooleanProperty = (function (_super) {
    __extends(BooleanProperty, _super);
    function BooleanProperty() {
        _super.apply(this, arguments);
    }
    BooleanProperty.prototype.fallbackValue = function () {
        return false;
    };
    return BooleanProperty;
}(AtomicProperty));
