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
var CallDirectoryOriginal = /** @class */ (function (_super) {
    __extends(CallDirectoryOriginal, _super);
    function CallDirectoryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallDirectoryOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    CallDirectoryOriginal.prototype.addIdentification = function (items) { return cordova(this, "addIdentification", {}, arguments); };
    CallDirectoryOriginal.prototype.removeIdentification = function (items) { return cordova(this, "removeIdentification", {}, arguments); };
    CallDirectoryOriginal.prototype.removeAllIdentification = function () { return cordova(this, "removeAllIdentification", {}, arguments); };
    CallDirectoryOriginal.prototype.getAllItems = function () { return cordova(this, "getAllItems", {}, arguments); };
    CallDirectoryOriginal.prototype.reloadExtension = function () { return cordova(this, "reloadExtension", {}, arguments); };
    CallDirectoryOriginal.prototype.getLog = function () { return cordova(this, "getLog", {}, arguments); };
    CallDirectoryOriginal.pluginName = "CallDirectory";
    CallDirectoryOriginal.plugin = "cordova-plugin-call-directory";
    CallDirectoryOriginal.pluginRef = "CallDirectory";
    CallDirectoryOriginal.repo = "https://github.com/GEDYSIntraWare/cordova-plugin-call-directory";
    CallDirectoryOriginal.install = "cordova plugin add cordova-plugin-call-directory --variable EXT_NAME=\"Cordova-Directory\" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=\"NO\"";
    CallDirectoryOriginal.installVariables = ["EXT_NAME", "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES"];
    CallDirectoryOriginal.platforms = ["iOS"];
    return CallDirectoryOriginal;
}(AwesomeCordovaNativePlugin));
var CallDirectory = new CallDirectoryOriginal();
export { CallDirectory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FsbC1kaXJlY3RvcnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUR6RCxpQ0FBMEI7Ozs7SUFPM0QsbUNBQVc7SUFXWCx5Q0FBaUIsYUFBQyxLQUEwQjtJQVc1Qyw0Q0FBb0IsYUFBQyxLQUEwQjtJQVUvQywrQ0FBdUI7SUFVdkIsbUNBQVc7SUFVWCx1Q0FBZTtJQVVmLDhCQUFNOzs7Ozs7Ozt3QkF2SFI7RUFrRG1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWxsRGlyZWN0b3J5SXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG51bWJlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxEaXJlY3RvcnlMb2cge1xuICBwbHVnaW46IHN0cmluZ1tdO1xuICBleHRlbnNpb246IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIEBuYW1lIENhbGwgRGlyZWN0b3J5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGNhbiBhZGQgcGhvbmUgbnVtYmVycyB0byBhbiBDYWxsa2l0IGNhbGwgZGlyZWN0b3J5IGV4dGVuc2lvbi4gQ2FsbCBgcmVsb2FkRXh0ZW5zaW9uYCBhZnRlciB1c2luZyBgYWRkSWRlbnRpZmljYXRpb25gIGFuZCBgcmVtb3ZlSWRlbnRpZmljYXRpb25gXG4gKiB0byBwcm9jZXNzIHRoZSBjaGFuZ2VzIGluIHRoZSBjYWxsIGRpcmVjdG9yeSBleHRlbnNpb24uXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGxEaXJlY3RvcnkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FsbC1kaXJlY3Rvcnkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsRGlyZWN0b3J5OiBDYWxsRGlyZWN0b3J5KSB7IH1cbiAqXG4gKlxuICogbGV0IGl0ZW1zID0gW3tsYWJlbDogXCJIZWxsb1wiLCBudW1iZXI6IFwiMTIzXCJ9XTtcbiAqIHRoaXMuY2FsbERpcmVjdG9yeS5hZGRJZGVudGlmaWNhdGlvbihpdGVtcylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmNhbGxEaXJlY3RvcnkucmVsb2FkRXh0ZW5zaW9uKClcbiAqICAgLnRoZW4ocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogYGBgXG4gKiBASW50ZXJmYWNlc1xuICogQ2FsbERpcmVjdG9yeUl0ZW1cbiAqIENhbGxEaXJlY3RvcnlMb2dcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYWxsRGlyZWN0b3J5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FsbC1kaXJlY3RvcnknLFxuICBwbHVnaW5SZWY6ICdDYWxsRGlyZWN0b3J5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9HRURZU0ludHJhV2FyZS9jb3Jkb3ZhLXBsdWdpbi1jYWxsLWRpcmVjdG9yeScsXG4gIGluc3RhbGw6XG4gICAgJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1jYWxsLWRpcmVjdG9yeSAtLXZhcmlhYmxlIEVYVF9OQU1FPVwiQ29yZG92YS1EaXJlY3RvcnlcIiAtLXZhcmlhYmxlIEFMV0FZU19FTUJFRF9TV0lGVF9TVEFOREFSRF9MSUJSQVJJRVM9XCJOT1wiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydFWFRfTkFNRScsICdBTFdBWVNfRU1CRURfU1dJRlRfU1RBTkRBUkRfTElCUkFSSUVTJ10sXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbERpcmVjdG9yeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBjYWxsIGRpcmVjdG9yeSBleHRlbnNpb24gaXMgYXZhaWxhYmxlIGFuZCBlbmFibGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkIGlkZW50aWZpY2F0aW9uIG51bWJlcnNcbiAgICpcbiAgICogQHBhcmFtIHtDYWxsRGlyZWN0b3J5SXRlbVtdfSBpdGVtcyBTZXQgb2YgbnVtYmVycyB3aXRoIGxhYmVsc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gbnVtYmVycyBhcmUgYWRkZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkSWRlbnRpZmljYXRpb24oaXRlbXM6IENhbGxEaXJlY3RvcnlJdGVtW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaWRlbnRpZmljYXRpb24gbnVtYmVyc1xuICAgKlxuICAgKiBAcGFyYW0ge0NhbGxEaXJlY3RvcnlJdGVtW119IGl0ZW1zIFNldCBvZiBudW1iZXJzIHdpdGggYXJiaXRyYXJ5IGxhYmVsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBudW1iZXJzIGFyZSByZW1vdmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUlkZW50aWZpY2F0aW9uKGl0ZW1zOiBDYWxsRGlyZWN0b3J5SXRlbVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGNhbGwgZGlyZWN0b3J5LiBSZWZyZXNoZXMgaW1tZWRpYXRlbHkuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHJlZnJlc2ggd2l0aCBtZXNzYWdlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUFsbElkZW50aWZpY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbnVtYmVycyBhbmQgbGFiZWxzIGluIGNhbGwgZGlyZWN0b3J5XG4gICAqXG4gICAqIEByZXR1cm5zIHtDYWxsRGlyZWN0b3J5SXRlbVtdfSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgYWxsIGl0ZW1zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFsbEl0ZW1zKCk6IFByb21pc2U8Q2FsbERpcmVjdG9yeUl0ZW1bXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWQgZXh0ZW5zaW9uIHRvIHByb2Nlc3MgcXVldWVkIGNoYW5nZXNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgcmVmcmVzaCB3aXRoIG1lc3NhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVsb2FkRXh0ZW5zaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsb2cgZnJvbSBwbHVnaW4gYW5kIGNhbGwgZGlyZWN0b3J5IGV4dGVuc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDYWxsRGlyZWN0b3J5TG9nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbiBvYmplY3Qgb2YgbG9nIG1lc3NhZ2VzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldExvZygpOiBQcm9taXNlPENhbGxEaXJlY3RvcnlMb2c+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==