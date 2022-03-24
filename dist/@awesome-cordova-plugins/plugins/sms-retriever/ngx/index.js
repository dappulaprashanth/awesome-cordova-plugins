import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var SmsRetriever = /** @class */ (function (_super) {
    __extends(SmsRetriever, _super);
    function SmsRetriever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetriever.prototype.startWatching = function () { return cordova(this, "startWatching", {}, arguments); };
    SmsRetriever.prototype.getAppHash = function () { return cordova(this, "getAppHash", {}, arguments); };
    SmsRetriever.pluginName = "SmsRetriever";
    SmsRetriever.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetriever.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetriever.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetriever.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetriever.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetriever.platforms = ["Android"];
    SmsRetriever.decorators = [
        { type: Injectable }
    ];
    return SmsRetriever;
}(AwesomeCordovaNativePlugin));
export { SmsRetriever };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zLXJldHJpZXZlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFtQzFELGdDQUEwQjs7OztJQU8xRCxvQ0FBYTtJQVViLGlDQUFVOzs7Ozs7Ozs7Z0JBbEJYLFVBQVU7O3VCQW5DWDtFQW9Da0MsMEJBQTBCO1NBQS9DLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNtcyBSZXRyaWV2ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcmV0cml2ZXMgdGhlIFNNUyB3aGljaCBhcnJpdmUgd2l0aG91dCByZXF1aXJpbmcgUkVBRCBwZXJtaXNzaW9ucy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU21zUmV0cmlldmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3Ntcy1yZXRyaWV2ZXInO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtc1JldHJpZXZlcjogU21zUmV0cmlldmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zbXNSZXRyaWV2ZXIuZ2V0QXBwSGFzaCgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiB0aGlzLnNtc1JldHJpZXZlci5zdGFydFdhdGNoaW5nKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTbXNSZXRyaWV2ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zbXMtcmV0cmlldmVyLW1hbmFnZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuc21zUmV0cmlldmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYW5hdGhhcmVzaDI3MTIvaW9uaWMtbmF0aXZlLXNtcy1yZXRyaWV2ZXItcGx1Z2luLW1hc3RlcicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlci1tYW5hZ2VyIC0tdmFyaWFibGUgUExBWV9TRVJWSUNFU19WRVJTSU9OPVwiMTUuMC4xXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BMQVlfU0VSVklDRVNfVkVSU0lPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTbXNSZXRyaWV2ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0IHdhdGhjaGluZyBtZXNzYWdlIGFycml2ZSBldmVudCBhbmQgcmV0cml2ZSBtZXNzYWdlIHRleHQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiByZXRyaXZlcyBTTVMgdGV4dCBvciBUSU1FT1VUIGFmdGVyIDUgbWluLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFdhdGNoaW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgdG8gZ2V0IGhhc2ggc3RyaW5nIG9mIEFQUC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHN1Y2Nlc3NmdWxseSBnZW5lcmF0ZSBoYXNoIG9mIEFQUC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwSGFzaCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19