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
var YoutubeVideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayerOriginal, _super);
    function YoutubeVideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayerOriginal.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayerOriginal.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayerOriginal.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.platforms = ["Android", "iOS"];
    return YoutubeVideoPlayerOriginal;
}(AwesomeCordovaNativePlugin));
var YoutubeVideoPlayer = new YoutubeVideoPlayerOriginal();
export { YoutubeVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMveW91dHViZS12aWRlby1wbGF5ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUNwRCxzQ0FBMEI7Ozs7SUFPaEUsc0NBQVMsYUFBQyxPQUFlOzs7Ozs7NkJBekMzQjtFQWtDd0MsMEJBQTBCO1NBQXJELGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKipcbiAqIEBuYW1lIFlvdXR1YmUgVmlkZW8gUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsYXlzIFlvdVR1YmUgdmlkZW9zIGluIE5hdGl2ZSBZb3VUdWJlIEFwcFxuICogQHVzYWdlXG4gKiBGb3IgQW5kcm9pZCA1LjArIHlvdSB3aWxsIG5lZWQgdG8gYWRkIHRoZSBmb2xsb3dpbmcgdG8gY29uZmlnLnhtbFxuICogYGBgeG1sXG4gKiA8cHJlZmVyZW5jZSBuYW1lPVwiWW91VHViZURhdGFBcGlLZXlcIiB2YWx1ZT1cIltZT1VSIFlPVVRVQkUgQVBJXVwiIC8+XG4gKiBgYGBcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2dldHRpbmctc3RhcnRlZFxuICpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBZb3V0dWJlVmlkZW9QbGF5ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMveW91dHViZS12aWRlby1wbGF5ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHlvdXR1YmU6IFlvdXR1YmVWaWRlb1BsYXllcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMueW91dHViZS5vcGVuVmlkZW8oJ215dmlkZW9pZCcpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1lvdXR1YmVWaWRlb1BsYXllcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXlvdXR1YmUtdmlkZW8tcGxheWVyJyxcbiAgcGx1Z2luUmVmOiAnWW91dHViZVZpZGVvUGxheWVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL0NvcmRvdmFZb3V0dWJlVmlkZW9QbGF5ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWW91dHViZVZpZGVvUGxheWVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUGxheXMgYSBZb3VUdWJlIHZpZGVvXG4gICAqXG4gICAqIEBwYXJhbSB2aWRlb0lkIHtzdHJpbmd9IFZpZGVvIElEXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb3BlblZpZGVvKHZpZGVvSWQ6IHN0cmluZyk6IHZvaWQge31cbn1cbiJdfQ==