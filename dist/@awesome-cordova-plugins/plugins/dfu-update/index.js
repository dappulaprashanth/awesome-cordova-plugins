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
import { Observable } from 'rxjs';
var DfuUpdateOriginal = /** @class */ (function (_super) {
    __extends(DfuUpdateOriginal, _super);
    function DfuUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DfuUpdateOriginal.prototype.updateFirmware = function (options) { return cordova(this, "updateFirmware", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    DfuUpdateOriginal.pluginName = "DfuUpdate";
    DfuUpdateOriginal.plugin = "cordova-plugin-dfu-update";
    DfuUpdateOriginal.pluginRef = "window.DfuUpdate";
    DfuUpdateOriginal.repo = "https://github.com/EinfachHans/cordova-plugin-dfu-update";
    DfuUpdateOriginal.install = "ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION=\"1.11.0\"";
    DfuUpdateOriginal.installVariables = ["ANDROID_NORDIC_VERSION"];
    DfuUpdateOriginal.platforms = ["Android", "iOS"];
    return DfuUpdateOriginal;
}(AwesomeCordovaNativePlugin));
var DfuUpdate = new DfuUpdateOriginal();
export { DfuUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGZ1LXVwZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWlESCw2QkFBMEI7Ozs7SUFXdkQsa0NBQWMsYUFBQyxPQUFzQjs7Ozs7Ozs7b0JBOUR2QztFQW1EK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU9wdGlvbnMge1xuICAvKipcbiAgICogQSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgaWRlbnRpZmllciBmb3IgdGhlIEJsdWV0b290aCBMRSBkZXZpY2UgdG8gdXBkYXRlLiBJdCB3aWxsIGVpdGhlciBiZSBhIE1BQyBhZGRyZXNzIChvbiBBbmRyb2lkKSBvciBhIFVVSUQgKG9uIGlPUykuXG4gICAqL1xuICBkZXZpY2VJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyB0aGF0IGlzIHRoZSBwYXRoIHRvIHRoZSBmaWxlIHRvIHVzZSBpbiB0aGUgdXBkYXRlLiBJdCBjYW4gYmUgZWl0aGVyIGluIGVpdGhlciBgY2R2ZmlsZTovL2Agb3IgYGZpbGU6Ly9gIGZvcm1hdC5cbiAgICovXG4gIGZpbGVVcmw6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIFBhY2tldFJlY2VpcHROb3RpZmljYXRpb25zVmFsdWUgKERlZmF1bHQgdG8gMTApXG4gICAqL1xuICBwYWNrZXRSZWNlaXB0Tm90aWZpY2F0aW9uc1ZhbHVlPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIERmdSBVcGRhdGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaXMgYSBXcmFwcGVyIHRvIHVzZSBOb3JkaWMgU2VtaWNvbmR1Y3RvcidzIERldmljZSBGaXJtd2FyZSBVcGRhdGUgKERGVSkgc2VydmljZSB0byB1cGRhdGUgYSBCbHVldG9vdGggTEUgZGV2aWNlLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZnVVcGRhdGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZGZ1LXVwZGF0ZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRmdVVwZGF0ZTogRGZ1VXBkYXRlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5kZnVVcGRhdGUudXBkYXRlRmlybXdhcmUoJ2ZpbGVVUkwnLCAnZGV2aWNlSWRlbnRpZmllcicpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGZ1VXBkYXRlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGZ1LXVwZGF0ZScsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5EZnVVcGRhdGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VpbmZhY2hIYW5zL2NvcmRvdmEtcGx1Z2luLWRmdS11cGRhdGUnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWRmdS11cGRhdGUgLS12YXJpYWJsZSBBTkRST0lEX05PUkRJQ19WRVJTSU9OPVwiMS4xMS4wXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FORFJPSURfTk9SRElDX1ZFUlNJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERmdVVwZGF0ZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBGaXJtd2FyZS1VcGRhdGUtUHJvY2Vzc1xuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSBwcm9jZXNzXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYSBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICB1cGRhdGVGaXJtd2FyZShvcHRpb25zOiBVcGRhdGVPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==