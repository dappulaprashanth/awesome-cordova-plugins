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
import { AwesomeCordovaNativePlugin, cordovaInstance } from '@awesome-cordova-plugins/core';
export var UploadState;
(function (UploadState) {
    UploadState["UPLOADED"] = "UPLOADED";
    UploadState["FAILED"] = "FAILED";
    UploadState["UPLOADING"] = "UPLOADING";
    UploadState["INITIALIZED"] = "INITIALIZED";
})(UploadState || (UploadState = {}));
var FileTransferManager = /** @class */ (function () {
    function FileTransferManager(options) {
        this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
    }
    FileTransferManager.prototype.startUpload = function (payload) { return cordovaInstance(this, "startUpload", {}, arguments); };
    FileTransferManager.prototype.removeUpload = function (id) { return cordovaInstance(this, "removeUpload", {}, arguments); };
    FileTransferManager.prototype.acknowledgeEvent = function (id) { return cordovaInstance(this, "acknowledgeEvent", {}, arguments); };
    FileTransferManager.prototype.destroy = function () { return cordovaInstance(this, "destroy", {}, arguments); };
    return FileTransferManager;
}());
export { FileTransferManager };
var BackgroundUploadOriginal = /** @class */ (function (_super) {
    __extends(BackgroundUploadOriginal, _super);
    function BackgroundUploadOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUploadOriginal.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUploadOriginal.pluginName = "BackgroundUpload";
    BackgroundUploadOriginal.plugin = "@spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.pluginRef = "FileTransferManager";
    BackgroundUploadOriginal.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.install = "ionic cordova plugin add @spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.platforms = ["Android", "iOS"];
    return BackgroundUploadOriginal;
}(AwesomeCordovaNativePlugin));
var BackgroundUpload = new BackgroundUploadOriginal();
export { BackgroundUpload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFja2dyb3VuZC11cGxvYWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sK0NBQXVELE1BQU0sK0JBQStCLENBQUM7QUFJcEcsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMkIsQ0FBQTtBQUM3QixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7O0lBd0NDLDZCQUFZLE9BQW1CO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBR0QseUNBQVcsYUFBQyxPQUEwQjtJQUt0QywwQ0FBWSxhQUFDLEVBQU87SUFLcEIsOENBQWdCLGFBQUMsRUFBVTtJQUszQixxQ0FBTzs4QkF0RVQ7Ozs7SUF3R3NDLG9DQUEwQjs7O1FBQzlELHlCQUFtQixHQUFHLG1CQUFtQixDQUFDOzs7SUFFMUMsK0JBQUksR0FBSixVQUFLLE9BQW1CO1FBQ3RCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7OzJCQTdHSDtFQXdHc0MsMEJBQTBCO1NBQW5ELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YUluc3RhbmNlLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGVudW0gVXBsb2FkU3RhdGUge1xuICBVUExPQURFRCA9ICdVUExPQURFRCcsXG4gIEZBSUxFRCA9ICdGQUlMRUQnLFxuICBVUExPQURJTkcgPSAnVVBMT0FESU5HJyxcbiAgSU5JVElBTElaRUQgPSAnSU5JVElBTElaRUQnLFxufVxuXG5leHBvcnQgdHlwZSBVcGxvYWRTdGF0ZVR5cGUgPSBrZXlvZiB0eXBlb2YgVXBsb2FkU3RhdGU7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkRXZlbnQge1xuICBpZD86IHN0cmluZzsgLy8gaWQgb2YgdGhlIHVwbG9hZFxuICBzdGF0ZT86IFVwbG9hZFN0YXRlVHlwZTsgLy8gc3RhdGUgb2YgdGhlIHVwbG9hZCAoZWl0aGVyIFVQTE9BRElORywgVVBMT0FERUQgb3IgRkFJTEVEKVxuICBzdGF0dXNDb2RlPzogbnVtYmVyOyAvLyByZXNwb25zZSBjb2RlIHJldHVybmVkIGJ5IHNlcnZlciBhZnRlciB1cGxvYWQgaXMgY29tcGxldGVkXG4gIHNlcnZlclJlc3BvbnNlPzogYW55OyAvLyBzZXJ2ZXIgcmVzcG9uc2UgcmVjZWl2ZWQgYWZ0ZXIgdXBsb2FkIGlzIGNvbXBsZXRlZFxuICBlcnJvcj86IGFueTsgLy8gZXJyb3IgbWVzc2FnZSBpbiBjYXNlIG9mIGZhaWx1cmVcbiAgZXJyb3JDb2RlPzogbnVtYmVyOyAvLyBlcnJvciBjb2RlIGZvciBhbnkgZXhjZXB0aW9uIGVuY291bnRlcmVkXG4gIHByb2dyZXNzPzogYW55OyAvLyBwcm9ncmVzcyBmb3Igb25nb2luZyB1cGxvYWRcbiAgZXZlbnRJZD86IHN0cmluZzsgLy8gaWQgb2YgdGhlIGV2ZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRlRNUGF5bG9hZE9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBmaWxlUGF0aDogc3RyaW5nO1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuICBzZXJ2ZXJVcmw6IHN0cmluZztcbiAgbm90aWZpY2F0aW9uVGl0bGU/OiBzdHJpbmc7XG4gIGhlYWRlcnM/OiB7XG4gICAgW25hbWU6IHN0cmluZ106IHN0cmluZztcbiAgfTtcbiAgcGFyYW1ldGVycz86IHtcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xuICBbcHJvcDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZUTU9wdGlvbnMge1xuICBjYWxsQmFjazogKGV2ZW50OiBVcGxvYWRFdmVudCkgPT4gYW55O1xuICBjb25maWc/OiB7XG4gICAgcGFyYWxsZWxVcGxvYWRzTGltaXQ/OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXJNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBGVE1PcHRpb25zKSB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSB3aW5kb3cuRmlsZVRyYW5zZmVyTWFuYWdlci5pbml0KG9wdGlvbnMuY29uZmlnLCBvcHRpb25zLmNhbGxCYWNrKTtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzdGFydFVwbG9hZChwYXlsb2FkOiBGVE1QYXlsb2FkT3B0aW9ucyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmVVcGxvYWQoaWQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFja25vd2xlZGdlRXZlbnQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBCYWNrZ3JvdW5kVXBsb2FkXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tncm91bmRVcGxvYWQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmFja2dyb3VuZC11cGxvYWQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZ3JvdW5kVXBsb2FkOiBCYWNrZ3JvdW5kVXBsb2FkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iYWNrZ3JvdW5kVXBsb2FkLmluaXQoe30pXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFja2dyb3VuZFVwbG9hZCcsXG4gIHBsdWdpbjogJ0BzcG9vbmNvbnN1bHRpbmcvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC11cGxvYWQnLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXJNYW5hZ2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zcG9vbmNvbnN1bHRpbmcvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC11cGxvYWQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIEBzcG9vbmNvbnN1bHRpbmcvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC11cGxvYWQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZFVwbG9hZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgRmlsZVRyYW5zZmVyTWFuYWdlciA9IEZpbGVUcmFuc2Zlck1hbmFnZXI7XG5cbiAgaW5pdChvcHRpb25zOiBGVE1PcHRpb25zKTogRmlsZVRyYW5zZmVyTWFuYWdlciB7XG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJNYW5hZ2VyKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=