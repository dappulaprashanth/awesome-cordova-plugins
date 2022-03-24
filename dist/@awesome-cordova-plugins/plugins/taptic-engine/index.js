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
var TapticEngineOriginal = /** @class */ (function (_super) {
    __extends(TapticEngineOriginal, _super);
    function TapticEngineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngineOriginal.prototype.selection = function () { return cordova(this, "selection", {}, arguments); };
    TapticEngineOriginal.prototype.notification = function (options) { return cordova(this, "notification", {}, arguments); };
    TapticEngineOriginal.prototype.impact = function (options) { return cordova(this, "impact", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionStart = function () { return cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionChanged = function () { return cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionEnd = function () { return cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngineOriginal.pluginName = "TapticEngine";
    TapticEngineOriginal.plugin = "cordova-plugin-taptic-engine";
    TapticEngineOriginal.pluginRef = "TapticEngine";
    TapticEngineOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngineOriginal.platforms = ["iOS"];
    return TapticEngineOriginal;
}(AwesomeCordovaNativePlugin));
var TapticEngine = new TapticEngineOriginal();
export { TapticEngine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGFwdGljLWVuZ2luZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzFELGdDQUEwQjs7OztJQU8xRCxnQ0FBUztJQVlULG1DQUFZLGFBQUMsT0FBa0Q7SUFhL0QsNkJBQU0sYUFBQyxPQUFnRDtJQVV2RCw0Q0FBcUI7SUFVckIsOENBQXVCO0lBVXZCLDBDQUFtQjs7Ozs7O3VCQS9GckI7RUFpQ2tDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBUYXB0aWMgRW5naW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuIElvbmljIHBsdWdpbiB0byB1c2UgVGFwdGljIEVuZ2luZSBBUEkgb24gaVBob25lIDcsIDcgUGx1cyBvciBuZXdlci5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVGFwdGljRW5naW5lIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RhcHRpYy1lbmdpbmUvbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcHRpYzogVGFwdGljRW5naW5lKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnRhcHRpYy5zZWxlY3Rpb24oKTtcbiAqXG4gKiB0aGlzLnRhcHRpYy5ub3RpZmljYXRpb24oKTtcbiAqXG4gKiB0aGlzLnRhcHRpYy5pbXBhY3QoKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUYXB0aWNFbmdpbmUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10YXB0aWMtZW5naW5lJyxcbiAgcGx1Z2luUmVmOiAnVGFwdGljRW5naW5lJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi10YXB0aWMtZW5naW5lJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYXB0aWNFbmdpbmUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBVc2Ugc2VsZWN0aW9uIGZlZWRiYWNrIGdlbmVyYXRvcnMgdG8gaW5kaWNhdGUgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgb24gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VsZWN0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIHRvIGluZGljYXRlIHN1Y2Nlc3MvZmFpbHVyZS93YXJuaW5nIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBzaG91bGQgYmUgb2YgdGhlIHR5cGUgeyB0eXBlOiAnc3VjY2VzcycgfSAob3IgJ3dhcm5pbmcnLydlcnJvcicpXG4gICAqIEBwYXJhbSB7J3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJ30gb3B0aW9ucy50eXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBvbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBub3RpZmljYXRpb24ob3B0aW9uczogeyB0eXBlOiAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gc2hvdWxkIGJlIG9mIHRoZSB0eXBlIHsgc3R5bGU6ICdsaWdodCcgfSAob3IgJ21lZGl1bScvJ2hlYXZ5JylcbiAgICogQHBhcmFtIHsnbGlnaHQnIHwgJ21lZGl1bScgfCAnaGVhdnknfSBvcHRpb25zLnR5cGVcbiAgICogQHBhcmFtIG9wdGlvbnMuc3R5bGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIGFuZCByZWplY3RzIG9uIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGltcGFjdChvcHRpb25zOiB7IHN0eWxlOiAnbGlnaHQnIHwgJ21lZGl1bScgfCAnaGVhdnknIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxsIHRoZSB0YXB0aWMgZW5naW5lIHRoYXQgYSBnZXN0dXJlIGZvciBhIHNlbGVjdGlvbiBjaGFuZ2UgaXMgc3RhcnRpbmcuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlc3R1cmVTZWxlY3Rpb25TdGFydCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxsIHRoZSB0YXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXN0dXJlU2VsZWN0aW9uQ2hhbmdlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxsIHRoZSB0YXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXN0dXJlU2VsZWN0aW9uRW5kKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=