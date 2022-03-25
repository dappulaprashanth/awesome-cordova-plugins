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
var MixpanelOriginal = /** @class */ (function (_super) {
    __extends(MixpanelOriginal, _super);
    function MixpanelOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixpanelOriginal.prototype.alias = function (aliasId, originalId) { return cordova(this, "alias", {}, arguments); };
    MixpanelOriginal.prototype.distinctId = function () { return cordova(this, "distinctId", {}, arguments); };
    MixpanelOriginal.prototype.flush = function () { return cordova(this, "flush", {}, arguments); };
    MixpanelOriginal.prototype.identify = function (distinctId, usePeople) { return cordova(this, "identify", {}, arguments); };
    MixpanelOriginal.prototype.init = function (token) { return cordova(this, "init", {}, arguments); };
    MixpanelOriginal.prototype.getSuperProperties = function () { return cordova(this, "getSuperProperties", {}, arguments); };
    MixpanelOriginal.prototype.registerSuperProperties = function (superProperties) { return cordova(this, "registerSuperProperties", {}, arguments); };
    MixpanelOriginal.prototype.registerSuperPropertiesOnce = function (superProperties) { return cordova(this, "registerSuperPropertiesOnce", {}, arguments); };
    MixpanelOriginal.prototype.unregisterSuperProperty = function (superPropertyName) { return cordova(this, "unregisterSuperProperty", {}, arguments); };
    MixpanelOriginal.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    MixpanelOriginal.prototype.timeEvent = function (eventName) { return cordova(this, "timeEvent", {}, arguments); };
    MixpanelOriginal.prototype.track = function (eventName, eventProperties) { return cordova(this, "track", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    MixpanelOriginal.pluginName = "Mixpanel";
    MixpanelOriginal.plugin = "cordova-plugin-mixpanel";
    MixpanelOriginal.pluginRef = "mixpanel";
    MixpanelOriginal.repo = "https://github.com/samzilverberg/cordova-mixpanel-plugin";
    MixpanelOriginal.platforms = ["Android", "Browser", "iOS"];
    return MixpanelOriginal;
}(AwesomeCordovaNativePlugin));
var Mixpanel = new MixpanelOriginal();
export { Mixpanel };
var MixpanelPeopleOriginal = /** @class */ (function (_super) {
    __extends(MixpanelPeopleOriginal, _super);
    function MixpanelPeopleOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixpanelPeopleOriginal.prototype.append = function (appendObject) { return cordova(this, "append", {}, arguments); };
    MixpanelPeopleOriginal.prototype.deleteUser = function () { return cordova(this, "deleteUser", {}, arguments); };
    MixpanelPeopleOriginal.prototype.identify = function (distinctId) { return cordova(this, "identify", {}, arguments); };
    MixpanelPeopleOriginal.prototype.increment = function (peopleProperties) { return cordova(this, "increment", {}, arguments); };
    MixpanelPeopleOriginal.prototype.setPushId = function (pushId) { return cordova(this, "setPushId", {}, arguments); };
    MixpanelPeopleOriginal.prototype.set = function (peopleProperties) { return cordova(this, "set", {}, arguments); };
    MixpanelPeopleOriginal.prototype.setOnce = function (peopleProperties) { return cordova(this, "setOnce", {}, arguments); };
    MixpanelPeopleOriginal.prototype.trackCharge = function (amount, chargeProperties) { return cordova(this, "trackCharge", {}, arguments); };
    MixpanelPeopleOriginal.prototype.unset = function (propertiesArray) { return cordova(this, "unset", {}, arguments); };
    MixpanelPeopleOriginal.prototype.union = function (unionObject) { return cordova(this, "union", {}, arguments); };
    MixpanelPeopleOriginal.plugin = "cordova-plugin-mixpanel";
    MixpanelPeopleOriginal.pluginRef = "mixpanel.people";
    MixpanelPeopleOriginal.pluginName = "Mixpanel";
    return MixpanelPeopleOriginal;
}(AwesomeCordovaNativePlugin));
var MixpanelPeople = new MixpanelPeopleOriginal();
export { MixpanelPeople };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWl4cGFuZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0M5RCw0QkFBMEI7Ozs7SUFTdEQsd0JBQUssYUFBQyxPQUFlLEVBQUUsVUFBbUI7SUFTMUMsNkJBQVU7SUFRVix3QkFBSztJQVlMLDJCQUFRLGFBQUMsVUFBa0IsRUFBRSxTQUFtQjtJQVVoRCx1QkFBSSxhQUFDLEtBQWE7SUFTbEIscUNBQWtCO0lBVWxCLDBDQUF1QixhQUFDLGVBQW9CO0lBVTVDLDhDQUEyQixhQUFDLGVBQW9CO0lBVWhELDBDQUF1QixhQUFDLGlCQUF5QjtJQVNqRCx3QkFBSztJQVVMLDRCQUFTLGFBQUMsU0FBaUI7SUFjM0Isd0JBQUssYUFBQyxTQUFpQixFQUFFLGVBQXFCOzs7Ozs7bUJBekpoRDtFQWlDOEIsMEJBQTBCO1NBQTNDLFFBQVE7O0lBc0llLGtDQUEwQjs7OztJQU81RCwrQkFBTSxhQUFDLFlBQWlCO0lBU3hCLG1DQUFVO0lBV1YsaUNBQVEsYUFBQyxVQUFrQjtJQVUzQixrQ0FBUyxhQUFDLGdCQUFxQjtJQVUvQixrQ0FBUyxhQUFDLE1BQWM7SUFVeEIsNEJBQUcsYUFBQyxnQkFBcUI7SUFVekIsZ0NBQU8sYUFBQyxnQkFBcUI7SUFXN0Isb0NBQVcsYUFBQyxNQUFjLEVBQUUsZ0JBQXFCO0lBVWpELDhCQUFLLGFBQUMsZUFBeUI7SUFVL0IsOEJBQUssYUFBQyxXQUFnQjs7Ozt5QkF6UXhCO0VBdUtvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmRlY2xhcmUgbGV0IG1peHBhbmVsOiBhbnk7XG5cbi8qKlxuICogQG5hbWUgTWl4cGFuZWxcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBQbHVnaW4gdGhhdCB3cmFwcyBNaXhwYW5lbCBTREsgZm9yIEFuZHJvaWQgYW5kIGlPU1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNaXhwYW5lbCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9taXhwYW5lbC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWl4cGFuZWw6IE1peHBhbmVsLCBwcml2YXRlIG1peHBhbmVsUGVvcGxlOiBNaXhwYW5lbFBlb3BsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5taXhwYW5lbC5pbml0KHRva2VuKVxuICogICAudGhlbihvblN1Y2Nlc3MpXG4gKiAgIC5jYXRjaChvbkVycm9yKTtcbiAqXG4gKiBgYGBcbiAqIEBjbGFzc2VzXG4gKiBNaXhwYW5lbFBlb3BsZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01peHBhbmVsJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWl4cGFuZWwnLFxuICBwbHVnaW5SZWY6ICdtaXhwYW5lbCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2FtemlsdmVyYmVyZy9jb3Jkb3ZhLW1peHBhbmVsLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1peHBhbmVsIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSWYgb3JpZ2luYWxJZCBpcyBvbWl0dGVkLCBhbGlhc0lkIHdpbGwgYmUgdXNlZCBhcyBvcmlnaW5hbElkLlxuICAgKlxuICAgKiBAcGFyYW0gYWxpYXNJZCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3JpZ2luYWxJZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhbGlhcyhhbGlhc0lkOiBzdHJpbmcsIG9yaWdpbmFsSWQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXN0aW5jdElkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZsdXNoKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB1c2VQZW9wbGUgcGFyYW1ldGVyIGlzIHVzZWQgZm9yIHRoZSBpT1MgTWl4cGFuZWwgU0RLLlxuICAgKlxuICAgKiBAcGFyYW0gZGlzdGluY3RJZCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXNlUGVvcGxlIHtib29sZWFufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpZGVudGlmeShkaXN0aW5jdElkOiBzdHJpbmcsIHVzZVBlb3BsZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW4ge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdCh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwZXJQcm9wZXJ0aWVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdXBlclByb3BlcnRpZXMge2FueX1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJTdXBlclByb3BlcnRpZXMoc3VwZXJQcm9wZXJ0aWVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc3VwZXJQcm9wZXJ0aWVzIHthbnl9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZ2lzdGVyU3VwZXJQcm9wZXJ0aWVzT25jZShzdXBlclByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdXBlclByb3BlcnR5TmFtZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bnJlZ2lzdGVyU3VwZXJQcm9wZXJ0eShzdXBlclByb3BlcnR5TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0aW1lRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBldmVudFByb3BlcnRpZXMge2FueX0gb3B0aW9uYWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgdHJhY2soZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50UHJvcGVydGllcz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWl4cGFuZWwnLFxuICBwbHVnaW5SZWY6ICdtaXhwYW5lbC5wZW9wbGUnLFxuICBwbHVnaW5OYW1lOiAnTWl4cGFuZWwnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNaXhwYW5lbFBlb3BsZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcHBlbmRPYmplY3Qge2FueX1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXBwZW5kKGFwcGVuZE9iamVjdDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlVXNlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGlzdGluY3RJZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyMDE2LTExLTIxIC0gVXNlIE1peHBhbmVsLmlkZW50aWZ5IGluc3RlYWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlkZW50aWZ5KGRpc3RpbmN0SWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwZW9wbGVQcm9wZXJ0aWVzIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluY3JlbWVudChwZW9wbGVQcm9wZXJ0aWVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcHVzaElkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFB1c2hJZChwdXNoSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwZW9wbGVQcm9wZXJ0aWVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldChwZW9wbGVQcm9wZXJ0aWVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcGVvcGxlUHJvcGVydGllcyB7YW55fVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRPbmNlKHBlb3BsZVByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhbW91bnQge251bWJlcn1cbiAgICogQHBhcmFtIGNoYXJnZVByb3BlcnRpZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tDaGFyZ2UoYW1vdW50OiBudW1iZXIsIGNoYXJnZVByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzQXJyYXlcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zZXQocHJvcGVydGllc0FycmF5OiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1bmlvbk9iamVjdCB7YW55fVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bmlvbih1bmlvbk9iamVjdDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==