import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
export var OCRSourceType;
(function (OCRSourceType) {
    /**
     * Normal processing from a file URL. This is the overall recommended choice
     * for most applications. The distinction between file and native URLs is
     * only relevant on iOS; under Android `NORMFILEURL` and `NORMNATIVEURL`
     * are interchangeable.
     */
    OCRSourceType[OCRSourceType["NORMFILEURL"] = 0] = "NORMFILEURL";
    /**
     * Normal processing from a native URL. Since this source type uses deprecated
     * OS APIs to interact with the camera plugin, it is best avoided, especially
     * if ongoing forward compatibility is a concern. For further information, see
     * https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr#plugin-usage
     * Under Android, this is equivalent to `NORMFILEURL`.
     */
    OCRSourceType[OCRSourceType["NORMNATIVEURL"] = 1] = "NORMNATIVEURL";
    /**
     * Fast processing from a file URL. As the compression done internally causes
     * a significant loss in extraction quality, it should only be preferred when
     * dealing with large images containing significant amounts of text, where
     * the execution time required to perform normal processing is prohibitive.
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTFILEURL"] = 2] = "FASTFILEURL";
    /**
     * Fast processing from a native URL. See comments above for `FASTFILEURL`
     * concerning quality loss.
     *
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTNATIVEURL"] = 3] = "FASTNATIVEURL";
    /**
     * Normal processing from a base64-encoded string. Quality is equivalent
     * to `NORMFILEURL`, but due to significantly higher memory requirements,
     * is only appropriate for use with very small images.
     */
    OCRSourceType[OCRSourceType["BASE64"] = 4] = "BASE64";
})(OCRSourceType || (OCRSourceType = {}));
var OCR = /** @class */ (function (_super) {
    __extends(OCR, _super);
    function OCR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OCR.prototype.recText = function (sourceType, source) { return cordova(this, "recText", {}, arguments); };
    OCR.pluginName = "OCR";
    OCR.plugin = "cordova-plugin-mobile-ocr";
    OCR.pluginRef = "textocr";
    OCR.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr";
    OCR.platforms = ["Android", "iOS"];
    OCR.decorators = [
        { type: Injectable }
    ];
    return OCR;
}(AwesomeCordovaNativePlugin));
export { OCR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb2NyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBRTVGLE1BQU0sQ0FBTixJQUFZLGFBMkNYO0FBM0NELFdBQVksYUFBYTtJQUN2Qjs7Ozs7T0FLRztJQUNILCtEQUFlLENBQUE7SUFFZjs7Ozs7O09BTUc7SUFDSCxtRUFBaUIsQ0FBQTtJQUVqQjs7Ozs7OztPQU9HO0lBQ0gsK0RBQWUsQ0FBQTtJQUVmOzs7Ozs7T0FNRztJQUNILG1FQUFpQixDQUFBO0lBRWpCOzs7O09BSUc7SUFDSCxxREFBVSxDQUFBO0FBQ1osQ0FBQyxFQTNDVyxhQUFhLEtBQWIsYUFBYSxRQTJDeEI7O0lBMkd3Qix1QkFBMEI7Ozs7SUFTakQscUJBQU8sYUFBQyxVQUF5QixFQUFFLE1BQWM7Ozs7Ozs7Z0JBVmxELFVBQVU7O2NBeEpYO0VBeUp5QiwwQkFBMEI7U0FBdEMsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBlbnVtIE9DUlNvdXJjZVR5cGUge1xuICAvKipcbiAgICogTm9ybWFsIHByb2Nlc3NpbmcgZnJvbSBhIGZpbGUgVVJMLiBUaGlzIGlzIHRoZSBvdmVyYWxsIHJlY29tbWVuZGVkIGNob2ljZVxuICAgKiBmb3IgbW9zdCBhcHBsaWNhdGlvbnMuIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGZpbGUgYW5kIG5hdGl2ZSBVUkxzIGlzXG4gICAqIG9ubHkgcmVsZXZhbnQgb24gaU9TOyB1bmRlciBBbmRyb2lkIGBOT1JNRklMRVVSTGAgYW5kIGBOT1JNTkFUSVZFVVJMYFxuICAgKiBhcmUgaW50ZXJjaGFuZ2VhYmxlLlxuICAgKi9cbiAgTk9STUZJTEVVUkwgPSAwLFxuXG4gIC8qKlxuICAgKiBOb3JtYWwgcHJvY2Vzc2luZyBmcm9tIGEgbmF0aXZlIFVSTC4gU2luY2UgdGhpcyBzb3VyY2UgdHlwZSB1c2VzIGRlcHJlY2F0ZWRcbiAgICogT1MgQVBJcyB0byBpbnRlcmFjdCB3aXRoIHRoZSBjYW1lcmEgcGx1Z2luLCBpdCBpcyBiZXN0IGF2b2lkZWQsIGVzcGVjaWFsbHlcbiAgICogaWYgb25nb2luZyBmb3J3YXJkIGNvbXBhdGliaWxpdHkgaXMgYSBjb25jZXJuLiBGb3IgZnVydGhlciBpbmZvcm1hdGlvbiwgc2VlXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9OZXV0cmlub3NQbGF0Zm9ybS9jb3Jkb3ZhLXBsdWdpbi1tb2JpbGUtb2NyI3BsdWdpbi11c2FnZVxuICAgKiBVbmRlciBBbmRyb2lkLCB0aGlzIGlzIGVxdWl2YWxlbnQgdG8gYE5PUk1GSUxFVVJMYC5cbiAgICovXG4gIE5PUk1OQVRJVkVVUkwgPSAxLFxuXG4gIC8qKlxuICAgKiBGYXN0IHByb2Nlc3NpbmcgZnJvbSBhIGZpbGUgVVJMLiBBcyB0aGUgY29tcHJlc3Npb24gZG9uZSBpbnRlcm5hbGx5IGNhdXNlc1xuICAgKiBhIHNpZ25pZmljYW50IGxvc3MgaW4gZXh0cmFjdGlvbiBxdWFsaXR5LCBpdCBzaG91bGQgb25seSBiZSBwcmVmZXJyZWQgd2hlblxuICAgKiBkZWFsaW5nIHdpdGggbGFyZ2UgaW1hZ2VzIGNvbnRhaW5pbmcgc2lnbmlmaWNhbnQgYW1vdW50cyBvZiB0ZXh0LCB3aGVyZVxuICAgKiB0aGUgZXhlY3V0aW9uIHRpbWUgcmVxdWlyZWQgdG8gcGVyZm9ybSBub3JtYWwgcHJvY2Vzc2luZyBpcyBwcm9oaWJpdGl2ZS5cbiAgICogVGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gZmlsZSBhbmQgbmF0aXZlIFVSTHMgaXMgb25seSByZWxldmFudCBvbiBpT1M7XG4gICAqIHVuZGVyIEFuZHJvaWQgYEZBU1RGSUxFVVJMYCBhbmQgYEZBU1ROQVRJVkVVUkxgIGFyZSBpbnRlcmNoYW5nZWFibGUuXG4gICAqL1xuICBGQVNURklMRVVSTCA9IDIsXG5cbiAgLyoqXG4gICAqIEZhc3QgcHJvY2Vzc2luZyBmcm9tIGEgbmF0aXZlIFVSTC4gU2VlIGNvbW1lbnRzIGFib3ZlIGZvciBgRkFTVEZJTEVVUkxgXG4gICAqIGNvbmNlcm5pbmcgcXVhbGl0eSBsb3NzLlxuICAgKlxuICAgKiBUaGUgZGlzdGluY3Rpb24gYmV0d2VlbiBmaWxlIGFuZCBuYXRpdmUgVVJMcyBpcyBvbmx5IHJlbGV2YW50IG9uIGlPUztcbiAgICogdW5kZXIgQW5kcm9pZCBgRkFTVEZJTEVVUkxgIGFuZCBgRkFTVE5BVElWRVVSTGAgYXJlIGludGVyY2hhbmdlYWJsZS5cbiAgICovXG4gIEZBU1ROQVRJVkVVUkwgPSAzLFxuXG4gIC8qKlxuICAgKiBOb3JtYWwgcHJvY2Vzc2luZyBmcm9tIGEgYmFzZTY0LWVuY29kZWQgc3RyaW5nLiBRdWFsaXR5IGlzIGVxdWl2YWxlbnRcbiAgICogdG8gYE5PUk1GSUxFVVJMYCwgYnV0IGR1ZSB0byBzaWduaWZpY2FudGx5IGhpZ2hlciBtZW1vcnkgcmVxdWlyZW1lbnRzLFxuICAgKiBpcyBvbmx5IGFwcHJvcHJpYXRlIGZvciB1c2Ugd2l0aCB2ZXJ5IHNtYWxsIGltYWdlcy5cbiAgICovXG4gIEJBU0U2NCA9IDQsXG59XG5cbi8qKlxuICogRm91ciBwb2ludHMgKG9yZGVyZWQgaW4gY2xvY2t3aXNlIGRpcmVjdGlvbikgdGhhdCBlbmNsb3NlIGEgdGV4dFxuICogY29tcG9uZW50LiBNYXkgbm90IGJlIGF4aXMtYWxpZ25lZCBkdWUgdG8gcGVyc3BlY3RpdmUgc2tldy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPQ1JDb3JuZXJzIHtcbiAgeDE6IG51bWJlcjtcbiAgeTE6IG51bWJlcjtcbiAgeDI6IG51bWJlcjtcbiAgeTI6IG51bWJlcjtcbiAgeDM6IG51bWJlcjtcbiAgeTM6IG51bWJlcjtcbiAgeDQ6IG51bWJlcjtcbiAgeTQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBbiBheGlzLWFsaWduZWQgYm91bmRpbmcgcmVjdGFuZ2xlLiBgeGAgYW5kIGB5YCByZXByZXNlbnQgdGhlIHRvcCBsZWZ0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9DUlJlY3Qge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlIGByZWNUZXh0YCBtZXRob2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT0NSUmVzdWx0IHtcbiAgLyoqXG4gICAqIFdhcyBhbnkgdGV4dCBleHRyYWN0ZWQ/IElmIGBmb3VuZFRleHRgIGlzIGZhbHNlLCBubyBvdGhlciBmaWVsZHMgYXJlXG4gICAqIHJldHVybmVkLiBJZiBmb3VuZFRleHQgaXMgdHJ1ZSwgYWxsIG90aGVyIGZpZWxkcyBhcmUgcmVsaWFibGUuXG4gICAqL1xuICBmb3VuZFRleHQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgYmxvY2sgaXMgdGhlIGxhcmdlc3QgdW5pdCBvZiB0ZXh0LCB3aGljaCBjYW4gYmUgdGhvdWdodCBvZiBhcyBhIHBhcmFncmFwaC5cbiAgICogVGhpcyBmaWVsZCBjb25zaXN0cyBvZiBzZXZlcmFsIHBhcmFsbGVsIGFycmF5cywgc28gdGhlIHRleHQgaW4gYGJsb2NrdGV4dFswXWBcbiAgICogaXMgYm91bmRlZCBieSBgYmxvY2twb2ludHNbMF1gIGFuZCBgYmxvY2tmcmFtZVswXWAuXG4gICAqL1xuICBibG9ja3M6IHtcbiAgICBibG9ja3RleHQ6IHN0cmluZ1tdO1xuICAgIGJsb2NrcG9pbnRzOiBPQ1JDb3JuZXJzW107XG4gICAgYmxvY2tmcmFtZTogT0NSUmVjdFtdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIGxpbmUgaXMgdGhlIGNlbnRyYWwgdW5pdCBvZiB0ZXh0LCBjb250YWluaW5nIHNldmVyYWwgZWxlbWVudHMuIEEgYmxvY2tcbiAgICogY2FuIGNvbnRhaW4gTiBsaW5lcy4gVGhpcyBmaWVsZCBjb25zaXN0cyBvZiBzZXZlcmFsIHBhcmFsbGVsIGFycmF5cywgc28gdGhlXG4gICAqIHRleHQgaW4gYGxpbmV0ZXh0WzBdYCBpcyBib3VuZGVkIGJ5IGBsaW5lcG9pbnRzWzBdYCBhbmQgYGxpbmVmcmFtZVswXWAuXG4gICAqL1xuICBsaW5lczoge1xuICAgIGxpbmV0ZXh0OiBzdHJpbmdbXTtcbiAgICBsaW5lcG9pbnRzOiBPQ1JDb3JuZXJzW107XG4gICAgbGluZWZyYW1lOiBPQ1JSZWN0W107XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgd29yZCAob3IgZWxlbWVudCkgaXMgdGhlIHNtYWxsZXN0IHVuaXQgb2YgdGV4dC4gVGhpcyBmaWVsZCBjb25zaXN0cyBvZlxuICAgKiBzZXZlcmFsIHBhcmFsbGVsIGFycmF5cywgc28gdGhlIHRleHQgaW4gYHdvcmR0ZXh0WzBdYCBpcyBib3VuZGVkIGJ5XG4gICAqIGB3b3JkcG9pbnRzWzBdYCBhbmQgYHdvcmRmcmFtZVswXWAuXG4gICAqL1xuICB3b3Jkczoge1xuICAgIHdvcmR0ZXh0OiBzdHJpbmdbXTtcbiAgICB3b3JkcG9pbnRzOiBPQ1JDb3JuZXJzW107XG4gICAgd29yZGZyYW1lOiBPQ1JSZWN0W107XG4gIH07XG59XG5cbi8qKlxuICogQG5hbWUgT0NSXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGF0dGVtcHRzIHRvIGlkZW50aWZ5IGFuZCBleHRyYWN0IHRleHQgZnJvbSBhbiBpbWFnZS5cbiAqIFBsZWFzZSBub3RlOiBUaGlzIHBsdWdpbiBkZXBlbmRzIG9uIHRoZSBHb29nbGVNb2JpbGVWaXNpb24gcG9kIHdoaWNoIGlzIHJlZmVyZW5jaW5nIFVJV2VidmlldywgdGhhdCBoYXMgYmVlbiBkZXByZWNhdGVkIGJ5IEFwcGxlLlxuICogRG9uJ3QgdXNlIHRoaXMgcGx1Z2luIGluIGFuIGFwcCBpbnRlbmRlZCBmb3IgQXBwIFN0b3JlIGFzIHlvdSB3aWxsIGdldCBhIHJldmlldyByZWplY3Rpb24gZnJvbSBBcHBsZTogYERlcHJlY2F0ZWQgQVBJIFVzYWdlIOKAlCBBcHBsZSB3aWxsIHN0b3AgYWNjZXB0aW5nIHN1Ym1pc3Npb25zIG9mIGFwcHMgdGhhdCB1c2UgVUlXZWJWaWV3IEFQSXNgXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBmb2xsb3dpbmcgR2l0aHViIGlzc3VlIFtHb29nbGUgTW9iaWxlIFZpc2lvbiByZWx5aW5nIG9uIGRlcHJlY2F0ZWQgVUlXZWJ2aWV3XShodHRwczovL2dpdGh1Yi5jb20vTmV1dHJpbm9zUGxhdGZvcm0vY29yZG92YS1wbHVnaW4tbW9iaWxlLW9jci9pc3N1ZXMvMjcpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBPQ1IsIE9DUlNvdXJjZVR5cGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvb2NyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgb2NyOiBPQ1IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMub2NyLnJlY1RleHQoT0NSU291cmNlVHlwZS5OT1JNRklMRVVSTCwgXCJmaWxlOi8vcGF0aC90by9pbWFnZS5wbmdcIilcbiAqICAgLnRoZW4oKHJlczogT0NSUmVzdWx0KSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogT0NSQ29ybmVyc1xuICogT0NSUmVjdFxuICogT0NSUmVzdWx0XG4gKiBAZW51bXNcbiAqIE9DUlNvdXJjZVR5cGVcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdPQ1InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tb2JpbGUtb2NyJyxcbiAgcGx1Z2luUmVmOiAndGV4dG9jcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV1dHJpbm9zUGxhdGZvcm0vY29yZG92YS1wbHVnaW4tbW9iaWxlLW9jcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPQ1IgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFeHRyYWN0IHRleHQgZnJvbSBpbWFnZVxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlVHlwZSB7T0NSU291cmNlVHlwZX0gdHlwZSBvZiBpbWFnZSBzb3VyY2VcbiAgICogQHBhcmFtIHNvdXJjZSB7c3RyaW5nfSBpbWFnZSBzb3VyY2UgKGVpdGhlciBmaWxlIFVSTCBvciBiYXNlNjQgc3RyaW5nKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPQ1JSZXN1bHQ+fSBleHRyYWN0ZWQgdGV4dCBhbmQgZ2VvbWV0cnlcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVjVGV4dChzb3VyY2VUeXBlOiBPQ1JTb3VyY2VUeXBlLCBzb3VyY2U6IHN0cmluZyk6IFByb21pc2U8T0NSUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=