import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var Adjust = /** @class */ (function (_super) {
    __extends(Adjust, _super);
    function Adjust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adjust.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    Adjust.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    Adjust.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    Adjust.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    Adjust.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    Adjust.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    Adjust.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    Adjust.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    Adjust.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    Adjust.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    Adjust.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    Adjust.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    Adjust.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    Adjust.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    Adjust.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    Adjust.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    Adjust.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    Adjust.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    Adjust.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    Adjust.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    Adjust.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    Adjust.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    Adjust.pluginName = "Adjust";
    Adjust.plugin = "com.adjust.sdk";
    Adjust.pluginRef = "Adjust";
    Adjust.repo = "https://github.com/adjust/cordova_sdk";
    Adjust.platforms = ["Android", "iOS"];
    Adjust.decorators = [
        { type: Injectable }
    ];
    return Adjust;
}(AwesomeCordovaNativePlugin));
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRqdXN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVcxRixxQkFBWSxVQUFrQjtRQUh0Qix1QkFBa0IsR0FBYSxFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBR3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLFFBQWdCO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBb0IsR0FBcEIsVUFBcUIsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBcUI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFJ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QWlCO0lBU2pCLGtFQUFpRDtJQVVqRCxzQ0FBcUIsYUFBQyxlQUF1QjtJQVE3QyxrREFBaUM7Ozs7Ozs7Z0JBeFFsQyxVQUFVOztpQkF6Zlg7RUEwZjRCLDBCQUEwQjtTQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEFkanVzdEV2ZW50IHtcbiAgcHJpdmF0ZSBldmVudFRva2VuOiBzdHJpbmc7XG4gIHByaXZhdGUgcmV2ZW51ZTogbnVtYmVyO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhbnNhY3Rpb25JZDogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoZXZlbnRUb2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5ldmVudFRva2VuID0gZXZlbnRUb2tlbjtcbiAgfVxuXG4gIHNldFJldmVudWUocmV2ZW51ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgc2V0VHJhbnNhY3Rpb25JZCh0cmFuc2FjdGlvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSB0cmFuc2FjdGlvbklkO1xuICB9XG5cbiAgc2V0Q2FsbGJhY2tJZChjYWxsYmFja0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbGxiYWNrSWQgPSBjYWxsYmFja0lkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RDb25maWcge1xuICBwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XG4gIHByaXZhdGUgZW52aXJvbm1lbnQ6IEFkanVzdEVudmlyb25tZW50O1xuICBwcml2YXRlIHNka1ByZWZpeDogc3RyaW5nO1xuICBwcml2YXRlIGRlbGF5U3RhcnQgPSAwLjA7XG4gIHByaXZhdGUgbG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0VHJhY2tlcjogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSB1cmxTdHJhdGVneTogQWRqdXN0VXJsU3RyYXRlZ3kgPSBudWxsO1xuICBwcml2YXRlIGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgc2VuZEluQmFja2dyb3VuZDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIGV2ZW50QnVmZmVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgdXNlckFnZW50OiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIGlzRGV2aWNlS25vd246IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIG5lZWRzQ29zdDogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgc2VjcmV0SWQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzE6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzI6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzM6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgaW5mbzQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgcHJvY2Vzc05hbWU6IHN0cmluZyA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIHByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQ6IGJvb2xlYW4gPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBwcmVpbnN0YWxsRmlsZVBhdGg6IHN0cmluZyA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIG9haWRSZWFkaW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIGFsbG93aUFkSW5mb1JlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuICBwcml2YXRlIGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuICBwcml2YXRlIGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcblxuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudFN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChjb252ZXJzaW9uVmFsdWU6IG51bWJlcikgPT4gdm9pZCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXBwVG9rZW46IHN0cmluZywgZW52aXJvbm1lbnQ6IEFkanVzdEVudmlyb25tZW50KSB7XG4gICAgdGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgfVxuXG4gIHNldEFwcFNlY3JldChzZWNyZXRJZDogbnVtYmVyLCBpbmZvMTogbnVtYmVyLCBpbmZvMjogbnVtYmVyLCBpbmZvMzogbnVtYmVyLCBpbmZvNDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWNyZXRJZCA9IHNlY3JldElkO1xuICAgIHRoaXMuaW5mbzEgPSBpbmZvMTtcbiAgICB0aGlzLmluZm8yID0gaW5mbzI7XG4gICAgdGhpcy5pbmZvMyA9IGluZm8zO1xuICAgIHRoaXMuaW5mbzQgPSBpbmZvNDtcbiAgfVxuXG4gIHNldERlbGF5U3RhcnQoZGVsYXlTdGFydDogbnVtYmVyKSB7XG4gICAgdGhpcy5kZWxheVN0YXJ0ID0gZGVsYXlTdGFydDtcbiAgfVxuXG4gIHNldExvZ0xldmVsKGxvZ0xldmVsOiBBZGp1c3RMb2dMZXZlbCkge1xuICAgIHRoaXMubG9nTGV2ZWwgPSBsb2dMZXZlbDtcbiAgfVxuXG4gIHNldERlZmF1bHRUcmFja2VyKGRlZmF1bHRUcmFja2VyOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRUcmFja2VyID0gZGVmYXVsdFRyYWNrZXI7XG4gIH1cblxuICBzZXRFeHRlcm5hbERldmljZUlkKGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZXh0ZXJuYWxEZXZpY2VJZCA9IGV4dGVybmFsRGV2aWNlSWQ7XG4gIH1cblxuICBzZXRVcmxTdHJhdGVneSh1cmxTdHJhdGVneTogQWRqdXN0VXJsU3RyYXRlZ3kpIHtcbiAgICB0aGlzLnVybFN0cmF0ZWd5ID0gdXJsU3RyYXRlZ3k7XG4gIH1cblxuICBzZXRTZW5kSW5CYWNrZ3JvdW5kKHNlbmRJbkJhY2tncm91bmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbmRJbkJhY2tncm91bmQgPSBzZW5kSW5CYWNrZ3JvdW5kO1xuICB9XG5cbiAgc2V0U2hvdWxkTGF1bmNoRGVlcGxpbmsoc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XG4gIH1cblxuICBzZXRFdmVudEJ1ZmZlcmluZ0VuYWJsZWQoZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5ldmVudEJ1ZmZlcmluZ0VuYWJsZWQgPSBldmVudEJ1ZmZlcmluZ0VuYWJsZWQ7XG4gIH1cblxuICBzZXRVc2VyQWdlbnQodXNlckFnZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVzZXJBZ2VudCA9IHVzZXJBZ2VudDtcbiAgfVxuXG4gIHNldERldmljZUtub3duKGlzRGV2aWNlS25vd246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRGV2aWNlS25vd24gPSBpc0RldmljZUtub3duO1xuICB9XG5cbiAgc2V0TmVlZHNDb3N0KG5lZWRzQ29zdDogYm9vbGVhbikge1xuICAgIHRoaXMubmVlZHNDb3N0ID0gbmVlZHNDb3N0O1xuICB9XG5cbiAgc2V0UHJvY2Vzc05hbWUocHJvY2Vzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMucHJvY2Vzc05hbWUgPSBwcm9jZXNzTmFtZTtcbiAgfVxuXG4gIHNldFByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQocHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMucHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZCA9IHByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQ7XG4gIH1cblxuICBzZXRQcmVpbnN0YWxsRmlsZVBhdGgocHJlaW5zdGFsbEZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByZWluc3RhbGxGaWxlUGF0aCA9IHByZWluc3RhbGxGaWxlUGF0aDtcbiAgfVxuXG4gIHNldE9haWRSZWFkaW5nRW5hYmxlZChlbmFibGVPYWlkUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMub2FpZFJlYWRpbmdFbmFibGVkID0gZW5hYmxlT2FpZFJlYWRpbmc7XG4gIH1cblxuICBzZXRBbGxvd2lBZEluZm9SZWFkaW5nKGFsbG93aUFkSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93aUFkSW5mb1JlYWRpbmcgPSBhbGxvd2lBZEluZm9SZWFkaW5nO1xuICB9XG5cbiAgc2V0QWxsb3dJZGZhUmVhZGluZyhhbGxvd0lkZmFSZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxvd0lkZmFSZWFkaW5nID0gYWxsb3dJZGZhUmVhZGluZztcbiAgfVxuXG4gIHNldEFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nKGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZyA9IGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nO1xuICB9XG5cbiAgc2V0QXR0cmlidXRpb25DYWxsYmFja0xpc3RlbmVyKGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQpIHtcbiAgICB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgPSBhdHRyaWJ1dGlvbkNhbGxiYWNrO1xuICB9XG5cbiAgc2V0RXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrTGlzdGVuZXIoZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCkge1xuICAgIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0RXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50RmFpbHVyZSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0U2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihcbiAgICBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKHNlc3Npb246IEFkanVzdFNlc3Npb25TdWNjZXNzKSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCkge1xuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldERlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2sgPSBkZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcihjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChjb252ZXJzaW9uVmFsdWU6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrID0gY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGlvbkNhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25MaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNFdmVudFRyYWNraW5nU3VjY2VlZGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNFdmVudFRyYWNraW5nRmFpbGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2Vzc2lvblRyYWNraW5nRmFpbGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0RlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQ29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbiB7XG4gIHByaXZhdGUgcHJpY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWNlaXB0OiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhbnNhY3Rpb25EYXRlOiBzdHJpbmc7XG4gIHByaXZhdGUgc2FsZXNSZWdpb246IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgdHJhbnNhY3Rpb25JZDogc3RyaW5nLCByZWNlaXB0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMudHJhbnNhY3Rpb25JZCA9IHRyYW5zYWN0aW9uSWQ7XG4gICAgdGhpcy5yZWNlaXB0ID0gcmVjZWlwdDtcbiAgfVxuXG4gIHNldFRyYW5zYWN0aW9uRGF0ZSh0cmFuc2FjdGlvbkRhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNhY3Rpb25EYXRlID0gdHJhbnNhY3Rpb25EYXRlO1xuICB9XG5cbiAgc2V0U2FsZXNSZWdpb24oc2FsZXNSZWdpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2FsZXNSZWdpb24gPSBzYWxlc1JlZ2lvbjtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbiB7XG4gIHByaXZhdGUgcHJpY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHNrdTogc3RyaW5nO1xuICBwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzaWduYXR1cmU6IHN0cmluZztcbiAgcHJpdmF0ZSBwdXJjaGFzZVRva2VuOiBzdHJpbmc7XG4gIHByaXZhdGUgcHVyY2hhc2VUaW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaWNlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIHNrdTogc3RyaW5nLCBvcmRlcklkOiBzdHJpbmcsIHNpZ25hdHVyZTogc3RyaW5nLCBwdXJjaGFzZVRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuc2t1ID0gc2t1O1xuICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5wdXJjaGFzZVRva2VuID0gcHVyY2hhc2VUb2tlbjtcbiAgfVxuXG4gIHNldFB1cmNoYXNlVGltZShwdXJjaGFzZVRpbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucHVyY2hhc2VUaW1lID0gcHVyY2hhc2VUaW1lO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmcge1xuICBwcml2YXRlIGlzRW5hYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBncmFudWxhck9wdGlvbnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoaXNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gIH1cblxuICBhZGRHcmFudWxhck9wdGlvbihwYXJ0bmVyTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2gocGFydG5lck5hbWUpO1xuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2goa2V5KTtcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0QWRSZXZlbnVlIHtcbiAgcHJpdmF0ZSBzb3VyY2U6IHN0cmluZztcbiAgcHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSBhZEltcHJlc3Npb25zQ291bnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBhZFJldmVudWVOZXR3b3JrOiBzdHJpbmc7XG4gIHByaXZhdGUgYWRSZXZlbnVlVW5pdDogc3RyaW5nO1xuICBwcml2YXRlIGFkUmV2ZW51ZVBsYWNlbWVudDogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBzZXRBZEltcHJlc3Npb25zQ291bnQoYWRJbXByZXNzaW9uc0NvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmFkSW1wcmVzc2lvbnNDb3VudCA9IGFkSW1wcmVzc2lvbnNDb3VudDtcbiAgfVxuXG4gIHNldEFkUmV2ZW51ZU5ldHdvcmsoYWRSZXZlbnVlTmV0d29yazogc3RyaW5nKSB7XG4gICAgdGhpcy5hZFJldmVudWVOZXR3b3JrID0gYWRSZXZlbnVlTmV0d29yaztcbiAgfVxuXG4gIHNldEFkUmV2ZW51ZVVuaXQoYWRSZXZlbnVlVW5pdDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZFJldmVudWVVbml0ID0gYWRSZXZlbnVlVW5pdDtcbiAgfVxuXG4gIHNldEFkUmV2ZW51ZVBsYWNlbWVudChhZFJldmVudWVQbGFjZW1lbnQ6IHN0cmluZykge1xuICAgIHRoaXMuYWRSZXZlbnVlUGxhY2VtZW50ID0gYWRSZXZlbnVlUGxhY2VtZW50O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0QXR0cmlidXRpb24ge1xuICB0cmFja2VyVG9rZW46IHN0cmluZztcbiAgdHJhY2tlck5hbWU6IHN0cmluZztcbiAgbmV0d29yazogc3RyaW5nO1xuICBjYW1wYWlnbjogc3RyaW5nO1xuICBhZGdyb3VwOiBzdHJpbmc7XG4gIGNyZWF0aXZlOiBzdHJpbmc7XG4gIGNsaWNrTGFiZWw6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBjb3N0VHlwZTogc3RyaW5nO1xuICBjb3N0QW1vdW50OiBzdHJpbmc7XG4gIGNvc3RDdXJyZW5jeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25TdWNjZXNzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTZXNzaW9uRmFpbHVyZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAgd2lsbFJldHJ5OiBib29sZWFuO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudFN1Y2Nlc3Mge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGV2ZW50VG9rZW46IHN0cmluZztcbiAgY2FsbGJhY2tJZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudEZhaWx1cmUge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGV2ZW50VG9rZW46IHN0cmluZztcbiAgd2lsbFJldHJ5OiBib29sZWFuO1xuICBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBBZGp1c3RFbnZpcm9ubWVudCB7XG4gIFNhbmRib3ggPSAnc2FuZGJveCcsXG4gIFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbicsXG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdExvZ0xldmVsIHtcbiAgVmVyYm9zZSA9ICdWRVJCT1NFJyxcbiAgRGVidWcgPSAnREVCVUcnLFxuICBJbmZvID0gJ0lORk8nLFxuICBXYXJuID0gJ1dBUk4nLFxuICBFcnJvciA9ICdFUlJPUicsXG4gIEFzc2VydCA9ICdBU1NFUlQnLFxuICBTdXBwcmVzcyA9ICdTVVBQUkVTUycsXG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdFVybFN0cmF0ZWd5IHtcbiAgSW5kaWEgPSAnaW5kaWEnLFxuICBDaGluYSA9ICdjaGluYScsXG4gIERhdGFSZXNpZGVuY3lFVSA9ICdkYXRhLXJlc2lkZW5jeS1ldScsXG4gIERhdGFSZXNpZGVuY3lUUiA9ICdkYXRhLXJlc2lkZW5jeS10cicsXG4gIERhdGFSZXNpZGVuY3lVUyA9ICdkYXRhLXJlc2lkZW5jeS11cycsXG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdEFkUmV2ZW51ZVNvdXJjZSB7XG4gIEFkUmV2ZW51ZVNvdXJjZUFwcExvdmluTUFYID0gJ2FwcGxvdmluX21heF9zZGsnLFxuICBBZFJldmVudWVTb3VyY2VNb3B1YiA9ICdtb3B1YicsXG4gIEFkUmV2ZW51ZVNvdXJjZUFkTW9iID0gJ2FkbW9iX3NkaycsXG4gIEFkUmV2ZW51ZVNvdXJjZUlyb25zb3VyY2UgPSAnaXJvbnNvdXJjZV9zZGsnLFxufVxuXG4vKipcbiAqIEBuYW1lIEFkanVzdFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIHRoZSBJb25pYyBDb3Jkb3ZhIFNESyBvZiBBZGp1c3TihKIuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IEFkanVzdOKEoiBhdCBhZGp1c3QuY29tLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29tLmFkanVzdC5zZGtgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQWRqdXN0IENvcmRvdmEgU0RLXShodHRwczovL2dpdGh1Yi5jb20vYWRqdXN0L2NvcmRvdmFfc2RrKVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgaW1wb3J0IHsgQWRqdXN0LCBBZGp1c3RDb25maWcsIEFkanVzdEVudmlyb25tZW50IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FkanVzdC9uZ3gnO1xuICpcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkanVzdDogQWRqdXN0KSB7IH1cbiAqXG4gKiAgLi4uXG4gKlxuICogIGNvbnN0IGNvbmZpZyA9IG5ldyBBZGp1c3RDb25maWcoJ0FQUC1UT0tFTi1IRVJFJywgQWRqdXN0RW52aXJvbm1lbnQuU2FuZGJveCk7XG4gKiAgY29uZmlnLmxvZ0xldmVsID0gQWRqdXN0TG9nTGV2ZWwuVmVyYm9zZTtcbiAqICAvLyBTZXQgb3RoZXIgY29uZmlnIHByb3BlcnRpZXMuXG4gKiAgYWRqdXN0LmNyZWF0ZShjb25maWcpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEFkanVzdEF0dHJpYnV0aW9uXG4gKiBBZGp1c3RTZXNzaW9uU3VjY2Vzc1xuICogQWRqdXN0U2Vzc2lvbkZhaWx1cmVcbiAqIEFkanVzdEV2ZW50U3VjY2Vzc1xuICogQWRqdXN0RXZlbnRGYWlsdXJlXG4gKiBAY2xhc3Nlc1xuICogQWRqdXN0RXZlbnRcbiAqIEFkanVzdENvbmZpZ1xuICogQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb25cbiAqIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvblxuICogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmdcbiAqIEFkanVzdEFkUmVlbnVlXG4gKiBAZW51bXNcbiAqIEFkanVzdEVudmlyb25tZW50XG4gKiBBZGp1c3RMb2dMZXZlbFxuICogQWRqdXN0VXJsU3RyYXRlZ3lcbiAqIEFkanVzdEFkUmV2ZW51ZVNvdXJjZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FkanVzdCcsXG4gIHBsdWdpbjogJ2NvbS5hZGp1c3Quc2RrJyxcbiAgcGx1Z2luUmVmOiAnQWRqdXN0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGsnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRqdXN0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBtZXRob2QgaW5pdGlhbGl6ZXMgQWRqdXN0IFNES1xuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdENvbmlnfSBjb25maWcgQWRqdXN0IGNvbmZpZyBvYmplY3QgdXNlZCBhcyBzdGFydGluZyBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY3JlYXRlKGNvbmZpZzogQWRqdXN0Q29uZmlnKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYW4gZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RFdmVudH0gZXZlbnQgQWRqdXN0IGV2ZW50IG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tFdmVudChldmVudDogQWRqdXN0RXZlbnQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgQXBwIFN0b3JlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrQXBwU3RvcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIFBsYXkgU3RvcmUgc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb24gQWRqdXN0IFBsYXkgU3RvcmUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tQbGF5U3RvcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyB0aGlyZCBwYXJ0eSBzaGFyaW5nIGNob2ljZVxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdFRoaXJkUGFydHlTaGFyaW5nfSB0aGlyZFBhcnR5U2hhcmluZyBBZGp1c3QgdGhpcmQgcGFydHkgc2hhcmluZyBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrVGhpcmRQYXJ0eVNoYXJpbmcodGhpcmRQYXJ0eVNoYXJpbmc6IEFkanVzdFRoaXJkUGFydHlTaGFyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYWQgcmV2ZW51ZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0QWRSZXZlbnVlU291cmNlfSBzb3VyY2UgQWQgcmV2ZW51ZSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQgQWQgcmV2ZW51ZSBKU09OIHN0cmluZyBwYXlsb2FkXG4gICAqL1xuICB0cmFja0FkUmV2ZW51ZShzb3VyY2U6IEFkanVzdEFkUmV2ZW51ZVNvdXJjZSwgcGF5bG9hZDogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFkIHJldmVudWUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdEFkUmV2ZW51ZX0gYWRSZXZlbnVlIEFkanVzdCBhZCByZXZlbnVlIG9iamVjdFxuICAgKi9cbiAgdHJhY2tBZFJldmVudWUoYWRSZXZlbnVlOiBBZGp1c3RBZFJldmVudWUpOiB2b2lkO1xuXG4gIC8vIEFuZCB0eXBlc2NyaXB0IGhpZGVzIHRoaXMsIHNvIHRoZSBjbGllbnQgd2lsbCBiZSBhYmxlIGNhbGwgb25seSBtZXRob2RzIGFib3ZlXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja0FkUmV2ZW51ZShzb3VyY2VPckFkUmV2ZW51ZTogYW55LCBwYXlsb2FkPzogYW55KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgbWVhc3VyZW1lbnQgY29uc2VudCBjaG9pY2VcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBtZWFzdXJlbWVudENvbnNlbnQgc2V0IG1lYXN1cmVtZW50IGNvbnNlbnQgdG8gdHJ1ZSBvciBmYWxzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrTWVhc3VyZW1lbnRDb25zZW50KG1lYXN1cmVtZW50Q29uc2VudDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBvZmZsaW5lIG1vZGUgb24gb3Igb2ZmXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gdHJ1ZSBmb3Igb2ZmbGluZSBtb2RlIG9uXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T2ZmbGluZU1vZGUoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogQnkgbWFraW5nIHRoaXMgY2FsbCwgdGhlIEFkanVzdCBTREsgd2lsbCB0cnkgdG8gZmluZCBpZiB0aGVyZSBpcyBhbnkgbmV3IGF0dHJpYnV0aW9uIGluZm8gaW5zaWRlIG9mIHRoZSBkZWVwIGxpbmsgYW5kIGlmIGFueSwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBBZGp1c3QgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgb2YgdGhlIGRlZXBsaW5rXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYXBwV2lsbE9wZW5VcmwodXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZGlzYWJsZS9lbmFibGUgdGhlIEFkanVzdCBTREsgZnJvbSB0cmFja2luZyBieSBpbnZva2luZyB0aGlzIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgU0RLXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUbyBzZW5kIHVzIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiB0b2tlbiwgYWRkIHRoZSBmb2xsb3dpbmcgY2FsbCB0byBBZGp1c3Qgd2hlbmV2ZXIgeW91IGdldCB5b3VyIHRva2VuIGluIHRoZSBhcHAgb3Igd2hlbiBpdCBnZXRzIHVwZGF0ZWQuXG4gICAqIFB1c2ggdG9rZW5zIGFyZSB1c2VkIGZvciBBdWRpZW5jZSBCdWlsZGVyIGFuZCBjbGllbnQgY2FsbGJhY2tzLCBhbmQgdGhleSBhcmUgcmVxdWlyZWQgZm9yIHRoZSB1cGNvbWluZyB1bmluc3RhbGwgdHJhY2tpbmcgZmVhdHVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHB1c2hUb2tlbiBwdXNoIHRva2VuIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UHVzaFRva2VuKHB1c2hUb2tlbjogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgQWRqdXN0IFNESyBpcyBjdXJyZW50bHkgZW5hYmxlZCBieSBjYWxsaW5nIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW4gYWNjb3JkYW5jZSB3aXRoIGFydGljbGUgMTcgb2YgdGhlIEVVJ3MgR2VuZXJhbCBEYXRhIFByb3RlY3Rpb24gUmVndWxhdGlvbiAoR0RQUiksIHlvdSBjYW4gbm90aWZ5IEFkanVzdCB3aGVuIGEgdXNlciBoYXMgZXhlcmNpc2VkIHRoZWlyIHJpZ2h0IHRvIGJlIGZvcmdvdHRlbi5cbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGJlIGZvcmdvdHRlbiB0byB0aGUgQWRqdXN0IGJhY2tlbmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZHByRm9yZ2V0TWUoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIG5vdyBub3RpZnkgQWRqdXN0IHdoZW4gYSB1c2VyIGhhcyBleGVyY2lzZWQgdGhlaXIgcmlnaHQgdG8gc3RvcCBzaGFyaW5nIHRoZWlyIGRhdGEgd2l0aCBwYXJ0bmVycyBmb3IgbWFya2V0aW5nIHB1cnBvc2VzLCBidXQgaGFzIGFsbG93ZWQgaXQgdG8gYmUgc2hhcmVkIGZvciBzdGF0aXN0aWNzIHB1cnBvc2VzLlxuICAgKiBDYWxsaW5nIHRoZSBmb2xsb3dpbmcgbWV0aG9kIHdpbGwgaW5zdHJ1Y3QgdGhlIEFkanVzdCBTREsgdG8gY29tbXVuaWNhdGUgdGhlIHVzZXIncyBjaG9pY2UgdG8gZGlzYWJsZSBkYXRhIHNoYXJpbmcgdG8gdGhlIEFkanVzdCBiYWNrZW5kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzYWJsZVRoaXJkUGFydHlTaGFyaW5nKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRnVuY3Rpb24gdXNlZCB0byBnZXQgR29vZ2xlIEFkSWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBnb29nbGUgQWRJZCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRHb29nbGVBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHlvdSBuZWVkIHRvIG9idGFpbiB0aGUgQW1hem9uIEFkdmVydGlzaW5nIElELCB5b3UgY2FuIG1ha2UgYSBjYWxsIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYW5hemliIGFkdi4gSURcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QW1hem9uQWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBvYnRhaW4gdGhlIElERkEsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIElERkEgc3RyaW5nIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElkZmEoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRm9yIGV2ZXJ5IGRldmljZSB3aXRoIHlvdXIgYXBwIGluc3RhbGxlZCBvbiBpdCwgdGhlIEFkanVzdCBiYWNrZW5kIGdlbmVyYXRlcyBhIHVuaXF1ZSBBZGp1c3QgZGV2aWNlIGlkZW50aWZpZXIgKGFkaWQpLlxuICAgKiBJbiBvcmRlciB0byBvYnRhaW4gdGhpcyBpZGVudGlmaWVyLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhZGlkIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFkaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSWYgeW91IHdhbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGEgdXNlcidzIGN1cnJlbnQgYXR0cmlidXRpb24gd2hlbmV2ZXIgeW91IG5lZWQgaXQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBZGp1c3RBdHRyaWJ1dGlvbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggQWRqdXN0QXR0cmlidXRpb24gb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEF0dHJpYnV0aW9uKCk6IFByb21pc2U8QWRqdXN0QXR0cmlidXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBpbmZvcm1hdGlvbiBhYm91dCB2ZXJzaW9uIG9mIHRoZSBTREsgdXNlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHNkayB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNka1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyIGJ5IHBhc3NpbmcgdGhlIGRlc2lyaW5nIGtleSB0byB0aGlzIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZVNlc3Npb25DYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgYWxsIGtleXMgYW5kIHZhbHVlcyBmcm9tIHRoZSBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlcnMgaGF2ZSB0byBiZSByZW1vdmVkLCBjYWxsIHRoaXMgbWV0aG9kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVzZXRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZFNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVyIGJ5IHBhc3NpbmcgdGhlIGRlc2lyaW5nIGtleSB0byB0aGlzIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZVNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc2V0U2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2FsbCB3aWxsIG1ha2UgdGhlIEFkanVzdCBTREsgc2VuZCB0aGUgaW5pdGlhbCBpbnN0YWxsIHNlc3Npb24gYW5kIGFueSBldmVudHMgY3JlYXRlZCwgaWYgdGhleSB3ZXJlIG5vdCBzZW50IGFmdGVyIGRlbGF5IHN0YXJ0IHdhcyBzZXQgYW5kIGl0J3MgZGVsYXkgZXhwaXJlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZW5kRmlyc3RQYWNrYWdlcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgQWRqdXN0IFNESyB0byBzaG93IHBvcCB1cCBkaWFsb2cgZm9yIGFza2luZyB1c2VyJ3MgY29uc2VudCB0byBiZSB0cmFja2VkLlxuICAgKiBJbiBvcmRlciB0byBkbyB0aGlzLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB1c2VyJ3MgY29uc2VudCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0VHJhY2tpbmdBdXRob3JpemF0aW9uV2l0aENvbXBsZXRpb25IYW5kbGVyKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gdXBkYXRlIFNLQWROZXR3b3JrIGNvbnZlcnNpb24gdmFsdWUgd2l0aCBjYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb252ZXJzaW9uVmFsdWUgY29udmVyc2lvbiB2YWx1ZSBmb3IgdGhlIHVzZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cGRhdGVDb252ZXJzaW9uVmFsdWUoY29udmVyc2lvblZhbHVlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvIG9idGFpbiB0aGUgYXBwIHRyYWNraW5nIGF1dGhvcml6YXRpb24gc3RhdHVzIGluIGlPUywgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYXBwIHRyYWNraW5nIGF1dGhvcml6YXRpb24gc3RhdHVzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFwcFRyYWNraW5nQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxufSJdfQ==