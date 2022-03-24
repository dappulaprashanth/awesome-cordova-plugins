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
import { Observable } from 'rxjs';
var WebServerOriginal = /** @class */ (function (_super) {
    __extends(WebServerOriginal, _super);
    function WebServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServerOriginal.prototype.start = function (port) { return cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebServerOriginal.prototype.onRequest = function () { return cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServerOriginal.prototype.sendResponse = function (requestId, responseObject) { return cordova(this, "sendResponse", {}, arguments); };
    WebServerOriginal.pluginName = "WebServer";
    WebServerOriginal.plugin = "cordova-plugin-webserver2";
    WebServerOriginal.pluginRef = "window.webserver";
    WebServerOriginal.repo = "https://github.com/nguyenthanh1995/cordova-plugin-webserver2.git";
    WebServerOriginal.platforms = ["Android", "iOS"];
    return WebServerOriginal;
}(AwesomeCordovaNativePlugin));
var WebServer = new WebServerOriginal();
export { WebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLXNlcnZlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZESCw2QkFBMEI7Ozs7SUFTdkQseUJBQUssYUFBQyxJQUFhO0lBUW5CLHdCQUFJO0lBY0osNkJBQVM7SUFZVCxnQ0FBWSxhQUFDLFNBQWlCLEVBQUUsY0FBd0I7Ozs7OztvQkExRzFEO0VBK0QrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2Uge1xuICBzdGF0dXM6IG51bWJlcjtcbiAgYm9keT86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0IHtcbiAgcmVxdWVzdElkOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgaGVhZGVyczogc3RyaW5nO1xuICBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnIHwgJ1BVVCcgfCAnUEFUQ0gnIHwgJ0RFTEVURSc7XG4gIHBhdGg6IHN0cmluZztcbiAgcXVlcnk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBXZWIgU2VydmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc3RhcnQgYSBsb2NhbCBkeW5hbWljIGNvbnRlbnQgd2ViIHNlcnZlciBmb3IgYW5kcm9pZCBhbmQgaU9TIGRldmljZXMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYlNlcnZlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy93ZWItc2VydmVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViU2VydmVyOiBXZWJTZXJ2ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMud2ViU2VydmVyLm9uUmVxdWVzdCgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAqICAgY29uc29sZS5sb2coZGF0YSk7XG4gKiAgIGNvbnN0IHJlczogUmVzcG9uc2UgPSB7XG4gKiAgICAgc3RhdHVzOiAyMDAsXG4gKiAgICAgYm9keTogJycsXG4gKiAgICAgaGVhZGVyczoge1xuICogICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXG4gKiAgICAgfVxuICogICB9O1xuICpcbiAqICAgdGhpcy53ZWJTZXJ2ZXIuc2VuZFJlc3BvbnNlKGRhdGEucmVxdWVzdElkLCByZXMpXG4gKiAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiB9KTtcbiAqXG4gKiB0aGlzLndlYlNlcnZlci5zdGFydCg4MClcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogUmVzcG9uc2VcbiAqIFJlcXVlc3RcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJTZXJ2ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJzZXJ2ZXIyJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LndlYnNlcnZlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbmd1eWVudGhhbmgxOTk1L2NvcmRvdmEtcGx1Z2luLXdlYnNlcnZlcjIuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYlNlcnZlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgc3RhcnQgeW91ciB3ZWJzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBwb3J0IHtudW1iZXJ9IFBvcnQgbnVtYmVyIChkZWZhdWx0IHRvIDgwODApXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzdGFydChwb3J0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBzdG9wIHlvdXIgd2Vic2VydmVyLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHN0cmVhbXMgSFRUUCByZXF1ZXN0cyB0byBhbiBvYnNlcnZlci5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8UmVxdWVzdD59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byByZXNvbHZlIGFzIGEgUmVxdWVzdCBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcCcsXG4gIH0pXG4gIG9uUmVxdWVzdCgpOiBPYnNlcnZhYmxlPFJlcXVlc3Q+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2VuZHMgYSByZXNwb25zZSB0byBhIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0SWQge3N0cmluZ30gUmVxdWVzdCBJRCB0byByZXNwb25kIHRvXG4gICAqIEBwYXJhbSByZXNwb25zZU9iamVjdCB7UmVzcG9uc2V9IFJlc3BvbnNlIG9iamVjdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlc3BvbnNlKHJlcXVlc3RJZDogc3RyaW5nLCByZXNwb25zZU9iamVjdDogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19