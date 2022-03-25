import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var SystemAlertWindowPermission = /** @class */ (function (_super) {
    __extends(SystemAlertWindowPermission, _super);
    function SystemAlertWindowPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermission.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.openNotificationSettings = function () { return cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermission.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermission.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermission.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermission.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.platforms = ["Android"];
    SystemAlertWindowPermission.decorators = [
        { type: Injectable }
    ];
    return SystemAlertWindowPermission;
}(AwesomeCordovaNativePlugin));
export { SystemAlertWindowPermission };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW9DM0MsK0NBQTBCOzs7O0lBT3pFLG1EQUFhO0lBVWIsdURBQWlCO0lBVWpCLDhEQUF3Qjs7Ozs7Ozs7Z0JBNUJ6QixVQUFVOztzQ0FwQ1g7RUFxQ2lELDBCQUEwQjtTQUE5RCwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFN5c3RlbSBBbGVydCBXaW5kb3cgUGVybWlzc2lvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uOiBTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbi5oYXNQZXJtaXNzaW9uKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLnN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24nLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYXhpbUJlbG92L2NvcmRvdmEtcGx1Z2luLXN5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbi5naXQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXN5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJuIDAgd2hlbiBkb250IGhhdmUgU1lTVEVNX0FMRVJUX1dJTkRPVyBwZXJtaXNzaW9uLCAxIHdoZW4gaGF2ZSBTWVNURU1fQUxFUlRfV0lORE9XIHBlcm1pc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gbm90aWZpY2F0aW9uIFNldHRpbmdzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuTm90aWZpY2F0aW9uU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==