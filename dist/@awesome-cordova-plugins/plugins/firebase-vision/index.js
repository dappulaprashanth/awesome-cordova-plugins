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
export var BarcodeFormat;
(function (BarcodeFormat) {
    BarcodeFormat[BarcodeFormat["UNKNOWN"] = -1] = "UNKNOWN";
    BarcodeFormat[BarcodeFormat["ALL_FORMATS"] = 0] = "ALL_FORMATS";
    BarcodeFormat[BarcodeFormat["CODE_128"] = 1] = "CODE_128";
    BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
    BarcodeFormat[BarcodeFormat["CODE_93"] = 4] = "CODE_93";
    BarcodeFormat[BarcodeFormat["CODABAR"] = 8] = "CODABAR";
    BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 16] = "DATA_MATRIX";
    BarcodeFormat[BarcodeFormat["EAN_13"] = 32] = "EAN_13";
    BarcodeFormat[BarcodeFormat["EAN_8"] = 64] = "EAN_8";
    BarcodeFormat[BarcodeFormat["ITF"] = 128] = "ITF";
    BarcodeFormat[BarcodeFormat["QR_CODE"] = 256] = "QR_CODE";
    BarcodeFormat[BarcodeFormat["UPC_A"] = 512] = "UPC_A";
    BarcodeFormat[BarcodeFormat["UPC_E"] = 1024] = "UPC_E";
    BarcodeFormat[BarcodeFormat["PDF417"] = 2048] = "PDF417";
    BarcodeFormat[BarcodeFormat["AZTEC"] = 4096] = "AZTEC";
})(BarcodeFormat || (BarcodeFormat = {}));
export var BarcodeValueType;
(function (BarcodeValueType) {
    /** Unknown Barcode value types.  */
    BarcodeValueType[BarcodeValueType["Unknown"] = 0] = "Unknown";
    /** Barcode value type for contact info. */
    BarcodeValueType[BarcodeValueType["ContactInfo"] = 1] = "ContactInfo";
    /** Barcode value type for email addresses. */
    BarcodeValueType[BarcodeValueType["Email"] = 2] = "Email";
    /** Barcode value type for ISBNs. */
    BarcodeValueType[BarcodeValueType["ISBN"] = 3] = "ISBN";
    /** Barcode value type for phone numbers. */
    BarcodeValueType[BarcodeValueType["Phone"] = 4] = "Phone";
    /** Barcode value type for product codes. */
    BarcodeValueType[BarcodeValueType["Product"] = 5] = "Product";
    /** Barcode value type for SMS details. */
    BarcodeValueType[BarcodeValueType["SMS"] = 6] = "SMS";
    /** Barcode value type for plain text. */
    BarcodeValueType[BarcodeValueType["Text"] = 7] = "Text";
    /** Barcode value type for URLs/bookmarks. */
    BarcodeValueType[BarcodeValueType["URL"] = 8] = "URL";
    /** Barcode value type for Wi-Fi access point details. */
    BarcodeValueType[BarcodeValueType["WiFi"] = 9] = "WiFi";
    /** Barcode value type for geographic coordinates. */
    BarcodeValueType[BarcodeValueType["GeographicCoordinates"] = 10] = "GeographicCoordinates";
    /** Barcode value type for calendar events. */
    BarcodeValueType[BarcodeValueType["CalendarEvent"] = 11] = "CalendarEvent";
    /** Barcode value type for driver's license data. */
    BarcodeValueType[BarcodeValueType["DriversLicense"] = 12] = "DriversLicense";
})(BarcodeValueType || (BarcodeValueType = {}));
export var BarcodeEmailType;
(function (BarcodeEmailType) {
    /** Unknown email type. */
    BarcodeEmailType[BarcodeEmailType["Unknown"] = 0] = "Unknown";
    /** Barcode work email type. */
    BarcodeEmailType[BarcodeEmailType["Work"] = 1] = "Work";
    /** Barcode home email type. */
    BarcodeEmailType[BarcodeEmailType["Home"] = 2] = "Home";
})(BarcodeEmailType || (BarcodeEmailType = {}));
export var BarcodePhoneType;
(function (BarcodePhoneType) {
    /** Unknown phone type. */
    BarcodePhoneType[BarcodePhoneType["Unknown"] = 0] = "Unknown";
    /** Barcode work phone type. */
    BarcodePhoneType[BarcodePhoneType["Work"] = 1] = "Work";
    /** Barcode home phone type. */
    BarcodePhoneType[BarcodePhoneType["Home"] = 2] = "Home";
    /** Barcode fax phone type. */
    BarcodePhoneType[BarcodePhoneType["Fax"] = 3] = "Fax";
    /** Barcode mobile phone type. */
    BarcodePhoneType[BarcodePhoneType["Mobile"] = 4] = "Mobile";
})(BarcodePhoneType || (BarcodePhoneType = {}));
export var BarcodeWiFiEncryptionType;
(function (BarcodeWiFiEncryptionType) {
    /** Barcode unknown Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Unknown"] = 0] = "Unknown";
    /** Barcode open Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Open"] = 1] = "Open";
    /** Barcode WPA Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WPA"] = 2] = "WPA";
    /** Barcode WEP Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WEP"] = 3] = "WEP";
})(BarcodeWiFiEncryptionType || (BarcodeWiFiEncryptionType = {}));
export var BarcodeAddressType;
(function (BarcodeAddressType) {
    /** Barcode unknown address type. */
    BarcodeAddressType[BarcodeAddressType["Unknown"] = 0] = "Unknown";
    /** Barcode work address type. */
    BarcodeAddressType[BarcodeAddressType["Work"] = 1] = "Work";
    /** Barcode home address type. */
    BarcodeAddressType[BarcodeAddressType["Home"] = 2] = "Home";
})(BarcodeAddressType || (BarcodeAddressType = {}));
var FirebaseVisionOriginal = /** @class */ (function (_super) {
    __extends(FirebaseVisionOriginal, _super);
    function FirebaseVisionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseVisionOriginal.prototype.onDeviceTextRecognizer = function (file_uri) { return cordova(this, "onDeviceTextRecognizer", {}, arguments); };
    FirebaseVisionOriginal.prototype.barcodeDetector = function (file_uri) { return cordova(this, "barcodeDetector", {}, arguments); };
    FirebaseVisionOriginal.prototype.imageLabeler = function (file_uri) { return cordova(this, "imageLabeler", {}, arguments); };
    FirebaseVisionOriginal.pluginName = "FirebaseVision";
    FirebaseVisionOriginal.plugin = "cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.pluginRef = "FirebaseVisionPlugin";
    FirebaseVisionOriginal.repo = "https://github.com/alon22/cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.platforms = ["Android", "iOS"];
    return FirebaseVisionOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseVision = new FirebaseVisionOriginal();
export { FirebaseVision };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtdmlzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBb0M1RixNQUFNLENBQU4sSUFBWSxhQWdCWDtBQWhCRCxXQUFZLGFBQWE7SUFDdkIsd0RBQVksQ0FBQTtJQUNaLCtEQUFlLENBQUE7SUFDZix5REFBWSxDQUFBO0lBQ1osdURBQVcsQ0FBQTtJQUNYLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsZ0VBQWdCLENBQUE7SUFDaEIsc0RBQVcsQ0FBQTtJQUNYLG9EQUFVLENBQUE7SUFDVixpREFBUyxDQUFBO0lBQ1QseURBQWEsQ0FBQTtJQUNiLHFEQUFXLENBQUE7SUFDWCxzREFBWSxDQUFBO0lBQ1osd0RBQWEsQ0FBQTtJQUNiLHNEQUFZLENBQUE7QUFDZCxDQUFDLEVBaEJXLGFBQWEsS0FBYixhQUFhLFFBZ0J4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGdCQTJCWDtBQTNCRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBb0M7SUFDcEMsNkRBQU8sQ0FBQTtJQUNQLDJDQUEyQztJQUMzQyxxRUFBVyxDQUFBO0lBQ1gsOENBQThDO0lBQzlDLHlEQUFLLENBQUE7SUFDTCxvQ0FBb0M7SUFDcEMsdURBQUksQ0FBQTtJQUNKLDRDQUE0QztJQUM1Qyx5REFBSyxDQUFBO0lBQ0wsNENBQTRDO0lBQzVDLDZEQUFPLENBQUE7SUFDUCwwQ0FBMEM7SUFDMUMscURBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1REFBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLHFEQUFHLENBQUE7SUFDSCx5REFBeUQ7SUFDekQsdURBQUksQ0FBQTtJQUNKLHFEQUFxRDtJQUNyRCwwRkFBcUIsQ0FBQTtJQUNyQiw4Q0FBOEM7SUFDOUMsMEVBQWEsQ0FBQTtJQUNiLG9EQUFvRDtJQUNwRCw0RUFBYyxDQUFBO0FBQ2hCLENBQUMsRUEzQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQTJCM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0lBQzFCLDBCQUEwQjtJQUMxQiw2REFBTyxDQUFBO0lBQ1AsK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiwrQkFBK0I7SUFDL0IsdURBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTzNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBV1g7QUFYRCxXQUFZLGdCQUFnQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiw4QkFBOEI7SUFDOUIscURBQUcsQ0FBQTtJQUNILGlDQUFpQztJQUNqQywyREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQVhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFXM0I7QUFFRCxNQUFNLENBQU4sSUFBWSx5QkFTWDtBQVRELFdBQVkseUJBQXlCO0lBQ25DLDZDQUE2QztJQUM3QywrRUFBTyxDQUFBO0lBQ1AsMENBQTBDO0lBQzFDLHlFQUFJLENBQUE7SUFDSix5Q0FBeUM7SUFDekMsdUVBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1RUFBRyxDQUFBO0FBQ0wsQ0FBQyxFQVRXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFTcEM7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFPWDtBQVBELFdBQVksa0JBQWtCO0lBQzVCLG9DQUFvQztJQUNwQyxpRUFBTyxDQUFBO0lBQ1AsaUNBQWlDO0lBQ2pDLDJEQUFJLENBQUE7SUFDSixpQ0FBaUM7SUFDakMsMkRBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBTzdCOztJQXVJbUMsa0NBQTBCOzs7O0lBUTVELCtDQUFzQixhQUFDLFFBQWdCO0lBVXZDLHdDQUFlLGFBQUMsUUFBZ0I7SUFVaEMscUNBQVksYUFBQyxRQUFnQjs7Ozs7O3lCQS9SL0I7RUFtUW9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0IHtcbiAgdGV4dDogc3RyaW5nO1xuICBibG9ja3M6IFRleHRMaW5lW107XG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGltYWdlV2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0TGluZSBleHRlbmRzIFRleHRCbG9jayB7XG4gIGxpbmVzOiBUZXh0RWxlbWVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRFbGVtZW50IGV4dGVuZHMgVGV4dEJsb2NrIHtcbiAgZWxlbWVudHM6IFRleHRCbG9ja1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRCbG9jayB7XG4gIHRleHQ6IHN0cmluZztcbiAgY29ybmVyUG9pbnRzOiBUZXh0UG9pbnRbXTtcbiAgZnJhbWU6IFRleHRGcmFtZTtcbiAgcmVjb2duaXplZExhbmd1YWdlczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRGcmFtZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gQmFyY29kZUZvcm1hdCB7XG4gIFVOS05PV04gPSAtMSxcbiAgQUxMX0ZPUk1BVFMgPSAwLFxuICBDT0RFXzEyOCA9IDEsXG4gIENPREVfMzkgPSAyLFxuICBDT0RFXzkzID0gNCxcbiAgQ09EQUJBUiA9IDgsXG4gIERBVEFfTUFUUklYID0gMTYsXG4gIEVBTl8xMyA9IDMyLFxuICBFQU5fOCA9IDY0LFxuICBJVEYgPSAxMjgsXG4gIFFSX0NPREUgPSAyNTYsXG4gIFVQQ19BID0gNTEyLFxuICBVUENfRSA9IDEwMjQsXG4gIFBERjQxNyA9IDIwNDgsXG4gIEFaVEVDID0gNDA5Nixcbn1cblxuZXhwb3J0IGVudW0gQmFyY29kZVZhbHVlVHlwZSB7XG4gIC8qKiBVbmtub3duIEJhcmNvZGUgdmFsdWUgdHlwZXMuICAqL1xuICBVbmtub3duLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBjb250YWN0IGluZm8uICovXG4gIENvbnRhY3RJbmZvLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBlbWFpbCBhZGRyZXNzZXMuICovXG4gIEVtYWlsLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBJU0JOcy4gKi9cbiAgSVNCTixcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgcGhvbmUgbnVtYmVycy4gKi9cbiAgUGhvbmUsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIHByb2R1Y3QgY29kZXMuICovXG4gIFByb2R1Y3QsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFNNUyBkZXRhaWxzLiAqL1xuICBTTVMsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIHBsYWluIHRleHQuICovXG4gIFRleHQsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFVSTHMvYm9va21hcmtzLiAqL1xuICBVUkwsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFdpLUZpIGFjY2VzcyBwb2ludCBkZXRhaWxzLiAqL1xuICBXaUZpLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBnZW9ncmFwaGljIGNvb3JkaW5hdGVzLiAqL1xuICBHZW9ncmFwaGljQ29vcmRpbmF0ZXMsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGNhbGVuZGFyIGV2ZW50cy4gKi9cbiAgQ2FsZW5kYXJFdmVudCxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgZHJpdmVyJ3MgbGljZW5zZSBkYXRhLiAqL1xuICBEcml2ZXJzTGljZW5zZSxcbn1cblxuZXhwb3J0IGVudW0gQmFyY29kZUVtYWlsVHlwZSB7XG4gIC8qKiBVbmtub3duIGVtYWlsIHR5cGUuICovXG4gIFVua25vd24sXG4gIC8qKiBCYXJjb2RlIHdvcmsgZW1haWwgdHlwZS4gKi9cbiAgV29yayxcbiAgLyoqIEJhcmNvZGUgaG9tZSBlbWFpbCB0eXBlLiAqL1xuICBIb21lLFxufVxuXG5leHBvcnQgZW51bSBCYXJjb2RlUGhvbmVUeXBlIHtcbiAgLyoqIFVua25vd24gcGhvbmUgdHlwZS4gKi9cbiAgVW5rbm93bixcbiAgLyoqIEJhcmNvZGUgd29yayBwaG9uZSB0eXBlLiAqL1xuICBXb3JrLFxuICAvKiogQmFyY29kZSBob21lIHBob25lIHR5cGUuICovXG4gIEhvbWUsXG4gIC8qKiBCYXJjb2RlIGZheCBwaG9uZSB0eXBlLiAqL1xuICBGYXgsXG4gIC8qKiBCYXJjb2RlIG1vYmlsZSBwaG9uZSB0eXBlLiAqL1xuICBNb2JpbGUsXG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVXaUZpRW5jcnlwdGlvblR5cGUge1xuICAvKiogQmFyY29kZSB1bmtub3duIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cbiAgVW5rbm93bixcbiAgLyoqIEJhcmNvZGUgb3BlbiBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXG4gIE9wZW4sXG4gIC8qKiBCYXJjb2RlIFdQQSBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXG4gIFdQQSxcbiAgLyoqIEJhcmNvZGUgV0VQIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cbiAgV0VQLFxufVxuXG5leHBvcnQgZW51bSBCYXJjb2RlQWRkcmVzc1R5cGUge1xuICAvKiogQmFyY29kZSB1bmtub3duIGFkZHJlc3MgdHlwZS4gKi9cbiAgVW5rbm93bixcbiAgLyoqIEJhcmNvZGUgd29yayBhZGRyZXNzIHR5cGUuICovXG4gIFdvcmssXG4gIC8qKiBCYXJjb2RlIGhvbWUgYWRkcmVzcyB0eXBlLiAqL1xuICBIb21lLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGUge1xuICB2YWx1ZVR5cGU6IEJhcmNvZGVWYWx1ZVR5cGU7XG4gIGZvcm1hdDogQmFyY29kZUZvcm1hdDtcbiAgcmF3VmFsdWU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG4gIGNvcm5lclBvaW50czogYW55O1xuICBpbWFnZUhlaWdodDogbnVtYmVyO1xuICBpbWFnZVdpZHRoOiBudW1iZXI7XG4gIGVtYWlsOiBCYXJjb2RlRW1haWw7XG4gIHBob25lOiBCYXJjb2RlUGhvbmU7XG4gIHNtczogQmFyY29kZVNtcztcbiAgdXJsOiBCYXJjb2RlVXJsO1xuICB3aWZpOiBCYXJjb2RlV2lmaTtcbiAgZ2VvUG9pbnQ6IEJhcmNvZGVHZW9Qb2ludDtcbiAgY2FsZW5kYXJFdmVudDogQmFyY29kZUNhbGVuZGFyRXZlbnQ7XG4gIGNvbnRhY3RJbmZvOiBCYXJjb2RlQ29udGFjdEluZm87XG4gIGRyaXZlckxpY2Vuc2U6IEJhcmNvZGVEcml2ZXJMaWNlbnNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVFbWFpbCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBzdWJqZWN0OiBzdHJpbmc7XG4gIHR5cGU6IEJhcmNvZGVFbWFpbFR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVBob25lIHtcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHR5cGU6IEJhcmNvZGVQaG9uZVR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNtcyB7XG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlVXJsIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVXaWZpIHtcbiAgc3NpZDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICB0eXBlOiBCYXJjb2RlV2lGaUVuY3J5cHRpb25UeXBlO1xufVxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlR2VvUG9pbnQge1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ2FsZW5kYXJFdmVudCB7XG4gIGV2ZW50RGVzY3JpcHRpb246IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbiAgb3JnYW5pemVyOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBzdW1tYXJ5OiBzdHJpbmc7XG4gIHN0YXJ0OiBhbnk7XG4gIGVuZDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDb250YWN0SW5mbyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYWRkcmVzc2VzOiBCYXJjb2RlQWRkcmVzc1tdO1xuICBwaG9uZXM6IEJhcmNvZGVQaG9uZVtdO1xuICBlbWFpbHM6IEJhcmNvZGVFbWFpbFtdO1xuICBvcmdhbml6YXRpb246IHN0cmluZztcbiAgdXJsczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVBZGRyZXNzIHtcbiAgYWRkcmVzc0xpbmU6IHN0cmluZztcbiAgdHlwZTogQmFyY29kZUFkZHJlc3NUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEcml2ZXJMaWNlbnNlIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZ2VuZGVyOiBzdHJpbmc7XG4gIGFkZHJlc3NDaXR5OiBzdHJpbmc7XG4gIGFkZHJlc3NTdGF0ZTogc3RyaW5nO1xuICBhZGRyZXNzU3RyZWV0OiBzdHJpbmc7XG4gIGFkZHJlc3NaaXA6IHN0cmluZztcbiAgYmlydGhEYXRlOiBzdHJpbmc7XG4gIGRvY3VtZW50VHlwZTogc3RyaW5nO1xuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XG4gIGV4cGlyeURhdGU6IHN0cmluZztcbiAgaXNzdWluZ0RhdGU6IHN0cmluZztcbiAgaXNzdWluZ0NvdW50cnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUxhYmVsIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgY29uZmlkZW5jZTogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG59XG4vKipcbiAqIEBuYW1lIEZpcmViYXNlIFZpc2lvblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgRmlyZWJhc2UgTUxLaXQgVmlzaW9uXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlVmlzaW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpcmViYXNlLXZpc2lvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlVmlzaW9uOiBGaXJlYmFzZVZpc2lvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZmlyZWJhc2VWaXNpb24ub25EZXZpY2VUZXh0UmVjb2duaXplcihGSUxFX1VSSSlcbiAqICAgLnRoZW4oKHJlczogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmZpcmViYXNlVmlzaW9uLmJhcmNvZGVEZXRlY3RvcihGSUxFX1VSSSlcbiAqICAgLnRoZW4oKHJlczogQmFyY29kZVtdKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmZpcmViYXNlVmlzaW9uLmltYWdlTGFiZWxlcihGSUxFX1VSSSlcbiAqICAgLnRoZW4oKHJlczogSW1hZ2VMYWJlbFtdKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZVZpc2lvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLW1sdmlzaW9uJyxcbiAgcGx1Z2luUmVmOiAnRmlyZWJhc2VWaXNpb25QbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Fsb24yMi9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tbHZpc2lvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVZpc2lvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlY29nbml6ZSB0ZXh0IGluIGltYWdlXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlX3VyaSB7c3RyaW5nfSBJbWFnZSBVUklcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSB0ZXh0IGluIHRoZSBpbWFnZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkRldmljZVRleHRSZWNvZ25pemVyKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPFRleHQ+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFJlYWQgZGF0YSBmcm9tIEJhcmNvZGVcbiAgICpcbiAgICogQHBhcmFtIGZpbGVfdXJpIHtzdHJpbmd9IEltYWdlIFVSSVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCYXJjb2RlW10+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpdGggdGhlIGRhdGEgaW4gYmFyY29kZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBiYXJjb2RlRGV0ZWN0b3IoZmlsZV91cmk6IHN0cmluZyk6IFByb21pc2U8QmFyY29kZVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBSZWNvZ25pemUgb2JqZWN0IGluIGltYWdlXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlX3VyaSB7c3RyaW5nfSBJbWFnZSBVUklcbiAgICogQHJldHVybnMge1Byb21pc2U8SW1hZ2VMYWJlbFtdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBlbnRpdGllcyBpbiBhbiBpbWFnZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbWFnZUxhYmVsZXIoZmlsZV91cmk6IHN0cmluZyk6IFByb21pc2U8SW1hZ2VMYWJlbFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=