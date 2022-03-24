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
var LottieSplashScreenOriginal = /** @class */ (function (_super) {
    __extends(LottieSplashScreenOriginal, _super);
    function LottieSplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreenOriginal.prototype.show = function (location, remote, width, height) { return cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.pluginName = "LottieSplashScreen";
    LottieSplashScreenOriginal.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.pluginRef = "lottie.splashscreen";
    LottieSplashScreenOriginal.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.install = "";
    LottieSplashScreenOriginal.installVariables = [];
    LottieSplashScreenOriginal.platforms = ["Android", "iOS"];
    return LottieSplashScreenOriginal;
}(AwesomeCordovaNativePlugin));
var LottieSplashScreen = new LottieSplashScreenOriginal();
export { LottieSplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG90dGllLXNwbGFzaC1zY3JlZW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0NwRCxzQ0FBMEI7Ozs7SUFZaEUsaUNBQUksYUFBQyxRQUFpQixFQUFFLE1BQWdCLEVBQUUsS0FBYyxFQUFFLE1BQWU7SUFNekUsaUNBQUk7Ozs7Ozs7OzZCQW5ETjtFQWlDd0MsMEJBQTBCO1NBQXJELGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTG90dGllIFNwbGFzaCBTY3JlZW5cbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gc2hvdyBib2R5bW92aW4vTG90dGllIGFuaW1hdGlvbnMgYXMgdGhlIHNwbGFzaCBzY3JlZW4gd2l0aCBBaXJibmIncyBMb3R0aWUgd3JhcHBlclxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb3R0aWVTcGxhc2hTY3JlZW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbG90dGllLXNwbGFzaC1zY3JlZW4vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb3R0aWVTcGxhc2hTY3JlZW46IExvdHRpZVNwbGFzaFNjcmVlbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMubG90dGllU3BsYXNoU2NyZWVuLnNob3coJ3d3dy9sb3R0aWUvYW5pbWF0aW9uLmpzb24nLCBmYWxzZSwgMTAyNCwgNzY4KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvdHRpZVNwbGFzaFNjcmVlbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxvdHRpZS1zcGxhc2hzY3JlZW4nLFxuICBwbHVnaW5SZWY6ICdsb3R0aWUuc3BsYXNoc2NyZWVuJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1icnUzMS9jb3Jkb3ZhLXBsdWdpbi1sb3R0aWUtc3BsYXNoc2NyZWVuJyxcbiAgaW5zdGFsbDogJycsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG90dGllU3BsYXNoU2NyZWVuIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzaG93cyBhIExvdHRpZSBzcGxhc2ggc2NyZWVuLiBJZiBubyBhcmd1bWVudHMgYXJlIGdpdmVuLCBpdCBkZWZhdWx0cyB0byB0aGUgY29uZmlnLnhtbCB2YWx1ZXMsIGhvd2V2ZXIgeW91IGNhbiBwYXNzIChuZXcpIG9wdGlvbnMgaGVyZSB0byBjaGFuZ2UgdGhlIGJlaGF2aW9yIG9uIHJ1bnRpbWUuIChGb3IgZWFzaWVyIHJlYWRpbmcgdGhlIFR5cGVTY3JpcHQgbm90YXRpb24gaXMgdXNlZClcbiAgICpcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtzdHJpbmd9IExvY2F0aW9uIG9mIHRoZSBMb3R0aWUgSlNPTiBmaWxlIHRoYXQgc2hvdWxkIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIHJlbW90ZSB7bnVtYmVyfSBUb2dnbGVzIExvdHRpZSdzIHJlbW90ZSBtb2RlIHdoaWNoIGFsbG93cyBmaWxlcyB0byBiZSBkb3dubG9hZGVkL2Rpc3BsYXllZCBmcm9tIFVSTHMuIEV4YW1wbGU6XG4gICAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBXaWR0aCBvZiB0aGUgY29udGFpbmVyIHRoYXQncyByZW5kZXJpbmcgdGhlIExvdHRpZSBhbmltYXRpb25cbiAgICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBIZWlnaHQgb2YgdGhlIGNvbnRhaW5lciB0aGF0J3MgcmVuZGVyaW5nIHRoZSBMb3R0aWUgYW5pbWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2hvdyhsb2NhdGlvbj86IHN0cmluZywgcmVtb3RlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2RzIGhpZGVzIHRoZSBjdXJyZW50IGFjdGl2ZSBMb3R0aWUgc3BsYXNoc2NyZWVuIGFuZCBkZXN0cm95cyB0aGUgdmlld3MuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG59XG4iXX0=