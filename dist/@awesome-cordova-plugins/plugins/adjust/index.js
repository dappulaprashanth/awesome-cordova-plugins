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
var AdjustEvent = /** @class */ (function () {
    function AdjustEvent(eventToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.eventToken = eventToken;
    }
    AdjustEvent.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustEvent.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustEvent.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustEvent.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
    };
    AdjustEvent.prototype.setCallbackId = function (callbackId) {
        this.callbackId = callbackId;
    };
    return AdjustEvent;
}());
export { AdjustEvent };
var AdjustConfig = /** @class */ (function () {
    function AdjustConfig(appToken, environment) {
        this.delayStart = 0.0;
        this.logLevel = null;
        this.defaultTracker = null;
        this.urlStrategy = null;
        this.externalDeviceId = null;
        this.sendInBackground = null;
        this.shouldLaunchDeeplink = null;
        this.eventBufferingEnabled = null;
        this.userAgent = null;
        this.isDeviceKnown = null;
        this.needsCost = null;
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.processName = null; // Android only
        this.preinstallTrackingEnabled = null; // Android only
        this.preinstallFilePath = null; // Android only
        this.oaidReadingEnabled = null; // Android only
        this.allowiAdInfoReading = null; // iOS only
        this.allowIdfaReading = null; // iOS only
        this.allowAdServicesInfoReading = null; // iOS only
        this.attributionCallback = null;
        this.eventTrackingSucceededCallback = null;
        this.eventTrackingFailedCallback = null;
        this.sessionTrackingSucceededCallback = null;
        this.sessionTrackingFailedCallback = null;
        this.deferredDeeplinkCallback = null;
        this.conversionValueUpdatedCallback = null;
        this.appToken = appToken;
        this.environment = environment;
    }
    AdjustConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    AdjustConfig.prototype.setDelayStart = function (delayStart) {
        this.delayStart = delayStart;
    };
    AdjustConfig.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    AdjustConfig.prototype.setDefaultTracker = function (defaultTracker) {
        this.defaultTracker = defaultTracker;
    };
    AdjustConfig.prototype.setExternalDeviceId = function (externalDeviceId) {
        this.externalDeviceId = externalDeviceId;
    };
    AdjustConfig.prototype.setUrlStrategy = function (urlStrategy) {
        this.urlStrategy = urlStrategy;
    };
    AdjustConfig.prototype.setSendInBackground = function (sendInBackground) {
        this.sendInBackground = sendInBackground;
    };
    AdjustConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    AdjustConfig.prototype.setEventBufferingEnabled = function (eventBufferingEnabled) {
        this.eventBufferingEnabled = eventBufferingEnabled;
    };
    AdjustConfig.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    AdjustConfig.prototype.setDeviceKnown = function (isDeviceKnown) {
        this.isDeviceKnown = isDeviceKnown;
    };
    AdjustConfig.prototype.setNeedsCost = function (needsCost) {
        this.needsCost = needsCost;
    };
    AdjustConfig.prototype.setProcessName = function (processName) {
        this.processName = processName;
    };
    AdjustConfig.prototype.setPreinstallTrackingEnabled = function (preinstallTrackingEnabled) {
        this.preinstallTrackingEnabled = preinstallTrackingEnabled;
    };
    AdjustConfig.prototype.setPreinstallFilePath = function (preinstallFilePath) {
        this.preinstallFilePath = preinstallFilePath;
    };
    AdjustConfig.prototype.setOaidReadingEnabled = function (enableOaidReading) {
        this.oaidReadingEnabled = enableOaidReading;
    };
    AdjustConfig.prototype.setAllowiAdInfoReading = function (allowiAdInfoReading) {
        this.allowiAdInfoReading = allowiAdInfoReading;
    };
    AdjustConfig.prototype.setAllowIdfaReading = function (allowIdfaReading) {
        this.allowIdfaReading = allowIdfaReading;
    };
    AdjustConfig.prototype.setAllowAdServicesInfoReading = function (allowAdServicesInfoReading) {
        this.allowAdServicesInfoReading = allowAdServicesInfoReading;
    };
    AdjustConfig.prototype.setAttributionCallbackListener = function (attributionCallback) {
        this.attributionCallback = attributionCallback;
    };
    AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function (eventTrackingSucceededCallback) {
        this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function (eventTrackingFailedCallback) {
        this.eventTrackingFailedCallback = eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function (sessionTrackingSucceededCallback) {
        this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function (sessionTrackingFailedCallback) {
        this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function (deferredDeeplinkCallback) {
        this.deferredDeeplinkCallback = deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.setConversionValueUpdatedCallbackListener = function (conversionValueUpdatedCallback) {
        this.conversionValueUpdatedCallback = conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.getAttributionCallback = function () {
        return this.attributionCallback;
    };
    AdjustConfig.prototype.getEventTrackingSucceededCallback = function () {
        return this.eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getEventTrackingFailedCallback = function () {
        return this.eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.getSessionTrackingSucceededCallback = function () {
        return this.sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getSessionTrackingFailedCallback = function () {
        return this.sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.getDeferredDeeplinkCallback = function () {
        return this.deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.getConversionValueUpdatedCallback = function () {
        return this.conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.hasAttributionListener = function () {
        return this.attributionCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingSucceededListener = function () {
        return this.eventTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingFailedListener = function () {
        return this.eventTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingSucceededListener = function () {
        return this.sessionTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingFailedListener = function () {
        return this.sessionTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasDeferredDeeplinkCallbackListener = function () {
        return this.deferredDeeplinkCallback !== null;
    };
    AdjustConfig.prototype.hasConversionValueUpdatedCallbackListener = function () {
        return this.conversionValueUpdatedCallback !== null;
    };
    return AdjustConfig;
}());
export { AdjustConfig };
var AdjustAppStoreSubscription = /** @class */ (function () {
    function AdjustAppStoreSubscription(price, currency, transactionId, receipt) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.transactionId = transactionId;
        this.receipt = receipt;
    }
    AdjustAppStoreSubscription.prototype.setTransactionDate = function (transactionDate) {
        this.transactionDate = transactionDate;
    };
    AdjustAppStoreSubscription.prototype.setSalesRegion = function (salesRegion) {
        this.salesRegion = salesRegion;
    };
    AdjustAppStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAppStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustAppStoreSubscription;
}());
export { AdjustAppStoreSubscription };
var AdjustPlayStoreSubscription = /** @class */ (function () {
    function AdjustPlayStoreSubscription(price, currency, sku, orderId, signature, purchaseToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.sku = sku;
        this.orderId = orderId;
        this.signature = signature;
        this.purchaseToken = purchaseToken;
    }
    AdjustPlayStoreSubscription.prototype.setPurchaseTime = function (purchaseTime) {
        this.purchaseTime = purchaseTime;
    };
    AdjustPlayStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustPlayStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustPlayStoreSubscription;
}());
export { AdjustPlayStoreSubscription };
var AdjustThirdPartySharing = /** @class */ (function () {
    function AdjustThirdPartySharing(isEnabled) {
        this.granularOptions = [];
        this.isEnabled = isEnabled;
    }
    AdjustThirdPartySharing.prototype.addGranularOption = function (partnerName, key, value) {
        this.granularOptions.push(partnerName);
        this.granularOptions.push(key);
        this.granularOptions.push(value);
    };
    return AdjustThirdPartySharing;
}());
export { AdjustThirdPartySharing };
var AdjustAdRevenue = /** @class */ (function () {
    function AdjustAdRevenue(source) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.source = source;
    }
    AdjustAdRevenue.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustAdRevenue.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAdRevenue.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustAdRevenue.prototype.setAdImpressionsCount = function (adImpressionsCount) {
        this.adImpressionsCount = adImpressionsCount;
    };
    AdjustAdRevenue.prototype.setAdRevenueNetwork = function (adRevenueNetwork) {
        this.adRevenueNetwork = adRevenueNetwork;
    };
    AdjustAdRevenue.prototype.setAdRevenueUnit = function (adRevenueUnit) {
        this.adRevenueUnit = adRevenueUnit;
    };
    AdjustAdRevenue.prototype.setAdRevenuePlacement = function (adRevenuePlacement) {
        this.adRevenuePlacement = adRevenuePlacement;
    };
    return AdjustAdRevenue;
}());
export { AdjustAdRevenue };
export var AdjustEnvironment;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(AdjustEnvironment || (AdjustEnvironment = {}));
export var AdjustLogLevel;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(AdjustLogLevel || (AdjustLogLevel = {}));
export var AdjustUrlStrategy;
(function (AdjustUrlStrategy) {
    AdjustUrlStrategy["India"] = "india";
    AdjustUrlStrategy["China"] = "china";
    AdjustUrlStrategy["DataResidencyEU"] = "data-residency-eu";
    AdjustUrlStrategy["DataResidencyTR"] = "data-residency-tr";
    AdjustUrlStrategy["DataResidencyUS"] = "data-residency-us";
})(AdjustUrlStrategy || (AdjustUrlStrategy = {}));
export var AdjustAdRevenueSource;
(function (AdjustAdRevenueSource) {
    AdjustAdRevenueSource["AdRevenueSourceAppLovinMAX"] = "applovin_max_sdk";
    AdjustAdRevenueSource["AdRevenueSourceMopub"] = "mopub";
    AdjustAdRevenueSource["AdRevenueSourceAdMob"] = "admob_sdk";
    AdjustAdRevenueSource["AdRevenueSourceIronsource"] = "ironsource_sdk";
})(AdjustAdRevenueSource || (AdjustAdRevenueSource = {}));
var AdjustOriginal = /** @class */ (function (_super) {
    __extends(AdjustOriginal, _super);
    function AdjustOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdjustOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    AdjustOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    AdjustOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AdjustOriginal.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    AdjustOriginal.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    AdjustOriginal.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    AdjustOriginal.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    AdjustOriginal.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    AdjustOriginal.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    AdjustOriginal.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    AdjustOriginal.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    AdjustOriginal.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    AdjustOriginal.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    AdjustOriginal.pluginName = "Adjust";
    AdjustOriginal.plugin = "com.adjust.sdk";
    AdjustOriginal.pluginRef = "Adjust";
    AdjustOriginal.repo = "https://github.com/adjust/cordova_sdk";
    AdjustOriginal.platforms = ["Android", "iOS"];
    return AdjustOriginal;
}(AwesomeCordovaNativePlugin));
var Adjust = new AdjustOriginal();
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRqdXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVcxRixxQkFBWSxVQUFrQjtRQUh0Qix1QkFBa0IsR0FBYSxFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBR3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLFFBQWdCO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBb0IsR0FBcEIsVUFBcUIsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBcUI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFD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QUF1QjtJQVE3QyxrREFBaUM7Ozs7OztpQkFqd0JuQztFQTBmNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQWRqdXN0RXZlbnQge1xuICBwcml2YXRlIGV2ZW50VG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tJZDogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihldmVudFRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLmV2ZW50VG9rZW4gPSBldmVudFRva2VuO1xuICB9XG5cbiAgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBzZXRUcmFuc2FjdGlvbklkKHRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xuICAgIHRoaXMudHJhbnNhY3Rpb25JZCA9IHRyYW5zYWN0aW9uSWQ7XG4gIH1cblxuICBzZXRDYWxsYmFja0lkKGNhbGxiYWNrSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2FsbGJhY2tJZCA9IGNhbGxiYWNrSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdENvbmZpZyB7XG4gIHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQ7XG4gIHByaXZhdGUgc2RrUHJlZml4OiBzdHJpbmc7XG4gIHByaXZhdGUgZGVsYXlTdGFydCA9IDAuMDtcbiAgcHJpdmF0ZSBsb2dMZXZlbDogQWRqdXN0TG9nTGV2ZWwgPSBudWxsO1xuICBwcml2YXRlIGRlZmF1bHRUcmFja2VyOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHVybFN0cmF0ZWd5OiBBZGp1c3RVcmxTdHJhdGVneSA9IG51bGw7XG4gIHByaXZhdGUgZXh0ZXJuYWxEZXZpY2VJZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBzZW5kSW5CYWNrZ3JvdW5kOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBzaG91bGRMYXVuY2hEZWVwbGluazogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSB1c2VyQWdlbnQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgaXNEZXZpY2VLbm93bjogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgbmVlZHNDb3N0OiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBzZWNyZXRJZDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMTogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMjogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMzogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvNDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBwcm9jZXNzTmFtZTogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIHByZWluc3RhbGxGaWxlUGF0aDogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgb2FpZFJlYWRpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgYWxsb3dJZGZhUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuXG4gIHByaXZhdGUgYXR0cmlidXRpb25DYWxsYmFjazogKGF0dHJpYnV0aW9uOiBBZGp1c3RBdHRyaWJ1dGlvbikgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50RmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uU3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjazogKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQpIHtcbiAgICB0aGlzLmFwcFRva2VuID0gYXBwVG9rZW47XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlY3JldElkID0gc2VjcmV0SWQ7XG4gICAgdGhpcy5pbmZvMSA9IGluZm8xO1xuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcbiAgICB0aGlzLmluZm8zID0gaW5mbzM7XG4gICAgdGhpcy5pbmZvNCA9IGluZm80O1xuICB9XG5cbiAgc2V0RGVsYXlTdGFydChkZWxheVN0YXJ0OiBudW1iZXIpIHtcbiAgICB0aGlzLmRlbGF5U3RhcnQgPSBkZWxheVN0YXJ0O1xuICB9XG5cbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsKSB7XG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRyYWNrZXIoZGVmYXVsdFRyYWNrZXI6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdFRyYWNrZXIgPSBkZWZhdWx0VHJhY2tlcjtcbiAgfVxuXG4gIHNldEV4dGVybmFsRGV2aWNlSWQoZXh0ZXJuYWxEZXZpY2VJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5leHRlcm5hbERldmljZUlkID0gZXh0ZXJuYWxEZXZpY2VJZDtcbiAgfVxuXG4gIHNldFVybFN0cmF0ZWd5KHVybFN0cmF0ZWd5OiBBZGp1c3RVcmxTdHJhdGVneSkge1xuICAgIHRoaXMudXJsU3RyYXRlZ3kgPSB1cmxTdHJhdGVneTtcbiAgfVxuXG4gIHNldFNlbmRJbkJhY2tncm91bmQoc2VuZEluQmFja2dyb3VuZDogYm9vbGVhbikge1xuICAgIHRoaXMuc2VuZEluQmFja2dyb3VuZCA9IHNlbmRJbkJhY2tncm91bmQ7XG4gIH1cblxuICBzZXRTaG91bGRMYXVuY2hEZWVwbGluayhzaG91bGRMYXVuY2hEZWVwbGluazogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvdWxkTGF1bmNoRGVlcGxpbmsgPSBzaG91bGRMYXVuY2hEZWVwbGluaztcbiAgfVxuXG4gIHNldEV2ZW50QnVmZmVyaW5nRW5hYmxlZChldmVudEJ1ZmZlcmluZ0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV2ZW50QnVmZmVyaW5nRW5hYmxlZCA9IGV2ZW50QnVmZmVyaW5nRW5hYmxlZDtcbiAgfVxuXG4gIHNldFVzZXJBZ2VudCh1c2VyQWdlbnQ6IHN0cmluZykge1xuICAgIHRoaXMudXNlckFnZW50ID0gdXNlckFnZW50O1xuICB9XG5cbiAgc2V0RGV2aWNlS25vd24oaXNEZXZpY2VLbm93bjogYm9vbGVhbikge1xuICAgIHRoaXMuaXNEZXZpY2VLbm93biA9IGlzRGV2aWNlS25vd247XG4gIH1cblxuICBzZXROZWVkc0Nvc3QobmVlZHNDb3N0OiBib29sZWFuKSB7XG4gICAgdGhpcy5uZWVkc0Nvc3QgPSBuZWVkc0Nvc3Q7XG4gIH1cblxuICBzZXRQcm9jZXNzTmFtZShwcm9jZXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xuICB9XG5cbiAgc2V0UHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZChwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkID0gcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDtcbiAgfVxuXG4gIHNldFByZWluc3RhbGxGaWxlUGF0aChwcmVpbnN0YWxsRmlsZVBhdGg6IHN0cmluZykge1xuICAgIHRoaXMucHJlaW5zdGFsbEZpbGVQYXRoID0gcHJlaW5zdGFsbEZpbGVQYXRoO1xuICB9XG5cbiAgc2V0T2FpZFJlYWRpbmdFbmFibGVkKGVuYWJsZU9haWRSZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5vYWlkUmVhZGluZ0VuYWJsZWQgPSBlbmFibGVPYWlkUmVhZGluZztcbiAgfVxuXG4gIHNldEFsbG93aUFkSW5mb1JlYWRpbmcoYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dpQWRJbmZvUmVhZGluZyA9IGFsbG93aUFkSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRBbGxvd0lkZmFSZWFkaW5nKGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93SWRmYVJlYWRpbmcgPSBhbGxvd0lkZmFSZWFkaW5nO1xuICB9XG5cbiAgc2V0QWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmcoYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nID0gYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGlvbkNhbGxiYWNrTGlzdGVuZXIoYXR0cmlidXRpb25DYWxsYmFjazogKGF0dHJpYnV0aW9uOiBBZGp1c3RBdHRyaWJ1dGlvbikgPT4gdm9pZCkge1xuICAgIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjayA9IGF0dHJpYnV0aW9uQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRFdmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRTdWNjZXNzKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRFdmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2tMaXN0ZW5lcihldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRGYWlsdXJlKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgPSBldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFja0xpc3RlbmVyKFxuICAgIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5zZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayA9IHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0U2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2tMaXN0ZW5lcihzZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKHNlc3Npb246IEFkanVzdFNlc3Npb25GYWlsdXJlKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjayA9IHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayA9IGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcbiAgfVxuXG4gIHNldENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFja0xpc3RlbmVyKGNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjazogKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2sgPSBjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEF0dHJpYnV0aW9uQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNBdHRyaWJ1dGlvbkxpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0V2ZW50VHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0V2ZW50VHJhY2tpbmdGYWlsZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc1Nlc3Npb25UcmFja2luZ1N1Y2NlZWRlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdGYWlsZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uIHtcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhbnNhY3Rpb25JZDogc3RyaW5nO1xuICBwcml2YXRlIHJlY2VpcHQ6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbkRhdGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzYWxlc1JlZ2lvbjogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmcsIHJlY2VpcHQ6IHN0cmluZykge1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcbiAgICB0aGlzLnJlY2VpcHQgPSByZWNlaXB0O1xuICB9XG5cbiAgc2V0VHJhbnNhY3Rpb25EYXRlKHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2FjdGlvbkRhdGUgPSB0cmFuc2FjdGlvbkRhdGU7XG4gIH1cblxuICBzZXRTYWxlc1JlZ2lvbihzYWxlc1JlZ2lvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zYWxlc1JlZ2lvbiA9IHNhbGVzUmVnaW9uO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9uIHtcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgc2t1OiBzdHJpbmc7XG4gIHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIHNpZ25hdHVyZTogc3RyaW5nO1xuICBwcml2YXRlIHB1cmNoYXNlVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBwdXJjaGFzZVRpbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgc2t1OiBzdHJpbmcsIG9yZGVySWQ6IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcsIHB1cmNoYXNlVG9rZW46IHN0cmluZykge1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5za3UgPSBza3U7XG4gICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLnB1cmNoYXNlVG9rZW4gPSBwdXJjaGFzZVRva2VuO1xuICB9XG5cbiAgc2V0UHVyY2hhc2VUaW1lKHB1cmNoYXNlVGltZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wdXJjaGFzZVRpbWUgPSBwdXJjaGFzZVRpbWU7XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RUaGlyZFBhcnR5U2hhcmluZyB7XG4gIHByaXZhdGUgaXNFbmFibGVkOiBib29sZWFuO1xuICBwcml2YXRlIGdyYW51bGFyT3B0aW9uczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgfVxuXG4gIGFkZEdyYW51bGFyT3B0aW9uKHBhcnRuZXJOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaChwYXJ0bmVyTmFtZSk7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaChrZXkpO1xuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RBZFJldmVudWUge1xuICBwcml2YXRlIHNvdXJjZTogc3RyaW5nO1xuICBwcml2YXRlIHJldmVudWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIGFkSW1wcmVzc2lvbnNDb3VudDogbnVtYmVyO1xuICBwcml2YXRlIGFkUmV2ZW51ZU5ldHdvcms6IHN0cmluZztcbiAgcHJpdmF0ZSBhZFJldmVudWVVbml0OiBzdHJpbmc7XG4gIHByaXZhdGUgYWRSZXZlbnVlUGxhY2VtZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIH1cblxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldEFkSW1wcmVzc2lvbnNDb3VudChhZEltcHJlc3Npb25zQ291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuYWRJbXByZXNzaW9uc0NvdW50ID0gYWRJbXByZXNzaW9uc0NvdW50O1xuICB9XG5cbiAgc2V0QWRSZXZlbnVlTmV0d29yayhhZFJldmVudWVOZXR3b3JrOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkUmV2ZW51ZU5ldHdvcmsgPSBhZFJldmVudWVOZXR3b3JrO1xuICB9XG5cbiAgc2V0QWRSZXZlbnVlVW5pdChhZFJldmVudWVVbml0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkUmV2ZW51ZVVuaXQgPSBhZFJldmVudWVVbml0O1xuICB9XG5cbiAgc2V0QWRSZXZlbnVlUGxhY2VtZW50KGFkUmV2ZW51ZVBsYWNlbWVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZFJldmVudWVQbGFjZW1lbnQgPSBhZFJldmVudWVQbGFjZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RBdHRyaWJ1dGlvbiB7XG4gIHRyYWNrZXJUb2tlbjogc3RyaW5nO1xuICB0cmFja2VyTmFtZTogc3RyaW5nO1xuICBuZXR3b3JrOiBzdHJpbmc7XG4gIGNhbXBhaWduOiBzdHJpbmc7XG4gIGFkZ3JvdXA6IHN0cmluZztcbiAgY3JlYXRpdmU6IHN0cmluZztcbiAgY2xpY2tMYWJlbDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGNvc3RUeXBlOiBzdHJpbmc7XG4gIGNvc3RBbW91bnQ6IHN0cmluZztcbiAgY29zdEN1cnJlbmN5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0U2Vzc2lvblN1Y2Nlc3Mge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25GYWlsdXJlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICB3aWxsUmV0cnk6IGJvb2xlYW47XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdEV2ZW50U3VjY2VzcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xuICBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdEV2ZW50RmFpbHVyZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xuICB3aWxsUmV0cnk6IGJvb2xlYW47XG4gIGNhbGxiYWNrSWQ6IHN0cmluZztcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdEVudmlyb25tZW50IHtcbiAgU2FuZGJveCA9ICdzYW5kYm94JyxcbiAgUHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0TG9nTGV2ZWwge1xuICBWZXJib3NlID0gJ1ZFUkJPU0UnLFxuICBEZWJ1ZyA9ICdERUJVRycsXG4gIEluZm8gPSAnSU5GTycsXG4gIFdhcm4gPSAnV0FSTicsXG4gIEVycm9yID0gJ0VSUk9SJyxcbiAgQXNzZXJ0ID0gJ0FTU0VSVCcsXG4gIFN1cHByZXNzID0gJ1NVUFBSRVNTJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0VXJsU3RyYXRlZ3kge1xuICBJbmRpYSA9ICdpbmRpYScsXG4gIENoaW5hID0gJ2NoaW5hJyxcbiAgRGF0YVJlc2lkZW5jeUVVID0gJ2RhdGEtcmVzaWRlbmN5LWV1JyxcbiAgRGF0YVJlc2lkZW5jeVRSID0gJ2RhdGEtcmVzaWRlbmN5LXRyJyxcbiAgRGF0YVJlc2lkZW5jeVVTID0gJ2RhdGEtcmVzaWRlbmN5LXVzJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0QWRSZXZlbnVlU291cmNlIHtcbiAgQWRSZXZlbnVlU291cmNlQXBwTG92aW5NQVggPSAnYXBwbG92aW5fbWF4X3NkaycsXG4gIEFkUmV2ZW51ZVNvdXJjZU1vcHViID0gJ21vcHViJyxcbiAgQWRSZXZlbnVlU291cmNlQWRNb2IgPSAnYWRtb2Jfc2RrJyxcbiAgQWRSZXZlbnVlU291cmNlSXJvbnNvdXJjZSA9ICdpcm9uc291cmNlX3NkaycsXG59XG5cbi8qKlxuICogQG5hbWUgQWRqdXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgdGhlIElvbmljIENvcmRvdmEgU0RLIG9mIEFkanVzdOKEoi4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgQWRqdXN04oSiIGF0IGFkanVzdC5jb20uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb20uYWRqdXN0LnNka2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBZGp1c3QgQ29yZG92YSBTREtdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGspXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICBpbXBvcnQgeyBBZGp1c3QsIEFkanVzdENvbmZpZywgQWRqdXN0RW52aXJvbm1lbnQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYWRqdXN0L25neCc7XG4gKlxuICogIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRqdXN0OiBBZGp1c3QpIHsgfVxuICpcbiAqICAuLi5cbiAqXG4gKiAgY29uc3QgY29uZmlnID0gbmV3IEFkanVzdENvbmZpZygnQVBQLVRPS0VOLUhFUkUnLCBBZGp1c3RFbnZpcm9ubWVudC5TYW5kYm94KTtcbiAqICBjb25maWcubG9nTGV2ZWwgPSBBZGp1c3RMb2dMZXZlbC5WZXJib3NlO1xuICogIC8vIFNldCBvdGhlciBjb25maWcgcHJvcGVydGllcy5cbiAqICBhZGp1c3QuY3JlYXRlKGNvbmZpZyk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQWRqdXN0QXR0cmlidXRpb25cbiAqIEFkanVzdFNlc3Npb25TdWNjZXNzXG4gKiBBZGp1c3RTZXNzaW9uRmFpbHVyZVxuICogQWRqdXN0RXZlbnRTdWNjZXNzXG4gKiBBZGp1c3RFdmVudEZhaWx1cmVcbiAqIEBjbGFzc2VzXG4gKiBBZGp1c3RFdmVudFxuICogQWRqdXN0Q29uZmlnXG4gKiBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvblxuICogQWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9uXG4gKiBBZGp1c3RUaGlyZFBhcnR5U2hhcmluZ1xuICogQWRqdXN0QWRSZWVudWVcbiAqIEBlbnVtc1xuICogQWRqdXN0RW52aXJvbm1lbnRcbiAqIEFkanVzdExvZ0xldmVsXG4gKiBBZGp1c3RVcmxTdHJhdGVneVxuICogQWRqdXN0QWRSZXZlbnVlU291cmNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRqdXN0JyxcbiAgcGx1Z2luOiAnY29tLmFkanVzdC5zZGsnLFxuICBwbHVnaW5SZWY6ICdBZGp1c3QnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkanVzdC9jb3Jkb3ZhX3NkaycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGp1c3QgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyBBZGp1c3QgU0RLXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0Q29uaWd9IGNvbmZpZyBBZGp1c3QgY29uZmlnIG9iamVjdCB1c2VkIGFzIHN0YXJ0aW5nIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjcmVhdGUoY29uZmlnOiBBZGp1c3RDb25maWcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhbiBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdEV2ZW50fSBldmVudCBBZGp1c3QgZXZlbnQgb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja0V2ZW50KGV2ZW50OiBBZGp1c3RFdmVudCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIEFwcCBTdG9yZSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIEFkanVzdCBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tBcHBTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgUGxheSBTdG9yZSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgUGxheSBTdG9yZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja1BsYXlTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIHRoaXJkIHBhcnR5IHNoYXJpbmcgY2hvaWNlXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmd9IHRoaXJkUGFydHlTaGFyaW5nIEFkanVzdCB0aGlyZCBwYXJ0eSBzaGFyaW5nIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tUaGlyZFBhcnR5U2hhcmluZyh0aGlyZFBhcnR5U2hhcmluZzogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhZCByZXZlbnVlIGRhdGFcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RBZFJldmVudWVTb3VyY2V9IHNvdXJjZSBBZCByZXZlbnVlIHNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZCBBZCByZXZlbnVlIEpTT04gc3RyaW5nIHBheWxvYWRcbiAgICovXG4gIHRyYWNrQWRSZXZlbnVlKHNvdXJjZTogQWRqdXN0QWRSZXZlbnVlU291cmNlLCBwYXlsb2FkOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYWQgcmV2ZW51ZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0QWRSZXZlbnVlfSBhZFJldmVudWUgQWRqdXN0IGFkIHJldmVudWUgb2JqZWN0XG4gICAqL1xuICB0cmFja0FkUmV2ZW51ZShhZFJldmVudWU6IEFkanVzdEFkUmV2ZW51ZSk6IHZvaWQ7XG5cbiAgLy8gQW5kIHR5cGVzY3JpcHQgaGlkZXMgdGhpcywgc28gdGhlIGNsaWVudCB3aWxsIGJlIGFibGUgY2FsbCBvbmx5IG1ldGhvZHMgYWJvdmVcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrQWRSZXZlbnVlKHNvdXJjZU9yQWRSZXZlbnVlOiBhbnksIHBheWxvYWQ/OiBhbnkpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBtZWFzdXJlbWVudCBjb25zZW50IGNob2ljZVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1lYXN1cmVtZW50Q29uc2VudCBzZXQgbWVhc3VyZW1lbnQgY29uc2VudCB0byB0cnVlIG9yIGZhbHNlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tNZWFzdXJlbWVudENvbnNlbnQobWVhc3VyZW1lbnRDb25zZW50OiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBzZXRzIG9mZmxpbmUgbW9kZSBvbiBvciBvZmZcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIHNldCB0byB0cnVlIGZvciBvZmZsaW5lIG1vZGUgb25cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPZmZsaW5lTW9kZShlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBCeSBtYWtpbmcgdGhpcyBjYWxsLCB0aGUgQWRqdXN0IFNESyB3aWxsIHRyeSB0byBmaW5kIGlmIHRoZXJlIGlzIGFueSBuZXcgYXR0cmlidXRpb24gaW5mbyBpbnNpZGUgb2YgdGhlIGRlZXAgbGluayBhbmQgaWYgYW55LCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIEFkanVzdCBiYWNrZW5kLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCBvZiB0aGUgZGVlcGxpbmtcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhcHBXaWxsT3BlblVybCh1cmw6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogWW91IGNhbiBkaXNhYmxlL2VuYWJsZSB0aGUgQWRqdXN0IFNESyBmcm9tIHRyYWNraW5nIGJ5IGludm9raW5nIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBTREtcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvIHNlbmQgdXMgdGhlIHB1c2ggbm90aWZpY2F0aW9uIHRva2VuLCBhZGQgdGhlIGZvbGxvd2luZyBjYWxsIHRvIEFkanVzdCB3aGVuZXZlciB5b3UgZ2V0IHlvdXIgdG9rZW4gaW4gdGhlIGFwcCBvciB3aGVuIGl0IGdldHMgdXBkYXRlZC5cbiAgICogUHVzaCB0b2tlbnMgYXJlIHVzZWQgZm9yIEF1ZGllbmNlIEJ1aWxkZXIgYW5kIGNsaWVudCBjYWxsYmFja3MsIGFuZCB0aGV5IGFyZSByZXF1aXJlZCBmb3IgdGhlIHVwY29taW5nIHVuaW5zdGFsbCB0cmFja2luZyBmZWF0dXJlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHVzaFRva2VuIHB1c2ggdG9rZW4gdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQdXNoVG9rZW4ocHVzaFRva2VuOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBBZGp1c3QgU0RLIGlzIGN1cnJlbnRseSBlbmFibGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBhY2NvcmRhbmNlIHdpdGggYXJ0aWNsZSAxNyBvZiB0aGUgRVUncyBHZW5lcmFsIERhdGEgUHJvdGVjdGlvbiBSZWd1bGF0aW9uIChHRFBSKSwgeW91IGNhbiBub3RpZnkgQWRqdXN0IHdoZW4gYSB1c2VyIGhhcyBleGVyY2lzZWQgdGhlaXIgcmlnaHQgdG8gYmUgZm9yZ290dGVuLlxuICAgKiBDYWxsaW5nIHRoZSBmb2xsb3dpbmcgbWV0aG9kIHdpbGwgaW5zdHJ1Y3QgdGhlIEFkanVzdCBTREsgdG8gY29tbXVuaWNhdGUgdGhlIHVzZXIncyBjaG9pY2UgdG8gYmUgZm9yZ290dGVuIHRvIHRoZSBBZGp1c3QgYmFja2VuZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdkcHJGb3JnZXRNZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gbm93IG5vdGlmeSBBZGp1c3Qgd2hlbiBhIHVzZXIgaGFzIGV4ZXJjaXNlZCB0aGVpciByaWdodCB0byBzdG9wIHNoYXJpbmcgdGhlaXIgZGF0YSB3aXRoIHBhcnRuZXJzIGZvciBtYXJrZXRpbmcgcHVycG9zZXMsIGJ1dCBoYXMgYWxsb3dlZCBpdCB0byBiZSBzaGFyZWQgZm9yIHN0YXRpc3RpY3MgcHVycG9zZXMuXG4gICAqIENhbGxpbmcgdGhlIGZvbGxvd2luZyBtZXRob2Qgd2lsbCBpbnN0cnVjdCB0aGUgQWRqdXN0IFNESyB0byBjb21tdW5pY2F0ZSB0aGUgdXNlcidzIGNob2ljZSB0byBkaXNhYmxlIGRhdGEgc2hhcmluZyB0byB0aGUgQWRqdXN0IGJhY2tlbmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkaXNhYmxlVGhpcmRQYXJ0eVNoYXJpbmcoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB1c2VkIHRvIGdldCBHb29nbGUgQWRJZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGdvb2dsZSBBZElkIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEdvb2dsZUFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSWYgeW91IG5lZWQgdG8gb2J0YWluIHRoZSBBbWF6b24gQWR2ZXJ0aXNpbmcgSUQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbmF6aWIgYWR2LiBJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbWF6b25BZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIG9idGFpbiB0aGUgSURGQSwgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggSURGQSBzdHJpbmcgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SWRmYSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZXZlcnkgZGV2aWNlIHdpdGggeW91ciBhcHAgaW5zdGFsbGVkIG9uIGl0LCB0aGUgQWRqdXN0IGJhY2tlbmQgZ2VuZXJhdGVzIGEgdW5pcXVlIEFkanVzdCBkZXZpY2UgaWRlbnRpZmllciAoYWRpZCkuXG4gICAqIEluIG9yZGVyIHRvIG9idGFpbiB0aGlzIGlkZW50aWZpZXIsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFkaWQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWRpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3Ugd2FudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgYSB1c2VyJ3MgY3VycmVudCBhdHRyaWJ1dGlvbiB3aGVuZXZlciB5b3UgbmVlZCBpdCwgeW91IGNhbiBtYWtlIGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFkanVzdEF0dHJpYnV0aW9uPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBBZGp1c3RBdHRyaWJ1dGlvbiBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXR0cmlidXRpb24oKTogUHJvbWlzZTxBZGp1c3RBdHRyaWJ1dGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluZm9ybWF0aW9uIGFib3V0IHZlcnNpb24gb2YgdGhlIFNESyB1c2VkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggc2RrIHZlcnNpb24gaW5mb3JtYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdXNlZCB0byBhZGQgc2Vzc2lvbiBjYWxsYmFjayBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZFNlc3Npb25DYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc3BlY2lmaWMgc2Vzc2lvbiBjYWxsYmFjayBwYXJhbWV0ZXIgYnkgcGFzc2luZyB0aGUgZGVzaXJpbmcga2V5IHRvIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlU2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVycyBoYXZlIHRvIGJlIHJlbW92ZWQsIGNhbGwgdGhpcyBtZXRob2RcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZXNldFNlc3Npb25DYWxsYmFja1BhcmFtZXRlcnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdXNlZCB0byBhZGQgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkU2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXIgYnkgcGFzc2luZyB0aGUgZGVzaXJpbmcga2V5IHRvIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlU2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIGFsbCBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlcnMgaGF2ZSB0byBiZSByZW1vdmVkLCBjYWxsIHRoaXMgbWV0aG9kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVzZXRTZXNzaW9uUGFydG5lclBhcmFtZXRlcnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjYWxsIHdpbGwgbWFrZSB0aGUgQWRqdXN0IFNESyBzZW5kIHRoZSBpbml0aWFsIGluc3RhbGwgc2Vzc2lvbiBhbmQgYW55IGV2ZW50cyBjcmVhdGVkLCBpZiB0aGV5IHdlcmUgbm90IHNlbnQgYWZ0ZXIgZGVsYXkgc3RhcnQgd2FzIHNldCBhbmQgaXQncyBkZWxheSBleHBpcmVkLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNlbmRGaXJzdFBhY2thZ2VzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVxdWVzdCBBZGp1c3QgU0RLIHRvIHNob3cgcG9wIHVwIGRpYWxvZyBmb3IgYXNraW5nIHVzZXIncyBjb25zZW50IHRvIGJlIHRyYWNrZWQuXG4gICAqIEluIG9yZGVyIHRvIGRvIHRoaXMsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHVzZXIncyBjb25zZW50IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RUcmFja2luZ0F1dGhvcml6YXRpb25XaXRoQ29tcGxldGlvbkhhbmRsZXIoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiB1cGRhdGUgU0tBZE5ldHdvcmsgY29udmVyc2lvbiB2YWx1ZSB3aXRoIGNhbGxpbmcgdGhpcyBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnZlcnNpb25WYWx1ZSBjb252ZXJzaW9uIHZhbHVlIGZvciB0aGUgdXNlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVwZGF0ZUNvbnZlcnNpb25WYWx1ZShjb252ZXJzaW9uVmFsdWU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogVG8gb2J0YWluIHRoZSBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXMgaW4gaU9TLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwVHJhY2tpbmdBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG59Il19