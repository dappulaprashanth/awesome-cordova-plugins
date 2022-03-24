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
var AndroidNotchOriginal = /** @class */ (function (_super) {
    __extends(AndroidNotchOriginal, _super);
    function AndroidNotchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidNotchOriginal.prototype.hasCutout = function () { return cordova(this, "hasCutout", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetTop = function () { return cordova(this, "getInsetTop", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetRight = function () { return cordova(this, "getInsetRight", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetBottom = function () { return cordova(this, "getInsetBottom", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetLeft = function () { return cordova(this, "getInsetLeft", {}, arguments); };
    AndroidNotchOriginal.pluginName = "AndroidNotch";
    AndroidNotchOriginal.plugin = "cordova-plugin-android-notch";
    AndroidNotchOriginal.pluginRef = "AndroidNotch";
    AndroidNotchOriginal.repo = "https://github.com/tobspr/cordova-plugin-android-notch.git";
    AndroidNotchOriginal.platforms = ["Android"];
    return AndroidNotchOriginal;
}(AwesomeCordovaNativePlugin));
var AndroidNotch = new AndroidNotchOriginal();
export { AndroidNotch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1ub3RjaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnRDFELGdDQUEwQjs7OztJQU8xRCxnQ0FBUztJQVVULGtDQUFXO0lBVVgsb0NBQWE7SUFVYixxQ0FBYztJQVVkLG1DQUFZOzs7Ozs7dUJBaEdkO0VBaURrQywwQkFBMEI7U0FBL0MsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQW5kcm9pZCBOb3RjaFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBlbmFibGVzIGRldmVsb3BlcnMgdG8gZ2V0IHRoZSBjdXRvdXQgYW5kIGFuZHJvaWQgZGV2aWNlcyBpbnNldCBzaXplc1xuICogSXQgaXMgYmFzZWQgb24gdGhlIGNvcmRvdmEgcGx1Z2luIGRldmVsb3BlZCBieSBAdG9ic3ByOiBodHRwczovL2dpdGh1Yi5jb20vdG9ic3ByL2NvcmRvdmEtcGx1Z2luLWFuZHJvaWQtbm90Y2hcbiAqIFRoaXMgcGx1Z2luIHdvcmtzIG9uIGFsbCBhbmRyb2lkIHZlcnNpb25zLCBidXQgd2UgY2FuIG9ubHkgZGV0ZWN0IG5vdGNoZXMgc3RhcnRpbmcgZnJvbSBBbmRyb2lkIDkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFuZHJvaWROb3RjaCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hbmRyb2lkLW5vdGNoL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5kcm9pZE5vdGNoOiBBbmRyb2lkTm90Y2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFuZHJvaWROb3RjaC5oYXNDdXRvdXQoKVxuICogICAgLnRoZW4oKHB4OiBudW1iZXIpID0+IGNvbnNvbGUubG9nKCdJbnNldCBzaXplOiAnKSwgcHgpXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxuICpcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmdldEluc2V0VG9wKClcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxuICogICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKSlcbiAqXG4gKiB0aGlzLmFuZHJvaWROb3RjaC5nZXRJbnNldFJpZ2h0KClcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxuICogICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKSlcbiAqXG4gKiB0aGlzLmFuZHJvaWROb3RjaC5nZXRJbnNldEJvdHRvbSgpXG4gKiAgICAudGhlbigocHg6IG51bWJlcikgPT4gY29uc29sZS5sb2coJ0luc2V0IHNpemU6ICcpLCBweClcbiAqICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcikpXG4gKlxuICogdGhpcy5hbmRyb2lkTm90Y2guZ2V0SW5zZXRMZWZ0KClcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxuICogICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKSlcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbmRyb2lkTm90Y2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLW5vdGNoJyxcbiAgcGx1Z2luUmVmOiAnQW5kcm9pZE5vdGNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b2JzcHIvY29yZG92YS1wbHVnaW4tYW5kcm9pZC1ub3RjaC5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmRyb2lkTm90Y2ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGFuZHJvaWQgZGV2aWNlIGhhcyBjdXRvdXRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc0N1dG91dCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ3RoIG9mIHRoZSB0b3AgaW5zZXRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zZXRUb3AoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ3RoIG9mIHRoZSByaWdodCBpbnNldFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnNldFJpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlaWd0aCBvZiB0aGUgYm90dG9tIGluc2V0XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEluc2V0Qm90dG9tKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlaWd0aCBvZiB0aGUgbGVmdCBpbnNldFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnNldExlZnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==