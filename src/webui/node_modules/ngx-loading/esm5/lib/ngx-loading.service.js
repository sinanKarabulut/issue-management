/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { NgxLoadingConfig } from './ngx-loading-config';
import * as i0 from "@angular/core";
var NgxLoadingService = /** @class */ (function () {
    function NgxLoadingService(config) {
        this.config = config;
        this.loadingConfig = this.config || new NgxLoadingConfig();
    }
    NgxLoadingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    NgxLoadingService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['loadingConfig',] }] }
    ]; };
    /** @nocollapse */ NgxLoadingService.ngInjectableDef = i0.defineInjectable({ factory: function NgxLoadingService_Factory() { return new NgxLoadingService(i0.inject("loadingConfig", 8)); }, token: NgxLoadingService, providedIn: "root" });
    return NgxLoadingService;
}());
export { NgxLoadingService };
if (false) {
    /** @type {?} */
    NgxLoadingService.prototype.loadingConfig;
    /** @type {?} */
    NgxLoadingService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb2FkaW5nLyIsInNvdXJjZXMiOlsibGliL25neC1sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQXFCLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNFO0lBTUUsMkJBQXlELE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Z0JBUkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dEQUljLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTs7OzRCQVRqRDtDQVlDLEFBVEQsSUFTQztTQU5ZLGlCQUFpQjs7O0lBQzVCLDBDQUF3Qzs7SUFFNUIsbUNBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTmd4TG9hZGluZ0NvbmZpZywgTmd4TG9hZGluZ0NvbmZpZyB9IGZyb20gJy4vbmd4LWxvYWRpbmctY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neExvYWRpbmdTZXJ2aWNlIHtcclxuICBwdWJsaWMgbG9hZGluZ0NvbmZpZzogSU5neExvYWRpbmdDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoJ2xvYWRpbmdDb25maWcnKSBwcml2YXRlIGNvbmZpZzogSU5neExvYWRpbmdDb25maWcpIHtcclxuICAgIHRoaXMubG9hZGluZ0NvbmZpZyA9IHRoaXMuY29uZmlnIHx8IG5ldyBOZ3hMb2FkaW5nQ29uZmlnKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==