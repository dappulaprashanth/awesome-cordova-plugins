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
var DeviceAccountsOriginal = /** @class */ (function (_super) {
    __extends(DeviceAccountsOriginal, _super);
    function DeviceAccountsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccountsOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    DeviceAccountsOriginal.prototype.getByType = function (type) { return cordova(this, "getByType", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmails = function () { return cordova(this, "getEmails", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmail = function () { return cordova(this, "getEmail", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissions = function () { return cordova(this, "getPermissions", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissionsByType = function (type) { return cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccountsOriginal.pluginName = "DeviceAccounts";
    DeviceAccountsOriginal.plugin = "cordova-device-accounts-v2";
    DeviceAccountsOriginal.pluginRef = "DeviceAccounts";
    DeviceAccountsOriginal.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccountsOriginal.platforms = ["Android"];
    return DeviceAccountsOriginal;
}(AwesomeCordovaNativePlugin));
var DeviceAccounts = new DeviceAccountsOriginal();
export { DeviceAccounts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlLWFjY291bnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlDeEQsa0NBQTBCOzs7O0lBTzVELDRCQUFHO0lBV0gsa0NBQVMsYUFBQyxJQUFZO0lBVXRCLGtDQUFTO0lBVVQsaUNBQVE7SUFVUix1Q0FBYztJQVdkLDZDQUFvQixhQUFDLElBQVk7Ozs7Ozt5QkFyR25DO0VBMENvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZEFjY291bnQge1xuICAvKiogQWNjb3VudCBjcmVhdG9yICovXG4gIENSRUFUT1I6IEFuZHJvaWRBY2NvdW50O1xuXG4gIC8qKiBBY2NvdW50IG5hbWUgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBBY2NvdW50IHR5cGUgKi9cbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIERldmljZSBBY2NvdW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBHZXRzIHRoZSBHb29nbGUgYWNjb3VudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBBbmRyb2lkIGRldmljZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2VBY2NvdW50cyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kZXZpY2UtYWNjb3VudHMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZUFjY291bnRzOiBEZXZpY2VBY2NvdW50cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5kZXZpY2VBY2NvdW50cy5nZXQoKVxuICogICAudGhlbihhY2NvdW50cyA9PiBjb25zb2xlLmxvZyhhY2NvdW50cykpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQW5kcm9pZEFjY291bnRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXZpY2VBY2NvdW50cycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtZGV2aWNlLWFjY291bnRzLXYyJyxcbiAgcGx1Z2luUmVmOiAnRGV2aWNlQWNjb3VudHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3hVbmhvbHkvY29yZG92YS1kZXZpY2UtYWNjb3VudHMtdjInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2VBY2NvdW50cyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqICBHZXRzIGFsbCBhY2NvdW50cyByZWdpc3RlcmVkIG9uIHRoZSBBbmRyb2lkIERldmljZVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KCk6IFByb21pc2U8QW5kcm9pZEFjY291bnRbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAgR2V0IGFsbCBhY2NvdW50cyByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIGZvciByZXF1ZXN0ZWQgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QnlUeXBlKHR5cGU6IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZEFjY291bnRbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAgR2V0IGFsbCBlbWFpbHMgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZSAoYWNjb3VudHMgd2l0aCAnY29tLmdvb2dsZScgdHlwZSlcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRFbWFpbHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAgR2V0IHRoZSBmaXJzdCBlbWFpbCByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEVtYWlsKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgcGVybWlzc2lvbnMgZm9yIGFjY2VzcyB0byBlbWFpbCByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIDguMCtcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UGVybWlzc2lvbnMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogIEdldCBwZXJtaXNzaW9ucyBmb3IgYWNjZXNzIHRvIGVtYWlsIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgOC4wKyBmb3IgcmVxdWVzdGVkIHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UGVybWlzc2lvbnNCeVR5cGUodHlwZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==