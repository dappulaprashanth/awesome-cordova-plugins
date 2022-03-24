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
var BatteryStatusOriginal = /** @class */ (function (_super) {
    __extends(BatteryStatusOriginal, _super);
    function BatteryStatusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatusOriginal.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatusOriginal.prototype.onLow = function () { return cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatusOriginal.prototype.onCritical = function () { return cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatusOriginal.pluginName = "BatteryStatus";
    BatteryStatusOriginal.plugin = "cordova-plugin-battery-status";
    BatteryStatusOriginal.pluginRef = "navigator.battery";
    BatteryStatusOriginal.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatusOriginal.platforms = ["iOS", "Android", "Windows", "Browser"];
    return BatteryStatusOriginal;
}(AwesomeCordovaNativePlugin));
var BatteryStatus = new BatteryStatusOriginal();
export { BatteryStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmF0dGVyeS1zdGF0dXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUErQ0MsaUNBQTBCOzs7O0lBVTNELGdDQUFRO0lBYVIsNkJBQUs7SUFhTCxrQ0FBVTs7Ozs7O3dCQXJGWjtFQWlEbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhdHRlcnlTdGF0dXNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBUaGUgYmF0dGVyeSBjaGFyZ2UgcGVyY2VudGFnZVxuICAgKi9cbiAgbGV2ZWw6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRldmljZSBpcyBwbHVnZ2VkIGluXG4gICAqL1xuICBpc1BsdWdnZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQmF0dGVyeSBTdGF0dXNcbiAqIEBkZXNjcmlwdGlvblxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhdHRlcnlzdGF0dXMuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtCYXR0ZXJ5U3RhdHVzIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWJhdHRlcnktc3RhdHVzKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmF0dGVyeVN0YXR1cyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iYXR0ZXJ5LXN0YXR1cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0dGVyeVN0YXR1czogQmF0dGVyeVN0YXR1cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIHdhdGNoIGNoYW5nZSBpbiBiYXR0ZXJ5IHN0YXR1c1xuICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5iYXR0ZXJ5U3RhdHVzLm9uQ2hhbmdlKCkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gKiAgICBjb25zb2xlLmxvZyhzdGF0dXMubGV2ZWwsIHN0YXR1cy5pc1BsdWdnZWQpO1xuICogfSk7XG4gKlxuICogLy8gc3RvcCB3YXRjaFxuICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQmF0dGVyeVN0YXR1c1Jlc3BvbnNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmF0dGVyeVN0YXR1cycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhdHRlcnktc3RhdHVzJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmJhdHRlcnknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cycsXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCcsICdXaW5kb3dzJywgJ0Jyb3dzZXInXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmF0dGVyeVN0YXR1cyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBjaGFuZ2UgaW4gYmF0dGVyeSBsZXZlbFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBwdXNoZXMgYSBzdGF0dXMgb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnYmF0dGVyeXN0YXR1cycsXG4gIH0pXG4gIG9uQ2hhbmdlKCk6IE9ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHdoZW4gdGhlIGJhdHRlcnkgbGV2ZWwgZ29lcyBsb3dcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2JhdHRlcnlsb3cnLFxuICB9KVxuICBvbkxvdygpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB3aGVuIHRoZSBiYXR0ZXJ5IGxldmVsIGdvZXMgdG8gY3JpdGljYWxcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2JhdHRlcnljcml0aWNhbCcsXG4gIH0pXG4gIG9uQ3JpdGljYWwoKTogT2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==