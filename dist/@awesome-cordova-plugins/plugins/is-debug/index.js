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
var IsDebugOriginal = /** @class */ (function (_super) {
    __extends(IsDebugOriginal, _super);
    function IsDebugOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebugOriginal.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebugOriginal.pluginName = "IsDebug";
    IsDebugOriginal.plugin = "cordova-plugin-is-debug";
    IsDebugOriginal.pluginRef = "cordova.plugins.IsDebug";
    IsDebugOriginal.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebugOriginal.platforms = ["Android", "iOS"];
    return IsDebugOriginal;
}(AwesomeCordovaNativePlugin));
var IsDebug = new IsDebugOriginal();
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaXMtZGVidWcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNkIvRCwyQkFBMEI7Ozs7SUFPckQsNEJBQVU7Ozs7OztrQkFyQ1o7RUE4QjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBJcyBEZWJ1Z1xuICogQGRlc2NyaXB0aW9uXG4gKiBEZXRlY3QgaWYgdGhlIGFwcCBpcyBydW5uaW5nIGluIGRlYnVnIG1vZGUgb3Igbm90LlxuICogRGVidWcgbW9kZSBpcyB3aGVuIHRoZSBhcHAgaXMgYnVpbHQgYW5kIGluc3RhbGxlZCBsb2NhbGx5IHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgY29yZG92YSBjbGkgZXRjLCBjb21wYXJlZCB0byByZWxlYXNlIG1vZGUgd2hlbiB0aGUgYXBwIHdhcyBkb3dubG9hZGVkIGZyb20gdGhlIGFwcCAvIHBsYXkgc3RvcmUgdmlhIGFuIGVuZCB1c2VyLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJc0RlYnVnIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2lzLWRlYnVnL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpc0RlYnVnOiBJc0RlYnVnKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmlzRGVidWcuZ2V0SXNEZWJ1ZygpXG4gKiAgIC50aGVuKGlzRGVidWcgPT4gY29uc29sZS5sb2coJ0lzIGRlYnVnOicsIGlzRGVidWcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSXNEZWJ1ZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlzLWRlYnVnJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLklzRGVidWcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2NvcmRvdmEtcGx1Z2luLWlzLWRlYnVnJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElzRGVidWcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYW4gYXBwIHdhcyBpbnN0YWxsZWQgdmlhIHhjb2RlIC8gZWNsaXBzZSAvIHRoZSBpb25pYyBDTEkgZXRjXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdHJ1ZSBpZiB0aGUgYXBwIHdhcyBpbnN0YWxsZWQgdmlhIHhjb2RlIC8gZWNsaXBzZSAvIHRoZSBpb25pYyBDTEkgZXRjLiBJdCB3aWxsIHJlc29sdmUgdG8gZmFsc2UgaWYgdGhlIGFwcCB3YXMgZG93bmxvYWRlZCBmcm9tIHRoZSBhcHAgLyBwbGF5IHN0b3JlIGJ5IHRoZSBlbmQgdXNlci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SXNEZWJ1ZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==