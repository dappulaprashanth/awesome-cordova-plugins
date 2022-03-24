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
var BrowserTabOriginal = /** @class */ (function (_super) {
    __extends(BrowserTabOriginal, _super);
    function BrowserTabOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTabOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    BrowserTabOriginal.prototype.openUrl = function (url) { return cordova(this, "openUrl", {}, arguments); };
    BrowserTabOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    BrowserTabOriginal.pluginName = "BrowserTab";
    BrowserTabOriginal.plugin = "cordova-plugin-browsertab";
    BrowserTabOriginal.pluginRef = "cordova.plugins.browsertab";
    BrowserTabOriginal.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTabOriginal.platforms = ["Android", "iOS"];
    return BrowserTabOriginal;
}(AwesomeCordovaNativePlugin));
var BrowserTab = new BrowserTabOriginal();
export { BrowserTab };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnJvd3Nlci10YWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUM1RCw4QkFBMEI7Ozs7SUFNdEQsZ0NBQVc7SUFVWCw0QkFBTyxhQUFDLEdBQVc7SUFTbkIsMEJBQUs7Ozs7OztxQkEzRFQ7RUFrQ2dDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBCcm93c2VyIFRhYlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBhbiBpbnRlcmZhY2UgdG8gaW4tYXBwIGJyb3dzZXIgdGFicyB0aGF0IGV4aXN0IG9uIHNvbWUgbW9iaWxlIHBsYXRmb3Jtcywgc3BlY2lmaWNhbGx5IFtDdXN0b20gVGFic10oaHR0cDovL2RldmVsb3Blci5hbmRyb2lkLmNvbS90b29scy9zdXBwb3J0LWxpYnJhcnkvZmVhdHVyZXMuaHRtbCNjdXN0b20tdGFicykgb24gQW5kcm9pZCAoaW5jbHVkaW5nIHRoZSBbQ2hyb21lIEN1c3RvbSBUYWJzXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL211bHRpZGV2aWNlL2FuZHJvaWQvY3VzdG9tdGFicykgaW1wbGVtZW50YXRpb24pLCBhbmQgW1NGU2FmYXJpVmlld0NvbnRyb2xsZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L2lvcy9kb2N1bWVudGF0aW9uL1NhZmFyaVNlcnZpY2VzL1JlZmVyZW5jZS9TRlNhZmFyaVZpZXdDb250cm9sbGVyX1JlZi8pIG9uIGlPUy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJyb3dzZXJUYWIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYnJvd3Nlci10YWIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyb3dzZXJUYWI6IEJyb3dzZXJUYWIpIHtcbiAqXG4gKiAgIGJyb3dzZXJUYWIuaXNBdmFpbGFibGUoKVxuICogICAgIC50aGVuKGlzQXZhaWxhYmxlID0+IHtcbiAqICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICogICAgICAgICBicm93c2VyVGFiLm9wZW5VcmwoJ2h0dHBzOi8vaW9uaWMuaW8nKTtcbiAqICAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgIC8vIG9wZW4gVVJMIHdpdGggSW5BcHBCcm93c2VyIGluc3RlYWQgb3IgU2FmYXJpVmlld0NvbnRyb2xsZXJcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0Jyb3dzZXJUYWInLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJyb3dzZXJ0YWInLFxuICAgIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5icm93c2VydGFiJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3NlclRhYiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBCcm93c2VyVGFiIG9wdGlvbiBpcyBhdmFpbGFibGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjaGVjayBpcyBzdWNjZXNzZnVsIGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBwcm92aWRlZCBVUkwgdXNpbmcgYSBicm93c2VyIHRhYlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgIFRoZSBVUkwgeW91IHdhbnQgdG8gb3BlblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNoZWNrIG9wZW4gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgb3BlblVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgYnJvd3NlciB0YWJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjbG9zZSB3YXMgZmluaXNoZWRcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbiJdfQ==