import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * Emulation constants
 */
export var Emulation;
(function (Emulation) {
    /** mPOP, SM-L200, SM-L300, SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["StarPRNT"] = "StarPRNT";
    /** SM-L200, SM-L300 */
    Emulation["StarPRNTL"] = "StarPRNTL";
    /** FVP10, TSP650II, TSP700II, TSP800II */
    Emulation["StarLine"] = "StarLine";
    /** TSP100 */
    Emulation["StarGraphic"] = "StarGraphic";
    /** BSC10 */
    Emulation["EscPos"] = "EscPos";
    /** SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["EscPosMobile"] = "EscPosMobile";
    /** SP700 */
    Emulation["StarDotImpact"] = "StarDotImpact";
})(Emulation || (Emulation = {}));
/**
 * Encoding constants
 */
export var Encoding;
(function (Encoding) {
    /** English */
    Encoding["USASCII"] = "US-ASCII";
    /** French, German, Portuguese, Spanish */
    Encoding["Windows1252"] = "Windows-1252";
    /** Japanese */
    Encoding["ShiftJIS"] = "Shift-JIS";
    /** Russian */
    Encoding["Windows1251"] = "Windows-1251";
    /** Simplified Chinese */
    Encoding["GB2312"] = "GB2312";
    /** Traditional Chinese */
    Encoding["Big5"] = "Big5";
    /** UFT8 */
    Encoding["UTF8"] = "UTF-8";
})(Encoding || (Encoding = {}));
/**
 * CodePageType constants
 */
export var CodePageType;
(function (CodePageType) {
    CodePageType["CP737"] = "CP737";
    CodePageType["CP772"] = "CP772";
    CodePageType["CP774"] = "CP774";
    CodePageType["CP851"] = "CP851";
    CodePageType["CP852"] = "CP852";
    CodePageType["CP855"] = "CP855";
    CodePageType["CP857"] = "CP857";
    CodePageType["CP858"] = "CP858";
    CodePageType["CP860"] = "CP860";
    CodePageType["CP861"] = "CP861";
    CodePageType["CP862"] = "CP862";
    CodePageType["CP863"] = "CP863";
    CodePageType["CP864"] = "CP864";
    CodePageType["CP865"] = "CP865";
    CodePageType["CP869"] = "CP869";
    CodePageType["CP874"] = "CP874";
    CodePageType["CP928"] = "CP928";
    CodePageType["CP932"] = "CP932";
    CodePageType["CP999"] = "CP999";
    CodePageType["CP1001"] = "CP1001";
    CodePageType["CP1250"] = "CP1250";
    CodePageType["CP1251"] = "CP1251";
    CodePageType["CP1252"] = "CP1252";
    CodePageType["CP2001"] = "CP2001";
    CodePageType["CP3001"] = "CP3001";
    CodePageType["CP3002"] = "CP3002";
    CodePageType["CP3011"] = "CP3011";
    CodePageType["CP3012"] = "CP3012";
    CodePageType["CP3021"] = "CP3021";
    CodePageType["CP3041"] = "CP3041";
    CodePageType["CP3840"] = "CP3840";
    CodePageType["CP3841"] = "CP3841";
    CodePageType["CP3843"] = "CP3843";
    CodePageType["CP3845"] = "CP3845";
    CodePageType["CP3846"] = "CP3846";
    CodePageType["CP3847"] = "CP3847";
    CodePageType["CP3848"] = "CP3848";
    CodePageType["UTF8"] = "UTF8";
    CodePageType["Blank"] = "Blank";
})(CodePageType || (CodePageType = {}));
/**
 * InternationalType constants
 */
export var InternationalType;
(function (InternationalType) {
    InternationalType["UK"] = "UK";
    InternationalType["USA"] = "USA";
    InternationalType["France"] = "France";
    InternationalType["Germany"] = "Germany";
    InternationalType["Denmark"] = "Denmark";
    InternationalType["Sweden"] = "Sweden";
    InternationalType["Italy"] = "Italy";
    InternationalType["Spain"] = "Spain";
    InternationalType["Japan"] = "Japan";
    InternationalType["Norway"] = "Norway";
    InternationalType["Denmark2"] = "Denmark2";
    InternationalType["Spain2"] = "Spain2";
    InternationalType["LatinAmerica"] = "LatinAmerica";
    InternationalType["Korea"] = "Korea";
    InternationalType["Ireland"] = "Ireland";
    InternationalType["Legal"] = "Legal";
})(InternationalType || (InternationalType = {}));
/**
 * FontStyleType constants.
 */
export var FontStyleType;
(function (FontStyleType) {
    /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
    FontStyleType["A"] = "A";
    /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
    FontStyleType["B"] = "B";
})(FontStyleType || (FontStyleType = {}));
/**
 * CutPaperAction constants.
 */
export var CutPaperAction;
(function (CutPaperAction) {
    CutPaperAction["FullCut"] = "FullCut";
    CutPaperAction["FullCutWithFeed"] = "FullCutWithFeed";
    CutPaperAction["PartialCut"] = "PartialCut";
    CutPaperAction["PartialCutWithFeed"] = "PartialCutWithFeed";
})(CutPaperAction || (CutPaperAction = {}));
/**
 * BlackMarkType constants.
 */
export var BlackMarkType;
(function (BlackMarkType) {
    BlackMarkType["Valid"] = "Valid";
    BlackMarkType["Invalid"] = "Invalid";
    BlackMarkType["ValidWithDetection"] = "ValidWithDetection";
})(BlackMarkType || (BlackMarkType = {}));
/**
 * LogoSize constants
 */
export var LogoSize;
(function (LogoSize) {
    LogoSize["Normal"] = "Normal";
    LogoSize["DoubleWidth"] = "DoubleWidth";
    LogoSize["DoubleHeight"] = "DoubleHeight";
    LogoSize["DoubleWidthDoubleHeight"] = "DoubleWidthDoubleHeight";
})(LogoSize || (LogoSize = {}));
/**
 * AlignmentPosition constants
 */
export var AlignmentPosition;
(function (AlignmentPosition) {
    AlignmentPosition["Left"] = "Left";
    AlignmentPosition["Center"] = "Center";
    AlignmentPosition["Right"] = "Right";
})(AlignmentPosition || (AlignmentPosition = {}));
/**
 * BarcodeSymbology constants
 */
export var BarcodeSymbology;
(function (BarcodeSymbology) {
    BarcodeSymbology["Code128"] = "Code128";
    BarcodeSymbology["Code39"] = "Code39";
    BarcodeSymbology["Code93"] = "Code93";
    BarcodeSymbology["ITF"] = "ITF";
    BarcodeSymbology["JAN8"] = "JAN8";
    BarcodeSymbology["JAN13"] = "JAN13";
    BarcodeSymbology["NW7"] = "NW7";
    BarcodeSymbology["UPCA"] = "UPCA";
    BarcodeSymbology["UPCE"] = "UPCE";
})(BarcodeSymbology || (BarcodeSymbology = {}));
/**
 * BarcodeWidth constants
 */
export var BarcodeWidth;
(function (BarcodeWidth) {
    BarcodeWidth["Mode1"] = "Mode1";
    BarcodeWidth["Mode2"] = "Mode2";
    BarcodeWidth["Mode3"] = "Mode3";
    BarcodeWidth["Mode4"] = "Mode4";
    BarcodeWidth["Mode5"] = "Mode5";
    BarcodeWidth["Mode6"] = "Mode6";
    BarcodeWidth["Mode7"] = "Mode7";
    BarcodeWidth["Mode8"] = "Mode8";
    BarcodeWidth["Mode9"] = "Mode9";
})(BarcodeWidth || (BarcodeWidth = {}));
/**
 * QrCodeModel constants
 */
export var QrCodeModel;
(function (QrCodeModel) {
    QrCodeModel["No1"] = "No1";
    QrCodeModel["No2"] = "No2";
})(QrCodeModel || (QrCodeModel = {}));
/**
 * QrCodeLevel constants
 */
export var QrCodeLevel;
(function (QrCodeLevel) {
    QrCodeLevel["H"] = "H";
    QrCodeLevel["L"] = "L";
    QrCodeLevel["M"] = "M";
    QrCodeLevel["Q"] = "Q";
})(QrCodeLevel || (QrCodeLevel = {}));
/**
 * BitmapConverterRotation constants
 */
