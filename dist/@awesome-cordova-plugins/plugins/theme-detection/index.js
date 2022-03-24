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
var ThemeDetectionOriginal = /** @class */ (function (_super) {
    __extends(ThemeDetectionOriginal, _super);
    function ThemeDetectionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetectionOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThemeDetectionOriginal.prototype.isDarkModeEnabled = function () { return cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetectionOriginal.pluginName = "ThemeDetection";
    ThemeDetectionOriginal.plugin = "cordova-plugin-theme-detection";
    ThemeDetectionOriginal.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetectionOriginal.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetectionOriginal.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetectionOriginal.installVariables = [];
    ThemeDetectionOriginal.platforms = ["iOS", "Android"];
    return ThemeDetectionOriginal;
}(AwesomeCordovaNativePlugin));
var ThemeDetection = new ThemeDetectionOriginal();
export { ThemeDetection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGhlbWUtZGV0ZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStDeEQsa0NBQTBCOzs7O0lBTzVELG9DQUFXO0lBVVgsMENBQWlCOzs7Ozs7Ozt5QkFqRW5CO0VBZ0RvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVEZXRlY3Rpb25SZXNwb25zZSB7XG4gIC8vIEJvb2xlYW4gdmFsdWUgYWJvdXQgdGhlIHN0YXR1cyBvZiB0aGUgcmVxdWVzdFxuICB2YWx1ZTogYm9vbGVhbjtcblxuICAvLyBNZXNzYWdlIGZvciByZWFkYWJsZSB1c2FnZVxuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIFRoZW1lIERldGVjdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBkZXRlY3Qgd2hldGhlciBkYXJrIG1vZGUgaXMgZW5hYmxlZCBvciBub3RcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVGhlbWVEZXRlY3Rpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdGhlbWUtZGV0ZWN0aW9uJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZURldGVjdGlvbjogVGhlbWVEZXRlY3Rpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMudGhlbWVEZXRlY3Rpb24uaXNBdmFpbGFibGUoKVxuICogICAudGhlbigocmVzOiBUaGVtZURldGVjdGlvblJlc3BvbnNlKSA9PiB7XG4gKiAgICAgIGlmKHJlcy52YWx1ZSkge1xuICogICAgICAgIHRoaXMudGhlbWVEZXRlY3Rpb24uaXNEYXJrTW9kZUVuYWJsZWQoKS50aGVuKChyZXM6IFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2UpID0+IHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gKiAgICAgICAgfSlcbiAqICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqICAgICAgfVxuICogICB9KVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUaGVtZURldGVjdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRoZW1lLWRldGVjdGlvbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5UaGVtZURldGVjdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaXVzYmFja2VzL2NvcmRvdmEtcGx1Z2luLXRoZW1lLWRldGVjdGlvbicsXG4gIGluc3RhbGw6ICdjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tdGhlbWUtZGV0ZWN0aW9uJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaGVtZURldGVjdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+fVxuICAgKiAgUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbiBvYmplY3QgdGhhdCBoYXMgYSBib29sZWFuIHByb3BlcnR5IHdoaWNoIGdpdmVzIGluZm9ybWF0aW9uIGlmIHRoZSBkZXRlY3Rpb24gaXMgYXZhaWxhYmxlIG9yIG5vdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT59XG4gICAqICBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuIG9iamVjdCB0aGF0IGhhcyBhIGJvb2xlYW4gcHJvcGVydHkgd2hpY2ggZ2l2ZXMgaW5mb3JtYXRpb24gaWYgZGFyayBtb2RlIGlzIGVuYWJsZWQgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRGFya01vZGVFbmFibGVkKCk6IFByb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19