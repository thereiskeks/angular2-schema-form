var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ZSchema = require('z-schema');
export var SchemaValidatorFactory = (function () {
    function SchemaValidatorFactory() {
    }
    return SchemaValidatorFactory;
}());
export var ZSchemaValidatorFactory = (function (_super) {
    __extends(ZSchemaValidatorFactory, _super);
    function ZSchemaValidatorFactory() {
        _super.call(this);
        this.zschema = new ZSchema({});
    }
    ZSchemaValidatorFactory.prototype.createValidatorFn = function (schema) {
        var _this = this;
        return function (value) {
            if (schema.type === 'number' || schema.type === 'integer') {
                value = +value;
            }
            _this.zschema.validate(value, schema);
            var err = _this.zschema.getLastErrors();
            return err || null;
        };
    };
    return ZSchemaValidatorFactory;
}(SchemaValidatorFactory));
