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
var LowMemoryOriginal = /** @class */ (function (_super) {
    __extends(LowMemoryOriginal, _super);
    function LowMemoryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowMemoryOriginal.prototype.generateLowMemory = function () { return cordova(this, "generateLowMemory", {}, arguments); };
    LowMemoryOriginal.pluginName = "LowMemory";
    LowMemoryOriginal.plugin = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.pluginRef = "LowMemory";
    LowMemoryOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.platforms = ["Android", "iOS"];
    return LowMemoryOriginal;
}(AwesomeCordovaNativePlugin));
var LowMemory = new LowMemoryOriginal();
export { LowMemory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1sb3ctbWVtb3J5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCN0QsNkJBQTBCOzs7O0lBUXZELHFDQUFpQjs7Ozs7O29CQXJDbkI7RUE2QitCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIExvdyBNZW1vcnlcbiAqIEBkZXNjcmlwdGlvblxuICogR2VuZXJhdGVzIGEgbG93IG1lbW9yeSB3YXJuaW5nLlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWdlbmVyYXRlLWxvdy1tZW1vcnlcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTG93TWVtb3J5IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC1jZW50ZXItbG93LW1lbW9yeS9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbG93TWVtb3J5OiBMb3dNZW1vcnkpIHsgfVxuICpcbiAqIGFzeW5jIHdhcm5pbmcoKSB7XG4gKiAgIGF3YWl0IHRoaXMubG93TWVtb3J5LmdlbmVyYXRlTG93TWVtb3J5KCk7XG4gKiB9XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdMb3dNZW1vcnknLFxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeScsXG4gIHBsdWdpblJlZjogJ0xvd01lbW9yeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb3dNZW1vcnkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBsb3cgbWVtb3J5IHdhcm5pbmcuXG4gICAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1nZW5lcmF0ZS1sb3ctbWVtb3J5XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZW5lcmF0ZUxvd01lbW9yeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==