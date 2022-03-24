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
var PhotoViewerOriginal = /** @class */ (function (_super) {
    __extends(PhotoViewerOriginal, _super);
    function PhotoViewerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewerOriginal.prototype.show = function (url, title, options) { return cordova(this, "show", { "sync": true }, arguments); };
    PhotoViewerOriginal.pluginName = "PhotoViewer";
    PhotoViewerOriginal.plugin = "com-sarriaroman-photoviewer";
    PhotoViewerOriginal.pluginRef = "PhotoViewer";
    PhotoViewerOriginal.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewerOriginal.platforms = ["Android", "iOS"];
    return PhotoViewerOriginal;
}(AwesomeCordovaNativePlugin));
var PhotoViewer = new PhotoViewerOriginal();
export { PhotoViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGhvdG8tdmlld2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXdEM0QsK0JBQTBCOzs7O0lBU3pELDBCQUFJLGFBQUMsR0FBVyxFQUFFLEtBQWMsRUFBRSxPQUE0Qjs7Ozs7O3NCQWxFaEU7RUF5RGlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQaG90b1ZpZXdlck9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIHNoYXJlIGJ1dHRvbiAoQW5kcm9pZCBvbmx5KS4gRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgc2hhcmU/OiBib29sZWFuO1xuICAvKipcbiAgICogQWRkIEhUVFAgaGVhZGVycyB0byB0aGUgcmVxdWVzdC4gIFVzZWZ1bCBmb3IgYXV0aGVudGljYXRlZCBwYWdlcy5cbiAgICogVGhlIHZhbHVlIGlzIGEgc3RyaW5nIGluIGEgSlNPTiBmb3JtYXQuICBEZWZhdWx0OiAnJ1xuICAgKi9cbiAgaGVhZGVycz86IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbiBmb3IgY2xvc2UgYnV0dG9uIHZpc2liaWxpdHkgd2hlbiBzaGFyZSBmYWxzZSBbT05MWSBGT1IgaU9TXVxuICAgKi9cbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICAvKipcbiAgICogSWYgeW91IG5lZWQgdG8gY29weSBpbWFnZSB0byByZWZlcmVuY2UgYmVmb3JlIHNob3cgdGhlbiBzZXQgaXQgdHJ1ZSBbT05MWSBGT1IgaU9TXVxuICAgKi9cbiAgY29weVRvUmVmZXJlbmNlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuYWJsZSBvciBEaXNhYmxlIFBpY2Fzc28gT3B0aW9ucyAoIE9ubHkgQW5kcm9pZCApOiBmaXQsIGNlbnRlckluc2lkZSwgY2VudGVyQ3JvcC5cbiAgICovXG4gIHBpY2Nhc29PcHRpb25zPzoge1xuICAgIGZpdD86IGJvb2xlYW47XG4gICAgY2VudGVySW5zaWRlPzogYm9vbGVhbjtcbiAgICBjZW50ZXJDcm9wPzogYm9vbGVhbjtcbiAgfTtcbn1cblxuLyoqXG4gKiBAbmFtZSBQaG90byBWaWV3ZXJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBjYW4gZGlzcGxheSB5b3VyIGltYWdlIGluIGZ1bGwgc2NyZWVuIHdpdGggdGhlIGFiaWxpdHkgdG8gcGFuLCB6b29tLCBhbmQgc2hhcmUgdGhlIGltYWdlLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBQaG90b1ZpZXdlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9waG90by12aWV3ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvVmlld2VyOiBQaG90b1ZpZXdlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2V9KTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzZWN1cmVzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2UsIGhlYWRlcnM6ICd7dXNlcm5hbWU6Zm9vLHBhc3N3b3JkOmJhcn0nfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQaG90b1ZpZXdlcicsXG4gIHBsdWdpbjogJ2NvbS1zYXJyaWFyb21hbi1waG90b3ZpZXdlcicsXG4gIHBsdWdpblJlZjogJ1Bob3RvVmlld2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXJyaWFyb21hbi9waG90b3ZpZXdlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIGFuIGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9yIHBhdGggdG8gaW1hZ2VcbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRpb25zIHtQaG90b1ZpZXdlck9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdyh1cmw6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBQaG90b1ZpZXdlck9wdGlvbnMpOiB2b2lkIHt9XG59XG4iXX0=