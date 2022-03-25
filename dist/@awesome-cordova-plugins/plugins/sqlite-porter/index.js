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
var SQLitePorterOriginal = /** @class */ (function (_super) {
    __extends(SQLitePorterOriginal, _super);
    function SQLitePorterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLitePorterOriginal.prototype.importSqlToDb = function (db, sql) { return cordova(this, "importSqlToDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorterOriginal.prototype.exportDbToSql = function (db) { return cordova(this, "exportDbToSql", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorterOriginal.prototype.importJsonToDb = function (db, json) { return cordova(this, "importJsonToDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorterOriginal.prototype.exportDbToJson = function (db) { return cordova(this, "exportDbToJson", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorterOriginal.prototype.wipeDb = function (db) { return cordova(this, "wipeDb", { "callbackStyle": "object", "successName": "successFn", "errorName": "errorFn" }, arguments); };
    SQLitePorterOriginal.pluginName = "SQLitePorter";
    SQLitePorterOriginal.plugin = "uk.co.workingedge.cordova.plugin.sqliteporter";
    SQLitePorterOriginal.pluginRef = "cordova.plugins.sqlitePorter";
    SQLitePorterOriginal.repo = "https://github.com/dpa99c/cordova-sqlite-porter";
    SQLitePorterOriginal.platforms = ["Amazon Fire OS", "Android", "BlackBerry 10", "Browser", "iOS", "Tizen", "Windows", "Windows Phone"];
    return SQLitePorterOriginal;
}(AwesomeCordovaNativePlugin));
var SQLitePorter = new SQLitePorterOriginal();
export { SQLitePorter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3FsaXRlLXBvcnRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUErQzFELGdDQUEwQjs7OztJQWExRCxvQ0FBYSxhQUFDLEVBQU8sRUFBRSxHQUFXO0lBZWxDLG9DQUFhLGFBQUMsRUFBTztJQWdCckIscUNBQWMsYUFBQyxFQUFPLEVBQUUsSUFBUztJQWVqQyxxQ0FBYyxhQUFDLEVBQU87SUFldEIsNkJBQU0sYUFBQyxFQUFPOzs7Ozs7dUJBekhoQjtFQStDa0MsMEJBQTBCO1NBQS9DLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNRTGl0ZSBQb3J0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBDb3Jkb3ZhL1Bob25lZ2FwIHBsdWdpbiBjYW4gYmUgdXNlZCB0byBpbXBvcnQvZXhwb3J0IHRvL2Zyb20gYSBTUUxpdGUgZGF0YWJhc2UgdXNpbmcgZWl0aGVyIFNRTCBvciBKU09OLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTUUxpdGVQb3J0ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3FsaXRlLXBvcnRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNxbGl0ZVBvcnRlcjogU1FMaXRlUG9ydGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgZGIgPSB3aW5kb3cub3BlbkRhdGFiYXNlKCdUZXN0JywgJzEuMCcsICdUZXN0REInLCAxICogMTAyNCk7XG4gKiAvLyBvciB3ZSBjYW4gdXNlIFNRTGl0ZSBwbHVnaW5cbiAqIC8vIHdlIHdpbGwgYXNzdW1lIHRoYXQgd2UgaW5qZWN0ZWQgU1FMaXRlIGludG8gdGhpcyBjb21wb25lbnQgYXMgc3FsaXRlXG4gKiB0aGlzLnNxbGl0ZS5jcmVhdGUoe1xuICogICBuYW1lOiAnZGF0YS5kYicsXG4gKiAgIGxvY2F0aW9uOiAnZGVmYXVsdCdcbiAqIH0pXG4gKiAgIC50aGVuKChkYjogYW55KSA9PiB7XG4gKiAgICAgbGV0IGRiSW5zdGFuY2UgPSBkYi5fb2JqZWN0SW5zdGFuY2U7XG4gKiAgICAgLy8gd2UgY2FuIHBhc3MgZGIuX29iamVjdEluc3RhbmNlIGFzIHRoZSBkYXRhYmFzZSBvcHRpb24gaW4gYWxsIFNRTGl0ZVBvcnRlciBtZXRob2RzXG4gKiAgIH0pO1xuICpcbiAqXG4gKiBsZXQgc3FsID0gJ0NSRUFURSBUQUJMRSBBcnRpc3QgKFtJZF0gUFJJTUFSWSBLRVksIFtUaXRsZV0pOycgK1xuICogICAgICAgICAgICAnSU5TRVJUIElOVE8gQXJ0aXN0KElkLFRpdGxlKSBWQUxVRVMgKFwiMVwiLFwiRnJlZFwiKTsnO1xuICpcbiAqIHRoaXMuc3FsaXRlUG9ydGVyLmltcG9ydFNxbFRvRGIoZGIsIHNxbClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ltcG9ydGVkJykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICpcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTUUxpdGVQb3J0ZXInLFxuICBwbHVnaW46ICd1ay5jby53b3JraW5nZWRnZS5jb3Jkb3ZhLnBsdWdpbi5zcWxpdGVwb3J0ZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuc3FsaXRlUG9ydGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1zcWxpdGUtcG9ydGVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdCcm93c2VyJywgJ2lPUycsICdUaXplbicsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1FMaXRlUG9ydGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRXhlY3V0ZXMgYSBzZXQgb2YgU1FMIHN0YXRlbWVudHMgYWdhaW5zdCB0aGUgZGVmaW5lZCBkYXRhYmFzZS4gQ2FuIGJlIHVzZWQgdG8gaW1wb3J0IGRhdGEgZGVmaW5lZCBpbiB0aGUgU1FMIHN0YXRlbWVudHMgaW50byB0aGUgZGF0YWJhc2UsIGFuZCBtYXkgYWRkaXRpb25hbGx5IGluY2x1ZGUgY29tbWFuZHMgdG8gY3JlYXRlIHRoZSB0YWJsZSBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEBwYXJhbSBkYiB7T2JqZWN0fSBEYXRhYmFzZSBvYmplY3RcbiAgICogQHBhcmFtIHNxbCB7c3RyaW5nfSBTUUwgc3RhdGVtZW50cyB0byBleGVjdXRlIGFnYWluc3QgdGhlIGRhdGFiYXNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzRm4nLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yRm4nLFxuICB9KVxuICBpbXBvcnRTcWxUb0RiKGRiOiBhbnksIHNxbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0cyBhIFNRTGl0ZSBEQiBhcyBhIHNldCBvZiBTUUwgc3RhdGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGRiIHtPYmplY3R9IERhdGFiYXNlIG9iamVjdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2Vzc0ZuJyxcbiAgICBlcnJvck5hbWU6ICdlcnJvckZuJyxcbiAgfSlcbiAgZXhwb3J0RGJUb1NxbChkYjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGFibGUgc3RydWN0dXJlIGFuZC9vciByb3cgZGF0YSBjb250YWluZWQgd2l0aGluIGEgSlNPTiBzdHJ1Y3R1cmUgaW50byBTUUwgc3RhdGVtZW50cyB0aGF0IGNhbiBiZSBleGVjdXRlZCBhZ2FpbnN0IGEgU1FMaXRlIGRhdGFiYXNlLiBDYW4gYmUgdXNlZCB0byBpbXBvcnQgZGF0YSBpbnRvIHRoZSBkYXRhYmFzZSBhbmQvb3IgY3JlYXRlIHRoZSB0YWJsZSBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEBwYXJhbSBkYiB7T2JqZWN0fSBEYXRhYmFzZSBvYmplY3RcbiAgICogQHBhcmFtIGpzb24ge09iamVjdHxzdHJpbmd9IEpTT04gc3RydWN0dXJlIGNvbnRhaW5pbmcgcm93IGRhdGEgYW5kL29yIHRhYmxlIHN0cnVjdHVyZSBhcyBlaXRoZXIgYSBKU09OIG9iamVjdCBvciBzdHJpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3NGbicsXG4gICAgZXJyb3JOYW1lOiAnZXJyb3JGbicsXG4gIH0pXG4gIGltcG9ydEpzb25Ub0RiKGRiOiBhbnksIGpzb246IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydHMgYSBTUUxpdGUgREIgYXMgYSBKU09OIHN0cnVjdHVyZVxuICAgKlxuICAgKiBAcGFyYW0gZGIge09iamVjdH0gRGF0YWJhc2Ugb2JqZWN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzRm4nLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yRm4nLFxuICB9KVxuICBleHBvcnREYlRvSnNvbihkYjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2lwZXMgYWxsIGRhdGEgZnJvbSBhIGRhdGFiYXNlIGJ5IGRyb3BwaW5nIGFsbCBleGlzdGluZyB0YWJsZXNcbiAgICpcbiAgICogQHBhcmFtIGRiIHtPYmplY3R9IERhdGFiYXNlIG9iamVjdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2Vzc0ZuJyxcbiAgICBlcnJvck5hbWU6ICdlcnJvckZuJyxcbiAgfSlcbiAgd2lwZURiKGRiOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19