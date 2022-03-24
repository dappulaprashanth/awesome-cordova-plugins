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
import { AwesomeCordovaNativePlugin, checkAvailability, cordova, getPromise } from '@awesome-cordova-plugins/core';
var EmailComposerOriginal = /** @class */ (function (_super) {
    __extends(EmailComposerOriginal, _super);
    function EmailComposerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposerOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposerOriginal.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposerOriginal.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposerOriginal.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposerOriginal.pluginName = "EmailComposer";
    EmailComposerOriginal.plugin = "cordova-plugin-email-composer";
    EmailComposerOriginal.pluginRef = "cordova.plugins.email";
    EmailComposerOriginal.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposerOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    return EmailComposerOriginal;
}(AwesomeCordovaNativePlugin));
var EmailComposer = new EmailComposerOriginal();
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZW1haWwtY29tcG9zZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sMERBQTZELFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWlJbkYsaUNBQTBCOzs7O0lBVTNELHFDQUFhO0lBYWIseUNBQWlCO0lBVWpCLGtDQUFVOzs7bURBQWlCO2dCQUN6QixPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxNQUFlO3dCQUNuRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNoQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFVRCxpQ0FBUyxhQUFDLEdBQVk7OzttREFBZ0I7Z0JBQ3BDLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBQyxNQUFlOzRCQUN2RCxJQUFJLE1BQU0sRUFBRTtnQ0FDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2Y7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNoQjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBYzs0QkFDbEQsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxrQ0FBVTs7O21EQUFzQjtnQkFDOUIsT0FBTyxVQUFVLENBQVcsVUFBQyxPQUFPO29CQUNsQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBUzt3QkFDN0MsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLEVBQUU7NEJBQzlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBU0QsbUNBQVcsYUFBQyxHQUFZOzs7bURBQWdCO2dCQUN0QyxPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87d0JBQy9ELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBYUQsNEJBQUksYUFBQyxPQUE2QixFQUFFLEtBQVc7SUFXL0MsZ0NBQVEsYUFBQyxLQUFhLEVBQUUsV0FBbUI7Ozs7Ozt3QkFoUTdDO0VBa0ltQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWFpbENvbXBvc2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBcHAgdG8gc2VuZCB0aGUgZW1haWwgd2l0aFxuICAgKi9cbiAgYXBwPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgVG8gZmllbGRcbiAgICovXG4gIHRvPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBDQyBmaWVsZFxuICAgKi9cbiAgY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIEJDQyBmaWVsZFxuICAgKi9cbiAgYmNjPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgb3IgYmFzZTY0IGRhdGEgc3RyZWFtc1xuICAgKi9cbiAgYXR0YWNobWVudHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU3ViamVjdCBvZiB0aGUgZW1haWxcbiAgICovXG4gIHN1YmplY3Q/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsIGJvZHkgKGZvciBIVE1MLCBzZXQgaXNIdG1sIHRvIHRydWUpXG4gICAqL1xuICBib2R5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGJvZHkgaXMgSFRNTCBvciBwbGFpbiB0ZXh0XG4gICAqL1xuICBpc0h0bWw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgQ29udGVudCB0eXBlIG9mIHRoZSBlbWFpbCAoQW5kcm9pZCBvbmx5KVxuICAgKi9cbiAgdHlwZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBFbWFpbCBDb21wb3NlclxuICogQHByZW1pZXIgZW1haWwtY29tcG9zZXJcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3Nlci4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0VtYWlsIENvbXBvc2VyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vaHlwZXJ5MmsvY29yZG92YS1lbWFpbC1wbHVnaW4pLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBFbWFpbENvbXBvc2VyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2VtYWlsLWNvbXBvc2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBlbWFpbENvbXBvc2VyOiBFbWFpbENvbXBvc2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmdldENsaWVudHMoKS50aGVuKChhcHBzOiBbXSkgPT4ge1xuICogICAgLy8gUmV0dXJucyBhbiBhcnJheSBvZiBjb25maWd1cmVkIGVtYWlsIGNsaWVudHMgZm9yIHRoZSBkZXZpY2VcbiAqIH0pO1xuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNDbGllbnQoKS50aGVuKGFwcCwgKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHtcbiAqICBpZiAoaXNWYWxpZCkge1xuICogICAgLy8gTm93IHdlIGtub3cgd2UgaGF2ZSBhIHZhbGlkIGVtYWlsIGNsaWVudCBjb25maWd1cmVkXG4gKiAgICAvLyBOb3Qgc3BlY2lmeWluZyBhbiBhcHAgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZW1haWwgY2xpZW50IGlzIGNvbmZpZ3VyZWRcbiAqICB9XG4gKiB9KTtcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuaGFzQWNjb3VudCgpLnRoZW4oKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHtcbiAqICBpZiAoaXNWYWxpZCkge1xuICogICAgLy8gTm93IHdlIGtub3cgd2UgaGF2ZSBhIHZhbGlkIGVtYWlsIGFjY291bnQgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5pc0F2YWlsYWJsZSgpLnRoZW4oYXBwLCAoYXZhaWxhYmxlOiBib29sZWFuKSA9PiB7XG4gKiAgaWYoYXZhaWxhYmxlKSB7XG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBjYW4gc2VuZCBhbiBlbWFpbCwgY2FsbHMgaGFzQ2xpZW50IGFuZCBoYXNBY2NvdW50XG4gKiAgICAvLyBOb3Qgc3BlY2lmeWluZyBhbiBhcHAgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZW1haWwgY2xpZW50IGlzIGNvbmZpZ3VyZWRcbiAqICB9XG4gKiB9KTtcbiAqXG4gKiBsZXQgZW1haWwgPSB7XG4gKiAgIHRvOiAnbWF4QG11c3Rlcm1hbm4uZGUnLFxuICogICBjYzogJ2VyaWthQG11c3Rlcm1hbm4uZGUnLFxuICogICBiY2M6IFsnam9obkBkb2UuY29tJywgJ2phbmVAZG9lLmNvbSddLFxuICogICBhdHRhY2htZW50czogW1xuICogICAgICdmaWxlOi8vaW1nL2xvZ28ucG5nJyxcbiAqICAgICAncmVzOi8vaWNvbi5wbmcnLFxuICogICAgICdiYXNlNjQ6aWNvbi5wbmcvL2lWQk9SdzBLR2dvQUFBQU5TVWhFVWcuLi4nLFxuICogICAgICdmaWxlOi8vUkVBRE1FLnBkZidcbiAqICAgXSxcbiAqICAgc3ViamVjdDogJ0NvcmRvdmEgSWNvbnMnLFxuICogICBib2R5OiAnSG93IGFyZSB5b3U/IE5pY2UgZ3JlZXRpbmdzIGZyb20gTGVpcHppZycsXG4gKiAgIGlzSHRtbDogdHJ1ZVxuICogfVxuICpcbiAqIC8vIFNlbmQgYSB0ZXh0IG1lc3NhZ2UgdXNpbmcgZGVmYXVsdCBvcHRpb25zXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIub3BlbihlbWFpbCk7XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFsc28gYXNzaWduIGFsaWFzZXMgdG8gZW1haWwgYXBwc1xuICogYGBgdHNcbiAqIC8vIGFkZCBhbGlhc1xuICogdGhpcy5lbWFpbC5hZGRBbGlhcygnZ21haWwnLCAnY29tLmdvb2dsZS5hbmRyb2lkLmdtJyk7XG4gKlxuICogLy8gdGhlbiB1c2UgYWxpYXMgd2hlbiBzZW5kaW5nIGVtYWlsXG4gKiB0aGlzLmVtYWlsLm9wZW4oe1xuICogICBhcHA6ICdnbWFpbCcsXG4gKiAgIC4uLlxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBFbWFpbENvbXBvc2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0VtYWlsQ29tcG9zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3NlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5lbWFpbCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdtYWNPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBhcHAgaGFzIGEgcGVybWlzc2lvbiB0byBhY2Nlc3MgZW1haWwgYWNjb3VudHMgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIGFjY2VzcyBlbWFpbCBhY2NvdW50cyBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgYW4gZW1haWwgYWNjb3VudCBpcyBjb25maWd1cmVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgaGFzQWNjb3VudCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0FjY291bnQoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgYSBzcGVjaWZpYyBlbWFpbCBjbGllbnQgaXMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG5cbiAgQENvcmRvdmFDaGVjaygpXG4gIGhhc0NsaWVudChhcHA/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoYXBwKSB7XG4gICAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuaGFzQ2xpZW50KGFwcCwgKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmdldENsaWVudHMoKGFwcHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShhcHBzICYmIGFwcHMubGVuZ3RoID4gMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZW1haWwgY2xpZW50cyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBnZXRDbGllbnRzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxzdHJpbmdbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuZ2V0Q2xpZW50cygoYXBwczogYW55KSA9PiB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXBwcykgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgICAgICAgYXBwcyA9IFthcHBzXTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGFwcHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgc2VuZGluZyBlbWFpbHMgaXMgc3VwcG9ydGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBpc0F2YWlsYWJsZShhcHA/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5oYXNBY2NvdW50LCB0aGlzLmhhc0NsaWVudChhcHApXSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzLmxlbmd0aCA9PT0gMiAmJiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMV0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGVtYWlsIGNvbXBvc2VyIHByZS1maWxsZWQgd2l0aCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0VtYWlsQ29tcG9zZXJPcHRpb25zfSBvcHRpb25zIEVtYWlsXG4gICAqIEBwYXJhbSB7YW55fSBbc2NvcGVdIFNjb3BlIGZvciB0aGUgcHJvbWlzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIEVtYWlsQ29tcG9zZXIgaGFzIGJlZW4gb3BlbmVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIG9wZW4ob3B0aW9uczogRW1haWxDb21wb3Nlck9wdGlvbnMsIHNjb3BlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBtYWlsIGFwcCBhbGlhcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzIFRoZSBhbGlhcyBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlTmFtZSBUaGUgcGFja2FnZSBuYW1lXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZEFsaWFzKGFsaWFzOiBzdHJpbmcsIHBhY2thZ2VOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XG59XG4iXX0=