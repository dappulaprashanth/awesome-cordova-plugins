import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, checkAvailability, cordova, getPromise } from '@awesome-cordova-plugins/core';
var EmailComposer = /** @class */ (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposer.getPlugin().hasAccount(function (result) {
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
    EmailComposer.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposer.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposer.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.isAvailable = function (app) {
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
    EmailComposer.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    EmailComposer.decorators = [
        { type: Injectable }
    ];
    return EmailComposer;
}(AwesomeCordovaNativePlugin));
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZW1haWwtY29tcG9zZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sMERBQTZELFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWlJbkYsaUNBQTBCOzs7O0lBVTNELHFDQUFhO0lBYWIseUNBQWlCO0lBVWpCLGtDQUFVOzs7bURBQWlCO2dCQUN6QixPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxNQUFlO3dCQUNuRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNoQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFVRCxpQ0FBUyxhQUFDLEdBQVk7OzttREFBZ0I7Z0JBQ3BDLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBQyxNQUFlOzRCQUN2RCxJQUFJLE1BQU0sRUFBRTtnQ0FDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2Y7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNoQjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBYzs0QkFDbEQsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxrQ0FBVTs7O21EQUFzQjtnQkFDOUIsT0FBTyxVQUFVLENBQVcsVUFBQyxPQUFPO29CQUNsQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBUzt3QkFDN0MsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLEVBQUU7NEJBQzlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBU0QsbUNBQVcsYUFBQyxHQUFZOzs7bURBQWdCO2dCQUN0QyxPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87d0JBQy9ELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBYUQsNEJBQUksYUFBQyxPQUE2QixFQUFFLEtBQVc7SUFXL0MsZ0NBQVEsYUFBQyxLQUFhLEVBQUUsV0FBbUI7Ozs7Ozs7Z0JBL0g1QyxVQUFVOzt3QkFqSVg7RUFrSW1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUNoZWNrLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsQ29tcG9zZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIEFwcCB0byBzZW5kIHRoZSBlbWFpbCB3aXRoXG4gICAqL1xuICBhcHA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBUbyBmaWVsZFxuICAgKi9cbiAgdG8/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIENDIGZpZWxkXG4gICAqL1xuICBjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgQkNDIGZpZWxkXG4gICAqL1xuICBiY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRmlsZSBwYXRocyBvciBiYXNlNjQgZGF0YSBzdHJlYW1zXG4gICAqL1xuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTdWJqZWN0IG9mIHRoZSBlbWFpbFxuICAgKi9cbiAgc3ViamVjdD86IHN0cmluZztcblxuICAvKipcbiAgICogRW1haWwgYm9keSAoZm9yIEhUTUwsIHNldCBpc0h0bWwgdG8gdHJ1ZSlcbiAgICovXG4gIGJvZHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgYm9keSBpcyBIVE1MIG9yIHBsYWluIHRleHRcbiAgICovXG4gIGlzSHRtbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBDb250ZW50IHR5cGUgb2YgdGhlIGVtYWlsIChBbmRyb2lkIG9ubHkpXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEVtYWlsIENvbXBvc2VyXG4gKiBAcHJlbWllciBlbWFpbC1jb21wb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRW1haWwgQ29tcG9zZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9oeXBlcnkyay9jb3Jkb3ZhLWVtYWlsLXBsdWdpbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEVtYWlsQ29tcG9zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZW1haWwtY29tcG9zZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsQ29tcG9zZXI6IEVtYWlsQ29tcG9zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuZ2V0Q2xpZW50cygpLnRoZW4oKGFwcHM6IFtdKSA9PiB7XG4gKiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGNvbmZpZ3VyZWQgZW1haWwgY2xpZW50cyBmb3IgdGhlIGRldmljZVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0NsaWVudCgpLnRoZW4oYXBwLCAoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xuICogIGlmIChpc1ZhbGlkKSB7XG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgY2xpZW50IGNvbmZpZ3VyZWRcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNBY2NvdW50KCkudGhlbigoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xuICogIGlmIChpc1ZhbGlkKSB7XG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgYWNjb3VudCBjb25maWd1cmVkXG4gKiAgfVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmlzQXZhaWxhYmxlKCkudGhlbihhcHAsIChhdmFpbGFibGU6IGJvb2xlYW4pID0+IHtcbiAqICBpZihhdmFpbGFibGUpIHtcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGNhbiBzZW5kIGFuIGVtYWlsLCBjYWxscyBoYXNDbGllbnQgYW5kIGhhc0FjY291bnRcbiAqICAgIC8vIE5vdCBzcGVjaWZ5aW5nIGFuIGFwcCB3aWxsIHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBlbWFpbCBjbGllbnQgaXMgY29uZmlndXJlZFxuICogIH1cbiAqIH0pO1xuICpcbiAqIGxldCBlbWFpbCA9IHtcbiAqICAgdG86ICdtYXhAbXVzdGVybWFubi5kZScsXG4gKiAgIGNjOiAnZXJpa2FAbXVzdGVybWFubi5kZScsXG4gKiAgIGJjYzogWydqb2huQGRvZS5jb20nLCAnamFuZUBkb2UuY29tJ10sXG4gKiAgIGF0dGFjaG1lbnRzOiBbXG4gKiAgICAgJ2ZpbGU6Ly9pbWcvbG9nby5wbmcnLFxuICogICAgICdyZXM6Ly9pY29uLnBuZycsXG4gKiAgICAgJ2Jhc2U2NDppY29uLnBuZy8vaVZCT1J3MEtHZ29BQUFBTlNVaEVVZy4uLicsXG4gKiAgICAgJ2ZpbGU6Ly9SRUFETUUucGRmJ1xuICogICBdLFxuICogICBzdWJqZWN0OiAnQ29yZG92YSBJY29ucycsXG4gKiAgIGJvZHk6ICdIb3cgYXJlIHlvdT8gTmljZSBncmVldGluZ3MgZnJvbSBMZWlwemlnJyxcbiAqICAgaXNIdG1sOiB0cnVlXG4gKiB9XG4gKlxuICogLy8gU2VuZCBhIHRleHQgbWVzc2FnZSB1c2luZyBkZWZhdWx0IG9wdGlvbnNcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5vcGVuKGVtYWlsKTtcbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gYWxzbyBhc3NpZ24gYWxpYXNlcyB0byBlbWFpbCBhcHBzXG4gKiBgYGB0c1xuICogLy8gYWRkIGFsaWFzXG4gKiB0aGlzLmVtYWlsLmFkZEFsaWFzKCdnbWFpbCcsICdjb20uZ29vZ2xlLmFuZHJvaWQuZ20nKTtcbiAqXG4gKiAvLyB0aGVuIHVzZSBhbGlhcyB3aGVuIHNlbmRpbmcgZW1haWxcbiAqIHRoaXMuZW1haWwub3Blbih7XG4gKiAgIGFwcDogJ2dtYWlsJyxcbiAqICAgLi4uXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEVtYWlsQ29tcG9zZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRW1haWxDb21wb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmVtYWlsJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ21hY09TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcCBoYXMgYSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBlbWFpbCBhY2NvdW50cyBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBhbiBlbWFpbCBhY2NvdW50IGlzIGNvbmZpZ3VyZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBoYXNBY2NvdW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuaGFzQWNjb3VudCgocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBhIHNwZWNpZmljIGVtYWlsIGNsaWVudCBpcyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cblxuICBAQ29yZG92YUNoZWNrKClcbiAgaGFzQ2xpZW50KGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChhcHApIHtcbiAgICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5oYXNDbGllbnQoYXBwLCAocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuZ2V0Q2xpZW50cygoYXBwczogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICByZXNvbHZlKGFwcHMgJiYgYXBwcy5sZW5ndGggPiAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBlbWFpbCBjbGllbnRzIGluc3RhbGxlZCBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGdldENsaWVudHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPHN0cmluZ1tdPigocmVzb2x2ZSkgPT4ge1xuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcHBzKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgICBhcHBzID0gW2FwcHNdO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoYXBwcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBzZW5kaW5nIGVtYWlscyBpcyBzdXBwb3J0ZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGlzQXZhaWxhYmxlKGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLmhhc0FjY291bnQsIHRoaXMuaGFzQ2xpZW50KGFwcCldKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMubGVuZ3RoID09PSAyICYmIHJlc3VsdHNbMF0gJiYgcmVzdWx0c1sxXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgZW1haWwgY29tcG9zZXIgcHJlLWZpbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7RW1haWxDb21wb3Nlck9wdGlvbnN9IG9wdGlvbnMgRW1haWxcbiAgICogQHBhcmFtIHthbnl9IFtzY29wZV0gU2NvcGUgZm9yIHRoZSBwcm9taXNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgRW1haWxDb21wb3NlciBoYXMgYmVlbiBvcGVuZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgb3BlbihvcHRpb25zOiBFbWFpbENvbXBvc2VyT3B0aW9ucywgc2NvcGU/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IG1haWwgYXBwIGFsaWFzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWxpYXMgVGhlIGFsaWFzIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2thZ2VOYW1lIFRoZSBwYWNrYWdlIG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQWxpYXMoYWxpYXM6IHN0cmluZywgcGFja2FnZU5hbWU6IHN0cmluZyk6IHZvaWQge31cbn1cbiJdfQ==