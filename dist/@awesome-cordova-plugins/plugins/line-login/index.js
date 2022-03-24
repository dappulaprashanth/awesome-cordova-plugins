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
var LineLoginOriginal = /** @class */ (function (_super) {
    __extends(LineLoginOriginal, _super);
    function LineLoginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLoginOriginal.prototype.initialize = function (param) { return cordova(this, "initialize", {}, arguments); };
    LineLoginOriginal.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    LineLoginOriginal.prototype.loginWeb = function () { return cordova(this, "loginWeb", {}, arguments); };
    LineLoginOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    LineLoginOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.verifyAccessToken = function () { return cordova(this, "verifyAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.refreshAccessToken = function () { return cordova(this, "refreshAccessToken", {}, arguments); };
    LineLoginOriginal.pluginName = "LineLogin";
    LineLoginOriginal.plugin = "cordova-line-login-plugin";
    LineLoginOriginal.pluginRef = "lineLogin";
    LineLoginOriginal.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLoginOriginal.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLoginOriginal.installVariables = ["LINE_CHANNEL_ID"];
    LineLoginOriginal.platforms = ["Android", "iOS"];
    return LineLoginOriginal;
}(AwesomeCordovaNativePlugin));
var LineLogin = new LineLoginOriginal();
export { LineLogin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGluZS1sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnRjdELDZCQUEwQjs7OztJQVF2RCw4QkFBVSxhQUFDLEtBQXNCO0lBVWpDLHlCQUFLO0lBV0wsNEJBQVE7SUFVUiwwQkFBTTtJQVVOLGtDQUFjO0lBVWQscUNBQWlCO0lBVWpCLHNDQUFrQjs7Ozs7Ozs7b0JBdEpwQjtFQWlGK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpblBhcmFtcyB7XG4gIC8qKlxuICAgKiBMaW5lIENoYW5uZWwgSURcbiAgICovXG4gIGNoYW5uZWxfaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5Qcm9maWxlIHtcbiAgLyoqXG4gICAqIExpbmUgVXNlciBJRFxuICAgKi9cbiAgdXNlcklEOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpbmUgUHJvZmlsZSBJbWFnZSBVUkxcbiAgICovXG4gIHBpY3R1cmVVUkw6IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBQcm9maWxlIE5hbWVcbiAgICovXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsXG4gICAqL1xuICBlbWFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5BY2Nlc3NUb2tlbiB7XG4gIC8qKlxuICAgKiBMaW5lIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgYWNjZXNzVG9rZW46IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBBY2Nlc3MgVG9rZW4gRXhwaXJlIFRpbWVcbiAgICovXG4gIGV4cGlyZVRpbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBMaW5lIExvZ2luXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBsb2dpbiwgbG9ncyBvdXQsIGFjcXVpcmVzLCB2ZXJpZmllcywgYW5kIHJlZnJlc2hlcyB0aGUgYWNjZXNzIHRva2VuLiBUaGUgdmVyc2lvbiBvZiBMaW5lU0RLIHlvdSBhcmUgdXNpbmcgaXMgYXMgZm9sbG93cy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTGluZUxvZ2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xpbmUtbG9naW4vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsaW5lTG9naW46IExpbmVMb2dpbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMubGluZUxvZ2luLmluaXRpYWxpemUoeyBjaGFubmVsX2lkOiBcInh4eHh4eHh4eHhcIiB9KVxuICpcbiAqIHRoaXMubGluZUxvZ2luLmxvZ2luKClcbiAqICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTGluZUxvZ2luUGFyYW1zXG4gKiBMaW5lTG9naW5Qcm9maWxlXG4gKiBMaW5lTG9naW5BY2Nlc3NUb2tlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xpbmVMb2dpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdsaW5lTG9naW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25yaWtpamkvY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBodHRwczovL2dpdGh1Yi5jb20vbnJpa2lqaS9jb3Jkb3ZhLWxpbmUtbG9naW4tcGx1Z2luLmdpdCAtLXZhcmlhYmxlIExJTkVfQ0hBTk5FTF9JRD1cInlvdXJfbGluZV9jaGFubmVsX2lkXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0xJTkVfQ0hBTk5FTF9JRCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGluZUxvZ2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZVxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW0gTGluZUxvZ2luUGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRpYWxpemUocGFyYW06IExpbmVMb2dpblBhcmFtcyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ2luXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbigpOiBQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9naW4gd2l0aCBXZWJcbiAgICogKGlPUyBvbmx5KVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW5XZWIoKTogUHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFjY2VzcyBUb2tlblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxMaW5lTG9naW5BY2Nlc3NUb2tlbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8TGluZUxvZ2luQWNjZXNzVG9rZW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IEFjY2Vzc1Rva2VuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcmlmeUFjY2Vzc1Rva2VuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggQWNjZXNzIFRva2VuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZnJlc2hBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19