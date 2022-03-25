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
var TouchIDOriginal = /** @class */ (function (_super) {
    __extends(TouchIDOriginal, _super);
    function TouchIDOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchIDOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    TouchIDOriginal.prototype.verifyFingerprint = function (message) { return cordova(this, "verifyFingerprint", {}, arguments); };
    TouchIDOriginal.prototype.verifyFingerprintWithCustomPasswordFallback = function (message) { return cordova(this, "verifyFingerprintWithCustomPasswordFallback", {}, arguments); };
    TouchIDOriginal.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel) { return cordova(this, "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", {}, arguments); };
    TouchIDOriginal.prototype.didFingerprintDatabaseChange = function () { return cordova(this, "didFingerprintDatabaseChange", {}, arguments); };
    TouchIDOriginal.pluginName = "TouchID";
    TouchIDOriginal.plugin = "cordova-plugin-touch-id";
    TouchIDOriginal.pluginRef = "plugins.touchid";
    TouchIDOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-touch-id";
    TouchIDOriginal.platforms = ["iOS"];
    return TouchIDOriginal;
}(AwesomeCordovaNativePlugin));
var TouchID = new TouchIDOriginal();
export { TouchID };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdG91Y2gtaWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0QvRCwyQkFBMEI7Ozs7SUFPckQsNkJBQVc7SUFXWCxtQ0FBaUIsYUFBQyxPQUFlO0lBV2pDLDZEQUEyQyxhQUFDLE9BQWU7SUFZM0Qsa0ZBQWdFLGFBQzlELE9BQWUsRUFDZixrQkFBMEI7SUFXNUIsOENBQTRCOzs7Ozs7a0JBekc5QjtFQW1ENkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFRvdWNoIElEXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNjYW4gdGhlIGZpbmdlcnByaW50IG9mIGEgdXNlciB3aXRoIHRoZSBUb3VjaElEIHNlbnNvci5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXRvdWNoLWlkYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1RvdWNoSUQgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi10b3VjaC1pZCkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRvdWNoSUQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdG91Y2gtaWQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdWNoSWQ6IFRvdWNoSUQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMudG91Y2hJZC5pc0F2YWlsYWJsZSgpXG4gKiAgIC50aGVuKFxuICogICAgIHJlcyA9PiBjb25zb2xlLmxvZygnVG91Y2hJRCBpcyBhdmFpbGFibGUhJyksXG4gKiAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoJ1RvdWNoSUQgaXMgbm90IGF2YWlsYWJsZScsIGVycilcbiAqICAgKTtcbiAqXG4gKiB0aGlzLnRvdWNoSWQudmVyaWZ5RmluZ2VycHJpbnQoJ1NjYW4geW91ciBmaW5nZXJwcmludCBwbGVhc2UnKVxuICogICAudGhlbihcbiAqICAgICByZXMgPT4gY29uc29sZS5sb2coJ09rJywgcmVzKSxcbiAqICAgICBlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3InLCBlcnIpXG4gKiAgICk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXJyb3IgQ29kZXNcbiAqXG4gKiBUaGUgcGx1Z2luIHdpbGwgcmVqZWN0IGZvciB2YXJpb3VzIHJlYXNvbnMuIFlvdXIgYXBwIHdpbGwgbW9zdCBsaWtlbHkgbmVlZCB0byByZXNwb25kIHRvIHRoZSBjYXNlcyBkaWZmZXJlbnRseS5cbiAqXG4gKiBIZXJlIGlzIGEgbGlzdCBvZiBzb21lIG9mIHRoZSBlcnJvciBjb2RlczpcbiAqXG4gKiAgLSAgYC0xYCAtIEZpbmdlcnByaW50IHNjYW4gZmFpbGVkIG1vcmUgdGhhbiAzIHRpbWVzXG4gKiAgLSAgYC0yYCBvciBgLTEyOGAgLSBVc2VyIHRhcHBlZCB0aGUgJ0NhbmNlbCcgYnV0dG9uXG4gKiAgLSAgYC0zYCAtIFVzZXIgdGFwcGVkIHRoZSAnRW50ZXIgUGFzc2NvZGUnIG9yICdFbnRlciBQYXNzd29yZCcgYnV0dG9uXG4gKiAgLSAgYC00YCAtIFRoZSBzY2FuIHdhcyBjYW5jZWxsZWQgYnkgdGhlIHN5c3RlbSAoSG9tZSBidXR0b24gZm9yIGV4YW1wbGUpXG4gKiAgLSAgYC02YCAtIFRvdWNoSUQgaXMgbm90IEF2YWlsYWJsZVxuICogIC0gIGAtOGAgLSBUb3VjaElEIGlzIGxvY2tlZCBvdXQgZnJvbSB0b28gbWFueSB0cmllc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RvdWNoSUQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10b3VjaC1pZCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMudG91Y2hpZCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tdG91Y2gtaWQnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvdWNoSUQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVja3MgV2hldGhlciBUb3VjaElEIGlzIGF2YWlsYWJsZSBvciBub3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgeWVzLCByZWplY3RzIGlmIG5vLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IFRvdWNoSUQgZGlhbG9nIGFuZCB3YWl0IGZvciBhIGZpbmdlcnByaW50IHNjYW4uIElmIHVzZXIgdGFwcyAnRW50ZXIgUGFzc3dvcmQnIGJ1dHRvbiwgYnJpbmdzIHVwIHN0YW5kYXJkIHN5c3RlbSBwYXNzY29kZSBzY3JlZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICBUaGUgbWVzc2FnZSB0byBkaXNwbGF5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoZSByZXNvbHZlcyBpZiB0aGUgZmluZ2VycHJpbnQgc2NhbiB3YXMgc3VjY2Vzc2Z1bCwgcmVqZWN0cyB3aXRoIGFuIGVycm9yIGNvZGUgKHNlZSBhYm92ZSkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcmlmeUZpbmdlcnByaW50KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgVG91Y2hJRCBkaWFsb2cgYW5kIHdhaXQgZm9yIGEgZmluZ2VycHJpbnQgc2Nhbi4gSWYgdXNlciB0YXBzICdFbnRlciBQYXNzd29yZCcgYnV0dG9uLCByZWplY3RzIHdpdGggY29kZSAnLTMnIChzZWUgYWJvdmUpLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGUgcmVzb2x2ZXMgaWYgdGhlIGZpbmdlcnByaW50IHNjYW4gd2FzIHN1Y2Nlc3NmdWwsIHJlamVjdHMgd2l0aCBhbiBlcnJvciBjb2RlIChzZWUgYWJvdmUpLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2ZXJpZnlGaW5nZXJwcmludFdpdGhDdXN0b21QYXNzd29yZEZhbGxiYWNrKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgVG91Y2hJRCBkaWFsb2cgd2l0aCBjdXN0b20gJ0VudGVyIFBhc3N3b3JkJyBtZXNzYWdlIGFuZCB3YWl0IGZvciBhIGZpbmdlcnByaW50IHNjYW4uIElmIHVzZXIgdGFwcyAnRW50ZXIgUGFzc3dvcmQnIGJ1dHRvbiwgcmVqZWN0cyB3aXRoIGNvZGUgJy0zJyAoc2VlIGFib3ZlKS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVudGVyUGFzc3dvcmRMYWJlbCAgQ3VzdG9tIHRleHQgZm9yIHRoZSAnRW50ZXIgUGFzc3dvcmQnIGJ1dHRvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGUgcmVzb2x2ZXMgaWYgdGhlIGZpbmdlcnByaW50IHNjYW4gd2FzIHN1Y2Nlc3NmdWwsIHJlamVjdHMgd2l0aCBhbiBlcnJvciBjb2RlIChzZWUgYWJvdmUpLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2ZXJpZnlGaW5nZXJwcmludFdpdGhDdXN0b21QYXNzd29yZEZhbGxiYWNrQW5kRW50ZXJQYXNzd29yZExhYmVsKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBlbnRlclBhc3N3b3JkTGFiZWw6IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGZpbmdlcnByaW50IGRhdGFiYXNlIGNoYW5nZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgeWVzLCByZWplY3RzIGlmIG5vLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaWRGaW5nZXJwcmludERhdGFiYXNlQ2hhbmdlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=