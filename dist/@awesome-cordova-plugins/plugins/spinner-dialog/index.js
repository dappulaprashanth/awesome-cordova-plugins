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
var SpinnerDialogOriginal = /** @class */ (function (_super) {
    __extends(SpinnerDialogOriginal, _super);
    function SpinnerDialogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDialogOriginal.prototype.show = function (title, message, cancelCallback, iOSOptions) { return cordova(this, "show", { "sync": true }, arguments); };
    SpinnerDialogOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SpinnerDialogOriginal.pluginName = "SpinnerDialog";
    SpinnerDialogOriginal.plugin = "cordova-plugin-native-spinner";
    SpinnerDialogOriginal.pluginRef = "SpinnerDialog";
    SpinnerDialogOriginal.repo = "https://github.com/greybax/cordova-plugin-native-spinner";
    SpinnerDialogOriginal.platforms = ["Android", "iOS", "Windows Phone 8", "Windows"];
    return SpinnerDialogOriginal;
}(AwesomeCordovaNativePlugin));
var SpinnerDialog = new SpinnerDialogOriginal();
export { SpinnerDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Bpbm5lci1kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBcUR6RCxpQ0FBMEI7Ozs7SUFZM0QsNEJBQUksYUFBQyxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxjQUFvQixFQUFFLFVBQW9DO0lBUWpHLDRCQUFJOzs7Ozs7d0JBMUVOO0VBc0RtQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Bpbm5lckRpYWxvZ0lPU09wdGlvbnMge1xuICAvKipcbiAgICogT3BhY2l0eSBvZiB0aGUgb3ZlcmxheSwgYmV0d2VlbiAwICh0cmFuc3BhcmVudCkgYW5kIDEgKG9wYXF1ZSkuIERlZmF1bHQ6IDAuMzVcbiAgICovXG4gIG92ZXJsYXlPcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZWQgY29tcG9uZW50IG9mIHRoZSB0ZXh0IGNvbG9yLCBiZXR3ZWVuIDAgYW5kIDEuIERlZmF1bHQ6IDFcbiAgICovXG4gIHRleHRDb2xvclJlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogR3JlZW4gY29tcG9uZW50IG9mIHRoZSB0ZXh0IGNvbG9yLCBiZXR3ZWVuIDAgYW5kIDEuIERlZmF1bHQ6IDFcbiAgICovXG4gIHRleHRDb2xvckdyZWVuPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBCbHVlIGNvbXBvbmVudCBvZiB0aGUgdGV4dCBjb2xvciwgYmV0d2VlbiAwIGFuZCAxLiBEZWZhdWx0OiAxXG4gICAqL1xuICB0ZXh0Q29sb3JCbHVlPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIFNwaW5uZXIgRGlhbG9nXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBzaG93aW5nIGEgbmF0aXZlIHNwaW5uZXIgYmFzZWQgb24gUGFsZG9tL1NwaW5uZXJEaWFsb2cuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTcGlubmVyIERpYWxvZyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2dyZXliYXgvY29yZG92YS1wbHVnaW4tbmF0aXZlLXNwaW5uZXIpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcGlubmVyRGlhbG9nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NwaW5uZXItZGlhbG9nL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGlubmVyRGlhbG9nOiBTcGlubmVyRGlhbG9nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNwaW5uZXJEaWFsb2cuc2hvdygpO1xuICpcbiAqIHRoaXMuc3Bpbm5lckRpYWxvZy5oaWRlKCk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBTcGlubmVyRGlhbG9nSU9TT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NwaW5uZXJEaWFsb2cnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcicsXG4gIHBsdWdpblJlZjogJ1NwaW5uZXJEaWFsb2cnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyZXliYXgvY29yZG92YS1wbHVnaW4tbmF0aXZlLXNwaW5uZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4JywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3Bpbm5lckRpYWxvZyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBzcGlubmVyIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ30gU3Bpbm5lciB0aXRsZSAoc2hvd3Mgb24gQW5kcm9pZCBvbmx5KVxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBTcGlubmVyIG1lc3NhZ2VcbiAgICogQHBhcmFtIGNhbmNlbENhbGxiYWNrIHtib29sZWFufGZ1bmN0aW9ufSBTZXQgdG8gdHJ1ZSB0byBzZXQgc3Bpbm5lciBub3QgY2FuY2VsYWJsZS4gT3IgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgdXNlciBjYW5jZWxzIHRoZSBzcGlubmVyLlxuICAgKiBAcGFyYW0gaU9TT3B0aW9ucyB7b2JqZWN0fSBPcHRpb25zIGZvciBpT1Mgb25seVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3codGl0bGU/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcsIGNhbmNlbENhbGxiYWNrPzogYW55LCBpT1NPcHRpb25zPzogU3Bpbm5lckRpYWxvZ0lPU09wdGlvbnMpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBzcGlubmVyIGRpYWxvZyBpZiB2aXNpYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG59XG4iXX0=