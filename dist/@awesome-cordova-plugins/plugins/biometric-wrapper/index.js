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
var BiometricWrapperOriginal = /** @class */ (function (_super) {
    __extends(BiometricWrapperOriginal, _super);
    function BiometricWrapperOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapperOriginal.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapperOriginal.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapperOriginal.pluginName = "BiometricWrapper";
    BiometricWrapperOriginal.plugin = "cordova-plugin-biometric";
    BiometricWrapperOriginal.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapperOriginal.repo = "";
    BiometricWrapperOriginal.install = "";
    BiometricWrapperOriginal.installVariables = [];
    BiometricWrapperOriginal.platforms = ["Android"];
    return BiometricWrapperOriginal;
}(AwesomeCordovaNativePlugin));
var BiometricWrapper = new BiometricWrapperOriginal();
export { BiometricWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvbWV0cmljLXdyYXBwZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0N0RCxvQ0FBMEI7Ozs7SUFROUQsdUNBQVksYUFBQyxJQUFTO0lBV3RCLDhDQUFtQixhQUFDLElBQVM7Ozs7Ozs7OzJCQXREL0I7RUFtQ3NDLDBCQUEwQjtTQUFuRCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJpb21ldHJpY1dyYXBwZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gY2FwdHVyZSBiaW9tZXRyaWMoSXJpcyBhbmQgRmluZ2VycHJpbnQpIGFuZCB2YWxpZGF0ZSB0aGUgdXNlci5cbiAqIE1heSBiZSB1c2VkIGluIEJhbmtpbmcgZG9tYWluXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJpb21ldHJpY1dyYXBwZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmlvbWV0cmljLXdyYXBwZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiaW9tZXRyaWNXcmFwcGVyOiBCaW9tZXRyaWNXcmFwcGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iaW9tZXRyaWNXcmFwcGVyLmFjdGl2YXRlSXJpcyh7J1BJRF9YTUwnOiAnPHBpZC14bWwvPid9KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IClcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiApO1xuICpcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmlvbWV0cmljV3JhcHBlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJpb21ldHJpYycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5CaW9tZXRyaWNXcmFwcGVyJyxcbiAgcmVwbzogJycsXG4gIGluc3RhbGw6ICcnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmlvbWV0cmljV3JhcHBlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWN0aXZhdGUgaXJpcyBhY3Rpdml0eVxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXJpcyBkYXRhIGNhcHR1cmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlSXJpcyhhcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFjdGl2YXRlIGZpbmdlcnByaW50IGFjdGl2aXR5XG4gICAqXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBGUCBkYXRhIGNhcHR1cmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlRmluZ2VycHJpbnQoYXJnczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==