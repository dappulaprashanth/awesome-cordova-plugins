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
var PlayInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(PlayInstallReferrerOriginal, _super);
    function PlayInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrerOriginal.prototype.getReferrer = function () { return cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrerOriginal.pluginName = "PlayInstallReferrer";
    PlayInstallReferrerOriginal.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrerOriginal.pluginRef = "installReferrer";
    PlayInstallReferrerOriginal.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrerOriginal.platforms = ["Android"];
    return PlayInstallReferrerOriginal;
}(AwesomeCordovaNativePlugin));
var PlayInstallReferrer = new PlayInstallReferrerOriginal();
export { PlayInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGxheS1pbnN0YWxsLXJlZmVycmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVVuRCx1Q0FBMEI7Ozs7SUFFakUseUNBQVc7Ozs7Ozs4QkFiYjtFQVd5QywwQkFBMEI7U0FBdEQsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQbGF5SW5zdGFsbFJlZmVycmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcGxheS1pbnN0YWxscmVmZXJyZXInLFxuICBwbHVnaW5SZWY6ICdpbnN0YWxsUmVmZXJyZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3N3YXlhbmdqaXQvY29yZG92YS1wbHVnaW4tcGxheS1pbnN0YWxscmVmZXJyZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbGF5SW5zdGFsbFJlZmVycmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIGdldFJlZmVycmVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=