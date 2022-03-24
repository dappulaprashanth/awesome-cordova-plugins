import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var ForegroundService = /** @class */ (function (_super) {
    __extends(ForegroundService, _super);
    function ForegroundService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForegroundService.prototype.start = function (title, text, icon, importance, id) {
        if (importance === void 0) { importance = 1; }
        if (id === void 0) { id = 0; }
        return cordova(this, "start", { "sync": true }, arguments);
    };
    ForegroundService.prototype.stop = function () { return cordova(this, "stop", { "sync": true }, arguments); };
    ForegroundService.pluginName = "ForegroundService";
    ForegroundService.plugin = "cordova-plugin-foreground-service";
    ForegroundService.pluginRef = "cordova.plugins.foregroundService";
    ForegroundService.repo = "https://github.com/DavidBriglio/cordova-plugin-foreground-service";
    ForegroundService.platforms = ["Android"];
    ForegroundService.decorators = [
        { type: Injectable }
    ];
    return ForegroundService;
}(AwesomeCordovaNativePlugin));
export { ForegroundService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZm9yZWdyb3VuZC1zZXJ2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdEckQscUNBQTBCOzs7O0lBNEIvRCxpQ0FBSyxhQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsSUFBYSxFQUFFLFVBQXlCLEVBQUUsRUFBTTtRQUFqQywyQkFBQSxFQUFBLGNBQXlCO1FBQUUsbUJBQUEsRUFBQSxNQUFNOzs7SUFVbkYsZ0NBQUk7Ozs7Ozs7Z0JBdkNMLFVBQVU7OzRCQWhEWDtFQWlEdUMsMEJBQTBCO1NBQXBELGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRm9yZWdyb3VuZCBTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyBmb3IgYW5kcm9pZCBkZXZpY2VzIHRvIGNvbnRpbnVlIHJ1bm5pbmcgc2VydmljZXMgaW4gdGhlIGJhY2tncm91bmQsIHVzaW5nIGFcbiAqIGZvcmVncm91bmQgb25nb2luZyBub3RpZmljYXRpb24uIFRoaXMgaXMgdGFyZ2V0ZWQgdG93YXJkcyB1c2Ugd2l0aCBwbHVnaW5zIHN1Y2ggYXNcbiAqICdjb3Jkb3ZhLWdlb2xvY2F0aW9uJyB0aGF0IHdpbGwgbm90IHJ1biB3aGlsZSB0aGUgYXBwIGlzIGluIHRoZSBiYWNrZ3JvdW5kIG9uIGFuZHJvaWQgQVBJIDI2Ky5cbiAqXG4gKiBGb3IgYW5kcm9pZCBBUEkgMjgrLCB0aGUgZm9sbG93aW5nIHhtbCBzbmlwcGV0IHNob3VsZCBiZSBpbnNlcnRlZCBpbnRvIGBgYGNvbmZpZy54bWxgYGA6XG4gKlxuICogYGBgXG4gKiAuLi5cbiAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICogICA8Y29uZmlnLWZpbGUgcGFyZW50PVwiLypcIiB0YXJnZXQ9XCJBbmRyb2lkTWFuaWZlc3QueG1sXCI+XG4gKiAgICAgPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XCJhbmRyb2lkLnBlcm1pc3Npb24uRk9SRUdST1VORF9TRVJWSUNFXCIgLz5cbiAqICAgPC9jb25maWctZmlsZT5cbiAqICAgLi4uXG4gKiBgYGBcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRm9yZWdyb3VuZFNlcnZpY2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZm9yZWdyb3VuZC1zZXJ2aWNlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBmb3JlZ3JvdW5kU2VydmljZTogRm9yZWdyb3VuZFNlcnZpY2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHN0YXJ0U2VydmljZSgpIHtcbiAqICAvLyBOb3RpZmljYXRpb24gaW1wb3J0YW5jZSBpcyBvcHRpb25hbCwgdGhlIGRlZmF1bHQgaXMgMSAtIExvdyAobm8gc291bmQgb3IgdmlicmF0aW9uKVxuICogIHRoaXMuZm9yZWdyb3VuZFNlcnZpY2Uuc3RhcnQoJ0dQUyBSdW5uaW5nJywgJ0JhY2tncm91bmQgU2VydmljZScsICdkcmF3YWJsZS9mc2ljb24nKTtcbiAqIH1cbiAqXG4gKiBzdG9wU2VydmljZSgpIHtcbiAqICAvLyBEaXNhYmxlIHRoZSBmb3JlZ3JvdW5kIHNlcnZpY2VcbiAqICB0aGlzLmZvcmVncm91bmRTZXJ2aWNlLnN0b3AoKTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGb3JlZ3JvdW5kU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZvcmVncm91bmQtc2VydmljZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5mb3JlZ3JvdW5kU2VydmljZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcmlnbGlvL2NvcmRvdmEtcGx1Z2luLWZvcmVncm91bmQtc2VydmljZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcmVncm91bmRTZXJ2aWNlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZm9yZWdyb3VuZCBzZXJ2aWNlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAoY29udGVudCB0aXRsZSkgQSBicmllZiBoZWFkbGluZSBmb3IgdGhlIG5vdGlmaWNhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAoY29udGVudCB0ZXh0KSBTdXBwb3J0aW5nIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIFRoZSBkcmF3YWJsZSBpY29uIGNhbiBiZSBhbnkgZHJhd2FibGUgaW1hZ2UgdGhhdCBleGlzdHMgaW4gdGhlIHJlc291cmNlIGZvbGRlci4gVGhpcyBtZWFucyB5b3UgbXVzdCBjb3B5IHRoZSBpY29uIHlvdSB3YW50IHRvIHVzZSBpbnRvIHRoZSBwbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlIGZvbGRlciBzZXQuIElmIG5vIGljb24gY2FuIGJlIGZvdW5kIHVzaW5nIHRoZSBpY29uIG5hbWUgcGFyYW1ldGVyLCBhIGRlZmF1bHQgc3RhciBpY29uIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogRm9yIGFuIGV4YW1wbGUsIGlmIHRoZSBgZnNpY29uLnBuZ2AgKHNlZSB4bWwgYmVsb3cpIHJlc2lkZXMgaGVyZTogYGBgc3JjL2Fzc2V0cy9pY29uL2ZzaWNvbi5wbmdgYGAuIFRoZW4gYGBgaWNvbmBgYCBwYXJhbWV0ZXIgdmFsdWUgd291bGQgYmUgYGBgJ2RyYXdhYmxlL2ZzaWNvbidgYGAuIEluIG9yZGVyIGZvciB0aGlzIGV4YW1wbGUgdG8gd29yaywgdGhlIGZvbGxvd2luZyB4bWwgc25pcHBldCBtdXN0IGJlIGluIGBgYGNvbmZpZy54bWxgYGAuXG4gICAqXG4gICAqIGBgYFxuICAgKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAgICogICA8cmVzb3VyY2UtZmlsZSBzcmM9XCJ3d3cvYXNzZXRzL2ljb24vZnNpY29uLnBuZ1wiIHRhcmdldD1cImFwcC9zcmMvbWFpbi9yZXMvZHJhd2FibGUvZnNpY29uLnBuZ1wiIC8+XG4gICAqICAgLi4uXG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW1wb3J0YW5jZSBOb3RpZmljYXRpb24gaW1wb3J0YW5jZSBkaWN0YXRlcyBob3cgdGhlIG5vdGlmaWNhdGlvbiBpcyBpbml0aWFsbHkgcHJlc2VudGVkOlxuICAgKlxuICAgKiBWYWx1ZSB8IEltcG9ydGFuY2UgfCBEZXNjcmlwdGlvbiB8IEV4YW1wbGVzXG4gICAqIC0tLSB8IC0tLSB8IC0tLSB8IC0tLVxuICAgKiAxfElNUE9SVEFOQ0VfTE9XfERvZXMgbm90IG1ha2UgYSBzb3VuZCBvciBoZWFkcy11cCBkaXNwbGF5IChwbHVnaW4ncyBkZWZhdWx0KXxOZXcgY29udGVudCB0aGUgdXNlciBoYXMgc3Vic2NyaWJlZCB0bywgc29jaWFsIG5ldHdvcmsgaW52aXRhdGlvbnNcbiAgICogMnxJTVBPUlRBTkNFX0RFRkFVTFR8TWFrZXMgYSBzb3VuZCwgYnV0IG5vIGhlYWRzLXVwIGRpc3BsYXl8VHJhZmZpYyBhbGVydHMsIHRhc2sgcmVtaW5kZXJzXG4gICAqIDN8SU1QT1JUQU5DRV9ISUdIfE1ha2VzIGEgc291bmQgYW5kIGhlYWRzLXVwIGRpc3BsYXl8VGV4dCBtZXNzYWdlcywgYWxhcm1zLCBwaG9uZSBjYWxsc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIG5vdGlmaWNhdGlvbiBpZCBpcyBhIGN1c3RvbWl6YWJsZSBpbnRlZ2VyIHRoYXQgaXMgdXNlZCB0byByZWZlcmVuY2UgdGhlIG5vdGlmaWNhdGlvbiB0aGF0IHdpbGwgYmUgbGF1bmNoZWQuIFRoaXMgaXMgY3VzdG9taXphYmxlIHRvIGF2b2lkIGNvbmZsaWN0aW5nIHdpdGggYW55IG90aGVyIG5vdGlmaWNhdGlvbnMuIElmIHRoaXMgaXMgbm90IGluY2x1ZGVkLCBhIFsqdW5pcXVlKl0gZGVmYXVsdCBpZCB3aWxsIGJlIHVzZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vcGxhdGZvcm0tZ3VpZGFuY2UvYW5kcm9pZC1ub3RpZmljYXRpb25zLmh0bWxcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdGFydCh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGljb24/OiBzdHJpbmcsIGltcG9ydGFuY2U6IDEgfCAyIHwgMyA9IDEsIGlkID0gMCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZm9yZWdyb3VuZCBzZXJ2aWNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3RvcCgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==