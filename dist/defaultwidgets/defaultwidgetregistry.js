var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ArrayWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget } from './';
import { WidgetRegistry } from '../widgetregistry';
export var DefaultWidgetRegistry = (function (_super) {
    __extends(DefaultWidgetRegistry, _super);
    function DefaultWidgetRegistry() {
        _super.call(this);
        this.register('array', ArrayWidget);
        this.register('object', ObjectWidget);
        this.register('string', StringWidget);
        this.register('search', StringWidget);
        this.register('tel', StringWidget);
        this.register('url', StringWidget);
        this.register('email', StringWidget);
        this.register('password', StringWidget);
        this.register('color', StringWidget);
        this.register('date', StringWidget);
        this.register('date-time', StringWidget);
        this.register('time', StringWidget);
        this.register('integer', IntegerWidget);
        this.register('number', IntegerWidget);
        this.register('range', RangeWidget);
        this.register('textarea', TextAreaWidget);
        this.register('file', FileWidget);
        this.register('select', SelectWidget);
        this.register('radio', RadioWidget);
        this.register('boolean', CheckboxWidget);
        this.register('checkbox', CheckboxWidget);
        this.setDefaultWidget(StringWidget);
    }
    return DefaultWidgetRegistry;
}(WidgetRegistry));
