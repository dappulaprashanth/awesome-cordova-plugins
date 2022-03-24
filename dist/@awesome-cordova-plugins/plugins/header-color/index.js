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
var HeaderColorOriginal = /** @class */ (function (_super) {
    __extends(HeaderColorOriginal, _super);
    function HeaderColorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColorOriginal.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColorOriginal.pluginName = "HeaderColor";
    HeaderColorOriginal.plugin = "cordova-plugin-headercolor";
    HeaderColorOriginal.pluginRef = "plugins.headerColor";
    HeaderColorOriginal.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColorOriginal.platforms = ["Android"];
    return HeaderColorOriginal;
}(AwesomeCordovaNativePlugin));
var HeaderColor = new HeaderColorOriginal();
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaGVhZGVyLWNvbG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlCM0QsK0JBQTBCOzs7O0lBWXpELDBCQUFJLGFBQUMsS0FBYTs7Ozs7O3NCQXRDcEI7RUEwQmlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBIZWFkZXIgQ29sb3JcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gY2hhbmdlIGNvbG9yIG9mIGhlYWRlciBpbiBBbmRyb2lkIE11bHRpdGFzayBWaWV3XG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhlYWRlckNvbG9yIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2hlYWRlci1jb2xvci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyQ29sb3I6IEhlYWRlckNvbG9yKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmhlYWRlckNvbG9yLnRpbnQoJyNiZWNiMjknKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hlYWRlckNvbG9yJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taGVhZGVyY29sb3InLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmhlYWRlckNvbG9yJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b21sb3Byb2QvY29yZG92YS1wbHVnaW4taGVhZGVyY29sb3InLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb2xvciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNldCBhIGNvbG9yIHRvIHRoZSB0YXNrIGhlYWRlclxuICAgKlxuICAgKiBAcGFyYW0gY29sb3Ige3N0cmluZ30gVGhlIGhleCB2YWx1ZSBvZiB0aGUgY29sb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxuICB9KVxuICB0aW50KGNvbG9yOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19