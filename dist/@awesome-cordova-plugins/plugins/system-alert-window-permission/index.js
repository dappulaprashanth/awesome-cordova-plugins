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
var SystemAlertWindowPermissionOriginal = /** @class */ (function (_super) {
    __extends(SystemAlertWindowPermissionOriginal, _super);
    function SystemAlertWindowPermissionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermissionOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.openNotificationSettings = function () { return cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermissionOriginal.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermissionOriginal.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.platforms = ["Android"];
    return SystemAlertWindowPermissionOriginal;
}(AwesomeCordovaNativePlugin));
var SystemAlertWindowPermission = new SystemAlertWindowPermissionOriginal();
export { SystemAlertWindowPermission };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW9DM0MsK0NBQTBCOzs7O0lBT3pFLG1EQUFhO0lBVWIsdURBQWlCO0lBVWpCLDhEQUF3Qjs7Ozs7OztzQ0FoRTFCO0VBcUNpRCwwQkFBMEI7U0FBOUQsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTeXN0ZW0gQWxlcnQgV2luZG93IFBlcm1pc3Npb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3N5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbjogU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24uaGFzUGVybWlzc2lvbigpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5zeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWF4aW1CZWxvdi9jb3Jkb3ZhLXBsdWdpbi1zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24uZ2l0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybiAwIHdoZW4gZG9udCBoYXZlIFNZU1RFTV9BTEVSVF9XSU5ET1cgcGVybWlzc2lvbiwgMSB3aGVuIGhhdmUgU1lTVEVNX0FMRVJUX1dJTkRPVyBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIG5vdGlmaWNhdGlvbiBTZXR0aW5nc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3Blbk5vdGlmaWNhdGlvblNldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=