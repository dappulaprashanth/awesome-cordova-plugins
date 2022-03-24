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
var DocumentPickerOriginal = /** @class */ (function (_super) {
    __extends(DocumentPickerOriginal, _super);
    function DocumentPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPickerOriginal.prototype.getFile = function (option) { return cordova(this, "getFile", {}, arguments); };
    DocumentPickerOriginal.pluginName = "IOSDocumentPicker";
    DocumentPickerOriginal.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPickerOriginal.pluginRef = "DocumentPicker";
    DocumentPickerOriginal.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPickerOriginal.platforms = ["iOS"];
    return DocumentPickerOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentPicker = new DocumentPickerOriginal();
export { DocumentPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCeEQsa0NBQTBCOzs7O0lBUTVELGdDQUFPLGFBQUMsTUFBZTs7Ozs7O3lCQXZDekI7RUErQm9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBpT1MgRG9jdW1lbnRQaWNrZXJcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIE9wZW5zIHRoZSBmaWxlIHBpY2tlciBvbiBpT1MgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGZpbGUsIHJldHVybnMgYSBmaWxlIFVSSS5cbiAqIEFsbG93cyB0aGUgdXNlciB0byB1cGxvYWQgZmlsZXMgZnJvbSBpQ2xvdWRcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRQaWNrZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZG9jdW1lbnQtcGlja2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb2NQaWNrZXI6IERvY3VtZW50UGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmRvY1BpY2tlci5nZXRGaWxlKCdhbGwnKVxuICogICAudGhlbih1cmkgPT4gY29uc29sZS5sb2codXJpKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0lPU0RvY3VtZW50UGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG9jdW1lbnRwaWNrZXIuRG9jdW1lbnRQaWNrZXInLFxuICBwbHVnaW5SZWY6ICdEb2N1bWVudFBpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWFtcG9zc2libGUvQ29yZG92YS1Eb2NQaWNrZXInLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGlja2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBhIGZpbGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25dIGZpbGVzIGJldHdlZW4gJ2ltYWdlJywgJ3BkZicgb3IgJ2FsbCdcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RmlsZShvcHRpb24/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19