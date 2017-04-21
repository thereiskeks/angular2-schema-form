var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { PropertyGroup } from './formproperty';
export var ObjectProperty = (function (_super) {
    __extends(ObjectProperty, _super);
    function ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path);
        this.formPropertyFactory = formPropertyFactory;
        this.propertiesId = [];
        this.createProperties();
    }
    ObjectProperty.prototype.setValue = function (value, onlySelf) {
        for (var propertyId in value) {
            if (value.hasOwnProperty(propertyId)) {
                this.properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.reset = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || {};
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.resetProperties = function (value) {
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                this.properties[propertyId].reset(value[propertyId], true);
            }
        }
    };
    ObjectProperty.prototype.createProperties = function () {
        this.properties = {};
        this.propertiesId = [];
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                var propertySchema = this.schema.properties[propertyId];
                var property = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
                this.properties[propertyId] = property;
                this.propertiesId.push(propertyId);
            }
        }
    };
    ObjectProperty.prototype._updateValue = function () {
        this.reduceValue();
    };
    ObjectProperty.prototype.reduceValue = function () {
        var value = {};
        this.forEachChild(function (property, propertyId) {
            if (property.visible) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    };
    return ObjectProperty;
}(PropertyGroup));
