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
var TealiumInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(TealiumInstallReferrerOriginal, _super);
    function TealiumInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrerOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrerOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrerOriginal.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrerOriginal.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrerOriginal.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrerOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrerOriginal.platforms = ["Android"];
    TealiumInstallReferrerOriginal.install = "";
    return TealiumInstallReferrerOriginal;
}(AwesomeCordovaNativePlugin));
var TealiumInstallReferrer = new TealiumInstallReferrerOriginal();
export { TealiumInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS1pbnN0YWxscmVmZXJyZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0NoRCwwQ0FBMEI7Ozs7SUFRcEUsOENBQWEsYUFBQyxZQUFvQjtJQVdsQyw0Q0FBVyxhQUFDLFlBQW9COzs7Ozs7O2lDQXJEbEM7RUFrQzRDLDBCQUEwQjtTQUF6RCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBwYWlkXG4gKiBAbmFtZSBUZWFsaXVtSW5zdGFsbFJlZmVycmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbW9kdWxlIGRlcGVuZHMgb24gdGhlIFtUZWFsaXVtIENvcmRvdmEgUGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vdGVhbGl1bS9jb3Jkb3ZhLXBsdWdpbikuIFdpdGhvdXQgaXQsIHRoaXMgbW9kdWxlIHdpbGwgbm90IGRvIGFueXRoaW5nLlxuICogSW1wbGVtZW50cyBhIEJyb2FkY2FzdCBSZWNlaXZlciBmb3IgdGhlIElOU1RBTExfUkVGRVJSRVIgaW50ZW50LlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IFRlYWxpdW1JbnN0YWxsUmVmZXJyZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdGVhbGl1bS1pbnN0YWxscmVmZXJyZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YWxsUmVmZXJyZXI6IFRlYWxpdW1JbnN0YWxsUmVmZXJyZXIpIHsgfVxuICpcbiAqXG4gKiB0aGlzLmluc3RhbGxSZWZlcnJlci5zZXRQZXJzaXN0ZW50KFwibWFpblwiKTtcbiAqIHRoaXMuaW5zdGFsbFJlZmVycmVyLnNldFZvbGF0aWxlKFwibWFpblwiKTtcbiAqXG4gKlxuICpcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGVhbGl1bUluc3RhbGxSZWZlcnJlcicsXG4gIHBsdWdpbjogJ3RlYWxpdW0tY29yZG92YS1pbnN0YWxscmVmZXJyZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnd2luZG93LnRlYWxpdW1JbnN0YWxsUmVmZXJyZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVhbGl1bS9jb3Jkb3ZhLXBsdWdpbicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVhbGl1bUluc3RhbGxSZWZlcnJlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBpbnN0YWxsIHJlZmVycmVyIGluZm9ybWF0aW9uIGFzIHBlcnNpc3RlbnQgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFBlcnNpc3RlbnQoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgaW5zdGFsbCByZWZlcnJlciBpbmZvcm1hdGlvbiBhcyB2b2xhdGlsZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Vm9sYXRpbGUoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19