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
var MetrixConfig = /** @class */ (function () {
    function MetrixConfig(appId) {
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.defaultTrackerToken = null;
        this.shouldLaunchDeeplink = false;
        this.firebaseAppId = null;
        this.firebaseProjectId = null;
        this.firebaseApiKey = null;
        this.isLocationListeningEnable = false;
        this.eventUploadThreshold = null;
        this.eventUploadMaxBatchSize = null;
        this.eventMaxCount = null;
        this.eventUploadPeriodMillis = null;
        this.sessionTimeoutMillis = null;
        this.store = null;
        this.userIdListener = null;
        this.sessionIdListener = null;
        this.attributionChangeListener = null;
        this.deeplinkResponseListener = null;
        this.appId = appId;
    }
    MetrixConfig.prototype.setDefaultTracker = function (defaultTrackerToken) {
        this.defaultTrackerToken = defaultTrackerToken;
    };
    MetrixConfig.prototype.setFirebaseId = function (firebaseAppId, firebaseProjectId, firebaseApiKey) {
        this.firebaseAppId = firebaseAppId;
        this.firebaseProjectId = firebaseProjectId;
        this.firebaseApiKey = firebaseApiKey;
    };
    MetrixConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    MetrixConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    MetrixConfig.prototype.setOnAttributionChangeListener = function (attributionChangeListener) {
        this.attributionChangeListener = attributionChangeListener;
    };
    MetrixConfig.prototype.setOnDeeplinkResponseListener = function (deeplinkResponseListener) {
        this.deeplinkResponseListener = deeplinkResponseListener;
    };
    MetrixConfig.prototype.setOnReceiveUserIdListener = function (userIdListener) {
        this.userIdListener = userIdListener;
    };
    MetrixConfig.prototype.setOnSessionIdListener = function (sessionIdListener) {
        this.sessionIdListener = sessionIdListener;
    };
    MetrixConfig.prototype.setLocationListening = function (isLocationListeningEnable) {
        this.isLocationListeningEnable = isLocationListeningEnable;
    };
    MetrixConfig.prototype.setEventUploadThreshold = function (threshold) {
        this.eventUploadThreshold = threshold;
    };
    MetrixConfig.prototype.setEventUploadMaxBatchSize = function (size) {
        this.eventUploadMaxBatchSize = size;
    };
    MetrixConfig.prototype.setEventMaxCount = function (count) {
        this.eventMaxCount = count;
    };
    MetrixConfig.prototype.setEventUploadPeriodMillis = function (period) {
        this.eventUploadPeriodMillis = period;
    };
    MetrixConfig.prototype.setSessionTimeoutMillis = function (timeout) {
        this.sessionTimeoutMillis = timeout;
    };
    MetrixConfig.prototype.setStore = function (store) {
        this.store = store;
    };
    MetrixConfig.prototype.getAttributionChangeListener = function () {
        return this.attributionChangeListener;
    };
    MetrixConfig.prototype.getDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener;
    };
    MetrixConfig.prototype.getOnReceiveUserIdListener = function () {
        return this.userIdListener;
    };
    MetrixConfig.prototype.getOnSessionIdListener = function () {
        return this.sessionIdListener;
    };
    MetrixConfig.prototype.hasAttributionChangeListener = function () {
        return this.attributionChangeListener !== null;
    };
    MetrixConfig.prototype.hasDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener !== null;
    };
    MetrixConfig.prototype.hasUserIdListener = function () {
        return this.userIdListener !== null;
    };
    MetrixConfig.prototype.hasSessionIdListener = function () {
        return this.sessionIdListener !== null;
    };
    return MetrixConfig;
}());
export { MetrixConfig };
export var MetrixAttributionStatus;
(function (MetrixAttributionStatus) {
    MetrixAttributionStatus["Attributed"] = "ATTRIBUTED";
    MetrixAttributionStatus["NotAttributedYet"] = "NOT_ATTRIBUTED_YET";
    MetrixAttributionStatus["AttributionNotNeeded"] = "ATTRIBUTION_NOT_NEEDED";
    MetrixAttributionStatus["Unknown"] = "UNKNOWN";
})(MetrixAttributionStatus || (MetrixAttributionStatus = {}));
var MetrixOriginal = /** @class */ (function (_super) {
    __extends(MetrixOriginal, _super);
    function MetrixOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetrixOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    MetrixOriginal.prototype.getSessionNum = function () { return cordova(this, "getSessionNum", {}, arguments); };
    MetrixOriginal.prototype.newEvent = function (slug, attributes) { return cordova(this, "newEvent", { "sync": true }, arguments); };
    MetrixOriginal.prototype.addUserAttributes = function (attributes) { return cordova(this, "addUserAttributes", { "sync": true }, arguments); };
    MetrixOriginal.prototype.newRevenue = function (slug, amount, currency, orderId) { return cordova(this, "newRevenue", { "sync": true }, arguments); };
    MetrixOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    MetrixOriginal.pluginName = "Metrix";
    MetrixOriginal.plugin = "ir.metrix.sdk";
    MetrixOriginal.pluginRef = "Metrix";
    MetrixOriginal.repo = "https://github.com/metrixorg/MetrixSDK-CordovaPlugin";
    MetrixOriginal.platforms = ["Android"];
    return MetrixOriginal;
}(AwesomeCordovaNativePlugin));
var Metrix = new MetrixOriginal();
export { Metrix };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWV0cml4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTJCMUYsc0JBQVksS0FBYTtRQXZCakIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLHdCQUFtQixHQUFXLElBQUksQ0FBQztRQUNuQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0Isa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0Isc0JBQWlCLEdBQVcsSUFBSSxDQUFDO1FBQ2pDLG1CQUFjLEdBQVcsSUFBSSxDQUFDO1FBQzlCLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUNsQyx5QkFBb0IsR0FBVyxJQUFJLENBQUM7UUFDcEMsNEJBQXVCLEdBQVcsSUFBSSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLDRCQUF1QixHQUFXLElBQUksQ0FBQztRQUN2Qyx5QkFBb0IsR0FBVyxJQUFJLENBQUM7UUFDcEMsVUFBSyxHQUFXLElBQUksQ0FBQztRQUVyQixtQkFBYyxHQUE2QixJQUFJLENBQUM7UUFDaEQsc0JBQWlCLEdBQWdDLElBQUksQ0FBQztRQUN0RCw4QkFBeUIsR0FBNkMsSUFBSSxDQUFDO1FBQzNFLDZCQUF3QixHQUEwQixJQUFJLENBQUM7UUFHN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHdDQUFpQixHQUFqQixVQUFrQixtQkFBMkI7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1C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ekI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFTywyQ0FBb0IsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUM7SUFDekMsQ0FBQzt1QkFoSUg7OztBQTJJQSxNQUFNLENBQU4sSUFBWSx1QkFLWDtBQUxELFdBQVksdUJBQXVCO0lBQ2pDLG9EQUF5QixDQUFBO0lBQ3pCLGtFQUF1QyxDQUFBO0lBQ3ZDLDBFQUErQyxDQUFBO0lBQy9DLDhDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBS2xDOztJQW9DMkIsMEJBQTBCOzs7O0lBT3BELHVCQUFNLGFBQUMsTUFBb0I7SUFRM0IsOEJBQWE7SUFXYix5QkFBUSxhQUFDLElBQVksRUFBRSxVQUF5QztJQVFoRSxrQ0FBaUIsYUFBQyxVQUF3QztJQVcxRCwyQkFBVSxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsUUFBaUIsRUFBRSxPQUFnQjtJQVE1RSwrQkFBYyxhQUFDLEdBQVc7Ozs7OztpQkF6TzVCO0VBb0w0QiwwQkFBMEI7U0FBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNZXRyaXhDb25maWcge1xuICBwcml2YXRlIGFwcElkOiBzdHJpbmc7XG4gIHByaXZhdGUgc2VjcmV0SWQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzE6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzI6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzM6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgZGVmYXVsdFRyYWNrZXJUb2tlbjogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBzaG91bGRMYXVuY2hEZWVwbGluayA9IGZhbHNlO1xuICBwcml2YXRlIGZpcmViYXNlQXBwSWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZmlyZWJhc2VQcm9qZWN0SWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZmlyZWJhc2VBcGlLZXk6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgaXNMb2NhdGlvbkxpc3RlbmluZ0VuYWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIGV2ZW50VXBsb2FkVGhyZXNob2xkOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VXBsb2FkTWF4QmF0Y2hTaXplOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50TWF4Q291bnQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRVcGxvYWRQZXJpb2RNaWxsaXM6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgc2Vzc2lvblRpbWVvdXRNaWxsaXM6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgc3RvcmU6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSB1c2VySWRMaXN0ZW5lcjogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBzZXNzaW9uSWRMaXN0ZW5lcjogKHNlc3Npb25JZDogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBhdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyOiAoYXR0cmlidXRpb246IE1ldHJpeEF0dHJpYnV0aW9uKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXI6ICh1cmk6IHN0cmluZykgPT4gdm9pZCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXBwSWQ6IHN0cmluZykge1xuICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcbiAgfVxuXG4gIHNldERlZmF1bHRUcmFja2VyKGRlZmF1bHRUcmFja2VyVG9rZW46IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdFRyYWNrZXJUb2tlbiA9IGRlZmF1bHRUcmFja2VyVG9rZW47XG4gIH1cblxuICBzZXRGaXJlYmFzZUlkKGZpcmViYXNlQXBwSWQ6IHN0cmluZywgZmlyZWJhc2VQcm9qZWN0SWQ6IHN0cmluZywgZmlyZWJhc2VBcGlLZXk6IHN0cmluZykge1xuICAgIHRoaXMuZmlyZWJhc2VBcHBJZCA9IGZpcmViYXNlQXBwSWQ7XG4gICAgdGhpcy5maXJlYmFzZVByb2plY3RJZCA9IGZpcmViYXNlUHJvamVjdElkO1xuICAgIHRoaXMuZmlyZWJhc2VBcGlLZXkgPSBmaXJlYmFzZUFwaUtleTtcbiAgfVxuXG4gIHNldEFwcFNlY3JldChzZWNyZXRJZDogbnVtYmVyLCBpbmZvMTogbnVtYmVyLCBpbmZvMjogbnVtYmVyLCBpbmZvMzogbnVtYmVyLCBpbmZvNDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWNyZXRJZCA9IHNlY3JldElkO1xuICAgIHRoaXMuaW5mbzEgPSBpbmZvMTtcbiAgICB0aGlzLmluZm8yID0gaW5mbzI7XG4gICAgdGhpcy5pbmZvMyA9IGluZm8zO1xuICAgIHRoaXMuaW5mbzQgPSBpbmZvNDtcbiAgfVxuXG4gIHNldFNob3VsZExhdW5jaERlZXBsaW5rKHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG91bGRMYXVuY2hEZWVwbGluayA9IHNob3VsZExhdW5jaERlZXBsaW5rO1xuICB9XG5cbiAgc2V0T25BdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyKGF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXI6IChhdHRyaWJ1dGlvbjogTWV0cml4QXR0cmlidXRpb24pID0+IHZvaWQpIHtcbiAgICB0aGlzLmF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIgPSBhdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyO1xuICB9XG5cbiAgc2V0T25EZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXIoZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyOiAodXJpOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICB0aGlzLmRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lciA9IGRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcjtcbiAgfVxuXG4gIHNldE9uUmVjZWl2ZVVzZXJJZExpc3RlbmVyKHVzZXJJZExpc3RlbmVyOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICB0aGlzLnVzZXJJZExpc3RlbmVyID0gdXNlcklkTGlzdGVuZXI7XG4gIH1cblxuICBzZXRPblNlc3Npb25JZExpc3RlbmVyKHNlc3Npb25JZExpc3RlbmVyOiAoc2Vzc2lvbklkOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICB0aGlzLnNlc3Npb25JZExpc3RlbmVyID0gc2Vzc2lvbklkTGlzdGVuZXI7XG4gIH1cblxuICBzZXRMb2NhdGlvbkxpc3RlbmluZyhpc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlID0gaXNMb2NhdGlvbkxpc3RlbmluZ0VuYWJsZTtcbiAgfVxuXG4gIHNldEV2ZW50VXBsb2FkVGhyZXNob2xkKHRocmVzaG9sZDogbnVtYmVyKSB7XG4gICAgdGhpcy5ldmVudFVwbG9hZFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgfVxuXG4gIHNldEV2ZW50VXBsb2FkTWF4QmF0Y2hTaXplKHNpemU6IG51bWJlcikge1xuICAgIHRoaXMuZXZlbnRVcGxvYWRNYXhCYXRjaFNpemUgPSBzaXplO1xuICB9XG5cbiAgc2V0RXZlbnRNYXhDb3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5ldmVudE1heENvdW50ID0gY291bnQ7XG4gIH1cblxuICBzZXRFdmVudFVwbG9hZFBlcmlvZE1pbGxpcyhwZXJpb2Q6IG51bWJlcikge1xuICAgIHRoaXMuZXZlbnRVcGxvYWRQZXJpb2RNaWxsaXMgPSBwZXJpb2Q7XG4gIH1cblxuICBzZXRTZXNzaW9uVGltZW91dE1pbGxpcyh0aW1lb3V0OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlc3Npb25UaW1lb3V0TWlsbGlzID0gdGltZW91dDtcbiAgfVxuXG4gIHNldFN0b3JlKHN0b3JlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gIH1cblxuICBwcml2YXRlIGdldEF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T25SZWNlaXZlVXNlcklkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcklkTGlzdGVuZXI7XG4gIH1cblxuICBwcml2YXRlIGdldE9uU2Vzc2lvbklkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbklkTGlzdGVuZXI7XG4gIH1cblxuICBwcml2YXRlIGhhc0F0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lciAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lciAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzVXNlcklkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcklkTGlzdGVuZXIgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc1Nlc3Npb25JZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25JZExpc3RlbmVyICE9PSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0cml4QXR0cmlidXRpb24ge1xuICBhY3F1aXNpdGlvbkFkOiBzdHJpbmc7XG4gIGFjcXVpc2l0aW9uQWRTZXQ6IHN0cmluZztcbiAgYWNxdWlzaXRpb25DYW1wYWlnbjogc3RyaW5nO1xuICBhY3F1aXNpdGlvblNvdXJjZTogc3RyaW5nO1xuICBhdHRyaWJ1dGlvblN0YXR1czogTWV0cml4QXR0cmlidXRpb25TdGF0dXM7XG59XG5cbmV4cG9ydCBlbnVtIE1ldHJpeEF0dHJpYnV0aW9uU3RhdHVzIHtcbiAgQXR0cmlidXRlZCA9ICdBVFRSSUJVVEVEJyxcbiAgTm90QXR0cmlidXRlZFlldCA9ICdOT1RfQVRUUklCVVRFRF9ZRVQnLFxuICBBdHRyaWJ1dGlvbk5vdE5lZWRlZCA9ICdBVFRSSUJVVElPTl9OT1RfTkVFREVEJyxcbiAgVW5rbm93biA9ICdVTktOT1dOJyxcbn1cblxuLyoqXG4gKiBAbmFtZSBNZXRyaXhcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyB0aGUgSW9uaWMgQ29yZG92YSBTREsgb2YgTWV0cml44oSiLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBNZXRyaXjihKIgYXQgbWV0cml4LmlyLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgaXIubWV0cml4LnNka2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtNZXRyaXggQ29yZG92YSBTREtdKGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRyaXhvcmcvTWV0cml4U0RLLUNvcmRvdmFQbHVnaW4pXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICBpbXBvcnQgeyBNZXRyaXgsIE1ldHJpeENvbmZpZyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tZXRyaXgnO1xuICpcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1ldHJpeDogTWV0cml4KSB7IH1cbiAqXG4gKiAgLi4uXG4gKlxuICogIGNvbnN0IGNvbmZpZyA9IG5ldyBNZXRyaXhDb25maWcoJ0FQUC1JRC1IRVJFJyk7XG4gKiAgLy8gU2V0IG90aGVyIGNvbmZpZyBwcm9wZXJ0aWVzLlxuICogIG1ldHJpeC5jcmVhdGUoY29uZmlnKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBNZXRyaXhBdHRyaWJ1dGlvblxuICogQGNsYXNzZXNcbiAqIE1ldHJpeENvbmZpZ1xuICogQGVudW1zXG4gKiBNZXRyaXhBdHRyaWJ1dGlvblN0YXR1c1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01ldHJpeCcsXG4gIHBsdWdpbjogJ2lyLm1ldHJpeC5zZGsnLFxuICBwbHVnaW5SZWY6ICdNZXRyaXgnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21ldHJpeG9yZy9NZXRyaXhTREstQ29yZG92YVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1ldHJpeCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGluaXRpYWxpemVzIE1ldHJpeCBTREtcbiAgICpcbiAgICogQHBhcmFtIHtNZXRyaXhDb25maWd9IGNvbmZpZyBNZXRyaXhDb25maWcgb2JqZWN0IHVzZWQgYXMgc3RhcnRpbmcgb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNyZWF0ZShjb25maWc6IE1ldHJpeENvbmZpZyk6IHZvaWQge31cblxuICAvKipcbiAgICogRnVuY3Rpb24gdXNlZCB0byBnZXQgU2Vzc2lvbiBOdW1iZXJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBzZXNzaW9uIG51bWJlciB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTZXNzaW9uTnVtKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhbiBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2x1ZyB0aGUgc2x1ZyBvZiB0aGUgZXZlbnQgdG8gYmUgdHJhY2tlZFxuICAgKiBAcGFyYW0ge01hcDxzdHJpbmcsIHN0cmluZz4gfCBvYmplY3R9IGF0dHJpYnV0ZXMgb3B0aW9uYWwgYXR0cmlidXRlcyBvZiB0aGUgZXZlbnQgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG5ld0V2ZW50KHNsdWc6IHN0cmluZywgYXR0cmlidXRlcz86IE1hcDxzdHJpbmcsIHN0cmluZz4gfCBvYmplY3QpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFkZHMgdGhlIHByb3ZpZGVkIGF0dHJpYnV0ZXMgdG8gYWxsIG1ldHJpeCBldmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtNYXA8c3RyaW5nLCBzdHJpbmc+IHwgb2JqZWN0fSBhdHRyaWJ1dGVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGFkZGVkIHRvIGFsbCBmdXR1cmUgZXZlbnRzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkVXNlckF0dHJpYnV0ZXMoYXR0cmlidXRlczogTWFwPHN0cmluZywgc3RyaW5nPiB8IG9iamVjdCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGEgcmV2ZW51ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2x1ZyB0aGUgc2x1ZyBvZiB0aGUgZXZlbnQgdG8gYmUgdHJhY2tlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW1vdW50IHRoZSBhbW91bnQgb2YgbW9uZXkgZ2FpbmVkIGJ5IHRoZSByZXZlbnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW5jeSAoT1BUSU9OQUwpIGN1cnJlbmN5IG9mIHRoZSBhbW91bnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9yZGVySWQgKE9QVElPTkFMKSBpZCBvZiB0aGUgcmV2ZW51ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG5ld1JldmVudWUoc2x1Zzogc3RyaW5nLCBhbW91bnQ6IG51bWJlciwgY3VycmVuY3k/OiBudW1iZXIsIG9yZGVySWQ/OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEJ5IG1ha2luZyB0aGlzIGNhbGwsIHRoZSBNZXRyaXggU0RLIHdpbGwgdHJ5IHRvIGZpbmQgaWYgdGhlcmUgaXMgYW55IG5ldyBhdHRyaWJ1dGlvbiBpbmZvIGluc2lkZSBvZiB0aGUgZGVlcCBsaW5rIGFuZCBpZiBhbnksIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgTWV0cml4IGJhY2tlbmQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBkZWVwbGlua1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFwcFdpbGxPcGVuVXJsKHVybDogc3RyaW5nKTogdm9pZCB7fVxufVxuIl19