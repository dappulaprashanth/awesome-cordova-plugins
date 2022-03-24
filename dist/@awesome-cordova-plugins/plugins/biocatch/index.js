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
var BioCatchOriginal = /** @class */ (function (_super) {
    __extends(BioCatchOriginal, _super);
    function BioCatchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatchOriginal.prototype.start = function (customerSessionID, wupUrl, publicKey) { return cordova(this, "start", {}, arguments); };
    BioCatchOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    BioCatchOriginal.prototype.resume = function () { return cordova(this, "resume", {}, arguments); };
    BioCatchOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BioCatchOriginal.prototype.resetSession = function () { return cordova(this, "resetSession", {}, arguments); };
    BioCatchOriginal.prototype.changeContext = function (contextName) { return cordova(this, "changeContext", {}, arguments); };
    BioCatchOriginal.prototype.updateCustomerSessionID = function (customerSessionID) { return cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatchOriginal.pluginName = "BioCatch";
    BioCatchOriginal.plugin = "cordova-plugin-biocatch";
    BioCatchOriginal.pluginRef = "BioCatch";
    BioCatchOriginal.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatchOriginal.platforms = ["iOS", "Android"];
    return BioCatchOriginal;
}(AwesomeCordovaNativePlugin));
var BioCatch = new BioCatchOriginal();
export { BioCatch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvY2F0Y2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEI5RCw0QkFBMEI7Ozs7SUFVdEQsd0JBQUssYUFBQyxpQkFBZ0MsRUFBRSxNQUFjLEVBQUUsU0FBd0I7SUFVaEYsd0JBQUs7SUFVTCx5QkFBTTtJQVVOLHVCQUFJO0lBVUosK0JBQVk7SUFXWixnQ0FBYSxhQUFDLFdBQW1CO0lBV2pDLDBDQUF1QixhQUFDLGlCQUFnQzs7Ozs7O21CQXZHMUQ7RUErQjhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBCaW9DYXRjaFxuICogQGRlc2NyaXB0aW9uXG4gKiBCaW9DYXRjaCBTREsgQ29yZG92YSBzdXBwb3J0XG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJpb0NhdGNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Jpb2NhdGNoJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiaW9jYXRjaDogQmlvQ2F0Y2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJpb2NhdGNoLnN0YXJ0KCdjdXN0b21lci1zZXNzaW9uLTEnLCAnaHR0cDovL2V4YW1wbGUuY29tJywgJ3NvbWUtcHVibGljLWtleScpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmlvQ2F0Y2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iaW9jYXRjaCcsXG4gIHBsdWdpblJlZjogJ0Jpb0NhdGNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy9jYXJsb3Nfb3JlbGxhbmEvaW9uaWMtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJpb0NhdGNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnQgYSBzZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSBjdXN0b21lclNlc3Npb25JRCB7U3RyaW5nfSBDdXN0b21lciBzZXNzaW9uIGlkXG4gICAqIEBwYXJhbSB3dXBVcmwge1N0cmluZ30gV1VQIHNlcnZlciBVUkxcbiAgICogQHBhcmFtIHB1YmxpY0tleSB7U3RyaW5nfSBQdWJsaWMgS2V5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydChjdXN0b21lclNlc3Npb25JRDogc3RyaW5nIHwgbnVsbCwgd3VwVXJsOiBzdHJpbmcsIHB1YmxpY0tleTogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZSB0aGUgc2Vzc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3VtZSB0aGUgc2Vzc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzZXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc2Vzc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRTZXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHNlc3Npb24gY29udGV4dFxuICAgKlxuICAgKiBAcGFyYW0gY29udGV4dE5hbWUge1N0cmluZ30gQ29udGV4dCBuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGFuZ2VDb250ZXh0KGNvbnRleHROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjdXN0b21lciBzZXNzaW9uIElEXG4gICAqXG4gICAqIEBwYXJhbSBjdXN0b21lclNlc3Npb25JRCB7U3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlQ3VzdG9tZXJTZXNzaW9uSUQoY3VzdG9tZXJTZXNzaW9uSUQ6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==