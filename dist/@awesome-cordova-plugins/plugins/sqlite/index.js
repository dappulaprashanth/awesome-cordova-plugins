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
import { AwesomeCordovaNativePlugin, cordova, checkAvailability, cordovaInstance, instancePropertyGet, instancePropertySet } from '@awesome-cordova-plugins/core';
var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return cordovaInstance(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return cordovaInstance(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return cordovaInstance(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return cordovaInstance(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return cordovaInstance(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return cordovaInstance(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return cordovaInstance(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return cordovaInstance(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return instancePropertyGet(this, "databaseFeatures"); },
        set: function (value) { instancePropertySet(this, "databaseFeatures", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return instancePropertyGet(this, "openDBs"); },
        set: function (value) { instancePropertySet(this, "openDBs", value); },
        enumerable: false,
        configurable: true
    });
    return SQLiteObject;
}());
export { SQLiteObject };
var SQLiteOriginal = /** @class */ (function (_super) {
    __extends(SQLiteOriginal, _super);
    function SQLiteOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLiteOriginal.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLiteOriginal.prototype.echoTest = function () { return cordova(this, "echoTest", {}, arguments); };
    SQLiteOriginal.prototype.selfTest = function () { return cordova(this, "selfTest", {}, arguments); };
    SQLiteOriginal.prototype.deleteDatabase = function (config) { return cordova(this, "deleteDatabase", {}, arguments); };
    SQLiteOriginal.pluginName = "SQLite";
    SQLiteOriginal.pluginRef = "sqlitePlugin";
    SQLiteOriginal.plugin = "cordova-sqlite-storage";
    SQLiteOriginal.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLiteOriginal.platforms = ["Android", "iOS", "macOS", "Windows"];
    return SQLiteOriginal;
}(AwesomeCordovaNativePlugin));
var SQLite = new SQLiteOriginal();
export { SQLite };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3FsaXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHFIQU9OLE1BQU0sK0JBQStCLENBQUM7O0lBd0RyQyxzQkFBbUIsZUFBb0I7UUFBcEIsb0JBQWUsR0FBZixlQUFlLENBQUs7SUFBRyxDQUFDO0lBUTNDLHFDQUFjLGFBQUMsV0FBNEM7SUFVM0Qsa0NBQVcsYUFBQyxFQUErQjtJQVMzQyxzQ0FBZSxhQUFDLEVBQW1DO0lBT25ELDJDQUFvQjtJQU1wQiwyQkFBSTtJQVFKLDRCQUFLO0lBWUwsaUNBQVUsYUFBQyxTQUFpQixFQUFFLE1BQWM7SUFTNUMsK0JBQVEsYUFBQyxhQUEwQztJQU9uRCxrREFBMkI7MEJBMUVQLDBDQUFnQjs7Ozs7OzBCQUNoQixpQ0FBTzs7Ozs7O3VCQW5FN0I7Ozs7SUEwTDRCLDBCQUEwQjs7OztJQVVwRCx1QkFBTSxhQUFDLE1BQTRCOzs7bURBQXlCO2dCQUMxRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ2pDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTdCLENBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3hGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVFELHlCQUFRO0lBVVIseUJBQVE7SUFXUiwrQkFBYyxhQUFDLE1BQTRCOzs7Ozs7aUJBck83QztFQTBMNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHNxbGl0ZVBsdWdpbjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNRTGl0ZURhdGFiYXNlQ29uZmlnIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGRhdGFiYXNlLiBFeGFtcGxlOiAnbXkuZGInXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBvZiB0aGUgZGF0YWJhc2UuIEV4YW1wbGU6ICdkZWZhdWx0J1xuICAgKi9cbiAgbG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpT1MgRGF0YWJhc2UgTG9jYXRpb24uIEV4YW1wbGU6ICdMaWJyYXJ5J1xuICAgKi9cbiAgaW9zRGF0YWJhc2VMb2NhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIHN1cHBvcnQgYXJiaXRyYXJ5IGRhdGFiYXNlIGxvY2F0aW9uIG9uIGFuZHJvaWQgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvY29yZG92YS1zcWxpdGUtZXZjb3JlLWV4dGJ1aWxkLWZyZWVcbiAgICovXG4gIGFuZHJvaWREYXRhYmFzZUxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogc3VwcG9ydCBvcGVuaW5nIHByZS1maWxsZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL2NvcmRvdmEtc3FsaXRlLWV4dFxuICAgKi9cbiAgY3JlYXRlRnJvbUxvY2F0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogc3VwcG9ydCBlbmNyeXB0ZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsY2lwaGVyLWFkYXB0ZXJcbiAgICovXG4gIGtleT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGJUcmFuc2FjdGlvbiB7XG4gIGV4ZWN1dGVTcWw6IChzcWw6IGFueSwgdmFsdWVzPzogYW55W10sIHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlVHJhbnNhY3Rpb24gZXh0ZW5kcyBEYlRyYW5zYWN0aW9uIHtcbiAgc3RhcnQ6ICgpID0+IHZvaWQ7XG4gIGFkZFN0YXRlbWVudDogRGJUcmFuc2FjdGlvblsnZXhlY3V0ZVNxbCddO1xuICBoYW5kbGVTdGF0ZW1lbnRTdWNjZXNzOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIGhhbmRsZVN0YXRlbWVudEZhaWx1cmU6IChoYW5kbGVyOiBGdW5jdGlvbiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZDtcbiAgcnVuOiAoKSA9PiB2b2lkO1xuICBhYm9ydDogKHR4RmFpbHVyZTogYW55KSA9PiB2b2lkO1xuICBmaW5pc2g6ICgpID0+IHZvaWQ7XG4gIGFib3J0RnJvbVE6IChzcWxlcnJvcjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNRTGl0ZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGRhdGFiYXNlRmVhdHVyZXM6IHsgaXNTUUxpdGVQbHVnaW5EYXRhYmFzZTogYm9vbGVhbiB9O1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9wZW5EQnM6IGFueTtcblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogKHR4OiBTUUxpdGVUcmFuc2FjdGlvbikgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAxLFxuICB9KVxuICB0cmFuc2FjdGlvbihmbjogKHR4OiBEYlRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZWFkVHJhbnNhY3Rpb24oZm46ICh0eDogU1FMaXRlVHJhbnNhY3Rpb24pID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0YXJ0TmV4dFRyYW5zYWN0aW9uKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBTUUwgb24gdGhlIG9wZW5lZCBkYXRhYmFzZS4gTm90ZSwgeW91IG11c3QgY2FsbCBgY3JlYXRlYCBmaXJzdCwgYW5kXG4gICAqIGVuc3VyZSBpdCByZXNvbHZlZCBhbmQgc3VjY2Vzc2Z1bGx5IG9wZW5lZCB0aGUgZGF0YWJhc2UuXG4gICAqXG4gICAqIEBwYXJhbSBzdGF0ZW1lbnRcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGV4ZWN1dGVTcWwoc3RhdGVtZW50OiBzdHJpbmcsIHBhcmFtcz86IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHNxbFN0YXRlbWVudHMge3N0cmluZ1tdIHwgc3RyaW5nW11bXSB8IGFueVtdfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNxbEJhdGNoKHNxbFN0YXRlbWVudHM6IChzdHJpbmcgfCBzdHJpbmdbXSB8IGFueSlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYWJvcnRhbGxQZW5kaW5nVHJhbnNhY3Rpb25zKCk6IHZvaWQge31cbn1cblxuLyoqXG4gKiBAbmFtZSBTUUxpdGVcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIFNRTGl0ZSBkYXRhYmFzZXMgb24gdGhlIGRldmljZS5cbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNRTGl0ZSwgU1FMaXRlT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NxbGl0ZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3FsaXRlOiBTUUxpdGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3FsaXRlLmNyZWF0ZSh7XG4gKiAgIG5hbWU6ICdkYXRhLmRiJyxcbiAqICAgbG9jYXRpb246ICdkZWZhdWx0J1xuICogfSlcbiAqICAgLnRoZW4oKGRiOiBTUUxpdGVPYmplY3QpID0+IHtcbiAqXG4gKlxuICogICAgIGRiLmV4ZWN1dGVTcWwoJ2NyZWF0ZSB0YWJsZSBkYW5jZU1vdmVzKG5hbWUgVkFSQ0hBUigzMikpJywgW10pXG4gKiAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRXhlY3V0ZWQgU1FMJykpXG4gKiAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICpcbiAqICAgfSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIFNRTGl0ZU9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIFNRTGl0ZURhdGFiYXNlQ29uZmlnXG4gKiBTUUxpdGVUcmFuc2FjdGlvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NRTGl0ZScsXG4gIHBsdWdpblJlZjogJ3NxbGl0ZVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTUUxpdGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIG9yIGNyZWF0ZSBhIFNRTGl0ZSBkYXRhYmFzZSBmaWxlLlxuICAgKlxuICAgKiBTZWUgdGhlIHBsdWdpbiBkb2NzIGZvciBhbiBleHBsYW5hdGlvbiBvZiBhbGwgb3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsaXRlLXN0b3JhZ2Ujb3BlbmluZy1hLWRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcge1NRTGl0ZURhdGFiYXNlQ29uZmlnfSBkYXRhYmFzZSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm5zIFByb21pc2U8U1FMaXRlT2JqZWN0PlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxTUUxpdGVPYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShjb25maWcsIChkYjogYW55KSA9PiByZXNvbHZlKG5ldyBTUUxpdGVPYmplY3QoZGIpKSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdGhhdCBib3RoIHRoZSBKYXZhc2NyaXB0IGFuZCBuYXRpdmUgcGFydCBvZiB0aGlzIHBsdWdpbiBhcmUgaW5zdGFsbGVkIGluIHlvdXIgYXBwbGljYXRpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZWNob1Rlc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSB2ZXJpZnkgYmFzaWMgZGF0YWJhc2UgYWNjZXNzIG9wZXJhdGlvbnMgaW5jbHVkaW5nIG9wZW5pbmcgYSBkYXRhYmFzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWxmVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRGF0YWJhc2UoY29uZmlnOiBTUUxpdGVEYXRhYmFzZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=