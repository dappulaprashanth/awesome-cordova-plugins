import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var GeTuiSdkPlugin = /** @class */ (function (_super) {
    __extends(GeTuiSdkPlugin, _super);
    function GeTuiSdkPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPlugin.prototype.callback_init = function (callback) { return cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPlugin.prototype.initialize = function () { return cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPlugin.prototype.getClientId = function () { return cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPlugin.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPlugin.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPlugin.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPlugin.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPlugin.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPlugin.platforms = ["Android", "iOS"];
    GeTuiSdkPlugin.decorators = [
        { type: Injectable }
    ];
    return GeTuiSdkPlugin;
}(AwesomeCordovaNativePlugin));
export { GeTuiSdkPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2UtdHVpLXNkay1wbHVnaW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBdUN4RCxrQ0FBMEI7Ozs7SUFFNUQsc0NBQWEsYUFBQyxRQUFrQjtJQU9oQyxtQ0FBVTtJQUtWLG9DQUFXO0lBS1gsbUNBQVU7Ozs7Ozs7OztnQkFwQlgsVUFBVTs7eUJBdkNYO0VBd0NvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR2UgVHVpIFNkayBQbHVnaW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2VUdWlTZGtQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ2UtdHVpLXNkay1wbHVnaW4nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlVHVpU2RrUGx1Z2luOiBHZVR1aVNka1BsdWdpbikgeyB9XG4gKlxuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uY2FsbGJhY2tfaW5pdCgocmVzKSA9PiB7IGNvbnNvbGUubG9nKHJlcyl9KTtcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmluaXRpYWxpemUoKTtcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmdldENsaWVudElkKCk7XG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiAgdGhpcy5nZVR1aVNka1BsdWdpbi5nZXRWZXJzaW9uKCk7XG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR2VUdWlTZGtQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkaycsXG4gIHBsdWdpblJlZjogJ0dlVHVpU2RrUGx1Z2luJyxcbiAgcmVwbzogJ2dpdEBnaXRodWIuY29tOkdldHVpTGFib3JhdG9yeS9jb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkay5naXQnLFxuICBpbnN0YWxsOlxuICAgICdjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ2V0dWlzZGsgLS12YXJpYWJsZSBQVVNIX0FQUElEPXlvdXIgYXBwaWQgLS12YXJpYWJsZSBQVVNIX0FQUEtFWT15b3VyIGFwcGtleSAtLXZhcmlhYmxlIFBVU0hfQVBQU0VDUkVUPXlvdXIgYXBwc2VjcmV0JyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQVVNIX0FQUElEJywgJ1BVU0hfQVBQS0VZJywgJ1BVU0hfQVBQU0VDUkVUJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZVR1aVNka1BsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBjYWxsYmFja19pbml0KGNhbGxiYWNrOiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGluaXRpYWxpemUoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDbGllbnRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19