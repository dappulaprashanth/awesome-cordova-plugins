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
var AnylineOriginal = /** @class */ (function (_super) {
    __extends(AnylineOriginal, _super);
    function AnylineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnylineOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    AnylineOriginal.pluginName = "Anyline";
    AnylineOriginal.plugin = "io-anyline-cordova";
    AnylineOriginal.pluginRef = "Anyline";
    AnylineOriginal.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    AnylineOriginal.platforms = ["Android", "iOS"];
    return AnylineOriginal;
}(AwesomeCordovaNativePlugin));
var Anyline = new AnylineOriginal();
export { Anyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW55bGluZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFzQy9ELDJCQUEwQjs7OztJQVFyRCxzQkFBSSxhQUFDLE9BQXVCOzs7Ozs7a0JBL0M5QjtFQXVDNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFueWxpbmVPcHRpb25zIHtcbiAgLy8gVmFsaWQgTGljZW5zZSBLZXlcbiAgbGljZW5zZUtleTogc3RyaW5nO1xuXG4gIC8vIFNjYW5uaW5nIG9wdGlvbnNcbiAgY29uZmlnOiBhbnk7XG59XG5cbi8qKlxuICogQG5hbWUgQW55bGluZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBbnlsaW5lIHByb3ZpZGVzIGFuIGVhc3ktdG8tdXNlIFNESyBmb3IgYXBwbGljYXRpb25zIHRvIGVuYWJsZSBPcHRpY2FsIENoYXJhY3RlciBSZWNvZ25pdGlvbiAoT0NSKSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQW55bGluZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hbnlsaW5lL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYW55bGluZTogQW55bGluZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYW55bGluZS5zY2FuKG9wdGlvbnMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW55bGluZScsXG4gIHBsdWdpbjogJ2lvLWFueWxpbmUtY29yZG92YScsXG4gIHBsdWdpblJlZjogJ0FueWxpbmUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0FueWxpbmUvYW55bGluZS1vY3ItY29yZG92YS1tb2R1bGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW55bGluZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNjYW5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0FueWxpbmVPcHRpb25zfSBTY2FubmluZyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBDb2RlIGlzIGNhcHR1cmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjYW4ob3B0aW9uczogQW55bGluZU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19