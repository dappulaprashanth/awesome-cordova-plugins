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
var ChooserOriginal = /** @class */ (function (_super) {
    __extends(ChooserOriginal, _super);
    function ChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooserOriginal.prototype.getFiles = function (accept) { return cordova(this, "getFiles", {}, arguments); };
    ChooserOriginal.pluginName = "Chooser";
    ChooserOriginal.plugin = "cordova-plugin-simple-file-chooser";
    ChooserOriginal.pluginRef = "chooser";
    ChooserOriginal.repo = "https://github.com/hc-oss/cordova-plugin-simple-file-chooser";
    ChooserOriginal.platforms = ["Android", "iOS"];
    return ChooserOriginal;
}(AwesomeCordovaNativePlugin));
var Chooser = new ChooserOriginal();
export { Chooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci1zaW1wbGUtZmlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFrRC9ELDJCQUEwQjs7OztJQVNyRCwwQkFBUSxhQUFDLE1BQWU7Ozs7OztrQkE1RDFCO0VBbUQ2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3NlclJlc3VsdCB7XG4gIG1lZGlhVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVyaTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIENob29zZXJcbiAqIEBkZXNjcmlwdGlvblxuICogRmlsZSBjaG9vc2VyIHBsdWdpbiBmb3IgQ29yZG92YS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIG11c3QgYmUgYWRkZWQgdG8gY29uZmlnLnhtbCB0byBwcmV2ZW50IGNyYXNoaW5nIHdoZW4gc2VsZWN0aW5nIGxhcmdlIGZpbGVzIG9uIEFuZHJvaWQ6XG4gKiBgYGB4bWxcbiAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICogIDxlZGl0LWNvbmZpZ1xuICogICAgZmlsZT1cImFwcC9zcmMvbWFpbi9BbmRyb2lkTWFuaWZlc3QueG1sXCJcbiAqICAgIG1vZGU9XCJtZXJnZVwiXG4gKiAgICB0YXJnZXQ9XCIvbWFuaWZlc3QvYXBwbGljYXRpb25cIj5cbiAqICAgIDxhcHBsaWNhdGlvbiBhbmRyb2lkOmxhcmdlSGVhcD1cInRydWVcIiAvPlxuICogIDwvZWRpdC1jb25maWc+XG4gKiA8L3BsYXRmb3JtPlxuICogYGBgXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENob29zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2hvb3Nlci1zaW1wbGUtZmlsZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNob29zZXIuZ2V0RmlsZXMoKVxuICogICAudGhlbihmaWxlcyA9PiBjb25zb2xlLmxvZyhmaWxlcyA/IGZpbGVzLm5hbWUgOiAnY2FuY2VsZWQnKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2hvb3NlclJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaW1wbGUtZmlsZS1jaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnY2hvb3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGMtb3NzL2NvcmRvdmEtcGx1Z2luLXNpbXBsZS1maWxlLWNob29zZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2NlcHRdIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgY29udGFpbmluZyBzZWxlY3RlZCBmaWxlJ3NcbiAgICogZGF0YTogTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZpbGVzKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdFtdIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=