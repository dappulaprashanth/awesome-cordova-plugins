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
var IosASWebauthenticationSessionOriginal = /** @class */ (function (_super) {
    __extends(IosASWebauthenticationSessionOriginal, _super);
    function IosASWebauthenticationSessionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSessionOriginal.prototype.start = function (callbackUrl, authorizeURL) { return cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSessionOriginal.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSessionOriginal.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSessionOriginal.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.platforms = ["iOS"];
    return IosASWebauthenticationSessionOriginal;
}(AwesomeCordovaNativePlugin));
var IosASWebauthenticationSession = new IosASWebauthenticationSessionOriginal();
export { IosASWebauthenticationSession };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUErQnpDLGlEQUEwQjs7OztJQVMzRSw2Q0FBSyxhQUFDLFdBQW1CLEVBQUUsWUFBb0I7Ozs7Ozt3Q0F6Q2pEO0VBZ0NtRCwwQkFBMEI7U0FBaEUsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBpb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsdWdpbiBmb3IgaU9TIDEyIEFTV2ViQXV0aGVudGljYXRpb25TZXNzaW9uIEFQSVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb246IGlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGkpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLklvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uLnN0YXJ0KGNhbGxiYWNrVXJsLCBhdXRob3JpemVVUkwpXG4gKiAgIC50aGVuKChyZWRpcmVjdFVybDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZWRpcmVjdFVybCkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5BU1dlYkF1dGhTZXNzaW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qd2Vsa2VyMTEwL2NvcmRvdmEtcGx1Z2luLWlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGknLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdGFydCBhbiBhdXRoZW50aWNhdGlvbiBmbG93IGluIEFTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFja1VybCB7c3RyaW5nfSBDYWxsYmFjayBVUkwgb2YgeW91ciBBcHBcbiAgICogQHBhcmFtIGF1dGhvcml6ZVVSTCB7bnVtYmVyfSBBdXRob3JpemF0aW9uIFVSTFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHJlZGlyZWN0IFVSTCBhZnRlciBmaW5pc2hpbmcgQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQoY2FsbGJhY2tVcmw6IHN0cmluZywgYXV0aG9yaXplVVJMOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19