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
var WebSocketServerOriginal = /** @class */ (function (_super) {
    __extends(WebSocketServerOriginal, _super);
    function WebSocketServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebSocketServerOriginal.prototype.getInterfaces = function () { return cordova(this, "getInterfaces", {}, arguments); };
    WebSocketServerOriginal.prototype.start = function (port, options) { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    WebSocketServerOriginal.prototype.onFunctionToObservable = function (fnName) {
        return new Observable(function (observer) {
            var id = window.cordova.plugins.wsserver[fnName](observer.next.bind(observer), observer.error.bind(observer));
            return function () { return window.cordova.plugins.wsserver.removeCallback(id); };
        });
    };
    /**
     * Watches for new messages
     *
     * @returns {Observable<WebSocketMessage>}
     */
    WebSocketServerOriginal.prototype.watchMessage = function () {
        return this.onFunctionToObservable('onMessage');
    };
    /**
     * Watches for new opened connections
     *
     * @returns {Observable<WebSocketConnection>}
     */
    WebSocketServerOriginal.prototype.watchOpen = function () {
        return this.onFunctionToObservable('onOpen');
    };
    /**
     * Watches for closed connections
     *
     * @returns {Observable<WebSocketClose>}
     */
    WebSocketServerOriginal.prototype.watchClose = function () {
        return this.onFunctionToObservable('onClose');
    };
    /**
     * Watches for any websocket failures
     *
     * @returns {Observable<WebSocketFailure>}
     */
    WebSocketServerOriginal.prototype.watchFailure = function () {
        return this.onFunctionToObservable('onFailure');
    };
    WebSocketServerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebSocketServerOriginal.prototype.send = function (conn, msg) { return cordova(this, "send", {}, arguments); };
    WebSocketServerOriginal.prototype.close = function (conn, code, reason) { return cordova(this, "close", {}, arguments); };
    WebSocketServerOriginal.pluginName = "WebSocketServer";
    WebSocketServerOriginal.plugin = "cordova-plugin-websocket-server";
    WebSocketServerOriginal.pluginRef = "cordova.plugins.wsserver";
    WebSocketServerOriginal.repo = "https://github.com/becvert/cordova-plugin-websocket-server";
    WebSocketServerOriginal.platforms = ["Android", "iOS"];
    return WebSocketServerOriginal;
}(AwesomeCordovaNativePlugin));
var WebSocketServer = new WebSocketServerOriginal();
export { WebSocketServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLXNvY2tldC1zZXJ2ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyR0csbUNBQTBCOzs7O0lBTzdELHVDQUFhO0lBZWIsK0JBQUssYUFBQyxJQUFZLEVBQUUsT0FBeUI7SUFJckMsZ0RBQXNCLEdBQTlCLFVBQWtDLE1BQWM7UUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBSSxVQUFDLFFBQVE7WUFDaEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFaEgsT0FBTyxjQUFNLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsb0NBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRRCw4QkFBSTtJQVlKLDhCQUFJLGFBQUMsSUFBeUIsRUFBRSxHQUFXO0lBYTNDLCtCQUFLLGFBQUMsSUFBeUIsRUFBRSxJQUFZLEVBQUUsTUFBYzs7Ozs7OzBCQWxOL0Q7RUE2R3FDLDBCQUEwQjtTQUFsRCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRJbnRlcmZhY2VzIHtcbiAgW2tleTogc3RyaW5nXTogV2ViU29ja2V0SW50ZXJmYWNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldEludGVyZmFjZSB7XG4gIGlwdjRBZGRyZXNzZXM6IHN0cmluZ1tdO1xuICBpcHY2QWRkcmVzc2VzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRPcHRpb25zIHtcbiAgb3JpZ2lucz86IHN0cmluZ1tdO1xuICBwcm90b2NvbHM/OiBzdHJpbmdbXTtcbiAgdGNwTm9EZWxheT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0SWRlbnRpZmllciB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzIHtcbiAgYWRkcjogc3RyaW5nO1xuICBwb3J0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0RmFpbHVyZSBleHRlbmRzIFdlYlNvY2tldFNlcnZlckRldGFpbHMge1xuICByZWFzb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRNZXNzYWdlIHtcbiAgY29ubjogV2ViU29ja2V0Q29ubmVjdGlvbjtcbiAgbXNnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0Q2xvc2Uge1xuICBjb25uOiBXZWJTb2NrZXRDb25uZWN0aW9uO1xuICBjb2RlOiBudW1iZXI7XG4gIHJlYXNvbjogc3RyaW5nO1xuICB3YXNDbGVhbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRDb25uZWN0aW9uIGV4dGVuZHMgV2ViU29ja2V0SWRlbnRpZmllciB7XG4gIHJlbW90ZUF0dHI6IHN0cmluZztcbiAgc3RhdGU6ICdvcGVuJyB8ICdjbG9zZWQnO1xuICBodHRwRmllbGRzOiBIdHRwRmllbGRzO1xuICByZXNvdXJjZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBGaWVsZHMge1xuICAnQWNjZXB0LUVuY29kaW5nJzogc3RyaW5nO1xuICAnQWNjZXB0LUxhbmd1YWdlJzogc3RyaW5nO1xuICAnQ2FjaGUtQ29udHJvbCc6IHN0cmluZztcbiAgQ29ubmVjdGlvbjogc3RyaW5nO1xuICBIb3N0OiBzdHJpbmc7XG4gIE9yaWdpbjogc3RyaW5nO1xuICBQcmFnbWE6IHN0cmluZztcbiAgJ1NlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyc6IHN0cmluZztcbiAgJ1NlYy1XZWJTb2NrZXQtS2V5Jzogc3RyaW5nO1xuICAnU2VjLVdlYlNvY2tldC1WZXJzaW9uJzogc3RyaW5nO1xuICBVcGdyYWRlOiBzdHJpbmc7XG4gICdVc2VyLUFnZW50Jzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFdlYlNvY2tldCBTZXJ2ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBydW4gYSBzaW5nbGUsIGxpZ2h0d2VpZ2h0LCBiYXJlYm9uZSBXZWJTb2NrZXQgU2VydmVyLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJTb2NrZXRTZXJ2ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2ViLXNvY2tldC1zZXJ2ZXInO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd3NzZXJ2ZXI6IFdlYlNvY2tldFNlcnZlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gc3RhcnQgd2Vic29ja2V0IHNlcnZlclxuICogdGhpcy53c3NlcnZlci5zdGFydCg4ODg4LCB7fSkuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogc2VydmVyID0+IGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gJHtzZXJ2ZXIuYWRkcn06JHtzZXJ2ZXIucG9ydH1gKSxcbiAqICAgZXJyb3I6IGVycm9yID0+IGNvbnNvbGUubG9nKGBVbmV4cGVjdGVkIGVycm9yYCwgZXJyb3IpO1xuICogfSk7XG4gKlxuICogLy8gd2F0Y2ggZm9yIGFueSBtZXNzYWdlc1xuICogdGhpcy53c3NlcnZlci53YXRjaE1lc3NhZ2UoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAqICAgY29uc29sZS5sb2coYFJlY2VpdmVkIG1lc3NhZ2UgJHtyZXN1bHQubXNnfSBmcm9tICR7cmVzdWx0LmNvbm4udXVpZH1gKTtcbiAqIH0pO1xuICpcbiAqIC8vIHNlbmQgbWVzc2FnZSB0byBjb25uZWN0aW9uIHdpdGggc3BlY2lmaWVkIHV1aWRcbiAqIHRoaXMud3NzZXJ2ZXIuc2VuZCh7IHV1aWQ6ICc4ZTdjNGY0OC1kZTY4LTRiNmYtOGZjYS0xMDY3YTM1Mzk2OGQnIH0sICdIZWxsbyBXb3JsZCcpO1xuICpcbiAqIC8vIHN0b3Agd2Vic29ja2V0IHNlcnZlclxuICogdGhpcy53c3NlcnZlci5zdG9wKCkudGhlbihzZXJ2ZXIgPT4ge1xuICogICBjb25zb2xlLmxvZyhgU3RvcCBsaXN0ZW5pbmcgb24gJHtzZXJ2ZXIuYWRkcn06JHtzZXJ2ZXIucG9ydH1gKTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYlNvY2tldFNlcnZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYnNvY2tldC1zZXJ2ZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMud3NzZXJ2ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2JlY3ZlcnQvY29yZG92YS1wbHVnaW4td2Vic29ja2V0LXNlcnZlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRTZXJ2ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhpcyBkZXZpY2UncyBpbnRlcmZhY2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFdlYlNvY2tldEludGVyZmFjZXM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnRlcmZhY2VzKCk6IFByb21pc2U8V2ViU29ja2V0SW50ZXJmYWNlcz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB3ZWJzb2NrZXQgc2VydmVyXG4gICAqXG4gICAqIEBwYXJhbSBwb3J0IHtudW1iZXJ9IExvY2FsIHBvcnQgb24gd2hpY2ggdGhlIHNlcnZpY2UgcnVucy4gKDAgbWVhbnMgYW55IGZyZWUgcG9ydClcbiAgICogQHBhcmFtIG9wdGlvbnMge1dlYlNvY2tldE9wdGlvbnN9IEFkZGl0aW9uYWwgb3B0aW9ucyBmb3Igd2Vic29ja2V0XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+fSBSZXR1cm5zIE9ic2VydmFibGUgd2hlcmUgYWxsIGdlbmVyaWMgZXJyb3IgY2FuIGJlIGNhdGNoZWQgKG1vc3RseSBKU09ORXhjZXB0aW9ucylcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wJyxcbiAgfSlcbiAgc3RhcnQocG9ydDogbnVtYmVyLCBvcHRpb25zOiBXZWJTb2NrZXRPcHRpb25zKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZ1bmN0aW9uVG9PYnNlcnZhYmxlPFQ+KGZuTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChvYnNlcnZlcikgPT4ge1xuICAgICAgY29uc3QgaWQgPSB3aW5kb3cuY29yZG92YS5wbHVnaW5zLndzc2VydmVyW2ZuTmFtZV0ob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSwgb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNvcmRvdmEucGx1Z2lucy53c3NlcnZlci5yZW1vdmVDYWxsYmFjayhpZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2hlcyBmb3IgbmV3IG1lc3NhZ2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldE1lc3NhZ2U+fVxuICAgKi9cbiAgd2F0Y2hNZXNzYWdlKCk6IE9ic2VydmFibGU8V2ViU29ja2V0TWVzc2FnZT4ge1xuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uTWVzc2FnZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgZm9yIG5ldyBvcGVuZWQgY29ubmVjdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8V2ViU29ja2V0Q29ubmVjdGlvbj59XG4gICAqL1xuICB3YXRjaE9wZW4oKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRDb25uZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMub25GdW5jdGlvblRvT2JzZXJ2YWJsZSgnb25PcGVuJyk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2hlcyBmb3IgY2xvc2VkIGNvbm5lY3Rpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldENsb3NlPn1cbiAgICovXG4gIHdhdGNoQ2xvc2UoKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRDbG9zZT4ge1xuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uQ2xvc2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGZvciBhbnkgd2Vic29ja2V0IGZhaWx1cmVzXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldEZhaWx1cmU+fVxuICAgKi9cbiAgd2F0Y2hGYWlsdXJlKCk6IE9ic2VydmFibGU8V2ViU29ja2V0RmFpbHVyZT4ge1xuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uRmFpbHVyZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agd2Vic29ja2V0IHNlcnZlciBhbmQgY2xvc2VzIGFsbCBjb25uZWN0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcCgpOiBQcm9taXNlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBNZXNzYWdlIHRvIGEgY29ubmVjdGVkIGRldmljZVxuICAgKlxuICAgKiBAcGFyYW0gY29ubiB7V2ViU29ja2V0SWRlbnRpZmllcn0gQ29ubmVjdGlvbiB0byBzZW5kIG1lc3NhZ2UgdG9cbiAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmQoY29ubjogV2ViU29ja2V0SWRlbnRpZmllciwgbXNnOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2Ugc3BlY2lmaWMgY29ubmVjdGlvbiB1c2luZyB1dWlkXG4gICAqXG4gICAqIEBwYXJhbSBjb25uIHtXZWJTb2NrZXRJZGVudGlmaWVyfSBDb25uZWN0aW9uIHRvIGNsb3NlXG4gICAqIEBwYXJhbSBjb2RlIHtudW1iZXJ9IENsb3NlIGNvZGUsIGRldGVybWluZXMgaWYgaXQgd2FzIGNsZWFuXG4gICAqIEBwYXJhbSByZWFzb24ge3N0cmluZ30gUmVhc29uIGZvciBjbG9zaW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbG9zZShjb25uOiBXZWJTb2NrZXRJZGVudGlmaWVyLCBjb2RlOiBudW1iZXIsIHJlYXNvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=