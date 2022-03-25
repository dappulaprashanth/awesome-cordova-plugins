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
var GaoDeLocationOriginal = /** @class */ (function (_super) {
    __extends(GaoDeLocationOriginal, _super);
    function GaoDeLocationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GaoDeLocationOriginal.prototype.getCurrentPosition = function (positionOptions) { return cordova(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocationOriginal.prototype.startSerialLocation = function (positionOptions) { return cordova(this, "startSerialLocation", { "callbackOrder": "reverse", "observable": true }, arguments); };
    GaoDeLocationOriginal.prototype.stopSerialLocation = function () { return cordova(this, "stopSerialLocation", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocationOriginal.pluginName = "GaoDeLocation";
    GaoDeLocationOriginal.plugin = "cordova-plugin-gaodelocation-chenyu";
    GaoDeLocationOriginal.pluginRef = "GaoDe";
    GaoDeLocationOriginal.repo = "https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git";
    GaoDeLocationOriginal.install = "ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key";
    GaoDeLocationOriginal.installVariables = ["ANDROID_API_KEY", "IOS_API_KEY"];
    GaoDeLocationOriginal.platforms = ["Android", "iOS"];
    return GaoDeLocationOriginal;
}(AwesomeCordovaNativePlugin));
var GaoDeLocation = new GaoDeLocationOriginal();
export { GaoDeLocation };
/**
 * ios positioning accuracy
 * https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
 */
export var DesiredAccuracyEnum;
(function (DesiredAccuracyEnum) {
    /**
     * The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBestForNavigation"] = 1] = "kCLLocationAccuracyBestForNavigation";
    /**
     * The best level of accuracy available.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBest"] = 2] = "kCLLocationAccuracyBest";
    /**
     * Accurate to within ten meters of the desired target.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyNearestTenMeters"] = 3] = "kCLLocationAccuracyNearestTenMeters";
    /**
     * Accurate to within one hundred meters.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyHundredMeters"] = 4] = "kCLLocationAccuracyHundredMeters";
    /**
     * Accurate to the nearest kilometer.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyKilometer"] = 5] = "kCLLocationAccuracyKilometer";
    /**
     * Accurate to the nearest three kilometers.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyThreeKilometers"] = 6] = "kCLLocationAccuracyThreeKilometers";
})(DesiredAccuracyEnum || (DesiredAccuracyEnum = {}));
/**
 * locationModeEnum
 */
export var LocationModeEnum;
(function (LocationModeEnum) {
    LocationModeEnum[LocationModeEnum["Hight_Accuracy"] = 1] = "Hight_Accuracy";
    LocationModeEnum[LocationModeEnum["Battery_Saving"] = 2] = "Battery_Saving";
    LocationModeEnum[LocationModeEnum["Device_Sensors"] = 3] = "Device_Sensors";
})(LocationModeEnum || (LocationModeEnum = {}));
/**
 * locationProtocolEnum
 */
export var LocationProtocolEnum;
(function (LocationProtocolEnum) {
    LocationProtocolEnum[LocationProtocolEnum["HTTP"] = 1] = "HTTP";
    LocationProtocolEnum[LocationProtocolEnum["HTTPS"] = 2] = "HTTPS";
})(LocationProtocolEnum || (LocationProtocolEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2FvLWRlLWxvY2F0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0VDLGlDQUEwQjs7OztJQVUzRCwwQ0FBa0IsYUFBQyxlQUFnQztJQWNuRCwyQ0FBbUIsYUFBQyxlQUFnQztJQVlwRCwwQ0FBa0I7Ozs7Ozs7O3dCQXRHcEI7RUFrRW1DLDBCQUEwQjtTQUFoRCxhQUFhO0FBeUkxQjs7O0dBR0c7QUFDSCxNQUFNLENBQU4sSUFBWSxtQkF5Qlg7QUF6QkQsV0FBWSxtQkFBbUI7SUFDN0I7O09BRUc7SUFDSCw2SEFBd0MsQ0FBQTtJQUN4Qzs7T0FFRztJQUNILG1HQUEyQixDQUFBO0lBQzNCOztPQUVHO0lBQ0gsMkhBQXVDLENBQUE7SUFDdkM7O09BRUc7SUFDSCxxSEFBb0MsQ0FBQTtJQUNwQzs7T0FFRztJQUNILDZHQUFnQyxDQUFBO0lBQ2hDOztPQUVHO0lBQ0gseUhBQXNDLENBQUE7QUFDeEMsQ0FBQyxFQXpCVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBeUI5QjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQiwyRUFBa0IsQ0FBQTtJQUNsQiwyRUFBa0IsQ0FBQTtJQUNsQiwyRUFBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUkzQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksb0JBR1g7QUFIRCxXQUFZLG9CQUFvQjtJQUM5QiwrREFBUSxDQUFBO0lBQ1IsaUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBRy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBHYW8gRGUgTG9jYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQmVjYXVzZSB0aGUgb3JpZ2luYWwgR1BTIHBvc2l0aW9uaW5nIHVzZXMgR29vZ2xlIEJyb3dzZXIgcG9zaXRpb25pbmcsIGFuZCBHb29nbGUgd2l0aGRyYXdzIGZyb20gQ2hpbmEsIHJlc3VsdGluZyBpbiBHUFMgQW5kcm9pZCBwb3NpdGlvbmluZyBjYW4gbm90IGJlIHBvc2l0aW9uZWQuXG4gKiBHYW9kZSBsb2NhdGlvbiBjYW4gZGlyZWN0bHkgcmV0dXJuIGFkZHJlc3MgaW5mb3JtYXRpb25HYW9kZSBsb2NhdGlvbiBjYW4gZGlyZWN0bHkgcmV0dXJuIGFkZHJlc3MgaW5mb3JtYXRpb25cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2FvRGVMb2NhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9nYW8tZGUtbG9jYXRpb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnYW9EZUxvY2F0aW9uOiBHYW9EZUxvY2F0aW9uKSB7IH1cbiAqXG4gKlxuICogY29uc3QgcG9zaXRpb25PcHRpb25zOiBQb3NpdGlvbk9wdGlvbnMgPSB7XG4gKiAgICAgYW5kcm9pZE9wdGlvbjoge1xuICogICAgICBsb2NhdGlvbk1vZGU6IExvY2F0aW9uTW9kZUVudW0uSGlnaHRfQWNjdXJhY3ksXG4gKiAgICAgIGdwc0ZpcnN0OiBmYWxzZSxcbiAqICAgICAgIEh0dHBUaW1lT3V0OiAzMDAwMCxcbiAqICAgICAgIGludGVydmFsOiAyMDAwLFxuICogICAgICAgbmVlZEFkZHJlc3M6IHRydWUsXG4gKiAgICAgICBvbmNlTG9jYXRpb246IGZhbHNlLFxuICogICAgICAgb25jZUxvY2F0aW9uTGF0ZXN0OiBmYWxzZSxcbiAqICAgICAgIGxvY2F0aW9uUHJvdG9jb2w6IExvY2F0aW9uUHJvdG9jb2xFbnVtLkhUVFAsXG4gKiAgICAgICBzZW5zb3JFbmFibGU6IGZhbHNlLFxuICogICAgICAgd2lmaVNjYW46IHRydWUsXG4gKiAgICAgICBsb2NhdGlvbkNhY2hlRW5hYmxlOiB0cnVlXG4gKiAgICAgfSwgaW9zT3B0aW9uOiB7XG4gKiAgICAgICBkZXNpcmVkQWNjdXJhY3k6IERlc2lyZWRBY2N1cmFjeUVudW0ua0NMTG9jYXRpb25BY2N1cmFjeUJlc3QsXG4gKiAgICAgICBwYXVzZXNMb2NhdGlvblVwZGF0ZXNBdXRvbWF0aWNhbGx5OiAnWUVTJyxcbiAqICAgICAgIGFsbG93c0JhY2tncm91bmRMb2NhdGlvblVwZGF0ZXM6ICdOTycsXG4gKiAgICAgICBsb2NhdGlvblRpbWVvdXQ6IDEwLFxuICogICAgICAgcmVHZW9jb2RlVGltZW91dDogNSxcbiAqICAgICB9XG4gKiAgIH07XG4gKiBjb25zdCBwb3NpdGlvblJlczogUG9zaXRpb25SZXMgPSBhd2FpdCB0aGlzLmdhb0RlTG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uT3B0aW9ucykuY2F0Y2goKGU6IGFueSkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKGUpO1xuICogICB9KSB8fCBudWxsO1xuICogY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocG9zaXRpb25SZXMpKTtcbiAqXG4gKlxuICogdGhpcy5nYW9EZUxvY2F0aW9uLnN0YXJ0U2VyaWFsTG9jYXRpb24ocG9zaXRpb25PcHRpb25zKS5zdWJzY3JpYmUoKHBvc2l0aW9uUmVzOiBQb3NpdGlvblJlcykgPT4ge1xuICogICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocG9zaXRpb25SZXMpKTtcbiAqIH0pO1xuICpcbiAqIGNvbnN0IHBvc2l0aW9uUmVzOiBhbnkgPSB0aGlzLmdhb0RlTG9jYXRpb24uc3RvcFNlcmlhbExvY2F0aW9uKCkuY2F0Y2goKGUpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZyhlKTtcbiAqICAgfSkgfHwgbnVsbDtcbiAqIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uUmVzKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR2FvRGVMb2NhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdhb2RlbG9jYXRpb24tY2hlbnl1JyxcbiAgcGx1Z2luUmVmOiAnR2FvRGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3dhbGl1L2NvcmRvdmEtcGx1Z2luLWdhb2RlbG9jYXRpb24tY2hlbnl1LmdpdCcsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nYW9kZWxvY2F0aW9uLWNoZW55dSAtLXZhcmlhYmxlICBBTkRST0lEX0FQSV9LRVk9eW91ciBhbmRyb2lkIGtleSAtLXZhcmlhYmxlICBJT1NfQVBJX0tFWT15b3VyIGlvcyBrZXknLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FORFJPSURfQVBJX0tFWScsICdJT1NfQVBJX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2FvRGVMb2NhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNpbmdsZSBsb2NhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcG9zaXRpb25PcHRpb25zXG4gICAqIEByZXR1cm5zIFByb21pc2U8UG9zaXRpb25SZXM+XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb25PcHRpb25zOiBQb3NpdGlvbk9wdGlvbnMpOiBQcm9taXNlPFBvc2l0aW9uUmVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHNlcmlhbCBsb2NhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcG9zaXRpb25PcHRpb25zXG4gICAqIEByZXR1cm5zIFByb21pc2U8UG9zaXRpb25SZXM+XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHN0YXJ0U2VyaWFsTG9jYXRpb24ocG9zaXRpb25PcHRpb25zOiBQb3NpdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPFBvc2l0aW9uUmVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgU2VyaWFsIExvY2F0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc3RvcFNlcmlhbExvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogTG9jYXRpb24gcGFyYW1ldGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIGFuZHJvaWQgb3B0aW9uc1xuICAgKi9cbiAgYW5kcm9pZE9wdGlvbjogQW5kcm9pZE9wdGlvbnM7XG4gIC8qKlxuICAgKiBpb3Mgb3B0aW9uc1xuICAgKi9cbiAgaW9zT3B0aW9uOiBJb3NPcHRpb25zO1xufVxuXG4vKipcbiAqIGFuZHJvaWQgcG9zaXRpb25pbmcgYWNjdXJhY3lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBsb2NhdGlvbiBtb2RlXG4gICAqL1xuICBsb2NhdGlvbk1vZGU6IExvY2F0aW9uTW9kZUVudW07XG4gIC8qKlxuICAgKiBncHMgZmlyc3RcbiAgICovXG4gIGdwc0ZpcnN0OiBib29sZWFuO1xuICAvKipcbiAgICogSHR0cCB0aW1lT3V0XG4gICAqL1xuICBIdHRwVGltZU91dDogbnVtYmVyO1xuICAvKipcbiAgICogTG9jYXRpb24gaW50ZXJ2YWxcbiAgICovXG4gIGludGVydmFsOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcGVuIHJldmVyc2UgYWRkcmVzc1xuICAgKi9cbiAgbmVlZEFkZHJlc3M6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBvbmNlIGxvY2F0aW9uXG4gICAqL1xuICBvbmNlTG9jYXRpb246IGJvb2xlYW47XG4gIC8qKlxuICAgKiBvbmNlIGxvY2F0aW9uIGxhdGVzdFxuICAgKi9cbiAgb25jZUxvY2F0aW9uTGF0ZXN0OiBib29sZWFuO1xuICAvKipcbiAgICogbG9jYXRpb24gcHJvdG9jb2xcbiAgICovXG4gIGxvY2F0aW9uUHJvdG9jb2w6IExvY2F0aW9uUHJvdG9jb2xFbnVtO1xuICAvKipcbiAgICogc2Vuc29yIGVuYWJsZVxuICAgKi9cbiAgc2Vuc29yRW5hYmxlOiBib29sZWFuO1xuICAvKipcbiAgICogd2lmaSBzY2FuXG4gICAqL1xuICB3aWZpU2NhbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGxvY2F0aW9uIGNhY2hlIGVuYWJsZVxuICAgKi9cbiAgbG9jYXRpb25DYWNoZUVuYWJsZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKlxuICogSU9TIHBvc2l0aW9uaW5nIHBhcmFtZXRlcnNcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW9zT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBkZXNpcmVkIGFjY3VyYWN5XG4gICAqL1xuICBkZXNpcmVkQWNjdXJhY3k/OiBEZXNpcmVkQWNjdXJhY3lFbnVtO1xuICAvKipcbiAgICogcGF1c2VzIGxvY2F0aW9uIHVwZGF0ZXMgYXV0b21hdGljYWxseVxuICAgKi9cbiAgcGF1c2VzTG9jYXRpb25VcGRhdGVzQXV0b21hdGljYWxseTogSW9zQm9vbGVhbjtcbiAgLyoqXG4gICAqIGFsbG93cyBiYWNrZ3JvdW5kIGxvY2F0aW9uIHVwZGF0ZXNcbiAgICovXG4gIGFsbG93c0JhY2tncm91bmRMb2NhdGlvblVwZGF0ZXM6IElvc0Jvb2xlYW47XG4gIC8qKlxuICAgKiBsb2NhdGlvbiB0aW1lb3V0XG4gICAqL1xuICBsb2NhdGlvblRpbWVvdXQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHJlIGdlb2NvZGUgdGltZW91dFxuICAgKi9cbiAgcmVHZW9jb2RlVGltZW91dD86IG51bWJlcjtcbiAgLyoqXG4gICAqIGxvY2F0aW5nIHdpdGggcmUgZ2VvY29kZVxuICAgKi9cbiAgbG9jYXRpbmdXaXRoUmVHZW9jb2RlPzogSW9zQm9vbGVhbjtcbn1cblxuLyoqXG4gKiBpb3MgcG9zaXRpb25pbmcgYWNjdXJhY3lcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2NvcmVsb2NhdGlvbi9rY2xsb2NhdGlvbmFjY3VyYWN5YmVzdGZvcm5hdmlnYXRpb25cbiAqL1xuZXhwb3J0IGVudW0gRGVzaXJlZEFjY3VyYWN5RW51bSB7XG4gIC8qKlxuICAgKiBUaGUgaGlnaGVzdCBwb3NzaWJsZSBhY2N1cmFjeSB0aGF0IHVzZXMgYWRkaXRpb25hbCBzZW5zb3IgZGF0YSB0byBmYWNpbGl0YXRlIG5hdmlnYXRpb24gYXBwcy5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lCZXN0Rm9yTmF2aWdhdGlvbiA9IDEsXG4gIC8qKlxuICAgKiBUaGUgYmVzdCBsZXZlbCBvZiBhY2N1cmFjeSBhdmFpbGFibGUuXG4gICAqL1xuICBrQ0xMb2NhdGlvbkFjY3VyYWN5QmVzdCA9IDIsXG4gIC8qKlxuICAgKiBBY2N1cmF0ZSB0byB3aXRoaW4gdGVuIG1ldGVycyBvZiB0aGUgZGVzaXJlZCB0YXJnZXQuXG4gICAqL1xuICBrQ0xMb2NhdGlvbkFjY3VyYWN5TmVhcmVzdFRlbk1ldGVycyA9IDMsXG4gIC8qKlxuICAgKiBBY2N1cmF0ZSB0byB3aXRoaW4gb25lIGh1bmRyZWQgbWV0ZXJzLlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeUh1bmRyZWRNZXRlcnMgPSA0LFxuICAvKipcbiAgICogQWNjdXJhdGUgdG8gdGhlIG5lYXJlc3Qga2lsb21ldGVyLlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeUtpbG9tZXRlciA9IDUsXG4gIC8qKlxuICAgKiBBY2N1cmF0ZSB0byB0aGUgbmVhcmVzdCB0aHJlZSBraWxvbWV0ZXJzLlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeVRocmVlS2lsb21ldGVycyA9IDYsXG59XG5cbi8qKlxuICogbG9jYXRpb25Nb2RlRW51bVxuICovXG5leHBvcnQgZW51bSBMb2NhdGlvbk1vZGVFbnVtIHtcbiAgSGlnaHRfQWNjdXJhY3kgPSAxLFxuICBCYXR0ZXJ5X1NhdmluZyA9IDIsXG4gIERldmljZV9TZW5zb3JzID0gMyxcbn1cblxuLyoqXG4gKiBsb2NhdGlvblByb3RvY29sRW51bVxuICovXG5leHBvcnQgZW51bSBMb2NhdGlvblByb3RvY29sRW51bSB7XG4gIEhUVFAgPSAxLFxuICBIVFRQUyA9IDIsXG59XG5cbi8qKlxuICogaW9zIGJvb2xlYW5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBJb3NCb29sZWFuID0gJ1lFUycgfCAnTk8nO1xuXG4vKipcbiAqIFBvc2l0aW9uaW5nIHJldHVybiByZXN1bHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvblJlcyB7XG4gIC8qKlxuICAgKiBTdGF0dXMgY29kZVxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKipcbiAgICogbGF0aXR1ZGVcbiAgICovXG4gIGxhdGl0dWRlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBsb25naXR1ZGVcbiAgICovXG4gIGxvbmdpdHVkZTogc3RyaW5nO1xuICAvKipcbiAgICogYWNjdXJhY3lcbiAgICovXG4gIGFjY3VyYWN5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRyZXNzXG4gICAqL1xuICBmb3JtYXR0ZWRBZGRyZXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjb3VudHJ5XG4gICAqL1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBwcm92aW5jZVxuICAgKi9cbiAgcHJvdmluY2U6IHN0cmluZztcbiAgLyoqXG4gICAqIGNpdHlcbiAgICovXG4gIGNpdHk6IHN0cmluZztcbiAgLyoqXG4gICAqIGRpc3RyaWN0XG4gICAqL1xuICBkaXN0cmljdDogc3RyaW5nO1xuICAvKipcbiAgICogY2l0eWNvZGVcbiAgICovXG4gIGNpdHljb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGNvZGVcbiAgICovXG4gIGFkY29kZTogc3RyaW5nO1xuICAvKipcbiAgICogc3RyZWV0XG4gICAqL1xuICBzdHJlZXQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFN0cmVldCBudW1iZXIgaW5mb3JtYXRpb25cbiAgICovXG4gIG51bWJlcjogc3RyaW5nO1xuICAvKipcbiAgICogUE9JIG5hbWVcbiAgICovXG4gIFBPSU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIEFPSSBOYW1lXG4gICAqL1xuICBBT0lOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbHRpdHVkZVxuICAgKi9cbiAgYWx0aXR1ZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcGVlZFxuICAgKi9cbiAgc3BlZWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBiZWFyaW5nXG4gICAqL1xuICBiZWFyaW5nPzogc3RyaW5nO1xuICAvKipcbiAgICogYnVpbGRpbmcgaWRcbiAgICovXG4gIGJ1aWxkaW5nSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmbG9vclxuICAgKi9cbiAgZmxvb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBncHMgYWNjdXJhY3kgc3RhdHVzXG4gICAqL1xuICBncHNBY2N1cmFjeVN0YXR1cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEdldCBsb2NhdGlvbiByZXN1bHQgc291cmNlXG4gICAqL1xuICBsb2NhdGlvblR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBkZXRhaWxcbiAgICovXG4gIGxvY2F0aW9uRGV0YWlsPzogc3RyaW5nO1xufVxuIl19