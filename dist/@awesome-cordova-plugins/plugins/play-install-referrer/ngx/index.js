import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var PlayInstallReferrer = /** @class */ (function (_super) {
    __extends(PlayInstallReferrer, _super);
    function PlayInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrer.prototype.getReferrer = function () { return cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrer.pluginName = "PlayInstallReferrer";
    PlayInstallReferrer.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrer.pluginRef = "installReferrer";
    PlayInstallReferrer.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrer.platforms = ["Android"];
    PlayInstallReferrer.decorators = [
        { type: Injectable }
    ];
    return PlayInstallReferrer;
}(AwesomeCordovaNativePlugin));
export { PlayInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGxheS1pbnN0YWxsLXJlZmVycmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVVuRCx1Q0FBMEI7Ozs7SUFFakUseUNBQVc7Ozs7Ozs7Z0JBSFosVUFBVTs7OEJBVlg7RUFXeUMsMEJBQTBCO1NBQXRELG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGxheUluc3RhbGxSZWZlcnJlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXBsYXktaW5zdGFsbHJlZmVycmVyJyxcbiAgcGx1Z2luUmVmOiAnaW5zdGFsbFJlZmVycmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zd2F5YW5naml0L2NvcmRvdmEtcGx1Z2luLXBsYXktaW5zdGFsbHJlZmVycmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGxheUluc3RhbGxSZWZlcnJlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBnZXRSZWZlcnJlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19