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
var AndroidPermissionsOriginal = /** @class */ (function (_super) {
    __extends(AndroidPermissionsOriginal, _super);
    function AndroidPermissionsOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PERMISSION = {
            ACCESS_CHECKIN_PROPERTIES: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
            ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
            ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
            ACCESS_LOCATION_EXTRA_COMMANDS: 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS',
            ACCESS_MOCK_LOCATION: 'android.permission.ACCESS_MOCK_LOCATION',
            ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE',
            ACCESS_SURFACE_FLINGER: 'android.permission.ACCESS_SURFACE_FLINGER',
            ACCESS_WIFI_STATE: 'android.permission.ACCESS_WIFI_STATE',
            ACCOUNT_MANAGER: 'android.permission.ACCOUNT_MANAGER',
            ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
            AUTHENTICATE_ACCOUNTS: 'android.permission.AUTHENTICATE_ACCOUNTS',
            BATTERY_STATS: 'android.permission.BATTERY_STATS',
            BIND_ACCESSIBILITY_SERVICE: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
            BIND_APPWIDGET: 'android.permission.BIND_APPWIDGET',
            BIND_CARRIER_MESSAGING_SERVICE: 'android.permission.BIND_CARRIER_MESSAGING_SERVICE',
            BIND_DEVICE_ADMIN: 'android.permission.BIND_DEVICE_ADMIN',
            BIND_DREAM_SERVICE: 'android.permission.BIND_DREAM_SERVICE',
            BIND_INPUT_METHOD: 'android.permission.BIND_INPUT_METHOD',
            BIND_NFC_SERVICE: 'android.permission.BIND_NFC_SERVICE',
            BIND_NOTIFICATION_LISTENER_SERVICE: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
            BIND_PRINT_SERVICE: 'android.permission.BIND_PRINT_SERVICE',
            BIND_REMOTEVIEWS: 'android.permission.BIND_REMOTEVIEWS',
            BIND_TEXT_SERVICE: 'android.permission.BIND_TEXT_SERVICE',
            BIND_TV_INPUT: 'android.permission.BIND_TV_INPUT',
            BIND_VOICE_INTERACTION: 'android.permission.BIND_VOICE_INTERACTION',
            BIND_VPN_SERVICE: 'android.permission.BIND_VPN_SERVICE',
            BIND_WALLPAPER: 'android.permission.BIND_WALLPAPER',
            BLUETOOTH: 'android.permission.BLUETOOTH',
            BLUETOOTH_ADMIN: 'android.permission.BLUETOOTH_ADMIN',
            BLUETOOTH_PRIVILEGED: 'android.permission.BLUETOOTH_PRIVILEGED',
            BODY_SENSORS: 'android.permission.BODY_SENSORS',
            BRICK: 'android.permission.BRICK',
            BROADCAST_PACKAGE_REMOVED: 'android.permission.BROADCAST_PACKAGE_REMOVED',
            BROADCAST_SMS: 'android.permission.BROADCAST_SMS',
            BROADCAST_STICKY: 'android.permission.BROADCAST_STICKY',
            BROADCAST_WAP_PUSH: 'android.permission.BROADCAST_WAP_PUSH',
            CALL_PHONE: 'android.permission.CALL_PHONE',
            CALL_PRIVILEGED: 'android.permission.CALL_PRIVILEGED',
            CAMERA: 'android.permission.CAMERA',
            CAPTURE_AUDIO_OUTPUT: 'android.permission.CAPTURE_AUDIO_OUTPUT',
            CAPTURE_SECURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT',
            CAPTURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_VIDEO_OUTPUT',
            CHANGE_COMPONENT_ENABLED_STATE: 'android.permission.CHANGE_COMPONENT_ENABLED_STATE',
            CHANGE_CONFIGURATION: 'android.permission.CHANGE_CONFIGURATION',
            CHANGE_NETWORK_STATE: 'android.permission.CHANGE_NETWORK_STATE',
            CHANGE_WIFI_MULTICAST_STATE: 'android.permission.CHANGE_WIFI_MULTICAST_STATE',
            CHANGE_WIFI_STATE: 'android.permission.CHANGE_WIFI_STATE',
            CLEAR_APP_CACHE: 'android.permission.CLEAR_APP_CACHE',
            CLEAR_APP_USER_DATA: 'android.permission.CLEAR_APP_USER_DATA',
            CONTROL_LOCATION_UPDATES: 'android.permission.CONTROL_LOCATION_UPDATES',
            DELETE_CACHE_FILES: 'android.permission.DELETE_CACHE_FILES',
            DELETE_PACKAGES: 'android.permission.DELETE_PACKAGES',
            DEVICE_POWER: 'android.permission.DEVICE_POWER',
            DIAGNOSTIC: 'android.permission.DIAGNOSTIC',
            DISABLE_KEYGUARD: 'android.permission.DISABLE_KEYGUARD',
            DUMP: 'android.permission.DUMP',
            EXPAND_STATUS_BAR: 'android.permission.EXPAND_STATUS_BAR',
            FACTORY_TEST: 'android.permission.FACTORY_TEST',
            FLASHLIGHT: 'android.permission.FLASHLIGHT',
            FORCE_BACK: 'android.permission.FORCE_BACK',
            GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
            GET_PACKAGE_SIZE: 'android.permission.GET_PACKAGE_SIZE',
            GET_TASKS: 'android.permission.GET_TASKS',
            GET_TOP_ACTIVITY_INFO: 'android.permission.GET_TOP_ACTIVITY_INFO',
            GLOBAL_SEARCH: 'android.permission.GLOBAL_SEARCH',
            HARDWARE_TEST: 'android.permission.HARDWARE_TEST',
            INJECT_EVENTS: 'android.permission.INJECT_EVENTS',
            INSTALL_LOCATION_PROVIDER: 'android.permission.INSTALL_LOCATION_PROVIDER',
            INSTALL_PACKAGES: 'android.permission.INSTALL_PACKAGES',
            INSTALL_SHORTCUT: 'com.android.launcher.permission.INSTALL_SHORTCUT',
            INTERNAL_SYSTEM_WINDOW: 'android.permission.INTERNAL_SYSTEM_WINDOW',
            INTERNET: 'android.permission.INTERNET',
            KILL_BACKGROUND_PROCESSES: 'android.permission.KILL_BACKGROUND_PROCESSES',
            LOCATION_HARDWARE: 'android.permission.LOCATION_HARDWARE',
            MANAGE_ACCOUNTS: 'android.permission.MANAGE_ACCOUNTS',
            MANAGE_APP_TOKENS: 'android.permission.MANAGE_APP_TOKENS',
            MANAGE_DOCUMENTS: 'android.permission.MANAGE_DOCUMENTS',
            MASTER_CLEAR: 'android.permission.MASTER_CLEAR',
            MEDIA_CONTENT_CONTROL: 'android.permission.MEDIA_CONTENT_CONTROL',
            MODIFY_AUDIO_SETTINGS: 'android.permission.MODIFY_AUDIO_SETTINGS',
            MODIFY_PHONE_STATE: 'android.permission.MODIFY_PHONE_STATE',
            MOUNT_FORMAT_FILESYSTEMS: 'android.permission.MOUNT_FORMAT_FILESYSTEMS',
            MOUNT_UNMOUNT_FILESYSTEMS: 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS',
            NFC: 'android.permission.NFC',
            PERSISTENT_ACTIVITY: 'android.permission.PERSISTENT_ACTIVITY',
            PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
            READ_CALENDAR: 'android.permission.READ_CALENDAR',
            READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
            READ_CONTACTS: 'android.permission.READ_CONTACTS',
            READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
            READ_FRAME_BUFFER: 'android.permission.READ_FRAME_BUFFER',
            READ_HISTORY_BOOKMARKS: 'com.android.browser.permission.READ_HISTORY_BOOKMARKS',
            READ_INPUT_STATE: 'android.permission.READ_INPUT_STATE',
            READ_LOGS: 'android.permission.READ_LOGS',
            READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
            READ_PROFILE: 'android.permission.READ_PROFILE',
            READ_SMS: 'android.permission.READ_SMS',
            READ_SOCIAL_STREAM: 'android.permission.READ_SOCIAL_STREAM',
            READ_SYNC_SETTINGS: 'android.permission.READ_SYNC_SETTINGS',
            READ_SYNC_STATS: 'android.permission.READ_SYNC_STATS',
            READ_USER_DICTIONARY: 'android.permission.READ_USER_DICTIONARY',
            READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
            REBOOT: 'android.permission.REBOOT',
            RECEIVE_BOOT_COMPLETED: 'android.permission.RECEIVE_BOOT_COMPLETED',
            RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
            RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
            RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
            RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
            REORDER_TASKS: 'android.permission.REORDER_TASKS',
            RESTART_PACKAGES: 'android.permission.RESTART_PACKAGES',
            SEND_RESPOND_VIA_MESSAGE: 'android.permission.SEND_RESPOND_VIA_MESSAGE',
            SEND_SMS: 'android.permission.SEND_SMS',
            SET_ACTIVITY_WATCHER: 'android.permission.SET_ACTIVITY_WATCHER',
            SET_ALARM: 'com.android.alarm.permission.SET_ALARM',
            SET_ALWAYS_FINISH: 'android.permission.SET_ALWAYS_FINISH',
            SET_ANIMATION_SCALE: 'android.permission.SET_ANIMATION_SCALE',
            SET_DEBUG_APP: 'android.permission.SET_DEBUG_APP',
            SET_ORIENTATION: 'android.permission.SET_ORIENTATION',
            SET_POINTER_SPEED: 'android.permission.SET_POINTER_SPEED',
            SET_PREFERRED_APPLICATIONS: 'android.permission.SET_PREFERRED_APPLICATIONS',
            SET_PROCESS_LIMIT: 'android.permission.SET_PROCESS_LIMIT',
            SET_TIME: 'android.permission.SET_TIME',
            SET_TIME_ZONE: 'android.permission.SET_TIME_ZONE',
            SET_WALLPAPER: 'android.permission.SET_WALLPAPER',
            SET_WALLPAPER_HINTS: 'android.permission.SET_WALLPAPER_HINTS',
            SIGNAL_PERSISTENT_PROCESSES: 'android.permission.SIGNAL_PERSISTENT_PROCESSES',
            STATUS_BAR: 'android.permission.STATUS_BAR',
            SUBSCRIBED_FEEDS_READ: 'android.permission.SUBSCRIBED_FEEDS_READ',
            SUBSCRIBED_FEEDS_WRITE: 'android.permission.SUBSCRIBED_FEEDS_WRITE',
            SYSTEM_ALERT_WINDOW: 'android.permission.SYSTEM_ALERT_WINDOW',
            TRANSMIT_IR: 'android.permission.TRANSMIT_IR',
            UNINSTALL_SHORTCUT: 'com.android.launcher.permission.UNINSTALL_SHORTCUT',
            UPDATE_DEVICE_STATS: 'android.permission.UPDATE_DEVICE_STATS',
            USE_CREDENTIALS: 'android.permission.USE_CREDENTIALS',
            USE_SIP: 'android.permission.USE_SIP',
            VIBRATE: 'android.permission.VIBRATE',
            WAKE_LOCK: 'android.permission.WAKE_LOCK',
            WRITE_APN_SETTINGS: 'android.permission.WRITE_APN_SETTINGS',
            WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
            WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
            WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
            WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
            WRITE_GSERVICES: 'android.permission.WRITE_GSERVICES',
            WRITE_HISTORY_BOOKMARKS: 'com.android.browser.permission.WRITE_HISTORY_BOOKMARKS',
            WRITE_PROFILE: 'android.permission.WRITE_PROFILE',
            WRITE_SECURE_SETTINGS: 'android.permission.WRITE_SECURE_SETTINGS',
            WRITE_SETTINGS: 'android.permission.WRITE_SETTINGS',
            WRITE_SMS: 'android.permission.WRITE_SMS',
            WRITE_SOCIAL_STREAM: 'android.permission.WRITE_SOCIAL_STREAM',
            WRITE_SYNC_SETTINGS: 'android.permission.WRITE_SYNC_SETTINGS',
            WRITE_USER_DICTIONARY: 'android.permission.WRITE_USER_DICTIONARY',
            WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL',
        };
        return _this;
    }
    AndroidPermissionsOriginal.prototype.checkPermission = function (permission) { return cordova(this, "checkPermission", {}, arguments); };
    AndroidPermissionsOriginal.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", {}, arguments); };
    AndroidPermissionsOriginal.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", {}, arguments); };
    AndroidPermissionsOriginal.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", {}, arguments); };
    AndroidPermissionsOriginal.pluginName = "AndroidPermissions";
    AndroidPermissionsOriginal.plugin = "cordova-plugin-android-permissions";
    AndroidPermissionsOriginal.pluginRef = "cordova.plugins.permissions";
    AndroidPermissionsOriginal.repo = "https://github.com/NeoLSN/cordova-plugin-android-permissions";
    AndroidPermissionsOriginal.platforms = ["Android"];
    return AndroidPermissionsOriginal;
}(AwesomeCordovaNativePlugin));
var AndroidPermissions = new AndroidPermissionsOriginal();
export { AndroidPermissions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1wZXJtaXNzaW9ucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFxQ3BELHNDQUEwQjs7O1FBQ2hFLGdCQUFVLEdBQVE7WUFDaEIseUJBQXlCLEVBQUUsOENBQThDO1lBQ3pFLHNCQUFzQixFQUFFLDJDQUEyQztZQUNuRSxvQkFBb0IsRUFBRSx5Q0FBeUM7WUFDL0QsOEJBQThCLEVBQUUsbURBQW1EO1lBQ25GLG9CQUFvQixFQUFFLHlDQUF5QztZQUMvRCxvQkFBb0IsRUFBRSx5Q0FBeUM7WUFDL0Qsc0JBQXNCLEVBQUUsMkNBQTJDO1lBQ25FLGlCQUFpQixFQUFFLHNDQUFzQztZQUN6RCxlQUFlLEVBQUUsb0NBQW9DO1lBQ3JELGFBQWEsRUFBRSxnREFBZ0Q7WUFDL0QscUJBQXFCLEVBQUUsMENBQTBDO1lBQ2pFLGFBQWEsRUFBRSxrQ0FBa0M7WUFDakQsMEJBQTBCLEVBQUUsK0NBQStDO1lBQzNFLGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsOEJBQThCLEVBQUUsbURBQW1EO1lBQ25GLGlCQUFpQixFQUFFLHNDQUFzQztZQUN6RCxrQkFBa0IsRUFBRSx1Q0FBdUM7WUFDM0QsaUJBQWlCLEVBQUUsc0NBQXNDO1lBQ3pELGdCQUFnQixFQUFFLHFDQUFxQztZQUN2RCxrQ0FBa0MsRUFBRSx1REFBdUQ7WUFDM0Ysa0JBQWtCLEVBQUUsdUNBQXVDO1lBQzNELGdCQUFnQixFQUFFLHFDQUFxQztZQUN2RCxpQkFBaUIsRUFBRSxzQ0FBc0M7WUFDekQsYUFBYSxFQUFFLGtDQUFrQztZQUNqRCxzQkFBc0IsRUFBRSwyQ0FBMkM7WUFDbkUsZ0JBQWdCLEVBQUUscUNBQXFDO1lBQ3ZELGNBQWMsRUFBRSxt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QztZQUNuRCxjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsc0JBQXNCLEVBQUUsMkNBQTJDO1lBQ25FLGVBQWUsRUFBRSxvQ0FBb0M7WUFDckQsdUJBQXVCLEVBQUUsd0RBQXdEO1lBQ2pGLGFBQWEsRUFBRSxrQ0FBa0M7WUFDakQscUJBQXFCLEVBQUUsMENBQTBDO1lBQ2pFLGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsU0FBUyxFQUFFLDhCQUE4QjtZQUN6QyxtQkFBbUIsRUFBRSx3Q0FBd0M7WUFDN0QsbUJBQW1CLEVBQUUsd0NBQXdDO1lBQzdELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxlQUFlLEVBQUUsa0RBQWtEO1NBQ3BFLENBQUM7OztJQVNGLDRDQUFlLGFBQUMsVUFBa0I7SUFXbEMsOENBQWlCLGFBQUMsVUFBa0I7SUFXcEMsK0NBQWtCLGFBQUMsV0FBcUI7SUFXeEMsMENBQWEsYUFBQyxVQUFrQjs7Ozs7OzZCQTFPbEM7RUFzQ3dDLDBCQUEwQjtTQUFyRCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEFuZHJvaWQgUGVybWlzc2lvbnNcbiAqIEBwcmVtaWVyIGFuZHJvaWQtcGVybWlzc2lvbnNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaXMgZGVzaWduZWQgdG8gc3VwcG9ydCBBbmRyb2lkIG5ldyBwZXJtaXNzaW9ucyBjaGVja2luZyBtZWNoYW5pc20uXG4gKlxuICogWW91IGNhbiBmaW5kIGFsbCBwZXJtaXNzaW9ucyBoZXJlOiBodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9yZWZlcmVuY2UvYW5kcm9pZC9NYW5pZmVzdC5wZXJtaXNzaW9uLmh0bWxcbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBBbmRyb2lkUGVybWlzc2lvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRQZXJtaXNzaW9uczogQW5kcm9pZFBlcm1pc3Npb25zKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5jaGVja1Blcm1pc3Npb24odGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5DQU1FUkEpLnRoZW4oXG4gKiAgIHJlc3VsdCA9PiBjb25zb2xlLmxvZygnSGFzIHBlcm1pc3Npb24/JyxyZXN1bHQuaGFzUGVybWlzc2lvbiksXG4gKiAgIGVyciA9PiB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbih0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSlcbiAqICk7XG4gKlxuICogdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb25zKFt0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSwgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5HRVRfQUNDT1VOVFNdKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBBbmRyb2lkIDI2IGFuZCBhYm92ZTogZHVlIHRvIEFuZHJvaWQgMjYncyBjaGFuZ2VzIHRvIHBlcm1pc3Npb25zIGhhbmRsaW5nIChwZXJtaXNzaW9ucyBhcmUgcmVxdWVzdGVkIGF0IHRpbWUgb2YgdXNlIHJhdGhlciB0aGFuIGF0IHJ1bnRpbWUsKSBpZiB5b3VyIGFwcCBkb2VzIG5vdCBpbmNsdWRlIGFueSBmdW5jdGlvbnMgKGVnLiBvdGhlciBJb25pYyBOYXRpdmUgcGx1Z2lucykgdGhhdCB1dGlsaXplIGEgcGFydGljdWxhciBwZXJtaXNzaW9uLCB0aGVuIGByZXF1ZXN0UGVybWlzc2lvbigpYCBhbmQgYHJlcXVlc3RQZXJtaXNzaW9ucygpYCB3aWxsIHJlc29sdmUgaW1tZWRpYXRlbHkgd2l0aCBubyBwcm9tcHQgc2hvd24gdG8gdGhlIHVzZXIuICBUaHVzLCB5b3UgbXVzdCBpbmNsdWRlIGEgZnVuY3Rpb24gdXRpbGl6aW5nIHRoZSBmZWF0dXJlIHlvdSB3b3VsZCBsaWtlIHRvIHVzZSBiZWZvcmUgcmVxdWVzdGluZyBwZXJtaXNzaW9uIGZvciBpdC5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbmRyb2lkUGVybWlzc2lvbnMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLXBlcm1pc3Npb25zJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnBlcm1pc3Npb25zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZW9MU04vY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wZXJtaXNzaW9ucycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZHJvaWRQZXJtaXNzaW9ucyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgUEVSTUlTU0lPTjogYW55ID0ge1xuICAgIEFDQ0VTU19DSEVDS0lOX1BST1BFUlRJRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NIRUNLSU5fUFJPUEVSVElFUycsXG4gICAgQUNDRVNTX0NPQVJTRV9MT0NBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OJyxcbiAgICBBQ0NFU1NfRklORV9MT0NBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTicsXG4gICAgQUNDRVNTX0xPQ0FUSU9OX0VYVFJBX0NPTU1BTkRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19MT0NBVElPTl9FWFRSQV9DT01NQU5EUycsXG4gICAgQUNDRVNTX01PQ0tfTE9DQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX01PQ0tfTE9DQVRJT04nLFxuICAgIEFDQ0VTU19ORVRXT1JLX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19ORVRXT1JLX1NUQVRFJyxcbiAgICBBQ0NFU1NfU1VSRkFDRV9GTElOR0VSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19TVVJGQUNFX0ZMSU5HRVInLFxuICAgIEFDQ0VTU19XSUZJX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19XSUZJX1NUQVRFJyxcbiAgICBBQ0NPVU5UX01BTkFHRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDT1VOVF9NQU5BR0VSJyxcbiAgICBBRERfVk9JQ0VNQUlMOiAnY29tLmFuZHJvaWQudm9pY2VtYWlsLnBlcm1pc3Npb24uQUREX1ZPSUNFTUFJTCcsXG4gICAgQVVUSEVOVElDQVRFX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFVVEhFTlRJQ0FURV9BQ0NPVU5UUycsXG4gICAgQkFUVEVSWV9TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CQVRURVJZX1NUQVRTJyxcbiAgICBCSU5EX0FDQ0VTU0lCSUxJVFlfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0FDQ0VTU0lCSUxJVFlfU0VSVklDRScsXG4gICAgQklORF9BUFBXSURHRVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9BUFBXSURHRVQnLFxuICAgIEJJTkRfQ0FSUklFUl9NRVNTQUdJTkdfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0NBUlJJRVJfTUVTU0FHSU5HX1NFUlZJQ0UnLFxuICAgIEJJTkRfREVWSUNFX0FETUlOOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfREVWSUNFX0FETUlOJyxcbiAgICBCSU5EX0RSRUFNX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9EUkVBTV9TRVJWSUNFJyxcbiAgICBCSU5EX0lOUFVUX01FVEhPRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0lOUFVUX01FVEhPRCcsXG4gICAgQklORF9ORkNfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX05GQ19TRVJWSUNFJyxcbiAgICBCSU5EX05PVElGSUNBVElPTl9MSVNURU5FUl9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfTk9USUZJQ0FUSU9OX0xJU1RFTkVSX1NFUlZJQ0UnLFxuICAgIEJJTkRfUFJJTlRfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1BSSU5UX1NFUlZJQ0UnLFxuICAgIEJJTkRfUkVNT1RFVklFV1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9SRU1PVEVWSUVXUycsXG4gICAgQklORF9URVhUX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9URVhUX1NFUlZJQ0UnLFxuICAgIEJJTkRfVFZfSU5QVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9UVl9JTlBVVCcsXG4gICAgQklORF9WT0lDRV9JTlRFUkFDVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1ZPSUNFX0lOVEVSQUNUSU9OJyxcbiAgICBCSU5EX1ZQTl9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfVlBOX1NFUlZJQ0UnLFxuICAgIEJJTkRfV0FMTFBBUEVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfV0FMTFBBUEVSJyxcbiAgICBCTFVFVE9PVEg6ICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIJyxcbiAgICBCTFVFVE9PVEhfQURNSU46ICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX0FETUlOJyxcbiAgICBCTFVFVE9PVEhfUFJJVklMRUdFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhfUFJJVklMRUdFRCcsXG4gICAgQk9EWV9TRU5TT1JTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJPRFlfU0VOU09SUycsXG4gICAgQlJJQ0s6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJJQ0snLFxuICAgIEJST0FEQ0FTVF9QQUNLQUdFX1JFTU9WRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJPQURDQVNUX1BBQ0tBR0VfUkVNT1ZFRCcsXG4gICAgQlJPQURDQVNUX1NNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfU01TJyxcbiAgICBCUk9BRENBU1RfU1RJQ0tZOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJST0FEQ0FTVF9TVElDS1knLFxuICAgIEJST0FEQ0FTVF9XQVBfUFVTSDogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfV0FQX1BVU0gnLFxuICAgIENBTExfUEhPTkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FMTF9QSE9ORScsXG4gICAgQ0FMTF9QUklWSUxFR0VEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTExfUFJJVklMRUdFRCcsXG4gICAgQ0FNRVJBOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQScsXG4gICAgQ0FQVFVSRV9BVURJT19PVVRQVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FQVFVSRV9BVURJT19PVVRQVVQnLFxuICAgIENBUFRVUkVfU0VDVVJFX1ZJREVPX09VVFBVVDogJ2FuZHJvaWQucGVybWlzc2lvbi5DQVBUVVJFX1NFQ1VSRV9WSURFT19PVVRQVVQnLFxuICAgIENBUFRVUkVfVklERU9fT1VUUFVUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBUFRVUkVfVklERU9fT1VUUFVUJyxcbiAgICBDSEFOR0VfQ09NUE9ORU5UX0VOQUJMRURfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX0NPTVBPTkVOVF9FTkFCTEVEX1NUQVRFJyxcbiAgICBDSEFOR0VfQ09ORklHVVJBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfQ09ORklHVVJBVElPTicsXG4gICAgQ0hBTkdFX05FVFdPUktfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX05FVFdPUktfU1RBVEUnLFxuICAgIENIQU5HRV9XSUZJX01VTFRJQ0FTVF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfV0lGSV9NVUxUSUNBU1RfU1RBVEUnLFxuICAgIENIQU5HRV9XSUZJX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9XSUZJX1NUQVRFJyxcbiAgICBDTEVBUl9BUFBfQ0FDSEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0xFQVJfQVBQX0NBQ0hFJyxcbiAgICBDTEVBUl9BUFBfVVNFUl9EQVRBOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNMRUFSX0FQUF9VU0VSX0RBVEEnLFxuICAgIENPTlRST0xfTE9DQVRJT05fVVBEQVRFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5DT05UUk9MX0xPQ0FUSU9OX1VQREFURVMnLFxuICAgIERFTEVURV9DQUNIRV9GSUxFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5ERUxFVEVfQ0FDSEVfRklMRVMnLFxuICAgIERFTEVURV9QQUNLQUdFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5ERUxFVEVfUEFDS0FHRVMnLFxuICAgIERFVklDRV9QT1dFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5ERVZJQ0VfUE9XRVInLFxuICAgIERJQUdOT1NUSUM6ICdhbmRyb2lkLnBlcm1pc3Npb24uRElBR05PU1RJQycsXG4gICAgRElTQUJMRV9LRVlHVUFSRDogJ2FuZHJvaWQucGVybWlzc2lvbi5ESVNBQkxFX0tFWUdVQVJEJyxcbiAgICBEVU1QOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkRVTVAnLFxuICAgIEVYUEFORF9TVEFUVVNfQkFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkVYUEFORF9TVEFUVVNfQkFSJyxcbiAgICBGQUNUT1JZX1RFU1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uRkFDVE9SWV9URVNUJyxcbiAgICBGTEFTSExJR0hUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkZMQVNITElHSFQnLFxuICAgIEZPUkNFX0JBQ0s6ICdhbmRyb2lkLnBlcm1pc3Npb24uRk9SQ0VfQkFDSycsXG4gICAgR0VUX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdFVF9BQ0NPVU5UUycsXG4gICAgR0VUX1BBQ0tBR0VfU0laRTogJ2FuZHJvaWQucGVybWlzc2lvbi5HRVRfUEFDS0FHRV9TSVpFJyxcbiAgICBHRVRfVEFTS1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1RBU0tTJyxcbiAgICBHRVRfVE9QX0FDVElWSVRZX0lORk86ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1RPUF9BQ1RJVklUWV9JTkZPJyxcbiAgICBHTE9CQUxfU0VBUkNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdMT0JBTF9TRUFSQ0gnLFxuICAgIEhBUkRXQVJFX1RFU1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uSEFSRFdBUkVfVEVTVCcsXG4gICAgSU5KRUNUX0VWRU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5JTkpFQ1RfRVZFTlRTJyxcbiAgICBJTlNUQUxMX0xPQ0FUSU9OX1BST1ZJREVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLklOU1RBTExfTE9DQVRJT05fUFJPVklERVInLFxuICAgIElOU1RBTExfUEFDS0FHRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5TVEFMTF9QQUNLQUdFUycsXG4gICAgSU5TVEFMTF9TSE9SVENVVDogJ2NvbS5hbmRyb2lkLmxhdW5jaGVyLnBlcm1pc3Npb24uSU5TVEFMTF9TSE9SVENVVCcsXG4gICAgSU5URVJOQUxfU1lTVEVNX1dJTkRPVzogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlRFUk5BTF9TWVNURU1fV0lORE9XJyxcbiAgICBJTlRFUk5FVDogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlRFUk5FVCcsXG4gICAgS0lMTF9CQUNLR1JPVU5EX1BST0NFU1NFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5LSUxMX0JBQ0tHUk9VTkRfUFJPQ0VTU0VTJyxcbiAgICBMT0NBVElPTl9IQVJEV0FSRTogJ2FuZHJvaWQucGVybWlzc2lvbi5MT0NBVElPTl9IQVJEV0FSRScsXG4gICAgTUFOQUdFX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BTkFHRV9BQ0NPVU5UUycsXG4gICAgTUFOQUdFX0FQUF9UT0tFTlM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTUFOQUdFX0FQUF9UT0tFTlMnLFxuICAgIE1BTkFHRV9ET0NVTUVOVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTUFOQUdFX0RPQ1VNRU5UUycsXG4gICAgTUFTVEVSX0NMRUFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BU1RFUl9DTEVBUicsXG4gICAgTUVESUFfQ09OVEVOVF9DT05UUk9MOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1FRElBX0NPTlRFTlRfQ09OVFJPTCcsXG4gICAgTU9ESUZZX0FVRElPX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PRElGWV9BVURJT19TRVRUSU5HUycsXG4gICAgTU9ESUZZX1BIT05FX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PRElGWV9QSE9ORV9TVEFURScsXG4gICAgTU9VTlRfRk9STUFUX0ZJTEVTWVNURU1TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PVU5UX0ZPUk1BVF9GSUxFU1lTVEVNUycsXG4gICAgTU9VTlRfVU5NT1VOVF9GSUxFU1lTVEVNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NT1VOVF9VTk1PVU5UX0ZJTEVTWVNURU1TJyxcbiAgICBORkM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTkZDJyxcbiAgICBQRVJTSVNURU5UX0FDVElWSVRZOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlBFUlNJU1RFTlRfQUNUSVZJVFknLFxuICAgIFBST0NFU1NfT1VUR09JTkdfQ0FMTFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUFJPQ0VTU19PVVRHT0lOR19DQUxMUycsXG4gICAgUkVBRF9DQUxFTkRBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0NBTEVOREFSJyxcbiAgICBSRUFEX0NBTExfTE9HOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfQ0FMTF9MT0cnLFxuICAgIFJFQURfQ09OVEFDVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9DT05UQUNUUycsXG4gICAgUkVBRF9FWFRFUk5BTF9TVE9SQUdFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRScsXG4gICAgUkVBRF9GUkFNRV9CVUZGRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9GUkFNRV9CVUZGRVInLFxuICAgIFJFQURfSElTVE9SWV9CT09LTUFSS1M6ICdjb20uYW5kcm9pZC5icm93c2VyLnBlcm1pc3Npb24uUkVBRF9ISVNUT1JZX0JPT0tNQVJLUycsXG4gICAgUkVBRF9JTlBVVF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0lOUFVUX1NUQVRFJyxcbiAgICBSRUFEX0xPR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9MT0dTJyxcbiAgICBSRUFEX1BIT05FX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfUEhPTkVfU1RBVEUnLFxuICAgIFJFQURfUFJPRklMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1BST0ZJTEUnLFxuICAgIFJFQURfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfU01TJyxcbiAgICBSRUFEX1NPQ0lBTF9TVFJFQU06ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TT0NJQUxfU1RSRUFNJyxcbiAgICBSRUFEX1NZTkNfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TWU5DX1NFVFRJTkdTJyxcbiAgICBSRUFEX1NZTkNfU1RBVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TWU5DX1NUQVRTJyxcbiAgICBSRUFEX1VTRVJfRElDVElPTkFSWTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1VTRVJfRElDVElPTkFSWScsXG4gICAgUkVBRF9WT0lDRU1BSUw6ICdjb20uYW5kcm9pZC52b2ljZW1haWwucGVybWlzc2lvbi5SRUFEX1ZPSUNFTUFJTCcsXG4gICAgUkVCT09UOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQk9PVCcsXG4gICAgUkVDRUlWRV9CT09UX0NPTVBMRVRFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX0JPT1RfQ09NUExFVEVEJyxcbiAgICBSRUNFSVZFX01NUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX01NUycsXG4gICAgUkVDRUlWRV9TTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9TTVMnLFxuICAgIFJFQ0VJVkVfV0FQX1BVU0g6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9XQVBfUFVTSCcsXG4gICAgUkVDT1JEX0FVRElPOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJTycsXG4gICAgUkVPUkRFUl9UQVNLUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRU9SREVSX1RBU0tTJyxcbiAgICBSRVNUQVJUX1BBQ0tBR0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFU1RBUlRfUEFDS0FHRVMnLFxuICAgIFNFTkRfUkVTUE9ORF9WSUFfTUVTU0FHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5TRU5EX1JFU1BPTkRfVklBX01FU1NBR0UnLFxuICAgIFNFTkRfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFTkRfU01TJyxcbiAgICBTRVRfQUNUSVZJVFlfV0FUQ0hFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfQUNUSVZJVFlfV0FUQ0hFUicsXG4gICAgU0VUX0FMQVJNOiAnY29tLmFuZHJvaWQuYWxhcm0ucGVybWlzc2lvbi5TRVRfQUxBUk0nLFxuICAgIFNFVF9BTFdBWVNfRklOSVNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9BTFdBWVNfRklOSVNIJyxcbiAgICBTRVRfQU5JTUFUSU9OX1NDQUxFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9BTklNQVRJT05fU0NBTEUnLFxuICAgIFNFVF9ERUJVR19BUFA6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX0RFQlVHX0FQUCcsXG4gICAgU0VUX09SSUVOVEFUSU9OOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9PUklFTlRBVElPTicsXG4gICAgU0VUX1BPSU5URVJfU1BFRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1BPSU5URVJfU1BFRUQnLFxuICAgIFNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TJyxcbiAgICBTRVRfUFJPQ0VTU19MSU1JVDogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfUFJPQ0VTU19MSU1JVCcsXG4gICAgU0VUX1RJTUU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1RJTUUnLFxuICAgIFNFVF9USU1FX1pPTkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1RJTUVfWk9ORScsXG4gICAgU0VUX1dBTExQQVBFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfV0FMTFBBUEVSJyxcbiAgICBTRVRfV0FMTFBBUEVSX0hJTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9XQUxMUEFQRVJfSElOVFMnLFxuICAgIFNJR05BTF9QRVJTSVNURU5UX1BST0NFU1NFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TSUdOQUxfUEVSU0lTVEVOVF9QUk9DRVNTRVMnLFxuICAgIFNUQVRVU19CQVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uU1RBVFVTX0JBUicsXG4gICAgU1VCU0NSSUJFRF9GRUVEU19SRUFEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNVQlNDUklCRURfRkVFRFNfUkVBRCcsXG4gICAgU1VCU0NSSUJFRF9GRUVEU19XUklURTogJ2FuZHJvaWQucGVybWlzc2lvbi5TVUJTQ1JJQkVEX0ZFRURTX1dSSVRFJyxcbiAgICBTWVNURU1fQUxFUlRfV0lORE9XOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNZU1RFTV9BTEVSVF9XSU5ET1cnLFxuICAgIFRSQU5TTUlUX0lSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlRSQU5TTUlUX0lSJyxcbiAgICBVTklOU1RBTExfU0hPUlRDVVQ6ICdjb20uYW5kcm9pZC5sYXVuY2hlci5wZXJtaXNzaW9uLlVOSU5TVEFMTF9TSE9SVENVVCcsXG4gICAgVVBEQVRFX0RFVklDRV9TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5VUERBVEVfREVWSUNFX1NUQVRTJyxcbiAgICBVU0VfQ1JFREVOVElBTFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uVVNFX0NSRURFTlRJQUxTJyxcbiAgICBVU0VfU0lQOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlVTRV9TSVAnLFxuICAgIFZJQlJBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uVklCUkFURScsXG4gICAgV0FLRV9MT0NLOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldBS0VfTE9DSycsXG4gICAgV1JJVEVfQVBOX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0FQTl9TRVRUSU5HUycsXG4gICAgV1JJVEVfQ0FMRU5EQVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfQ0FMRU5EQVInLFxuICAgIFdSSVRFX0NBTExfTE9HOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0NBTExfTE9HJyxcbiAgICBXUklURV9DT05UQUNUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9DT05UQUNUUycsXG4gICAgV1JJVEVfRVhURVJOQUxfU1RPUkFHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFJyxcbiAgICBXUklURV9HU0VSVklDRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfR1NFUlZJQ0VTJyxcbiAgICBXUklURV9ISVNUT1JZX0JPT0tNQVJLUzogJ2NvbS5hbmRyb2lkLmJyb3dzZXIucGVybWlzc2lvbi5XUklURV9ISVNUT1JZX0JPT0tNQVJLUycsXG4gICAgV1JJVEVfUFJPRklMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9QUk9GSUxFJyxcbiAgICBXUklURV9TRUNVUkVfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfU0VDVVJFX1NFVFRJTkdTJyxcbiAgICBXUklURV9TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TRVRUSU5HUycsXG4gICAgV1JJVEVfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NNUycsXG4gICAgV1JJVEVfU09DSUFMX1NUUkVBTTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TT0NJQUxfU1RSRUFNJyxcbiAgICBXUklURV9TWU5DX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NZTkNfU0VUVElOR1MnLFxuICAgIFdSSVRFX1VTRVJfRElDVElPTkFSWTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9VU0VSX0RJQ1RJT05BUlknLFxuICAgIFdSSVRFX1ZPSUNFTUFJTDogJ2NvbS5hbmRyb2lkLnZvaWNlbWFpbC5wZXJtaXNzaW9uLldSSVRFX1ZPSUNFTUFJTCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBlcm1pc3Npb24gVGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrUGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uIFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uIHRvIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25zXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBlcm1pc3Npb25zIEFuIGFycmF5IHdpdGggcGVybWlzc2lvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RpbGwgd29ya3Mgbm93LCB3aWxsIG5vdCBzdXBwb3J0IGluIHRoZSBmdXR1cmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uIFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2Uge1xuICBoYXNQZXJtaXNzaW9uOiBib29sZWFuO1xufVxuIl19