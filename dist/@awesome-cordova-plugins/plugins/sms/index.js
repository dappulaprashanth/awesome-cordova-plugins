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
var SMSOriginal = /** @class */ (function (_super) {
    __extends(SMSOriginal, _super);
    function SMSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSOriginal.prototype.send = function (phoneNumber, message, options) { return cordova(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMSOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMSOriginal.pluginName = "SMS";
    SMSOriginal.plugin = "cordova-sms-plugin";
    SMSOriginal.pluginRef = "sms";
    SMSOriginal.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMSOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return SMSOriginal;
}(AwesomeCordovaNativePlugin));
var SMS = new SMSOriginal();
export { SMS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW1EbkUsdUJBQTBCOzs7O0lBYWpELGtCQUFJLGFBQUMsV0FBOEIsRUFBRSxPQUFlLEVBQUUsT0FBb0I7SUFZMUUsMkJBQWE7Ozs7OztjQTdFZjtFQW9EeUIsMEJBQTBCO1NBQXRDLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHNlbmRpbmcgYW4gU01TXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU21zT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byByZXBsYWNlIFxcbiBieSBhIG5ldyBsaW5lLiBEZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgcmVwbGFjZUxpbmVCcmVha3M/OiBib29sZWFuO1xuXG4gIGFuZHJvaWQ/OiBTbXNPcHRpb25zQW5kcm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbXNPcHRpb25zQW5kcm9pZCB7XG4gIC8qKlxuICAgKiBTZXQgdG8gXCJJTlRFTlRcIiB0byBzZW5kIFNNUyB3aXRoIHRoZSBuYXRpdmUgYW5kcm9pZCBTTVMgbWVzc2FnaW5nLiBMZWF2aW5nIGl0IGVtcHR5IHdpbGwgc2VuZCB0aGUgU01TIHdpdGhvdXQgb3BlbmluZyBhbnkgYXBwLlxuICAgKi9cbiAgaW50ZW50Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFNNU1xuICogQGRlc2NyaXB0aW9uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtc21zLXBsdWdpbi4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NNUyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtc21zL2NvcmRvdmEtc21zLXBsdWdpbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNNUyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zbXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtczogU01TKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFNlbmQgYSB0ZXh0IG1lc3NhZ2UgdXNpbmcgZGVmYXVsdCBvcHRpb25zXG4gKiB0aGlzLnNtcy5zZW5kKCc0MTYxMjM0NTYnLCAnSGVsbG8gd29ybGQhJyk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBTbXNPcHRpb25zXG4gKiBTbXNPcHRpb25zQW5kcm9pZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NNUycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc21zLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ3NtcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNNUyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNlbmRzIHNtcyB0byBhIG51bWJlclxuICAgKlxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIge3N0cmluZ3xzdHJpbmdbXX0gUGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICogQHBhcmFtIG9wdGlvbnMge1Ntc09wdGlvbnN9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSBTTVMgaGFzIGJlZW4gc2VudFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBzZW5kKHBob25lTnVtYmVyOiBzdHJpbmcgfCBzdHJpbmdbXSwgbWVzc2FnZTogc3RyaW5nLCBvcHRpb25zPzogU21zT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gbGV0cyB5b3Uga25vdyBpZiB0aGUgYXBwIGhhcyBwZXJtaXNzaW9uIHRvIHNlbmQgU01TXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHdlIGhhdmUgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIH0pXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=