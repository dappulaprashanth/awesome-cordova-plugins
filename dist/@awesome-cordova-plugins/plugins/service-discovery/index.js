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
var ServiceDiscoveryOriginal = /** @class */ (function (_super) {
    __extends(ServiceDiscoveryOriginal, _super);
    function ServiceDiscoveryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscoveryOriginal.prototype.getNetworkServices = function (service) { return cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscoveryOriginal.pluginName = "ServiceDiscovery";
    ServiceDiscoveryOriginal.plugin = "cordova-plugin-discovery";
    ServiceDiscoveryOriginal.pluginRef = "serviceDiscovery";
    ServiceDiscoveryOriginal.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscoveryOriginal.platforms = ["Android", "iOS"];
    return ServiceDiscoveryOriginal;
}(AwesomeCordovaNativePlugin));
var ServiceDiscovery = new ServiceDiscoveryOriginal();
export { ServiceDiscovery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2VydmljZS1kaXNjb3ZlcnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEJ0RCxvQ0FBMEI7Ozs7SUFROUQsNkNBQWtCLGFBQUMsT0FBZTs7Ozs7OzJCQXZDcEM7RUErQnNDLDBCQUEwQjtTQUFuRCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNlcnZpY2VEaXNjb3ZlcnlcbiAqIEBkZXNjcmlwdGlvblxuICogU2ltcGxlIHBsdWdpbiB0byBnZXQgYW55IFNTRFAgLyBVUG5QIC8gRExOQSBzZXJ2aWNlIG9uIGEgbG9jYWwgbmV0d29ya1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTZXJ2aWNlRGlzY292ZXJ5IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NlcnZpY2UtZGlzY292ZXJ5JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlRGlzY292ZXJ5OiBTZXJ2aWNlRGlzY292ZXJ5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zZXJ2aWNlRGlzY292ZXJ5LmdldE5ldHdvcmtTZXJ2aWNlcygnc3NkcDphbGwnKVxuICogICAudGhlbihkZXZpY2VzID0+IGNvbnNvbGUubG9nKGRldmljZXMpKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NlcnZpY2VEaXNjb3ZlcnknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kaXNjb3ZlcnknLFxuICBwbHVnaW5SZWY6ICdzZXJ2aWNlRGlzY292ZXJ5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zY290dGRlcm1vdHQvY29yZG92YS1wbHVnaW4tZGlzY292ZXJ5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VEaXNjb3ZlcnkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBGaW5kcyBhbmQgcmV0dXJucyBtZXRhZGF0YSBhYm91dCBkZXZpY2VzIGRpc2NvdmVyZWQgb24gdGhlIG5ldHdvcmsgdmlhIFNTRFAgLyBVUG5QIC8gRExOQVxuICAgKlxuICAgKiBAcGFyYW0gc2VydmljZSB7c3RyaW5nfSBUaGUgc2VydmljZSBuYW1lIHRvIGRpc2NvdmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXROZXR3b3JrU2VydmljZXMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==