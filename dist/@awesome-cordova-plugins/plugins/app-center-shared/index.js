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
var AppCenterOriginal = /** @class */ (function (_super) {
    __extends(AppCenterOriginal, _super);
    function AppCenterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterOriginal.prototype.getInstallId = function () { return cordova(this, "getInstallId", {}, arguments); };
    AppCenterOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AppCenterOriginal.pluginName = "AppCenter";
    AppCenterOriginal.plugin = "cordova-plugin-appcenter-shared";
    AppCenterOriginal.pluginRef = "AppCenter";
    AppCenterOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-shared";
    AppCenterOriginal.platforms = ["Android", "iOS"];
    return AppCenterOriginal;
}(AwesomeCordovaNativePlugin));
var AppCenter = new AppCenterOriginal();
export { AppCenter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1zaGFyZWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBc0M3RCw2QkFBMEI7Ozs7SUFRdkQsZ0NBQVk7SUFZWiw2QkFBUyxhQUFDLE1BQWM7Ozs7OztvQkEzRDFCO0VBdUMrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXBwIENlbnRlciBTaGFyZWRcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFeHBvc2VzIGFkZGl0aW9uYWwgc2hhcmVkIEFQSXMgZm9yIEFwcCBDZW50ZXIuXG4gKlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL290aGVyLWFwaXMvY29yZG92YVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBDZW50ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWNlbnRlci1zaGFyZWQvbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENlbnRlclNoYXJlZDogQXBwQ2VudGVyKSB7IH1cbiAqXG4gKiBhc3luYyBnZXRJbnN0YWxsSWQoKSB7XG4gKiAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5hcHBDZW50ZXIuZ2V0SW5zdGFsbElkKCk7XG4gKiB9XG4gKlxuICogYXN5bmMgc2V0VXNlcklkKCkge1xuICogICB0cnl7XG4gKiAgICAgYXdhaXQgdGhpcy5hcHBDZW50ZXIuc2V0VXNlcklkKCdpLWFtLWpvaG4nKTtcbiAqICAgfSBjYXRjaCAoZSl7XG4gKiAgICAgY29uc29sZS5sb2coZSk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcENlbnRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1zaGFyZWQnLFxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXNoYXJlZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIEFwcENlbnRlciBVVUlELlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL290aGVyLWFwaXMvY29yZG92YSNpZGVudGlmeS1pbnN0YWxsYXRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IEluc3RhbGwgSURcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zdGFsbElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHVzZXIgSUQgdGhhdCdzIHVzZWQgdG8gYXVnbWVudCBjcmFzaCByZXBvcnRzLlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL290aGVyLWFwaXMvY29yZG92YSNpZGVudGlmeS11c2Vyc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIEV4LiBcInlvdXItdXNlci1pZFwiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==