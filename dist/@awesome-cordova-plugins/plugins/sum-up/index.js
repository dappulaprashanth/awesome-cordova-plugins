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
var SumUpKeys = /** @class */ (function () {
    function SumUpKeys() {
        this.accessToken = '';
        this.affiliateKey = '';
    }
    return SumUpKeys;
}());
export { SumUpKeys };
var SumUpOriginal = /** @class */ (function (_super) {
    __extends(SumUpOriginal, _super);
    function SumUpOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumUpOriginal.prototype.login = function (sumUpKeys) { return cordova(this, "login", {}, arguments); };
    SumUpOriginal.prototype.auth = function (accessToken) { return cordova(this, "auth", {}, arguments); };
    SumUpOriginal.prototype.getSettings = function () { return cordova(this, "getSettings", {}, arguments); };
    SumUpOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    SumUpOriginal.prototype.isLoggedIn = function () { return cordova(this, "isLoggedIn", {}, arguments); };
    SumUpOriginal.prototype.prepare = function () { return cordova(this, "prepare", {}, arguments); };
    SumUpOriginal.prototype.closeConnection = function () { return cordova(this, "closeConnection", {}, arguments); };
    SumUpOriginal.prototype.setup = function () { return cordova(this, "setup", {}, arguments); };
    SumUpOriginal.prototype.test = function () { return cordova(this, "test", {}, arguments); };
    SumUpOriginal.prototype.pay = function (amount, title, currencyCode) { return cordova(this, "pay", {}, arguments); };
    SumUpOriginal.pluginName = "SumUp";
    SumUpOriginal.plugin = "cordova-sumup-plugin";
    SumUpOriginal.pluginRef = "window.SumUp";
    SumUpOriginal.repo = "https://github.com/mariusbackes/cordova-plugin-sumup";
    SumUpOriginal.install = "cordova plugin add cordova-sumup-plugin --variable SUMUP_API_KEY=INSERT_YOUR_KEY";
    SumUpOriginal.installVariables = ["SUMUP_API_KEY"];
    SumUpOriginal.platforms = ["Android", "iOS"];
    return SumUpOriginal;
}(AwesomeCordovaNativePlugin));
var SumUp = new SumUpOriginal();
export { SumUp };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3VtLXVwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStEMUY7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO29CQW5FSDs7OztJQWlJMkIseUJBQTBCOzs7O0lBVW5ELHFCQUFLLGFBQUMsU0FBb0I7SUFXMUIsb0JBQUksYUFBQyxXQUFtQjtJQVV4QiwyQkFBVztJQVVYLHNCQUFNO0lBVU4sMEJBQVU7SUFXVix1QkFBTztJQVVQLCtCQUFlO0lBV2QscUJBQUs7SUFVTixvQkFBSTtJQWNKLG1CQUFHLGFBQUMsTUFBYyxFQUFFLEtBQWMsRUFBRSxZQUFxQjs7Ozs7Ozs7Z0JBNU8zRDtFQWlJMkIsMEJBQTBCO1NBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1bVVwUmVzcG9uc2Uge1xuICAvLyBDb2RlIHRvIGlkZW50aWZ5IHRoZSBtZXNzYWdlXG4gIGNvZGU6IG51bWJlcjtcblxuICAvLyBNZXNzYWdlIGZvciByZWFkYWJsZSB1c2FnZVxuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VtVXBMb2dpblN0YXR1cyB7XG4gIC8vIENvZGUsIHRvIGNoZWNrIGlmIGFuIGVycm9yIG9jY3VyZWRcbiAgY29kZTogbnVtYmVyO1xuXG4gIC8vIEJvb2xlYW5kIHZhbHVlIHdoZXRoZXIgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIG9yIG5vdFxuICBpc0xvZ2dlZEluOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1bVVwUGF5bWVudCB7XG4gIC8vIFVuaXF1ZSB0cmFuc2FjdGlvbiBjb2RlXG4gIHRyYW5zYWN0aW9uX2NvZGU6IHN0cmluZztcblxuICAvLyBDYXJkIHR5cGUgLT4gbGlrZSBNQUVTVFJPXG4gIGNhcmRfdHlwZTogc3RyaW5nO1xuXG4gIC8vIE1lcmNoYW50IGNvZGUgZm9yIGlkZW50aWZpY2F0aW9uXG4gIG1lcmNoYW50X2NvZGU6IHN0cmluZztcblxuICAvLyBBbW91bnQgb2YgdGhlIHBheW1lbnRcbiAgYW1vdW50OiBudW1iZXI7XG5cbiAgLy8gVGlwIGFtb3VudCAtPiBkZWZhdWx0IDBcbiAgdGlwX2Ftb3VudDogbnVtYmVyO1xuXG4gIC8vIFZhdCBhbW91bnQgLT4gZGVmYXVsdCAwXG4gIHZhdF9hbW91bnQ6IG51bWJlcjtcblxuICAvLyBDdXJyZW5jeSBjb2RlIC0+IGxpa2UgRVVSXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG5cbiAgLy8gUGF5bWVudCBzdGF0dXMgLT4gc3VjY2Vzc2Z1bCBvciBlcnJvclxuICBzdGF0dXM6IHN0cmluZztcblxuICAvLyBUeXBlIC0+IENhcmQgb3IgbmZjXG4gIHBheW1lbnRfdHlwZTogc3RyaW5nO1xuXG4gIC8vIEVudHJ5IG1vZGUgLT4gTGlrZSBjaGlwIG9yIGNvbnRhY3RsZXNzXG4gIGVudHJ5X21vZGU6IHN0cmluZztcblxuICAvLyBOdW1iZXIgb2YgaW5zdGFsbG1lbnRzIC0+IGRlZmF1bHQgMVxuICBpbnN0YWxsbWVudHM6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdW1VcEtleXMge1xuICAvLyBUaGUgZ2VuZXJhdGVkIGFjY2Vzc1Rva2VuLCB0byBhdXRvbWF0ZSB0aGUgbG9naW4gcHJvY2Vzc1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXG4gIC8vIGFmZmlsaWF0ZUtleSBjYW4gYWxzbyBiZSBzZXQgaW4gdGhlIG9iamVjdCwgaWYgaXQgaGFzIHRvIGJlIGNoYW5nZWQgb24gcnVudGltZVxuICBhZmZpbGlhdGVLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gJyc7XG4gICAgdGhpcy5hZmZpbGlhdGVLZXkgPSAnJztcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIFN1bVVwXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsdWdpbiB0byBjb21tdW5pY2F0ZSB3aXRoIGEgU3VtVXAgcGF5bWVudCB0ZXJtaW5hbFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdW1VcCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zdW0tdXAnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN1bVVwOiBTdW1VcCkgeyB9XG4gKlxuICogY29uc3Qgc3VtVXBLZXlzOiBTdW1VcEtleXMgPSBuZXcgU3VtVXBLZXlzKCk7XG4gKiBzdW1VcEtleXMuYWZmaWxpYXRlS2V5ID0gJ1lPVVJfQVBJX0tFWSc7IC8vIGlmIG5vdCBwcm92aWRlZCBpbiBpbnN0YWxsYXRpb25cbiAqIHN1bVVwS2V5cy5hY2Nlc3NUb2tlbiA9ICdZT1VSX0FDQ0VTU19UT0tFTic7XG4gKlxuICogdGhpcy5zdW1VcC5sb2dpbihzdW1VcEtleXMpXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiAgdGhpcy5zdW1VcC5hdXRoKCdZT1VSX0FDQ0VTU19UT0tFTicpXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiAgdGhpcy5zdW1VcC5nZXRTZXR0aW5ncygpXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiAgdGhpcy5zdW1VcC5sb2dvdXQoKVxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogIHRoaXMuc3VtVXAuaXNMb2dnZWRJbigpXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwTG9naW5TdGF0dXMpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwTG9naW5TdGF0dXMpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiAgdGhpcy5zdW1VcC5wcmVwYXJlKClcbiAqICAgLnRoZW4oKHJlczogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc3VtVXAuY2xvc2VDb25uZWN0aW9uKClcbiAqICAgLnRoZW4oKHJlczogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc3VtVXAucGF5KDEwLjAsICdUcmFuc2FjdGlvbiB0aXRsZScsICdFVVInKVxuICogICAudGhlbigocmVzOiBTdW1VcFBheW1lbnQpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUGF5bWVudCkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N1bVVwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1zdW11cC1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuU3VtVXAnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcml1c2JhY2tlcy9jb3Jkb3ZhLXBsdWdpbi1zdW11cCcsXG4gIGluc3RhbGw6ICdjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1zdW11cC1wbHVnaW4gLS12YXJpYWJsZSBTVU1VUF9BUElfS0VZPUlOU0VSVF9ZT1VSX0tFWScsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnU1VNVVBfQVBJX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtVXAgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2dpbiBhIHVzZXIgd2l0aCBhbiBvcHRpb25hbCBhY2Nlc3MgdG9rZW4uXG4gICAqIElmIHRoZSBhY2Nlc3MgdG9rZW4gaXMgcHJvdmlkZWQgYW5kIHZhbGlkLCB0aGUgdXNlciBpcyBsb2dnZWQgaW4gYXV0bWF0aWNhbGx5LlxuICAgKiBPdGhlcndpc2UgdGhlIHVzZXIgaGFzIHRvIHR5cGUgaW4gdGhlIGNyZWRlbnRpYWxzXG4gICAqXG4gICAqIEBwYXJhbSBzdW1VcEtleXMge1N1bVVwS2V5c31cbiAgICogQHJldHVybnMge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHN1bVVwS2V5czogU3VtVXBLZXlzKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0ZXMgdGhlIGFjY291bnQgd2l0aCB0aGUgZ2l2ZW4gYWNjZXNzIHRva2VuLiBQYXJhbWV0ZXIgYWNjZXNzVG9rZW4gaXMgcmVxdWlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXV0aChhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgbmV3IHdpbmRvdyB3aXRoIHRoZSBhbGwgYWNjb3VudCBzZXR0aW5ncyBvZiBhbiBsb2dnZWQgaW4gdXNlci5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNldHRpbmdzKCk6IFByb21pc2U8U3VtVXBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgYSB1c2VyIGZyb20gdGhlIGFjY291bnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBvciBub3QgYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGZpZWxkIGlzTG9nZ2VkSW4gd2hpY2ggaXMgYSBib29sZWFuIHZhbHVlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNMb2dnZWRJbigpOiBQcm9taXNlPFN1bVVwTG9naW5TdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZXMgdGhlIHRlcm1pbmFsIGZvciBhIHBheW1lbnQuIENoZWNrcyB3aGV0aGVyIHRoZSBDYXJkUmVhZGVyIGlzIHJlYWR5IHRvIHRyYW5zbWl0IGFuZFxuICAgKiBpZiBhbiBpbnN0YW5jZSBvZiB0aGUgQ2FyZFJlYWRlck1hbmFnZXIgaXMgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlcGFyZSgpOiBQcm9taXNlPFN1bVVwUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gY2xvc2UgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIGNhcmQgdGVybWluYWwuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbG9zZUNvbm5lY3Rpb24oKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgc2V0dXAgdGhlIFN1bVVQIFNESy5cbiAgICogVGhpcyBhY3Rpb24gaXMgcmVxdWlyZWQgYmVmb3JlIHVzaW5nIG90aGVyIGZ1bmN0aW9ucy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XG4gICAqL1xuICAgQENvcmRvdmEoKVxuICAgc2V0dXAoKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgIHJldHVybjtcbiAgIH1cblxuICAvKipcbiAgICogVGVzdCB0aGUgU3VtVXAgaW50ZWdyYXRpb24gdXNpbmcgU0RLIHRlc3RzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdGVzdCgpOiBQcm9taXNlPFN1bVVwUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBuYXRpdmUgU3VtVXAgd2luZG93IHRvIHByb2NlZWQgYSBwYXltZW50LiBQYXJhbWV0ZXIgYW1vdW50IGFuZCBjdXJyZW5jeWNvZGUgYXJlIHJlcXVpcmVkLlxuICAgKiBJZiB0aGUgUGF5bWVudCB3YXMgc3VjY2Vzc2Z1bCBpdCByZXR1cm5zIGFuIFN1bVVwUGF5bWVudCBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGF5bWVudC5cbiAgICpcbiAgICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ31cbiAgICogQHBhcmFtIGN1cnJlbmN5Q29kZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdW1VcFJlc3BvbnNlPn0gUmV0dXJuIGEgU3VtVXBSZXNwb25zZSBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF5KGFtb3VudDogbnVtYmVyLCB0aXRsZT86IHN0cmluZywgY3VycmVuY3lDb2RlPzogc3RyaW5nKTogUHJvbWlzZTxTdW1VcFBheW1lbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==