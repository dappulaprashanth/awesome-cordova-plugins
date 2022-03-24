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
var AppAvailabilityOriginal = /** @class */ (function (_super) {
    __extends(AppAvailabilityOriginal, _super);
    function AppAvailabilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailabilityOriginal.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailabilityOriginal.pluginName = "AppAvailability";
    AppAvailabilityOriginal.plugin = "cordova-plugin-appavailability";
    AppAvailabilityOriginal.pluginRef = "appAvailability";
    AppAvailabilityOriginal.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailabilityOriginal.platforms = ["Android", "iOS"];
    return AppAvailabilityOriginal;
}(AwesomeCordovaNativePlugin));
var AppAvailability = new AppAvailabilityOriginal();
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWF2YWlsYWJpbGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUF3Q3ZELG1DQUEwQjs7OztJQVE3RCwrQkFBSyxhQUFDLEdBQVc7Ozs7OzswQkFqRG5CO0VBeUNxQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXBwIEF2YWlsYWJpbGl0eVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIGNoZWNrIGlmIGFuIGFwcCBpcyBpbnN0YWxsZWQgb24gdGhlIHVzZXIncyBkZXZpY2UuIEl0IHJlcXVpcmVzIGFuIFVSSSBTY2hlbWUgKGUuZy4gdHdpdHRlcjovLykgb24gaU9TIG9yIGEgUGFja2FnZSBOYW1lIChlLmcgY29tLnR3aXR0ZXIuYW5kcm9pZCkgb24gQW5kcm9pZC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYXBwYXZhaWxhYmlsaXR5LiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQXBwQXZhaWxhYmlsaXR5IHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHkpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBBdmFpbGFiaWxpdHkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWF2YWlsYWJpbGl0eS9uZ3gnO1xuICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcEF2YWlsYWJpbGl0eTogQXBwQXZhaWxhYmlsaXR5LCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGFwcDtcbiAqXG4gKiBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykpIHtcbiAqICAgYXBwID0gJ3R3aXR0ZXI6Ly8nO1xuICogfSBlbHNlIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcbiAqICAgYXBwID0gJ2NvbS50d2l0dGVyLmFuZHJvaWQnO1xuICogfVxuICpcbiAqIHRoaXMuYXBwQXZhaWxhYmlsaXR5LmNoZWNrKGFwcClcbiAqICAgLnRoZW4oXG4gKiAgICAgKHllczogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXBwICsgJyBpcyBhdmFpbGFibGUnKSxcbiAqICAgICAobm86IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKGFwcCArICcgaXMgTk9UIGF2YWlsYWJsZScpXG4gKiAgICk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBBdmFpbGFiaWxpdHknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBhdmFpbGFiaWxpdHknLFxuICBwbHVnaW5SZWY6ICdhcHBBdmFpbGFiaWxpdHknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL29oaDJhaGgvQXBwQXZhaWxhYmlsaXR5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcEF2YWlsYWJpbGl0eSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBhcHAgaXMgYXZhaWxhYmxlIG9uIGRldmljZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwIFBhY2thZ2UgbmFtZSBvbiBhbmRyb2lkLCBvciBVUkkgc2NoZW1lIG9uIGlPU1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2soYXBwOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==