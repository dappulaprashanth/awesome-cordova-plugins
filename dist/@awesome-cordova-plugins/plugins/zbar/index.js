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
var ZBarOriginal = /** @class */ (function (_super) {
    __extends(ZBarOriginal, _super);
    function ZBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBarOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    ZBarOriginal.pluginName = "ZBar";
    ZBarOriginal.plugin = "cordova-plugin-cszbar";
    ZBarOriginal.pluginRef = "cloudSky.zBar";
    ZBarOriginal.repo = "https://github.com/tjwoon/csZBar";
    ZBarOriginal.platforms = ["Android", "iOS"];
    return ZBarOriginal;
}(AwesomeCordovaNativePlugin));
var ZBar = new ZBarOriginal();
export { ZBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemJhci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUEyRWxFLHdCQUEwQjs7OztJQVFsRCxtQkFBSSxhQUFDLE9BQW9COzs7Ozs7ZUFwRjNCO0VBNEUwQiwwQkFBMEI7U0FBdkMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWkJhck9wdGlvbnMge1xuICAvKipcbiAgICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0aXRsZSB0ZXh0IChBbmRyb2lkIG9ubHkpLlxuICAgKiBEZWZhdWx0OiBcIlNjYW4gUVIgQ29kZVwiXG4gICAqL1xuICB0ZXh0X3RpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGluc3RydWN0aW9uIHRleHQgKEFuZHJvaWQgb25seSkuXG4gICAqIERlZmF1bHQ6IFwiUGxlYXNlIHBvaW50IHlvdXIgY2FtZXJhIGF0IHRoZSBRUiBjb2RlLlwiXG4gICAqL1xuICB0ZXh0X2luc3RydWN0aW9ucz86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIGFjdGl2ZSBjYW1lcmEgd2hlbiBvcGVuaW5nIHRoZSBzY2FubmVyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IFwiZnJvbnRcIiwgXCJiYWNrXCJcbiAgICogRGVmYXVsdDogXCJiYWNrXCJcbiAgICovXG4gIGNhbWVyYT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIHN0YXRlIG9mIHRoZSBmbGFzaC5cbiAgICogUG9zc2libGUgdmFsdWVzOiBcIm9uXCIsIFwib2ZmXCIsIFwiYXV0b1wiXG4gICAqIERlZmF1bHQ6IFwiYXV0b1wiXG4gICAqL1xuICBmbGFzaD86IHN0cmluZztcblxuICAvKipcbiAgICogQSBib29sZWFuIHRvIHNob3cgb3IgaGlkZSBhIGxpbmUgaW4gdGhlIGNlbnRlciBvZiB0aGUgc2Nhbm5lci5cbiAgICogRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgZHJhd1NpZ2h0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBaQmFyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBaQmFyIFNjYW5uZXIgUGx1Z2luIGFsbG93cyB5b3UgdG8gc2NhbiAyZCBiYXJjb2Rlcy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNzemJhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFt6QmFyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vdGp3b29uL2NzWkJhcikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFpCYXIsIFpCYXJPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3piYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHpiYXI6IFpCYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBvcHRpb25zOiBaQmFyT3B0aW9ucyA9IHtcbiAqICAgICAgIGZsYXNoOiAnb2ZmJyxcbiAqICAgICAgIGRyYXdTaWdodDogZmFsc2VcbiAqICAgICB9XG4gKlxuICogdGhpcy56YmFyLnNjYW4ob3B0aW9ucylcbiAqICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBTY2FubmVkIGNvZGVcbiAqICAgIH0pXG4gKiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICogICAgICAgY29uc29sZS5sb2coZXJyb3IpOyAvLyBFcnJvciBtZXNzYWdlXG4gKiAgICB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBaQmFyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1pCYXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jc3piYXInLFxuICBwbHVnaW5SZWY6ICdjbG91ZFNreS56QmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90andvb24vY3NaQmFyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFpCYXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIHRoZSBzY2FubmVyXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHsgWkJhck9wdGlvbnMgfSBTY2FuIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzY2FubmVkIHN0cmluZywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY2FuKG9wdGlvbnM6IFpCYXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==