import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var FingerprintAIO = /** @class */ (function (_super) {
    __extends(FingerprintAIO, _super);
    function FingerprintAIO() {
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
    FingerprintAIO.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO.decorators = [
        { type: Injectable }
    ];
    return FingerprintAIO;
}(AwesomeCordovaNativePlugin));
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmluZ2VycHJpbnQtYWlvL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlIeEQsa0NBQTBCOzs7UUFDNUQ7Ozs7V0FJRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7O1dBSUc7UUFDSCwyQkFBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM3Qjs7OztXQUlHO1FBQ0gscUNBQStCLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdkM7Ozs7V0FJRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsc0NBQWdDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDeEM7Ozs7V0FJRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7O1dBSUc7UUFDSCxxQ0FBK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2Qzs7OztXQUlHO1FBQ0gseUJBQW1CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDM0I7Ozs7V0FJRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDNUI7Ozs7V0FJRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7O0lBUWxDLG9DQUFXO0lBV1gsZ0RBQXVCLGFBQUMsT0FBaUM7SUFXekQsNENBQW1CLGFBQUMsT0FBMkI7SUFXL0MsNkJBQUksYUFBQyxPQUEyQjs7Ozs7OztnQkE5SGpDLFVBQVU7O3lCQXpIWDtFQTBIb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaXRsZSBpbiBiaW9tZXRyaWMgcHJvbXB0IChhbmRyb2lkIG9ubHkpXG4gICAqXG4gICAqIEBkZWZhdWx0IHtBUFBfTkFNRX0gQmlvbWV0cmljIFNpZ24gT25cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdWJ0aXRsZSBpbiBiaW9tZXRyaWMgUHJvbXB0IChhbmRyb2lkIG9ubHkpXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBpbiBiaW9tZXRyaWMgUHJvbXB0XG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiBmYWxsYmFjayBidXR0b24uXG4gICAqXG4gICAqIEBkZWZhdWx0IFwiVXNlIFBpblwiXG4gICAqL1xuICBmYWxsYmFja0J1dHRvblRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBmb3IgY2FuY2VsIGJ1dHRvbiBvbiBBbmRyb2lkXG4gICAqXG4gICAqIEBkZWZhdWx0IFwiQ2FuY2VsXCJcbiAgICovXG4gIGNhbmNlbEJ1dHRvblRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlICd1c2UgYmFja3VwJyBvcHRpb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkaXNhYmxlQmFja3VwPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludFNlY3JldE9wdGlvbnMgZXh0ZW5kcyBGaW5nZXJwcmludE9wdGlvbnMge1xuICAvKipcbiAgICogU3RyaW5nIHNlY3JldCB0byBlbmNyeXB0IGFuZCBzYXZlLCB1c2Ugc2ltcGxlIHN0cmluZ3MgbWF0Y2hpbmcgdGhlIHJlZ2V4IFthLXpBLVowLTlcXC1dK1xuICAgKi9cbiAgc2VjcmV0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCBzZWNyZXQgd2lsbCBiZSBkZWxldGVkIHdoZW4gYmlvbWV0cnkgaXRlbXMgYXJlIGRlbGV0ZWQgb3IgZW5yb2xsZWRcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGludmFsaWRhdGVPbkVucm9sbG1lbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEZpbmdlcnByaW50IEFJT1xuICogQGRlc2NyaXB0aW9uXG4gKiBVc2Ugc2ltcGxlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8uIEZvciBtb3JlIGluZm8gYWJvdXQgcGx1Z2luLCB2aXN0OiBodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW9cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmluZ2VycHJpbnRBSU8gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmluZ2VycHJpbnQtYWlvL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmYWlvOiBGaW5nZXJwcmludEFJTykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mYWlvLnNob3coKS50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSkuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogIE9SIHdpdGggb3B0aW9ucy4uLlxuICpcbiAqIHRoaXMuZmFpby5zaG93KHtcbiAqICAgICB0aXRsZTogJ0Jpb21ldHJpYyBBdXRoZW50aWNhdGlvbicsIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBEZWZhdWx0OiBcIjxBUFBfTkFNRT4gQmlvbWV0cmljIFNpZ24gT25cIlxuICogICAgIHN1YnRpdGxlOiAnQ29vbGVzdCBQbHVnaW4gZXZlcicgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcbiAqICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBhdXRoZW50aWNhdGUnIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgIGZhbGxiYWNrQnV0dG9uVGl0bGU6ICdVc2UgQmFja3VwJywgLy8gb3B0aW9uYWwgfCBXaGVuIGRpc2FibGVCYWNrdXAgaXMgZmFsc2UgZGVmYXVsdHMgdG8gXCJVc2UgUGluXCIuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGRpc2FibGVCYWNrdXAgaXMgdHJ1ZSBkZWZhdWx0cyB0byBcIkNhbmNlbFwiXG4gKiAgICAgZGlzYWJsZUJhY2t1cDp0cnVlLCAgLy8gb3B0aW9uYWwgfCBkZWZhdWx0OiBmYWxzZVxuICogfSlcbiAqIC50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZhaW8ucmVnaXN0ZXJCaW9tZXRyaWNTZWNyZXQoe1xuICogICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGJpb21ldHJpYyBkZXNjcmlwdGlvblwiLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcbiAqICAgICAgc2VjcmV0OiBcIm15LXN1cGVyLXNlY3JldFwiLCAvLyBtYW5kYXRvcnlcbiAqICAgICAgaW52YWxpZGF0ZU9uRW5yb2xsbWVudDogdHJ1ZSwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBmYWxzZVxuICogICAgICBkaXNhYmxlQmFja3VwOiB0cnVlLCAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgYWx3YXlzIGB0cnVlYCBvbiBBbmRyb2lkXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqICAuLi5cbiAqXG4gKiB0aGlzLmZhaW8ubG9hZEJpb21ldHJpY1NlY3JldCh7XG4gKiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgYmlvbWV0cmljIGRlc2NyaXB0aW9uXCIsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgICBkaXNhYmxlQmFja3VwOiB0cnVlLCAvLyBhbHdheXMgZGlzYWJsZWQgb24gQW5kcm9pZFxuICogfSlcbiAqIC50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBGaW5nZXJwcmludE9wdGlvbnNcbiAqIEZpbmdlcnByaW50U2VjcmV0T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbmdlcnByaW50QUlPJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcbiAgcGx1Z2luUmVmOiAnRmluZ2VycHJpbnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05pa2xhc01lcnovY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbmdlcnByaW50QUlPIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19VTktOT1dOX0VSUk9SID0gLTEwMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfVU5BVkFJTEFCTEUgPSAtMTAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19BVVRIRU5USUNBVElPTl9GQUlMRUQgPSAtMTAyO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19TREtfTk9UX1NVUFBPUlRFRCA9IC0xMDM7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0hBUkRXQVJFX05PVF9TVVBQT1JURUQgPSAtMTA0O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19QRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gLTEwNTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfTk9UX0VOUk9MTEVEID0gLTEwNjtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfSU5URVJOQUxfUExVR0lOX0VSUk9SID0gLTEwNztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfRElTTUlTU0VEID0gLTEwODtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfUElOX09SX1BBVFRFUk5fRElTTUlTU0VEID0gLTEwOTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfU0NSRUVOX0dVQVJEX1VOU0VDVVJFRCA9IC0xMTA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0xPQ0tFRF9PVVQgPSAtMTExO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19MT0NLRURfT1VUX1BFUk1BTkVOVCA9IC0xMTI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1NFQ1JFVF9OT1RfRk9VTkQgPSAtMTEzO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBpcyBhdmFpbGFibGVcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZSBhbmQgcmVnaXN0ZXIgc2VjcmV0XG4gICAqXG4gICAqIEBwYXJhbSB7RmluZ2VycHJpbnRTZWNyZXRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHBsYXRmb3JtIHNwZWNpZmljIGZpbmdlcnByaW50IEFQSVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZSBhbmQgbG9hZCBzZWNyZXRcbiAgICpcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2FkQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWVcbiAgICpcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=