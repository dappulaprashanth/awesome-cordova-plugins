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
var FilePathOriginal = /** @class */ (function (_super) {
    __extends(FilePathOriginal, _super);
    function FilePathOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePathOriginal.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePathOriginal.pluginName = "FilePath";
    FilePathOriginal.plugin = "cordova-plugin-filepath";
    FilePathOriginal.pluginRef = "window.FilePath";
    FilePathOriginal.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePathOriginal.platforms = ["Android"];
    return FilePathOriginal;
}(AwesomeCordovaNativePlugin));
var FilePath = new FilePathOriginal();
export { FilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1wYXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdDOUQsNEJBQTBCOzs7O0lBUXRELG9DQUFpQixhQUFDLElBQVk7Ozs7OzttQkF6Q2hDO0VBaUM4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRmlsZSBQYXRoXG4gKiBAcHJlbWllciBmaWxlc3lzdGVtXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlc29sdmUgdGhlIG5hdGl2ZSBmaWxlc3lzdGVtIHBhdGggZm9yIEFuZHJvaWQgY29udGVudCBVUklzIGFuZCBpcyBiYXNlZCBvbiBjb2RlIGluIHRoZSBhRmlsZUNob29zZXIgbGlicmFyeS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVBhdGggfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZS1wYXRoL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlUGF0aDogRmlsZVBhdGgpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZVBhdGgucmVzb2x2ZU5hdGl2ZVBhdGgocGF0aClcbiAqICAgLnRoZW4oZmlsZVBhdGggPT4gY29uc29sZS5sb2coZmlsZVBhdGgpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVQYXRoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZXBhdGgnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuRmlsZVBhdGgnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hpZGRlbnRhby9jb3Jkb3ZhLXBsdWdpbi1maWxlcGF0aCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVQYXRoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVzb2x2ZSBuYXRpdmUgcGF0aCBmb3IgZ2l2ZW4gY29udGVudCBVUkwvcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIENvbnRlbnQgVVJML3BhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc29sdmVOYXRpdmVQYXRoKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=