import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var GooglePlus = /** @class */ (function (_super) {
    __extends(GooglePlus, _super);
    function GooglePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooglePlus.prototype.login = function (options) { return cordova(this, "login", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GooglePlus.prototype.trySilentLogin = function (options) { return cordova(this, "trySilentLogin", {}, arguments); };
    GooglePlus.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    GooglePlus.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    GooglePlus.prototype.getSigningCertificateFingerprint = function () { return cordova(this, "getSigningCertificateFingerprint", {}, arguments); };
    GooglePlus.pluginName = "GooglePlus";
    GooglePlus.plugin = "cordova-plugin-googleplus";
    GooglePlus.pluginRef = "window.plugins.googleplus";
    GooglePlus.repo = "https://github.com/EddyVerbruggen/cordova-plugin-googleplus";
    GooglePlus.install = "ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid";
    GooglePlus.installVariables = ["REVERSED_CLIENT_ID"];
    GooglePlus.platforms = ["Android", "iOS"];
    GooglePlus.decorators = [
        { type: Injectable }
    ];
    return GooglePlus;
}(AwesomeCordovaNativePlugin));
export { GooglePlus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ29vZ2xlLXBsdXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNkI1RCw4QkFBMEI7Ozs7SUFXeEQsMEJBQUssYUFBQyxPQUFZO0lBV2xCLG1DQUFjLGFBQUMsT0FBYTtJQVU1QiwyQkFBTTtJQVVOLCtCQUFVO0lBVVYscURBQWdDOzs7Ozs7Ozs7Z0JBckRqQyxVQUFVOztxQkE3Qlg7RUE4QmdDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBHb29nbGUgUGx1c1xuICogQGRlc2NyaXB0aW9uXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEdvb2dsZVBsdXMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ29vZ2xlLXBsdXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZVBsdXM6IEdvb2dsZVBsdXMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZ29vZ2xlUGx1cy5sb2dpbih7fSlcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVQbHVzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cycsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLmdvb2dsZXBsdXMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLWdvb2dsZXBsdXMnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdvb2dsZXBsdXMgLS12YXJpYWJsZSBSRVZFUlNFRF9DTElFTlRfSUQ9bXlyZXZlcnNlZGNsaWVudGlkJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydSRVZFUlNFRF9DTElFTlRfSUQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZVBsdXMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGUgbG9naW4gZnVuY3Rpb24gd2Fsa3MgdGhlIHVzZXIgdGhyb3VnaCB0aGUgR29vZ2xlIEF1dGggcHJvY2Vzcy5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgbG9naW4ob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjYWxsIHRyeVNpbGVudExvZ2luIHRvIGNoZWNrIGlmIHRoZXkncmUgYWxyZWFkeSBzaWduZWQgaW4gdG8gdGhlIGFwcCBhbmQgc2lnbiB0aGVtIGluIHNpbGVudGx5IGlmIHRoZXkgYXJlLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cnlTaWxlbnRMb2dpbihvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIGNsZWFyIHRoZSBPQXV0aDIgdG9rZW4uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgY2xlYXIgdGhlIE9BdXRoMiB0b2tlbiwgZm9yZ2V0IHdoaWNoIGFjY291bnQgd2FzIHVzZWQgdG8gbG9naW4sIGFuZCBkaXNjb25uZWN0IHRoYXQgYWNjb3VudCBmcm9tIHRoZSBhcHAuIFRoaXMgd2lsbCByZXF1aXJlIHRoZSB1c2VyIHRvIGFsbG93IHRoZSBhcHAgYWNjZXNzIGFnYWluIG5leHQgdGltZSB0aGV5IHNpZ24gaW4uIEJlIGF3YXJlIHRoYXQgdGhpcyBlZmZlY3QgaXMgbm90IGFsd2F5cyBpbnN0YW50YW5lb3VzLiBJdCBjYW4gdGFrZSB0aW1lIHRvIGNvbXBsZXRlbHkgZGlzY29ubmVjdC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgcmV0cmlldmUgdGhlIEFuZHJvaWQgc2lnbmluZyBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCB3aGljaCBpcyByZXF1aXJlZCBpbiB0aGUgR29vZ2xlIERldmVsb3BlciBDb25zb2xlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTaWduaW5nQ2VydGlmaWNhdGVGaW5nZXJwcmludCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19