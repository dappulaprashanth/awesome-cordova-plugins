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
var MultipleDocumentsPickerOriginal = /** @class */ (function (_super) {
    __extends(MultipleDocumentsPickerOriginal, _super);
    function MultipleDocumentsPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleDocumentsPickerOriginal.prototype.pick = function (type) { return cordova(this, "pick", {}, arguments); };
    MultipleDocumentsPickerOriginal.pluginName = "MultipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.plugin = "cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.pluginRef = "multipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.repo = "https://github.com/akeotech/cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.platforms = ["Android", "iOS"];
    return MultipleDocumentsPickerOriginal;
}(AwesomeCordovaNativePlugin));
var MultipleDocumentsPicker = new MultipleDocumentsPickerOriginal();
export { MultipleDocumentsPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbXVsdGlwbGUtZG9jdW1lbnQtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCL0MsMkNBQTBCOzs7O0lBUXJFLHNDQUFJLGFBQUMsSUFBWTs7Ozs7O2tDQTNDbkI7RUFtQzZDLDBCQUEwQjtTQUExRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB3cmFwcGVyIGZvciBNdWx0aXBsZURvY3VtZW50c1BpY2tlciBwbHVnaW5cbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTXVsdGlwbGUgRG9jdW1lbnRzIFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgdXNlcnMgdG8gcGljayBtdWx0aXBsZSBkb2N1bWVudHMvaW1hZ2VzIGF0IG9uY2VcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTXVsdGlwbGVEb2N1bWVudHNQaWNrZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbXVsdGlwbGUtZG9jdW1lbnQtcGlja2VyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbXVsdGlwbGVEb2N1bWVudHNQaWNrZXI6IE11bHRpcGxlRG9jdW1lbnRzUGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5tdWx0aXBsZURvY3VtZW50c1BpY2tlci5waWNrKDEpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTXVsdGlwbGVEb2N1bWVudHNQaWNrZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tdWx0aXBsZS1kb2N1bWVudHMtcGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnbXVsdGlwbGVEb2N1bWVudHNQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FrZW90ZWNoL2NvcmRvdmEtcGx1Z2luLW11bHRpcGxlLWRvY3VtZW50cy1waWNrZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVEb2N1bWVudHNQaWNrZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFsbG93IHVzZXIgdG8gc2hvdyBuYXRpdmUgZmlsZSBwaWNrZXJcbiAgICpcbiAgICogQHBhcmFtIHR5cGUge251bWJlcn0gVG8gcGljayB0eXBlIG9mIGZpbGVzOiBmb3IgaW1hZ2VzIHNlbmQgMSwgZm9yIGFsbCBmaWxlcyBzZW5kIDJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBpY2sodHlwZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=