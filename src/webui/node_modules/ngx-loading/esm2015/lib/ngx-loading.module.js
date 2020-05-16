/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxLoadingComponent } from './ngx-loading.component';
export class NgxLoadingModule {
    /**
     * @param {?} loadingConfig
     * @return {?}
     */
    static forRoot(loadingConfig) {
        return {
            ngModule: NgxLoadingModule,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    }
}
NgxLoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgxLoadingComponent],
                exports: [NgxLoadingComponent]
            },] },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvbmd4LWxvYWRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPOUQsTUFBTTs7Ozs7SUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWdDO1FBQzdDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBWEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5neExvYWRpbmdDb25maWcgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcclxuaW1wb3J0IHsgTmd4TG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWxvYWRpbmcuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4TG9hZGluZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW05neExvYWRpbmdDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neExvYWRpbmdNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogJ2xvYWRpbmdDb25maWcnLCB1c2VWYWx1ZTogbG9hZGluZ0NvbmZpZyB9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19