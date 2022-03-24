import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
var NativeKeyboard = /** @class */ (function (_super) {
    __extends(NativeKeyboard, _super);
    function NativeKeyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeKeyboard.prototype.showMessenger = function (options) { return cordova(this, "showMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.hideMessenger = function (options) { return cordova(this, "hideMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.showMessengerKeyboard = function () { return cordova(this, "showMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.hideMessengerKeyboard = function () { return cordova(this, "hideMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.updateMessenger = function (options) { return cordova(this, "updateMessenger", {}, arguments); };
    NativeKeyboard.pluginName = "NativeKeyboard";
    NativeKeyboard.plugin = "cordova-plugin-native-keyboard";
    NativeKeyboard.pluginRef = "NativeKeyboard";
    NativeKeyboard.repo = "https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard";
    NativeKeyboard.platforms = ["Android", "iOS"];
    NativeKeyboard.decorators = [
        { type: Injectable }
    ];
    return NativeKeyboard;
}(AwesomeCordovaNativePlugin));
export { NativeKeyboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLWtleWJvYXJkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXdNUCxrQ0FBMEI7Ozs7SUFPNUQsc0NBQWEsYUFBQyxPQUE4QjtJQVE1QyxzQ0FBYSxhQUFDLE9BQThCO0lBUTVDLDhDQUFxQjtJQVFyQiw4Q0FBcUI7SUFVckIsd0NBQWUsYUFBQyxPQUE2Qzs7Ozs7OztnQkExQzlELFVBQVU7O3lCQXhNWDtFQXlNb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUtleWJvYXJkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGludm9rZWQgd2hlbiB0aGUgdXNlciBzdWJtaXRzIGhpcyBpbnB1dC4gUmVjZWl2ZXMgdGhlIHRleHQgYXMgYSBzaW5nbGUgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3VyIHBhZ2UgaXMgVVRGLTggZW5jb2RlZCBzbyBDaGluZXNlIGFuZCBFbW9qaSBhcmUgcmVuZGVyZWQgT0suXG4gICAqL1xuICBvblN1Ym1pdDogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gaW52b2tlZCB3aGVuIHRoZSBrZXlib2FyZCBpcyBhYm91dCB0byBwb3AgdXAuIFJlY2VpdmVzIHRoZSBoZWlnaHQgYXMgYSBzaW5nbGUgcHJvcGVydHkuIChpT1Mgb25seSlcbiAgICovXG4gIG9uS2V5Ym9hcmRXaWxsU2hvdzogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gaW52b2tlZCB3aGVuIHRoZSBrZXlib2FyZCBwb3BwZWQgdXAuIFJlY2VpdmVzIHRoZSBoZWlnaHQgYXMgYSBzaW5nbGUgcHJvcGVydHkuXG4gICAqL1xuICBvbktleWJvYXJkRGlkU2hvdzogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gaW52b2tlZCB3aGVuIHRoZSBrZXlib2FyZCBpcyBhYm91dCB0byBjbG9zZS4gKGlPUyBvbmx5KVxuICAgKi9cbiAgb25LZXlib2FyZFdpbGxIaWRlOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBpbnZva2VkIHdoZW4gdGhlIGtleWJvYXJkIGNsb3NlZC5cbiAgICovXG4gIG9uS2V5Ym9hcmREaWRIaWRlOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBpbnZva2VkIHdoZW4gYW55IGtleSBpcyBwcmVzc2VkLCBzZW5kcyB0aGUgZW50aXJlIHRleHQgYXMgcmVzcG9uc2UuXG4gICAqL1xuICBvblRleHRDaGFuZ2VkOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogSGlnaGx5IHJlY29tbWVuZGVkIHRvIHBhc3MgaW4gaWYgeW91IHdhbnQgdG8gcmVwbGljYXRlIHRoZSBiZWhhdmlvciBvZiB0aGUgdmlkZW8ncyBhYm92ZSAoc2Nyb2xsIGRvd24gd2hlbiB0aGUga2V5Ym9hcmQgb3BlbnMpLiBQYXNzIGluIHRoZSBzY3JvbGxhYmxlIERPTSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIG1lc3NhZ2VzLlxuICAgKi9cbiAgYXV0b3Njcm9sbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBJZiBgYXV0b3Njcm9sbEVsZW1lbnRgIHdhcyBzZXQgeW91IGNhbiBhbHNvIG1ha2UgdGhlIGxpc3Qgc2Nyb2xsIGRvd24gaW5pdGlhbGx5LCB3aGVuIHRoZSBtZXNzZW5nZXIgYmFyICh3aXRob3V0IHRoZSBrZXlib2FyZCBwb3BwaW5nIHVwKSBpcyBzaG93bi5cbiAgICovXG4gIHNjcm9sbFRvQm90dG9tQWZ0ZXJNZXNzZW5nZXJTaG93czogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0dGluZyB0aGlzIHRvIGB0cnVlYCBpcyBsaWtlIHRoZSB2aWRlbydzIGFib3ZlOiB0aGUga2V5Ym9hcmQgZG9lc24ndCBjbG9zZSB1cG9uIHN1Ym1pdC4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICovXG4gIGtlZXBPcGVuQWZ0ZXJTdWJtaXQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1ha2VzIHRoZSBtZXNzZW5nZXIgYmFyIHNsaWRlIGluIGZyb20gdGhlIGJvdHRvbS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICovXG4gIGFuaW1hdGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBrZXlib2FyZCB3aGVuIHNob3dpbmcgdGhlIG1lc3Nlbmdlci4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICovXG4gIHNob3dLZXlib2FyZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdGV4dCBzZXQgaW4gdGhlIG1lc3NlbmdlciBpbnB1dCBiYXIuXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgdHlwZWQgdGV4dC4gRGVmYXVsdHMgdG8gYCM0NDQ0NDRgLlxuICAgKi9cbiAgdGV4dENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpa2UgYSByZWd1bGFyIEhUTUwgaW5wdXQgcGxhY2Vob2xkZXIuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIHRleHQuIERlZmF1bHRzIHRvIGAjQ0NDQ0NDYC5cbiAgICovXG4gIHBsYWNlaG9sZGVyQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIG1lc3NlbmdlciBiYXIuIERlZmF1bHRzIHRvIGAjRjZGNkY2YC5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGV4dHZpZXcuIExvb2tzIG5pY2VzdCBvbiBBbmRyb2lkIGlmIGl0J3MgdGhlIHNhbWUgY29sb3IgYXMgdGhlIGBiYWNrZ3JvdW5kQ29sb3JgIHByb3BlcnR5LiBEZWZhdWx0cyB0byBgI0Y2RjZGNmAuXG4gICAqL1xuICB0ZXh0Vmlld0JhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9yZGVyIGNvbG9yIG9mIHRoZSB0ZXh0dmlldy4gRGVmYXVsdHMgdG8gYCM2NjY2NjZgLiAoaU9TIG9ubHkpXG4gICAqL1xuICB0ZXh0Vmlld0JvcmRlckNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldHRpbmcgdGhpcyA+IDAgd2lsbCBtYWtlIGEgY291bnRlciBzaG93IHVwIG9uIGlPUyAoYW5kIGlnbm9yZSBzdXBlcmZsdW91cyBpbnB1dCBvbiBBbmRyb2lkLCBmb3Igbm93KVxuICAgKi9cbiAgbWF4Q2hhcnM6IG51bWJlcjtcblxuICAvKipcbiAgICogT3B0aW9ucyBhcmU6IGBcIm5vbmVcImAsIGBcInNwbGl0XCJgLCBgXCJjb3VudGRvd25cImAsIGBcImNvdW50ZG93bnJldmVyc2VkXCJgLiBOb3RlIHRoYXQgaWYgYG1heENoYXJzYCBpcyBzZXQsIGBcIm5vbmVcImAgd2lsbCBzdGlsbCBzaG93IGEgY291bnRlci4gRGVmYXVsdHMgdG8gYFwibm9uZVwiYC4gKGlPUyBvbmx5KVxuICAgKi9cbiAgY291bnRlclN0eWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgYXJlOiBcImRlZmF1bHRcIiwgXCJkZWNpbWFscGFkXCIsIFwicGhvbmVwYWRcIiwgXCJudW1iZXJwYWRcIiwgXCJuYW1lcGhvbmVwYWRcIiwgXCJudW1iZXJcIiwgXCJlbWFpbFwiLCBcInR3aXR0ZXJcIiwgXCJ1cmxcIiwgXCJhbHBoYWJldFwiLCBcInNlYXJjaFwiLCBcImFzY2lpXCIuIChpT1Mgb25seSlcbiAgICovXG4gIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9ucyBhcmU6IFwibGlnaHRcIiwgXCJkYXJrXCIuIChpT1Mgb25seSlcbiAgICovXG4gIGFwcGVhcmFuY2U6IHN0cmluZztcblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhpbmdzIGxpa2UgdGhlIEVtb2ppIGtleWJvYXJkIGFuZCB0aGUgUHJlZGljaXZlIHRleHQgZW50cnkgYmFyIChpT1Mgb25seSlcbiAgICovXG4gIHNlY3VyZTogYm9vbGVhbjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGxlZnRCdXR0b246IE5hdGl2ZUtleWJvYXJkTGVmdEJ1dHRvbjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIHJpZ2h0QnV0dG9uOiBOYXRpdmVLZXlib2FyZEJ1dHRvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVLZXlib2FyZEJ1dHRvbiB7XG4gIC8qKlxuICAgKiBFaXRoZXIgXCJ0ZXh0XCIgKEFuZHJvaWQgb25seSBjdXJyZW50bHkpLCBcImZvbnRhd2Vzb21lXCIgb3IgXCJpb25pY29uXCIuXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXBlbmRzIG9uIHRoZSB0eXBlLiBFeGFtcGxlczogZm9yIFwidGV4dFwiIHVzZSBcIlNlbmRcIiwgZm9yIFwiZm9udGF3ZXNvbWVcIiB1c2UgXCJmYS1iYXR0ZXJ5LXF1YXJ0ZXJcIiwgZm9yIFwiaW9uaWNvblwiIHVzZSBcIlxcdWY0OGFcIiAoZ28gdG8gaHR0cDovL2lvbmljb25zLmNvbSwgcmlnaHQtY2xpY2sgYW5kIGluc3BlY3QgdGhlIGljb24gYW5kIHVzZSB0aGUgdmFsdWUgeW91IGZpbmQgaW4gOmJlZm9yZSkuIE5vdGUgdGhhdCBzb21lIGZvbnRpY29ucyBhcmUgbm90IHN1cHBvcnRlZCBhcyB0aGUgZW1iZWRkZWQgZm9udHMgaW4gdGhlIHBsdWdpbiBtYXkgbGFnIGJlaGluZCBhIGxpdHRsZS4gU28gdHJ5IG9uZSBvZiB0aGUgb2xkZXIgaWNvbnMgZmlyc3QuXG4gICAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKipcbiAgICogSWYgdHlwZSBpcyBcInRleHRcIiB5b3UgY2FuIHNldCB0aGlzIHRvIGVpdGhlciBcIm5vcm1hbFwiLCBcImJvbGRcIiBvciBcIml0YWxpY1wiLlxuICAgKi9cbiAgdGV4dFN0eWxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGludm9rZWQgd2hlbiB0aGUgYnV0dG9uIGlzIHByZXNzZWQuIFVzZSB0aGlzIGJ1dHRvbiB0byBwcm9tcHQgdGhlIHVzZXIgd2hhdCBoZSB3YW50cyB0byBkbyBuZXh0IGJ5IGZvciBpbnN0YW5jZSByZW5kZXJpbmcgYW4gQWN0aW9uU2hlZXQuXG4gICAqL1xuICBvblByZXNzOiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVLZXlib2FyZExlZnRCdXR0b24gZXh0ZW5kcyBOYXRpdmVLZXlib2FyZEJ1dHRvbiB7XG4gIC8qKlxuICAgKiBTZXQgdG8gYHRydWVgIHRvIGRpc2FibGUgdGhlIGJ1dHRvbiBvbmNlIHRleHQgaGFzIGJlZW4gZW50ZXJlZC5cbiAgICovXG4gIGRpc2FibGVkV2hlblRleHRFbnRlcmVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUtleWJvYXJkVXBkYXRlTWVzc2VuZ2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBtZXNzZW5nZXIncyB0ZXh0IGJ5IHRoaXMuIFRoZSBjdXJyZW50IHRleHQgcmVtYWlucyBpZiBvbWl0dGVkLlxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGN1cnNvciBhbnl3aGVyZSBpbiB0aGUgdGV4dCByYW5nZS4gRGVmYXVsdHMgdG8gdGhlIGVuZCBvZiB0aGUgdGV4dC5cbiAgICovXG4gIGNhcmV0SW5kZXg6IG51bWJlcjtcbiAgLyoqXG4gICAqIElmIGBmYWxzZWAgb3Igb21pdHRlZCBubyBjaGFuZ2VzIHRvIHRoZSBrZXlib2FyZCBzdGF0ZSBhcmUgbWFkZS5cbiAgICovXG4gIHNob3dLZXlib2FyZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAcGFpZFxuICogQG5hbWUgTmF0aXZlIEtleWJvYXJkXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgY3Jvc3MgcGxhdGZvcm0gV2hhdHNBcHAgLyBNZXNzZW5nZXIgLyBTbGFjayAtc3R5bGUga2V5Ym9hcmQgZXZlbi4gRm9yIHlvdXIgQ29yZG92YSBhcHAuXG4gKiBAdXNhZ2VcbiAqIGBgYFxuICogaW1wb3J0IHsgTmF0aXZlS2V5Ym9hcmQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbmF0aXZlLWtleWJvYXJkL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlS2V5Ym9hcmQ6IE5hdGl2ZUtleWJvYXJkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTmF0aXZlS2V5Ym9hcmRPcHRpb25zXG4gKiBOYXRpdmVLZXlib2FyZEJ1dHRvblxuICogTmF0aXZlS2V5Ym9hcmRMZWZ0QnV0dG9uXG4gKiBOYXRpdmVLZXlib2FyZFVwZGF0ZU1lc3Nlbmdlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVLZXlib2FyZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1rZXlib2FyZCcsXG4gIHBsdWdpblJlZjogJ05hdGl2ZUtleWJvYXJkJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmUta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF0aXZlS2V5Ym9hcmQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93IG1lc3NlbmdlclxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TmF0aXZlS2V5Ym9hcmRPcHRpb25zfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3dNZXNzZW5nZXIob3B0aW9uczogTmF0aXZlS2V5Ym9hcmRPcHRpb25zKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBIaWRlIG1lc3NlbmdlclxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TmF0aXZlS2V5Ym9hcmRPcHRpb25zfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGhpZGVNZXNzZW5nZXIob3B0aW9uczogTmF0aXZlS2V5Ym9hcmRPcHRpb25zKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IHBvcCB1cCB0aGUga2V5Ym9hcmQgYWdhaW4gaWYgdGhlIHVzZXIgZGlzbWlzc2VkIGl0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93TWVzc2VuZ2VyS2V5Ym9hcmQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBoaWRlIHRoZSBrZXlib2FyZCAoYnV0IG5vdCB0aGUgbWVzc2VuZ2VyIGJhcilcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGlkZU1lc3NlbmdlcktleWJvYXJkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmlwdWxhdGUgdGhlIG1lc3NlbmdlciB3aGlsZSBpdCdzIG9wZW4uIEZvciBpbnN0YW5jZSBpZiB5b3Ugd2FudCB0byB1cGRhdGUgdGhlIHRleHQgcHJvZ3JhbW1hdGljYWxseSBiYXNlZCBvbiB3aGF0IHRoZSB1c2VyIHR5cGVkLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVNZXNzZW5nZXIob3B0aW9uczogTmF0aXZlS2V5Ym9hcmRVcGRhdGVNZXNzZW5nZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==