import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var DefaultMessageStorage = /** @class */ (function () {
    function DefaultMessageStorage() {
    }
    DefaultMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.delete = function (messageId, callback) { return cordova(this, "delete", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.deleteAll = function (callback) { return cordova(this, "deleteAll", { "sync": true }, arguments); };
    return DefaultMessageStorage;
}());
export { DefaultMessageStorage };
var MobileMessaging = /** @class */ (function (_super) {
    __extends(MobileMessaging, _super);
    function MobileMessaging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileMessaging.prototype.init = function (config, onInitError) { return cordova(this, "init", { "sync": true }, arguments); };
    MobileMessaging.prototype.register = function (event) { return cordova(this, "register", { "observable": true }, arguments); };
    MobileMessaging.prototype.on = function (event) { return cordova(this, "on", { "observable": true }, arguments); };
    MobileMessaging.prototype.unregister = function (event) { return cordova(this, "unregister", { "observable": true }, arguments); };
    MobileMessaging.prototype.off = function (event) { return cordova(this, "off", { "observable": true }, arguments); };
    MobileMessaging.prototype.submitEvent = function (event) { return cordova(this, "submitEvent", { "sync": true }, arguments); };
    MobileMessaging.prototype.submitEventImmediately = function (event) { return cordova(this, "submitEventImmediately", { "observable": true }, arguments); };
    MobileMessaging.prototype.saveUser = function (userData) { return cordova(this, "saveUser", {}, arguments); };
    MobileMessaging.prototype.fetchUser = function () { return cordova(this, "fetchUser", {}, arguments); };
    MobileMessaging.prototype.getUser = function () { return cordova(this, "getUser", {}, arguments); };
    MobileMessaging.prototype.saveInstallation = function (installation) { return cordova(this, "saveInstallation", {}, arguments); };
    MobileMessaging.prototype.fetchInstallation = function () { return cordova(this, "fetchInstallation", {}, arguments); };
    MobileMessaging.prototype.getInstallation = function () { return cordova(this, "getInstallation", {}, arguments); };
    MobileMessaging.prototype.setInstallationAsPrimary = function (pushRegistrationId, primary) { return cordova(this, "setInstallationAsPrimary", {}, arguments); };
    MobileMessaging.prototype.personalize = function (context) { return cordova(this, "personalize", {}, arguments); };
    MobileMessaging.prototype.depersonalize = function () { return cordova(this, "depersonalize", {}, arguments); };
    MobileMessaging.prototype.depersonalizeInstallation = function (pushRegistrationId) { return cordova(this, "depersonalizeInstallation", {}, arguments); };
    MobileMessaging.prototype.markMessagesSeen = function (messageIds) { return cordova(this, "markMessagesSeen", {}, arguments); };
    MobileMessaging.prototype.showDialogForError = function (errorCode) { return cordova(this, "showDialogForError", {}, arguments); };
    MobileMessaging.prototype.defaultMessageStorage = function () { return cordova(this, "defaultMessageStorage", { "sync": true }, arguments); };
    MobileMessaging.prototype.showChat = function (config) { return cordova(this, "showChat", {}, arguments); };
    MobileMessaging.pluginName = "MobileMessaging";
    MobileMessaging.plugin = "com-infobip-plugins-mobilemessaging";
    MobileMessaging.pluginRef = "MobileMessaging";
    MobileMessaging.repo = "https://github.com/infobip/mobile-messaging-cordova-plugin";
    MobileMessaging.platforms = ["Android", "iOS"];
    MobileMessaging.decorators = [
        { type: Injectable }
    ];
    return MobileMessaging;
}(AwesomeCordovaNativePlugin));
export { MobileMessaging };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbW9iaWxlLW1lc3NhZ2luZy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBMEpoQyxvQ0FBSSxhQUFDLFNBQWlCLEVBQUUsUUFBb0M7SUFLNUQsdUNBQU8sYUFBQyxRQUF1QztJQUsvQyxzQ0FBTSxhQUFDLFNBQWlCLEVBQUUsUUFBb0I7SUFLOUMseUNBQVMsYUFBQyxRQUFvQjtnQ0EzS2hDOzs7O0lBK05xQyxtQ0FBMEI7Ozs7SUFXN0QsOEJBQUksYUFBQyxNQUFxQixFQUFFLFdBQW1EO0lBYS9FLGtDQUFRLGFBQUMsS0FBWTtJQU9yQiw0QkFBRSxhQUFDLEtBQVk7SUFlZixvQ0FBVSxhQUFDLEtBQVk7SUFPdkIsNkJBQUcsYUFBQyxLQUFZO0lBdUJoQixxQ0FBVyxhQUFDLEtBQWtCO0lBeUI5QixnREFBc0IsYUFBQyxLQUFrQjtJQVl6QyxrQ0FBUSxhQUFDLFFBQWtCO0lBVTNCLG1DQUFTO0lBVVQsaUNBQU87SUFZUCwwQ0FBZ0IsYUFBQyxZQUEwQjtJQVUzQywyQ0FBaUI7SUFVakIseUNBQWU7SUFZZixrREFBd0IsYUFBQyxrQkFBMEIsRUFBRSxPQUFnQjtJQVlyRSxxQ0FBVyxhQUFDLE9BQTJCO0lBVXZDLHVDQUFhO0lBVWIsbURBQXlCLGFBQUMsa0JBQTBCO0lBV3BELDBDQUFnQixhQUFDLFVBQW9CO0lBV3JDLDRDQUFrQixhQUFDLFNBQWlCO0lBS3BDLCtDQUFxQjtJQVlyQixrQ0FBUSxhQUFDLE1BQW1COzs7Ozs7O2dCQXpQN0IsVUFBVTs7MEJBOU5YO0VBK05xQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIE9TID0gJ0FuZHJvaWQnIHwgJ2lPUyc7XG5leHBvcnQgdHlwZSBHZW5kZXIgPSAnTWFsZScgfCAnRmVtYWxlJztcbmV4cG9ydCB0eXBlIEV2ZW50ID1cbiAgfCAnbWVzc2FnZVJlY2VpdmVkJ1xuICB8ICdub3RpZmljYXRpb25UYXBwZWQnXG4gIHwgJ3Rva2VuUmVjZWl2ZWQnXG4gIHwgJ3JlZ2lzdHJhdGlvblVwZGF0ZWQnXG4gIHwgJ2dlb2ZlbmNlRW50ZXJlZCdcbiAgfCAnYWN0aW9uVGFwcGVkJ1xuICB8ICdpbnN0YWxsYXRpb25VcGRhdGVkJ1xuICB8ICd1c2VyVXBkYXRlZCdcbiAgfCAncGVyc29uYWxpemVkJ1xuICB8ICdkZXBlcnNvbmFsaXplZCdcbiAgfCAnZGVlcGxpbmsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUV2ZW50IHtcbiAgZGVmaW5pdGlvbklkOiBzdHJpbmc7XG4gIHByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogVGhlIGFwcGxpY2F0aW9uIGNvZGUgb2YgeW91ciBBcHBsaWNhdGlvbiBmcm9tIFB1c2ggUG9ydGFsIHdlYnNpdGVcbiAgICovXG4gIGFwcGxpY2F0aW9uQ29kZTogc3RyaW5nO1xuICBnZW9mZW5jaW5nRW5hYmxlZD86IGJvb2xlYW47XG4gIGluQXBwQ2hhdEVuYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogTWVzc2FnZSBzdG9yYWdlIHNhdmUgY2FsbGJhY2tcbiAgICovXG4gIG1lc3NhZ2VTdG9yYWdlPzogc3RyaW5nO1xuICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2U/OiBib29sZWFuO1xuICBpb3M/OiB7XG4gICAgbm90aWZpY2F0aW9uVHlwZXM/OiBzdHJpbmdbXTsgLy8gWydhbGVydCcsICdiYWRnZScsICdzb3VuZCddXG4gICAgZm9yY2VDbGVhbnVwPzogYm9vbGVhbjtcbiAgICBsb2dnaW5nPzogYm9vbGVhbjtcbiAgfTtcbiAgYW5kcm9pZD86IHtcbiAgICBub3RpZmljYXRpb25JY29uPzogc3RyaW5nOyAvLyBhIHJlc291cmNlIG5hbWUgZm9yIGEgc3RhdHVzIGJhciBpY29uICh3aXRob3V0IGV4dGVuc2lvbiksIGxvY2F0ZWQgaW4gJy9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL21pcG1hcCdcbiAgICBtdWx0aXBsZU5vdGlmaWNhdGlvbnM/OiBib29sZWFuOyAvLyBzZXQgdG8gJ3RydWUnIHRvIGVuYWJsZSBtdWx0aXBsZSBub3RpZmljYXRpb25zXG4gICAgbm90aWZpY2F0aW9uQWNjZW50Q29sb3I/OiBzdHJpbmc7IC8vIHNldCB0byBoZXggY29sb3IgdmFsdWUgaW4gZm9ybWF0ICcjUlJHR0JCJyBvciAnI0FBUlJHR0JCJ1xuICB9O1xuICBwcml2YWN5U2V0dGluZ3M/OiB7XG4gICAgYXBwbGljYXRpb25Db2RlUGVyc2lzdGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgICB1c2VyRGF0YVBlcnNpc3RpbmdEaXNhYmxlZD86IGJvb2xlYW47XG4gICAgY2FycmllckluZm9TZW5kaW5nRGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIHN5c3RlbUluZm9TZW5kaW5nRGlzYWJsZWQ/OiBib29sZWFuO1xuICB9O1xuICBub3RpZmljYXRpb25DYXRlZ29yaWVzPzogW1xuICAgIHtcbiAgICAgIGlkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICBhY3Rpb25zPzogW1xuICAgICAgICB7XG4gICAgICAgICAgaWRlbnRpZmllcj86IHN0cmluZztcbiAgICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgICBmb3JlZ3JvdW5kPzogYm9vbGVhbjtcbiAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICAgICAgICBtb1JlcXVpcmVkPzogYm9vbGVhbjtcbiAgICAgICAgICBkZXN0cnVjdGl2ZT86IGJvb2xlYW47XG4gICAgICAgICAgaWNvbj86IHN0cmluZztcbiAgICAgICAgICB0ZXh0SW5wdXRBY3Rpb25CdXR0b25UaXRsZT86IHN0cmluZztcbiAgICAgICAgICB0ZXh0SW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG4gIF07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRhdGEge1xuICBleHRlcm5hbFVzZXJJZDogc3RyaW5nO1xuICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICBtaWRkbGVOYW1lPzogc3RyaW5nO1xuICBnZW5kZXI/OiBHZW5kZXI7XG4gIGJpcnRoZGF5Pzogc3RyaW5nO1xuICBwaG9uZXM/OiBzdHJpbmdbXTtcbiAgZW1haWxzPzogc3RyaW5nW107XG4gIHRhZ3M/OiBzdHJpbmdbXTtcbiAgY3VzdG9tQXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBhbnlbXT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbGF0aW9uIHtcbiAgaXNQcmltYXJ5RGV2aWNlPzogYm9vbGVhbjtcbiAgaXNQdXNoUmVnaXN0cmF0aW9uRW5hYmxlZD86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbnNFbmFibGVkPzogYm9vbGVhbjtcbiAgZ2VvRW5hYmxlZD86IGJvb2xlYW47XG4gIHNka1ZlcnNpb24/OiBzdHJpbmc7XG4gIGFwcFZlcnNpb24/OiBzdHJpbmc7XG4gIG9zPzogT1M7XG4gIG9zVmVyc2lvbj86IHN0cmluZztcbiAgZGV2aWNlTWFudWZhY3R1cmVyPzogc3RyaW5nO1xuICBkZXZpY2VNb2RlbD86IHN0cmluZztcbiAgZGV2aWNlU2VjdXJlPzogYm9vbGVhbjtcbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIGRldmljZVRpbWV6b25lSWQ/OiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uVXNlcklkPzogc3RyaW5nO1xuICBkZXZpY2VOYW1lPzogc3RyaW5nO1xuICBjdXN0b21BdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG59XG5cbi8qKlxuICogVXNlcidzIHVuaXF1ZSBJRC4gT25lIFVzZXJJZGVudGl0eSBwYXJhbWV0ZXIgbXVzdCBiZSBwcm92aWRlZCBpZiB1c2VkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJZGVudGl0eSB7XG4gIHBob25lcz86IHN0cmluZ1tdO1xuICBlbWFpbHM/OiBzdHJpbmdbXTtcbiAgZXh0ZXJuYWxVc2VySWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uYWxpemVDb250ZXh0IHtcbiAgdXNlcklkZW50aXR5OiBVc2VySWRlbnRpdHk7XG4gIHVzZXJBdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IGFueVtdPjtcbiAgZm9yY2VEZXBlcnNvbmFsaXplPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBib2R5Pzogc3RyaW5nO1xuICBzb3VuZD86IHN0cmluZztcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgY3VzdG9tUGF5bG9hZD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIGludGVybmFsRGF0YT86IHN0cmluZztcbiAgcmVjZWl2ZWRUaW1lc3RhbXA/OiBudW1iZXI7XG4gIHNlZW5EYXRlPzogbnVtYmVyO1xuICBjb250ZW50VXJsPzogc3RyaW5nO1xuICBzZWVuPzogYm9vbGVhbjtcbiAgZ2VvPzogYm9vbGVhbjtcbiAgb3JpZ2luYWxQYXlsb2FkPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgLy8gaU9TIG9ubHlcbiAgdmlicmF0ZT86IGJvb2xlYW47IC8vIEFuZHJvaWQgb25seVxuICBpY29uPzogc3RyaW5nOyAvLyBBbmRyb2lkIG9ubHlcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7IC8vIEFuZHJvaWQgb25seVxuICBjaGF0Pzogc3RyaW5nO1xuICBicm93c2VyVXJsPzogc3RyaW5nO1xuICBkZWVwbGluaz86IHN0cmluZztcbiAgd2ViVmlld1VybD86IHN0cmluZztcbiAgaW5BcHBEaXNtaXNzVGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9iaWxlTWVzc2FnaW5nRXJyb3Ige1xuICBjb2RlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGF0Q29uZmlnIHtcbiAgaW9zPzoge1xuICAgIHNob3dNb2RhbGx5OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdE1lc3NhZ2VTdG9yYWdlIHtcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGZpbmQobWVzc2FnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBmaW5kQWxsKGNhbGxiYWNrOiAobWVzc2FnZXM6IE1lc3NhZ2VbXSkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWxldGUobWVzc2FnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlbGV0ZUFsbChjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIE1vYmlsZSBNZXNzYWdpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogTW9iaWxlIE1lc3NhZ2luZyBTREsgaXMgZGVzaWduZWQgYW5kIGRldmVsb3BlZCB0byBlYXNpbHkgZW5hYmxlIHB1c2ggbm90aWZpY2F0aW9uIGNoYW5uZWwgaW4geW91ciBtb2JpbGUgYXBwbGljYXRpb24uXG4gKiBJbiBhbG1vc3Qgbm8gdGltZSBvZiBpbXBsZW1lbnRhdGlvbiB5b3UgZ2V0IHB1c2ggbm90aWZpY2F0aW9uIGluIHlvdXIgYXBwbGljYXRpb24gYW5kIGFjY2VzcyB0byB0aGUgZmVhdHVyZXMgb2YgW0luZm9iaXAgSVAgTWVzc2FnaW5nIFBsYXRmb3JtXShodHRwczovL3BvcnRhbC5pbmZvYmlwLmNvbS9wdXNoLykuXG4gKiBUaGlzIGRvY3VtZW50IGRlc2NyaWJlcyBsaWJyYXJ5IGludGVncmF0aW9uIHN0ZXBzIGZvciB5b3VyIENvcmRvdmEgcHJvamVjdC5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvIHNlZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2luZm9iaXAvbW9iaWxlLW1lc3NhZ2luZy1jb3Jkb3ZhLXBsdWdpbilcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTW9iaWxlTWVzc2FnaW5nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21vYmlsZS1tZXNzYWdpbmcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtb2JpbGVNZXNzYWdpbmc6IE1vYmlsZU1lc3NhZ2luZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqICB0aGlzLm1vYmlsZU1lc3NhZ2luZy5pbml0KHtcbiAqICAgIGFwcGxpY2F0aW9uQ29kZTogJzx5b3VyX2FwcGxpY2F0aW9uX2NvZGU+JyxcbiAqICAgIGdlb2ZlbmNpbmdFbmFibGVkOiAnPHRydWUvZmFsc2U+JyxcbiAqICAgIGRlZmF1bHRNZXNzYWdlU3RvcmFnZTogJzx0cnVlL2ZhbHNlPicsXG4gKiAgICBpb3M6IHtcbiAqICAgICAgbm90aWZpY2F0aW9uVHlwZXM6IFsnYWxlcnQnLCAnYmFkZ2UnLCAnc291bmQnXVxuICogICAgfSxcbiAqICAgIGFuZHJvaWQ6IHtcbiAqICAgICAgbm90aWZpY2F0aW9uSWNvbjogPFN0cmluZzsgYSByZXNvdXJjZSBuYW1lIGZvciBhIHN0YXR1cyBiYXIgaWNvbiAod2l0aG91dCBleHRlbnNpb24pLCBsb2NhdGVkIGluICcvcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL3Jlcy9taXBtYXAnPixcbiAqICAgICAgbXVsdGlwbGVOb3RpZmljYXRpb25zOiA8Qm9vbGVhbjsgc2V0IHRvICd0cnVlJyB0byBlbmFibGUgbXVsdGlwbGUgbm90aWZpY2F0aW9ucz4sXG4gKiAgICAgIG5vdGlmaWNhdGlvbkFjY2VudENvbG9yOiA8U3RyaW5nOyBzZXQgdG8gaGV4IGNvbG9yIHZhbHVlIGluIGZvcm1hdCAnI1JSR0dCQicgb3IgJyNBQVJSR0dCQic+XG4gKiAgICAgfX0sIChlcnIpID0+IHtcbiAqICAgICAgLi4uXG4gKiAgICB9KTtcbiAqXG4gKiAgdGhpcy5tb2JpbGVNZXNzYWdpbmcucmVnaXN0ZXIoJ21lc3NhZ2VSZWNlaXZlZCcpLnN1YnNjcmliZSgobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xuICogICAgLi4uXG4gKiAgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTW9iaWxlTWVzc2FnaW5nJyxcbiAgcGx1Z2luOiAnY29tLWluZm9iaXAtcGx1Z2lucy1tb2JpbGVtZXNzYWdpbmcnLFxuICBwbHVnaW5SZWY6ICdNb2JpbGVNZXNzYWdpbmcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2luZm9iaXAvbW9iaWxlLW1lc3NhZ2luZy1jb3Jkb3ZhLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2JpbGVNZXNzYWdpbmcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydHMgYSBuZXcgTW9iaWxlIE1lc3NhZ2luZyBzZXNzaW9uLlxuICAgKlxuICAgKiBAbmFtZSBpbml0XG4gICAqIEBwYXJhbSBjb25maWcuIENvbmZpZ3VyYXRpb24gZm9yIE1vYmlsZSBNZXNzYWdpbmdcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0gb25Jbml0RXJyb3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Jbml0RXJyb3IuIEVycm9yIGNhbGxiYWNrXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaW5pdChjb25maWc6IENvbmZpZ3VyYXRpb24sIG9uSW5pdEVycm9yPzogKGVycm9yOiBNb2JpbGVNZXNzYWdpbmdFcnJvcikgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0byBldmVudCBjb21pbmcgZnJvbSBNb2JpbGVNZXNzYWdpbmcgbGlicmFyeS5cbiAgICpcbiAgICogQG5hbWUgcmVnaXN0ZXJcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgcmVnaXN0ZXIoZXZlbnQ6IEV2ZW50KTogT2JzZXJ2YWJsZTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIG9uKGV2ZW50OiBFdmVudCk6IE9ic2VydmFibGU8TWVzc2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbiByZWdpc3RlciBmcm9tIE1vYmlsZU1lc3NhZ2luZyBsaWJyYXJ5IGV2ZW50LlxuICAgKlxuICAgKiBAbmFtZSB1bnJlZ2lzdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgd2lsbCBiZSB1bnJlZ2lzdGVyZWQgZnJvbSBldmVudFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHVucmVnaXN0ZXIoZXZlbnQ6IEV2ZW50KTogT2JzZXJ2YWJsZTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIG9mZihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gZXZlbnQgdG8gdGhlIHNlcnZlciBldmVudHVhbGx5LCBoYW5kbGVzIHBvc3NpYmxlIGVycm9ycyBhbmQgZG8gcmV0cmllcyBmb3IgeW91LlxuICAgKlxuICAgKiBAbmFtZSBzdWJtaXRFdmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnREYXRhLiBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhXG4gICAqIHtcbiAgICogICBkZWZpbml0aW9uSWQ6IFwiZXZlbnREZWZpbml0aW9uSWRcIlxuICAgKiAgIHByb3BlcnRpZXM6IHtcbiAgICogICAgIFwic3RyaW5nQXR0cmlidXRlXCI6IFwic3RyaW5nXCIsXG4gICAqICAgICBcIm51bWJlckF0dHJpYnV0ZVwiOiAxLFxuICAgKiAgICAgXCJkYXRlQXR0cmlidXRlXCI6IFwiMjAyMC0wMi0yNlQwOTo0MTo1N1pcIixcbiAgICogICAgIFwiYm9vbGVhbkF0dHJpYnV0ZVwiOiB0cnVlXG4gICAqICAgfVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN1Ym1pdEV2ZW50KGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhbiBldmVudCB0byB0aGUgc2VydmVyIGltbWVkaWF0ZWx5LlxuICAgKiBZb3UgaGF2ZSB0byBoYW5kbGUgcG9zc2libGUgY29ubmVjdGlvbiBvciBzZXJ2ZXIgZXJyb3JzLCBkbyByZXRyaWVzIHlvdXJzZWxmLlxuICAgKlxuICAgKiBAbmFtZSBzdWJtaXRFdmVudEltbWVkaWF0ZWx5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEuIEFuIG9iamVjdCBjb250YWluaW5nIGV2ZW50IGRhdGFcbiAgICoge1xuICAgKiAgIGRlZmluaXRpb25JZDogXCJldmVudERlZmluaXRpb25JZFwiXG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgXCJzdHJpbmdBdHRyaWJ1dGVcIjogXCJzdHJpbmdcIixcbiAgICogICAgIFwibnVtYmVyQXR0cmlidXRlXCI6IDEsXG4gICAqICAgICBcImRhdGVBdHRyaWJ1dGVcIjogXCIyMDIwLTAyLTI2VDA5OjQxOjU3WlwiLFxuICAgKiAgICAgXCJib29sZWFuQXR0cmlidXRlXCI6IHRydWVcbiAgICogICB9XG4gICAqIH1cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uIHJlc3VsdCwgeW91IGhhdmUgdG8gaGFuZGxlIGVycm9yIGFuZCBkbyByZXRyaWVzIHlvdXJzZWxmXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgc3VibWl0RXZlbnRJbW1lZGlhdGVseShldmVudDogQ3VzdG9tRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdXNlciBkYXRhIHRvIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBuYW1lIHNhdmVVc2VyXG4gICAqIEBwYXJhbSB1c2VyRGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlckRhdGEuIEFuIG9iamVjdCBjb250YWluaW5nIHVzZXIgZGF0YVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzYXZlVXNlcih1c2VyRGF0YTogVXNlckRhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAbmFtZSBmZXRjaFVzZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hVc2VyKCk6IFByb21pc2U8VXNlckRhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB1c2VyIGRhdGEgZnJvbSB0aGUgbG9jYWxseSBzdG9yZWQgY2FjaGUuXG4gICAqXG4gICAqIEBuYW1lIGdldFVzZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXNlcigpOiBQcm9taXNlPFVzZXJEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGluc3RhbGxhdGlvbiB0byB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAbmFtZSBzYXZlSW5zdGFsbGF0aW9uXG4gICAqIEBwYXJhbSBpbnN0YWxsYXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IGluc3RhbGxhdGlvbi4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5zdGFsbGF0aW9uIGRhdGFcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2F2ZUluc3RhbGxhdGlvbihpbnN0YWxsYXRpb246IEluc3RhbGxhdGlvbik6IFByb21pc2U8SW5zdGFsbGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgaW5zdGFsbGF0aW9uIGZyb20gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQG5hbWUgZmV0Y2hJbnN0YWxsYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hJbnN0YWxsYXRpb24oKTogUHJvbWlzZTxJbnN0YWxsYXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBsb2NhbGx5IGNhY2hlZCBpbnN0YWxsYXRpb24uXG4gICAqXG4gICAqIEBuYW1lIGdldEluc3RhbGxhdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnN0YWxsYXRpb24oKTogUHJvbWlzZTxJbnN0YWxsYXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbnkgaW5zdGFsbGF0aW9uIGFzIHByaW1hcnkgZm9yIHRoaXMgdXNlci5cbiAgICpcbiAgICogQG5hbWUgc2V0SW5zdGFsbGF0aW9uQXNQcmltYXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwdXNoUmVnaXN0cmF0aW9uSWQgb2YgYW4gaW5zdGFsbGF0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpbWFyeSBvciBub3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0SW5zdGFsbGF0aW9uQXNQcmltYXJ5KHB1c2hSZWdpc3RyYXRpb25JZDogc3RyaW5nLCBwcmltYXJ5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgcGVyc29uYWxpemF0aW9uIG9mIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbiBvbiB0aGUgcGxhdGZvcm0uXG4gICAqXG4gICAqIEBuYW1lIHBlcnNvbmFsaXplXG4gICAqIEBwYXJhbSBjb250ZXh0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0LiBBbiBvYmplY3QgY29udGFpbmluZyB1c2VyIGlkZW50aXR5IGluZm9ybWF0aW9uIGFzIHdlbGwgYXMgYWRkaXRpb25hbCB1c2VyIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBlcnNvbmFsaXplKGNvbnRleHQ6IFBlcnNvbmFsaXplQ29udGV4dCk6IFByb21pc2U8UGVyc29uYWxpemVDb250ZXh0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGRlcGVyc29uYWxpemF0aW9uIG9mIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbiBvbiB0aGUgcGxhdGZvcm0uXG4gICAqXG4gICAqIEBuYW1lIGRlcGVyc29uYWxpemVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVwZXJzb25hbGl6ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBkZXBlcnNvbmFsaXphdGlvbiBvZiB0aGUgaW5zdGFsbGF0aW9uIHJlZmVyZW5jZWQgYnkgcHVzaFJlZ2lzdHJhdGlvbklkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHVzaFJlZ2lzdHJhdGlvbklkIG9mIHRoZSByZW1vdGUgaW5zdGFsbGF0aW9uIHRvIGRlcGVyc29uYWxpemVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVwZXJzb25hbGl6ZUluc3RhbGxhdGlvbihwdXNoUmVnaXN0cmF0aW9uSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmsgbWVzc2FnZXMgYXMgc2VlblxuICAgKlxuICAgKiBAbmFtZSBtYXJrTWVzc2FnZXNTZWVuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1lc3NhZ2VJZHMgb2YgaWRlbnRpZmllcnMgb2YgbWVzc2FnZSB0byBtYXJrIGFzIHNlZW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWFya01lc3NhZ2VzU2VlbihtZXNzYWdlSWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGJ1aWx0LWluIGVycm9yIGRpYWxvZyBzbyB0aGF0IHVzZXIgY2FuIHJlc29sdmUgZXJyb3JzIGR1cmluZyBzZGsgaW5pdGlhbGl6YXRpb24uXG4gICAqXG4gICAqIEBuYW1lIHNob3dEaWFsb2dGb3JFcnJvclxuICAgKiBAcGFyYW0ge251bWJlcn0gZXJyb3JDb2RlIHRvIGRpc3BsYXkgZGlhbG9nIGZvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93RGlhbG9nRm9yRXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2UoKTogRGVmYXVsdE1lc3NhZ2VTdG9yYWdlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgY2hhdCB2aWV3LlxuICAgKlxuICAgKiBAbmFtZSBzaG93Q2hhdFxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSB7Q2hhdENvbmZpZ30gY2hhdCBjb25maWdcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd0NoYXQoY29uZmlnPzogQ2hhdENvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=