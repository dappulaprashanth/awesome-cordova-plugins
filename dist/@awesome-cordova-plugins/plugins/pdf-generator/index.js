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
var PDFGeneratorOriginal = /** @class */ (function (_super) {
    __extends(PDFGeneratorOriginal, _super);
    function PDFGeneratorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFGeneratorOriginal.prototype.fromURL = function (url, options) { return cordova(this, "fromURL", { "otherPromise": true }, arguments); };
    PDFGeneratorOriginal.prototype.fromData = function (data, options) { return cordova(this, "fromData", { "otherPromise": true }, arguments); };
    PDFGeneratorOriginal.pluginName = "PDFGenerator";
    PDFGeneratorOriginal.plugin = "cordova-pdf-generator";
    PDFGeneratorOriginal.pluginRef = "cordova.plugins.pdf";
    PDFGeneratorOriginal.repo = "https://github.com/cesarvr/pdf-generator";
    PDFGeneratorOriginal.platforms = ["Android", "iOS"];
    return PDFGeneratorOriginal;
}(AwesomeCordovaNativePlugin));
var PDFGenerator = new PDFGeneratorOriginal();
export { PDFGenerator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGRmLWdlbmVyYXRvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE4RDFELGdDQUEwQjs7OztJQVMxRCw4QkFBTyxhQUFDLEdBQVcsRUFBRSxPQUE2QjtJQVlsRCwrQkFBUSxhQUFDLElBQVksRUFBRSxPQUE2Qjs7Ozs7O3VCQXBGdEQ7RUErRGtDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQREZHZW5lcmF0b3JPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBkb2N1bWVudCBzaXplLCBlLmcuLCBBMiwgQTMsIG9yIEE0LlxuICAgKiBPbmx5IHN1cHBvcnRlZCBvbiBpT1MuXG4gICAqIFRoZSBkZWZhdWx0IGlzICdBNCcuXG4gICAqL1xuICBkb2N1bWVudFNpemU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbiB0byBjaGFuZ2UgdG8gbGFuZHNjYXBlIG9yaWVudGF0aW9uLlxuICAgKiBEZWZhdWx0IGlzICdwb3J0cmFpdCcuXG4gICAqL1xuICBsYW5kc2NhcGU/OiAnbGFuZHNjYXBlJyB8ICdwb3J0cmFpdCc7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIHRvIGJlIHJldHVybmVkLCBlaXRoZXIgJ3NoYXJlJyBvciAnYmFzZTY0Jy5cbiAgICogSWYgJ3NoYXJlIGlzIGNob3NlbiwgdGhlIFBERiBpcyBzaGFyZWQgd2l0aCB0aGUgc3lzdGVtIGNhcGFiaWxpdGllcy5cbiAgICogRGVmYXVsdCBpcyAnYmFzZTY0J1xuICAgKi9cbiAgdHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRlc2lyZWQgZmlsZW5hbWUgdGhlIHJlc3VsdGluZyBQREYgc2hvdWxkIGhhdmUuXG4gICAqIERlZmF1bHQgaXMgJ2RlZmF1bHQucGRmJ1xuICAgKi9cbiAgZmlsZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbiB0byBzZXQgdGhlIGJhc2UgVVJMIGZvciBwYXRoaW5nLlxuICAgKiBEZWZhdWx0IGlzICdudWxsJy5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgUERGR2VuZXJhdG9yXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpbXBsZSBwbHVnaW4gdG8gZ2VuZXJhdGUgKG9mZmxpbmUpIHBkZi4gVGhlIHBsdWdpbiB0cmFuc2Zvcm1zIEhUTUwgdG8gUERGIGFuZCBhbHNvIHByb3ZpZGUgdGhlIG1lY2hhbmlzbSB0byBzaGFyZSB0aGUgcGRmIHRvIG90aGVyIGFwcHMgbGlrZSBNYWlsLCBldGMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBERkdlbmVyYXRvciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9wZGYtZ2VuZXJhdG9yJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBkZkdlbmVyYXRvcjogUERGR2VuZXJhdG9yKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnBkZkdlbmVyYXRvci5mcm9tVVJMKHVybCwgb3B0aW9ucykudGhlbihiYXNlNjRTdHJpbmcgPT4gY29uc29sZS5sb2coYmFzZTY0U3RyaW5nKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUERGR2VuZXJhdG9yJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wZGYtZ2VuZXJhdG9yJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnBkZicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2VzYXJ2ci9wZGYtZ2VuZXJhdG9yJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBERkdlbmVyYXRvciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBQREYgdXNpbmcgYSBVUkwsIGl0IGRvd25sb2FkIHRoZSBkb2N1bWVudCBpbnRvIGFuIGluIG1lbW9yeSBXZWJraXQgb2JqZWN0LCBhbmQgcmVuZGVycyBpdCBpbnRvIGEgUERGLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVSTCB0byBjcmVhdGUgYSBQREYgZnJvbVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UERGR2VuZXJhdG9yT3B0aW9uc30gb3B0aW9ucyBmb3IgUERGIGdlbmVyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGZyb21VUkwodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBQREZHZW5lcmF0b3JPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFBERiB1c2luZyBzdHJpbmcgd2l0aCB0aGUgSFRNTCByZXByZXNlbnRhdGlvbiwgaXQgZG93bmxvYWQgdGhlIGRvY3VtZW50IGludG8gYW4gaW4gbWVtb3J5IFdlYmtpdCBvYmplY3QsIGFuZCByZW5kZXJzIGl0IGludG8gYSBQREYuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIHtzdHJpbmd9IEhUTUwgc3RyaW5nIHJlcHJlc2VudGF0aW9uIHRvIGNyZWF0ZSBhIFBERiBmcm9tXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQREZHZW5lcmF0b3JPcHRpb25zfSBvcHRpb25zIGZvciBQREYgZ2VuZXJhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZnJvbURhdGEoZGF0YTogc3RyaW5nLCBvcHRpb25zPzogUERGR2VuZXJhdG9yT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=