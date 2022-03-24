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
var ClipboardOriginal = /** @class */ (function (_super) {
    __extends(ClipboardOriginal, _super);
    function ClipboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipboardOriginal.prototype.copy = function (text) { return cordova(this, "copy", {}, arguments); };
    ClipboardOriginal.prototype.paste = function () { return cordova(this, "paste", {}, arguments); };
    ClipboardOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    ClipboardOriginal.pluginName = "Clipboard";
    ClipboardOriginal.plugin = "cordova-clipboard";
    ClipboardOriginal.pluginRef = "cordova.plugins.clipboard";
    ClipboardOriginal.repo = "https://github.com/ihadeed/cordova-clipboard";
    ClipboardOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return ClipboardOriginal;
}(AwesomeCordovaNativePlugin));
var Clipboard = new ClipboardOriginal();
export { Clipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2xpcGJvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXFDN0QsNkJBQTBCOzs7O0lBUXZELHdCQUFJLGFBQUMsSUFBWTtJQVVqQix5QkFBSztJQVVMLHlCQUFLOzs7Ozs7b0JBbEVQO0VBc0MrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKipcbiAqIEBuYW1lIENsaXBib2FyZFxuICogQHByZW1pZXIgY2xpcGJvYXJkXG4gKiBAZGVzY3JpcHRpb25cbiAqIENsaXBib2FyZCBtYW5hZ2VtZW50IHBsdWdpbiBmb3IgQ29yZG92YSB0aGF0IHN1cHBvcnRzIGlPUywgQW5kcm9pZCwgYW5kIFdpbmRvd3MgUGhvbmUgOC5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2xpcGJvYXJkIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NsaXBib2FyZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpcGJvYXJkOiBDbGlwYm9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNsaXBib2FyZC5jb3B5KCdIZWxsbyB3b3JsZCcpO1xuICpcbiAqIHRoaXMuY2xpcGJvYXJkLnBhc3RlKCkudGhlbihcbiAqICAgIChyZXNvbHZlOiBzdHJpbmcpID0+IHtcbiAqICAgICAgIGFsZXJ0KHJlc29sdmUpO1xuICogICAgIH0sXG4gKiAgICAgKHJlamVjdDogc3RyaW5nKSA9PiB7XG4gKiAgICAgICBhbGVydCgnRXJyb3I6ICcgKyByZWplY3QpO1xuICogICAgIH1cbiAqICAgKTtcbiAqXG4gKiB0aGlzLmNsaXBib2FyZC5jbGVhcigpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2xpcGJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1jbGlwYm9hcmQnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuY2xpcGJvYXJkJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL2NvcmRvdmEtY2xpcGJvYXJkJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb3BpZXMgdGhlIGdpdmVuIHRleHRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dCB0aGF0IGdldHMgY29waWVkIG9uIHRoZSBzeXN0ZW0gY2xpcGJvYXJkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHRoZSB0ZXh0IGhhcyBiZWVuIGNvcGllZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3RlcyB0aGUgdGV4dCBzdG9yZWQgaW4gY2xpcGJvYXJkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHRoZSB0ZXh0IGhhcyBiZWVuIHBhc3RlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXN0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgdGV4dCBzdG9yZWQgaW4gY2xpcGJvYXJkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHRoZSB0ZXh0IGhhcyBiZWVuIGNsZWFuZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==