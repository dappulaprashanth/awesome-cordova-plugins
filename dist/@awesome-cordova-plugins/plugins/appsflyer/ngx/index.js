import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var Appsflyer = /** @class */ (function (_super) {
    __extends(Appsflyer, _super);
    function Appsflyer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Appsflyer.prototype.initSdk = function (options) { return cordova(this, "initSdk", {}, arguments); };
    Appsflyer.prototype.logEvent = function (eventName, eventValues) { return cordova(this, "logEvent", {}, arguments); };
    Appsflyer.prototype.setAppUserId = function (customerUserId) { return cordova(this, "setAppUserId", { "sync": true }, arguments); };
    Appsflyer.prototype.Stop = function (isStopTracking) { return cordova(this, "Stop", { "sync": true }, arguments); };
    Appsflyer.prototype.registerOnAppOpenAttribution = function () { return cordova(this, "registerOnAppOpenAttribution", {}, arguments); };
    Appsflyer.prototype.enableUninstallTracking = function (token) { return cordova(this, "enableUninstallTracking", {}, arguments); };
    Appsflyer.prototype.updateServerUninstallToken = function (token) { return cordova(this, "updateServerUninstallToken", { "sync": true }, arguments); };
    Appsflyer.prototype.registerUninstall = function (token) { return cordova(this, "registerUninstall", { "sync": true }, arguments); };
    Appsflyer.prototype.getAppsFlyerUID = function () { return cordova(this, "getAppsFlyerUID", {}, arguments); };
    Appsflyer.prototype.anonymizeUser = function (disable) { return cordova(this, "anonymizeUser", { "sync": true }, arguments); };
    Appsflyer.prototype.setAppInviteOneLinkID = function (oneLinkId) { return cordova(this, "setAppInviteOneLinkID", { "sync": true }, arguments); };
    Appsflyer.prototype.generateInviteLink = function (options) { return cordova(this, "generateInviteLink", {}, arguments); };
    Appsflyer.prototype.logCrossPromotionImpression = function (appId, campaign) { return cordova(this, "logCrossPromotionImpression", { "sync": true }, arguments); };
    Appsflyer.prototype.logCrossPromotionAndOpenStore = function (appId, campaign, options) { return cordova(this, "logCrossPromotionAndOpenStore", { "sync": true }, arguments); };
    Appsflyer.pluginName = "Appsflyer";
    Appsflyer.plugin = "cordova-plugin-appsflyer-sdk";
    Appsflyer.pluginRef = "window.plugins.appsFlyer";
    Appsflyer.repo = "https://github.com/AppsFlyerSDK/cordova-plugin-appsflyer-sdk";
    Appsflyer.platforms = ["iOS", "Android"];
    Appsflyer.install = "Add to config.xml like stated on github and then start";
    Appsflyer.decorators = [
        { type: Injectable }
    ];
    return Appsflyer;
}(AwesomeCordovaNativePlugin));
export { Appsflyer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwc2ZseWVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWtGN0QsNkJBQTBCOzs7O0lBUXZELDJCQUFPLGFBQUMsT0FBeUI7SUFXakMsNEJBQVEsYUFBQyxTQUFpQixFQUFFLFdBQTJCO0lBUXZELGdDQUFZLGFBQUMsY0FBc0I7SUFTbkMsd0JBQUksYUFBQyxjQUF1QjtJQVE1QixnREFBNEI7SUFXNUIsMkNBQXVCLGFBQUMsS0FBYTtJQVVyQyw4Q0FBMEIsYUFBQyxLQUFhO0lBUXhDLHFDQUFpQixhQUFDLEtBQWE7SUFNL0IsbUNBQWU7SUFVZixpQ0FBYSxhQUFDLE9BQWdCO0lBUTlCLHlDQUFxQixhQUFDLFNBQWlCO0lBU3ZDLHNDQUFrQixhQUFDLE9BQStCO0lBV2xELCtDQUEyQixhQUFDLEtBQWEsRUFBRSxRQUFnQjtJQVUzRCxpREFBNkIsYUFBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxPQUFlOzs7Ozs7OztnQkFoSS9FLFVBQVU7O29CQWxGWDtFQW1GK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcHNmbHllck9wdGlvbnMge1xuICAvKipcbiAgICogQXBwc2ZseWVyIERldiBrZXlcbiAgICovXG4gIGRldktleTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcHBsZSBBcHBsaWNhdGlvbiBJRChmb3IgaU9TIG9ubHkpXG4gICAqL1xuICBhcHBJZD86IHN0cmluZztcblxuICAvKipcbiAgICogZGVidWcgbW9kZVxuICAgKi9cbiAgaXNEZWJ1Zz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIG9wdG91dCBvZiBjb2xsZWN0aW9uIG9mIElNRUlcbiAgICovXG4gIGNvbGxlY3RJTUVJPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogXHRvcHRvdXQgb2YgY29sbGVjdGlvbiBvZiBjb2xsZWN0QW5kcm9pZElEXG4gICAqL1xuICBjb2xsZWN0QW5kcm9pZElEPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogZGVmYXVsdCBmYWxzZSBcdEFjY2Vzc2luZyBBcHBzRmx5ZXIgQXR0cmlidXRpb24gLyBDb252ZXJzaW9uIERhdGEgZnJvbSB0aGUgU0RLIChEZWZlcnJlZCBEZWVwbGlua2luZykuIFJlYWQgbW9yZTogQW5kcm9pZCwgaU9TLiBBcHBzRmx5ZXIgcGx1Z2luIHdpbGwgcmV0dXJuIGF0dHJpYnV0aW9uIGRhdGEgaW4gb25TdWNjZXNzIGNhbGxiYWNrLlxuICAgKi9cbiAgb25JbnN0YWxsQ29udmVyc2lvbkRhdGFMaXN0ZW5lcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHRpbWUgZm9yIHRoZSBzZGsgdG8gd2FpdCBiZWZvcmUgbGF1bmNoIC0gSU9TIDE0IE9OTFkhXG4gICAqL1xuICB3YWl0Rm9yQVRUVXNlckF1dGhvcml6YXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwc2ZseWVyRXZlbnQge1xuICBbeDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcHNmbHllckludml0ZU9wdGlvbnMge1xuICBjaGFubmVsPzogc3RyaW5nO1xuICBjYW1wYWlnbj86IHN0cmluZztcbiAgdXNlclBhcmFtcz86IHtcbiAgICBbeDogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEFwcHNmbHllclxuICogQGRlc2NyaXB0aW9uXG4gKiBBcHBzZmx5ZXIgQ29yZG92YSBTREsgc3VwcG9ydCBmb3IgQXR0cmlidXRpb25cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwc2ZseWVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcHNmbHllci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcHNmbHllcjogQXBwc2ZseWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hcHBzZmx5ZXIuaW5pdFNkayhvcHRpb25zKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBcHBzZmx5ZXJPcHRpb25zXG4gKiBBcHBzZmx5ZXJFdmVudFxuICogQXBwc2ZseWVySW52aXRlT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcHNmbHllcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcHNmbHllci1zZGsnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5hcHBzRmx5ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0FwcHNGbHllclNESy9jb3Jkb3ZhLXBsdWdpbi1hcHBzZmx5ZXItc2RrJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIGluc3RhbGw6ICdBZGQgdG8gY29uZmlnLnhtbCBsaWtlIHN0YXRlZCBvbiBnaXRodWIgYW5kIHRoZW4gc3RhcnQnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBzZmx5ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBpbml0aWFsaXplIHRoZSBTREtcbiAgICpcbiAgICogQHBhcmFtIHtBcHBzZmx5ZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRTZGsob3B0aW9uczogQXBwc2ZseWVyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZXNlIGluLWFwcCBldmVudHMgaGVscCB5b3UgdHJhY2sgaG93IGxveWFsIHVzZXJzIGRpc2NvdmVyIHlvdXIgYXBwLCBhbmQgYXR0cmlidXRlIHRoZW0gdG8gc3BlY2lmaWMgY2FtcGFpZ25zL21lZGlhLXNvdXJjZXMuIFBsZWFzZSB0YWtlIHRoZSB0aW1lIGRlZmluZSB0aGUgZXZlbnQvcyB5b3Ugd2FudCB0byBtZWFzdXJlIHRvIGFsbG93IHlvdSB0byB0cmFjayBST0kgKFJldHVybiBvbiBJbnZlc3RtZW50KSBhbmQgTFRWIChMaWZldGltZSBWYWx1ZSkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgY3VzdG9tIGV2ZW50IG5hbWUsIGlzIHByZXNlbnRlZCBpbiB5b3VyIGRhc2hib2FyZFxuICAgKiBAcGFyYW0ge0FwcHNmbHllckV2ZW50fSBldmVudFZhbHVlcyBldmVudCBkZXRhaWxzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFZhbHVlczogQXBwc2ZseWVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldHRpbmcgeW91ciBvd24gQ3VzdG9tIElEIGVuYWJsZXMgeW91IHRvIGNyb3NzLXJlZmVyZW5jZSB5b3VyIG93biB1bmlxdWUgSUQgd2l0aCBBcHBzRmx5ZXLigJlzIHVzZXIgSUQgYW5kIHRoZSBvdGhlciBkZXZpY2Vz4oCZIElEcy4gVGhpcyBJRCBpcyBhdmFpbGFibGUgaW4gQXBwc0ZseWVyIENTViByZXBvcnRzIGFsb25nIHdpdGggcG9zdGJhY2tzIEFQSXMgZm9yIGNyb3NzLXJlZmVyZW5jaW5nIHdpdGggeW91IGludGVybmFsIElEcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1c3RvbWVyVXNlcklkIHVzZXIgaWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRBcHBVc2VySWQoY3VzdG9tZXJVc2VySWQ6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0dGluZyB5b3VyIG93biBDdXN0b20gSUQgZW5hYmxlcyB5b3UgdG8gY3Jvc3MtcmVmZXJlbmNlIHlvdXIgb3duIHVuaXF1ZSBJRCB3aXRoIEFwcHNGbHllcuKAmXMgdXNlciBJRCBhbmQgdGhlIG90aGVyIGRldmljZXPigJkgSURzLiBUaGlzIElEIGlzIGF2YWlsYWJsZSBpbiBBcHBzRmx5ZXIgQ1NWIHJlcG9ydHMgYWxvbmcgd2l0aCBwb3N0YmFja3MgQVBJcyBmb3IgY3Jvc3MtcmVmZXJlbmNpbmcgd2l0aCB5b3UgaW50ZXJuYWwgSURzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGN1c3RvbWVyVXNlcklkIEluIHNvbWUgZXh0cmVtZSBjYXNlcyB5b3UgbWlnaHQgd2FudCB0byBzaHV0IGRvd24gYWxsIFNESyB0cmFja2luZyBkdWUgdG8gbGVnYWwgYW5kIHByaXZhY3kgY29tcGxpYW5jZS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCB0aGUgaXNTdG9wVHJhY2tpbmcgQVBJLiBPbmNlIHRoaXMgQVBJIGlzIGludm9rZWQsIG91ciBTREsgd2lsbCBubyBsb25nZXIgY29tbXVuaWNhdGUgd2l0aCBvdXIgc2VydmVycyBhbmQgc3RvcCBmdW5jdGlvbmluZy5cbiAgICogQHBhcmFtIGlzU3RvcFRyYWNraW5nXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgU3RvcChpc1N0b3BUcmFja2luZzogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIGZyb20gQXR0cmlidXRpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJPbkFwcE9wZW5BdHRyaWJ1dGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBFbmFibGVzIGFwcCB1bmluc3RhbGwgdHJhY2tpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIEdDTS9GQ00gUHJvamVjdE51bWJlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmFibGVVbmluc3RhbGxUcmFja2luZyh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRvIHBhc3MgR0NNL0ZDTSBUb2tlbnMgdGhhdCB3aGVyZSBjb2xsZWN0ZWQgYnkgdGhpcmQgcGFydHkgcGx1Z2lucyB0byB0aGUgQXBwc0ZseWVyIHNlcnZlci4gQ2FuIGJlIHVzZWQgZm9yIFVuaW5zdGFsbCBUcmFja2luZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIEdDTS9GQ00gUHJvamVjdE51bWJlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVwZGF0ZVNlcnZlclVuaW5zdGFsbFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIChpT1MpIEFsbG93cyB0byBwYXNzIEFQTiBUb2tlbnMgdGhhdCB3aGVyZSBjb2xsZWN0ZWQgYnkgdGhpcmQgcGFydHkgcGx1Z2lucyB0byB0aGUgQXBwc0ZseWVyIHNlcnZlci4gQ2FuIGJlIHVzZWQgZm9yIFVuaW5zdGFsbCBUcmFja2luZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIEFQTiBUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyVW5pbnN0YWxsKHRva2VuOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCBBcHBzRmx5ZXLigJlzIHByb3ByaWV0YXJ5IERldmljZSBJRC4gVGhlIEFwcHNGbHllciBEZXZpY2UgSUQgaXMgdGhlIG1haW4gSUQgdXNlZCBieSBBcHBzRmx5ZXIgaW4gUmVwb3J0cyBhbmQgQVBJcy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwc0ZseWVyVUlEKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuZCBVc2VyIE9wdC1PdXQgKE9wdGlvbmFsKSBBcHBzRmx5ZXIgcHJvdmlkZXMgeW91IGEgbWV0aG9kIHRvIG9wdOKAkG91dCBzcGVjaWZpYyB1c2VycyBmcm9tIEFwcHNGbHllciBhbmFseXRpY3MuIFRoaXMgbWV0aG9kIGNvbXBsaWVzIHdpdGggdGhlIGxhdGVzdCBwcml2YWN5IHJlcXVpcmVtZW50cyBhbmQgY29tcGxpZXMgd2l0aCBGYWNlYm9vayBkYXRhIGFuZCBwcml2YWN5IHBvbGljaWVzLiBEZWZhdWx0IGlzIEZBTFNFLCBtZWFuaW5nIHRyYWNraW5nIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlIFNldCB0byB0cnVlIHRvIG9wdC1vdXQgdXNlciBmcm9tIHRyYWNraW5nXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYW5vbnltaXplVXNlcihkaXNhYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgQXBwc0ZseWVy4oCZcyBPbmVMaW5rIElELiBTZXR0aW5nIGEgdmFsaWQgT25lTGluayBJRCB3aWxsIHJlc3VsdCBpbiBzaG9ydGVuZWQgVXNlciBJbnZpdGUgbGlua3MsIHdoZW4gb25lIGlzIGdlbmVyYXRlZC4gVGhlIE9uZUxpbmsgSUQgY2FuIGJlIG9idGFpbmVkIG9uIHRoZSBBcHBzRmx5ZXIgRGFzaGJvYXJkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb25lTGlua0lkIE9uZUxpbmsgSURcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRBcHBJbnZpdGVPbmVMaW5rSUQob25lTGlua0lkOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFsbG93aW5nIHlvdXIgZXhpc3RpbmcgdXNlcnMgdG8gaW52aXRlIHRoZWlyIGZyaWVuZHMgYW5kIGNvbnRhY3RzIGFzIG5ldyB1c2VycyB0byB5b3VyIGFwcCBjYW4gYmUgYSBrZXkgZ3Jvd3RoIGZhY3RvciBmb3IgeW91ciBhcHAuIEFwcHNGbHllciBhbGxvd3MgeW91IHRvIHRyYWNrIGFuZCBhdHRyaWJ1dGUgbmV3IGluc3RhbGxzIG9yaWdpbmF0aW5nIGZyb20gdXNlciBpbnZpdGVzIHdpdGhpbiB5b3VyIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIHtBcHBzZmx5ZXJJbnZpdGVPcHRpb25zfSBvcHRpb25zIFBhcmFtZXRlcnMgZm9yIEludml0ZSBsaW5rXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlbmVyYXRlSW52aXRlTGluayhvcHRpb25zOiBBcHBzZmx5ZXJJbnZpdGVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgY2FsbCB0byB0cmFjayBhbiBpbXByZXNzaW9uIHVzZSB0aGUgZm9sbG93aW5nIEFQSSBjYWxsLiBNYWtlIHN1cmUgdG8gdXNlIHRoZSBwcm9tb3RlZCBBcHAgSUQgYXMgaXQgYXBwZWFycyB3aXRoaW4gdGhlIEFwcHNGbHllciBkYXNoYm9hcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZCBQcm9tb3RlZCBBcHBsaWNhdGlvbiBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FtcGFpZ24gUHJvbW90ZWQgQ2FtcGFpZ25cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBsb2dDcm9zc1Byb21vdGlvbkltcHJlc3Npb24oYXBwSWQ6IHN0cmluZywgY2FtcGFpZ246IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogVXNlIHRoaXMgY2FsbCB0byB0cmFjayB0aGUgY2xpY2sgYW5kIGxhdW5jaCB0aGUgYXBwIHN0b3JlJ3MgYXBwIHBhZ2UgKHZpYSBCcm93c2VyKVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwSWQgUHJvbW90ZWQgQXBwbGljYXRpb24gSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbXBhaWduIFByb21vdGVkIENhbXBhaWduXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgUGFyYW1ldGVycyB0byB0cmFja1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGxvZ0Nyb3NzUHJvbW90aW9uQW5kT3BlblN0b3JlKGFwcElkOiBzdHJpbmcsIGNhbXBhaWduOiBzdHJpbmcsIG9wdGlvbnM6IE9iamVjdCk6IHZvaWQge31cbn1cbiJdfQ==