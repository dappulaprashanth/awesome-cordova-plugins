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
var DNSOriginal = /** @class */ (function (_super) {
    __extends(DNSOriginal, _super);
    function DNSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNSOriginal.prototype.resolve = function (hostname) { return cordova(this, "resolve", {}, arguments); };
    DNSOriginal.pluginName = "DNS";
    DNSOriginal.plugin = "cordova-plugin-dns";
    DNSOriginal.pluginRef = "cordova.plugins.dns";
    DNSOriginal.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNSOriginal.platforms = ["Android"];
    return DNSOriginal;
}(AwesomeCordovaNativePlugin));
var DNS = new DNSOriginal();
export { DNS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG5zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCbkUsdUJBQTBCOzs7O0lBUWpELHFCQUFPLGFBQUMsUUFBZ0I7Ozs7OztjQXRDMUI7RUE4QnlCLDBCQUEwQjtTQUF0QyxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBETlNcbiAqIEBkZXNjcmlwdGlvbiBBIHBsdWdpbiBmb3IgQXBhY2hlIENvcmRvdmEgdGhhdCBlbmFibGVzIGFwcGxpY2F0aW9ucyB0byBtYW51YWxseSByZXNvbHZlIGhvc3RuYW1lcyBpbnRvIGFuIHVuZGVybHlpbmcgbmV0d29yayBhZGRyZXNzLiBUaGlzIGlzIG1vc3RseSB1c2VmdWwgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhlIGRldmljZSdzIEROUyBzZXJ2ZXIgY29uZmlndXJhdGlvbi5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRE5TIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Rucy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRuczogRE5TKSB7IH1cbiAqXG4gKiAuLi5cbiAqIHRoaXMuZG5zLnJlc29sdmUoaG9zdG5hbWUpXG4gKiAgIC50aGVuKFxuICogICAgIGFkZHJlc3MgPT4gY29uc29sZS5sb2coJ1Jlc29sdmVkICcgKyBob3N0bmFtZSArICcgdG8gJyArIGFkZHJlc3MpLFxuICogICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgaG9zdG5hbWUgKyAnOiAnICsgZXJyb3IpXG4gKiAgICk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRE5TJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG5zJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmRucycsXG4gIHJlcG86ICdodHRwczovL2JpdGJ1Y2tldC5vcmcvemVnZWJhL2NvcmRvdmEtcGx1Z2luLWRucycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEROUyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlc29sdmUgaG9zdG5hbWVzIGludG8gYW4gdW5kZXJseWluZyBuZXR3b3JrIGFkZHJlc3MuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0bmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc29sdXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc29sdmUoaG9zdG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=