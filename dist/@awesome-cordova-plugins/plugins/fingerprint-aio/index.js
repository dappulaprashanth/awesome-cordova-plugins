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
var FingerprintAIOOriginal = /** @class */ (function (_super) {
    __extends(FingerprintAIOOriginal, _super);
    function FingerprintAIOOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_UNKNOWN_ERROR = -100;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_UNAVAILABLE = -101;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_AUTHENTICATION_FAILED = -102;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_SDK_NOT_SUPPORTED = -103;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_NOT_ENROLLED = -106;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_DISMISSED = -108;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT = -111;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_SECRET_NOT_FOUND = -113;
        return _this;
    }
    FingerprintAIOOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIOOriginal.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIOOriginal.pluginName = "FingerprintAIO";
    FingerprintAIOOriginal.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.pluginRef = "Fingerprint";
    FingerprintAIOOriginal.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.platforms = ["Android", "iOS"];
    return FingerprintAIOOriginal;
}(AwesomeCordovaNativePlugin));
var FingerprintAIO = new FingerprintAIOOriginal();
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmluZ2VycHJpbnQtYWlvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlIeEQsa0NBQTBCOzs7UUFDNUQ7Ozs7V0FJRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7O1dBSUc7UUFDSCwyQkFBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM3Qjs7OztXQUlHO1FBQ0gscUNBQStCLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdkM7Ozs7V0FJRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsc0NBQWdDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDeEM7Ozs7V0FJRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7O1dBSUc7UUFDSCxxQ0FBK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2Qzs7OztXQUlHO1FBQ0gseUJBQW1CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDM0I7Ozs7V0FJRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDNUI7Ozs7V0FJRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7O0lBUWxDLG9DQUFXO0lBV1gsZ0RBQXVCLGFBQUMsT0FBaUM7SUFXekQsNENBQW1CLGFBQUMsT0FBMkI7SUFXL0MsNkJBQUksYUFBQyxPQUEyQjs7Ozs7O3lCQXZQbEM7RUEwSG9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludE9wdGlvbnMge1xuICAvKipcbiAgICogVGl0bGUgaW4gYmlvbWV0cmljIHByb21wdCAoYW5kcm9pZCBvbmx5KVxuICAgKlxuICAgKiBAZGVmYXVsdCB7QVBQX05BTUV9IEJpb21ldHJpYyBTaWduIE9uXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU3VidGl0bGUgaW4gYmlvbWV0cmljIFByb21wdCAoYW5kcm9pZCBvbmx5KVxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBzdWJ0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gaW4gYmlvbWV0cmljIFByb21wdFxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVGl0bGUgb2YgZmFsbGJhY2sgYnV0dG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBcIlVzZSBQaW5cIlxuICAgKi9cbiAgZmFsbGJhY2tCdXR0b25UaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGl0bGUgZm9yIGNhbmNlbCBidXR0b24gb24gQW5kcm9pZFxuICAgKlxuICAgKiBAZGVmYXVsdCBcIkNhbmNlbFwiXG4gICAqL1xuICBjYW5jZWxCdXR0b25UaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGlzYWJsZSAndXNlIGJhY2t1cCcgb3B0aW9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZUJhY2t1cD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zIGV4dGVuZHMgRmluZ2VycHJpbnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0cmluZyBzZWNyZXQgdG8gZW5jcnlwdCBhbmQgc2F2ZSwgdXNlIHNpbXBsZSBzdHJpbmdzIG1hdGNoaW5nIHRoZSByZWdleCBbYS16QS1aMC05XFwtXStcbiAgICovXG4gIHNlY3JldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAgc2VjcmV0IHdpbGwgYmUgZGVsZXRlZCB3aGVuIGJpb21ldHJ5IGl0ZW1zIGFyZSBkZWxldGVkIG9yIGVucm9sbGVkXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBpbnZhbGlkYXRlT25FbnJvbGxtZW50PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBGaW5nZXJwcmludCBBSU9cbiAqIEBkZXNjcmlwdGlvblxuICogVXNlIHNpbXBsZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBvbiBBbmRyb2lkIGFuZCBpT1MuXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvLiBGb3IgbW9yZSBpbmZvIGFib3V0IHBsdWdpbiwgdmlzdDogaHR0cHM6Ly9naXRodWIuY29tL05pa2xhc01lcnovY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbmdlcnByaW50QUlPIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFpbzogRmluZ2VycHJpbnRBSU8pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmFpby5zaG93KCkudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqICBPUiB3aXRoIG9wdGlvbnMuLi5cbiAqXG4gKiB0aGlzLmZhaW8uc2hvdyh7XG4gKiAgICAgdGl0bGU6ICdCaW9tZXRyaWMgQXV0aGVudGljYXRpb24nLCAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgRGVmYXVsdDogXCI8QVBQX05BTUU+IEJpb21ldHJpYyBTaWduIE9uXCJcbiAqICAgICBzdWJ0aXRsZTogJ0Nvb2xlc3QgUGx1Z2luIGV2ZXInIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgYXV0aGVudGljYXRlJyAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcbiAqICAgICBmYWxsYmFja0J1dHRvblRpdGxlOiAnVXNlIEJhY2t1cCcsIC8vIG9wdGlvbmFsIHwgV2hlbiBkaXNhYmxlQmFja3VwIGlzIGZhbHNlIGRlZmF1bHRzIHRvIFwiVXNlIFBpblwiLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkaXNhYmxlQmFja3VwIGlzIHRydWUgZGVmYXVsdHMgdG8gXCJDYW5jZWxcIlxuICogICAgIGRpc2FibGVCYWNrdXA6dHJ1ZSwgIC8vIG9wdGlvbmFsIHwgZGVmYXVsdDogZmFsc2VcbiAqIH0pXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mYWlvLnJlZ2lzdGVyQmlvbWV0cmljU2VjcmV0KHtcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgIHNlY3JldDogXCJteS1zdXBlci1zZWNyZXRcIiwgLy8gbWFuZGF0b3J5XG4gKiAgICAgIGludmFsaWRhdGVPbkVucm9sbG1lbnQ6IHRydWUsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogZmFsc2VcbiAqICAgICAgZGlzYWJsZUJhY2t1cDogdHJ1ZSwgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IGFsd2F5cyBgdHJ1ZWAgb24gQW5kcm9pZFxuICogfSlcbiAqIC50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiAgLi4uXG4gKlxuICogdGhpcy5mYWlvLmxvYWRCaW9tZXRyaWNTZWNyZXQoe1xuICogICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGJpb21ldHJpYyBkZXNjcmlwdGlvblwiLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcbiAqICAgICAgZGlzYWJsZUJhY2t1cDogdHJ1ZSwgLy8gYWx3YXlzIGRpc2FibGVkIG9uIEFuZHJvaWRcbiAqIH0pXG4gKiAudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRmluZ2VycHJpbnRPcHRpb25zXG4gKiBGaW5nZXJwcmludFNlY3JldE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaW5nZXJwcmludEFJTycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpbycsXG4gIHBsdWdpblJlZjogJ0ZpbmdlcnByaW50JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OaWtsYXNNZXJ6L2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpbycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaW5nZXJwcmludEFJTyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfVU5LTk9XTl9FUlJPUiA9IC0xMDA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1VOQVZBSUxBQkxFID0gLTEwMTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfQVVUSEVOVElDQVRJT05fRkFJTEVEID0gLTEwMjtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfU0RLX05PVF9TVVBQT1JURUQgPSAtMTAzO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19IQVJEV0FSRV9OT1RfU1VQUE9SVEVEID0gLTEwNDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IC0xMDU7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX05PVF9FTlJPTExFRCA9IC0xMDY7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0lOVEVSTkFMX1BMVUdJTl9FUlJPUiA9IC0xMDc7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0RJU01JU1NFRCA9IC0xMDg7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1BJTl9PUl9QQVRURVJOX0RJU01JU1NFRCA9IC0xMDk7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1NDUkVFTl9HVUFSRF9VTlNFQ1VSRUQgPSAtMTEwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19MT0NLRURfT1VUID0gLTExMTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfTE9DS0VEX09VVF9QRVJNQU5FTlQgPSAtMTEyO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19TRUNSRVRfTk9UX0ZPVU5EID0gLTExMztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gaXMgYXZhaWxhYmxlXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIHJlZ2lzdGVyIHNlY3JldFxuICAgKlxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50U2VjcmV0T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZ2lzdGVyQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50U2VjcmV0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIGxvYWQgc2VjcmV0XG4gICAqXG4gICAqIEBwYXJhbSB7RmluZ2VycHJpbnRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHBsYXRmb3JtIHNwZWNpZmljIGZpbmdlcnByaW50IEFQSVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9hZEJpb21ldHJpY1NlY3JldChvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGF1dGhlbnRpY2F0aW9uIGRpYWxvZ3VlXG4gICAqXG4gICAqIEBwYXJhbSB7RmluZ2VycHJpbnRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHBsYXRmb3JtIHNwZWNpZmljIGZpbmdlcnByaW50IEFQSVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19