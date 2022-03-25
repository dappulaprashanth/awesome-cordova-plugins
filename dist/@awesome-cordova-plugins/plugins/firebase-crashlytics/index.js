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
var FirebaseCrashlyticsOriginal = /** @class */ (function (_super) {
    __extends(FirebaseCrashlyticsOriginal, _super);
    function FirebaseCrashlyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashlyticsOriginal.prototype.initialise = function () { return cordova(this, "initialise", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.crash = function () { return cordova(this, "crash", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.logPriority = function (priority, tag, message) { return cordova(this, "logPriority", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.logException = function (message) { return cordova(this, "logException", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setString = function (key, value) { return cordova(this, "setString", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setBool = function (key, value) { return cordova(this, "setBool", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setDouble = function (key, value) { return cordova(this, "setDouble", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setFloat = function (key, value) { return cordova(this, "setFloat", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setInt = function (key, value) { return cordova(this, "setInt", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setUserIdentifier = function (identifier) { return cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.pluginName = "FirebaseCrashlytics";
    FirebaseCrashlyticsOriginal.plugin = "cordova-plugin-firebase-crashlytics";
    FirebaseCrashlyticsOriginal.pluginRef = "FirebaseCrashlytics";
    FirebaseCrashlyticsOriginal.repo = "https://github.com/ReallySmallSoftware/cordova-plugin-firebase-crashlytics";
    FirebaseCrashlyticsOriginal.install = "ionic cordova plugin add cordova-plugin-firebase-crashlytics --variable ANDROID_FIREBASE_CORE_VERSION=16.0.0";
    FirebaseCrashlyticsOriginal.installVariables = ["ANDROID_FIREBASE_CORE_VERSION"];
    FirebaseCrashlyticsOriginal.platforms = ["Android", "iOS"];
    return FirebaseCrashlyticsOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseCrashlytics = new FirebaseCrashlyticsOriginal();
export { FirebaseCrashlytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtY3Jhc2hseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0NuRCx1Q0FBMEI7Ozs7SUFTakUsd0NBQVU7SUFZVixtQ0FBSztJQWVMLHlDQUFXLGFBQUMsUUFBZ0IsRUFBRSxHQUFXLEVBQUUsT0FBZTtJQWExRCxpQ0FBRyxhQUFDLE9BQWU7SUFhbkIsMENBQVksYUFBQyxPQUFlO0lBYzVCLHVDQUFTLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFjcEMscUNBQU8sYUFBQyxHQUFXLEVBQUUsS0FBYztJQWNuQyx1Q0FBUyxhQUFDLEdBQVcsRUFBRSxLQUFhO0lBY3BDLHNDQUFRLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFjbkMsb0NBQU0sYUFBQyxHQUFXLEVBQUUsS0FBYTtJQWFqQywrQ0FBaUIsYUFBQyxVQUFrQjs7Ozs7Ozs7OEJBbEx0QztFQWlDeUMsMEJBQTBCO1NBQXRELG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRmlyZWJhc2UgQ3Jhc2hseXRpY3NcbiAqIEBkZXNjcmlwdGlvblxuICogQSBHb29nbGUgRmlyZWJhc2UgQ3Jhc2hseXRpY3MgcGx1Z2luIHRvIGVuYWJsZSBjYXB0dXJlIG9mIGNyYXNoIHJlcG9ydHMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlQ3Jhc2hseXRpY3MgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlyZWJhc2UtY3Jhc2hseXRpY3Mvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZUNyYXNobHl0aWNzOiBGaXJlYmFzZUNyYXNobHl0aWNzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgY3Jhc2hseXRpY3MgPSB0aGlzLmZpcmViYXNlQ3Jhc2hseXRpY3MuaW5pdGlhbGlzZSgpO1xuICogY3Jhc2hseXRpY3MubG9nRXhjZXB0aW9uKCdteSBjYXVnaHQgZXhjZXB0aW9uJyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VDcmFzaGx5dGljcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNyYXNobHl0aWNzJyxcbiAgcGx1Z2luUmVmOiAnRmlyZWJhc2VDcmFzaGx5dGljcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUmVhbGx5U21hbGxTb2Z0d2FyZS9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1jcmFzaGx5dGljcycsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1jcmFzaGx5dGljcyAtLXZhcmlhYmxlIEFORFJPSURfRklSRUJBU0VfQ09SRV9WRVJTSU9OPTE2LjAuMCcsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQU5EUk9JRF9GSVJFQkFTRV9DT1JFX1ZFUlNJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQ3Jhc2hseXRpY3MgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaW1wbHkgYWRkIHRoZSBwbHVnaW4gdG8gZ2V0IHRoZSBkZWZhdWx0IENyYXNobHl0aWNzIGZ1bmN0aW9uYWxpdHkuIE5vdGUgdGhhdCBjcmFzaGVzIGFuZCBsb2dnZWQgZXhjZXB0aW9ucyB3aWxsIG9ubHkgYmUgcmVwb3J0ZWQgd2hlbiB0aGUgYXBwbGljYXRpb24gcmVzdGFydHMuIEluIG9yZGVyIHRvIGxvZyBjYXVnaHQgZXhjZXB0aW9ucyB0aGUgZm9sbG93aW5nIGNhbiBiZSB1c2VkOlxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBpbml0aWFsaXNlKCk6IGFueSB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIGZvcmNlZCBjcmFzaC4gVmlzaWJsZSBpbiBjb25zb2xlIGFmdGVyIHJlc3RhcnQgb2YgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGNyYXNoKCk6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogTG9nIGEgcHJpb3JpdHkgbWVzc2FnZS4gV2lsbCBvbmx5IGJlIGxvZ2dlZCBpbiB0aGUgZXZlbnQgb2YgYSBjcmFzaC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByaW9yaXR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbG9nUHJpb3JpdHkocHJpb3JpdHk6IG51bWJlciwgdGFnOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYSBtZXNzYWdlLiBXaWxsIG9ubHkgYmUgbG9nZ2VkIGluIHRoZSBldmVudCBvZiBhIGNyYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBsb2cobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyB3aGVuIGEgaGFuZGxlZCBleGNlcHRpb24gaGFzIGhhcHBlbmVkLiBWaXNpYmxlIGluIGNvbnNvbGUgYWZ0ZXIgcmVzdGFydCBvZiBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbG9nRXhjZXB0aW9uKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXh0cmEga2V5L3ZhbHVlIHN0cmluZyB2YWx1ZS4gV2lsbCBvbmx5IGJlIGxvZ2dlZCBpbiB0aGUgZXZlbnQgb2YgYSBjcmFzaC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0U3RyaW5nKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHRyYSBrZXkvdmFsdWUgYm9vbCB2YWx1ZS4gV2lsbCBvbmx5IGJlIGxvZ2dlZCBpbiB0aGUgZXZlbnQgb2YgYSBjcmFzaC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldEJvb2woa2V5OiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHRyYSBrZXkvdmFsdWUgZG91YmxlIHZhbHVlLiBXaWxsIG9ubHkgYmUgbG9nZ2VkIGluIHRoZSBldmVudCBvZiBhIGNyYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXREb3VibGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4dHJhIGtleS92YWx1ZSBmbG9hdCB2YWx1ZS4gV2lsbCBvbmx5IGJlIGxvZ2dlZCBpbiB0aGUgZXZlbnQgb2YgYSBjcmFzaC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0RmxvYXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4dHJhIGtleS92YWx1ZSBpbnRlZ2VyIHZhbHVlLiBXaWxsIG9ubHkgYmUgbG9nZ2VkIGluIHRoZSBldmVudCBvZiBhIGNyYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXRJbnQoa2V5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBpZGVudGlmaWVyIGZvciB0aGUgdXNlci4gVGFrZSBjYXJlIHdoZW4gdXNpbmcgdGhpcyBtZXRob2QgYW5kIGVuc3VyZSB5b3UgcHJpdmFjeSBwb2xpY3kgaXMgdXBkYXRlZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkZW50aWZpZXJcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0VXNlcklkZW50aWZpZXIoaWRlbnRpZmllcjogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=