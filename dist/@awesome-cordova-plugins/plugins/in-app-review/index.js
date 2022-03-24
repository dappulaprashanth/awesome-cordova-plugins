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
var InAppReviewOriginal = /** @class */ (function (_super) {
    __extends(InAppReviewOriginal, _super);
    function InAppReviewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReviewOriginal.prototype.requestReview = function () { return cordova(this, "requestReview", {}, arguments); };
    InAppReviewOriginal.pluginName = "InAppReview";
    InAppReviewOriginal.plugin = "com.omarben.inappreview";
    InAppReviewOriginal.pluginRef = "inappreview";
    InAppReviewOriginal.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReviewOriginal.platforms = ["iOS"];
    return InAppReviewOriginal;
}(AwesomeCordovaNativePlugin));
var InAppReview = new InAppReviewOriginal();
export { InAppReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXJldmlldy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzNELCtCQUEwQjs7OztJQU96RCxtQ0FBYTs7Ozs7O3NCQXpDZjtFQWtDaUMsMEJBQTBCO1NBQTlDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuLyogdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogQG5hbWUgSW4gQXBwIFJldmlld1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHVzZSB0aGUgaU9TIGNsYXNzIFNLU3RvcmXigItSZXZpZXfigItDb250cm9sbGVyIHRvIG9wZW4gdGhlIGluQXBwIHJldmlldyBwb3B1cCBhdmFpbGFibGUgc2luY2UgaU9TIDEwLjNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uYWxpdHkgb25seSB3b3JrcyBvbiBpT1MgZGV2aWNlc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbkFwcFJldmlldyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbi1hcHAtcmV2aWV3L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5BcHBSZXZpZXc6IEluQXBwUmV2aWV3KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5pbkFwcFJldmlldy5yZXF1ZXN0UmV2aWV3KClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuLyogdHNsaW50OmVuYWJsZSAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcFJldmlldycsXG4gIHBsdWdpbjogJ2NvbS5vbWFyYmVuLmluYXBwcmV2aWV3JyxcbiAgcGx1Z2luUmVmOiAnaW5hcHByZXZpZXcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL29tYXhsaXZlL2NvbS5vbWFyYmVuLmluYXBwcmV2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbkFwcFJldmlldyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gdGhlIGluQXBwIHJldmlldyBwb3B1cFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFJldmlldygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==