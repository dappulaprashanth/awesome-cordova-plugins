var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var UptimeOriginal = /** @class */ (function (_super) {
    __extends(UptimeOriginal, _super);
    function UptimeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UptimeOriginal.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    UptimeOriginal.pluginName = "Uptime";
    UptimeOriginal.plugin = "cordova-plugin-uptime";
    UptimeOriginal.pluginRef = "Uptime";
    UptimeOriginal.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    UptimeOriginal.platforms = ["Android", "iOS"];
    return UptimeOriginal;
}(AwesomeCordovaNativePlugin));
var Uptime = new UptimeOriginal();
export { Uptime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdXB0aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCaEUsMEJBQTBCOzs7O0lBUXBELDBCQUFTLGFBQUMsZ0JBQXlCOzs7Ozs7aUJBckNyQztFQTZCNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFVwdGltZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyB0aGUgdGltZSBzcGVudCBpbiBtaWxsaXNlY29uZHMgc2luY2UgYm9vdCAodXB0aW1lKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVXB0aW1lIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3VwdGltZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdXB0aW1lOiBVcHRpbWUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMudXB0aW1lLmdldFVwdGltZShpbmNsdWRlRGVlcFNsZWVwKVxuICogICAudGhlbih1cHRpbWUgPT4gY29uc29sZS5sb2codXB0aW1lKSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVXB0aW1lJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdXB0aW1lJyxcbiAgcGx1Z2luUmVmOiAnVXB0aW1lJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zMWx2aXUvY29yZG92YS1wbHVnaW4tdXB0aW1lJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwdGltZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJuIHN5c3RlbSB1cHRpbWVcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlRGVlcFNsZWVwIFNldCB0byB0cnVlIHRvIGluY2x1ZGUgc3lzdGVtIGRlZXAgc2xlZXBcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXR1cm4gdGhlIHVwdGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXB0aW1lKGluY2x1ZGVEZWVwU2xlZXA6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19