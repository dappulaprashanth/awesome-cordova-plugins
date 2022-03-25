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
var GooglePlusOriginal = /** @class */ (function (_super) {
    __extends(GooglePlusOriginal, _super);
    function GooglePlusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooglePlusOriginal.prototype.login = function (options) { return cordova(this, "login", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GooglePlusOriginal.prototype.trySilentLogin = function (options) { return cordova(this, "trySilentLogin", {}, arguments); };
    GooglePlusOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    GooglePlusOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    GooglePlusOriginal.prototype.getSigningCertificateFingerprint = function () { return cordova(this, "getSigningCertificateFingerprint", {}, arguments); };
    GooglePlusOriginal.pluginName = "GooglePlus";
    GooglePlusOriginal.plugin = "cordova-plugin-googleplus";
    GooglePlusOriginal.pluginRef = "window.plugins.googleplus";
    GooglePlusOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-googleplus";
    GooglePlusOriginal.install = "ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid";
    GooglePlusOriginal.installVariables = ["REVERSED_CLIENT_ID"];
    GooglePlusOriginal.platforms = ["Android", "iOS"];
    return GooglePlusOriginal;
}(AwesomeCordovaNativePlugin));
var GooglePlus = new GooglePlusOriginal();
export { GooglePlus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ29vZ2xlLXBsdXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNkI1RCw4QkFBMEI7Ozs7SUFXeEQsMEJBQUssYUFBQyxPQUFZO0lBV2xCLG1DQUFjLGFBQUMsT0FBYTtJQVU1QiwyQkFBTTtJQVVOLCtCQUFVO0lBVVYscURBQWdDOzs7Ozs7OztxQkFsRmxDO0VBOEJnQywwQkFBMEI7U0FBN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR29vZ2xlIFBsdXNcbiAqIEBkZXNjcmlwdGlvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVQbHVzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2dvb2dsZS1wbHVzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnb29nbGVQbHVzOiBHb29nbGVQbHVzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmdvb2dsZVBsdXMubG9naW4oe30pXG4gKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlUGx1cycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZXBsdXMnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5nb29nbGVwbHVzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVwbHVzJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGVwbHVzIC0tdmFyaWFibGUgUkVWRVJTRURfQ0xJRU5UX0lEPW15cmV2ZXJzZWRjbGllbnRpZCcsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUkVWRVJTRURfQ0xJRU5UX0lEJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVQbHVzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhlIGxvZ2luIGZ1bmN0aW9uIHdhbGtzIHRoZSB1c2VyIHRocm91Z2ggdGhlIEdvb2dsZSBBdXRoIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIGxvZ2luKG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2FsbCB0cnlTaWxlbnRMb2dpbiB0byBjaGVjayBpZiB0aGV5J3JlIGFscmVhZHkgc2lnbmVkIGluIHRvIHRoZSBhcHAgYW5kIHNpZ24gdGhlbSBpbiBzaWxlbnRseSBpZiB0aGV5IGFyZS5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJ5U2lsZW50TG9naW4ob3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjbGVhciB0aGUgT0F1dGgyIHRva2VuLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIGNsZWFyIHRoZSBPQXV0aDIgdG9rZW4sIGZvcmdldCB3aGljaCBhY2NvdW50IHdhcyB1c2VkIHRvIGxvZ2luLCBhbmQgZGlzY29ubmVjdCB0aGF0IGFjY291bnQgZnJvbSB0aGUgYXBwLiBUaGlzIHdpbGwgcmVxdWlyZSB0aGUgdXNlciB0byBhbGxvdyB0aGUgYXBwIGFjY2VzcyBhZ2FpbiBuZXh0IHRpbWUgdGhleSBzaWduIGluLiBCZSBhd2FyZSB0aGF0IHRoaXMgZWZmZWN0IGlzIG5vdCBhbHdheXMgaW5zdGFudGFuZW91cy4gSXQgY2FuIHRha2UgdGltZSB0byBjb21wbGV0ZWx5IGRpc2Nvbm5lY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIHJldHJpZXZlIHRoZSBBbmRyb2lkIHNpZ25pbmcgY2VydGlmaWNhdGUgZmluZ2VycHJpbnQgd2hpY2ggaXMgcmVxdWlyZWQgaW4gdGhlIEdvb2dsZSBEZXZlbG9wZXIgQ29uc29sZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2lnbmluZ0NlcnRpZmljYXRlRmluZ2VycHJpbnQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==