export var BitmapConverterRotation;
(function (BitmapConverterRotation) {
    BitmapConverterRotation["Normal"] = "Normal";
    BitmapConverterRotation["Left90"] = "Left90";
    BitmapConverterRotation["Right90"] = "Right90";
    BitmapConverterRotation["Rotate180"] = "Rotate180";
})(BitmapConverterRotation || (BitmapConverterRotation = {}));
var StarPRNT = /** @class */ (function (_super) {
    __extends(StarPRNT, _super);
    function StarPRNT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for Emulation
         */
        _this.Emulation = {
            StarPRNT: 'StarPRNT',
            StarPRNTL: 'StarPRNTL',
            StarLine: 'StarLine',
            StarGraphic: 'StarGraphic',
            EscPos: 'EscPos',
            EscPosMobile: 'EscPosMobile',
            StarDotImpact: 'StarDotImpact',
        };
        /**
         * Constant for possible Encoding
         */
        _this.Encoding = {
            USASCII: 'US-ASCII',
            Windows1252: 'Windows-1252',
            ShiftJIS: 'Shift-JIS',
            Windows1251: 'Windows-1251',
            GB2312: 'GB2312',
            Big5: 'Big5',
            UTF8: 'UTF-8',
        };
        /**
         * CodePageType constants
         */
        _this.CodePageType = {
            CP737: 'CP737',
            CP772: 'CP772',
            CP774: 'CP774',
            CP851: 'CP851',
            CP852: 'CP852',
            CP855: 'CP855',
            CP857: 'CP857',
            CP858: 'CP858',
            CP860: 'CP860',
            CP861: 'CP861',
            CP862: 'CP862',
            CP863: 'CP863',
            CP864: 'CP864',
            CP865: 'CP865',
            CP869: 'CP869',
            CP874: 'CP874',
            CP928: 'CP928',
            CP932: 'CP932',
            CP999: 'CP999',
            CP1001: 'CP1001',
            CP1250: 'CP1250',
            CP1251: 'CP1251',
            CP1252: 'CP1252',
            CP2001: 'CP2001',
            CP3001: 'CP3001',
            CP3002: 'CP3002',
            CP3011: 'CP3011',
            CP3012: 'CP3012',
            CP3021: 'CP3021',
            CP3041: 'CP3041',
            CP3840: 'CP3840',
            CP3841: 'CP3841',
            CP3843: 'CP3843',
            CP3845: 'CP3845',
            CP3846: 'CP3846',
            CP3847: 'CP3847',
            CP3848: 'CP3848',
            UTF8: 'UTF8',
            Blank: 'Blank',
        };
        /**
         * Constant for possible InternationalType
         */
        _this.InternationalType = {
            UK: 'UK',
            USA: 'USA',
            France: 'France',
            Germany: 'Germany',
            Denmark: 'Denmark',
            Sweden: 'Sweden',
            Italy: 'Italy',
            Spain: 'Spain',
            Japan: 'Japan',
            Norway: 'Norway',
            Denmark2: 'Denmark2',
            Spain2: 'Spain2',
            LatinAmerica: 'LatinAmerica',
            Korea: 'Korea',
            Ireland: 'Ireland',
            Legal: 'Legal',
        };
        /**
         * Constant for possible FontStyleType
         */
        _this.FontStyleType = {
            /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
            A: 'A',
            /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
            B: 'B',
        };
        /**
         * Constant for possible CutPaperAction
         */
        _this.CutPaperAction = {
            FullCut: 'FullCut',
            FullCutWithFeed: 'FullCutWithFeed',
            PartialCut: 'PartialCut',
            PartialCutWithFeed: 'PartialCutWithFeed',
        };
        /**
         * Constant for possible BlackMarkType
         */
        _this.BlackMarkType = {
            Valid: 'Valid',
            Invalid: 'Invalid',
            ValidWithDetection: 'ValidWithDetection',
        };
        /**
         * Constant for possible AlignmentPosition
         */
        _this.AlignmentPosition = {
            Left: 'Left',
            Center: 'Center',
            Right: 'Right',
        };
        /**
         * Constant for possible LogoSize
         */
        _this.LogoSize = {
            Normal: 'Normal',
            DoubleWidth: 'DoubleWidth',
            DoubleHeight: 'DoubleHeight',
            DoubleWidthDoubleHeight: 'DoubleWidthDoubleHeight',
        };
        /**
         * Constant for possible BarcodeSymbology
         */
        _this.BarcodeSymbology = {
            Code128: 'Code128',
            Code39: 'Code39',
            Code93: 'Code93',
            ITF: 'ITF',
            JAN8: 'JAN8',
            JAN13: 'JAN13',
            NW7: 'NW7',
            UPCA: 'UPCA',
            UPCE: 'UPCE',
        };
        /**
         * Constant for possible BarcodeWidth
         */
        _this.BarcodeWidth = {
            Mode1: 'Mode1',
            Mode2: 'Mode2',
            Mode3: 'Mode3',
            Mode4: 'Mode4',
            Mode5: 'Mode5',
            Mode6: 'Mode6',
            Mode7: 'Mode7',
            Mode8: 'Mode8',
            Mode9: 'Mode9',
        };
        /**
         * Constant for possible QrCodeModel
         */
        _this.QrCodeModel = {
            No1: 'No1',
            No2: 'No2',
        };
        /**
         * Constant for possible QrCodeLevel
         */
        _this.QrCodeLevel = {
            H: 'H',
            L: 'L',
            M: 'M',
            Q: 'Q',
        };
        /**
         * Constant for possible BitmapConverterRotation
         */
        _this.BitmapConverterRotation = {
            Normal: 'Normal',
            Left90: 'Left90',
            Right90: 'Right90',
            Rotate180: 'Rotate180',
        };
        return _this;
    }
    StarPRNT.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNT.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNT.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNT.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNT.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNT.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNT.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNT.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNT.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNT.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNT.pluginName = "StarPRNT";
    StarPRNT.plugin = "cordova-plugin-starprnt";
    StarPRNT.pluginRef = "starprnt";
    StarPRNT.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNT.platforms = ["Android", "iOS"];
    StarPRNT.decorators = [
        { type: Injectable }
    ];
    return StarPRNT;
}(AwesomeCordovaNativePlugin));
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Rhci1wcm50L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFrWmxDOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksU0FlWDtBQWZELFdBQVksU0FBUztJQUNuQixvRkFBb0Y7SUFDcEYsa0NBQXFCLENBQUE7SUFDckIsdUJBQXVCO0lBQ3ZCLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUEwQztJQUMxQyxrQ0FBcUIsQ0FBQTtJQUNyQixhQUFhO0lBQ2Isd0NBQTJCLENBQUE7SUFDM0IsWUFBWTtJQUNaLDhCQUFpQixDQUFBO0lBQ2pCLDREQUE0RDtJQUM1RCwwQ0FBNkIsQ0FBQTtJQUM3QixZQUFZO0lBQ1osNENBQStCLENBQUE7QUFDakMsQ0FBQyxFQWZXLFNBQVMsS0FBVCxTQUFTLFFBZXBCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxRQWVYO0FBZkQsV0FBWSxRQUFRO0lBQ2xCLGNBQWM7SUFDZCxnQ0FBb0IsQ0FBQTtJQUNwQiwwQ0FBMEM7SUFDMUMsd0NBQTRCLENBQUE7SUFDNUIsZUFBZTtJQUNmLGtDQUFzQixDQUFBO0lBQ3RCLGNBQWM7SUFDZCx3Q0FBNEIsQ0FBQTtJQUM1Qix5QkFBeUI7SUFDekIsNkJBQWlCLENBQUE7SUFDakIsMEJBQTBCO0lBQzFCLHlCQUFhLENBQUE7SUFDYixXQUFXO0lBQ1gsMEJBQWMsQ0FBQTtBQUNoQixDQUFDLEVBZlcsUUFBUSxLQUFSLFFBQVEsUUFlbkI7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFlBd0NY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RyxFQUFFLEtBQUs7U0FDWCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxpQkFBVyxHQUFHO1lBQ1osQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7U0FDUCxDQUFDO1FBRUY7O1dBRUc7UUFDSCw2QkFBdUIsR0FBRztZQUN4QixNQUFNLEVBQUUsUUFBUTtZQUNoQixNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsV0FBVztTQUN2QixDQUFDOzs7SUFTRixnQ0FBYSxhQUFDLElBQVk7SUFZMUIsOEJBQVcsYUFBQyxJQUFZLEVBQUUsU0FBaUI7SUFhM0MsK0JBQVksYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtJQWFoRSxxQ0FBa0IsYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxTQUFvQjtJQWF4RSw2QkFBVSxhQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLFFBQWtCO0lBWTlELGlDQUFjLGFBQUMsSUFBWSxFQUFFLFNBQWlCO0lBYTlDLHdCQUFLLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsYUFBNEI7SUFnQm5FLDBCQUFPLGFBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsZ0JBQXlCO0lBYWxFLDRCQUFTO0lBV1QsNkJBQVU7Ozs7Ozs7Z0JBcFVYLFVBQVU7O21CQXpvQlg7RUEwb0I4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlciB7XG4gIC8qKlxuICAgKiBQcmludGVyIG1vZGVsIG5hbWUgYW5kIG1vZGVsIG51bWJlclxuICAgKi9cbiAgbW9kZWxOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIE1hYyBBZGRyZXNzXG4gICAqL1xuICBtYWNBZGRyZXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIHBvcnQgbmFtZSB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBwb3J0IGluc3RhbmNlIG9mIFNNUG9ydCBvciBTdGFySU9FeHRNYW5hZ2VyXG4gICAqL1xuICBwb3J0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFVTQiBTZXJpYWwgTnVtYmVyIChVU0IgUHJpbnRlcnMgT25seSlcbiAgICovXG4gIFVTQlNlcmlhbE51bWJlcj86IHN0cmluZztcbn1cbi8qKlxuICogQXJyYXkgb2YgUHJpbnRlciBvYmplY3RzIHJldHVybmVkIGJ5IHRoZSBwb3J0RGlzY292ZXJ5KCkgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHR5cGUgUHJpbnRlcnMgPSBBcnJheTxQcmludGVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyU3RhdHVzIHtcbiAgLyoqXG4gICAqIFByaW50ZXIgT25saW5lL09mZmxpbmUgc3RhdHVzXG4gICAqL1xuICBvZmZsaW5lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogIFByaW50ZXIgbW9kZWwgbmFtZSBhbmQgbW9kZWwgbnVtYmVyXG4gICAqL1xuICBNb2RlbE5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgY292ZXIgc3RhdHVzXG4gICAqL1xuICBjb3Zlck9wZW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIFBhcGVyIEN1dHRlciBzdGF0dXNcbiAgICovXG4gIGN1dHRlckVycm9yPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJpbnRlciBQYXBlciBzdGF0dXNcbiAgICovXG4gIHJlY2VpcHRQYXBlckVtcHR5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJpbnRlciBGaXJtd2FyZSBpbmZvcm1hdGlvblxuICAgKi9cbiAgRmlybXdhcmVWZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50T2JqIHtcbiAgLyoqXG4gICAqIHN0cmluZyBjb250YWluaW5nIHRoZSB0ZXh0IHRvIHByaW50LCBFeGFtcGxlOiBcIlN0YXIgQ2xvdGhpbmcgQm91dGlxdWVcXG4xMjMgU3RhciBSb2FkXFxuQ2l0eSwgU3RhdGUgMTIzNDVcXG5cXG5cIlxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgY3V0UmVjZWlwdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMiAtIERlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIG9wZW5DYXNoRHJhd2VyPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmFzdGVyT2JqIGV4dGVuZHMgUHJpbnRPYmoge1xuICAvKipcbiAgICogRm9udCBzaXplIG51bWJlciwgZGVmYXVsdHMgdG8gMjVcbiAgICovXG4gIGZvbnRTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQYXBlciB3aWR0aCAoVW5pdHM6IERvdHMpLiAyIGluY2hlczogMzg0LCAzIGluY2hlczogNTc2LCA0IGluY2hlczogODMyLCBFU0NQb3MgMyBpbmNoZXM6IDUxMiwgRG90IDMgaW5jaGVzOiAyMTAuIERlZmF1bHRzIHRvIDU3NlxuICAgKi9cbiAgcGFwZXJXaWR0aD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPYmoge1xuICAvKipcbiAgICogSW1hZ2UgVVJJIHRvIHByaW50LCB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnlcbiAgICovXG4gIHVyaTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbWFnZSB3aWR0aCAoVW5pdHM6IERvdHMpIGRlZmF1bHRzIHRvIDU3NlxuICAgKi9cbiAgcGFwZXJXaWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogIFNlbmRzIGEgUGFydGlhbEN1dFdpdGhGZWVkIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIsIGRlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIGN1dFJlY2VpcHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzIgLSBEZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBvcGVuQ2FzaERyYXdlcj86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFByaW50Q29tbWFuZCB7XG4gIC8qKlxuICAgKiBDaGFyYWN0aGVyIGVuY29kaW5nIGlzIHVzZWQgdG8gZ2V0Qnl0ZSBkYXRhIGZyb20gYWxsIHN1YnNlcXVlbnQgY29tbWFuZHMuIERlZmF1bHQgJ1VTLUFTQ0lJJ1xuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIERlZmluZWQgaW4gU3RhclBSTlQuRW5jb2Rpbmcgb3IgdGhlIEVuY29kaW5nIGVudW0uXG4gICAqIEV4YW1wbGU6IHthcHBlbmRFbmNvZGluZzonVVMtQVNDSUknfVxuICAgKi9cbiAgYXBwZW5kRW5jb2Rpbmc/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBjb2RlIHBhZ2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZHMgcHJvcGVydHkuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5Db2RlUGFnZVR5cGUgb3IgdGhlIENvZGVQYWdlVHlwZSBlbnVtLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQ29kZVBhZ2U6J0NQODU4J31cbiAgICovXG4gIGFwcGVuZENvZGVQYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEYXRhIChUZXh0KSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmQ6XCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJ9XG4gICAqL1xuICBhcHBlbmQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgKFRleHQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZFJhdzpcIlN0YXIgQ2xvdGhpbmcgQm91dGlxdWVcXG4xMjMgU3RhciBSb2FkXFxuQ2l0eSwgU3RhdGUgMTIzNDVcXG5cXG5cIn1cbiAgICovXG4gIGFwcGVuZFJhdz86IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cbiAgICogRXhhbXBsZToge2FwcGVuZEJ5dGVzOlsweDQ4LCAweDY1LCAweDZjLCAweDZjLCAweDZmLCAweDIwLCAweDU3LCAweDZmLCAweDcyLCAweDZjLCAweDY0LCAweDJlXX1cbiAgICovXG4gIGFwcGVuZEJ5dGVzPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIERhdGEgKENvbW1hbmQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRSYXdCeXRlczpbMHg0OCwgMHg2NSwgMHg2YywgMHg2YywgMHg2ZiwgMHgyMCwgMHg1NywgMHg2ZiwgMHg3MiwgMHg2YywgMHg2NCwgMHgyZV19XG4gICAqL1xuICBhcHBlbmRSYXdCeXRlcz86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBTZXQgY29tbWFuZCBvZiB0aGUgY2hhcmFjdGVyIHNwYWNlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBDaGFyYWN0ZXIgU3BhY3MgKFVuaXQ6IERvdHMpIEV4YW1wbGU6IDRcbiAgICovXG4gIGFwcGVuZENoYXJhY3RlclNwYWNlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGVtcGhhc2lzIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRFbXBoYXNpczpcIlNBTEVcXG5cIn1cbiAgICovXG4gIGFwcGVuZEVtcGhhc2lzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgRW5hYmxlIGVtcGhhc2lzIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVFbXBoYXNpczp0cnVlfVxuICAgKi9cbiAgZW5hYmxlRW1waGFzaXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGludmVydCBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kSW52ZXJ0OlwiUmVmdW5kcyBhbmQgRXhjaGFuZ2VzXFxuXCJ9XG4gICAqL1xuICBhcHBlbmRJbnZlcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAgRW5hYmxlIGludmVydCBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlSW52ZXJ0OnRydWV9XG4gICAqL1xuICBlbmFibGVJbnZlcnQ/OiBib29sZWFuO1xuICAvKipcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSB1bmRlciBsaW5lIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRVbmRlcmxpbmU6XCIzMCBkYXlzXCJ9XG4gICAqL1xuICBhcHBlbmRVbmRlcmxpbmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAgRW5hYmxlIHVuZGVyIGxpbmUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZVVuZGVybGluZTp0cnVlfVxuICAgKi9cbiAgZW5hYmxlVW5kZXJsaW5lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGludGVybmF0aW9uYWwgY2hhcmFjdGVyIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5JbnRlcm5hdGlvbmFsVHlwZSBvciB0aGUgSW50ZXJuYXRpb25hbFR5cGUgZW51bS5cbiAgICogJ1VLJyB8ICdVU0EnIHwgJ0ZyYW5jZScgfCAnR2VybWFueScgfCAnRGVubWFyaycgfCAnU3dlZGVuJyB8ICdJdGFseScgfCAnU3BhaW4nIHwgJ0phcGFuJyB8ICdOb3J3YXknIHwgJ0Rlbm1hcmsyJyB8ICdTcGFpbjInIHwgJ0xhdGluQW1lcmljYScgfCAnS29yZWEnIHwgJ0lyZWxhbmQnIHwgJ0xlZ2FsJ1xuICAgKiBFeGFtcGxlIHthcHBlbmRJbnRlcm5hdGlvbmFsOkludGVybmF0aW9uYWxUeXBlLlVLfVxuICAgKi9cbiAgYXBwZW5kSW50ZXJuYXRpb25hbD86IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBmZWVkIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFBhcGVyIGZlZWQgdW5pdHMgKFVuaXRzOiBMaW5lcykgRXhhbXBsZTogMlxuICAgKi9cbiAgYXBwZW5kTGluZUZlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXQgZmVlZCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBQYXBlciBmZWVkIHVuaXRzIChVbml0czogRG90cykgRXhhbXBsZTogNjRcbiAgICovXG4gIGFwcGVuZFVuaXRGZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgY29tbWFuZCBvZiB0aGUgbGluZSBzcGFjZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gTGluZSBzcGFjZXMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiAzMlxuICAgKi9cbiAgYXBwZW5kTGluZVNwYWNlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgZm9udCBzdHlsZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkZvbnRTdHlsZVR5cGUgb3IgdGhlIEZvbnRTdHlsZVR5cGUgZW51bS4gJ0EnIHwgJ0InXG4gICAqIEV4YW1wbGU6IHthcHBlbmRGb250U3R5bGU6Rm9udFN0eWxlVHlwZS5BfVxuICAgKi9cbiAgYXBwZW5kRm9udFN0eWxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQYXBlciBjdXQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkN1dFBhcGVyQWN0aW9uIG9yIHRoZSBDdXRQYXBlckFjdGlvbiBlbnVtLiAnRnVsbEN1dCcgfCAnRnVsbEN1dFdpdGhGZWVkJyB8ICdQYXJ0aWFsQ3V0JyB8ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnXG4gICAqIEV4YW1wbGU6IHthcHBlbmRDdXRQYXBlcjpDdXRQYXBlckFjdGlvbi5QYXJ0aWFsQ3V0V2l0aEZlZWR9XG4gICAqL1xuICBhcHBlbmRDdXRQYXBlcj86IHN0cmluZztcblxuICAvKipcbiAgICogQmxhY2sgbWFyayBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQmxhY2tNYXJrVHlwZSBvciB0aGUgQmxhY2tNYXJrVHlwZSBlbnVtLiAnVmFsaWQnIHwgJ0ludmFsaWQnIHwgJ1ZhbGlkV2l0aERldGVjdGlvbidcbiAgICogRXhhbXBsZToge2FwcGVuZEJsYWNrTWFyazogQmxhY2tNYXJrVHlwZS5WYWxpZH1cbiAgICovXG4gIGFwcGVuZEJsYWNrTWFyaz86IHN0cmluZztcblxuICAvKipcbiAgICogQWJzb2x1dGUgcG9zaXRpb24gY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gKFVuaXQ6IERvdHMpLiBTZW5kIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGRhdGEgcHJvcGVydHkgdG8gYXBwZW5kIGFic29sdXRlIHBvc2l0aW9uIGp1c3QgdG8gdGhhdCBzdHJpbmdcbiAgICogRXhhbXBsZTE6IEFwcGVuZCBkYXRhIHdpdGggQWJzb2x1dGUgcG9zaXRpb24ge2FwcGVuZEFic29sdXRlUG9zaXRpb246NDAsIGRhdGE6IFwiVGV4dCB3aXRoIGFic29sdXRlIHBvc2l0aW9uXCJ9XG4gICAqIEV4YW1wbGUyOiBBcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24gdG8gc3Vic2VxdWVudCBjb21tYW5kczoge2FwcGVuZEFic29sdXRlUG9zaXRpb246NDB9XG4gICAqL1xuICBhcHBlbmRBYnNvbHV0ZVBvc2l0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbGlnbm1lbnQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gU2VuZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBkYXRhIHByb3BlcnR5IHRvIGFwcGVuZCBhbGlnbm1lbnQgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cbiAgICogRXhhbXBsZTEgQXBwZW5kIGRhdGEgd2l0aCBBbGlnbm1lbnQgcG9zaXRpb246IHthcHBlbmRBbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyLCBkYXRhOiBcIlRleHQgd2l0aCBjZW50ZXJlZCBwb3NpdGlvblwifVxuICAgKiBFeGFtcGxlMiBBcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24gdG8gc3Vic2VxdWVudCBjb21tYW5kczoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9XG4gICAqL1xuICBhcHBlbmRBbGlnbm1lbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhvcml6b250YWwgdGFiIHNldC9jbGVhciBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiAoT25seSB3b3JrcyBmb3IgY2VydGFpbiBwcmludGVyIG1vZGVscywgY2hlY2sgdGhlIHN0YXJTREsgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscylcbiAgICogQXJyYXkgb2YgaG9yaXpvbnRhbCB0YWIgcG9zaXRpb25zIChVbml0czogQU5LIGNoYXJhY3RlciBwaXRjaCkuIFNwZWNpZnlpbmcgZW1wdHkgYXJyYXkgZGVsZXRlcyBhbGwgY3VycmVudGx5IHNldCBob3Jpem9udGFsIHRhYiBwb3NpdGlvbnMuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb246WzE1LCAzNV19XG4gICAqIERlbGV0ZSBwb3NpdGlvbnMgRXhhbXBsZToge2FwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbjpbXX1cbiAgICovXG4gIGFwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbj86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBsb2dvIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUaGUgbG9nbyBoYXMgdG8gYmUgdXBsb2FkZWQgdG8gdGhlIHByaW50ZXIgdXNpbmcgdGhlIFN0YXIgUHJpbnQgdXRpbGl0eS5cbiAgICogU2VuZCBpbiBjb25qdWN0aW9uIHdpdGggdGhlIGxvZ29TaXplIHByb3BlcnR5IHRvIHNldCB0aGUgbG9nbyBzaXplXG4gICAqIEV4YW1wbGU6IHthcHBlbmRMb2dvOjF9XG4gICAqIEV4YW1wbGUgd2l0aCBMb2dvU2l6ZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XG4gICAqL1xuICBhcHBlbmRMb2dvPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZExvZ28gY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkxvZ29TaXplIG9yIHRoZSBMb2dvU2l6ZSBlbnVtLiAnTm9ybWFsJyB8ICdEb3VibGVXaWR0aCcgfCAnRG91YmxlSGVpZ2h0JyB8ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCc7XG4gICAqIEV4YW1wbGU6IHthcHBlbmRMb2dvOjEsIGxvZ29TaXplOkxvZ29TaXplLkRvdWJsZVdpZHRoRG91YmxlSGVpZ2h0fVxuICAgKi9cbiAgbG9nb1NpemU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGJhcmNvZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogQmFyY29kZVN5bWJvbG9neSwgQmFyY29kZVdpZHRoLCBoZWlnaHQsIGhyaSwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSB9XG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWJzb2x1dGVQb3NpdGlvbjo0MCB9XG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6e2FwcGVuZEJhcmNvZGU6XCJ7QlN0YXJcIiwgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjgsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTIsIGhlaWdodDo0MCwgaHJpOnRydWUsIGFsaWdubWVudDphbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyIH1cbiAgICovXG4gIGFwcGVuZEJhcmNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQmFyY29kZVN5bWJvbG9neSBvciB0aGUgQmFyY29kZVN5bWJvbG9neSBlbnVtLlxuICAgKiAnQ29kZTEyOCcgfCAnQ29kZTM5JyB8ICdDb2RlOTMnIHwgJ0lURicgfCAnSkFOOCcgfCAnSkFOMTMnIHwgJ05XNycgfCAnVVBDQScgfCAnVVBDRScgfFxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjh9XG4gICAqL1xuICBCYXJjb2RlU3ltYm9sb2d5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJhcmNvZGVXaWR0aCBvciB0aGUgQmFyY29kZVdpZHRoIGVudW0uXG4gICAqIE1vZGUxIHwgTW9kZTIgfCBNb2RlMyB8IE1vZGU0IHwgTW9kZTUgfCBNb2RlNiB8IE1vZGU3IHwgTW9kZTggfCBNb2RlOVxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMn1cbiAgICovXG4gIEJhcmNvZGVXaWR0aD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXG4gICAqIFVuZGVyLWJhciBjaGFyYWN0ZXJzLiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZFxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgaHJpOnRydWV9XG4gICAqL1xuICBocmk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCBvciB0aGUgYXBwZW5kTXVsdGlwbGUgY29tbWFuZCAoVW5pdHM6RG90cylcbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgaGVpZ2h0OjQwfVxuICAgKiBhcHBlbmRNdWx0aXBsZToge2FwcGVuZE11bHRpcGxlOid0ZXh0IHRvIHByaW50JywgaGVpZ2h0OjQwfVxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kIG9yIHRoZSBhcHBlbmRNdWx0aXBsZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIHdpZHRoOjU3Nn1cbiAgICogYXBwZW5kTXVsdGlwbGU6IHthcHBlbmRNdWx0aXBsZTondGV4dCB0byBwcmludCcsIHdpZHRoOjQwfVxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQsIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQsIG9yIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZCAoVW5pdHM6RG90cylcbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXG4gICAqIGFwcGVuZFFyQ29kZSBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cbiAgICovXG4gIGFic29sdXRlUG9zaXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQsIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQsIG9yIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZCAoVW5pdHM6RG90cylcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkFsaWdubWVudFBvc2l0aW9uIG9yIHRoZSBBbGlnbm1lbnRQb3NpdGlvbiBlbnVtLiAnTGVmdCcgfCAnQ2VudGVyJyB8ICdSaWdodCcuXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXG4gICAqIGFwcGVuZEJhcmNvZGUgRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxuICAgKiBhcHBlbmRRckNvZGUgRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXG4gICAqL1xuICBhbGlnbm1lbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTXVsdGlwbGU6XCIgICAkMTU2Ljk1XFxuXCIsIHdpZHRoOjIsIGhlaWdodDoyfS5cbiAgICovXG4gIGFwcGVuZE11bHRpcGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgbXVsdGlwbGUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJcbiAgICogRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOnRydWUsIHdpZHRoOjIsIGhlaWdodDoyfVxuICAgKiBEaXNhYmxlIEV4YW1wbGU6IHtlbmFibGVNdWx0aXBsZTpmYWxzZX1cbiAgICovXG4gIGVuYWJsZU11bHRpcGxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgUVIgY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBRckNvZGVNb2RlbCwgUXJDb2RlTGV2ZWwsIGNlbGwsIGFic29sdXRlUG9zaXRpb24sIGFsaWdubWVudC5cbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOH0uXG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kUXJDb2RlOlwie0JTdGFyXCIsIFFyQ29kZU1vZGVsOlwiTm8yXCIsIFFyQ29kZUxldmVsOlwiTFwiLCBjZWxsOiA4LCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OiB7YXBwZW5kUXJDb2RlOlwie0JTdGFyXCIsIFFyQ29kZU1vZGVsOlwiTm8yXCIsIFFyQ29kZUxldmVsOlwiTFwiLCBjZWxsOiA4LCBhbGlnbm1lbnQ6XCJDZW50ZXJcIiB9LlxuICAgKi9cbiAgYXBwZW5kUXJDb2RlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuUXJDb2RlTW9kZWwgb3IgdGhlIFFyQ29kZU1vZGVsIGVudW0uICdObzEnIHwgJ05vMicgRGVmYXVsdCAnTm8yJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBRckNvZGVNb2RlbDpRckNvZGVNb2RlbC5ObzF9XG4gICAqL1xuICBRckNvZGVNb2RlbD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZC5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULlFyQ29kZUxldmVsIG9yIHRoZSBRckNvZGVMZXZlbCBlbnVtLiAnTm8xJyB8ICdObzInLiBEZWZhdWx0ICdIJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBRckNvZGVMZXZlbDpRckNvZGVMZXZlbC5IfVxuICAgKi9cbiAgUXJDb2RlTGV2ZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuIFFSQ29kZSBDZWxsIHNpemUuIERlZmF1bHQgNC5cbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgY2VsbDo4fVxuICAgKi9cbiAgY2VsbD86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYml0bWFwIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhIHN0cmluZyBpbWFnZSBVUklcbiAgICogdGhpcyBjYW4gYmUgb2J0YWluZWQgdmlhIHRoZSBjYW1lcmEgb3IgcGhvdG8gbGlicmFyeSBvciBhcyBhIHN0YXRpYyByZXNvdXJjZSBzYXZlZCBvbiB0aGUgcGhvbmUgbWVtb3J5LlxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IGRpZmZ1c2lvbiwgd2lkdGgsIGJvdGhTY2FsZSwgcm90YXRpb24sIGFic29sdXRlUG9zaXRpb24sIGFsaWdubWVudC5cbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogdHJ1ZSwgd2lkdGg6NTc2LCBib3RoU2NhbGU6IHRydWV9XG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWJzb2x1dGVQb3NpdGlvbjogNDAgfS5cbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDoge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogdHJ1ZSwgd2lkdGg6NTc2LCBib3RoU2NhbGU6IHRydWUsIGFsaWdubWVudDpcIkNlbnRlclwiIH0uXG4gICAqL1xuICBhcHBlbmRCaXRtYXA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuIFJhbmRvbSBkaXRoZXI6IHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkLiBEZWZhdWx0IHRydWUuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IGZhbHNlIH1cbiAgICovXG4gIGRpZmZ1c2lvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuIEhlaWdodCBpcyBjaGFuZ2VkIGFjY29yZGluZyB0byB0aGUgY29udmVyc2lvbiByYXRlIG9mIHRoZSB3aWR0aCBwcm9wZXJ0eS5cbiAgICogdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWQuIERlZmF1bHQgdHJ1ZS5cbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGJvdGhTY2FsZTogdHJ1ZSB9XG4gICAqL1xuICBib3RoU2NhbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQml0bWFwQ29udmVydGVyUm90YXRpb24gb3IgdGhlIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIGVudW0uXG4gICAqICdOb3JtYWwnIHwgJ0xlZnQ5MCcgfCAnUmlnaHQ5MCcgfCAnUm90YXRlMTgwJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgcm90YXRpb246IEJpdG1hcENvbnZlcnRlclJvdGF0aW9uLkxlZnQ5MCB9XG4gICAqL1xuICByb3RhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWwgbnVtYmVyOiBFeGFtcGxlOiAxID0gTm8xLCAyID0gTm8yXG4gICAqL1xuICBvcGVuQ2FzaERyYXdlcj86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBFbXVsYXRpb24gY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEVtdWxhdGlvbiB7XG4gIC8qKiBtUE9QLCBTTS1MMjAwLCBTTS1MMzAwLCBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xuICBTdGFyUFJOVCA9ICdTdGFyUFJOVCcsXG4gIC8qKiBTTS1MMjAwLCBTTS1MMzAwICovXG4gIFN0YXJQUk5UTCA9ICdTdGFyUFJOVEwnLFxuICAvKiogRlZQMTAsIFRTUDY1MElJLCBUU1A3MDBJSSwgVFNQODAwSUkgKi9cbiAgU3RhckxpbmUgPSAnU3RhckxpbmUnLFxuICAvKiogVFNQMTAwICovXG4gIFN0YXJHcmFwaGljID0gJ1N0YXJHcmFwaGljJyxcbiAgLyoqIEJTQzEwICovXG4gIEVzY1BvcyA9ICdFc2NQb3MnLFxuICAvKiogU00tUzIxMGksIFNNLVMyMjBpLCBTTS1TMjMwaSwgU00tVDMwMGkvVDMwMCwgU00tVDQwMGkgKi9cbiAgRXNjUG9zTW9iaWxlID0gJ0VzY1Bvc01vYmlsZScsXG4gIC8qKiBTUDcwMCAqL1xuICBTdGFyRG90SW1wYWN0ID0gJ1N0YXJEb3RJbXBhY3QnLFxufVxuXG4vKipcbiAqIEVuY29kaW5nIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBFbmNvZGluZyB7XG4gIC8qKiBFbmdsaXNoICovXG4gIFVTQVNDSUkgPSAnVVMtQVNDSUknLFxuICAvKiogRnJlbmNoLCBHZXJtYW4sIFBvcnR1Z3Vlc2UsIFNwYW5pc2ggKi9cbiAgV2luZG93czEyNTIgPSAnV2luZG93cy0xMjUyJyxcbiAgLyoqIEphcGFuZXNlICovXG4gIFNoaWZ0SklTID0gJ1NoaWZ0LUpJUycsXG4gIC8qKiBSdXNzaWFuICovXG4gIFdpbmRvd3MxMjUxID0gJ1dpbmRvd3MtMTI1MScsXG4gIC8qKiBTaW1wbGlmaWVkIENoaW5lc2UgKi9cbiAgR0IyMzEyID0gJ0dCMjMxMicsXG4gIC8qKiBUcmFkaXRpb25hbCBDaGluZXNlICovXG4gIEJpZzUgPSAnQmlnNScsXG4gIC8qKiBVRlQ4ICovXG4gIFVURjggPSAnVVRGLTgnLFxufVxuXG4vKipcbiAqIENvZGVQYWdlVHlwZSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQ29kZVBhZ2VUeXBlIHtcbiAgQ1A3MzcgPSAnQ1A3MzcnLFxuICBDUDc3MiA9ICdDUDc3MicsXG4gIENQNzc0ID0gJ0NQNzc0JyxcbiAgQ1A4NTEgPSAnQ1A4NTEnLFxuICBDUDg1MiA9ICdDUDg1MicsXG4gIENQODU1ID0gJ0NQODU1JyxcbiAgQ1A4NTcgPSAnQ1A4NTcnLFxuICBDUDg1OCA9ICdDUDg1OCcsXG4gIENQODYwID0gJ0NQODYwJyxcbiAgQ1A4NjEgPSAnQ1A4NjEnLFxuICBDUDg2MiA9ICdDUDg2MicsXG4gIENQODYzID0gJ0NQODYzJyxcbiAgQ1A4NjQgPSAnQ1A4NjQnLFxuICBDUDg2NSA9ICdDUDg2NScsXG4gIENQODY5ID0gJ0NQODY5JyxcbiAgQ1A4NzQgPSAnQ1A4NzQnLFxuICBDUDkyOCA9ICdDUDkyOCcsXG4gIENQOTMyID0gJ0NQOTMyJyxcbiAgQ1A5OTkgPSAnQ1A5OTknLFxuICBDUDEwMDEgPSAnQ1AxMDAxJyxcbiAgQ1AxMjUwID0gJ0NQMTI1MCcsXG4gIENQMTI1MSA9ICdDUDEyNTEnLFxuICBDUDEyNTIgPSAnQ1AxMjUyJyxcbiAgQ1AyMDAxID0gJ0NQMjAwMScsXG4gIENQMzAwMSA9ICdDUDMwMDEnLFxuICBDUDMwMDIgPSAnQ1AzMDAyJyxcbiAgQ1AzMDExID0gJ0NQMzAxMScsXG4gIENQMzAxMiA9ICdDUDMwMTInLFxuICBDUDMwMjEgPSAnQ1AzMDIxJyxcbiAgQ1AzMDQxID0gJ0NQMzA0MScsXG4gIENQMzg0MCA9ICdDUDM4NDAnLFxuICBDUDM4NDEgPSAnQ1AzODQxJyxcbiAgQ1AzODQzID0gJ0NQMzg0MycsXG4gIENQMzg0NSA9ICdDUDM4NDUnLFxuICBDUDM4NDYgPSAnQ1AzODQ2JyxcbiAgQ1AzODQ3ID0gJ0NQMzg0NycsXG4gIENQMzg0OCA9ICdDUDM4NDgnLFxuICBVVEY4ID0gJ1VURjgnLFxuICBCbGFuayA9ICdCbGFuaycsXG59XG5cbi8qKlxuICogSW50ZXJuYXRpb25hbFR5cGUgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEludGVybmF0aW9uYWxUeXBlIHtcbiAgVUsgPSAnVUsnLFxuICBVU0EgPSAnVVNBJyxcbiAgRnJhbmNlID0gJ0ZyYW5jZScsXG4gIEdlcm1hbnkgPSAnR2VybWFueScsXG4gIERlbm1hcmsgPSAnRGVubWFyaycsXG4gIFN3ZWRlbiA9ICdTd2VkZW4nLFxuICBJdGFseSA9ICdJdGFseScsXG4gIFNwYWluID0gJ1NwYWluJyxcbiAgSmFwYW4gPSAnSmFwYW4nLFxuICBOb3J3YXkgPSAnTm9yd2F5JyxcbiAgRGVubWFyazIgPSAnRGVubWFyazInLFxuICBTcGFpbjIgPSAnU3BhaW4yJyxcbiAgTGF0aW5BbWVyaWNhID0gJ0xhdGluQW1lcmljYScsXG4gIEtvcmVhID0gJ0tvcmVhJyxcbiAgSXJlbGFuZCA9ICdJcmVsYW5kJyxcbiAgTGVnYWwgPSAnTGVnYWwnLFxufVxuXG4vKipcbiAqIEZvbnRTdHlsZVR5cGUgY29uc3RhbnRzLlxuICovXG5leHBvcnQgZW51bSBGb250U3R5bGVUeXBlIHtcbiAgLyoqIEZvbnQtQSAoMTIgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNyB4IDkgZm9udCAoaGFsZiBkb3RzKSAqL1xuICBBID0gJ0EnLFxuICAvKiogRm9udC1CICg5IHggMjQgZG90cykgLyBTcGVjaWZ5IDUgeCA5IGZvbnQgKDJQLTEpICovXG4gIEIgPSAnQicsXG59XG5cbi8qKlxuICogQ3V0UGFwZXJBY3Rpb24gY29uc3RhbnRzLlxuICovXG5leHBvcnQgZW51bSBDdXRQYXBlckFjdGlvbiB7XG4gIEZ1bGxDdXQgPSAnRnVsbEN1dCcsXG4gIEZ1bGxDdXRXaXRoRmVlZCA9ICdGdWxsQ3V0V2l0aEZlZWQnLFxuICBQYXJ0aWFsQ3V0ID0gJ1BhcnRpYWxDdXQnLFxuICBQYXJ0aWFsQ3V0V2l0aEZlZWQgPSAnUGFydGlhbEN1dFdpdGhGZWVkJyxcbn1cblxuLyoqXG4gKiBCbGFja01hcmtUeXBlIGNvbnN0YW50cy5cbiAqL1xuZXhwb3J0IGVudW0gQmxhY2tNYXJrVHlwZSB7XG4gIFZhbGlkID0gJ1ZhbGlkJyxcbiAgSW52YWxpZCA9ICdJbnZhbGlkJyxcbiAgVmFsaWRXaXRoRGV0ZWN0aW9uID0gJ1ZhbGlkV2l0aERldGVjdGlvbicsXG59XG5cbi8qKlxuICogTG9nb1NpemUgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIExvZ29TaXplIHtcbiAgTm9ybWFsID0gJ05vcm1hbCcsXG4gIERvdWJsZVdpZHRoID0gJ0RvdWJsZVdpZHRoJyxcbiAgRG91YmxlSGVpZ2h0ID0gJ0RvdWJsZUhlaWdodCcsXG4gIERvdWJsZVdpZHRoRG91YmxlSGVpZ2h0ID0gJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0Jyxcbn1cblxuLyoqXG4gKiBBbGlnbm1lbnRQb3NpdGlvbiBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQWxpZ25tZW50UG9zaXRpb24ge1xuICBMZWZ0ID0gJ0xlZnQnLFxuICBDZW50ZXIgPSAnQ2VudGVyJyxcbiAgUmlnaHQgPSAnUmlnaHQnLFxufVxuXG4vKipcbiAqIEJhcmNvZGVTeW1ib2xvZ3kgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEJhcmNvZGVTeW1ib2xvZ3kge1xuICBDb2RlMTI4ID0gJ0NvZGUxMjgnLFxuICBDb2RlMzkgPSAnQ29kZTM5JyxcbiAgQ29kZTkzID0gJ0NvZGU5MycsXG4gIElURiA9ICdJVEYnLFxuICBKQU44ID0gJ0pBTjgnLFxuICBKQU4xMyA9ICdKQU4xMycsXG4gIE5XNyA9ICdOVzcnLFxuICBVUENBID0gJ1VQQ0EnLFxuICBVUENFID0gJ1VQQ0UnLFxufVxuXG4vKipcbiAqIEJhcmNvZGVXaWR0aCBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQmFyY29kZVdpZHRoIHtcbiAgTW9kZTEgPSAnTW9kZTEnLFxuICBNb2RlMiA9ICdNb2RlMicsXG4gIE1vZGUzID0gJ01vZGUzJyxcbiAgTW9kZTQgPSAnTW9kZTQnLFxuICBNb2RlNSA9ICdNb2RlNScsXG4gIE1vZGU2ID0gJ01vZGU2JyxcbiAgTW9kZTcgPSAnTW9kZTcnLFxuICBNb2RlOCA9ICdNb2RlOCcsXG4gIE1vZGU5ID0gJ01vZGU5Jyxcbn1cblxuLyoqXG4gKiBRckNvZGVNb2RlbCBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gUXJDb2RlTW9kZWwge1xuICBObzEgPSAnTm8xJyxcbiAgTm8yID0gJ05vMicsXG59XG5cbi8qKlxuICogUXJDb2RlTGV2ZWwgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIFFyQ29kZUxldmVsIHtcbiAgSCA9ICdIJyxcbiAgTCA9ICdMJyxcbiAgTSA9ICdNJyxcbiAgUSA9ICdRJyxcbn1cblxuLyoqXG4gKiBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQml0bWFwQ29udmVydGVyUm90YXRpb24ge1xuICBOb3JtYWwgPSAnTm9ybWFsJyxcbiAgTGVmdDkwID0gJ0xlZnQ5MCcsXG4gIFJpZ2h0OTAgPSAnUmlnaHQ5MCcsXG4gIFJvdGF0ZTE4MCA9ICdSb3RhdGUxODAnLFxufVxuXG4vKipcbiAqIFB1c2ggYSBuZXcgUHJpbnRDb21tYW5kIG9iamVjdCB0byB0aGUgYXJyYXkgZm9yIGEgc2VwYXJhdGUgaW5zdHJ1Y3Rpb24gdG8gdGhlIHByaW50ZXIuIEV4YW1wbGUgW3thcHBlbmQ6XCJ0ZXh0XCJ9LCB7XCJvcGVuQ2FzaERyYXdlcjogMVwifV1cbiAqL1xuZXhwb3J0IHR5cGUgQ29tbWFuZHNBcnJheSA9IEFycmF5PFByaW50Q29tbWFuZD47XG5cbi8qKlxuICogQG5hbWUgU3RhclBSTlRcbiAqIEBkZXNjcmlwdGlvblxuICogSW9uaWMgTmF0aXZlIHdyYXBwZXJzIGZvciB0aGUgc3RhcnBybnQgY29yZG92YSBwbHVnaW4gZm9yIFN0YXIgTWljcm9uaWNzIEJsdWV0b290aC9MQU4gcHJpbnRlcnNcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RhclBSTlQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3Rhci1wcm50L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhcnBybnQ6IFN0YXJQUk5UKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zdGFycHJudC5wb3J0RGlzY292ZXJ5KCdBbGwnKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0YXJQUk5UJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhcnBybnQnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnc3RhcnBybnQnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXVjdGlmZXJhLWpvc2VkL3N0YXJwcm50JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXJQUk5UIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIEVtdWxhdGlvblxuICAgKi9cbiAgRW11bGF0aW9uID0ge1xuICAgIFN0YXJQUk5UOiAnU3RhclBSTlQnLFxuICAgIFN0YXJQUk5UTDogJ1N0YXJQUk5UTCcsXG4gICAgU3RhckxpbmU6ICdTdGFyTGluZScsXG4gICAgU3RhckdyYXBoaWM6ICdTdGFyR3JhcGhpYycsXG4gICAgRXNjUG9zOiAnRXNjUG9zJyxcbiAgICBFc2NQb3NNb2JpbGU6ICdFc2NQb3NNb2JpbGUnLFxuICAgIFN0YXJEb3RJbXBhY3Q6ICdTdGFyRG90SW1wYWN0JyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEVuY29kaW5nXG4gICAqL1xuICBFbmNvZGluZyA9IHtcbiAgICBVU0FTQ0lJOiAnVVMtQVNDSUknLFxuICAgIFdpbmRvd3MxMjUyOiAnV2luZG93cy0xMjUyJyxcbiAgICBTaGlmdEpJUzogJ1NoaWZ0LUpJUycsXG4gICAgV2luZG93czEyNTE6ICdXaW5kb3dzLTEyNTEnLFxuICAgIEdCMjMxMjogJ0dCMjMxMicsXG4gICAgQmlnNTogJ0JpZzUnLFxuICAgIFVURjg6ICdVVEYtOCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvZGVQYWdlVHlwZSBjb25zdGFudHNcbiAgICovXG4gIENvZGVQYWdlVHlwZSA9IHtcbiAgICBDUDczNzogJ0NQNzM3JyxcbiAgICBDUDc3MjogJ0NQNzcyJyxcbiAgICBDUDc3NDogJ0NQNzc0JyxcbiAgICBDUDg1MTogJ0NQODUxJyxcbiAgICBDUDg1MjogJ0NQODUyJyxcbiAgICBDUDg1NTogJ0NQODU1JyxcbiAgICBDUDg1NzogJ0NQODU3JyxcbiAgICBDUDg1ODogJ0NQODU4JyxcbiAgICBDUDg2MDogJ0NQODYwJyxcbiAgICBDUDg2MTogJ0NQODYxJyxcbiAgICBDUDg2MjogJ0NQODYyJyxcbiAgICBDUDg2MzogJ0NQODYzJyxcbiAgICBDUDg2NDogJ0NQODY0JyxcbiAgICBDUDg2NTogJ0NQODY1JyxcbiAgICBDUDg2OTogJ0NQODY5JyxcbiAgICBDUDg3NDogJ0NQODc0JyxcbiAgICBDUDkyODogJ0NQOTI4JyxcbiAgICBDUDkzMjogJ0NQOTMyJyxcbiAgICBDUDk5OTogJ0NQOTk5JyxcbiAgICBDUDEwMDE6ICdDUDEwMDEnLFxuICAgIENQMTI1MDogJ0NQMTI1MCcsXG4gICAgQ1AxMjUxOiAnQ1AxMjUxJyxcbiAgICBDUDEyNTI6ICdDUDEyNTInLFxuICAgIENQMjAwMTogJ0NQMjAwMScsXG4gICAgQ1AzMDAxOiAnQ1AzMDAxJyxcbiAgICBDUDMwMDI6ICdDUDMwMDInLFxuICAgIENQMzAxMTogJ0NQMzAxMScsXG4gICAgQ1AzMDEyOiAnQ1AzMDEyJyxcbiAgICBDUDMwMjE6ICdDUDMwMjEnLFxuICAgIENQMzA0MTogJ0NQMzA0MScsXG4gICAgQ1AzODQwOiAnQ1AzODQwJyxcbiAgICBDUDM4NDE6ICdDUDM4NDEnLFxuICAgIENQMzg0MzogJ0NQMzg0MycsXG4gICAgQ1AzODQ1OiAnQ1AzODQ1JyxcbiAgICBDUDM4NDY6ICdDUDM4NDYnLFxuICAgIENQMzg0NzogJ0NQMzg0NycsXG4gICAgQ1AzODQ4OiAnQ1AzODQ4JyxcbiAgICBVVEY4OiAnVVRGOCcsXG4gICAgQmxhbms6ICdCbGFuaycsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBJbnRlcm5hdGlvbmFsVHlwZVxuICAgKi9cbiAgSW50ZXJuYXRpb25hbFR5cGUgPSB7XG4gICAgVUs6ICdVSycsXG4gICAgVVNBOiAnVVNBJyxcbiAgICBGcmFuY2U6ICdGcmFuY2UnLFxuICAgIEdlcm1hbnk6ICdHZXJtYW55JyxcbiAgICBEZW5tYXJrOiAnRGVubWFyaycsXG4gICAgU3dlZGVuOiAnU3dlZGVuJyxcbiAgICBJdGFseTogJ0l0YWx5JyxcbiAgICBTcGFpbjogJ1NwYWluJyxcbiAgICBKYXBhbjogJ0phcGFuJyxcbiAgICBOb3J3YXk6ICdOb3J3YXknLFxuICAgIERlbm1hcmsyOiAnRGVubWFyazInLFxuICAgIFNwYWluMjogJ1NwYWluMicsXG4gICAgTGF0aW5BbWVyaWNhOiAnTGF0aW5BbWVyaWNhJyxcbiAgICBLb3JlYTogJ0tvcmVhJyxcbiAgICBJcmVsYW5kOiAnSXJlbGFuZCcsXG4gICAgTGVnYWw6ICdMZWdhbCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBGb250U3R5bGVUeXBlXG4gICAqL1xuICBGb250U3R5bGVUeXBlID0ge1xuICAgIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cbiAgICBBOiAnQScsXG4gICAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xuICAgIEI6ICdCJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEN1dFBhcGVyQWN0aW9uXG4gICAqL1xuICBDdXRQYXBlckFjdGlvbiA9IHtcbiAgICBGdWxsQ3V0OiAnRnVsbEN1dCcsXG4gICAgRnVsbEN1dFdpdGhGZWVkOiAnRnVsbEN1dFdpdGhGZWVkJyxcbiAgICBQYXJ0aWFsQ3V0OiAnUGFydGlhbEN1dCcsXG4gICAgUGFydGlhbEN1dFdpdGhGZWVkOiAnUGFydGlhbEN1dFdpdGhGZWVkJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJsYWNrTWFya1R5cGVcbiAgICovXG4gIEJsYWNrTWFya1R5cGUgPSB7XG4gICAgVmFsaWQ6ICdWYWxpZCcsXG4gICAgSW52YWxpZDogJ0ludmFsaWQnLFxuICAgIFZhbGlkV2l0aERldGVjdGlvbjogJ1ZhbGlkV2l0aERldGVjdGlvbicsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBBbGlnbm1lbnRQb3NpdGlvblxuICAgKi9cbiAgQWxpZ25tZW50UG9zaXRpb24gPSB7XG4gICAgTGVmdDogJ0xlZnQnLFxuICAgIENlbnRlcjogJ0NlbnRlcicsXG4gICAgUmlnaHQ6ICdSaWdodCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBMb2dvU2l6ZVxuICAgKi9cbiAgTG9nb1NpemUgPSB7XG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcbiAgICBEb3VibGVXaWR0aDogJ0RvdWJsZVdpZHRoJyxcbiAgICBEb3VibGVIZWlnaHQ6ICdEb3VibGVIZWlnaHQnLFxuICAgIERvdWJsZVdpZHRoRG91YmxlSGVpZ2h0OiAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmFyY29kZVN5bWJvbG9neVxuICAgKi9cbiAgQmFyY29kZVN5bWJvbG9neSA9IHtcbiAgICBDb2RlMTI4OiAnQ29kZTEyOCcsXG4gICAgQ29kZTM5OiAnQ29kZTM5JyxcbiAgICBDb2RlOTM6ICdDb2RlOTMnLFxuICAgIElURjogJ0lURicsXG4gICAgSkFOODogJ0pBTjgnLFxuICAgIEpBTjEzOiAnSkFOMTMnLFxuICAgIE5XNzogJ05XNycsXG4gICAgVVBDQTogJ1VQQ0EnLFxuICAgIFVQQ0U6ICdVUENFJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVXaWR0aFxuICAgKi9cbiAgQmFyY29kZVdpZHRoID0ge1xuICAgIE1vZGUxOiAnTW9kZTEnLFxuICAgIE1vZGUyOiAnTW9kZTInLFxuICAgIE1vZGUzOiAnTW9kZTMnLFxuICAgIE1vZGU0OiAnTW9kZTQnLFxuICAgIE1vZGU1OiAnTW9kZTUnLFxuICAgIE1vZGU2OiAnTW9kZTYnLFxuICAgIE1vZGU3OiAnTW9kZTcnLFxuICAgIE1vZGU4OiAnTW9kZTgnLFxuICAgIE1vZGU5OiAnTW9kZTknLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgUXJDb2RlTW9kZWxcbiAgICovXG4gIFFyQ29kZU1vZGVsID0ge1xuICAgIE5vMTogJ05vMScsXG4gICAgTm8yOiAnTm8yJyxcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIFFyQ29kZUxldmVsXG4gICAqL1xuICBRckNvZGVMZXZlbCA9IHtcbiAgICBIOiAnSCcsXG4gICAgTDogJ0wnLFxuICAgIE06ICdNJyxcbiAgICBROiAnUScsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvblxuICAgKi9cbiAgQml0bWFwQ29udmVydGVyUm90YXRpb24gPSB7XG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcbiAgICBMZWZ0OTA6ICdMZWZ0OTAnLFxuICAgIFJpZ2h0OTA6ICdSaWdodDkwJyxcbiAgICBSb3RhdGUxODA6ICdSb3RhdGUxODAnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5kIGF2YWlsYWJsZSBwcmludGVyc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgSW50ZXJmYWNlIFR5cGU6IEFsbCwgTEFOLCBCbHVldG9vdGgsIFVTQlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQcmludGVycz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiBwcmludGVyc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwb3J0RGlzY292ZXJ5KHR5cGU6IHN0cmluZyk6IFByb21pc2U8UHJpbnRlcnM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHJldHVybnMge1Byb21pc2U8UHJpbnRlclN0YXR1cz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgUHJpbnRlclN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tTdGF0dXMocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZyk6IFByb21pc2U8UHJpbnRlclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludHMgcGxhaW4gdGV4dFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtQcmludE9ian0gcHJpbnRPYmogIHRleHQ6c3RyaW5nLCBjdXRSZWNlaXB0Pzpib29sZWFuLCBvcGVuQ2FzaERyYXdlcj86Ym9vbGVhblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmludFJhd1RleHQocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgcHJpbnRPYmo6IFByaW50T2JqKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHRleHQgaW50byBhIGJpdG1hcCBpbWFnZSBhbmQgc2VuZHMgaXQgdG8gdGhlIHByaW50ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge1Jhc3Rlck9ian0gcmFzdGVyT2JqICB0ZXh0OnN0cmluZywgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW4sIGZvbnRTaXplOm51bWJlciwgcGFwZXJXaWR0aDpudW1iZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRSYXN0ZXJSZWNlaXB0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIHJhc3Rlck9iajogUmFzdGVyT2JqKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBpbWFnZSBmcm9tIGEgc3RyaW5nIFVSSSBhbmQgY29udmVydHMgaXQgdG8gYml0bWFwIHRvIHNlbmQgaXQgdG8gdGhlIHByaW50ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEBwYXJhbSB7SW1hZ2VPYmp9IGltYWdlT2JqICB1cmk6c3RyaW5nLCBwYXBlcldpZHRoPzpudW1iZXIsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50SW1hZ2UocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZywgaW1hZ2VPYmo6IEltYWdlT2JqKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2VuZHMgYW4gYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIG9wZW5lZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuQ2FzaERyYXdlcihwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gQXJyYXkgb2YgY29tbWFuZHMgdG8gdGhlIGNvbW1hbmQgYnVmZmVyIHVzaW5nIHRoZSBBbmRyb2lkIElDb21tYW5kQnVpbGRlckludGVyZmFjZSBvciBpT1MgSVNDQkJ1aWxkZXJJbnRlcmZhY2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0ge0NvbW1hbmRzQXJyYXl9IGNvbW1hbmRzQXJyYXkgIGVhY2ggY29tbWFuZCBpbiB0aGUgYXJyYXkgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mIHRoZSBQcmludENvbW1hbmQgb2JqZWN0LiBFeGFtcGxlIFt7YXBwZW5kOlwidGV4dFwifSwge1wib3BlbkNhc2hEcmF3ZXI6IDFcIn1dXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGNvbW1hbmRzQXJyYXk6IENvbW1hbmRzQXJyYXkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIGNvbm5lY3QgdG8gdGhlIHByaW50ZXIsIGtlZXAgdGhlIGNvbm5lY3Rpb24gYWxpdmUgYW5kIHJlY2VpdmUgc3RhdHVzIHVwZGF0ZXMgdGhyb3VnaCBhbiBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBwcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcGFyYW0gaGFzQmFyY29kZVJlYWRlclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBTdWNjZXNzISBpZiBjb25uZWN0ZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcbiAgfSlcbiAgY29ubmVjdChwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nLCBoYXNCYXJjb2RlUmVhZGVyOiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGRldmljZSBzdGF0dXMgZXZlbnRzLiBPbmx5IGZpcmVzIHdoZW4gYSBwcmludGVyIGlzIGNvbm5uZWN0ZWQgdGhyb3VnaCB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IGRhdGFUeXBlOiBwcmludGVyT25saW5lLCBwcmludGVyT2ZmbGluZSwgcHJpbnRlckltcG9zc2libGUsIHByaW50ZXJQYXBlckVtcHR5LCBwcmludGVyUGFwZXJOZWFyRW1wdHksIHByaW50ZXJQYXBlclJlYWR5LCBwcmludGVyQ292ZXJPcGVuLCBwcmludGVyQ292ZXJDbG9zZSwgY2FzaERyYXdlck9wZW4sIGNhc2hEcmF3ZXJDbG9zZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3N0YXJQcm50RGF0YScsXG4gIH0pXG4gIGdldFN0YXR1cygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzY29ubmVjdCAoY2xvc2UgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIHBlcmlwaGVyYWxzKSwgdGhpcyBpcyB1c2VmdWwgdG8gYXZvaWQga2VlcGluZyBhbGl2ZSBhIGNvbm5lY3Rpb24gd2hlbiBub3QgaW4gdGhlIGFwcCB0byBzYXZlIGRldmljZSBiYXR0ZXJ5XG4gICAqIChlbmVyZ3kgY29uc3VtcHRpb24pLiBZb3Ugc2hvdWxkIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBhcHAgaXMgcGF1c2VkIG9yIGNsb3NlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==