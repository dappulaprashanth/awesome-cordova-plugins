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
var InstagramOriginal = /** @class */ (function (_super) {
    __extends(InstagramOriginal, _super);
    function InstagramOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstagramOriginal.prototype.isInstalled = function () { return cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.share = function (canvasIdOrDataUrl, caption) { return cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.shareAsset = function (assetLocalIdentifier) { return cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    InstagramOriginal.pluginName = "Instagram";
    InstagramOriginal.plugin = "cordova-instagram-plugin";
    InstagramOriginal.pluginRef = "Instagram";
    InstagramOriginal.repo = "https://github.com/vstirbu/InstagramPlugin";
    InstagramOriginal.platforms = ["Android", "iOS"];
    return InstagramOriginal;
}(AwesomeCordovaNativePlugin));
var Instagram = new InstagramOriginal();
export { Instagram };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW5zdGFncmFtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTJCN0QsNkJBQTBCOzs7O0lBU3ZELCtCQUFXO0lBZVgseUJBQUssYUFBQyxpQkFBeUIsRUFBRSxPQUFnQjtJQWFqRCw4QkFBVSxhQUFDLG9CQUE0Qjs7Ozs7O29CQWpFekM7RUE0QitCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBJbnN0YWdyYW1cbiAqIEBkZXNjcmlwdGlvbiBTaGFyZSBhIHBob3RvIHdpdGggdGhlIGluc3RhZ3JhbSBhcHBcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5zdGFncmFtIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2luc3RhZ3JhbS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFncmFtOiBJbnN0YWdyYW0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaW5zdGFncmFtLnNoYXJlKCdkYXRhOmltYWdlL3BuZzt1aGR1aGYzaGZpZjMzJywgJ0NhcHRpb24nKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU2hhcmVkIScpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbnN0YWdyYW0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWluc3RhZ3JhbS1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdJbnN0YWdyYW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZzdGlyYnUvSW5zdGFncmFtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc3RhZ3JhbSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERldGVjdCBpZiB0aGUgSW5zdGFncmFtIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZCBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFufHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgaWYgaW5zdGFsbGVkLCBvciB0aGUgYXBwIHZlcnNpb24gb24gYW5kcm9pZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcbiAgfSlcbiAgaXNJbnN0YWxsZWQoKTogUHJvbWlzZTxib29sZWFuIHwgc3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGFuIGltYWdlIG9uIEluc3RhZ3JhbVxuICAgKiBOb3RlOiBJbnN0YWdyYW0gYXBwIHN0b3BwZWQgYWNjZXB0aW5nIHByZS1maWxsZWQgY2FwdGlvbnMgb24gYm90aCBpT1MgYW5kIEFuZHJvaWQuIEFzIGEgd29yay1hcm91bmQsIHRoZSBjYXB0aW9uIGlzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkLiBZb3UgaGF2ZSB0byBpbmZvcm0geW91ciB1c2VycyB0byBwYXN0ZSB0aGUgY2FwdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGNhbnZhc0lkT3JEYXRhVXJsIFRoZSBjYW52YXMgZWxlbWVudCBpZCBvciB0aGUgZGF0YVVSTCBvZiB0aGUgaW1hZ2UgdG8gc2hhcmVcbiAgICogQHBhcmFtIGNhcHRpb24gVGhlIGNhcHRpb24gb2YgdGhlIGltYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGltYWdlIHdhcyBzaGFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIHNoYXJlKGNhbnZhc0lkT3JEYXRhVXJsOiBzdHJpbmcsIGNhcHRpb24/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSBhIGxpYnJhcnkgYXNzZXQgb3IgdmlkZW9cbiAgICpcbiAgICogQHBhcmFtIGFzc2V0TG9jYWxJZGVudGlmaWVyIEEgbG9jYWwgZmlsZVVSSVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBpbWFnZSB3YXMgc2hhcmVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzaGFyZUFzc2V0KGFzc2V0TG9jYWxJZGVudGlmaWVyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19