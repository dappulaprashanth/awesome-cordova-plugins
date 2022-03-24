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
export var Collectors;
(function (Collectors) {
    Collectors["AppData"] = "AppData";
    Collectors["Connectivity"] = "Connectivity";
    Collectors["DeviceData"] = "DeviceData";
    Collectors["Lifecycle"] = "Lifecycle";
})(Collectors || (Collectors = {}));
export var Dispatchers;
(function (Dispatchers) {
    Dispatchers["Collect"] = "Collect";
    Dispatchers["TagManagement"] = "TagManagement";
    Dispatchers["RemoteCommands"] = "RemoteCommands";
})(Dispatchers || (Dispatchers = {}));
export var Expiry;
(function (Expiry) {
    Expiry["forever"] = "forever";
    Expiry["untilRestart"] = "untilRestart";
    Expiry["session"] = "session";
})(Expiry || (Expiry = {}));
export var ConsentPolicy;
(function (ConsentPolicy) {
    ConsentPolicy["ccpa"] = "ccpa";
    ConsentPolicy["gdpr"] = "gdpr";
})(ConsentPolicy || (ConsentPolicy = {}));
var TealiumView = /** @class */ (function () {
    function TealiumView(viewName, dataLayer) {
        this.viewName = viewName;
        this.dataLayer = dataLayer;
        this.type = 'view';
    }
    TealiumView.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['viewName'] = this.viewName;
        return JSON.stringify(dictionary);
    };
    return TealiumView;
}());
export { TealiumView };
var TealiumEvent = /** @class */ (function () {
    function TealiumEvent(eventName, dataLayer) {
        this.eventName = eventName;
        this.dataLayer = dataLayer;
        this.type = 'event';
    }
    TealiumEvent.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['eventName'] = this.eventName;
        return JSON.stringify(dictionary);
    };
    return TealiumEvent;
}());
export { TealiumEvent };
var ConsentExpiry = /** @class */ (function () {
    function ConsentExpiry(time, unit) {
        this.time = time;
        this.unit = unit;
    }
    return ConsentExpiry;
}());
export { ConsentExpiry };
export var TimeUnit;
(function (TimeUnit) {
    TimeUnit["minutes"] = "minutes";
    TimeUnit["hours"] = "hours";
    TimeUnit["days"] = "days";
    TimeUnit["months"] = "months";
})(TimeUnit || (TimeUnit = {}));
export var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus["consented"] = "consented";
    ConsentStatus["notConsented"] = "notConsented";
    ConsentStatus["unknown"] = "unknown";
})(ConsentStatus || (ConsentStatus = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["dev"] = "dev";
    LogLevel["qa"] = "qa";
    LogLevel["prod"] = "prod";
    LogLevel["silent"] = "silent";
})(LogLevel || (LogLevel = {}));
export var TealiumEnvironment;
(function (TealiumEnvironment) {
    TealiumEnvironment["dev"] = "dev";
    TealiumEnvironment["qa"] = "qa";
    TealiumEnvironment["prod"] = "prod";
})(TealiumEnvironment || (TealiumEnvironment = {}));
export var ConsentCategories;
(function (ConsentCategories) {
    ConsentCategories["analytics"] = "analytics";
    ConsentCategories["affiliates"] = "affiliates";
    ConsentCategories["displayAds"] = "display_ads";
    ConsentCategories["email"] = "email";
    ConsentCategories["personalization"] = "personalization";
    ConsentCategories["search"] = "search";
    ConsentCategories["social"] = "social";
    ConsentCategories["bigData"] = "big_data";
    ConsentCategories["mobile"] = "mobile";
    ConsentCategories["engagement"] = "engagement";
    ConsentCategories["monitoring"] = "monitoring";
    ConsentCategories["crm"] = "crm";
    ConsentCategories["cdp"] = "cdp";
    ConsentCategories["cookieMatch"] = "cookiematch";
    ConsentCategories["misc"] = "misc";
})(ConsentCategories || (ConsentCategories = {}));
var TealiumOriginal = /** @class */ (function (_super) {
    __extends(TealiumOriginal, _super);
    function TealiumOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumOriginal.prototype.initialize = function (config, callback) { return cordova(this, "initialize", {}, arguments); };
    TealiumOriginal.prototype.track = function (dispatch) { return cordova(this, "track", {}, arguments); };
    TealiumOriginal.prototype.terminateInstance = function () { return cordova(this, "terminateInstance", {}, arguments); };
    TealiumOriginal.prototype.addData = function (data, expiry) { return cordova(this, "addData", {}, arguments); };
    TealiumOriginal.prototype.getData = function (key, callback) { return cordova(this, "getData", {}, arguments); };
    TealiumOriginal.prototype.removeData = function (keys) { return cordova(this, "removeData", {}, arguments); };
    TealiumOriginal.prototype.getConsentStatus = function (callback) { return cordova(this, "getConsentStatus", {}, arguments); };
    TealiumOriginal.prototype.setConsentStatus = function (consentStatus) { return cordova(this, "setConsentStatus", {}, arguments); };
    TealiumOriginal.prototype.getConsentCategories = function (callback) { return cordova(this, "getConsentCategories", {}, arguments); };
    TealiumOriginal.prototype.setConsentCategories = function (categories) { return cordova(this, "setConsentCategories", {}, arguments); };
    TealiumOriginal.prototype.joinTrace = function (id) { return cordova(this, "joinTrace", {}, arguments); };
    TealiumOriginal.prototype.leaveTrace = function () { return cordova(this, "leaveTrace", {}, arguments); };
    TealiumOriginal.prototype.getVisitorId = function (callback) { return cordova(this, "getVisitorId", {}, arguments); };
    TealiumOriginal.prototype.setVisitorServiceListener = function (callback) { return cordova(this, "setVisitorServiceListener", {}, arguments); };
    TealiumOriginal.prototype.setConsentExpiryListener = function (callback) { return cordova(this, "setConsentExpiryListener", {}, arguments); };
    TealiumOriginal.prototype.addRemoteCommand = function (id, callback) { return cordova(this, "addRemoteCommand", {}, arguments); };
    TealiumOriginal.prototype.removeRemoteCommand = function (id) { return cordova(this, "removeRemoteCommand", {}, arguments); };
    TealiumOriginal.prototype.removeListeners = function () { return cordova(this, "removeListeners", {}, arguments); };
    TealiumOriginal.pluginName = "Tealium";
    TealiumOriginal.plugin = "tealium-cordova-plugin";
    TealiumOriginal.pluginRef = "tealium";
    TealiumOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumOriginal.install = "";
    TealiumOriginal.installVariables = [];
    TealiumOriginal.platforms = ["Android", "iOS"];
    return TealiumOriginal;
}(AwesomeCordovaNativePlugin));
var Tealium = new TealiumOriginal();
export { Tealium };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDO0FBR3ZDLE1BQU0sQ0FBTixJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsaUNBQW1CLENBQUE7SUFDbkIsMkNBQTZCLENBQUE7SUFDN0IsdUNBQXlCLENBQUE7SUFDekIscUNBQXVCLENBQUE7QUFDekIsQ0FBQyxFQUxXLFVBQVUsS0FBVixVQUFVLFFBS3JCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNyQixrQ0FBbUIsQ0FBQTtJQUNuQiw4Q0FBK0IsQ0FBQTtJQUMvQixnREFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBSlcsV0FBVyxLQUFYLFdBQVcsUUFJdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxNQUlYO0FBSkQsV0FBWSxNQUFNO0lBQ2hCLDZCQUFtQixDQUFBO0lBQ25CLHVDQUE2QixDQUFBO0lBQzdCLDZCQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxNQUFNLEtBQU4sTUFBTSxRQUlqQjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsOEJBQWEsQ0FBQTtJQUNiLDhCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7O0lBVUMscUJBQW1CLFFBQWdCLEVBQVMsU0FBMkI7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRGhFLFNBQUksR0FBRyxNQUFNLENBQUM7SUFDcUQsQ0FBQztJQUMzRSw0QkFBTSxHQUFOO1FBQ0UsSUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMxQixVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7c0JBdERIOzs7O0lBMkRFLHNCQUFtQixTQUFpQixFQUFTLFNBQTJCO1FBQXJELGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQURqRSxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3FELENBQUM7SUFDNUUsNkJBQU0sR0FBTjtRQUNFLElBQU0sVUFBVSxHQUFRLEVBQUUsQ0FBQztRQUMzQixVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO3VCQXRFSDs7OztJQTBFRSx1QkFBbUIsSUFBWSxFQUFTLElBQWM7UUFBbkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVU7SUFBRyxDQUFDO3dCQTFFNUQ7OztBQTZFQSxNQUFNLENBQU4sSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ2xCLCtCQUFtQixDQUFBO0lBQ25CLDJCQUFlLENBQUE7SUFDZix5QkFBYSxDQUFBO0lBQ2IsNkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLFFBQVEsS0FBUixRQUFRLFFBS25CO0FBRUQsTUFBTSxDQUFOLElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUN2Qix3Q0FBdUIsQ0FBQTtJQUN2Qiw4Q0FBNkIsQ0FBQTtJQUM3QixvQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsYUFBYSxLQUFiLGFBQWEsUUFJeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ2xCLHVCQUFXLENBQUE7SUFDWCxxQkFBUyxDQUFBO0lBQ1QseUJBQWEsQ0FBQTtJQUNiLDZCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFMVyxRQUFRLEtBQVIsUUFBUSxRQUtuQjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQUlYO0FBSkQsV0FBWSxrQkFBa0I7SUFDNUIsaUNBQVcsQ0FBQTtJQUNYLCtCQUFTLENBQUE7SUFDVCxtQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFJN0I7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFnQlg7QUFoQkQsV0FBWSxpQkFBaUI7SUFDM0IsNENBQXVCLENBQUE7SUFDdkIsOENBQXlCLENBQUE7SUFDekIsK0NBQTBCLENBQUE7SUFDMUIsb0NBQWUsQ0FBQTtJQUNmLHdEQUFtQyxDQUFBO0lBQ25DLHNDQUFpQixDQUFBO0lBQ2pCLHNDQUFpQixDQUFBO0lBQ2pCLHlDQUFvQixDQUFBO0lBQ3BCLHNDQUFpQixDQUFBO0lBQ2pCLDhDQUF5QixDQUFBO0lBQ3pCLDhDQUF5QixDQUFBO0lBQ3pCLGdDQUFXLENBQUE7SUFDWCxnQ0FBVyxDQUFBO0lBQ1gsZ0RBQTJCLENBQUE7SUFDM0Isa0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFoQlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQWdCNUI7O0lBdUU0QiwyQkFBMEI7Ozs7SUFRckQsNEJBQVUsYUFBQyxNQUFxQixFQUFFLFFBQW1CO0lBVXJELHVCQUFLLGFBQUMsUUFBeUI7SUFTL0IsbUNBQWlCO0lBV2pCLHlCQUFPLGFBQUMsSUFBc0IsRUFBRSxNQUFjO0lBVzlDLHlCQUFPLGFBQUMsR0FBVyxFQUFFLFFBQW1CO0lBVXhDLDRCQUFVLGFBQUMsSUFBYztJQVV6QixrQ0FBZ0IsYUFBQyxRQUFtQjtJQVVwQyxrQ0FBZ0IsYUFBQyxhQUE0QjtJQVU3QyxzQ0FBb0IsYUFBQyxRQUFtQjtJQVV4QyxzQ0FBb0IsYUFBQyxVQUErQjtJQVVwRCwyQkFBUyxhQUFDLEVBQVU7SUFTcEIsNEJBQVU7SUFVViw4QkFBWSxhQUFDLFFBQW1CO0lBVWhDLDJDQUF5QixhQUFDLFFBQW1CO0lBVTdDLDBDQUF3QixhQUFDLFFBQW1CO0lBVzVDLGtDQUFnQixhQUFDLEVBQVUsRUFBRSxRQUFtQjtJQVVoRCxxQ0FBbUIsYUFBQyxFQUFVO0lBUzlCLGlDQUFlOzs7Ozs7OztrQkFoWGpCO0VBOEw2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsdWdpbixcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIENvbGxlY3RvcnMge1xuICBBcHBEYXRhID0gJ0FwcERhdGEnLFxuICBDb25uZWN0aXZpdHkgPSAnQ29ubmVjdGl2aXR5JyxcbiAgRGV2aWNlRGF0YSA9ICdEZXZpY2VEYXRhJyxcbiAgTGlmZWN5Y2xlID0gJ0xpZmVjeWNsZScsXG59XG5cbmV4cG9ydCBlbnVtIERpc3BhdGNoZXJzIHtcbiAgQ29sbGVjdCA9ICdDb2xsZWN0JyxcbiAgVGFnTWFuYWdlbWVudCA9ICdUYWdNYW5hZ2VtZW50JyxcbiAgUmVtb3RlQ29tbWFuZHMgPSAnUmVtb3RlQ29tbWFuZHMnLFxufVxuXG5leHBvcnQgZW51bSBFeHBpcnkge1xuICBmb3JldmVyID0gJ2ZvcmV2ZXInLFxuICB1bnRpbFJlc3RhcnQgPSAndW50aWxSZXN0YXJ0JyxcbiAgc2Vzc2lvbiA9ICdzZXNzaW9uJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uc2VudFBvbGljeSB7XG4gIGNjcGEgPSAnY2NwYScsXG4gIGdkcHIgPSAnZ2RwcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVhbGl1bURpc3BhdGNoIHtcbiAgZGF0YUxheWVyOiBNYXA8c3RyaW5nLCBhbnk+O1xuICB0eXBlOiBzdHJpbmc7XG4gIHRvSnNvbigpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBUZWFsaXVtVmlldyBpbXBsZW1lbnRzIFRlYWxpdW1EaXNwYXRjaCB7XG4gIHB1YmxpYyB0eXBlID0gJ3ZpZXcnO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld05hbWU6IHN0cmluZywgcHVibGljIGRhdGFMYXllcjogTWFwPHN0cmluZywgYW55Pikge31cbiAgdG9Kc29uKCkge1xuICAgIGNvbnN0IGRpY3Rpb25hcnk6IGFueSA9IHt9O1xuICAgIGRpY3Rpb25hcnlbJ3R5cGUnXSA9IHRoaXMudHlwZTtcbiAgICBkaWN0aW9uYXJ5WydkYXRhTGF5ZXInXSA9IHt9O1xuICAgIHRoaXMuZGF0YUxheWVyLmZvckVhY2goKGssIHYpID0+IHtcbiAgICAgIGRpY3Rpb25hcnlbJ2RhdGFMYXllciddW2tdID0gdjtcbiAgICB9KTtcbiAgICBkaWN0aW9uYXJ5Wyd0eXBlJ10gPSB0aGlzLnR5cGU7XG4gICAgZGljdGlvbmFyeVsndmlld05hbWUnXSA9IHRoaXMudmlld05hbWU7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRpY3Rpb25hcnkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZWFsaXVtRXZlbnQgaW1wbGVtZW50cyBUZWFsaXVtRGlzcGF0Y2gge1xuICBwdWJsaWMgdHlwZSA9ICdldmVudCc7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBldmVudE5hbWU6IHN0cmluZywgcHVibGljIGRhdGFMYXllcjogTWFwPHN0cmluZywgYW55Pikge31cbiAgdG9Kc29uKCkge1xuICAgIGNvbnN0IGRpY3Rpb25hcnk6IGFueSA9IHt9O1xuICAgIGRpY3Rpb25hcnlbJ3R5cGUnXSA9IHRoaXMudHlwZTtcbiAgICBkaWN0aW9uYXJ5WydkYXRhTGF5ZXInXSA9IHt9O1xuICAgIHRoaXMuZGF0YUxheWVyLmZvckVhY2goKGssIHYpID0+IHtcbiAgICAgIGRpY3Rpb25hcnlbJ2RhdGFMYXllciddW2tdID0gdjtcbiAgICB9KTtcbiAgICBkaWN0aW9uYXJ5Wyd0eXBlJ10gPSB0aGlzLnR5cGU7XG4gICAgZGljdGlvbmFyeVsnZXZlbnROYW1lJ10gPSB0aGlzLmV2ZW50TmFtZTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGljdGlvbmFyeSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnNlbnRFeHBpcnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGltZTogbnVtYmVyLCBwdWJsaWMgdW5pdDogVGltZVVuaXQpIHt9XG59XG5cbmV4cG9ydCBlbnVtIFRpbWVVbml0IHtcbiAgbWludXRlcyA9ICdtaW51dGVzJyxcbiAgaG91cnMgPSAnaG91cnMnLFxuICBkYXlzID0gJ2RheXMnLFxuICBtb250aHMgPSAnbW9udGhzJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uc2VudFN0YXR1cyB7XG4gIGNvbnNlbnRlZCA9ICdjb25zZW50ZWQnLFxuICBub3RDb25zZW50ZWQgPSAnbm90Q29uc2VudGVkJyxcbiAgdW5rbm93biA9ICd1bmtub3duJyxcbn1cblxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBkZXYgPSAnZGV2JyxcbiAgcWEgPSAncWEnLFxuICBwcm9kID0gJ3Byb2QnLFxuICBzaWxlbnQgPSAnc2lsZW50Jyxcbn1cblxuZXhwb3J0IGVudW0gVGVhbGl1bUVudmlyb25tZW50IHtcbiAgZGV2ID0gJ2RldicsXG4gIHFhID0gJ3FhJyxcbiAgcHJvZCA9ICdwcm9kJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uc2VudENhdGVnb3JpZXMge1xuICBhbmFseXRpY3MgPSAnYW5hbHl0aWNzJyxcbiAgYWZmaWxpYXRlcyA9ICdhZmZpbGlhdGVzJyxcbiAgZGlzcGxheUFkcyA9ICdkaXNwbGF5X2FkcycsXG4gIGVtYWlsID0gJ2VtYWlsJyxcbiAgcGVyc29uYWxpemF0aW9uID0gJ3BlcnNvbmFsaXphdGlvbicsXG4gIHNlYXJjaCA9ICdzZWFyY2gnLFxuICBzb2NpYWwgPSAnc29jaWFsJyxcbiAgYmlnRGF0YSA9ICdiaWdfZGF0YScsXG4gIG1vYmlsZSA9ICdtb2JpbGUnLFxuICBlbmdhZ2VtZW50ID0gJ2VuZ2FnZW1lbnQnLFxuICBtb25pdG9yaW5nID0gJ21vbml0b3JpbmcnLFxuICBjcm0gPSAnY3JtJyxcbiAgY2RwID0gJ2NkcCcsXG4gIGNvb2tpZU1hdGNoID0gJ2Nvb2tpZW1hdGNoJyxcbiAgbWlzYyA9ICdtaXNjJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZWFsaXVtQ29uZmlnIHtcbiAgYWNjb3VudDogc3RyaW5nO1xuICBwcm9maWxlOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiBUZWFsaXVtRW52aXJvbm1lbnQ7XG4gIGRhdGFTb3VyY2U/OiBzdHJpbmc7XG4gIGNvbGxlY3RvcnM6IENvbGxlY3RvcnNbXTtcbiAgZGlzcGF0Y2hlcnM6IERpc3BhdGNoZXJzW107XG4gIGN1c3RvbVZpc2l0b3JJZD86IHN0cmluZztcbiAgbWVtb3J5UmVwb3J0aW5nRW5hYmxlZD86IGJvb2xlYW47XG4gIG92ZXJyaWRlQ29sbGVjdFVSTD86IHN0cmluZztcbiAgb3ZlcnJpZGVDb2xsZWN0QmF0Y2hVUkw/OiBzdHJpbmc7XG4gIG92ZXJyaWRlQ29sbGVjdERvbWFpbj86IHN0cmluZztcbiAgb3ZlcnJpZGVMaWJyYXJ5U2V0dGluZ3NVUkw/OiBzdHJpbmc7XG4gIG92ZXJyaWRlVGFnTWFuYWdlbWVudFVSTD86IHN0cmluZztcbiAgZGVlcExpbmtUcmFja2luZ0VuYWJsZWQ/OiBib29sZWFuO1xuICBxclRyYWNlRW5hYmxlZD86IGJvb2xlYW47XG4gIGxvZ2xldmVsPzogTG9nTGV2ZWw7XG4gIGNvbnNlbnRMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW47XG4gIGNvbnNlbnRQb2xpY3k/OiBDb25zZW50UG9saWN5O1xuICBjb25zZW50RXhwaXJ5PzogQ29uc2VudEV4cGlyeTtcbiAgbGlmZWN5Y2xlQXV0b3RyYWNraW5nRW5hYmxlZD86IGJvb2xlYW47XG4gIHVzZVJlbW90ZUxpYnJhcnlTZXR0aW5ncz86IGJvb2xlYW47XG4gIHZpc2l0b3JTZXJ2aWNlRW5hYmxlZD86IGJvb2xlYW47XG4gIHZpc2l0b3JTZXJ2aWNlUmVmcmVzaEludGVydmFsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFRlYWxpdW1cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBUZWFsaXVtIENvcmRvdmEgUGx1Z2luIGZvciBJb25pYyBOYXRpdmUuXG4gKlxuICogRm9yIGZ1bGwgZG9jdW1lbnRhdGlvbiwgc2VlIFtodHRwczovL2RvY3MudGVhbGl1bS5jb20vcGxhdGZvcm1zL2NvcmRvdmEvXShodHRwczovL2RvY3MudGVhbGl1bS5jb20vcGxhdGZvcm1zL2NvcmRvdmEvKVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVGVhbGl1bSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90ZWFsaXVtL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVhbGl1bTogVGVhbGl1bSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGNvbmZpZzogVGVhbGl1bUNvbmZpZyA9IHtcbiAqXHRcdFx0YWNjb3VudDogPHlvdXJfdGVhbGl1bV9hY2NvdW50PixcbiAqXHRcdFx0cHJvZmlsZTogPHlvdXJfdGVhbGl1bV9wcm9maWxlPixcbiAqXHRcdFx0ZW52aXJvbm1lbnQ6IFRlYWxpdW1FbnZpcm9ubWVudC5kZXYsXG4gKlx0XHRcdGRpc3BhdGNoZXJzOiBbRGlzcGF0Y2hlcnMuQ29sbGVjdCwgRGlzcGF0Y2hlcnMuUmVtb3RlQ29tbWFuZHMsIERpc3BhdGNoZXJzLlRhZ01hbmFnZW1lbnRdLFxuICpcdFx0XHRjb2xsZWN0b3JzOiBbQ29sbGVjdG9ycy5BcHBEYXRhLCBDb2xsZWN0b3JzLkRldmljZURhdGEsIENvbGxlY3RvcnMuTGlmZWN5Y2xlLCBDb2xsZWN0b3JzLkNvbm5lY3Rpdml0eV0sXG4gKlx0XHRcdGNvbnNlbnRMb2dnaW5nRW5hYmxlZDogdHJ1ZSxcbiAqXHRcdFx0Y29uc2VudFBvbGljeTogQ29uc2VudFBvbGljeS5nZHByLFxuICpcdFx0XHR2aXNpdG9yU2VydmljZUVuYWJsZWQ6IHRydWUsXG4gKlx0XHRcdC8vIHZpc2l0b3JTZXJ2aWNlUmVmcmVzaEludGVydmFsOiAnMScsXG4gKlx0XHRcdGNvbnNlbnRFeHBpcnk6IG5ldyBDb25zZW50RXhwaXJ5KDMsIFRpbWVVbml0Lm1pbnV0ZXMpLFxuICpcdFx0fTtcbiAqXG4gKiBUZWFsaXVtLmluaXRpYWxpemUoY29uZmlnKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZWFsaXVtJyxcbiAgcGx1Z2luOiAndGVhbGl1bS1jb3Jkb3ZhLXBsdWdpbicsIC8vIG5wbSBwYWNrYWdlIG5hbWVcbiAgcGx1Z2luUmVmOiAndGVhbGl1bScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVhbGl1bS9jb3Jkb3ZhLXBsdWdpbicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWRcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVhbGl1bSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIFRlYWxpdW0gQ29yZG92YSBQbHVnaW5cbiAgICogQHBhcmFtIGNvbmZpZyB7VGVhbGl1bUNvbmZpZ31cbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRpYWxpemUoY29uZmlnOiBUZWFsaXVtQ29uZmlnLCBjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdHJhY2tzIGFuIGV2ZW50XG4gICAqIEBwYXJhbSBkaXNwYXRjaCB7VGVhbGl1bURpc3BhdGNofSBEaXNwYXRjaCBjb250YWluaW5nIGV2ZW50IGRhdGFcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2soZGlzcGF0Y2g6IFRlYWxpdW1EaXNwYXRjaCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdGVybWluYXRlc3QgdGhlIFRlYWxpdW0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdGVybWluYXRlSW5zdGFuY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBkYXRhIHRvIGRhdGEgbGF5ZXJcbiAgICogQHBhcmFtIGRhdGEgQSBtYXAgY29udGFpbmluZyB0aGUga2V5LXZhbHVlIHBhaXJzIHRvIGJlIGFkZGVkIHRvIGRhdGEgbGF5ZXJcbiAgICogQHBhcmFtIGV4cGlyeSBXaGVuIHRoZSBkYXRhIHNob3VsZCBleHBpcmUuIENob29zZSBgRXhwaXJ5LnNlc3Npb25gIGlmIHVuc3VyZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkRGF0YShkYXRhOiBNYXA8c3RyaW5nLCBhbnk+LCBleHBpcnk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIGtleSBvZiB0aGUgZGF0YSB0byByZXRyaWV2ZSBmcm9tIHRoZSBkYXRhIGxheWVyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhKGtleTogc3RyaW5nLCBjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBkYXRhIGZyb20gdGhlIGRhdGEgbGF5ZXJcbiAgICogQHBhcmFtIGtleXMgVGhlIGtleXMgb2YgdGhlIGRhdGEgdG8gYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW1vdmVEYXRhKGtleXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB1c2VyJ3MgY29uc2VudCBzdGF0dXNcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldENvbnNlbnRTdGF0dXMoY2FsbGJhY2s/OiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZXIncyBjb25zZW50IHN0YXR1c1xuICAgKiBAcGFyYW0gY29uc2VudFN0YXR1c1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRDb25zZW50U3RhdHVzKGNvbnNlbnRTdGF0dXM6IENvbnNlbnRTdGF0dXMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIncyBjb25zZW50IGNhdGVnb3JpZXNcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldENvbnNlbnRDYXRlZ29yaWVzKGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB1c2VyJ3MgY29uc2VudCBjYXRlZ29yaWVzXG4gICAqIEBwYXJhbSBjYXRlZ29yaWVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldENvbnNlbnRDYXRlZ29yaWVzKGNhdGVnb3JpZXM6IENvbnNlbnRDYXRlZ29yaWVzW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBKb2lucyBhIHRyYWNlIHNlc3Npb24gd2VpdGggdGhlIHNwZWNpZmllZCBUcmFjZSBJRFxuICAgKiBAcGFyYW0gaWQgVHJhY2UgSURcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgam9pblRyYWNlKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZWF2ZXMgYSB0cmFjZSBzZXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxlYXZlVHJhY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBUZWFsaXVtIFZpc2l0b3IgSURcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFZpc2l0b3JJZChjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBBdWRpZW5jZVN0cmVhbSB2aXNpdG9yIHByb2ZpbGUgaXMgdXBkYXRlZFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VmlzaXRvclNlcnZpY2VMaXN0ZW5lcihjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb25zZW50IGhhcyBleHBpcmVkXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRDb25zZW50RXhwaXJ5TGlzdGVuZXIoY2FsbGJhY2s/OiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSByZW1vdGUgY29tbWFuZCBmb3IgbGF0ZXIgZXhlY3V0aW9uXG4gICAqIEBwYXJhbSBpZCBUaGUgSUQgdXNlZCB0byBpbnZva2UgdGhlIHJlbW90ZSBjb21tYW5kXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRSZW1vdGVDb21tYW5kKGlkOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcHJldmlvdXNseS1hZGRlZCByZW1vdGUgY29tbWFuZFxuICAgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHJlbW90ZSBjb21tYW5kIHRvIGJlIHJlbW92ZWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlUmVtb3RlQ29tbWFuZChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUxpc3RlbmVycygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19