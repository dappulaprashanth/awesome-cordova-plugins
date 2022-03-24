'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var BarcodeScanner = /** @class */ (function (_super) {
    tslib.__extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeScanner.prototype.scan = function (options) { return core.cordova(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.pluginName = "dynamsoft-barcode-scanner";
    BarcodeScanner.plugin = "cordova-plugin-dbr";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/Dynamsoft/cordova-plugin-dbr";
    BarcodeScanner.install = "";
    BarcodeScanner.installVariables = [];
    BarcodeScanner.platforms = ["Android", "iOS"];
    BarcodeScanner.decorators = [
        { type: core$1.Injectable }
    ];
    return BarcodeScanner;
}(core.AwesomeCordovaNativePlugin));

exports.BarcodeScanner = BarcodeScanner;
