import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var OpenALPR = /** @class */ (function (_super) {
    __extends(OpenALPR, _super);
    function OpenALPR() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Country = {
            AU: 'au',
            BR: 'br',
            BR2: 'br2',
            EU: 'eu',
            IN: 'in',
            KR2: 'kr2',
            US: 'us',
            VN2: 'vn2',
        };
        return _this;
    }
    OpenALPR.prototype.scan = function (imageData, options) { return cordova(this, "scan", {}, arguments); };
    OpenALPR.pluginName = "OpenALPR";
    OpenALPR.plugin = "cordova-plugin-openalpr";
    OpenALPR.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPR.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPR.platforms = ["Android", "iOS"];
    OpenALPR.decorators = [
        { type: Injectable }
    ];
    return OpenALPR;
}(AwesomeCordovaNativePlugin));
export { OpenALPR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb3BlbmFscHIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUQ5RCw0QkFBMEI7OztRQUN0RCxhQUFPLEdBQUc7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQzs7O0lBVUYsdUJBQUksYUFBQyxTQUFjLEVBQUUsT0FBeUI7Ozs7Ozs7Z0JBckIvQyxVQUFVOzttQkFqRFg7RUFrRDhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVuQUxQUk9wdGlvbnMge1xuICAvKiogQ291bnRyeSB1c2VkIGZvciBzY2FubmluZyB0aGUgbGljZW5zZSBwbGF0ZSAqL1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuXG4gIC8qKiBBbW91bnQgb2YgcmVzdWx0cyByZXR1cm5lZCAqL1xuICBhbW91bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlbkFMUFJSZXN1bHQge1xuICAvKiogTGljZW5zZVBsYXRlICovXG4gIG51bWJlcjogc3RyaW5nO1xuICAvKiogUHJvYmFiaWxpdHkgKi9cbiAgY29uZmlkZW5jZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIE9wZW5BTFBSXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgQ29yZG92YSBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgT3BlbkFMUFIgKEF1dG9tYXRpYyBMaWNlbnNlIFBsYXRlIFJlY29nbml0aW9uKSBsaWJyYXJ5LCB3aGljaCBwcm92aWRlcyBzdXBwb3J0IGZvciByZXRyaWV2aW5nIHRoZSBsaWNlbnNlIHBsYXRlIGZyb20gYSBwaWN0dXJlLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBPcGVuQUxQUiwgT3BlbkFMUFJPcHRpb25zLCBPcGVuQUxQUlJlc3VsdCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9vcGVuYWxwci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wZW5BTFBSOiBPcGVuQUxQUikgeyB9XG4gKlxuICogY29uc3Qgc2Nhbk9wdGlvbnM6IE9wZW5BTFBST3B0aW9ucyA9IHtcbiAqICAgIGNvdW50cnk6IHRoaXMub3BlbkFMUFIuQ291bnRyeS5FVSxcbiAqICAgIGFtb3VudDogM1xuICogfVxuICpcbiAqIC8vIFRvIGdldCBpbWFnZURhdGEsIHlvdSBjYW4gdXNlIHRoZSBAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FtZXJhIG1vZHVsZSBmb3IgZXhhbXBsZS4gSXQgd29ya3Mgd2l0aCBEZXN0aW5hdGlvblR5cGUuRklMRV9VUkkgYW5kIERBVEFfVVJMXG4gKlxuICogdGhpcy5vcGVuQUxQUi5zY2FuKGltYWdlRGF0YSwgc2Nhbk9wdGlvbnMpXG4gKiAgIC50aGVuKChyZXM6IFtPcGVuQUxQUlJlc3VsdF0pID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnT3BlbkFMUFInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1vcGVuYWxwcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5PcGVuQUxQUicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaU1pY2tubC9jb3Jkb3ZhLXBsdWdpbi1vcGVuYWxwcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcGVuQUxQUiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQ291bnRyeSA9IHtcbiAgICBBVTogJ2F1JyxcbiAgICBCUjogJ2JyJyxcbiAgICBCUjI6ICdicjInLFxuICAgIEVVOiAnZXUnLFxuICAgIElOOiAnaW4nLFxuICAgIEtSMjogJ2tyMicsXG4gICAgVVM6ICd1cycsXG4gICAgVk4yOiAndm4yJyxcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0gaW1hZ2VEYXRhIHthbnl9IEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSBvciB0aGUgaW1hZ2UgZmlsZSBVUklcbiAgICogQHBhcmFtIG9wdGlvbnMge09wZW5BTFBST3B0aW9uc30gT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBPcGVuQUxQUiBzY2FubmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY2FuKGltYWdlRGF0YTogYW55LCBvcHRpb25zPzogT3BlbkFMUFJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==