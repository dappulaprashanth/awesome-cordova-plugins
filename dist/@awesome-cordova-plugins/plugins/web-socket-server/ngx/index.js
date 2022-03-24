import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var WebSocketServer = /** @class */ (function (_super) {
    __extends(WebSocketServer, _super);
    function WebSocketServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebSocketServer.prototype.getInterfaces = function () { return cordova(this, "getInterfaces", {}, arguments); };
    WebSocketServer.prototype.start = function (port, options) { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    WebSocketServer.prototype.onFunctionToObservable = function (fnName) {
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
    WebSocketServer.prototype.watchMessage = function () {
        return this.onFunctionToObservable('onMessage');
    };
    /**
     * Watches for new opened connections
     *
     * @returns {Observable<WebSocketConnection>}
     */
    WebSocketServer.prototype.watchOpen = function () {
        return this.onFunctionToObservable('onOpen');
    };
    /**
     * Watches for closed connections
     *
     * @returns {Observable<WebSocketClose>}
     */
    WebSocketServer.prototype.watchClose = function () {
        return this.onFunctionToObservable('onClose');
    };
    /**
     * Watches for any websocket failures
     *
     * @returns {Observable<WebSocketFailure>}
     */
    WebSocketServer.prototype.watchFailure = function () {
        return this.onFunctionToObservable('onFailure');
    };
    WebSocketServer.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebSocketServer.prototype.send = function (conn, msg) { return cordova(this, "send", {}, arguments); };
    WebSocketServer.prototype.close = function (conn, code, reason) { return cordova(this, "close", {}, arguments); };
    WebSocketServer.pluginName = "WebSocketServer";
    WebSocketServer.plugin = "cordova-plugin-websocket-server";
    WebSocketServer.pluginRef = "cordova.plugins.wsserver";
    WebSocketServer.repo = "https://github.com/becvert/cordova-plugin-websocket-server";
    WebSocketServer.platforms = ["Android", "iOS"];
    WebSocketServer.decorators = [
        { type: Injectable }
    ];
    return WebSocketServer;
}(AwesomeCordovaNativePlugin));
export { WebSocketServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLXNvY2tldC1zZXJ2ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyR0csbUNBQTBCOzs7O0lBTzdELHVDQUFhO0lBZWIsK0JBQUssYUFBQyxJQUFZLEVBQUUsT0FBeUI7SUFJckMsZ0RBQXNCLEdBQTlCLFVBQWtDLE1BQWM7UUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBSSxVQUFDLFFBQVE7WUFDaEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFaEgsT0FBTyxjQUFNLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsb0NBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRRCw4QkFBSTtJQVlKLDhCQUFJLGFBQUMsSUFBeUIsRUFBRSxHQUFXO0lBYTNDLCtCQUFLLGFBQUMsSUFBeUIsRUFBRSxJQUFZLEVBQUUsTUFBYzs7Ozs7OztnQkF0RzlELFVBQVU7OzBCQTVHWDtFQTZHcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldEludGVyZmFjZXMge1xuICBba2V5OiBzdHJpbmddOiBXZWJTb2NrZXRJbnRlcmZhY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0SW50ZXJmYWNlIHtcbiAgaXB2NEFkZHJlc3Nlczogc3RyaW5nW107XG4gIGlwdjZBZGRyZXNzZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldE9wdGlvbnMge1xuICBvcmlnaW5zPzogc3RyaW5nW107XG4gIHByb3RvY29scz86IHN0cmluZ1tdO1xuICB0Y3BOb0RlbGF5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRJZGVudGlmaWVyIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldFNlcnZlckRldGFpbHMge1xuICBhZGRyOiBzdHJpbmc7XG4gIHBvcnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRGYWlsdXJlIGV4dGVuZHMgV2ViU29ja2V0U2VydmVyRGV0YWlscyB7XG4gIHJlYXNvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldE1lc3NhZ2Uge1xuICBjb25uOiBXZWJTb2NrZXRDb25uZWN0aW9uO1xuICBtc2c6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRDbG9zZSB7XG4gIGNvbm46IFdlYlNvY2tldENvbm5lY3Rpb247XG4gIGNvZGU6IG51bWJlcjtcbiAgcmVhc29uOiBzdHJpbmc7XG4gIHdhc0NsZWFuOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldENvbm5lY3Rpb24gZXh0ZW5kcyBXZWJTb2NrZXRJZGVudGlmaWVyIHtcbiAgcmVtb3RlQXR0cjogc3RyaW5nO1xuICBzdGF0ZTogJ29wZW4nIHwgJ2Nsb3NlZCc7XG4gIGh0dHBGaWVsZHM6IEh0dHBGaWVsZHM7XG4gIHJlc291cmNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cEZpZWxkcyB7XG4gICdBY2NlcHQtRW5jb2RpbmcnOiBzdHJpbmc7XG4gICdBY2NlcHQtTGFuZ3VhZ2UnOiBzdHJpbmc7XG4gICdDYWNoZS1Db250cm9sJzogc3RyaW5nO1xuICBDb25uZWN0aW9uOiBzdHJpbmc7XG4gIEhvc3Q6IHN0cmluZztcbiAgT3JpZ2luOiBzdHJpbmc7XG4gIFByYWdtYTogc3RyaW5nO1xuICAnU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zJzogc3RyaW5nO1xuICAnU2VjLVdlYlNvY2tldC1LZXknOiBzdHJpbmc7XG4gICdTZWMtV2ViU29ja2V0LVZlcnNpb24nOiBzdHJpbmc7XG4gIFVwZ3JhZGU6IHN0cmluZztcbiAgJ1VzZXItQWdlbnQnOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgV2ViU29ja2V0IFNlcnZlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJ1biBhIHNpbmdsZSwgbGlnaHR3ZWlnaHQsIGJhcmVib25lIFdlYlNvY2tldCBTZXJ2ZXIuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYlNvY2tldFNlcnZlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy93ZWItc29ja2V0LXNlcnZlcic7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3c3NlcnZlcjogV2ViU29ja2V0U2VydmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBzdGFydCB3ZWJzb2NrZXQgc2VydmVyXG4gKiB0aGlzLndzc2VydmVyLnN0YXJ0KDg4ODgsIHt9KS5zdWJzY3JpYmUoe1xuICogICBuZXh0OiBzZXJ2ZXIgPT4gY29uc29sZS5sb2coYExpc3RlbmluZyBvbiAke3NlcnZlci5hZGRyfToke3NlcnZlci5wb3J0fWApLFxuICogICBlcnJvcjogZXJyb3IgPT4gY29uc29sZS5sb2coYFVuZXhwZWN0ZWQgZXJyb3JgLCBlcnJvcik7XG4gKiB9KTtcbiAqXG4gKiAvLyB3YXRjaCBmb3IgYW55IG1lc3NhZ2VzXG4gKiB0aGlzLndzc2VydmVyLndhdGNoTWVzc2FnZSgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICogICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgbWVzc2FnZSAke3Jlc3VsdC5tc2d9IGZyb20gJHtyZXN1bHQuY29ubi51dWlkfWApO1xuICogfSk7XG4gKlxuICogLy8gc2VuZCBtZXNzYWdlIHRvIGNvbm5lY3Rpb24gd2l0aCBzcGVjaWZpZWQgdXVpZFxuICogdGhpcy53c3NlcnZlci5zZW5kKHsgdXVpZDogJzhlN2M0ZjQ4LWRlNjgtNGI2Zi04ZmNhLTEwNjdhMzUzOTY4ZCcgfSwgJ0hlbGxvIFdvcmxkJyk7XG4gKlxuICogLy8gc3RvcCB3ZWJzb2NrZXQgc2VydmVyXG4gKiB0aGlzLndzc2VydmVyLnN0b3AoKS50aGVuKHNlcnZlciA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGBTdG9wIGxpc3RlbmluZyBvbiAke3NlcnZlci5hZGRyfToke3NlcnZlci5wb3J0fWApO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViU29ja2V0U2VydmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2Vic29ja2V0LXNlcnZlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy53c3NlcnZlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYmVjdmVydC9jb3Jkb3ZhLXBsdWdpbi13ZWJzb2NrZXQtc2VydmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldFNlcnZlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybiB0aGlzIGRldmljZSdzIGludGVyZmFjZXNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8V2ViU29ja2V0SW50ZXJmYWNlcz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEludGVyZmFjZXMoKTogUHJvbWlzZTxXZWJTb2NrZXRJbnRlcmZhY2VzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHdlYnNvY2tldCBzZXJ2ZXJcbiAgICpcbiAgICogQHBhcmFtIHBvcnQge251bWJlcn0gTG9jYWwgcG9ydCBvbiB3aGljaCB0aGUgc2VydmljZSBydW5zLiAoMCBtZWFucyBhbnkgZnJlZSBwb3J0KVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7V2ViU29ja2V0T3B0aW9uc30gQWRkaXRpb25hbCBvcHRpb25zIGZvciB3ZWJzb2NrZXRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8V2ViU29ja2V0U2VydmVyRGV0YWlscz59IFJldHVybnMgT2JzZXJ2YWJsZSB3aGVyZSBhbGwgZ2VuZXJpYyBlcnJvciBjYW4gYmUgY2F0Y2hlZCAobW9zdGx5IEpTT05FeGNlcHRpb25zKVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxuICB9KVxuICBzdGFydChwb3J0OiBudW1iZXIsIG9wdGlvbnM6IFdlYlNvY2tldE9wdGlvbnMpOiBPYnNlcnZhYmxlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIG9uRnVuY3Rpb25Ub09ic2VydmFibGU8VD4oZm5OYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKG9ic2VydmVyKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMud3NzZXJ2ZXJbZm5OYW1lXShvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLndzc2VydmVyLnJlbW92ZUNhbGxiYWNrKGlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGZvciBuZXcgbWVzc2FnZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8V2ViU29ja2V0TWVzc2FnZT59XG4gICAqL1xuICB3YXRjaE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRNZXNzYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMub25GdW5jdGlvblRvT2JzZXJ2YWJsZSgnb25NZXNzYWdlJyk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2hlcyBmb3IgbmV3IG9wZW5lZCBjb25uZWN0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxXZWJTb2NrZXRDb25uZWN0aW9uPn1cbiAgICovXG4gIHdhdGNoT3BlbigpOiBPYnNlcnZhYmxlPFdlYlNvY2tldENvbm5lY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5vbkZ1bmN0aW9uVG9PYnNlcnZhYmxlKCdvbk9wZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGZvciBjbG9zZWQgY29ubmVjdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8V2ViU29ja2V0Q2xvc2U+fVxuICAgKi9cbiAgd2F0Y2hDbG9zZSgpOiBPYnNlcnZhYmxlPFdlYlNvY2tldENsb3NlPiB7XG4gICAgcmV0dXJuIHRoaXMub25GdW5jdGlvblRvT2JzZXJ2YWJsZSgnb25DbG9zZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgZm9yIGFueSB3ZWJzb2NrZXQgZmFpbHVyZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8V2ViU29ja2V0RmFpbHVyZT59XG4gICAqL1xuICB3YXRjaEZhaWx1cmUoKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRGYWlsdXJlPiB7XG4gICAgcmV0dXJuIHRoaXMub25GdW5jdGlvblRvT2JzZXJ2YWJsZSgnb25GYWlsdXJlJyk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB3ZWJzb2NrZXQgc2VydmVyIGFuZCBjbG9zZXMgYWxsIGNvbm5lY3Rpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8V2ViU29ja2V0U2VydmVyRGV0YWlscz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIE1lc3NhZ2UgdG8gYSBjb25uZWN0ZWQgZGV2aWNlXG4gICAqXG4gICAqIEBwYXJhbSBjb25uIHtXZWJTb2NrZXRJZGVudGlmaWVyfSBDb25uZWN0aW9uIHRvIHNlbmQgbWVzc2FnZSB0b1xuICAgKiBAcGFyYW0gbXNnIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZChjb25uOiBXZWJTb2NrZXRJZGVudGlmaWVyLCBtc2c6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBzcGVjaWZpYyBjb25uZWN0aW9uIHVzaW5nIHV1aWRcbiAgICpcbiAgICogQHBhcmFtIGNvbm4ge1dlYlNvY2tldElkZW50aWZpZXJ9IENvbm5lY3Rpb24gdG8gY2xvc2VcbiAgICogQHBhcmFtIGNvZGUge251bWJlcn0gQ2xvc2UgY29kZSwgZGV0ZXJtaW5lcyBpZiBpdCB3YXMgY2xlYW5cbiAgICogQHBhcmFtIHJlYXNvbiB7c3RyaW5nfSBSZWFzb24gZm9yIGNsb3NpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsb3NlKGNvbm46IFdlYlNvY2tldElkZW50aWZpZXIsIGNvZGU6IG51bWJlciwgcmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==