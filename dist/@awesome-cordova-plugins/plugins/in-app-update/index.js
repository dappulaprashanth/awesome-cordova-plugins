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
var UpdateType;
(function (UpdateType) {
    UpdateType[UpdateType["FLEXIBLE"] = 0] = "FLEXIBLE";
    UpdateType[UpdateType["IMMEDIATE"] = 1] = "IMMEDIATE";
})(UpdateType || (UpdateType = {}));
var InstallStatus;
(function (InstallStatus) {
    InstallStatus[InstallStatus["CANCELED"] = 0] = "CANCELED";
    InstallStatus[InstallStatus["DOWNLOADED"] = 1] = "DOWNLOADED";
    InstallStatus[InstallStatus["DOWNLOADING"] = 2] = "DOWNLOADING";
    InstallStatus[InstallStatus["FAILED"] = 3] = "FAILED";
    InstallStatus[InstallStatus["INSTALLED"] = 4] = "INSTALLED";
    InstallStatus[InstallStatus["INSTALLING"] = 5] = "INSTALLING";
    InstallStatus[InstallStatus["PENDING"] = 6] = "PENDING";
    InstallStatus[InstallStatus["UNKNOWN"] = 7] = "UNKNOWN";
})(InstallStatus || (InstallStatus = {}));
var UpdateAvailability;
(function (UpdateAvailability) {
    UpdateAvailability[UpdateAvailability["DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS"] = 0] = "DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS";
    UpdateAvailability[UpdateAvailability["UNKNOWN"] = 1] = "UNKNOWN";
    UpdateAvailability[UpdateAvailability["UPDATE_AVAILABLE"] = 2] = "UPDATE_AVAILABLE";
    UpdateAvailability[UpdateAvailability["UPDATE_NOT_AVAILABLE"] = 3] = "UPDATE_NOT_AVAILABLE";
})(UpdateAvailability || (UpdateAvailability = {}));
var AppUpdateInfo = /** @class */ (function () {
    function AppUpdateInfo() {
    }
    return AppUpdateInfo;
}());
export { AppUpdateInfo };
var InAppUpdateOriginal = /** @class */ (function (_super) {
    __extends(InAppUpdateOriginal, _super);
    function InAppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppUpdateOriginal.prototype.check = function () { return cordova(this, "check", {}, arguments); };
    InAppUpdateOriginal.prototype.update = function (config) { return cordova(this, "update", { "observable": true }, arguments); };
    InAppUpdateOriginal.prototype.completeFlexibleUpdate = function () { return cordova(this, "completeFlexibleUpdate", {}, arguments); };
    InAppUpdateOriginal.pluginName = "InAppUpdate";
    InAppUpdateOriginal.plugin = "cordova-in-app-update";
    InAppUpdateOriginal.pluginRef = "window.plugins.InAppUpdate";
    InAppUpdateOriginal.repo = "https://github.com/itsLucario/cordova-app-update-plugin";
    InAppUpdateOriginal.platforms = ["Android"];
    return InAppUpdateOriginal;
}(AwesomeCordovaNativePlugin));
var InAppUpdate = new InAppUpdateOriginal();
export { InAppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXVwZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ2IsbURBQVEsQ0FBQTtJQUNSLHFEQUFTLENBQUE7QUFDWCxDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQUVELElBQUssYUFTSjtBQVRELFdBQUssYUFBYTtJQUNoQix5REFBUSxDQUFBO0lBQ1IsNkRBQVUsQ0FBQTtJQUNWLCtEQUFXLENBQUE7SUFDWCxxREFBTSxDQUFBO0lBQ04sMkRBQVMsQ0FBQTtJQUNULDZEQUFVLENBQUE7SUFDVix1REFBTyxDQUFBO0lBQ1AsdURBQU8sQ0FBQTtBQUNULENBQUMsRUFUSSxhQUFhLEtBQWIsYUFBYSxRQVNqQjtBQUVELElBQUssa0JBS0o7QUFMRCxXQUFLLGtCQUFrQjtJQUNyQiwrSEFBc0MsQ0FBQTtJQUN0QyxpRUFBTyxDQUFBO0lBQ1AsbUZBQWdCLENBQUE7SUFDaEIsMkZBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQUxJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFLdEI7Ozs7d0JBaENEOzs7O0lBMkRpQywrQkFBMEI7Ozs7SUFPekQsMkJBQUs7SUFZTCw0QkFBTSxhQUFDLE1BQWdEO0lBVXZELDRDQUFzQjs7Ozs7O3NCQXhGeEI7RUEyRGlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZW51bSBVcGRhdGVUeXBlIHtcbiAgRkxFWElCTEUsXG4gIElNTUVESUFURSxcbn1cblxuZW51bSBJbnN0YWxsU3RhdHVzIHtcbiAgQ0FOQ0VMRUQsXG4gIERPV05MT0FERUQsXG4gIERPV05MT0FESU5HLFxuICBGQUlMRUQsXG4gIElOU1RBTExFRCxcbiAgSU5TVEFMTElORyxcbiAgUEVORElORyxcbiAgVU5LTk9XTixcbn1cblxuZW51bSBVcGRhdGVBdmFpbGFiaWxpdHkge1xuICBERVZFTE9QRVJfVFJJR0dFUkVEX1VQREFURV9JTl9QUk9HUkVTUyxcbiAgVU5LTk9XTixcbiAgVVBEQVRFX0FWQUlMQUJMRSxcbiAgVVBEQVRFX05PVF9BVkFJTEFCTEUsXG59XG5cbmNsYXNzIEFwcFVwZGF0ZUluZm8ge1xuICB1cGRhdGVUeXBlOiBVcGRhdGVUeXBlO1xuICBpbnN0YWxsU3RhdHVzOiBJbnN0YWxsU3RhdHVzO1xuICBhdmFpbGFibGVWZXJzaW9uQ29kZTogbnVtYmVyO1xuICBieXRlc0Rvd25sb2FkZWQ6IG51bWJlcjtcbiAgdG90YWxCeXRlc1RvRG93bmxvYWQ6IG51bWJlcjtcbiAgY2xpZW50VmVyc2lvblN0YWxlbmVzc0RheXM6IG51bWJlcjtcbiAgcGFja2FnZU5hbWU6IHN0cmluZztcbiAgdXBkYXRlQXZhaWxhYmlsaXR5OiBVcGRhdGVBdmFpbGFiaWxpdHk7XG4gIGluc3RhbGxFcnJvckNvZGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBJbiBBcHAgVXBkYXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luZyBlbmFiZWxzIEluIGFwcCB1cGRhdGUgRm9yIGNvcmRvdmEuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW5BcHBVcGRhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWluLWFwcC11cGRhdGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuSW5BcHBVcGRhdGUnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaXRzTHVjYXJpby9jb3Jkb3ZhLWFwcC11cGRhdGUtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5BcHBVcGRhdGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJZiB5b3Ugd2FudCB0aGUgdXNlciB0byBiZSBwcm9tcHRlZCBhYm91dCBuZXcgdmVyc2lvbiBpbmZvcm1hdGlvbiBiZWZvcmUgaW5pdGlhdGluZyB0aGUgdXBkYXRlLCB5b3UgY2FuIHVzZSBgY2hlY2tgIHRvIHJldHJpdmUgdGhlIG5ldyBhcHAgdmVyc2lvbiBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QXBwVXBkYXRlSW5mbz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBuZXcgYXBwIHZlcnNpb24gdXBkYXRlIGRldGFpbHNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2soKTogUHJvbWlzZTxBcHBVcGRhdGVJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlIFVwZGF0ZSBGbG93IHdpdGggXCJGTEVYSUJMRVwiIHwgXCJJTU1FRElBVEVcIiB1cGRhdGVUeXBlXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy51cGRhdGVUeXBlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFwcFVwZGF0ZUluZm8+fSBSZXR1cm5zIGEgT2JzZXJ2YWJsZSBjYW4gYmUgc3Vic2NyaWJlZCB0byBnZXQgdXBkYXRlIGluc3RhbGwgc3RhdGVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICB1cGRhdGUoY29uZmlnOiB7IHVwZGF0ZVR5cGU6ICdGTEVYSUJMRScgfCAnSU1NRURJQVRFJyB9KTogT2JzZXJ2YWJsZTxBcHBVcGRhdGVJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZsZXhpYmxlIHVwZGF0ZXMgcHJvdmlkZSBiYWNrZ3JvdW5kIGRvd25sb2FkLiBPbmNlIGZsZXhpYmxlIHVwZGF0ZSBjb21wbGV0ZXMgdGhlIGRvd25sb2FkIGluIGJhY2tncm91bmQsIGNvbXBsZXRpb24gb2YgdXBncmFkZSBjYW4gYmUgaW5pdGlhdGVkIGJ5IGNhbGxpbmcgYGNvbXBsZXRlRmxleGlibGVVcGRhdGVgLlxuICAgKlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGVtcHR5IHJlc3BvbnNlLCBmaXJlIGFuZCBmb3JnZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29tcGxldGVGbGV4aWJsZVVwZGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19