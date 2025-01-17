import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, checkAvailability, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
export var Connection;
(function (Connection) {
    Connection["UNKNOWN"] = "unknown";
    Connection["ETHERNET"] = "ethernet";
    Connection["WIFI"] = "wifi";
    Connection["CELL_2G"] = "2g";
    Connection["CELL_3G"] = "3g";
    Connection["CELL_4G"] = "4g";
    Connection["CELL"] = "cellular";
    Connection["NONE"] = "none";
})(Connection || (Connection = {}));
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none',
        };
        return _this;
    }
    Network.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect().pipe(mapTo('connected')), _this.onDisconnect().pipe(mapTo('disconnected')));
            }
        })();
    };
    Network.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    Network.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(Network.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: false,
        configurable: true
    });
    Network.pluginName = "Network";
    Network.plugin = "cordova-plugin-network-information";
    Network.pluginRef = "navigator.connection";
    Network.repo = "https://github.com/apache/cordova-plugin-network-information";
    Network.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Network.decorators = [
        { type: Injectable }
    ];
    return Network;
}(AwesomeCordovaNativePlugin));
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0d29yay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxrR0FNTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl2QyxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0lBQ3JCLDJCQUFhLENBQUE7SUFDYiw0QkFBYyxDQUFBO0lBQ2QsNEJBQWMsQ0FBQTtJQUNkLDRCQUFjLENBQUE7SUFDZCwrQkFBaUIsQ0FBQTtJQUNqQiwyQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQVRXLFVBQVUsS0FBVixVQUFVLFFBU3JCOztJQW9ENEIsMkJBQTBCOzs7UUFDckQ7O1dBRUc7UUFDSCxnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7OztJQXNCRiwwQkFBUTs7O21EQUE2QztnQkFDbkQsT0FBTyxLQUFLLENBQ1YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDekMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQStCLENBQzlFLENBQUM7YUFDSDs7O0lBWUQsOEJBQVk7SUFjWiwyQkFBUzswQkE5Q1UseUJBQUk7Ozs7OzswQkFPSixnQ0FBVzs7Ozs7Ozs7Ozs7O2dCQTVCL0IsVUFBVTs7a0JBekVYO0VBMEU2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbmV4cG9ydCBlbnVtIENvbm5lY3Rpb24ge1xuICBVTktOT1dOID0gJ3Vua25vd24nLFxuICBFVEhFUk5FVCA9ICdldGhlcm5ldCcsXG4gIFdJRkkgPSAnd2lmaScsXG4gIENFTExfMkcgPSAnMmcnLFxuICBDRUxMXzNHID0gJzNnJyxcbiAgQ0VMTF80RyA9ICc0ZycsXG4gIENFTEwgPSAnY2VsbHVsYXInLFxuICBOT05FID0gJ25vbmUnLFxufVxuXG4vKipcbiAqIEBuYW1lIE5ldHdvcmtcbiAqIEBwcmVtaWVyIG5ldHdvcmstaW5mb3JtYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24uIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtOZXR3b3JrIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24pLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25ldHdvcmsvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmspIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdGlvblxuICogbGV0IGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgY29uc29sZS5sb2coJ25ldHdvcmsgd2FzIGRpc2Nvbm5lY3RlZCA6LSgnKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3AgZGlzY29ubmVjdCB3YXRjaFxuICogZGlzY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAqIGxldCBjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIGNvbm5lY3RlZCEnKTtcbiAqICAgLy8gV2UganVzdCBnb3QgYSBjb25uZWN0aW9uIGJ1dCB3ZSBuZWVkIHRvIHdhaXQgYnJpZWZseVxuICogICAgLy8gYmVmb3JlIHdlIGRldGVybWluZSB0aGUgY29ubmVjdGlvbiB0eXBlLiBNaWdodCBuZWVkIHRvIHdhaXQuXG4gKiAgIC8vIHByaW9yIHRvIGRvaW5nIGFueSBhcGkgcmVxdWVzdHMgYXMgd2VsbC5cbiAqICAgc2V0VGltZW91dCgoKSA9PiB7XG4gKiAgICAgaWYgKHRoaXMubmV0d29yay50eXBlID09PSAnd2lmaScpIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKCd3ZSBnb3QgYSB3aWZpIGNvbm5lY3Rpb24sIHdvb2hvbyEnKTtcbiAqICAgICB9XG4gKiAgIH0sIDMwMDApO1xuICogfSk7XG4gKlxuICogLy8gc3RvcCBjb25uZWN0IHdhdGNoXG4gKiBjb25uZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKlxuICogYGBgXG4gKiBAYWR2YW5jZWRcbiAqIFRoZSBgdHlwZWAgcHJvcGVydHkgd2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgY29ubmVjdGlvbiB0eXBlczogYHVua25vd25gLCBgZXRoZXJuZXRgLCBgd2lmaWAsIGAyZ2AsIGAzZ2AsIGA0Z2AsIGBjZWxsdWxhcmAsIGBub25lYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05ldHdvcmsnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNvbm5lY3Rpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXR3b3JrIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzIGZvciBwb3NzaWJsZSBjb25uZWN0aW9uIHR5cGVzXG4gICAqL1xuICBDb25uZWN0aW9uID0ge1xuICAgIFVOS05PV046ICd1bmtub3duJyxcbiAgICBFVEhFUk5FVDogJ2V0aGVybmV0JyxcbiAgICBXSUZJOiAnd2lmaScsXG4gICAgQ0VMTF8yRzogJzJnJyxcbiAgICBDRUxMXzNHOiAnM2cnLFxuICAgIENFTExfNEc6ICc0ZycsXG4gICAgQ0VMTDogJ2NlbGx1bGFyJyxcbiAgICBOT05FOiAnbm9uZScsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbm5lY3Rpb24gdHlwZVxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogRG93bmxpbmsgTWF4IFNwZWVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZG93bmxpbmtNYXg6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRvIHdhdGNoIGNvbm5lY3Rpb24gY2hhbmdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTwnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnPn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPCdjb25uZWN0ZWQnIHwgJ2Rpc2Nvbm5lY3RlZCc+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICB0aGlzLm9uQ29ubmVjdCgpLnBpcGUobWFwVG8oJ2Nvbm5lY3RlZCcpKSxcbiAgICAgIHRoaXMub25EaXNjb25uZWN0KCkucGlwZShtYXBUbygnZGlzY29ubmVjdGVkJykpIGFzIE9ic2VydmFibGU8J2Rpc2Nvbm5lY3RlZCc+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb2ZmbGluZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb2ZmbGluZScsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIG9uRGlzY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb25saW5lXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdvbmxpbmUnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBvbkNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==