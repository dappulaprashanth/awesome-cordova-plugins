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
import { AwesomeCordovaNativePlugin, checkAvailability, cordovaInstance, getPromise } from '@awesome-cordova-plugins/core';
var SecureStorageObject = /** @class */ (function () {
    function SecureStorageObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageObject.prototype.get = function (key) { return cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.set = function (key, value) { return cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.remove = function (key) { return cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.keys = function () { return cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.clear = function () { return cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.secureDevice = function () { return cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageObject;
}());
export { SecureStorageObject };
var SecureStorageOriginal = /** @class */ (function (_super) {
    __extends(SecureStorageOriginal, _super);
    function SecureStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageOriginal.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorageOriginal.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, function () { return rej(new SecureStorageObject(instance)); }, store);
                });
            }
        })();
    };
    SecureStorageOriginal.pluginName = "SecureStorage";
    SecureStorageOriginal.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageOriginal.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return SecureStorageOriginal;
}(AwesomeCordovaNativePlugin));
var SecureStorage = new SecureStorageOriginal();
export { SecureStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2VjdXJlLXN0b3JhZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sa0VBS0wsVUFBVSxFQUNYLE1BQU0sK0JBQStCLENBQUM7O0lBTXJDLDZCQUFvQixlQUFvQjtRQUFwQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztJQUFHLENBQUM7SUFXNUMsaUNBQUcsYUFBQyxHQUFXO0lBY2YsaUNBQUcsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQWE5QixvQ0FBTSxhQUFDLEdBQVc7SUFZbEIsa0NBQUk7SUFZSixtQ0FBSztJQVVMLDBDQUFZOzhCQXJGZDs7OztJQStJbUMsaUNBQTBCOzs7O0lBUTNELDhCQUFNLGFBQUMsS0FBYTs7O21EQUFnQztnQkFDbEQsT0FBTyxVQUFVLENBQXNCLFVBQUMsR0FBYSxFQUFFLEdBQWE7b0JBQ2xFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDOUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLEVBQzVDLGNBQU0sT0FBQSxHQUFHLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxFQUM1QyxLQUFLLENBQ04sQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7Ozs7Ozt3QkEvSkg7RUErSW1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG4gIGdldFByb21pc2UsXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWN1cmVTdG9yYWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cblxuICAvKipcbiAgICogR2V0cyBhIHN0b3JlZCBpdGVtXG4gICAqXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIGEgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNpbmdsZSBzdG9yZWQgaXRlbVxuICAgKlxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5IHRoYXQgd2FzIHJlbW92ZWRcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCByZWZlcmVuY2VzIGZyb20gdGhlIHN0b3JhZ2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFycmF5IG9mIGtleXMgc3RvcmFnZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIHJlZmVyZW5jZXMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQnJpbmdzIHVwIHRoZSBzY3JlZW4tbG9jayBzZXR0aW5nc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNlY3VyZURldmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIFNlY3VyZSBTdG9yYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGdldHMsIHNldHMgYW5kIHJlbW92ZXMga2V5LHZhbHVlIHBhaXJzIGZyb20gYSBkZXZpY2UncyBzZWN1cmUgc3RvcmFnZS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNlY3VyZS1zdG9yYWdlYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgU2VjdXJlIFN0b3JhZ2UgZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0NyeXBoby9jb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZSkuXG4gKlxuICogVGhlIGJyb3dzZXIgcGxhdGZvcm0gaXMgc3VwcG9ydGVkIGFzIGEgbW9jayBvbmx5LiBLZXkvdmFsdWVzIGFyZSBzdG9yZWQgdW5lbmNyeXB0ZWQgaW4gbG9jYWxTdG9yYWdlLlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2VjdXJlU3RvcmFnZSwgU2VjdXJlU3RvcmFnZU9iamVjdCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zZWN1cmUtc3RvcmFnZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VjdXJlU3RvcmFnZTogU2VjdXJlU3RvcmFnZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zZWN1cmVTdG9yYWdlLmNyZWF0ZSgnbXlfc3RvcmVfbmFtZScpXG4gKiAgIC50aGVuKChzdG9yYWdlOiBTZWN1cmVTdG9yYWdlT2JqZWN0KSA9PiB7XG4gKlxuICogICAgICBzdG9yYWdlLmdldCgna2V5JylcbiAqICAgICAgICAudGhlbihcbiAqICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICAgICAgKTtcbiAqXG4gKiAgICAgIHN0b3JhZ2Uuc2V0KCdrZXknLCAndmFsdWUnKVxuICogICAgICAgIC50aGVuKFxuICogICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgICAgICk7XG4gKlxuICogICAgICBzdG9yYWdlLnJlbW92ZSgna2V5JylcbiAqICAgICAgLnRoZW4oXG4gKiAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgICAgICk7XG4gKlxuICogICB9KTtcbiAqXG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogU2VjdXJlU3RvcmFnZU9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NlY3VyZVN0b3JhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZS1lY2hvJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNlY3VyZVN0b3JhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21pYnJpdG83MDcvY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UtZWNobycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VjdXJlU3RvcmFnZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuYW1lc3BhY2VkIHN0b3JhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjcmVhdGUoc3RvcmU6IHN0cmluZyk6IFByb21pc2U8U2VjdXJlU3RvcmFnZU9iamVjdD4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFNlY3VyZVN0b3JhZ2VPYmplY3Q+KChyZXM6IEZ1bmN0aW9uLCByZWo6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoU2VjdXJlU3RvcmFnZS5nZXRQbHVnaW4oKSkoXG4gICAgICAgICgpID0+IHJlcyhuZXcgU2VjdXJlU3RvcmFnZU9iamVjdChpbnN0YW5jZSkpLFxuICAgICAgICAoKSA9PiByZWoobmV3IFNlY3VyZVN0b3JhZ2VPYmplY3QoaW5zdGFuY2UpKSxcbiAgICAgICAgc3RvcmVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==