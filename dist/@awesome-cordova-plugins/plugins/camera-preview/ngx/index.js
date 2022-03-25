import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var CameraPreview = /** @class */ (function (_super) {
    __extends(CameraPreview, _super);
    function CameraPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CONTINUOUS_PICTURE: 'continuous-picture',
            CONTINUOUS_VIDEO: 'continuous-video',
            EDOF: 'edof',
            INFINITY: 'infinity',
            MACRO: 'macro',
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom',
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch',
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            BLACKBOARD: 'blackboard',
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            WHITEBOARD: 'whiteboard',
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front',
        };
        return _this;
    }
    CameraPreview.prototype.startCamera = function (options) { return cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.startRecordVideo = function (options) { return cordova(this, "startRecordVideo", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    CameraPreview.prototype.stopRecordVideo = function () { return cordova(this, "stopRecordVideo", {}, arguments); };
    CameraPreview.prototype.switchCamera = function () { return cordova(this, "switchCamera", {}, arguments); };
    CameraPreview.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    CameraPreview.prototype.show = function () { return cordova(this, "show", {}, arguments); };
    CameraPreview.prototype.takePicture = function (options) { return cordova(this, "takePicture", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.takeSnapshot = function (options) { return cordova(this, "takeSnapshot", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setColorEffect = function (effect) { return cordova(this, "setColorEffect", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setZoom = function (zoom) { return cordova(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getMaxZoom = function () { return cordova(this, "getMaxZoom", {}, arguments); };
    CameraPreview.prototype.getZoom = function () { return cordova(this, "getZoom", {}, arguments); };
    CameraPreview.prototype.setPreviewSize = function (dimensions) { return cordova(this, "setPreviewSize", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getFocusMode = function () { return cordova(this, "getFocusMode", {}, arguments); };
    CameraPreview.prototype.setFocusMode = function (focusMode) { return cordova(this, "setFocusMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFocusModes = function () { return cordova(this, "getSupportedFocusModes", {}, arguments); };
    CameraPreview.prototype.getFlashMode = function () { return cordova(this, "getFlashMode", {}, arguments); };
    CameraPreview.prototype.setFlashMode = function (flashMode) { return cordova(this, "setFlashMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFlashModes = function () { return cordova(this, "getSupportedFlashModes", {}, arguments); };
    CameraPreview.prototype.getSupportedPictureSizes = function () { return cordova(this, "getSupportedPictureSizes", {}, arguments); };
    CameraPreview.prototype.getExposureMode = function () { return cordova(this, "getExposureMode", {}, arguments); };
    CameraPreview.prototype.getExposureModes = function () { return cordova(this, "getExposureModes", {}, arguments); };
    CameraPreview.prototype.setExposureMode = function (lock) { return cordova(this, "setExposureMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensation = function () { return cordova(this, "getExposureCompensation", {}, arguments); };
    CameraPreview.prototype.setExposureCompensation = function (exposureCompensation) { return cordova(this, "setExposureCompensation", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensationRange = function () { return cordova(this, "getExposureCompensationRange", {}, arguments); };
    CameraPreview.prototype.tapToFocus = function (xPoint, yPoint) { return cordova(this, "tapToFocus", {}, arguments); };
    CameraPreview.prototype.onBackButton = function () { return cordova(this, "onBackButton", {}, arguments); };
    CameraPreview.prototype.getHorizontalFOV = function () { return cordova(this, "getHorizontalFOV", {}, arguments); };
    CameraPreview.prototype.getCameraCharacteristics = function () { return cordova(this, "getCameraCharacteristics", {}, arguments); };
    CameraPreview.pluginName = "CameraPreview";
    CameraPreview.plugin = "cordova-plugin-camera-preview";
    CameraPreview.pluginRef = "CameraPreview";
    CameraPreview.repo = "https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview";
    CameraPreview.platforms = ["Android", "iOS"];
    CameraPreview.decorators = [
        { type: Injectable }
    ];
    return CameraPreview;
}(AwesomeCordovaNativePlugin));
export { CameraPreview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FtZXJhLXByZXZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBb0p6RCxpQ0FBMEI7OztRQUMzRCxnQkFBVSxHQUFHO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLGtCQUFrQixFQUFFLG9CQUFvQjtZQUN4QyxnQkFBZ0IsRUFBRSxrQkFBa0I7WUFDcEMsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsVUFBVTtZQUNwQixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7UUFFRixtQkFBYSxHQUFHO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFFRixnQkFBVSxHQUFHO1lBQ1gsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLFNBQVM7WUFDbEIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO1FBRUYsa0JBQVksR0FBRztZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLFlBQVk7WUFDeEIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsVUFBVTtZQUNwQixJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLEtBQUssRUFBRSxPQUFPO1lBQ2QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLFlBQVk7U0FDekIsQ0FBQztRQUVGLHNCQUFnQixHQUFHO1lBQ2pCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDOzs7SUFZRixtQ0FBVyxhQUFDLE9BQTZCO0lBY3pDLHdDQUFnQixhQUFDLE9BQVk7SUFVN0Isa0NBQVU7SUFVVix1Q0FBZTtJQVVmLG9DQUFZO0lBVVosNEJBQUk7SUFVSiw0QkFBSTtJQWNKLG1DQUFXLGFBQUMsT0FBcUM7SUFjakQsb0NBQVksYUFBQyxPQUFxQztJQWdCbEQsc0NBQWMsYUFBQyxNQUFjO0lBYzdCLCtCQUFPLGFBQUMsSUFBYTtJQVVyQixrQ0FBVTtJQVVWLCtCQUFPO0lBY1Asc0NBQWMsYUFBQyxVQUFvQztJQVVuRCxvQ0FBWTtJQWNaLG9DQUFZLGFBQUMsU0FBa0I7SUFVL0IsOENBQXNCO0lBVXRCLG9DQUFZO0lBY1osb0NBQVksYUFBQyxTQUFrQjtJQVUvQiw4Q0FBc0I7SUFVdEIsZ0RBQXdCO0lBVXhCLHVDQUFlO0lBVWYsd0NBQWdCO0lBY2hCLHVDQUFlLGFBQUMsSUFBYTtJQVU3QiwrQ0FBdUI7SUFjdkIsK0NBQXVCLGFBQUMsb0JBQTZCO0lBVXJELG9EQUE0QjtJQVk1QixrQ0FBVSxhQUFDLE1BQWMsRUFBRSxNQUFjO0lBVXpDLG9DQUFZO0lBVVosd0NBQWdCO0lBVWhCLGdEQUF3Qjs7Ozs7OztnQkEvWXpCLFVBQVU7O3dCQXBKWDtFQXFKbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZXZpZXdEaW1lbnNpb25zIHtcbiAgLyoqIFRoZSB3aWR0aCBvZiB0aGUgY2FtZXJhIHByZXZpZXcsIGRlZmF1bHQgdG8gd2luZG93LnNjcmVlbi53aWR0aCAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKiogVGhlIGhlaWdodCBvZiB0aGUgY2FtZXJhIHByZXZpZXcsIGRlZmF1bHQgdG8gd2luZG93LnNjcmVlbi5oZWlnaHQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZXZpZXdPcHRpb25zIHtcbiAgLyoqIFRoZSBsZWZ0IGVkZ2UgaW4gcGl4ZWxzLCBkZWZhdWx0IDAgKi9cbiAgeD86IG51bWJlcjtcblxuICAvKiogVGhlIHRvcCBlZGdlIGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIHk/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSB3aWR0aCBpbiBwaXhlbHMsIGRlZmF1bHQgd2luZG93LnNjcmVlbi53aWR0aCAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKiogVGhlIGhlaWdodCBpbiBwaXhlbHMsIGRlZmF1bHQgd2luZG93LnNjcmVlbi5oZWlnaHQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKiBDaG9vc2UgdGhlIGNhbWVyYSB0byB1c2UgJ2Zyb250JyBvciAncmVhcicsIGRlZmF1bHQgJ2Zyb250JyAqL1xuICBjYW1lcmE/OiBzdHJpbmc7XG5cbiAgLyoqIFRhcCB0byB0YWtlIGEgcGhvdG8sIGRlZmF1bHQgdHJ1ZSAocGljdHVyZSBxdWFsaXR5IGJ5IGRlZmF1bHQgOiA4NSkgKi9cbiAgdGFwUGhvdG8/OiBib29sZWFuO1xuXG4gIC8qKiBQcmV2aWV3IGJveCBkcmFnIGFjcm9zcyB0aGUgc2NyZWVuLCBkZWZhdWx0ICdmYWxzZScgKi9cbiAgcHJldmlld0RyYWc/OiBib29sZWFuO1xuICBcbiAgLyoqIENhcHR1cmUgaW1hZ2VzIHRvIGEgZmlsZSBhbmQgcmV0dXJuIGJhY2sgdGhlIGZpbGUgcGF0aCBpbnN0ZWFkIG9mIHJldHVybmluZyBiYXNlNjQgZW5jb2RlZCBkYXRhLiAqL1xuICBzdG9yZVRvRmlsZTogYm9vbGVhbjtcblxuICAvKiogUHJldmlldyBib3ggdG8gdGhlIGJhY2sgb2YgdGhlIHdlYnZpZXcgKHRydWUgPT4gYmFjaywgZmFsc2UgPT4gZnJvbnQpICwgZGVmYXVsdCBmYWxzZSAqL1xuICB0b0JhY2s/OiBib29sZWFuO1xuXG4gIC8qKiBBbHBoYSBjaGFubmVsIG9mIHRoZSBwcmV2aWV3IGJveCwgZmxvYXQsIFswLDFdLCBkZWZhdWx0IDEgKi9cbiAgYWxwaGE/OiBudW1iZXI7XG5cbiAgLyoqIFRhcCB0byBzZXQgc3BlY2lmaWMgZm9jdXMgcG9pbnQuIE5vdGUsIHRoaXMgYXNzdW1lcyB0aGUgY2FtZXJhIGlzIGZ1bGwtc2NyZWVuLiBkZWZhdWx0IGZhbHNlICovXG4gIHRhcEZvY3VzPzogYm9vbGVhbjtcblxuICAvKiogT24gQW5kcm9pZCBkaXNhYmxlIGF1dG9tYXRpYyByb3RhdGlvbiBvZiB0aGUgaW1hZ2UgYW5kIHN0cmlwcGluZyBvZiBFeGl0IGhlYWRlci4gZGVmYXVsdCBmYWxzZSAqL1xuICBkaXNhYmxlRXhpZkhlYWRlclN0cmlwcGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zIHtcbiAgLyoqIFRoZSB3aWR0aCBpbiBwaXhlbHMsIGRlZmF1bHQgMCAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzLCBkZWZhdWx0IDAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuICAvKiogVGhlIHBpY3R1cmUgcXVhbGl0eSwgMCAtIDEwMCwgZGVmYXVsdCA4NSAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBDYW1lcmEgUHJldmlld1xuICogQGRlc2NyaXB0aW9uXG4gKiBTaG93aW5nIGNhbWVyYSBwcmV2aWV3IGluIEhUTUxcbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEtcHJldmlldy9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEtcHJldmlldy5naXRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBDYW1lcmEgUHJldmlldyBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcvY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmFQcmV2aWV3LCBDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnMsIENhbWVyYVByZXZpZXdPcHRpb25zLCBDYW1lcmFQcmV2aWV3RGltZW5zaW9ucyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jYW1lcmEtcHJldmlldy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhUHJldmlldzogQ2FtZXJhUHJldmlldykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gY2FtZXJhIG9wdGlvbnMgKFNpemUgYW5kIGxvY2F0aW9uKS4gSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCB0aGUgcHJldmlldyB1c2VzIHRoZSByZWFyIGNhbWVyYSBhbmQgZGlzcGxheSB0aGUgcHJldmlldyBpbiB0aGUgYmFjayBvZiB0aGUgd2Vidmlld1xuICogY29uc3QgY2FtZXJhUHJldmlld09wdHM6IENhbWVyYVByZXZpZXdPcHRpb25zID0ge1xuICogICB4OiAwLFxuICogICB5OiAwLFxuICogICB3aWR0aDogd2luZG93LnNjcmVlbi53aWR0aCxcbiAqICAgaGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmhlaWdodCxcbiAqICAgY2FtZXJhOiAncmVhcicsXG4gKiAgIHRhcFBob3RvOiB0cnVlLFxuICogICBwcmV2aWV3RHJhZzogdHJ1ZSxcbiAqICAgdG9CYWNrOiB0cnVlLFxuICogICBhbHBoYTogMVxuICogfVxuICpcbiAqIC8vIHN0YXJ0IGNhbWVyYVxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnN0YXJ0Q2FtZXJhKGNhbWVyYVByZXZpZXdPcHRzKS50aGVuKFxuICogICAocmVzKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2cocmVzKVxuICogICB9LFxuICogICAoZXJyKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coZXJyKVxuICogICB9KTtcbiAqXG4gKiAvLyBTZXQgdGhlIGhhbmRsZXIgdG8gcnVuIGV2ZXJ5IHRpbWUgd2UgdGFrZSBhIHBpY3R1cmVcbiAqIHRoaXMuY2FtZXJhUHJldmlldy5zZXRPblBpY3R1cmVUYWtlbkhhbmRsZXIoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICogICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzdWx0XG4gKiB9KTtcbiAqXG4gKlxuICogLy8gcGljdHVyZSBvcHRpb25zXG4gKiBjb25zdCBwaWN0dXJlT3B0czogQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zID0ge1xuICogICB3aWR0aDogMTI4MCxcbiAqICAgaGVpZ2h0OiAxMjgwLFxuICogICBxdWFsaXR5OiA4NVxuICogfVxuICpcbiAqIC8vIHRha2UgYSBwaWN0dXJlXG4gKiB0aGlzLmNhbWVyYVByZXZpZXcudGFrZVBpY3R1cmUodGhpcy5waWN0dXJlT3B0cykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGVycik7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdhc3NldHMvaW1nL3Rlc3QuanBnJztcbiAqIH0pO1xuICpcbiAqIC8vIHRha2UgYSBzbmFwIHNob3RcbiAqIHRoaXMuY2FtZXJhUHJldmlldy50YWtlU25hcHNob3QodGhpcy5waWN0dXJlT3B0cykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGVycik7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdhc3NldHMvaW1nL3Rlc3QuanBnJztcbiAqIH0pO1xuICpcbiAqXG4gKiAvLyBTd2l0Y2ggY2FtZXJhXG4gKiB0aGlzLmNhbWVyYVByZXZpZXcuc3dpdGNoQ2FtZXJhKCk7XG4gKlxuICogLy8gc2V0IGNvbG9yIGVmZmVjdCB0byBuZWdhdGl2ZVxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnNldENvbG9yRWZmZWN0KCduZWdhdGl2ZScpO1xuICpcbiAqIC8vIFN0b3AgdGhlIGNhbWVyYSBwcmV2aWV3XG4gKiB0aGlzLmNhbWVyYVByZXZpZXcuc3RvcENhbWVyYSgpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYVByZXZpZXdPcHRpb25zXG4gKiBDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnNcbiAqIENhbWVyYVByZXZpZXdEaW1lbnNpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhUHJldmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3JyxcbiAgcGx1Z2luUmVmOiAnQ2FtZXJhUHJldmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcvY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhUHJldmlldyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgRk9DVVNfTU9ERSA9IHtcbiAgICBGSVhFRDogJ2ZpeGVkJyxcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgQ09OVElOVU9VUzogJ2NvbnRpbnVvdXMnLCAvLyBJT1MgT25seVxuICAgIENPTlRJTlVPVVNfUElDVFVSRTogJ2NvbnRpbnVvdXMtcGljdHVyZScsIC8vIEFuZHJvaWQgT25seVxuICAgIENPTlRJTlVPVVNfVklERU86ICdjb250aW51b3VzLXZpZGVvJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgRURPRjogJ2Vkb2YnLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBJTkZJTklUWTogJ2luZmluaXR5JywgLy8gQW5kcm9pZCBPbmx5XG4gICAgTUFDUk86ICdtYWNybycsIC8vIEFuZHJvaWQgT25seVxuICB9O1xuXG4gIEVYUE9TVVJFX01PREUgPSB7XG4gICAgTE9DSzogJ2xvY2snLCAvLyBJT1MgT25seVxuICAgIEFVVE86ICdhdXRvJywgLy8gSU9TIE9ubHlcbiAgICBDT05USU5VT1VTOiAnY29udGludW91cycsXG4gICAgQ1VTVE9NOiAnY3VzdG9tJyxcbiAgfTtcblxuICBGTEFTSF9NT0RFID0ge1xuICAgIE9GRjogJ29mZicsXG4gICAgT046ICdvbicsXG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFJFRF9FWUU6ICdyZWQtZXllJyxcbiAgICBUT1JDSDogJ3RvcmNoJywgLy8gQW5kcm9pZCBPbmx5XG4gIH07XG5cbiAgQ09MT1JfRUZGRUNUID0ge1xuICAgIEFRVUE6ICdhcXVhJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgQkxBQ0tCT0FSRDogJ2JsYWNrYm9hcmQnLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBNT05POiAnbW9ubycsXG4gICAgTkVHQVRJVkU6ICduZWdhdGl2ZScsXG4gICAgTk9ORTogJ25vbmUnLFxuICAgIFBPU1RFUklaRTogJ3Bvc3Rlcml6ZScsXG4gICAgU0VQSUE6ICdzZXBpYScsXG4gICAgU09MQVJJWkU6ICdzb2xhcml6ZScsIC8vIEFuZHJvaWQgT25seVxuICAgIFdISVRFQk9BUkQ6ICd3aGl0ZWJvYXJkJywgLy8gQW5kcm9pZCBPbmx5XG4gIH07XG5cbiAgQ0FNRVJBX0RJUkVDVElPTiA9IHtcbiAgICBCQUNLOiAnYmFjaycsXG4gICAgRlJPTlQ6ICdmcm9udCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgY2FtZXJhIHByZXZpZXcgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld09wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc3RhcnRDYW1lcmEob3B0aW9uczogQ2FtZXJhUHJldmlld09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGNhbWVyYSB2aWRlbyBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc3RhcnRSZWNvcmRWaWRlbyhvcHRpb25zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgY2FtZXJhIHByZXZpZXcgaW5zdGFuY2UuIChpT1MgJiBBbmRyb2lkKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBjYW1lcmEgdmlkZW8gaW5zdGFuY2UuIChpT1MgJiBBbmRyb2lkKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wUmVjb3JkVmlkZW8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIGZyb20gdGhlIHJlYXIgY2FtZXJhIGFuZCBmcm9udCBjYW1lcmEsIGlmIGF2YWlsYWJsZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3dpdGNoQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGNhbWVyYSBwcmV2aWV3IGJveC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjYW1lcmEgcHJldmlldyBib3guXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGFrZSB0aGUgcGljdHVyZSAoYmFzZTY0KVxuICAgKlxuICAgKiBAcGFyYW0ge0NhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9uc30gW29wdGlvbnNdIHNpemUgYW5kIHF1YWxpdHkgb2YgdGhlIHBpY3R1cmUgdG8gdGFrZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICB0YWtlUGljdHVyZShvcHRpb25zPzogQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBhIHNuYXBzaG90IG9mIHByZXZpZXcgd2luZG93IChzaXplIHNwZWNpZmllZCBpbiBzdGFydENhbWVyYSBvcHRpb25zKVxuICAgKlxuICAgKiBAcGFyYW0ge0NhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9uc30gW29wdGlvbnNdIHF1YWxpdHkgb2YgdGhlIHBpY3R1cmUgdG8gdGFrZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICB0YWtlU25hcHNob3Qob3B0aW9ucz86IENhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFNldCBjYW1lcmEgY29sb3IgZWZmZWN0LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlZmZlY3QgbmFtZSA6ICdub25lJyAoaU9TICYgQW5kcm9pZCksICdhcXVhJyAoQW5kcm9pZCksICdibGFja2JvYXJkJyAoQW5kcm9pZCksICdtb25vJyAoaU9TICYgQW5kcm9pZCksICduZWdhdGl2ZScgKGlPUyAmIEFuZHJvaWQpLCAncG9zdGVyaXplJyAoaU9TICYgQW5kcm9pZCksICdzZXBpYScgKGlPUyAmIEFuZHJvaWQpLCAnc29sYXJpemUnIChBbmRyb2lkKSBvciAnd2hpdGVib2FyZCcgKEFuZHJvaWQpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNldENvbG9yRWZmZWN0KGVmZmVjdDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB6b29tIChBbmRyb2lkKVxuICAgKlxuICAgKiBAcGFyYW0gW3pvb21dIHtudW1iZXJ9IFpvb20gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0Wm9vbSh6b29tPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtYXhpbXVtIHpvb20gKEFuZHJvaWQpXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldE1heFpvb20oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgem9vbSAoQW5kcm9pZClcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Wm9vbSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHByZXZpZXcgU2l6ZVxuICAgKlxuICAgKiBAcGFyYW0ge0NhbWVyYVByZXZpZXdEaW1lbnNpb25zfSBbZGltZW5zaW9uc11cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0UHJldmlld1NpemUoZGltZW5zaW9ucz86IENhbWVyYVByZXZpZXdEaW1lbnNpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZvY3VzIG1vZGVcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Rm9jdXNNb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZm9jdXMgbW9kZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZvY3VzTW9kZV0gJ2ZpeGVkJywgJ2F1dG8nLCAnY29udGludW91cy1waWN0dXJlJywgJ2NvbnRpbnVvdXMtdmlkZW8nIChpT1MgJiBBbmRyb2lkKSwgJ2Vkb2YnLCAnaW5maW5pdHknLCAnbWFjcm8nIChBbmRyb2lkIE9ubHkpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNldEZvY3VzTW9kZShmb2N1c01vZGU/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3VwcG9ydGVkIGZvY3VzIG1vZGVzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN1cHBvcnRlZEZvY3VzTW9kZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGZsYXNoIG1vZGVcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Rmxhc2hNb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZmxhc2ggbW9kZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZsYXNoTW9kZV0gJ29mZicgKGlPUyAmIEFuZHJvaWQpLCAnb24nIChpT1MgJiBBbmRyb2lkKSwgJ2F1dG8nIChpT1MgJiBBbmRyb2lkKSwgJ3RvcmNoJyAoQW5kcm9pZClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0Rmxhc2hNb2RlKGZsYXNoTW9kZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdXBwb3J0ZWQgZmxhc2ggbW9kZXNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkRmxhc2hNb2RlcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3VwcG9ydGVkIHBpY3R1cmUgc2l6ZXNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkUGljdHVyZVNpemVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBtb2RlXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4cG9zdXJlTW9kZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXhwb3N1cmUgbW9kZXNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXhwb3N1cmVNb2RlcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXhwb3N1cmUgbW9kZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2tdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNldEV4cG9zdXJlTW9kZShsb2NrPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV4cG9zdXJlIGNvbXBlbnNhdGlvbiAoQW5kcm9pZClcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXhwb3N1cmVDb21wZW5zYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4cG9zdXJlIGNvbXBlbnNhdGlvbiAoQW5kcm9pZClcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtleHBvc3VyZUNvbXBlbnNhdGlvbl1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0RXhwb3N1cmVDb21wZW5zYXRpb24oZXhwb3N1cmVDb21wZW5zYXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXhwb3N1cmUgY29tcGVuc2F0aW9uIHJhbmdlIChBbmRyb2lkKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRFeHBvc3VyZUNvbXBlbnNhdGlvblJhbmdlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzcGVjaWZpYyBmb2N1cyBwb2ludC4gTm90ZSwgdGhpcyBhc3N1bWVzIHRoZSBjYW1lcmEgaXMgZnVsbC1zY3JlZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4UG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlQb2ludFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0YXBUb0ZvY3VzKHhQb2ludDogbnVtYmVyLCB5UG9pbnQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIGZvciB0aGUgYmFjayBldmVudCBmb3IgdGhlIHByZXZpZXdcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gaWYgYmFjayBidXR0b24gcHJlc3NlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkJhY2tCdXR0b24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGluIHVzZSBkZXZpY2UgY2FtZXJhIGZvdlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRIb3Jpem9udGFsRk9WKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2hhcmFjdGVyaXN0aWNzIG9mIGFsbCBhdmFpbGFibGUgY2FtZXJhc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRDYW1lcmFDaGFyYWN0ZXJpc3RpY3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==