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
export var DocumentScannerSourceType;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(DocumentScannerSourceType || (DocumentScannerSourceType = {}));
var DocumentScannerOriginal = /** @class */ (function (_super) {
    __extends(DocumentScannerOriginal, _super);
    function DocumentScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScannerOriginal.prototype.scanDoc = function (opts) { return cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScannerOriginal.pluginName = "DocumentScanner";
    DocumentScannerOriginal.plugin = "cordova-plugin-document-scanner";
    DocumentScannerOriginal.pluginRef = "scan";
    DocumentScannerOriginal.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScannerOriginal.platforms = ["Android", "iOS"];
    return DocumentScannerOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentScanner = new DocumentScannerOriginal();
export { DocumentScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtc2Nhbm5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RixNQUFNLENBQU4sSUFBWSx5QkFXWDtBQVhELFdBQVkseUJBQXlCO0lBQ25DOzs7T0FHRztJQUNILDZFQUFVLENBQUE7SUFFVjs7T0FFRztJQUNILCtFQUFXLENBQUE7QUFDYixDQUFDLEVBWFcseUJBQXlCLEtBQXpCLHlCQUF5QixRQVdwQzs7SUFnRW9DLG1DQUEwQjs7OztJQVU3RCxpQ0FBTyxhQUFDLElBQTZCOzs7Ozs7MEJBeEZ2QztFQThFcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgZW51bSBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlIHtcbiAgLyoqXG4gICAqIFNjYW4gZGlyZWN0bHkgZnJvbSBkZXZpY2UgY2FtZXJhLlxuICAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgKi9cbiAgQ0FNRVJBID0gMSxcblxuICAvKipcbiAgICogU2NhbiBmcm9tIGFuIGltYWdlIGFscmVhZHkgc3RvcmVkIG9uIGRldmljZS5cbiAgICovXG4gIEdBTExFUlkgPSAwLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogQ2hvb3NlIHRvIHNjYW4gZnJvbSBjYW1lcmEgb3IgZXhpc3RpbmcgaW1hZ2UgZmlsZS4gT25seSB2YWxpZCBmb3IgQW5kcm9pZC5cbiAgICovXG4gIHNvdXJjZVR5cGU/OiBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlO1xuXG4gIC8qKlxuICAgKiBGaWxlbmFtZSB0byBzYXZlIHNjYW5uZWQgaW1hZ2UgdG8gKG1pbnVzIGV4dGVuc2lvbiwgd2hpY2ggaXMgYWx3YXlzIFwiLnBuZ1wiKS5cbiAgICogT25seSB2YWxpZCBmb3IgaU9TLiBDYWxsZXIgaXMgcmVzcG9uc2libGUgZm9yIGNsZWFuaW5nIHVwIGFueSBmaWxlcyBjcmVhdGVkXG4gICAqIGlmIHRoaXMgcGFyYW1ldGVyIGlzIHNldCB0byBhbnl0aGluZyBvdGhlciB0aGFuIHRoZSBkZWZhdWx0IHZhbHVlLFxuICAgKiB3aGljaCBpcyBcImltYWdlXCIuXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogUXVhbGl0eSB0byB1c2Ugd2hlbiBjYXB0dXJpbmcgdGhlIGltYWdlLCBtdXN0IGJlIGEgZmxvYXQgdmFsdWVcbiAgICogZnJvbSAxLjAoZGVmYXVsdCAtIEhpZ2hlc3QgcXVhbGl0eSkgdG8gNS4wKExvd2VzdCBRdWFsaXR5KS4gQW55IHZhbHVlXG4gICAqIGluIGJldHdlZW4gd2lsbCBiZSBhY2NlcHRlZC4gQW55IHZhbHVlIG5vdCBlcXVhbCB0byBvciBub3QgYmV0d2VlbiB0aGVzZSB2YWx1ZXNcbiAgICogIHdpbGwgZGVmYXVsdCB0byB0aGUgaGlnaGVzdCBxdWFsaXR5IG9mIDEuMC5cbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBpbWFnZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgYSBiYXNlNjQgZW5jb2RpbmcgaW5zdGVhZCBvZiBhcyBhIGZpbGUgVVJMLlxuICAgKiBJZiB0cnVlLCB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIHRoZSBzY2FubmVkIGltYWdlIGFzIGJhc2U2NC4gSWYgZmFsc2UsXG4gICAqIHRoZSBwbHVnaW4gd2lsbCByZXR1cm4gdGhlIGltYWdlIFVSTCBvZiB0aGUgaW1hZ2UuXG4gICAqL1xuICByZXR1cm5CYXNlNjQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIERvY3VtZW50IFNjYW5uZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvY2Vzc2VzIGltYWdlcyBvZiBkb2N1bWVudHMsIGNvbXBlbnNhdGluZyBmb3IgcGVyc3BlY3RpdmUuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERvY3VtZW50U2Nhbm5lciwgRG9jdW1lbnRTY2FubmVyT3B0aW9ucyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kb2N1bWVudC1zY2FubmVyJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudFNjYW5uZXI6IERvY3VtZW50U2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IG9wdHM6IERvY3VtZW50U2Nhbm5lck9wdGlvbnMgPSB7fTtcbiAqIHRoaXMuZG9jdW1lbnRTY2FubmVyLnNjYW5Eb2N1bWVudChvcHRzKVxuICogICAudGhlbigocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERvY3VtZW50U2Nhbm5lck9wdGlvbnNcbiAqIEBlbnVtc1xuICogRG9jdW1lbnRTY2FubmVyU291cmNlVHlwZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RvY3VtZW50U2Nhbm5lcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXNjYW5uZXInLFxuICBwbHVnaW5SZWY6ICdzY2FuJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZXV0cmlub3NQbGF0Zm9ybS9jb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1zY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2Nhbm5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNjYW4gYSBkb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyB7RG9jdW1lbnRTY2FubmVyT3B0aW9uc30gb3B0aW9uYWwgcGFyYW1ldGVyIGZvciBjb250cm9sbGluZyBzY2FubmluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBmaWxlIFVSTCBvZiBzY2FubmVkIGRvY3VtZW50IGltYWdlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzY2FuRG9jKG9wdHM/OiBEb2N1bWVudFNjYW5uZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==