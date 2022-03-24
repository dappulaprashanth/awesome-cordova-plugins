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
var LocalBackupOriginal = /** @class */ (function (_super) {
    __extends(LocalBackupOriginal, _super);
    function LocalBackupOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackupOriginal.prototype.create = function (data) { return cordova(this, "create", {}, arguments); };
    LocalBackupOriginal.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    LocalBackupOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    LocalBackupOriginal.prototype.remove = function () { return cordova(this, "remove", {}, arguments); };
    LocalBackupOriginal.pluginName = "LocalBackup";
    LocalBackupOriginal.plugin = "cordova-plugin-local-backup";
    LocalBackupOriginal.pluginRef = "LocalBackup";
    LocalBackupOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackupOriginal.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackupOriginal.platforms = ["Android", "iOS"];
    return LocalBackupOriginal;
}(AwesomeCordovaNativePlugin));
var LocalBackup = new LocalBackupOriginal();
export { LocalBackup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYWwtYmFja3VwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCM0QsK0JBQTBCOzs7O0lBRXpELDRCQUFNLGFBQUMsSUFBUztJQUtoQiwwQkFBSTtJQUtKLDRCQUFNO0lBS04sNEJBQU07Ozs7Ozs7c0JBakRSO0VBZ0NpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTG9jYWxCYWNrdXBcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gdG8gY3JlYXRlIGxvY2FsIGJhY2t1cFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb2NhbEJhY2t1cCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9sb2NhbC1iYWNrdXAvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbEJhY2t1cDogTG9jYWxCYWNrdXApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmxvY2FsQmFja3VwLmNyZWF0ZSh7ZGF0YToge2tleTogJ3ZhbHVlJ319KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvY2FsQmFja3VwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbG9jYWwtYmFja3VwJyxcbiAgcGx1Z2luUmVmOiAnTG9jYWxCYWNrdXAnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tbG9jYWwtYmFja3VwJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxCYWNrdXAgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlKGRhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVhZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZXhpc3RzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19