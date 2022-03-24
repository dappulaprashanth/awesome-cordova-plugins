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
import { Observable } from 'rxjs';
var BroadcasterOriginal = /** @class */ (function (_super) {
    __extends(BroadcasterOriginal, _super);
    function BroadcasterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BroadcasterOriginal.prototype.addEventListener = function (eventName, isGlobal) {
        if (isGlobal === void 0) { isGlobal = false; }
        return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments);
    };
    BroadcasterOriginal.prototype.fireNativeEvent = function (eventName, isGlobalOrEventData, data) { return cordova(this, "fireNativeEvent", {}, arguments); };
    BroadcasterOriginal.pluginName = "Broadcaster";
    BroadcasterOriginal.plugin = "cordova-plugin-broadcaster";
    BroadcasterOriginal.pluginRef = "broadcaster";
    BroadcasterOriginal.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    BroadcasterOriginal.platforms = ["Android", "iOS", "Browser"];
    return BroadcasterOriginal;
}(AwesomeCordovaNativePlugin));
var Broadcaster = new BroadcasterOriginal();
export { Broadcaster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnJvYWRjYXN0ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE0Q0QsK0JBQTBCOzs7O0lBYXpELHNDQUFnQixhQUFDLFNBQWlCLEVBQUUsUUFBZ0I7UUFBaEIseUJBQUEsRUFBQSxnQkFBZ0I7OztJQWdCcEQscUNBQWUsYUFBQyxTQUFpQixFQUFFLG1CQUF3QyxFQUFFLElBQWdCOzs7Ozs7c0JBM0UvRjtFQThDaUMsMEJBQTBCO1NBQTlDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFNwZWNpZmljIGRhdGEgZm9yIEFuZHJvaWQgaW1wbGVtZW50YXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkRGF0YSB7XG4gIGV4dHJhczogb2JqZWN0O1xuICBmbGFnczogbnVtYmVyO1xuICBjYXRlZ29yeTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFBvc3NpYmx5IEV2ZW50IERhdGEgdHlwZXNcbiAqL1xuZXhwb3J0IHR5cGUgRXZlbnREYXRhID0gb2JqZWN0IHwgQW5kcm9pZERhdGEgfCBudWxsO1xuXG4vKipcbiAqIEBuYW1lIEJyb2FkY2FzdGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFkZHMgZXhjaGFuZ2luZyBldmVudHMgYmV0d2VlbiBuYXRpdmUgY29kZSBhbmQgeW91ciBhcHAuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJyb2FkY2FzdGVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Jyb2FkY2FzdGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBicm9hZGNhc3RlcjogQnJvYWRjYXN0ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIExpc3RlbiB0byBldmVudHMgZnJvbSBOYXRpdmVcbiAqIHRoaXMuYnJvYWRjYXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignZXZlbnROYW1lJykuc3Vic2NyaWJlKChldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpKTtcbiAqXG4gKiAvLyBTZW5kIGV2ZW50IHRvIE5hdGl2ZVxuICogdGhpcy5icm9hZGNhc3Rlci5maXJlTmF0aXZlRXZlbnQoJ2V2ZW50TmFtZScsIHt9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jyb2FkY2FzdGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnJvYWRjYXN0ZXInLFxuICBwbHVnaW5SZWY6ICdicm9hZGNhc3RlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYnNvcnJlbnRpbm8vY29yZG92YS1icm9hZGNhc3RlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2FkY2FzdGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBsaXN0ZW4gdG8gYW4gZXZlbnQgc2VudCBmcm9tIHRoZSBuYXRpdmUgY29kZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHbG9iYWwgVmFsaWQgb25seSBmb3IgQW5kcm9pZC4gSXQgYWxsb3dzIHRvIGxpc3RlbiBmb3IgZ2xvYmFsIG1lc3NhZ2VzKGkuZS4gaW50ZW50cylcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRvIHdhdGNoIHdoZW4gYW4gZXZlbnQgaXMgcmVjZWl2ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVFdmVudExpc3RlbmVyJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBpc0dsb2JhbCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzZW5kcyBkYXRhIHRvIHRoZSBuYXRpdmUgY29kZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHbG9iYWxPckV2ZW50RGF0YSBtZWFucyB0aGF0IG1lc3NhZ2UgaXMgZ2xvYmFsICh2YWxpZCBvbmx5IG9uIEFuZHJvaWQpXG4gICAqIEBwYXJhbSB7QW5kcm9pZERhdGF9IGlzR2xvYmFsT3JFdmVudERhdGEgYWxsb3dzIHRvIHNwZWNpZnkgJ2ZsYWdzYCBhbmQgJ2NhdGVnb3J5JyAodmFsaWQgb25seSBvbiBBbmRyb2lkKVxuICAgKiBAcGFyYW0ge29iamVjdH0gaXNHbG9iYWxPckV2ZW50RGF0YSBhbGxvd3MgdG8gc3BlY2lmeSBhIGdlbmVyaWMgb2JqZWN0IGNvbnRhaW5pbmcgY3VzdG9tIGV2ZW50IGRhdGEgKGFsbCBwbGF0Zm9ybSlcbiAgICogQHBhcmFtIHtBbmRyb2lkRGF0YX0gW2RhdGFdIGlmIGlzR2xvYmFsIGlzIHNldCwgYWxsb3dzIHRvIHNwZWNpZnkgJ2ZsYWdzYCBhbmQgJ2NhdGVnb3J5JyBpZiBpc0dsb2JhbCBpcyBzZXQgKHZhbGlkIG9ubHkgb24gQW5kcm9pZClcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkYXRhXSBpZiBpc0dsb2JhbCBpcyBzZXQsIGFsbG93cyB0byBzcGVjaWZ5IGEgZ2VuZXJpYyBvYmplY3QgY29udGFpbmluZyBjdXN0b20gZXZlbnQgZGF0YSAoYWxsIHBsYXRmb3JtKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYW4gZXZlbnQgaXMgc3VjY2Vzc2Z1bGx5IGZpcmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZpcmVOYXRpdmVFdmVudChldmVudE5hbWU6IHN0cmluZywgaXNHbG9iYWxPckV2ZW50RGF0YTogYm9vbGVhbiB8IEV2ZW50RGF0YSwgZGF0YT86IEV2ZW50RGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=