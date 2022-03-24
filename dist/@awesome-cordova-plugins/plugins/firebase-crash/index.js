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
var FirebaseCrashOriginal = /** @class */ (function (_super) {
    __extends(FirebaseCrashOriginal, _super);
    function FirebaseCrashOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashOriginal.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.logError = function (message) { return cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrashOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrashOriginal.pluginName = "FirebaseCrash";
    FirebaseCrashOriginal.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrashOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrashOriginal.platforms = ["Android", "iOS"];
    return FirebaseCrashOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseCrash = new FirebaseCrashOriginal();
export { FirebaseCrash };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtY3Jhc2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNEJ6RCxpQ0FBMEI7Ozs7SUFTM0QsMkJBQUcsYUFBQyxPQUFlO0lBWW5CLGdDQUFRLGFBQUMsT0FBZTtJQVl4QixpQ0FBUyxhQUFDLE1BQWM7Ozs7Ozt3QkE5RDFCO0VBNkJtQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRmlyZWJhc2VDcmFzaFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBicmluZ3MgY3Jhc2ggcmVwb3J0aW5nIGZyb20gR29vZ2xlIEZpcmViYXNlIHRvIHlvdXIgQ29yZG92YSBwcm9qZWN0ISBBbmRyb2lkIGFuZCBpT1Mgc3VwcG9ydGVkLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaXJlYmFzZUNyYXNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpcmViYXNlLWNyYXNoJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlQ3Jhc2g6IEZpcmViYXNlQ3Jhc2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlyZWJhc2VDcmFzaC5zZXRVc2VySWQoJzEyMzQ1Njc4OScpO1xuICogdGhpcy5maXJlYmFzZUNyYXNoLmxvZygnbWVzc2FnZScpO1xuICogdGhpcy5maXJlYmFzZUNyYXNoLmxvZ0Vycm9yKCdub24gZmF0YWwgZXhjZXB0aW9uJyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VDcmFzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNyYXNoJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmNyYXNobHl0aWNzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNyYXNoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQ3Jhc2ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBBZGQgbG9nZ2luZyB0aGF0IHdpbGwgYmUgc2VudCB3aXRoIHlvdXIgY3Jhc2ggZGF0YSBpbiBjYXNlIG9mIGFwcCBjcmFzaC5cbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNhZGRfY3VzdG9tX2xvZ3NcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBsb2cobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9nIG5vbi1mYXRhbCBleGNlcHRpb25zIGluIGFkZGl0aW9uIHRvIGF1dG9tYXRpY2FsbHkgcmVwb3J0ZWQgYXBwIGNyYXNoZXMuXG4gICAqIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2NyYXNobHl0aWNzL2N1c3RvbWl6ZS1jcmFzaC1yZXBvcnRzP2F1dGh1c2VyPTAjbG9nX25vbi1mYXRhbF9leGNlcHRpb25zXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlciBpZGVudGlmaWVyIHByb3BlcnR5IGZvciBjcmFzaGx5dGljcyByZXBvcnRpbmcuXG4gICAqIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2NyYXNobHl0aWNzL2N1c3RvbWl6ZS1jcmFzaC1yZXBvcnRzP2F1dGh1c2VyPTAjc2V0X3VzZXJfaWRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgdmFsdWUgdG8gc2V0IHRoZSB1c2VySWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19