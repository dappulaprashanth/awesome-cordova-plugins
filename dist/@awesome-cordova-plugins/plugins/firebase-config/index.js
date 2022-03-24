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
var FirebaseConfigOriginal = /** @class */ (function (_super) {
    __extends(FirebaseConfigOriginal, _super);
    function FirebaseConfigOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseConfigOriginal.prototype.fetch = function (expirationDuration) { return cordova(this, "fetch", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.activate = function () { return cordova(this, "activate", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.fetchAndActivate = function () { return cordova(this, "fetchAndActivate", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getBoolean = function (key) { return cordova(this, "getBoolean", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getString = function (key) { return cordova(this, "getString", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getNumber = function (key) { return cordova(this, "getNumber", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getBytes = function (key) { return cordova(this, "getBytes", { "sync": true }, arguments); };
    FirebaseConfigOriginal.pluginName = "FirebaseConfig";
    FirebaseConfigOriginal.plugin = "cordova-plugin-firebase-config";
    FirebaseConfigOriginal.pluginRef = "cordova.plugins.firebase.config";
    FirebaseConfigOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-config";
    FirebaseConfigOriginal.platforms = ["Android", "iOS"];
    return FirebaseConfigOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseConfig = new FirebaseConfigOriginal();
export { FirebaseConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCeEQsa0NBQTBCOzs7O0lBUTVELDhCQUFLLGFBQUMsa0JBQTJCO0lBVWpDLGlDQUFRO0lBVVIseUNBQWdCO0lBV2hCLG1DQUFVLGFBQUMsR0FBVztJQVd0QixrQ0FBUyxhQUFDLEdBQVc7SUFXckIsa0NBQVMsYUFBQyxHQUFXO0lBV3JCLGlDQUFRLGFBQUMsR0FBVzs7Ozs7O3lCQXhHdEI7RUFnQ29DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgRmlyZWJhc2UgQ29uZmlnXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBGaXJlYmFzZSBDb25maWdcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlyZWJhc2VDb25maWcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlyZWJhc2UtY29uZmlnL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VDb25maWc6IEZpcmViYXNlQ29uZmlnKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5maXJlYmFzZUNvbmZpZy5nZXRCb29sZWFuKCdteV9rZXknKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlQ29uZmlnJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY29uZmlnJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmNvbmZpZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1jb25maWcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VDb25maWcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydHMgZmV0Y2hpbmcgY29uZmlncywgYWRoZXJpbmcgdG8gdGhlIHNwZWNpZmllZCBtaW5pbXVtIGZldGNoIGludGVydmFsLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZXhwaXJhdGlvbkR1cmF0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bGw+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGZldGNoKGV4cGlyYXRpb25EdXJhdGlvbj86IG51bWJlcik6IFByb21pc2U8bnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXNseSBhY3RpdmF0ZXMgdGhlIG1vc3QgcmVjZW50bHkgZmV0Y2hlZCBjb25maWdzLCBzbyB0aGF0IHRoZSBmZXRjaGVkIGtleSB2YWx1ZSBwYWlycyB0YWtlIGVmZmVjdC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVsbD59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWN0aXZhdGUoKTogUHJvbWlzZTxudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IGZldGNoZXMgYW5kIHRoZW4gYWN0aXZhdGVzIHRoZSBmZXRjaGVkIGNvbmZpZ3MuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bGw+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGZldGNoQW5kQWN0aXZhdGUoKTogUHJvbWlzZTxudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBib29sZWFuIGNvbmZpZ3VyYXRpb24gdmFsdWUgZnJvbSBSZW1vdGVDb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCb29sZWFuKGtleTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBzdHJpbmcgY29uZmlndXJhdGlvbiB2YWx1ZSBmcm9tIFJlbW90ZUNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cmluZyhrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBudW1lcmljIGNvbmZpZ3VyYXRpb24gdmFsdWUgZnJvbSBSZW1vdGVDb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXROdW1iZXIoa2V5OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGFuIGFycmF5IG9mIGJ5dGVzIGNvbmZpZ3VyYXRpb24gdmFsdWUgZnJvbSBSZW1vdGVDb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCeXRlcyhrZXk6IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==