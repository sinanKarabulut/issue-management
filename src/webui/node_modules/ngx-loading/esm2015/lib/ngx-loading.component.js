/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';
import { ngxLoadingAnimationTypes, NgxLoadingConfig } from './ngx-loading-config';
import { NgxLoadingService } from './ngx-loading.service';
export class NgxLoadingComponent {
    /**
     * @param {?} LoadingService
     * @param {?} changeDetectorRef
     */
    constructor(LoadingService, changeDetectorRef) {
        this.LoadingService = LoadingService;
        this.changeDetectorRef = changeDetectorRef;
        this.config = new NgxLoadingConfig();
        this.defaultConfig = {
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
            backdropBorderRadius: '0px',
            fullScreenBackdrop: false,
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        };
        this.ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setupConfig();
    }
    /**
     * @return {?}
     */
    setupConfig() {
        for (const option in this.defaultConfig) {
            if (typeof this.config[option] === 'boolean') {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
            else {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
        }
    }
    /**
     * @param {?} show
     * @return {?}
     */
    setShow(show) {
        this.show = show;
        this.changeDetectorRef.markForCheck();
    }
}
NgxLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-loading',
                template: `
    <div *ngIf="show">
      <div class="backdrop" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}" [ngStyle]="{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}"></div>

      <div [ngSwitch]="config?.animationType">
        <div class="spinner-circle" *ngSwitchCase="ngxLoadingAnimationTypes.circle" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}"
          [ngStyle]="{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}">
        </div>

        <div *ngSwitchCase="ngxLoadingAnimationTypes.cubeGrid" class="sk-cube-grid" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="sk-cube sk-cube1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube2" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube3" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube4" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube5" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube6" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube7" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube8" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="sk-cube sk-cube9" [ngStyle]="{'background-color': config?.primaryColour}"></div>
        </div>

        <div class="spinner-sk-rotateplane" *ngSwitchCase="ngxLoadingAnimationTypes.rotatingPlane" [ngStyle]="{'background-color': config?.primaryColour}" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}"></div>

        <div class="spinner-rectangle-bounce" *ngSwitchCase="ngxLoadingAnimationTypes.rectangleBounce" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="rect1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect2" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect3" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect4" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="rect5" [ngStyle]="{'background-color': config?.primaryColour}"></div>
        </div>

        <div class="spinner-wandering-cubes" *ngSwitchCase="ngxLoadingAnimationTypes.wanderingCubes" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="cube1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="cube2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
        </div>

        <div class="spinner-double-bounce" *ngSwitchCase="ngxLoadingAnimationTypes.doubleBounce" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="double-bounce1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="double-bounce2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
        </div>

        <div class="spinner-pulse" *ngSwitchCase="ngxLoadingAnimationTypes.pulse" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}" [ngStyle]="{'background-color': config?.primaryColour}"></div>

        <div class="spinner-chasing-dots" *ngSwitchCase="ngxLoadingAnimationTypes.chasingDots" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="dot1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="dot2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
        </div>

        <div class="spinner-circle-swish" *ngSwitchCase="ngxLoadingAnimationTypes.circleSwish" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}" [ngStyle]="{'color': config?.primaryColour}"></div>

        <div *ngSwitchCase="ngxLoadingAnimationTypes.none" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}"></div>

        <div *ngSwitchDefault class="spinner-three-bounce" [ngClass]="{'full-screen' : config?.fullScreenBackdrop == true}">
          <div class="bounce1" [ngStyle]="{'background-color': config?.primaryColour}"></div>
          <div class="bounce2" [ngStyle]="{'background-color': config?.secondaryColour}"></div>
          <div class="bounce3" [ngStyle]="{'background-color': config?.tertiaryColour}"></div>
        </div>
        
        <ng-container *ngIf="template">
            <ng-container *ngTemplateOutlet="template"></ng-container>
        </ng-container>
      </div>
    </div>
  `,
                styles: [
                    `
      .backdrop {
        z-index: 1999;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }

      /* Spinner Circle styles */
      .spinner-circle,
      .spinner-circle:after {
          border-radius: 50%;
          width: 10em;
          height: 10em;
      }

      .spinner-circle {
          font-size: 6px;
          border-top: 1.1em solid rgba(255, 255, 255, 0.2);
          border-right: 1.1em solid rgba(255, 255, 255, 0.2);
          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
          border-left: 1.1em solid #ffffff;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load8 1.1s infinite linear;
          animation: load8 1.1s infinite linear;
      }
      @-webkit-keyframes load8 {
          0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
          }
          100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
          }
      }
      @keyframes load8 {
          0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
          }
          100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
          }
      }

      /* Circle Swish styles */
      .spinner-circle-swish {
          font-size: 60px;
          overflow: hidden;
          width: 1em;
          height: 1em;
          z-index: 2000;
          border-radius: 50%;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
          animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        }
        @-webkit-keyframes load6 {
          0% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          5%,
          95% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          10%,
          59% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
          }
          20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
          }
          38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
          }
          100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
        }
        @keyframes load6 {
          0% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          5%,
          95% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
          10%,
          59% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
          }
          20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
          }
          38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
          }
          100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
          }
        }
        @-webkit-keyframes round {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes round {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

      /* Cube Grid styles */
      .sk-cube-grid {
          width: 40px;
          height: 40px;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .sk-cube-grid .sk-cube {
          width: 33%;
          height: 33%;
          background-color: #333;
          float: left;
          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
      }

      .sk-cube-grid .sk-cube1 {
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
      }

      .sk-cube-grid .sk-cube2 {
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
      }

      .sk-cube-grid .sk-cube3 {
          -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
      }

      .sk-cube-grid .sk-cube4 {
          -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
      }

      .sk-cube-grid .sk-cube5 {
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
      }

      .sk-cube-grid .sk-cube6 {
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
      }

      .sk-cube-grid .sk-cube7 {
          -webkit-animation-delay: 0s;
          animation-delay: 0s;
      }

      .sk-cube-grid .sk-cube8 {
          -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
      }

      .sk-cube-grid .sk-cube9 {
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
      }

      @-webkit-keyframes sk-cubeGridScaleDelay {
          0%, 70%, 100% {
              -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
          } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
      }

      @keyframes sk-cubeGridScaleDelay {
          0%, 70%, 100% {
              -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
          } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
      }

      /* Double Bounce styles */
      .spinner-double-bounce {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .double-bounce1, .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #333;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
          animation: sk-bounce 2.0s infinite ease-in-out;
      }

      .double-bounce2 {
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
      }

      @-webkit-keyframes sk-bounce {
          0%, 100% { -webkit-transform: scale(0.0) }
          50% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bounce {
          0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
          } 50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
      }

      /* Pulse styles */
      .spinner-pulse {
          width: 40px;
          height: 40px;
          background-color: #333;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          border-radius: 100%;
          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
          animation: sk-scaleout 1.0s infinite ease-in-out;
      }

      @-webkit-keyframes sk-scaleout {
          0% { -webkit-transform: scale(0) }
          100% {
            -webkit-transform: scale(1.0);
            opacity: 0;
          }
      }

      @keyframes sk-scaleout {
          0% {
            -webkit-transform: scale(0);
            transform: scale(0);
          } 100% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
            opacity: 0;
          }
      }

      /* Three Bounce styles */
      .spinner-three-bounce {
          width: 70px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 20px;
          margin: auto;
          z-index: 2000;
      }

      .spinner-three-bounce > div {
          width: 18px;
          height: 18px;
          background-color: #ffffff;

          border-radius: 100%;
          display: inline-block;
          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
          animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      }

      .spinner-three-bounce .bounce1 {
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
      }

      .spinner-three-bounce .bounce2 {
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
      }

      @-webkit-keyframes sk-bouncedelay {
          0%, 80%, 100% { -webkit-transform: scale(0) }
          40% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bouncedelay {
          0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
          } 40% {
              -webkit-transform: scale(1.0);
              transform: scale(1.0);
          }
      }

      /* Rotate Plane styles */
      .spinner-sk-rotateplane {
          width: 40px;
          height: 40px;
          background-color: #ffffff;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
          animation: sk-rotateplane 1.2s infinite ease-in-out;
      }

      @-webkit-keyframes sk-rotateplane {
          0% { -webkit-transform: perspective(120px) }
          50% { -webkit-transform: perspective(120px) rotateY(180deg) }
          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
      }

      @keyframes sk-rotateplane {
          0% {
              transform: perspective(120px) rotateX(0deg) rotateY(0deg);
              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
          } 50% {
              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
          } 100% {
              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
          }
      }

      /* Rectangle Bounce styles*/
      .spinner-rectangle-bounce {
          width: 50px;
          height: 40px;
          font-size: 10px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .spinner-rectangle-bounce > div {
          background-color: #ffffff;
          height: 100%;
          width: 6px;
          display: inline-block;
          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
          animation: sk-stretchdelay 1.2s infinite ease-in-out;
      }

      .spinner-rectangle-bounce .rect2 {
          -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
      }

      .spinner-rectangle-bounce .rect3 {
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
      }

      .spinner-rectangle-bounce .rect4 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
      }

      .spinner-rectangle-bounce .rect5 {
          -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
      }

      @-webkit-keyframes sk-stretchdelay {
          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
          20% { -webkit-transform: scaleY(1.0) }
      }

      @keyframes sk-stretchdelay {
          0%, 40%, 100% {
              transform: scaleY(0.4);
              -webkit-transform: scaleY(0.4);
          }  20% {
              transform: scaleY(1.0);
              -webkit-transform: scaleY(1.0);
          }
      }

      /* Wandering Cubes styles */
      .spinner-wandering-cubes {
          width: 60px;
          height: 58px;
          font-size: 10px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
      }

      .cube1, .cube2 {
          background-color: #ffffff;
          width: 15px;
          height: 15px;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
          animation: sk-cubemove 1.8s infinite ease-in-out;
      }

      .cube2 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
      }

      @-webkit-keyframes sk-cubemove {
          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
          100% { -webkit-transform: rotate(-360deg) }
      }

      @keyframes sk-cubemove {
          25% {
              transform: translateX(42px) rotate(-90deg) scale(0.5);
              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
          } 50% {
              transform: translateX(42px) translateY(42px) rotate(-179deg);
              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
          } 50.1% {
              transform: translateX(42px) translateY(42px) rotate(-180deg);
              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
          } 75% {
              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
          } 100% {
              transform: rotate(-360deg);
              -webkit-transform: rotate(-360deg);
          }
      }

      /* Circle styles */
      .sk-circle {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
        }
        .sk-circle .sk-child {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        .sk-circle .sk-child:before {
          content: '';
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          background-color: #333;
          border-radius: 100%;
          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        }
        .sk-circle .sk-circle2 {
          -webkit-transform: rotate(30deg);
              -ms-transform: rotate(30deg);
                  transform: rotate(30deg); }
        .sk-circle .sk-circle3 {
          -webkit-transform: rotate(60deg);
              -ms-transform: rotate(60deg);
                  transform: rotate(60deg); }
        .sk-circle .sk-circle4 {
          -webkit-transform: rotate(90deg);
              -ms-transform: rotate(90deg);
                  transform: rotate(90deg); }
        .sk-circle .sk-circle5 {
          -webkit-transform: rotate(120deg);
              -ms-transform: rotate(120deg);
                  transform: rotate(120deg); }
        .sk-circle .sk-circle6 {
          -webkit-transform: rotate(150deg);
              -ms-transform: rotate(150deg);
                  transform: rotate(150deg); }
        .sk-circle .sk-circle7 {
          -webkit-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
                  transform: rotate(180deg); }
        .sk-circle .sk-circle8 {
          -webkit-transform: rotate(210deg);
              -ms-transform: rotate(210deg);
                  transform: rotate(210deg); }
        .sk-circle .sk-circle9 {
          -webkit-transform: rotate(240deg);
              -ms-transform: rotate(240deg);
                  transform: rotate(240deg); }
        .sk-circle .sk-circle10 {
          -webkit-transform: rotate(270deg);
              -ms-transform: rotate(270deg);
                  transform: rotate(270deg); }
        .sk-circle .sk-circle11 {
          -webkit-transform: rotate(300deg);
              -ms-transform: rotate(300deg);
                  transform: rotate(300deg); }
        .sk-circle .sk-circle12 {
          -webkit-transform: rotate(330deg);
              -ms-transform: rotate(330deg);
                  transform: rotate(330deg); }
        .sk-circle .sk-circle2:before {
          -webkit-animation-delay: -1.1s;
                  animation-delay: -1.1s; }
        .sk-circle .sk-circle3:before {
          -webkit-animation-delay: -1s;
                  animation-delay: -1s; }
        .sk-circle .sk-circle4:before {
          -webkit-animation-delay: -0.9s;
                  animation-delay: -0.9s; }
        .sk-circle .sk-circle5:before {
          -webkit-animation-delay: -0.8s;
                  animation-delay: -0.8s; }
        .sk-circle .sk-circle6:before {
          -webkit-animation-delay: -0.7s;
                  animation-delay: -0.7s; }
        .sk-circle .sk-circle7:before {
          -webkit-animation-delay: -0.6s;
                  animation-delay: -0.6s; }
        .sk-circle .sk-circle8:before {
          -webkit-animation-delay: -0.5s;
                  animation-delay: -0.5s; }
        .sk-circle .sk-circle9:before {
          -webkit-animation-delay: -0.4s;
                  animation-delay: -0.4s; }
        .sk-circle .sk-circle10:before {
          -webkit-animation-delay: -0.3s;
                  animation-delay: -0.3s; }
        .sk-circle .sk-circle11:before {
          -webkit-animation-delay: -0.2s;
                  animation-delay: -0.2s; }
        .sk-circle .sk-circle12:before {
          -webkit-animation-delay: -0.1s;
                  animation-delay: -0.1s; }

        @-webkit-keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
            -webkit-transform: scale(0);
                    transform: scale(0);
          } 40% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }

        @keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
            -webkit-transform: scale(0);
                    transform: scale(0);
          } 40% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }

        /* Chasing Dots styles */
        .spinner-chasing-dots {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 2000;
          text-align: center;
          -webkit-animation: sk-rotate 2.0s infinite linear;
          animation: sk-rotate 2.0s infinite linear;
        }

        .dot1, .dot2 {
          width: 60%;
          height: 60%;
          display: inline-block;
          position: absolute;
          top: 0;
          background-color: #333;
          border-radius: 100%;
          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
          animation: sk-bounce 2.0s infinite ease-in-out;
        }

        .dot2 {
          top: auto;
          bottom: 0;
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
        }

        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

        @-webkit-keyframes sk-bounce {
          0%, 100% { -webkit-transform: scale(0.0) }
          50% { -webkit-transform: scale(1.0) }
        }

        @keyframes sk-bounce {
          0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
          } 50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
        }

      .full-screen {
          position: fixed;
          position: -ms-page;
      }
    `
                ]
            },] },
];
NgxLoadingComponent.ctorParameters = () => [
    { type: NgxLoadingService },
    { type: ChangeDetectorRef }
];
NgxLoadingComponent.propDecorators = {
    show: [{ type: Input }],
    config: [{ type: Input }],
    template: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxLoadingComponent.prototype.show;
    /** @type {?} */
    NgxLoadingComponent.prototype.config;
    /** @type {?} */
    NgxLoadingComponent.prototype.template;
    /** @type {?} */
    NgxLoadingComponent.prototype.defaultConfig;
    /** @type {?} */
    NgxLoadingComponent.prototype.ngxLoadingAnimationTypes;
    /** @type {?} */
    NgxLoadingComponent.prototype.LoadingService;
    /** @type {?} */
    NgxLoadingComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvYWRpbmcvIiwic291cmNlcyI6WyJsaWIvbmd4LWxvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFxQixnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBd3dCMUQsTUFBTTs7Ozs7SUFlRixZQUFvQixjQUFpQyxFQUFVLGlCQUFvQztRQUEvRSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYjFGLFdBQU0sR0FBc0IsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRXBELGtCQUFhLEdBQXNCO1lBQ3ZDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxXQUFXO1lBQ25ELHdCQUF3QixFQUFFLG9CQUFvQjtZQUM5QyxvQkFBb0IsRUFBRSxLQUFLO1lBQzNCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsZUFBZSxFQUFFLFNBQVM7WUFDMUIsY0FBYyxFQUFFLFNBQVM7U0FDNUIsQ0FBQztRQUNLLDZCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBRTRDLENBQUM7Ozs7SUFFeEcsUUFBUTtRQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU8sV0FBVztRQUNmLEdBQUcsQ0FBQyxDQUFDLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzlCLFFBQVEsQ0FBQztnQkFDYixDQUFDO2dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNySixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM5QixRQUFRLENBQUM7Z0JBQ2IsQ0FBQztnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckosQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxJQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7WUFoekJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErRFg7Z0JBQ0MsTUFBTSxFQUFFO29CQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdzQkg7aUJBQ0E7YUFDSjs7O1lBdndCUSxpQkFBaUI7WUFGakIsaUJBQWlCOzs7bUJBMndCckIsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFGTixtQ0FBdUI7O0lBQ3ZCLHFDQUE0RDs7SUFDNUQsdUNBQW9DOztJQUNwQyw0Q0FRRTs7SUFDRix1REFBMkQ7O0lBRS9DLDZDQUF5Qzs7SUFBRSxnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMsIElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xyXG5pbXBvcnQgeyBOZ3hMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vbmd4LWxvYWRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWxvYWRpbmcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIiBbbmdTdHlsZV09XCJ7J2JvcmRlci1yYWRpdXMnOiBjb25maWc/LmJhY2tkcm9wQm9yZGVyUmFkaXVzLCAnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29uZmlnPy5hbmltYXRpb25UeXBlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2lyY2xlXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaXJjbGVcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCJcclxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYm9yZGVyLXRvcC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLXJpZ2h0LWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXIsICdib3JkZXItYm90dG9tLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXIsICdib3JkZXItbGVmdC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmN1YmVHcmlkXCIgY2xhc3M9XCJzay1jdWJlLWdyaWRcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmUyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTNcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU1XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTZcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlN1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU4XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTlcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXNrLXJvdGF0ZXBsYW5lXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5yb3RhdGluZ1BsYW5lXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucmVjdGFuZ2xlQm91bmNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3Q0XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3Q1XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci13YW5kZXJpbmctY3ViZXNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLndhbmRlcmluZ0N1YmVzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1YmUxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1YmUyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWRvdWJsZS1ib3VuY2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmRvdWJsZUJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1wdWxzZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucHVsc2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jaGFzaW5nLWRvdHNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmNoYXNpbmdEb3RzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdDFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jaXJjbGUtc3dpc2hcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmNpcmNsZVN3aXNoXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5ub25lXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJzcGlubmVyLXRocmVlLWJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy50ZXJ0aWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICB6LWluZGV4OiAxOTk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBTcGlubmVyIENpcmNsZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItY2lyY2xlLFxyXG4gICAgICAuc3Bpbm5lci1jaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDZweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDgge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIENpcmNsZSBTd2lzaCBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItY2lyY2xlLXN3aXNoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkNiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSxcclxuICAgICAgICAgIDk1JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMCUsXHJcbiAgICAgICAgICA1OSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM4JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWQ2IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDUlLFxyXG4gICAgICAgICAgOTUlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwJSxcclxuICAgICAgICAgIDU5JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzglIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyByb3VuZCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyByb3VuZCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAvKiBDdWJlIEdyaWQgc3R5bGVzICovXHJcbiAgICAgIC5zay1jdWJlLWdyaWQge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZSB7XHJcbiAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlOCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xyXG4gICAgICAgICAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgfSAzNSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xyXG4gICAgICAgICAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgfSAzNSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogRG91YmxlIEJvdW5jZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItZG91YmxlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG91YmxlLWJvdW5jZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBQdWxzZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItcHVsc2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgMS4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stc2NhbGVvdXQgMS4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFRocmVlIEJvdW5jZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIHtcclxuICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgLmJvdW5jZTEge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgLmJvdW5jZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAgICAgICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBSb3RhdGUgUGxhbmUgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSB9XHJcbiAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgIHJvdGF0ZVgoMTgwZGVnKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKVxyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZylcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUmVjdGFuZ2xlIEJvdW5jZSBzdHlsZXMqL1xyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIHtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSA+IGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3QyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3QzIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3Q0IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3Q1IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDQwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KSB9XHJcbiAgICAgICAgICAyMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCkgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XHJcbiAgICAgICAgICAwJSwgNDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgICAgIH0gIDIwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFdhbmRlcmluZyBDdWJlcyBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItd2FuZGVyaW5nLWN1YmVzIHtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1YmUxLCAuY3ViZTIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3ViZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVtb3ZlIHtcclxuICAgICAgICAgIDI1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSkgfVxyXG4gICAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZykgfVxyXG4gICAgICAgICAgNzUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpIH1cclxuICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1jdWJlbW92ZSB7XHJcbiAgICAgICAgICAyNSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICB9IDUwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgICAgICAgfSA1MC4xJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgfSA3NSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgfSAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBDaXJjbGUgc3R5bGVzICovXHJcbiAgICAgIC5zay1jaXJjbGUge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaGlsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU1IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNyB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU4IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTAge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTEge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gNDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gNDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBDaGFzaW5nIERvdHMgc3R5bGVzICovXHJcbiAgICAgICAgLnNwaW5uZXItY2hhc2luZy1kb3RzIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZSAyLjBzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb3QxLCAuZG90MiB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG90MiB7XHJcbiAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZSB7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfX1cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZSB7IDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfX1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgICAgICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAuZnVsbC1zY3JlZW4ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgcG9zaXRpb246IC1tcy1wYWdlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHNob3c6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnID0gbmV3IE5neExvYWRpbmdDb25maWcoKTtcclxuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IHtcclxuICAgICAgICBhbmltYXRpb25UeXBlOiBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMudGhyZWVCb3VuY2UsXHJcbiAgICAgICAgYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcclxuICAgICAgICBiYWNrZHJvcEJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgZnVsbFNjcmVlbkJhY2tkcm9wOiBmYWxzZSxcclxuICAgICAgICBwcmltYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgdGVydGlhcnlDb2xvdXI6ICcjZmZmZmZmJ1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMgPSBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBMb2FkaW5nU2VydmljZTogTmd4TG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwQ29uZmlnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cENvbmZpZygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiB0aGlzLmRlZmF1bHRDb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ1tvcHRpb25dID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ1tvcHRpb25dICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1tvcHRpb25dID0gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gIT0gbnVsbCA/IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dIDogdGhpcy5kZWZhdWx0Q29uZmlnW29wdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWdbb3B0aW9uXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdbb3B0aW9uXSA9IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dICE9IG51bGwgPyB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSA6IHRoaXMuZGVmYXVsdENvbmZpZ1tvcHRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaG93KHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3cgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIl19