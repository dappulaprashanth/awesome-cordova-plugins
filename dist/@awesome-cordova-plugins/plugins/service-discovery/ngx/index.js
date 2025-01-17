import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var ServiceDiscovery = /** @class */ (function (_super) {
    __extends(ServiceDiscovery, _super);
    function ServiceDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscovery.prototype.getNetworkServices = function (service) { return cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscovery.pluginName = "ServiceDiscovery";
    ServiceDiscovery.plugin = "cordova-plugin-discovery";
    ServiceDiscovery.pluginRef = "serviceDiscovery";
    ServiceDiscovery.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscovery.platforms = ["Android", "iOS"];
    ServiceDiscovery.decorators = [
        { type: Injectable }
    ];
    return ServiceDiscovery;
}(AwesomeCordovaNativePlugin));
export { ServiceDiscovery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2VydmljZS1kaXNjb3Zlcnkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEJ0RCxvQ0FBMEI7Ozs7SUFROUQsNkNBQWtCLGFBQUMsT0FBZTs7Ozs7OztnQkFUbkMsVUFBVTs7MkJBOUJYO0VBK0JzQywwQkFBMEI7U0FBbkQsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTZXJ2aWNlRGlzY292ZXJ5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpbXBsZSBwbHVnaW4gdG8gZ2V0IGFueSBTU0RQIC8gVVBuUCAvIERMTkEgc2VydmljZSBvbiBhIGxvY2FsIG5ldHdvcmtcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2VydmljZURpc2NvdmVyeSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zZXJ2aWNlLWRpc2NvdmVyeSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZURpc2NvdmVyeTogU2VydmljZURpc2NvdmVyeSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc2VydmljZURpc2NvdmVyeS5nZXROZXR3b3JrU2VydmljZXMoJ3NzZHA6YWxsJylcbiAqICAgLnRoZW4oZGV2aWNlcyA9PiBjb25zb2xlLmxvZyhkZXZpY2VzKSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTZXJ2aWNlRGlzY292ZXJ5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGlzY292ZXJ5JyxcbiAgcGx1Z2luUmVmOiAnc2VydmljZURpc2NvdmVyeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2NvdHRkZXJtb3R0L2NvcmRvdmEtcGx1Z2luLWRpc2NvdmVyeScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlRGlzY292ZXJ5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRmluZHMgYW5kIHJldHVybnMgbWV0YWRhdGEgYWJvdXQgZGV2aWNlcyBkaXNjb3ZlcmVkIG9uIHRoZSBuZXR3b3JrIHZpYSBTU0RQIC8gVVBuUCAvIERMTkFcbiAgICpcbiAgICogQHBhcmFtIHNlcnZpY2Uge3N0cmluZ30gVGhlIHNlcnZpY2UgbmFtZSB0byBkaXNjb3ZlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TmV0d29ya1NlcnZpY2VzKHNlcnZpY2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=