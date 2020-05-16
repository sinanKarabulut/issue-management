/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { NgxLoadingConfig } from './ngx-loading-config';
import * as i0 from "@angular/core";
export class NgxLoadingService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.loadingConfig = this.config || new NgxLoadingConfig();
    }
}
NgxLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
NgxLoadingService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['loadingConfig',] }] }
];
/** @nocollapse */ NgxLoadingService.ngInjectableDef = i0.defineInjectable({ factory: function NgxLoadingService_Factory() { return new NgxLoadingService(i0.inject("loadingConfig", 8)); }, token: NgxLoadingService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxLoadingService.prototype.loadingConfig;
    /** @type {?} */
    NgxLoadingService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL25neC1sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQXFCLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBSzNFLE1BQU07Ozs7SUFHSixZQUF5RCxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNoRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQzdELENBQUM7OztZQVJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUljLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTs7Ozs7SUFGL0MsMENBQXdDOztJQUU1QixtQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdCgnbG9hZGluZ0NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZykge1xyXG4gICAgdGhpcy5sb2FkaW5nQ29uZmlnID0gdGhpcy5jb25maWcgfHwgbmV3IE5neExvYWRpbmdDb25maWcoKTtcclxuICB9XHJcbn1cclxuIl19