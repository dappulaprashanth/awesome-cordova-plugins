import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeScanner.prototype.scan = function (options) { return cordova(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.pluginName = "dynamsoft-barcode-scanner";
    BarcodeScanner.plugin = "cordova-plugin-dbr";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/Dynamsoft/cordova-plugin-dbr";
    BarcodeScanner.install = "";
    BarcodeScanner.installVariables = [];
    BarcodeScanner.platforms = ["Android", "iOS"];
    BarcodeScanner.decorators = [
        { type: Injectable }
    ];
    return BarcodeScanner;
}(AwesomeCordovaNativePlugin));
export { BarcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZHluYW1zb2Z0LWJhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDOztJQW9HSCxrQ0FBMEI7Ozs7SUFVNUQsNkJBQUksYUFBQyxPQUErQjs7Ozs7Ozs7O2dCQVhyQyxVQUFVOzt5QkEzR1g7RUE0R29DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogUHJlZmVyIGZyb250IGNhbWVyYS4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsZSBhbmltYXRpb25zLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGV4dC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHByb21wdD86IHN0cmluZztcblxuICAvKipcbiAgICogRm9ybWF0cyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBEZWZhdWx0cyB0byBhbGwgZm9ybWF0cyBleGNlcHQgYFBERl80MTdgIGFuZCBgUlNTX0VYUEFOREVEYC5cbiAgICovXG4gIGZvcm1hdHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWVudGF0aW9uLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LiBDYW4gYmUgc2V0IHRvIGBwb3J0cmFpdGAgb3IgYGxhbmRzY2FwZWAuIERlZmF1bHRzIHRvIG5vbmUgc28gdGhlIHVzZXIgY2FuIHJvdGF0ZSB0aGUgcGhvbmUgYW5kIHBpY2sgYW4gb3JpZW50YXRpb24uXG4gICAqL1xuICBvcmllbnRhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoIHdpdGggdGhlIHRvcmNoIHN3aXRjaGVkIG9uIChpZiBhdmFpbGFibGUpLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgdG9yY2hPbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNhdmUgc2NhbiBoaXN0b3J5LiBEZWZhdWx0cyB0byBgZmFsc2VgLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgc2F2ZUhpc3Rvcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIExvbmcga2V5IGZvciBEeW5hbXNvZnQgQmFyY29kZSBSZWFkZXJcbiAgICovXG4gIGR5bmFtc29mdGxpY2Vuc2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xuICBmb3JtYXQ6IHN0cmluZztcbiAgY2FuY2VsbGVkOiBib29sZWFuO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgZHluYW1zb2Z0LWJhcmNvZGUtc2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgQmFyY29kZSBTY2FubmVyIFBsdWdpbiBvcGVucyBhIGNhbWVyYSB2aWV3IGFuZCBhdXRvbWF0aWNhbGx5IHNjYW5zIGEgYmFyY29kZSwgcmV0dXJuaW5nIHRoZSBkYXRhIGJhY2sgdG8geW91LlxuICogUmVxdWlyZXMgdGhpcyBDb3Jkb3ZhIHBsdWdpbjogW0JhcmNvZGVTY2FubmVyIHBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL0R5bmFtc29mdC9jb3Jkb3ZhLXBsdWdpbi1kYnIvKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZHluYW1zb2Z0LWJhcmNvZGUtc2Nhbm5lcic7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3QgcmVzdWx0cyA9IGF3YWl0IEJhcmNvZGVTY2FubmVyLnNjYW4oe1wiZHluYW1zb2Z0bGljZW5zZVwiOlwibGljZW5zZVwifSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYXJjb2RlU2Nhbm5lck9wdGlvbnNcbiAqIEJhcmNvZGVTY2FuUmVzdWx0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnZHluYW1zb2Z0LWJhcmNvZGUtc2Nhbm5lcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRicicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYXJjb2RlU2Nhbm5lcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRHluYW1zb2Z0L2NvcmRvdmEtcGx1Z2luLWRicicsXG4gIGluc3RhbGw6ICcnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhcmNvZGVTY2FubmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzY2FuKG9wdGlvbnM/OiBCYXJjb2RlU2Nhbm5lck9wdGlvbnMpOiBQcm9taXNlPEJhcmNvZGVTY2FuUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=