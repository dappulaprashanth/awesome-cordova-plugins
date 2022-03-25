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
var NativeAudioOriginal = /** @class */ (function (_super) {
    __extends(NativeAudioOriginal, _super);
    function NativeAudioOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudioOriginal.prototype.preloadSimple = function (id, assetPath) { return cordova(this, "preloadSimple", {}, arguments); };
    NativeAudioOriginal.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return cordova(this, "preloadComplex", {}, arguments); };
    NativeAudioOriginal.prototype.play = function (id, completeCallback) { return cordova(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudioOriginal.prototype.stop = function (id) { return cordova(this, "stop", {}, arguments); };
    NativeAudioOriginal.prototype.loop = function (id) { return cordova(this, "loop", {}, arguments); };
    NativeAudioOriginal.prototype.unload = function (id) { return cordova(this, "unload", {}, arguments); };
    NativeAudioOriginal.prototype.setVolumeForComplexAsset = function (id, volume) { return cordova(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudioOriginal.pluginName = "NativeAudio";
    NativeAudioOriginal.plugin = "cordova-plugin-nativeaudio";
    NativeAudioOriginal.pluginRef = "plugins.NativeAudio";
    NativeAudioOriginal.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudioOriginal.platforms = ["Android", "Browser", "iOS"];
    return NativeAudioOriginal;
}(AwesomeCordovaNativePlugin));
var NativeAudio = new NativeAudioOriginal();
export { NativeAudio };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLWF1ZGlvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXNDM0QsK0JBQTBCOzs7O0lBU3pELG1DQUFhLGFBQUMsRUFBVSxFQUFFLFNBQWlCO0lBZTNDLG9DQUFjLGFBQUMsRUFBVSxFQUFFLFNBQWlCLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhO0lBZTNGLDBCQUFJLGFBQUMsRUFBVSxFQUFFLGdCQUEyQjtJQVc1QywwQkFBSSxhQUFDLEVBQVU7SUFXZiwwQkFBSSxhQUFDLEVBQVU7SUFXZiw0QkFBTSxhQUFDLEVBQVU7SUFZakIsOENBQXdCLGFBQUMsRUFBVSxFQUFFLE1BQWM7Ozs7OztzQkEzSHJEO0VBdUNpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKipcbiAqIEBuYW1lIE5hdGl2ZSBBdWRpb1xuICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBBdWRpbyBQbGF5YmFja1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXRpdmVBdWRpbyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uYXRpdmUtYXVkaW8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZUF1ZGlvOiBOYXRpdmVBdWRpbykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkU2ltcGxlKCd1bmlxdWVJZDEnLCAncGF0aC90by9maWxlLm1wMycpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqIHRoaXMubmF0aXZlQXVkaW8ucHJlbG9hZENvbXBsZXgoJ3VuaXF1ZUlkMicsICdwYXRoL3RvL2ZpbGUyLm1wMycsIDEsIDEsIDApLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnBsYXkoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiAvLyBjYW4gb3B0aW9uYWxseSBwYXNzIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGZpbGUgaXMgZG9uZSBwbGF5aW5nXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnBsYXkoJ3VuaXF1ZUlkMScsICgpID0+IGNvbnNvbGUubG9nKCd1bmlxdWVJZDEgaXMgZG9uZSBwbGF5aW5nJykpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ubG9vcCgndW5pcXVlSWQyJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8uc2V0Vm9sdW1lRm9yQ29tcGxleEFzc2V0KCd1bmlxdWVJZDInLCAwLjYpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8uc3RvcCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby51bmxvYWQoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZUF1ZGlvJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF0aXZlYXVkaW8nLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLk5hdGl2ZUF1ZGlvJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZ2hvdHBvdC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZUF1ZGlvIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTG9hZHMgYW4gYXVkaW8gZmlsZSBpbnRvIG1lbW9yeS4gT3B0aW1pemVkIGZvciBzaG9ydCBjbGlwcyAvIHNpbmdsZSBzaG90cyAodXAgdG8gZml2ZSBzZWNvbmRzKS4gQ2Fubm90IGJlIHN0b3BwZWQgLyBsb29wZWQuXG4gICAqXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBhc3NldFBhdGgge3N0cmluZ30gIHRoZSByZWxhdGl2ZSBwYXRoIG9yIGFic29sdXRlIFVSTCAoaW5sdWRpbmcgaHR0cDovLykgdG8gdGhlIGF1ZGlvIGFzc2V0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmVsb2FkU2ltcGxlKGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYW4gYXVkaW8gZmlsZSBpbnRvIG1lbW9yeS4gT3B0aW1pemVkIGZvciBiYWNrZ3JvdW5kIG11c2ljIC8gYW1iaWVudCBzb3VuZC4gVXNlcyBoaWdobGV2ZWwgbmF0aXZlIEFQSXMgd2l0aCBhIGxhcmdlciBmb290cHJpbnQuIChpT1M6IEFWQXVkaW9QbGF5ZXIpLiBDYW4gYmUgc3RvcHBlZCAvIGxvb3BlZCBhbmQgdXNlZCB3aXRoIG11bHRpcGxlIHZvaWNlcy4gQ2FuIGJlIGZhZGVkIGluIGFuZCBvdXQgdXNpbmcgdGhlIGRlbGF5IHBhcmFtZXRlci5cbiAgICpcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGFzc2V0UGF0aCB7c3RyaW5nfSAgdGhlIHJlbGF0aXZlIHBhdGggb3IgYWJzb2x1dGUgVVJMIChpbmx1ZGluZyBodHRwOi8vKSB0byB0aGUgYXVkaW8gYXNzZXQuXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gdGhlIHZvbHVtZSBvZiB0aGUgcHJlbG9hZGVkIHNvdW5kICgwLjEgdG8gMS4wKVxuICAgKiBAcGFyYW0gdm9pY2VzIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgbXVsdGljaGFubmVsIHZvaWNlcyBhdmFpbGFibGVcbiAgICogQHBhcmFtIGRlbGF5IHtudW1iZXJ9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZWxvYWRDb21wbGV4KGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nLCB2b2x1bWU6IG51bWJlciwgdm9pY2VzOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGF5cyBhbiBhdWRpbyBhc3NldFxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gY29tcGxldGVDYWxsYmFjayB7RnVuY3Rpb259IG9wdGlvbmFsLiBDYWxsYmFjayB0byBiZSBpbnZva2VkIHdoZW4gYXVkaW8gaXMgZG9uZSBwbGF5aW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHBsYXkoaWQ6IHN0cmluZywgY29tcGxldGVDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcGxheWluZyBhbiBhdWRpb1xuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wcyBhbiBhdWRpbyBhc3NldCBpbmZpbml0ZWx5LCB0aGlzIG9ubHkgd29ya3MgZm9yIGNvbXBsZXggYXNzZXRzXG4gICAqXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvb3AoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9hZHMgYW4gYXVkaW8gZmlsZSBmcm9tIG1lbW9yeVxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bmxvYWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHZvbHVtZSBmb3IgcHJlbG9hZGVkIGNvbXBsZXggYXNzZXRzLlxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIGFzc2V0ICgwLjEgdG8gMS4wKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoaWQ6IHN0cmluZywgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19