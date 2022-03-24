import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var SpeechRecognition = /** @class */ (function (_super) {
    __extends(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechRecognition.prototype.isRecognitionAvailable = function () { return cordova(this, "isRecognitionAvailable", {}, arguments); };
    SpeechRecognition.prototype.startListening = function (options) { return cordova(this, "startListening", { "callbackOrder": "reverse", "observable": true }, arguments); };
    SpeechRecognition.prototype.stopListening = function () { return cordova(this, "stopListening", {}, arguments); };
    SpeechRecognition.prototype.getSupportedLanguages = function () { return cordova(this, "getSupportedLanguages", {}, arguments); };
    SpeechRecognition.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SpeechRecognition.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SpeechRecognition.pluginName = "SpeechRecognition";
    SpeechRecognition.plugin = "cordova-plugin-speechrecognition";
    SpeechRecognition.pluginRef = "plugins.speechRecognition";
    SpeechRecognition.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
    SpeechRecognition.platforms = ["Android", "iOS"];
    SpeechRecognition.decorators = [
        { type: Injectable }
    ];
    return SpeechRecognition;
}(AwesomeCordovaNativePlugin));
export { SpeechRecognition };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3BlZWNoLXJlY29nbml0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMEdLLHFDQUEwQjs7OztJQU8vRCxrREFBc0I7SUFjdEIsMENBQWMsYUFBQyxPQUEyQztJQVExRCx5Q0FBYTtJQVViLGlEQUFxQjtJQVVyQix5Q0FBYTtJQVViLDZDQUFpQjs7Ozs7OztnQkE1RGxCLFVBQVU7OzRCQTNHWDtFQTRHdUMsMEJBQTBCO1NBQXBELGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9ucyA9XG4gIHwgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zSU9TXG4gIHwgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zQW5kcm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNJT1Mge1xuICAvKipcbiAgICogdXNlZCBsYW5ndWFnZSBmb3IgcmVjb2duaXRpb24gKGRlZmF1bHQgYFwiZW4tVVNcImApXG4gICAqL1xuICBsYW5ndWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogdW1iZXIgb2YgcmV0dXJuIG1hdGNoZXMgKGRlZmF1bHQgYDVgKVxuICAgKi9cbiAgbWF0Y2hlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogQWxsb3cgcGFydGlhbCByZXN1bHRzIHRvIGJlIHJldHVybmVkIChkZWZhdWx0IGBmYWxzZWApXG4gICAqL1xuICBzaG93UGFydGlhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zQW5kcm9pZCB7XG4gIC8qKlxuICAgKiB1c2VkIGxhbmd1YWdlIGZvciByZWNvZ25pdGlvbiAoZGVmYXVsdCBgXCJlbi1VU1wiYClcbiAgICovXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBudW1iZXIgb2YgcmV0dXJuIG1hdGNoZXMgKG1heGltdW0gbnVtYmVyIG9mIG1hdGNoZXMpXG4gICAqL1xuICBtYXRjaGVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBkaXNwbGF5ZWQgcHJvbXB0IG9mIGxpc3RlbmVyIHBvcHVwIHdpbmRvd1xuICAgKi9cbiAgcHJvbXB0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkaXNwbGF5IGxpc3RlbmVyIHBvcHVwIHdpbmRvdyB3aXRoIHByb21wdCAoZGVmYXVsdCBgdHJ1ZWApXG4gICAqL1xuICBzaG93UG9wdXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBwYXJ0aWFsIHJlc3VsdHMgdG8gYmUgcmV0dXJuZWQgKGRlZmF1bHQgYGZhbHNlYClcbiAgICovXG4gIHNob3dQYXJ0aWFsPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBTcGVlY2ggUmVjb2duaXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzcGVlY2ggcmVjb2duaXRpb24gdXNpbmcgY2xvdWQgc2VydmljZXNcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3BlZWNoLXJlY29nbml0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGVlY2hSZWNvZ25pdGlvbjogU3BlZWNoUmVjb2duaXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKlxuICogLy8gQ2hlY2sgZmVhdHVyZSBhdmFpbGFibGVcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uaXNSZWNvZ25pdGlvbkF2YWlsYWJsZSgpXG4gKiAgIC50aGVuKChhdmFpbGFibGU6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKGF2YWlsYWJsZSkpXG4gKlxuICogLy8gU3RhcnQgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RhcnRMaXN0ZW5pbmcob3B0aW9ucylcbiAqICAgLnN1YnNjcmliZShcbiAqICAgICAobWF0Y2hlczogc3RyaW5nW10pID0+IGNvbnNvbGUubG9nKG1hdGNoZXMpLFxuICogICAgIChvbmVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3I6Jywgb25lcnJvcilcbiAqICAgKVxuICpcbiAqIC8vIFN0b3AgdGhlIHJlY29nbml0aW9uIHByb2Nlc3MgKGlPUyBvbmx5KVxuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdG9wTGlzdGVuaW5nKClcbiAqXG4gKiAvLyBHZXQgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5nZXRTdXBwb3J0ZWRMYW5ndWFnZXMoKVxuICogICAudGhlbihcbiAqICAgICAobGFuZ3VhZ2VzOiBzdHJpbmdbXSkgPT4gY29uc29sZS5sb2cobGFuZ3VhZ2VzKSxcbiAqICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICApXG4gKlxuICogLy8gQ2hlY2sgcGVybWlzc2lvblxuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5oYXNQZXJtaXNzaW9uKClcbiAqICAgLnRoZW4oKGhhc1Blcm1pc3Npb246IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKGhhc1Blcm1pc3Npb24pKVxuICpcbiAqIC8vIFJlcXVlc3QgcGVybWlzc2lvbnNcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICogICAudGhlbihcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnR3JhbnRlZCcpLFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdEZW5pZWQnKVxuICogICApXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3BlZWNoUmVjb2duaXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zcGVlY2hyZWNvZ25pdGlvbicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3BlZWNoUmVjb2duaXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BiYWtvbmR5L2NvcmRvdmEtcGx1Z2luLXNwZWVjaHJlY29nbml0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgZmVhdHVyZSBhdmFpbGFibGVcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzUmVjb2duaXRpb25BdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSByZWNvZ25pdGlvbiBwcm9jZXNzXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPCBzdHJpbmdbXSA+fSBsaXN0IG9mIHJlY29nbml6ZWQgdGVybXNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgc3RhcnRMaXN0ZW5pbmcob3B0aW9ucz86IFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9ucyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB0aGUgcmVjb2duaXRpb24gcHJvY2Vzc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wTGlzdGVuaW5nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTwgc3RyaW5nW10gPn0gbGlzdCBvZiBsYW5ndWFnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkTGFuZ3VhZ2VzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGVybWlzc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gaGFzIHBlcm1pc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=