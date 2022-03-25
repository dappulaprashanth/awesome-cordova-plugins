import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var StreamingMedia = /** @class */ (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { return cordova(this, "playVideo", { "sync": true }, arguments); };
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { return cordova(this, "playAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.stopAudio = function () { return cordova(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.pauseAudio = function () { return cordova(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.prototype.resumeAudio = function () { return cordova(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.pluginName = "StreamingMedia";
    StreamingMedia.plugin = "cordova-plugin-streaming-media";
    StreamingMedia.pluginRef = "plugins.streamingMedia";
    StreamingMedia.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMedia.platforms = ["Amazon Fire OS", "Android", "iOS"];
    StreamingMedia.decorators = [
        { type: Injectable }
    ];
    return StreamingMedia;
}(AwesomeCordovaNativePlugin));
export { StreamingMedia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3RyZWFtaW5nLW1lZGlhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdGeEQsa0NBQTBCOzs7O0lBUTVELGtDQUFTLGFBQUMsUUFBZ0IsRUFBRSxPQUErQjtJQVMzRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFNM0Qsa0NBQVM7SUFNVCxtQ0FBVTtJQU1WLG9DQUFXOzs7Ozs7O2dCQXBDWixVQUFVOzt5QkFoRlg7RUFpRm9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBPYmplY3Qgb2Ygb3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHBsYXlWaWRlbyBtZXRob2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWFtaW5nVmlkZW9PcHRpb25zIHtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIHN1Y2Nlc3MgcGxheWluZyBhdWRpby4gKi9cbiAgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb247XG4gIC8qKiBFeGVjdXRlcyBhZnRlciBlcnJvciBwbGF5aW5nIHZpZGVvLiAqL1xuICBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb247XG4gIC8qKiBGb3JjZSBvbmUgb3JpZW50YXRpb24gZm9yIHBsYXlpbmcgdmlkZW8uICovXG4gIG9yaWVudGF0aW9uPzogc3RyaW5nO1xuICAvKiogU2hvdWxkIHRoZSB2aWRlbyBjbG9zZSBhZnRlciBpdCdzIG92ZXIuIERlZmF1bHRzIHRvIHRydWUuICovXG4gIHNob3VsZEF1dG9DbG9zZT86IGJvb2xlYW47XG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGhhdmUgY29udHJvbHMuIERlZmF1bHRzIHRvIHRydWUuIEFuZHJvaWQgb25seS4gKi9cbiAgY29udHJvbHM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgaW50byB0aGUgcGxheUF1ZGlvIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1pbmdBdWRpb09wdGlvbnMge1xuICAvKiogQmFja2dyb3VuZCBjb2xvciBmb3IgYXVkaW8gcGxheWVyLiAqL1xuICBiZ0NvbG9yPzogc3RyaW5nO1xuICAvKiogQmFja2dyb3VuZCBpbWFnZSBmb3IgYXVkaW8gcGxheWVyLiAqL1xuICBiZ0ltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogQmFja2dyb3VuZCBpbWFnZSBzY2FsZSBmb3IgYXVkaW8gcGxheWVyLlxuICAgKiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgKiBmaXRcbiAgICogc3RyZXRjaFxuICAgKiBhc3BlY3RTdHJldGNoLlxuICAgKi9cbiAgYmdJbWFnZVNjYWxlPzogc3RyaW5nO1xuICAvKiogU3RhcnQgYXVkaW8gcGxheWVyIGluIGZ1bGwgc2NyZWVuLiBpT1Mgb25seS4gKi9cbiAgaW5pdEZ1bGxzY3JlZW4/OiBib29sZWFuO1xuICAvKipcbiAgICogS2VlcHMgdGhlIHNjcmVlbiBsaXQgYW5kIHN0b3BzIGl0IGZyb20gbG9ja2luZ1xuICAgKiB3aGlsZSBhdWRpbyBpcyBwbGF5aW5nLiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICBrZWVwQXdha2U/OiBib29sZWFuO1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIGVycm9yIHBsYXlpbmcgYXVkaW8uICovXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBTdHJlYW1pbmcgTWVkaWFcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzdHJlYW0gYXVkaW8gYW5kIHZpZGVvIGluIGEgZnVsbHNjcmVlbiwgbmF0aXZlIHBsYXllciBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0cmVhbWluZ01lZGlhLCBTdHJlYW1pbmdWaWRlb09wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3RyZWFtaW5nLW1lZGlhL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdHJlYW1pbmdNZWRpYTogU3RyZWFtaW5nTWVkaWEpIHsgfVxuICpcbiAqIGxldCBvcHRpb25zOiBTdHJlYW1pbmdWaWRlb09wdGlvbnMgPSB7XG4gKiAgIHN1Y2Nlc3NDYWxsYmFjazogKCkgPT4geyBjb25zb2xlLmxvZygnVmlkZW8gcGxheWVkJykgfSxcbiAqICAgZXJyb3JDYWxsYmFjazogKGUpID0+IHsgY29uc29sZS5sb2coJ0Vycm9yIHN0cmVhbWluZycpIH0sXG4gKiAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcbiAqICAgc2hvdWxkQXV0b0Nsb3NlOiB0cnVlLFxuICogICBjb250cm9sczogZmFsc2VcbiAqIH07XG4gKlxuICogdGhpcy5zdHJlYW1pbmdNZWRpYS5wbGF5VmlkZW8oJ2h0dHBzOi8vcGF0aC90by92aWRlby9zdHJlYW0nLCBvcHRpb25zKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBTdHJlYW1pbmdWaWRlb09wdGlvbnNcbiAqIFN0cmVhbWluZ0F1ZGlvT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0cmVhbWluZ01lZGlhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RyZWFtaW5nLW1lZGlhJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zdHJlYW1pbmdNZWRpYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbmNodXRjaGluZC9jb3Jkb3ZhLXBsdWdpbi1zdHJlYW1pbmctbWVkaWEnLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nTWVkaWEgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdHJlYW1zIGEgdmlkZW9cbiAgICpcbiAgICogQHBhcmFtIHZpZGVvVXJsIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdWaWRlb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5VmlkZW8odmlkZW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RyZWFtcyBhbiBhdWRpb1xuICAgKlxuICAgKiBAcGFyYW0gYXVkaW9Vcmwge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgYXVkaW8gc3RyZWFtXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdBdWRpb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5QXVkaW8oYXVkaW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RvcHMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcEF1ZGlvKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHN0cmVhbWluZyBhdWRpb1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcGF1c2VBdWRpbygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXN1bWVBdWRpbygpOiB2b2lkIHt9XG59XG4iXX0=