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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var LaunchNavigatorOriginal = /** @class */ (function (_super) {
    __extends(LaunchNavigatorOriginal, _super);
    function LaunchNavigatorOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit',
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit',
        };
        return _this;
    }
    LaunchNavigatorOriginal.prototype.navigate = function (destination, options) { return cordova(this, "navigate", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    LaunchNavigatorOriginal.prototype.isAppAvailable = function (app) { return cordova(this, "isAppAvailable", {}, arguments); };
    LaunchNavigatorOriginal.prototype.availableApps = function () { return cordova(this, "availableApps", {}, arguments); };
    LaunchNavigatorOriginal.prototype.getAppDisplayName = function (app) { return cordova(this, "getAppDisplayName", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.getAppsForPlatform = function (platform) { return cordova(this, "getAppsForPlatform", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.supportsTransportMode = function (app, platform) { return cordova(this, "supportsTransportMode", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.getTransportModes = function (app, platform) { return cordova(this, "getTransportModes", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.supportsDestName = function (app, platform) { return cordova(this, "supportsDestName", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.supportsStart = function (app, platform) { return cordova(this, "supportsStart", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.supportsStartName = function (app, platform) { return cordova(this, "supportsStartName", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.supportsLaunchMode = function (app, platform) { return cordova(this, "supportsLaunchMode", { "sync": true }, arguments); };
    LaunchNavigatorOriginal.prototype.userSelect = function (destination, options) { return cordova(this, "userSelect", { "sync": true }, arguments); };
    Object.defineProperty(LaunchNavigatorOriginal.prototype, "appSelection", {
        get: function () { return cordovaPropertyGet(this, "appSelection"); },
        set: function (value) { cordovaPropertySet(this, "appSelection", value); },
        enumerable: false,
        configurable: true
    });
    LaunchNavigatorOriginal.pluginName = "LaunchNavigator";
    LaunchNavigatorOriginal.plugin = "uk.co.workingedge.phonegap.plugin.launchnavigator";
    LaunchNavigatorOriginal.pluginRef = "launchnavigator";
    LaunchNavigatorOriginal.repo = "https://github.com/dpa99c/phonegap-launch-navigator";
    LaunchNavigatorOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return LaunchNavigatorOriginal;
}(AwesomeCordovaNativePlugin));
var LaunchNavigator = new LaunchNavigatorOriginal();
export { LaunchNavigator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGF1bmNoLW5hdmlnYXRvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQzs7SUErUnhFLG1DQUEwQjs7O1FBQzdELFNBQUcsR0FBUTtZQUNULFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLFlBQVk7WUFDeEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsUUFBUTtZQUNoQixTQUFTLEVBQUUsV0FBVztZQUN0QixLQUFLLEVBQUUsT0FBTztZQUNkLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFFRixvQkFBYyxHQUFRO1lBQ3BCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLE9BQU8sRUFBRSxTQUFTO1NBQ25CLENBQUM7OztJQWdCRixrQ0FBUSxhQUFDLFdBQThCLEVBQUUsT0FBZ0M7SUFXekUsd0NBQWMsYUFBQyxHQUFXO0lBVTFCLHVDQUFhO0lBV2IsMkNBQWlCLGFBQUMsR0FBVztJQVc3Qiw0Q0FBa0IsYUFBQyxRQUFnQjtJQVluQywrQ0FBcUIsYUFBQyxHQUFXLEVBQUUsUUFBZ0I7SUFZbkQsMkNBQWlCLGFBQUMsR0FBVyxFQUFFLFFBQWdCO0lBVS9DLDBDQUFnQixhQUFDLEdBQVcsRUFBRSxRQUFnQjtJQVk5Qyx1Q0FBYSxhQUFDLEdBQVcsRUFBRSxRQUFnQjtJQVUzQywyQ0FBaUIsYUFBQyxHQUFXLEVBQUUsUUFBZ0I7SUFhL0MsNENBQWtCLGFBQUMsR0FBVyxFQUFFLFFBQWdCO0lBU2hELG9DQUFVLGFBQUMsV0FBOEIsRUFBRSxPQUErQjswQkF0STFFLHlDQUFZOzs7Ozs7Ozs7OzswQkExVGQ7RUFnU3FDLDBCQUEwQjtTQUFsRCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdHNPcHRpb25zIHtcbiAgLyoqXG4gICAqIGEgZnVuY3Rpb24gdG8gcGFzcyB0aGUgdXNlcidzIGRlY2lzaW9uIHdoZXRoZXIgdG8gcmVtZW1iZXIgdGhlaXIgY2hvaWNlIG9mIGFwcC5cbiAgICogVGhpcyB3aWxsIGJlIHBhc3NlZCBhIHNpbmdsZSBib29sZWFuIHZhbHVlIGluZGljYXRpbmcgdGhlIHVzZXIncyBkZWNpc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHJlbWVtYmVyQ2hvaWNlXG4gICAqL1xuICBjYWxsYmFjaz86IChyZW1lbWJlckNob2ljZTogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICogdGV4dCB0byBkaXNwbGF5IGluIHRoZSBuYXRpdmUgcHJvbXB0IGhlYWRlciBhc2tpbmcgdXNlciB3aGV0aGVyIHRvIHJlbWVtYmVyIHRoZWlyIGNob2ljZS5cbiAgICogRGVmYXVsdHMgdG8gXCJSZW1lbWJlciB5b3VyIGNob2ljZT9cIiBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgaGVhZGVyVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogdGV4dCB0byBkaXNwbGF5IGluIHRoZSBuYXRpdmUgcHJvbXB0IGJvZHkgYXNraW5nIHVzZXIgd2hldGhlciB0byByZW1lbWJlciB0aGVpciBjaG9pY2UuXG4gICAqIERlZmF1bHRzIHRvIFwiVXNlIHRoZSBzYW1lIGFwcCBmb3IgbmF2aWdhdGluZyBuZXh0IHRpbWU/XCIgaWYgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIGJvZHlUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0ZXh0IHRvIGRpc3BsYXkgZm9yIHRoZSBZZXMgYnV0dG9uLlxuICAgKiBEZWZhdWx0cyB0byBcIlllc1wiIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAqL1xuICB5ZXNCdXR0b25UZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0ZXh0IHRvIGRpc3BsYXkgZm9yIHRoZSBObyBidXR0b24uXG4gICAqIERlZmF1bHRzIHRvIFwiTm9cIiBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgbm9CdXR0b25UZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbWVtYmVyQ2hvaWNlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiB3aGV0aGVyIHRvIHJlbWVtYmVyIHVzZXIgY2hvaWNlIG9mIGFwcCBmb3IgbmV4dCB0aW1lLCBpbnN0ZWFkIG9mIGFza2luZyBhZ2FpbiBmb3IgdXNlciBjaG9pY2UuXG4gICAqIGBcInByb21wdFwiYCAtIFByb21wdCB1c2VyIHRvIGRlY2lkZSB3aGV0aGVyIHRvIHJlbWVtYmVyIGNob2ljZS5cbiAgICogIC0gRGVmYXVsdCB2YWx1ZSBpZiB1bnNwZWNpZmllZC5cbiAgICogIC0gSWYgYHByb21wdEZuYCBpcyBkZWZpbmVkLCB0aGlzIHdpbGwgYmUgdXNlZCBmb3IgdXNlciBjb25maXJtYXRpb24uXG4gICAqICAtIE90aGVyd2lzZSAoYnkgZGVmYXVsdCksIGEgbmF0aXZlIGRpYWxvZyB3aWxsIGJlIGRpc3BsYXllZCB0byBhc2sgdXNlci5cbiAgICogYGZhbHNlYCAtIERvIG5vdCByZW1lbWJlciB1c2VyIGNob2ljZS5cbiAgICogYHRydWVgIC0gUmVtZW1iZXIgdXNlciBjaG9pY2UuXG4gICAqL1xuICBlbmFibGVkPzogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogYSBmdW5jdGlvbiB3aGljaCBhc2tzIHRoZSB1c2VyIHdoZXRoZXIgdG8gcmVtZW1iZXIgdGhlaXIgY2hvaWNlIG9mIGFwcC5cbiAgICogSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIHRoZSBkZWZhdWx0IGRpYWxvZyBwcm9tcHQgd2lsbCBub3QgYmUgc2hvd24sIGFsbG93aW5nIGZvciBhIGN1c3RvbSBVSSBmb3IgYXNraW5nIHRoZSB1c2VyLlxuICAgKiBUaGlzIHdpbGwgYmUgcGFzc2VkIGEgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIGludm9rZWQgd2l0aCBhIHNpbmdsZSBib29sZWFuIGFyZ3VtZW50IHdoaWNoIGluZGljYXRlcyB0aGUgdXNlcidzIGRlY2lzaW9uIHRvIHJlbWVtYmVyIHRoZWlyIGNob2ljZS5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBwcm9tcHRGbj86IChjYWxsYmFjazogKHJlbWVtYmVyQ2hvaWNlOiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBvcHRpb25zIHJlbGF0ZWQgdG8gdGhlIGRlZmF1bHQgZGlhbG9nIHByb21wdCB1c2VkIHRvIGFzayB0aGUgdXNlciB3aGV0aGVyIHRvIHJlbWVtYmVyIHRoZWlyIGNob2ljZSBvZiBhcHAuXG4gICAqL1xuICBwcm9tcHQ/OiBQcm9tcHRzT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBTZWxlY3Rpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIHRleHQgdG8gZGlzcGxheSBpbiB0aGUgbmF0aXZlIHBpY2tlciB3aGljaCBlbmFibGVzIHVzZXIgdG8gc2VsZWN0IHdoaWNoIG5hdmlnYXRpb24gYXBwIHRvIGxhdW5jaC5cbiAgICogRGVmYXVsdHMgdG8gXCJTZWxlY3QgYXBwIGZvciBuYXZpZ2F0aW9uXCIgaWYgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIGRpYWxvZ0hlYWRlclRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRleHQgdG8gZGlzcGxheSBmb3IgdGhlIGNhbmNlbCBidXR0b24gaW4gdGhlIG5hdGl2ZSBwaWNrZXIgd2hpY2ggZW5hYmxlcyB1c2VyIHRvIHNlbGVjdCB3aGljaCBuYXZpZ2F0aW9uIGFwcCB0byBsYXVuY2guXG4gICAqIERlZmF1bHRzIHRvIFwiQ2FuY2VsXCIgaWYgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYXBwcywgZGVmaW5lZCBhcyBgbGF1bmNobmF2aWdhdG9yLkFQUGAgY29uc3RhbnRzLCB3aGljaCBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBwaWNrZXIgaWYgdGhlIGFwcCBpcyBhdmFpbGFibGUuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcmVzdHJpY3Qgd2hpY2ggYXBwcyBhcmUgZGlzcGxheWVkLCBldmVuIGlmIHRoZXkgYXJlIGluc3RhbGxlZC5cbiAgICogQnkgZGVmYXVsdCwgYWxsIGF2YWlsYWJsZSBhcHBzIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgbGlzdD86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgdXNlciBzZWxlY3RzIGFuIGFwcCBpbiB0aGUgbmF0aXZlIHBpY2tlci5cbiAgICogQSBzaW5nbGUgc3RyaW5nIGFyZ3VtZW50IGlzIHBhc3NlZCB3aGljaCBpcyB0aGUgYXBwIHdoYXQgd2FzIHNlbGVjdGVkIGRlZmluZWQgYXMgYSBgbGF1bmNobmF2aWdhdG9yLkFQUGAgY29uc3RhbnQuXG4gICAqL1xuICBjYWxsYmFjaz86IChhcHA6IHN0cmluZykgPT4gdm9pZDtcblxuICAvKipcbiAgICogKEFuZHJvaWQgb25seSkgbmF0aXZlIHBpY2tlciB0aGVtZS4gU3BlY2lmeSB1c2luZyBgYWN0aW9uc2hlZXQuQU5EUk9JRF9USEVNRVNgIGNvbnN0YW50cy5cbiAgICogRGVmYXVsdCBgYWN0aW9uc2hlZXQuQU5EUk9JRF9USEVNRVMuVEhFTUVfSE9MT19MSUdIVGBcbiAgICovXG4gIGFuZHJvaWRUaGVtZT86IG51bWJlcjtcblxuICAvKipcbiAgICogb3B0aW9ucyByZWxhdGVkIHRvIHdoZXRoZXIgdG8gcmVtZW1iZXIgdXNlciBjaG9pY2Ugb2YgYXBwIGZvciBuZXh0IHRpbWUsIGluc3RlYWQgb2YgYXNraW5nIGFnYWluIGZvciB1c2VyIGNob2ljZS5cbiAgICovXG4gIHJlbWVtYmVyQ2hvaWNlPzogUmVtZW1iZXJDaG9pY2VPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaE5hdmlnYXRvck9wdGlvbnMge1xuICAvKipcbiAgICogQSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgbmF2aWdhdGlvbiBhcHAgaXMgc3VjY2Vzc2Z1bGx5IGxhdW5jaGVkLlxuICAgKi9cbiAgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgdG8gaW52b2tlIGlmIGFuIGVycm9yIGlzIGVuY291bnRlcmVkIHdoaWxlIGxhdW5jaGluZyB0aGUgYXBwLlxuICAgKiBBIHNpbmdsZSBzdHJpbmcgYXJndW1lbnQgY29udGFpbmluZyB0aGUgZXJyb3IgbWVzc2FnZSB3aWxsIGJlIHBhc3NlZCBpbi5cbiAgICovXG4gIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZDtcblxuICAvKipcbiAgICogbmFtZSBvZiB0aGUgbmF2aWdhdGlvbiBhcHAgdG8gdXNlIGZvciBkaXJlY3Rpb25zLlxuICAgKiBTcGVjaWZ5IHVzaW5nIGxhdW5jaG5hdmlnYXRvci5BUFAgY29uc3RhbnRzLlxuICAgKiBlLmcuIGBsYXVuY2huYXZpZ2F0b3IuQVBQLkdPT0dMRV9NQVBTYC5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gVXNlciBTZWxlY3Rpb24uXG4gICAqL1xuICBhcHA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIG5pY2tuYW1lIHRvIGRpc3BsYXkgaW4gYXBwIGZvciBkZXN0aW5hdGlvbi4gZS5nLiBcIkJvYidzIEhvdXNlXCIuXG4gICAqL1xuICBkZXN0aW5hdGlvbk5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHBvaW50IG9mIHRoZSBuYXZpZ2F0aW9uLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgY3VycmVudCBkZXZpY2UgbG9jYXRpb24gd2lsbCBiZSB1c2VkLlxuICAgKiBFaXRoZXI6XG4gICAqICAtIGEge3N0cmluZ30gY29udGFpbmluZyB0aGUgYWRkcmVzcy4gZS5nLiBcIkJ1Y2tpbmdoYW0gUGFsYWNlLCBMb25kb25cIlxuICAgKiAgLSBhIHtzdHJpbmd9IGNvbnRhaW5pbmcgYSBsYXRpdHVkZS9sb25naXR1ZGUgY29vcmRpbmF0ZS4gZS5nLiBcIjUwLjEuIC00LjBcIlxuICAgKiAgLSBhbiB7YXJyYXl9LCB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgbGF0aXR1ZGUgYW5kIHRoZSBzZWNvbmQgZWxlbWVudCBpcyBhIGxvbmdpdHVkZSwgYXMgZGVjaW1hbCBudW1iZXJzLiBlLmcuIFs1MC4xLCAtNC4wXVxuICAgKi9cbiAgc3RhcnQ/OiBzdHJpbmcgfCBudW1iZXJbXTtcblxuICAvKipcbiAgICogbmlja25hbWUgdG8gZGlzcGxheSBpbiBhcHAgZm9yIHN0YXJ0IC4gZS5nLiBcIk15IEhvdXNlXCIuXG4gICAqL1xuICBzdGFydE5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRyYW5zcG9ydGF0aW9uIG1vZGUgZm9yIG5hdmlnYXRpb246IFwiZHJpdmluZ1wiLCBcIndhbGtpbmdcIiBvciBcInRyYW5zaXRcIi4gRGVmYXVsdHMgdG8gXCJkcml2aW5nXCIgaWYgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIHRyYW5zcG9ydE1vZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGRlYnVnIGxvZyBvdXRwdXQgd2lsbCBiZSBnZW5lcmF0ZWQgYnkgdGhlIHBsdWdpbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBlbmFibGVEZWJ1Zz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGEga2V5L3ZhbHVlIG1hcCBvZiBleHRyYSBhcHAtc3BlY2lmaWMgcGFyYW1ldGVycy4gRm9yIGV4YW1wbGUsIHRvIHRlbGwgR29vZ2xlIE1hcHMgb24gQW5kcm9pZCB0byBkaXNwbGF5IFNhdGVsbGl0ZSB2aWV3IGluIFwibWFwc1wiIGxhdW5jaCBtb2RlOiBge1widFwiOiBcImtcIn1gXG4gICAqL1xuICBleHRyYXM/OiBhbnk7XG5cbiAgLyoqXG4gICAqIChBbmRyb2lkIG9ubHkpIG1vZGUgaW4gd2hpY2ggdG8gb3BlbiBHb29nbGUgTWFwcyBhcHAuXG4gICAqIGBsYXVuY2huYXZpZ2F0b3IuTEFVTkNIX01PREUuTUFQU2Agb3IgYGxhdW5jaG5hdmlnYXRvci5MQVVOQ0hfTU9ERS5UVVJOX0JZX1RVUk5gXG4gICAqIERlZmF1bHRzIHRvIGBsYXVuY2huYXZpZ2F0b3IuTEFVTkNIX01PREUuTUFQU2AgaWYgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIGxhdW5jaE1vZGVHb29nbGVNYXBzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAoaU9TIG9ubHkpIG1ldGhvZCB0byB1c2UgdG8gb3BlbiBBcHBsZSBNYXBzIGFwcC5cbiAgICogYGxhdW5jaG5hdmlnYXRvci5MQVVOQ0hfTU9ERS5VUklfU0NIRU1FYCBvciBgbGF1bmNobmF2aWdhdG9yLkxBVU5DSF9NT0RFLk1BUEtJVGBcbiAgICogRGVmYXVsdHMgdG8gYGxhdW5jaG5hdmlnYXRvci5MQVVOQ0hfTU9ERS5VUklfU0NIRU1FYCBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgbGF1bmNoTW9kZUFwcGxlTWFwcz86IHN0cmluZztcblxuICAvKipcbiAgICogKFdpbmRvd3Mgb25seSkgSWYgZmFsc2UsIHRoZSBwbHVnaW4gd2lsbCBOT1QgYXR0ZW1wdCB0byB1c2UgdGhlIGdlb2xvY2F0aW9uIHBsdWdpbiB0byBkZXRlcm1pbmUgdGhlIGN1cnJlbnQgZGV2aWNlIHBvc2l0aW9uIHdoZW4gdGhlIHN0YXJ0IGxvY2F0aW9uIHBhcmFtZXRlciBpcyBvbWl0dGVkLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgZW5hYmxlR2VvbG9jYXRpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAoQW5kcm9pZCBhbmQgaU9TIG9ubHkpIElmIHRydWUsIGFuZCBpbnB1dCBsb2NhdGlvbiB0eXBlKHMpIGRvZXNuJ3QgbWF0Y2ggdGhvc2UgcmVxdWlyZWQgYnkgdGhlIGFwcCwgdXNlIGdlb2NvZGluZyB0byBvYnRhaW4gdGhlIGFkZHJlc3MvY29vcmRzIGFzIHJlcXVpcmVkLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgZW5hYmxlR2VvY29kaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogb3B0aW9ucyByZWxhdGVkIHRvIHRoZSBkZWZhdWx0IG5hdGl2ZSBhY3Rpb25zaGVldCBwaWNrZXIgd2hpY2ggZW5hYmxlcyB1c2VyIHRvIHNlbGVjdCB3aGljaCBuYXZpZ2F0aW9uIGFwcCB0byBsYXVuY2ggaWYgYGFwcGAgaXMgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIGFwcFNlbGVjdGlvbj86IEFwcFNlbGVjdGlvbk9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNob2ljZSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhIHVzZXIgY2hvaWNlIGV4aXN0cyBmb3IgYSBwcmVmZXJyZWQgbmF2aWdhdG9yIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gcGFzcyByZXN1bHQgdG86IHdpbGwgcmVjZWl2ZSBhIGJvb2xlYW4gYXJndW1lbnQuXG4gICAqL1xuICBleGlzdHM6IChjYWxsYmFjazogKGV4aXN0czogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IHVzZXIgY2hvaWNlIG9mIHByZWZlcnJlZCBuYXZpZ2F0b3IgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBwYXNzIHJlc3VsdCB0bzogd2lsbCByZWNlaXZlIGEgc3RyaW5nIGFyZ3VtZW50IGluZGljYXRpbmcgdGhlIGFwcCwgd2hpY2ggaXMgYSBjb25zdGFudCBpbiBgbGF1bmNobmF2aWdhdG9yLkFQUGAuXG4gICAqL1xuICBnZXQ6IChjYWxsYmFjazogKGFwcDogc3RyaW5nKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHVzZXIgY2hvaWNlIG9mIHByZWZlcnJlZCBuYXZpZ2F0b3IgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gYXBwIC0gYXBwIHRvIHNldCBhcyBwcmVmZXJyZWQgY2hvaWNlIGFzIGEgY29uc3RhbnQgaW4gYGxhdW5jaG5hdmlnYXRvci5BUFBgLlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBjYWxsIG9uY2Ugb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgc2V0OiAoYXBwOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgdXNlciBjaG9pY2Ugb2YgcHJlZmVycmVkIG5hdmlnYXRvciBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGNhbGwgb25jZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gICAqL1xuICBjbGVhcjogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9tcHRlZCB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB1c2VyIGhhcyBhbHJlYWR5IGJlZW4gcHJvbXB0ZWQgd2hldGhlciB0byByZW1lbWJlciB0aGVpciBjaG9pY2UgYSBwcmVmZXJyZWQgbmF2aWdhdG9yIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gcGFzcyByZXN1bHQgdG86IHdpbGwgcmVjZWl2ZSBhIGJvb2xlYW4gYXJndW1lbnQuXG4gICAqL1xuICBnZXQ6IChjYWxsYmFjazogKGV4aXN0czogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogU2V0cyBmbGFnIGluZGljYXRpbmcgdXNlciBoYXMgYWxyZWFkeSBiZWVuIHByb21wdGVkIHdoZXRoZXIgdG8gcmVtZW1iZXIgdGhlaXIgY2hvaWNlIGEgcHJlZmVycmVkIG5hdmlnYXRvciBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGNhbGwgb25jZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gICAqL1xuICBzZXQ6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ2xlYXJzIGZsYWcgd2hpY2ggaW5kaWNhdGVzIGlmIHVzZXIgaGFzIGFscmVhZHkgYmVlbiBwcm9tcHRlZCB3aGV0aGVyIHRvIHJlbWVtYmVyIHRoZWlyIGNob2ljZSBhIHByZWZlcnJlZCBuYXZpZ2F0b3IgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBjYWxsIG9uY2Ugb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgY2xlYXI6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBTZWxlY3Rpb24ge1xuICB1c2VyQ2hvaWNlOiBVc2VyQ2hvaWNlO1xuICB1c2VyUHJvbXB0ZWQ6IFVzZXJQcm9tcHRlZDtcbn1cblxuLyoqXG4gKiBAbmFtZSBMYXVuY2ggTmF2aWdhdG9yXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiB1ay5jby53b3JraW5nZWRnZS5waG9uZWdhcC5wbHVnaW4ubGF1bmNobmF2aWdhdG9yLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbTGF1bmNoTmF2aWdhdG9yIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL3Bob25lZ2FwLWxhdW5jaC1uYXZpZ2F0b3IpLlxuICogQHVzYWdlXG4gKiBQbGVhc2UgcmVmZXIgdG8gdGhlIHBsdWdpbidzIHJlcG8gZm9yIGRldGFpbGVkIHVzYWdlLiBUaGlzIGRvY3MgcGFnZSBvbmx5IGV4cGxhaW5zIHRoZSBOYXRpdmUgd3JhcHBlci5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMYXVuY2hOYXZpZ2F0b3IsIExhdW5jaE5hdmlnYXRvck9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbGF1bmNoLW5hdmlnYXRvci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbGF1bmNoTmF2aWdhdG9yOiBMYXVuY2hOYXZpZ2F0b3IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBvcHRpb25zOiBMYXVuY2hOYXZpZ2F0b3JPcHRpb25zID0ge1xuICogICBzdGFydDogJ0xvbmRvbiwgT04nLFxuICogICBhcHA6IExhdW5jaE5hdmlnYXRvci5BUFBTLlVCRVJcbiAqIH1cbiAqXG4gKiB0aGlzLmxhdW5jaE5hdmlnYXRvci5uYXZpZ2F0ZSgnVG9yb250bywgT04nLCBvcHRpb25zKVxuICogICAudGhlbihcbiAqICAgICBzdWNjZXNzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBuYXZpZ2F0b3InKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3IgbGF1bmNoaW5nIG5hdmlnYXRvcicsIGVycm9yKVxuICogICApO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTGF1bmNoTmF2aWdhdG9yT3B0aW9uc1xuICogUHJvbXB0c09wdGlvbnNcbiAqIFJlbWVtYmVyQ2hvaWNlT3B0aW9uc1xuICogQXBwU2VsZWN0aW9uT3B0aW9uc1xuICogVXNlckNob2ljZVxuICogVXNlclByb21wdGVkXG4gKiBBcHBTZWxlY3Rpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdMYXVuY2hOYXZpZ2F0b3InLFxuICBwbHVnaW46ICd1ay5jby53b3JraW5nZWRnZS5waG9uZWdhcC5wbHVnaW4ubGF1bmNobmF2aWdhdG9yJyxcbiAgcGx1Z2luUmVmOiAnbGF1bmNobmF2aWdhdG9yJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvcGhvbmVnYXAtbGF1bmNoLW5hdmlnYXRvcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYXVuY2hOYXZpZ2F0b3IgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEFQUDogYW55ID0ge1xuICAgIFVTRVJfU0VMRUNUOiAndXNlcl9zZWxlY3QnLFxuICAgIEFQUExFX01BUFM6ICdhcHBsZV9tYXBzJyxcbiAgICBHT09HTEVfTUFQUzogJ2dvb2dsZV9tYXBzJyxcbiAgICBXQVpFOiAnd2F6ZScsXG4gICAgQ0lUWU1BUFBFUjogJ2NpdHltYXBwZXInLFxuICAgIE5BVklHT046ICduYXZpZ29uJyxcbiAgICBUUkFOU0lUX0FQUDogJ3RyYW5zaXRfYXBwJyxcbiAgICBZQU5ERVg6ICd5YW5kZXgnLFxuICAgIFVCRVI6ICd1YmVyJyxcbiAgICBUT01UT006ICd0b210b20nLFxuICAgIEJJTkdfTUFQUzogJ2JpbmdfbWFwcycsXG4gICAgU1lHSUM6ICdzeWdpYycsXG4gICAgSEVSRV9NQVBTOiAnaGVyZV9tYXBzJyxcbiAgICBNT09WSVQ6ICdtb292aXQnLFxuICB9O1xuXG4gIFRSQU5TUE9SVF9NT0RFOiBhbnkgPSB7XG4gICAgRFJJVklORzogJ2RyaXZpbmcnLFxuICAgIFdBTEtJTkc6ICd3YWxraW5nJyxcbiAgICBCSUNZQ0xJTkc6ICdiaWN5Y2xpbmcnLFxuICAgIFRSQU5TSVQ6ICd0cmFuc2l0JyxcbiAgfTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgYXBwU2VsZWN0aW9uOiBBcHBTZWxlY3Rpb247XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIG5hdmlnYXRvciBhcHBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uIHtzdHJpbmd8bnVtYmVyW119IExvY2F0aW9uIG5hbWUgb3IgY29vcmRpbmF0ZXMgKGFzIHN0cmluZyBvciBhcnJheSlcbiAgICogQHBhcmFtIG9wdGlvbnMge0xhdW5jaE5hdmlnYXRvck9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIG5hdmlnYXRlKGRlc3RpbmF0aW9uOiBzdHJpbmcgfCBudW1iZXJbXSwgb3B0aW9ucz86IExhdW5jaE5hdmlnYXRvck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBhcHAgaXMgaW5zdGFsbGVkIGFuZCBhdmFpbGFibGUgb24gdGhlIGN1cnJlbnQgZGV2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0gYXBwIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXBwQXZhaWxhYmxlKGFwcDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3QgaW5kaWNhdGluZyB3aGljaCBhcHBzIGFyZSBpbnN0YWxsZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGUgY3VycmVudCBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXZhaWxhYmxlQXBwcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgc3BlY2lmaWVkIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGFwcCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEFwcERpc3BsYXlOYW1lKGFwcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsaXN0IG9mIHN1cHBvcnRlZCBhcHBzIG9uIGEgZ2l2ZW4gcGxhdGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSBwbGF0Zm9ybSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXBwc0ZvclBsYXRmb3JtKHBsYXRmb3JtOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBhbiBhcHAgb24gYSBnaXZlbiBwbGF0Zm9ybSBzdXBwb3J0cyBzcGVjaWZpY2F0aW9uIG9mIHRyYW5zcG9ydCBtb2RlLlxuICAgKlxuICAgKiBAcGFyYW0gYXBwIHtzdHJpbmd9IHNwZWNpZmllZCBhcyBhIHN0cmluZywgeW91IGNhbiB1c2Ugb25lIG9mIHRoZSBjb25zdGFudHMsIGUuZyBgTGF1bmNoTmF2aWdhdG9yLkFQUC5HT09HTEVfTUFQU2BcbiAgICogQHBhcmFtIHBsYXRmb3JtIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN1cHBvcnRzVHJhbnNwb3J0TW9kZShhcHA6IHN0cmluZywgcGxhdGZvcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHRyYW5zcG9ydCBtb2RlcyBzdXBwb3J0ZWQgYnkgYW4gYXBwIG9uIGEgZ2l2ZW4gcGxhdGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSBhcHAge3N0cmluZ31cbiAgICogQHBhcmFtIHBsYXRmb3JtIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRUcmFuc3BvcnRNb2RlcyhhcHA6IHN0cmluZywgcGxhdGZvcm06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGFwcCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGxhdGZvcm0ge3N0cmluZ31cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3VwcG9ydHNEZXN0TmFtZShhcHA6IHN0cmluZywgcGxhdGZvcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYW4gYXBwIG9uIGEgZ2l2ZW4gcGxhdGZvcm0gc3VwcG9ydHMgc3BlY2lmaWNhdGlvbiBvZiBzdGFydCBsb2NhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGFwcCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGxhdGZvcm0ge3N0cmluZ31cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3VwcG9ydHNTdGFydChhcHA6IHN0cmluZywgcGxhdGZvcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gYXBwIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwbGF0Zm9ybSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdXBwb3J0c1N0YXJ0TmFtZShhcHA6IHN0cmluZywgcGxhdGZvcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYW4gYXBwIG9uIGEgZ2l2ZW4gcGxhdGZvcm0gc3VwcG9ydHMgc3BlY2lmaWNhdGlvbiBvZiBsYXVuY2ggbW9kZS5cbiAgICogTm90ZSB0aGF0IGN1cnJlbnRseSBvbmx5IEdvb2dsZSBNYXBzIG9uIEFuZHJvaWQgZG9lcy5cbiAgICpcbiAgICogQHBhcmFtIGFwcCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGxhdGZvcm0ge3N0cmluZ31cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3VwcG9ydHNMYXVuY2hNb2RlKGFwcDogc3RyaW5nLCBwbGF0Zm9ybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbiB7c3RyaW5nIHwgbnVtYmVyW119XG4gICAqIEBwYXJhbSBvcHRpb25zIHtMYXVuY2hOYXZpZ2F0b3JPcHRpb25zfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVzZXJTZWxlY3QoZGVzdGluYXRpb246IHN0cmluZyB8IG51bWJlcltdLCBvcHRpb25zOiBMYXVuY2hOYXZpZ2F0b3JPcHRpb25zKTogdm9pZCB7fVxufVxuIl19