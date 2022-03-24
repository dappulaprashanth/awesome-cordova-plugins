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
var HyperTrackPluginOriginal = /** @class */ (function (_super) {
    __extends(HyperTrackPluginOriginal, _super);
    function HyperTrackPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPluginOriginal.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPluginOriginal.prototype.getBlockers = function () { return cordova(this, "getBlockers", {}, arguments); };
    HyperTrackPluginOriginal.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPluginOriginal.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.pluginRef = "hypertrack";
    HyperTrackPluginOriginal.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPluginOriginal.platforms = ["Android, iOS"];
    return HyperTrackPluginOriginal;
}(AwesomeCordovaNativePlugin));
var HyperTrackPlugin = new HyperTrackPluginOriginal();
export { HyperTrackPlugin };
var CoordinatesValidationError = /** @class */ (function (_super) {
    __extends(CoordinatesValidationError, _super);
    function CoordinatesValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoordinatesValidationError;
}(Error));
export { CoordinatesValidationError };
var Coordinates = /** @class */ (function () {
    function Coordinates(latitude, longitude) {
        if (latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0) {
            throw new CoordinatesValidationError('latitude and longitude should be of correct valaues');
        }
    }
    return Coordinates;
}());
export { Coordinates };
var HyperTrack = /** @class */ (function () {
    function HyperTrack(cordovaInstanceHandle) {
        this.cordovaInstanceHandle = cordovaInstanceHandle;
    }
    /** Enables debug log in native HyperTrack SDK. */
    HyperTrack.enableDebugLogging = function () {
        new HyperTrackPluginOriginal().enableDebugLogging();
    };
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     *
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    HyperTrack.initialize = function (publishableKey) {
        return new Promise(function (resolve, reject) {
            new HyperTrackPluginOriginal()
                .initialize(publishableKey)
                .then(function (cordovaInstance) {
                resolve(new HyperTrack(cordovaInstance));
            })
                .catch(function (err) { return reject(err); });
        });
    };
    /**
     * Get the list of blockers that needs to be resolved for reliable tracking.
     *
     * @see {Blocker}
     */
    HyperTrack.getBlockers = function () {
        return new HyperTrackPluginOriginal().getBlockers();
    };
    /** Resolves device ID that could be used to identify the device. */
    HyperTrack.prototype.getDeviceId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getDeviceId(function (deviceId) { return resolve(deviceId); }, function (err) { return reject(err); });
        });
    };
    /** Resolves to true if tracking service is running and false otherwise */
    HyperTrack.prototype.isRunning = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.isRunning(function (isRunning) { return resolve(isRunning); }, function (err) { return reject(err); });
        });
    };
    /**
     * Sets device name that could be used to identify the device in HyperTrack dashboard
     *
     * @param name
     */
    HyperTrack.prototype.setDeviceName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceName(name, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Use this to set additional properties, like segments, teams etc.
     *
     * @param metadata key-value pais of properties.
     */
    HyperTrack.prototype.setDeviceMetadata = function (metadata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceMetadata(metadata, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Updates title and text in persistent notification, that appears when tracking is active.
     *
     * @param title
     * @param message
     */
    HyperTrack.prototype.setTrackingNotificationProperties = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setTrackingNotificationProperties(title, message, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Adds special marker-like object to device timeline.
     *
     * @param geotagData
     * @param expectedLocation
     */
    HyperTrack.prototype.addGeotag = function (geotagData, expectedLocation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.addGeoTag(geotagData, expectedLocation, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    HyperTrack.prototype.requestPermissionsIfNecessary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.requestPermissionsIfNecessary(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    HyperTrack.prototype.allowMockLocations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.allowMockLocations(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    HyperTrack.prototype.syncDeviceSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.syncDeviceSettings(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Start tracking. */
    HyperTrack.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.start(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Stop tracking. */
    HyperTrack.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.stop(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    return HyperTrack;
}());
export { HyperTrack };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaHlwZXItdHJhY2svaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBVXRELG9DQUEwQjs7OztJQUU5RCxxQ0FBVSxhQUFDLGNBQXNCO0lBS2pDLHNDQUFXO0lBS1gsNkNBQWtCOzs7Ozs7MkJBdkJwQjtFQVdzQywwQkFBMEI7U0FBbkQsZ0JBQWdCOztJQXlEbUIsOENBQUs7Ozs7cUNBcEVyRDtFQW9FZ0QsS0FBSzs7O0lBSW5ELHFCQUFZLFFBQWdCLEVBQUUsU0FBaUI7UUFDN0MsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksUUFBUSxHQUFHLElBQUksSUFBSSxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFHLEtBQUssRUFBRTtZQUNsRixNQUFNLElBQUksMEJBQTBCLENBQUMscURBQXFELENBQUMsQ0FBQztTQUM3RjtJQUNILENBQUM7c0JBNUVIOzs7O0lBZ1NFLG9CQUE0QixxQkFBd0M7UUFBeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFtQjtJQUFHLENBQUM7SUEzS3hFLGtEQUFrRDtJQUMzQyw2QkFBa0IsR0FBekI7UUFDRSxJQUFJLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxxQkFBVSxHQUFqQixVQUFrQixjQUFzQjtRQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBSSxnQkFBZ0IsRUFBRTtpQkFDbkIsVUFBVSxDQUFDLGNBQWMsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLFVBQUMsZUFBa0M7Z0JBQ3ZDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxHQUFVLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHNCQUFXLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLGdCQUFnQixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxnQ0FBVyxHQUFYO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FDcEMsVUFBQyxRQUFRLElBQUssT0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQWpCLENBQWlCLEVBQy9CLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSw4QkFBUyxHQUFUO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FDbEMsVUFBQyxTQUFTLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQWxCLENBQWtCLEVBQ2pDLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxrQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUExQixpQkFRQztRQVBDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUN0QyxJQUFJLEVBQ0osY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQWlCLEdBQWpCLFVBQWtCLFFBQWdCO1FBQWxDLGlCQVFDO1FBUEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FDMUMsUUFBUSxFQUNSLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzREFBaUMsR0FBakMsVUFBa0MsS0FBYSxFQUFFLE9BQWU7UUFBaEUsaUJBU0M7UUFSQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGlDQUFpQyxDQUMxRCxLQUFLLEVBQ0wsT0FBTyxFQUNQLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw4QkFBUyxHQUFULFVBQVUsVUFBa0IsRUFBRSxnQkFBOEI7UUFBNUQsaUJBU0M7UUFSQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FDbEMsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBHQUEwRztJQUMxRyxrREFBNkIsR0FBN0I7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQ3RELGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0ZBQW9GO0lBQ3BGLHVDQUFrQixHQUFsQjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDM0MsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCx1Q0FBa0IsR0FBbEI7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQzNDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCO0lBQ3RCLDBCQUFLLEdBQUw7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUM5QixjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFCQUFxQjtJQUNyQix5QkFBSSxHQUFKO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FDN0IsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7cUJBOVJIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIENvcmRvdmEsIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay12MycsXG4gIHBsdWdpblJlZjogJ2h5cGVydHJhY2snLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2h5cGVydHJhY2svY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCwgaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh5cGVyVHJhY2tQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleTogc3RyaW5nKTogUHJvbWlzZTxIeXBlclRyYWNrQ29yZG92YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QmxvY2tlcnMoKTogUHJvbWlzZTxTZXQ8QmxvY2tlcj4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGVuYWJsZURlYnVnTG9nZ2luZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBJbnRlcmZhY2VzIGZvciBDb3Jkb3ZhIFBsdWdpbiBjYWxsYmFja3NcbmludGVyZmFjZSBEZXZpY2VJZFJlY2VpdmVyIHtcbiAgKGRldmljZUlkOiBzdHJpbmcpOiBhbnk7XG59XG5pbnRlcmZhY2UgVHJhY2tpbmdTdGF0ZVJlY2VpdmVyIHtcbiAgKGlzUnVubmluZzogYm9vbGVhbik6IGFueTtcbn1cbmludGVyZmFjZSBGYWlsdXJlSGFuZGxlciB7XG4gIChlcnJvcjogRXJyb3IpOiBhbnk7XG59XG5pbnRlcmZhY2UgU3VjY2Vzc0hhbmRsZXIge1xuICAoKTogYW55O1xufVxuXG4vLyBTREsgaW5zdGFuY2UgdGhhdCBleHBvc2VkIGZyb20gQ29yZG92YSB1dGlsaXplcyB1c2FnZSBvZiBjYWxsYmFja3MsIHNvIHdlXG4vLyB3cmFwIGl0IHdpdGggYWRhcHRlciB0byBhdm9pZCBtaXggb2YgY2FsbGJhY2tzIGFuZCBQcm9taXNlc1xuaW50ZXJmYWNlIEh5cGVyVHJhY2tDb3Jkb3ZhIHtcbiAgZ2V0RGV2aWNlSWQoc3VjY2VzczogRGV2aWNlSWRSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgaXNSdW5uaW5nKHN1Y2Nlc3M6IFRyYWNraW5nU3RhdGVSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc2V0RGV2aWNlTmFtZShuYW1lOiBzdHJpbmcsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzZXREZXZpY2VNZXRhZGF0YShtZXRhZGF0YTogT2JqZWN0LCBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLFxuICAgIGVycm9yOiBGYWlsdXJlSGFuZGxlclxuICApOiB2b2lkO1xuICBhZGRHZW9UYWcoXG4gICAgZ2VvdGFnRGF0YTogT2JqZWN0LFxuICAgIGV4cGVjdGVkTG9jYXRpb246IENvb3JkaW5hdGVzIHwgdW5kZWZpbmVkLFxuICAgIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLFxuICAgIGVycm9yOiBGYWlsdXJlSGFuZGxlclxuICApOiB2b2lkO1xuICByZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeShzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgYWxsb3dNb2NrTG9jYXRpb25zKHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzeW5jRGV2aWNlU2V0dGluZ3Moc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHN0YXJ0KHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzdG9wKHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4vKiogV3JhcHBlciBjbGFzcyBmb3IgcGFzc2luZyBzcGF0aWFsIGdlb3Bvc2l0aW9uIGFzIGEgZ2VvdGFnJ3MgZXhwZWN0ZWQgbG9jYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKSB7XG4gICAgaWYgKGxhdGl0dWRlIDwgLTkwLjAgfHwgbGF0aXR1ZGUgPiA5MC4wIHx8IGxvbmdpdHVkZSA8IC0xODAuMCB8fCBsb25naXR1ZGUgPiAxODAuMCkge1xuICAgICAgdGhyb3cgbmV3IENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yKCdsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHNob3VsZCBiZSBvZiBjb3JyZWN0IHZhbGF1ZXMnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEEgYmxvY2tlciBpcyBhbiBvYnN0YWNsZSB0aGF0IG5lZWRzIHRvIGJlIHJlc29sdmVkIHRvIGFjaGlldmUgcmVsaWFibGUgdHJhY2tpbmcuICovXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrZXIge1xuICAvKiogUmVjb21tZW5kZWQgbmFtZSBmb3IgYSB1c2VyIGFjdGlvbiwgdGhhdCBuZWVkcyB0byBiZSBwZXJmb3JtZWQgdG8gcmVzb2x2ZSB0aGUgYmxvY2tlci4gKi9cbiAgdXNlckFjdGlvblRpdGxlOiBzdHJpbmc7XG4gIC8qKiBSZWNvbW1lbmRlZCBuYW1lIGZvciBhIGJ1dHRvbiwgdGhhdCB3aWxsIG5hdmlnYXRlIHVzZXIgdG8gdGhlIHBsYWNlIHdoZXJlIGhlIGNhbiByZXNvbHZlIHRoZSBibG9ja2VyICovXG4gIHVzZXJBY3Rpb25DVEE6IHN0cmluZztcbiAgLyoqIFVzZXIgYWN0aW9uIGV4cGxhbmF0aW9uICovXG4gIHVzZXJBY3Rpb25FeHBsYW5hdGlvbjogc3RyaW5nO1xuICAvKiogQW4gYWN0aW9uIHRoYXQgbmF2aWdhdGVzIHVzZXIgdG8gdGhlIGRlZGljYXRlZCBzZXR0aW5ncyBtZW51LiAqL1xuICByZXNvbHZlOiAoKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogICBpbXBvcnQgeyBIeXBlclRyYWNrIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2h5cGVyLXRyYWNrJztcbiAqXG4gKiAgIGluaXRpYWxpemVIeXBlcnRyYWNrKCkge1xuICogICAgIEh5cGVyVHJhY2suZW5hYmxlRGVidWdMb2dnaW5nKCk7XG4gKiAgICAgSHlwZXJUcmFjay5pbml0aWFsaXplKCdZT1VSX1BVQkxJU0hJTkdfS0VZJylcbiAqICAgICAudGhlbiggdGhpcy5vblNka0luc3RhbmNlUmVjZWl2ZWQgKVxuICogICAgIC5jYXRjaCggKGVycikgPT4gY29uc29sZS5lcnJvcihcIkh5cGVyVHJhY2sgaW5pdCBmYWlsZWQgd2l0aCBlcnJvciBcIiArIGVycikgKTtcbiAqICAgfVxuICogICBvblNka0luc3RhbmNlUmVjZWl2ZWQoc2RrSW5zdGFuY2U6IEh5cGVyVHJhY2spIHtcbiAqICAgICAgIHNka0luc3RhbmNlLmdldERldmljZUlkKClcbiAqICAgICAgLnRoZW4oKGlkKSA9PiBjb25zb2xlLmxvZyhcIkdvdCBkZXZpY2UgaWQgXCIgKyBpZCkpXG4gKiAgICAgIC50aGVuKCgpID0+IHNka0luc3RhbmNlLnNldERldmljZU5hbWUoXCJFbHZpcyBJb25pY1wiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJEZXZpY2UgbmFtZSB3YXMgY2hhbmdlZFwiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0RGV2aWNlTWV0YWRhdGEoe3BsYXRmb3JtOiBcIklvbmljIEFuZHJvaWRcIn0pKVxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkRldmljZSBtZXRhZGF0YSB3YXMgY2hhbmdlZFwiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFwiVHJhY2tpbmcgT25cIiwgXCJJb25pYyBTREsgaXMgdHJhY2tpbmdcIikpXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHByb3BlcnRpZXMgd2VyZSBjaGFuZ2VkXCIpKVxuICogICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkdvdCBlcnJvciBpbiBIeXBlclRyYWNrIFwiICsgZXJyKSk7XG4gKiAgIH1cbiAqXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIEh5cGVyVHJhY2sge1xuICAvKiogRW5hYmxlcyBkZWJ1ZyBsb2cgaW4gbmF0aXZlIEh5cGVyVHJhY2sgU0RLLiAqL1xuICBzdGF0aWMgZW5hYmxlRGVidWdMb2dnaW5nKCk6IHZvaWQge1xuICAgIG5ldyBIeXBlclRyYWNrUGx1Z2luKCkuZW5hYmxlRGVidWdMb2dnaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRW50cnkgcG9pbnQgaW50byBTREsuXG4gICAqXG4gICAqIEluaXRpYWxpemVzIFNESy4gQWxzbyByZXNvbHZlcyBTREsgaW5zdGFuY2UgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIHF1ZXJ5IGRldmljZUlkIG9yIHNldFxuICAgKiB2YXJpb3VzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSBwdWJsaXNoYWJsZUtleSBhY2NvdW50LXNwZWNpZmljIHNlY3JldCBmcm9tIHRoZSBIeXBlclRyYWNrIGRhc2hib3JhZC5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kYXNoYm9hcmQuaHlwZXJ0cmFjay5jb20vc2V0dXB9LlxuICAgKi9cbiAgc3RhdGljIGluaXRpYWxpemUocHVibGlzaGFibGVLZXk6IHN0cmluZyk6IFByb21pc2U8SHlwZXJUcmFjaz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuZXcgSHlwZXJUcmFja1BsdWdpbigpXG4gICAgICAgIC5pbml0aWFsaXplKHB1Ymxpc2hhYmxlS2V5KVxuICAgICAgICAudGhlbigoY29yZG92YUluc3RhbmNlOiBIeXBlclRyYWNrQ29yZG92YSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUobmV3IEh5cGVyVHJhY2soY29yZG92YUluc3RhbmNlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gcmVqZWN0KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBibG9ja2VycyB0aGF0IG5lZWRzIHRvIGJlIHJlc29sdmVkIGZvciByZWxpYWJsZSB0cmFja2luZy5cbiAgICpcbiAgICogQHNlZSB7QmxvY2tlcn1cbiAgICovXG4gIHN0YXRpYyBnZXRCbG9ja2VycygpOiBQcm9taXNlPFNldDxCbG9ja2VyPj4ge1xuICAgIHJldHVybiBuZXcgSHlwZXJUcmFja1BsdWdpbigpLmdldEJsb2NrZXJzKCk7XG4gIH1cblxuICAvKiogUmVzb2x2ZXMgZGV2aWNlIElEIHRoYXQgY291bGQgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgZGV2aWNlLiAqL1xuICBnZXREZXZpY2VJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5nZXREZXZpY2VJZChcbiAgICAgICAgKGRldmljZUlkKSA9PiByZXNvbHZlKGRldmljZUlkKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0cmFja2luZyBzZXJ2aWNlIGlzIHJ1bm5pbmcgYW5kIGZhbHNlIG90aGVyd2lzZSAqL1xuICBpc1J1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmlzUnVubmluZyhcbiAgICAgICAgKGlzUnVubmluZykgPT4gcmVzb2x2ZShpc1J1bm5pbmcpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGRldmljZSBuYW1lIHRoYXQgY291bGQgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgZGV2aWNlIGluIEh5cGVyVHJhY2sgZGFzaGJvYXJkXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBzZXREZXZpY2VOYW1lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXREZXZpY2VOYW1lKFxuICAgICAgICBuYW1lLFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIHRvIHNldCBhZGRpdGlvbmFsIHByb3BlcnRpZXMsIGxpa2Ugc2VnbWVudHMsIHRlYW1zIGV0Yy5cbiAgICpcbiAgICogQHBhcmFtIG1ldGFkYXRhIGtleS12YWx1ZSBwYWlzIG9mIHByb3BlcnRpZXMuXG4gICAqL1xuICBzZXREZXZpY2VNZXRhZGF0YShtZXRhZGF0YTogT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldERldmljZU1ldGFkYXRhKFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRpdGxlIGFuZCB0ZXh0IGluIHBlcnNpc3RlbnQgbm90aWZpY2F0aW9uLCB0aGF0IGFwcGVhcnMgd2hlbiB0cmFja2luZyBpcyBhY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB0aXRsZVxuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cbiAgc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc3BlY2lhbCBtYXJrZXItbGlrZSBvYmplY3QgdG8gZGV2aWNlIHRpbWVsaW5lLlxuICAgKlxuICAgKiBAcGFyYW0gZ2VvdGFnRGF0YVxuICAgKiBAcGFyYW0gZXhwZWN0ZWRMb2NhdGlvblxuICAgKi9cbiAgYWRkR2VvdGFnKGdlb3RhZ0RhdGE6IE9iamVjdCwgZXhwZWN0ZWRMb2NhdGlvbj86IENvb3JkaW5hdGVzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmFkZEdlb1RhZyhcbiAgICAgICAgZ2VvdGFnRGF0YSxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBQb3BzIHVwIHBlcm1pc3Npb24gcmVxdWVzdCBkaWFsb2csIGlmIHBlcm1pc3Npb25zIHdlcmVuJ3QgZ3JhbnRlZCBiZWZvcmUgb3IgZG9lcyBub3RoaW5nIG90aGVyd2lzZS4gKi9cbiAgcmVxdWVzdFBlcm1pc3Npb25zSWZOZWNlc3NhcnkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFsbG93cyBpbmplY3RpbmcgZmFsc2UgbG9jYXRpb25zIGludG8gdGhlIFNESywgd2hpY2ggaWdub3JlcyB0aGVtIGJ5IGRlZmF1bHQuICovXG4gIGFsbG93TW9ja0xvY2F0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuYWxsb3dNb2NrTG9jYXRpb25zKFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0cmFja2luZyBzdGF0ZSB3aXRoIHBsYXRmb3JtIG1vZGVsLiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvXG4gICAqIGhhcmRlbiBwbGF0Zm9ybTJkZXZpY2UgY29tbXVuaWNhdGlvbiBjaGFubmVsLlxuICAgKi9cbiAgc3luY0RldmljZVNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zeW5jRGV2aWNlU2V0dGluZ3MoXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogU3RhcnQgdHJhY2tpbmcuICovXG4gIHN0YXJ0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zdGFydChcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTdG9wIHRyYWNraW5nLiAqL1xuICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zdG9wKFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmRvdmFJbnN0YW5jZUhhbmRsZTogSHlwZXJUcmFja0NvcmRvdmEpIHt9XG59XG4iXX0=