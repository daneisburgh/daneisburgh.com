function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"68nU":function(e,t,i){"use strict";i.r(t),i.d(t,"GalleryPageModule",(function(){return P}));var n=i("SVse"),a=i("s7LF"),r=i("sZkV"),c=i("iInd"),o=i("mrSG"),s=i("d2z5"),g=i("8wRs"),l=i("8Y7J"),h=i("XNiG"),d=function(){function e(){_classCallCheck(this,e),this.imagesUpdatedSource=new h.a,this.imageSelectedIndexUpdatedSource=new h.a,this.showImageViewerSource=new h.a,this.imagesUpdated$=this.imagesUpdatedSource.asObservable(),this.imageSelectedIndexUpdated$=this.imageSelectedIndexUpdatedSource.asObservable(),this.showImageViewerChanged$=this.showImageViewerSource.asObservable()}return _createClass(e,[{key:"updateImages",value:function(e){this.imagesUpdatedSource.next(e)}},{key:"updateSelectedImageIndex",value:function(e){this.imageSelectedIndexUpdatedSource.next(e)}},{key:"showImageViewer",value:function(e){this.showImageViewerSource.next(e)}}]),e}();d.\u0275fac=function(e){return new(e||d)},d.\u0275prov=l.Yb({token:d,factory:d.\u0275fac});var u=i("IheW"),m=i("GS7A");function w(e,t){if(1&e&&l.dc(0,"div",9),2&e){var i=t.$implicit,n=t.index,a=l.rc(2);l.Hc("background-image",i.viewerImageLoaded?"url("+i[a.categorySelected].path+")":a.math.abs(a.currentIdx-n)<=1?"url("+i.preview_xs.path+")":"",l.Vb)("left",a.transform+"px"),l.Tb("active",i.active),l.wc("@imageTransition",i.transition)}}function M(e,t){if(1&e){var i=l.ic();l.hc(0,"img",10),l.pc("load",(function(){l.Cc(i);var e=t.$implicit;return l.rc(2).imageLoaded(e)})),l.gc()}if(2&e){var n=t.$implicit,a=t.index,r=l.rc(2);l.xc("src",r.math.abs(r.currentIdx-a)<=1?n[r.categorySelected].path:"",l.Ec)}}var I=function(e){return{activeArrow:e}};function y(e,t){if(1&e){var i=l.ic();l.hc(0,"div",1),l.pc("resize",(function(){return l.Cc(i),l.rc().onResize()}),!1,l.Bc),l.hc(1,"img",2),l.pc("click",(function(){return l.Cc(i),l.rc().navigate(-1,!1)})),l.gc(),l.hc(2,"img",3),l.pc("click",(function(){return l.Cc(i),l.rc().navigate(1,!1)})),l.gc(),l.hc(3,"div",4),l.hc(4,"img",5),l.pc("click",(function(){return l.Cc(i),l.rc().closeViewer()})),l.gc(),l.gc(),l.hc(5,"div",6),l.pc("click",(function(){return l.Cc(i),l.rc().showNavigationArrows()}))("swipeleft",(function(e){return l.Cc(i),l.rc().navigate(1,e)}))("swiperight",(function(e){return l.Cc(i),l.rc().navigate(-1,e)}))("pan",(function(e){return l.Cc(i),l.rc().pan(e)})),l.Ic(6,w,1,7,"div",7),l.Ic(7,M,1,1,"img",8),l.gc(),l.gc()}if(2&e){var n=l.rc();l.wc("@showViewerTransition",n.showViewer),l.Qb(1),l.wc("ngClass",l.yc(7,I,n.leftArrowActive))("hidden",!n.leftArrowVisible),l.Qb(1),l.wc("ngClass",l.yc(9,I,n.rightArrowActive))("hidden",!n.rightArrowVisible),l.Qb(4),l.wc("ngForOf",n.images),l.Qb(1),l.wc("ngForOf",n.images)}}var v=function(){function e(t){var i=this;_classCallCheck(this,e),this.imageService=t,this.images=[{}],this.currentIdx=0,this.leftArrowVisible=!0,this.rightArrowVisible=!0,this.categorySelected="preview_xs",this.qualitySelectorShown=!1,this.qualitySelected="auto",t.imagesUpdated$.subscribe((function(e){i.images=e})),t.imageSelectedIndexUpdated$.subscribe((function(e){i.currentIdx=e,i.images.forEach((function(e){return e.active=!1})),i.images[i.currentIdx].active=!0,i.transform=0,i.updateQuality()})),t.showImageViewerChanged$.subscribe((function(e){i.showViewer=e})),this.math=Math}return _createClass(e,[{key:"leftArrowActive",get:function(){return this.currentIdx>0}},{key:"rightArrowActive",get:function(){return this.currentIdx<this.images.length-1}},{key:"pan",value:function(e){this.transform=e.deltaX}},{key:"onResize",value:function(){this.images.forEach((function(e){e.viewerImageLoaded=!1,e.active=!1})),this.updateImage()}},{key:"showQualitySelector",value:function(){this.qualitySelectorShown=!this.qualitySelectorShown}},{key:"qualityChanged",value:function(e){this.qualitySelected=e,this.updateImage()}},{key:"imageLoaded",value:function(e){e.viewerImageLoaded=!0}},{key:"navigate",value:function(e,t){console.log(e,t),(1===e&&this.currentIdx<this.images.length-1||-1===e&&this.currentIdx>0)&&(-1==e?(this.images[this.currentIdx].transition="leaveToRight",this.images[this.currentIdx-1].transition="enterFromLeft"):(this.images[this.currentIdx].transition="leaveToLeft",this.images[this.currentIdx+1].transition="enterFromRight"),this.currentIdx+=e,t?this.hideNavigationArrows():this.showNavigationArrows(),this.updateImage())}},{key:"showNavigationArrows",value:function(){this.leftArrowVisible=!0,this.rightArrowVisible=!0}},{key:"closeViewer",value:function(){this.images.forEach((function(e){return e.transition=void 0})),this.images.forEach((function(e){return e.active=!1})),this.imageService.showImageViewer(!1)}},{key:"onKeydown",value:function(e){var t=[37,39,27,36,35].find((function(t){return t===e.keyCode}));switch(t&&e.preventDefault(),t){case 37:this.navigate(-1,!1);break;case 39:this.navigate(1,!1);break;case 27:this.closeViewer();break;case 36:this.images[this.currentIdx].transition="leaveToRight",this.currentIdx=0,this.images[this.currentIdx].transition="enterFromLeft",this.updateImage();break;case 35:this.images[this.currentIdx].transition="leaveToLeft",this.currentIdx=this.images.length-1,this.images[this.currentIdx].transition="enterFromRight",this.updateImage()}}},{key:"hideNavigationArrows",value:function(){this.leftArrowVisible=!1,this.rightArrowVisible=!1}},{key:"updateImage",value:function(){var e=this;setTimeout((function(){e.updateQuality(),e.images[e.currentIdx].active=!0,e.images.forEach((function(t){t!=e.images[e.currentIdx]&&(t.active=!1,e.transform=0)}))}),500)}},{key:"updateQuality",value:function(){window.innerWidth,window.innerHeight,this.categorySelected="preview_xs"}}]),e}();v.\u0275fac=function(e){return new(e||v)(l.cc(d))},v.\u0275cmp=l.Wb({type:v,selectors:[["viewer"]],hostBindings:function(e,t){1&e&&l.pc("keydown",(function(e){return t.onKeydown(e)}),!1,l.Ac)},decls:1,vars:1,consts:[["class","outerContainer",3,"resize",4,"ngIf"],[1,"outerContainer",3,"resize"],["src","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx0aXRsZS8+PGRlc2MvPiAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9Im1pdSIgc3Ryb2tlPSIjNTU1IiBzdHJva2Utd2lkdGg9IjAuMiI+ICAgICA8ZyBpZD0iQXJ0Ym9hcmQtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5NS4wMDAwMDAsIC0xOTEuMDAwMDAwKSI+PGcgaWQ9InNsaWNlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTUuMDAwMDAwLCAxMTkuMDAwMDAwKSIvPjxwYXRoICAgICAgIGQ9Ik0zOTYsMjAyLjUgQzM5NiwxOTYuMTQ4NzI1IDQwMS4xNDg3MjUsMTkxIDQwNy41LDE5MSBDNDEzLjg1MTI3NSwxOTEgNDE5LDE5Ni4xNDg3MjUgNDE5LDIwMi41IEM0MTksMjA4Ljg1MTI3NSA0MTMuODUxMjc1LDIxNCA0MDcuNSwyMTQgQzQwMS4xNDg3MjUsMjE0IDM5NiwyMDguODUxMjc1IDM5NiwyMDIuNSBaIE00MDguNjU2ODU0LDE5Ni44NDMxNDYgTDQxMC4wNzEwNjgsMTk4LjI1NzM1OSBMNDA1LjgyODQyNywyMDIuNSBMNDEwLjA3MTA2OCwyMDYuNzQyNjQxIEw0MDguNjU2ODU0LDIwOC4xNTY4NTQgTDQwMywyMDIuNSBMNDA4LjY1Njg1NCwxOTYuODQzMTQ2IFoiICAgICAgIGZpbGw9IiNhYWEiICAgICAgIGlkPSJjaXJjbGUtYmFjay1hcnJvdy1nbHlwaCIvPjwvZz4gICA8L2c+IDwvc3ZnPg==",1,"arrow","left",3,"ngClass","hidden","click"],["src","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx0aXRsZS8+PGRlc2MvPjxkZWZzLz4gICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJtaXUiIHN0cm9rZT0iIzU1NSIgc3Ryb2tlLXdpZHRoPSIwLjIiPiAgICAgPGcgaWQ9IkFydGJvYXJkLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjcuMDAwMDAwLCAtMTkxLjAwMDAwMCkiPjxnIGlkPSJzbGljZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE1LjAwMDAwMCwgMTE5LjAwMDAwMCkiLz48cGF0aCAgICAgICBkPSJNNDY4LDIwMi41IEM0NjgsMTk2LjE0ODcyNSA0NzMuMTQ4NzI1LDE5MSA0NzkuNSwxOTEgQzQ4NS44NTEyNzUsMTkxIDQ5MSwxOTYuMTQ4NzI1IDQ5MSwyMDIuNSBDNDkxLDIwOC44NTEyNzUgNDg1Ljg1MTI3NSwyMTQgNDc5LjUsMjE0IEM0NzMuMTQ4NzI1LDIxNCA0NjgsMjA4Ljg1MTI3NSA0NjgsMjAyLjUgWiBNNDgwLjY1Njg1NCwxOTYuODQzMTQ2IEw0ODIuMDcxMDY4LDE5OC4yNTczNTkgTDQ3Ny44Mjg0MjcsMjAyLjUgTDQ4Mi4wNzEwNjgsMjA2Ljc0MjY0MSBMNDgwLjY1Njg1NCwyMDguMTU2ODU0IEw0NzUsMjAyLjUgTDQ4MC42NTY4NTQsMTk2Ljg0MzE0NiBaIiAgICAgICBmaWxsPSIjYWFhIiAgICAgICBpZD0iY2lyY2xlLW5leHQtYXJyb3ctZGlzY2xvc3VyZS1nbHlwaCIgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDc5LjUwMDAwMCwgMjAyLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNDc5LjUwMDAwMCwgLTIwMi41MDAwMDApICIvPjwvZz4gICA8L2c+IDwvc3ZnPg==",1,"arrow","right",3,"ngClass","hidden","click"],[1,"buttonContainer"],["src","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwcHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiBmaWxsPSIjYWFhIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgPHBhdGggICAgc3Ryb2tlLXdpZHRoPSIzMCIgc3Ryb2tlPSIjNDQ0IiAgICBkPSJNNDM3LjUsMzg2LjZMMzA2LjksMjU2bDEzMC42LTEzMC42YzE0LjEtMTQuMSwxNC4xLTM2LjgsMC01MC45Yy0xNC4xLTE0LjEtMzYuOC0xNC4xLTUwLjksMEwyNTYsMjA1LjFMMTI1LjQsNzQuNSAgYy0xNC4xLTE0LjEtMzYuOC0xNC4xLTUwLjksMGMtMTQuMSwxNC4xLTE0LjEsMzYuOCwwLDUwLjlMMjA1LjEsMjU2TDc0LjUsMzg2LjZjLTE0LjEsMTQuMS0xNC4xLDM2LjgsMCw1MC45ICBjMTQuMSwxNC4xLDM2LjgsMTQuMSw1MC45LDBMMjU2LDMwNi45bDEzMC42LDEzMC42YzE0LjEsMTQuMSwzNi44LDE0LjEsNTAuOSwwQzQ1MS41LDQyMy40LDQ1MS41LDQwMC42LDQzNy41LDM4Ni42eiIvPjwvc3ZnPg==",1,"action","close",3,"click"],[1,"imageContainer",3,"click","swipeleft","swiperight","pan"],["class","image",3,"active","background-image","left",4,"ngFor","ngForOf"],["class","preloading-image",3,"src","load",4,"ngFor","ngForOf"],[1,"image"],[1,"preloading-image",3,"src","load"]],template:function(e,t){1&e&&l.Ic(0,y,8,11,"div",0),2&e&&l.wc("ngIf",t.showViewer)},directives:[n.j,n.h,n.i],styles:['.outerContainer[_ngcontent-%COMP%]{top:0;bottom:0;left:0;right:0;height:100%;width:100%;position:fixed;background-color:#000;font-family:sans-serif;z-index:1031}.imageContainer[_ngcontent-%COMP%]{position:absolute;float:none;top:0;bottom:0;left:0;right:0}.imageContainer[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .imageContainer[_ngcontent-%COMP%]   .preloading-image[_ngcontent-%COMP%]{visibility:hidden}.imageContainer[_ngcontent-%COMP%]   .image.active[_ngcontent-%COMP%]{position:absolute;visibility:visible;background-repeat:no-repeat;background-size:contain;background-position:50%;margin:auto;left:0;right:0;top:0;bottom:0;height:100%;width:100%;opacity:1}.arrow[_ngcontent-%COMP%]{opacity:0}.arrow[_ngcontent-%COMP%]:hover{cursor:pointer}.outerContainer[_ngcontent-%COMP%]:hover   .arrow.activeArrow[_ngcontent-%COMP%]{height:calc(20px + 1.5vw);position:absolute;top:calc(50% - 10px - .75vw);bottom:50%;z-index:1;opacity:1;transition:all .5s ease-out}.arrow.left[_ngcontent-%COMP%]{left:2vw}.arrow.right[_ngcontent-%COMP%]{right:2vw}.arrow[_ngcontent-%COMP%]:not(.activeArrow):hover{opacity:0;cursor:pointer;transition:all .5s ease-out}.buttonContainer[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;height:20px;text-align:center;opacity:1;z-index:200;transition:all .5s ease-out}.buttonContainer[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{height:100%;cursor:pointer;vertical-align:top}.buttonContainer[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:focus{outline:0}.buttonContainer[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:hover{background-color:#222;transition:all .3s ease-out}.buttonContainer[_ngcontent-%COMP%]   .action.close[_ngcontent-%COMP%]{width:26px;height:26px}md-button-toggle.checked[_ngcontent-%COMP%]{background-color:#a0a0a0}.menuButton[_ngcontent-%COMP%]{position:absolute;bottom:20px;right:20px;text-align:center;opacity:1;z-index:200;transition:all .5s ease-out}@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:local("Material Icons"),local("MaterialIcons-Regular"),url(https://fonts.gstatic.com/s/materialicons/v19/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format("woff2")}.material-icons[_ngcontent-%COMP%]{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}'],data:{animation:[Object(m.j)("imageTransition",[Object(m.g)("enterFromRight",Object(m.h)({opacity:1,transform:"translate(0px, 0px)"})),Object(m.g)("enterFromLeft",Object(m.h)({opacity:1,transform:"translate(0px, 0px)"})),Object(m.g)("leaveToLeft",Object(m.h)({opacity:0,transform:"translate(-100px, 0px)"})),Object(m.g)("leaveToRight",Object(m.h)({opacity:0,transform:"translate(100px, 0px)"})),Object(m.i)("* => enterFromRight",[Object(m.h)({opacity:0,transform:"translate(30px, 0px)"}),Object(m.e)("250ms 500ms ease-in")]),Object(m.i)("* => enterFromLeft",[Object(m.h)({opacity:0,transform:"translate(-30px, 0px)"}),Object(m.e)("250ms 500ms ease-in")]),Object(m.i)("* => leaveToLeft",[Object(m.h)({opacity:1}),Object(m.e)("250ms ease-out")]),Object(m.i)("* => leaveToRight",[Object(m.h)({opacity:1}),Object(m.e)("250ms ease-out")])]),Object(m.j)("showViewerTransition",[Object(m.g)("true",Object(m.h)({opacity:1})),Object(m.g)("void",Object(m.h)({opacity:0})),Object(m.i)("void => *",[Object(m.h)({opacity:0}),Object(m.e)("1000ms ease-in")]),Object(m.i)("* => void",[Object(m.h)({opacity:1}),Object(m.e)("500ms ease-out")])])]}});var p=["galleryContainer"],f=["imageElement"];function C(e,t){if(1&e){var i=l.ic();l.hc(0,"img",8,9),l.pc("click",(function(){l.Cc(i);var e=t.$implicit;return l.rc(2).openImageViewer(e)})),l.gc()}if(2&e){var n=t.$implicit,a=l.rc(2);l.Hc("width",n.width,"px")("height",n.height,"px")("background",n.dominantColor,l.Vb)("margin-right",a.calcImageMargin(),"px"),l.wc("src",n.srcAfterFocus,l.Ec)}}function b(e,t){if(1&e&&(l.hc(0,"div",6),l.Ic(1,C,2,9,"img",7),l.gc()),2&e){var i=t.$implicit,n=l.rc();l.Hc("margin-bottom",n.calcImageMargin(),"px"),l.wc("hidden",!n.hasRenderedFinal),l.Qb(1),l.wc("ngForOf",i)}}var x=function(e){return{inactive:e}};function j(e,t){if(1&e){var i=l.ic();l.hc(0,"div",10),l.hc(1,"img",11),l.pc("click",(function(){return l.Cc(i),l.rc().navigate(-1)})),l.gc(),l.hc(2,"img",12),l.pc("click",(function(){return l.Cc(i),l.rc().navigate(1)})),l.gc(),l.gc()}if(2&e){var n=l.rc();l.wc("hidden",!n.hasRenderedFinal),l.Qb(1),l.wc("ngClass",l.yc(3,x,n.leftArrowInactive)),l.Qb(1),l.wc("ngClass",l.yc(5,x,n.rightArrowInactive))}}function D(e,t){1&e&&(l.hc(0,"div",13),l.hc(1,"div",14),l.dc(2,"ion-spinner",15),l.gc(),l.gc())}var L=function(){function e(t,i,n){_classCallCheck(this,e),this.imageService=t,this.http=i,this.changeDetectorRef=n,this.gallery=[],this.imageDataStaticPath="assets/img/gallery/",this.imageDataCompletePath="",this.dataFileName="data.json",this.images=[],this.minimalQualityCategory="preview_xs",this.rowIndex=0,this.rightArrowInactive=!1,this.leftArrowInactive=!1,this.shouldRenderFinal=!1,this.hasRenderedFinal=!1,this.providedImageMargin=3,this.providedImageSize=7,this.providedGalleryName="",this.providedMetadataUri=void 0,this.rowsPerPage=200,this.viewerChange=new l.t}return _createClass(e,[{key:"triggerCycle",value:function(e){this.scaleGallery()}},{key:"windowResize",value:function(e){this.render()}},{key:"ngOnInit",value:function(){var e=this;this.fetchDataAndRender(),this.viewerSubscription=this.imageService.showImageViewerChanged$.subscribe((function(t){return e.viewerChange.emit(t)})),setTimeout((function(){e.shouldRenderFinal&&e.render()}),1e3)}},{key:"ngOnChanges",value:function(e){null!=e.providedGalleryName?this.fetchDataAndRender():this.render()}},{key:"ngOnDestroy",value:function(){this.viewerSubscription&&this.viewerSubscription.unsubscribe()}},{key:"openImageViewer",value:function(e){this.imageService.updateImages(this.images),this.imageService.updateSelectedImageIndex(this.images.indexOf(e)),this.imageService.showImageViewer(!0)}},{key:"navigate",value:function(e){(1===e&&this.rowIndex<this.gallery.length-this.rowsPerPage||-1===e&&this.rowIndex>0)&&(this.rowIndex+=this.rowsPerPage*e),this.refreshNavigationErrorState()}},{key:"calcImageMargin",value:function(){var e=this.getGalleryWidth()/1920;return Math.round(Math.max(1,this.providedImageMargin*e))}},{key:"fetchDataAndRender",value:function(){var e=this;this.imageDataCompletePath=this.providedMetadataUri,this.providedMetadataUri||(this.imageDataCompletePath=""!==this.providedGalleryName?"".concat(this.imageDataStaticPath+this.providedGalleryName,"/").concat(this.dataFileName):this.imageDataStaticPath+this.dataFileName),this.http.get(this.imageDataCompletePath).subscribe((function(t){e.images=t,e.imageService.updateImages(e.images),e.images.forEach((function(e){e.galleryImageLoaded=!1,e.viewerImageLoaded=!1,e.srcAfterFocus=""})),e.render(),e.render()}),(function(t){e.providedMetadataUri?console.error("Provided endpoint '".concat(e.providedMetadataUri,"' did not serve metadata correctly or in the expected format.\n      See here for more information: https://github.com/BenjaminBrandmeier/angular2-image-gallery/blob/master/docs/externalDataSource.md,\n      Original error: ").concat(t)):console.error("Did you run the convert script from angular2-image-gallery for your images first? Original error: "+t)}),(function(){}))}},{key:"render",value:function(){var e=this;this.gallery=[];for(var t=[this.images[0]],i=0,n=0;n<this.images.length;n++){for(0===this.images[n].width?this.shouldRenderFinal=!0:setTimeout((function(){e.hasRenderedFinal=!0}),2e3);this.images[n+1]&&this.shouldAddCandidate(t,this.images[n+1]);)n++;this.images[n+1]&&t.pop(),this.gallery[i++]=t,t=[this.images[n+1]]}this.scaleGallery()}},{key:"shouldAddCandidate",value:function(e,t){var i=this.calcIdealHeight()-this.calcRowHeight(e);e.push(t);var n=this.calcIdealHeight()-this.calcRowHeight(e);return Math.abs(i)>Math.abs(n)}},{key:"calcRowHeight",value:function(e){var t=this.calcOriginalRowWidth(e),i=(this.getGalleryWidth()-(e.length-1)*this.calcImageMargin())/t;return e[0][this.minimalQualityCategory].height*i}},{key:"calcOriginalRowWidth",value:function(e){var t=this,i=0;return e.forEach((function(e){var n=t.calcIdealHeight()/e[t.minimalQualityCategory].height;e[t.minimalQualityCategory].width=e[t.minimalQualityCategory].width*n,e[t.minimalQualityCategory].height=t.calcIdealHeight(),i+=e[t.minimalQualityCategory].width})),i}},{key:"calcIdealHeight",value:function(){return this.getGalleryWidth()/(80/this.providedImageSize)+100}},{key:"getGalleryWidth",value:function(){return 0===this.galleryContainer.nativeElement.clientWidth?this.galleryContainer.nativeElement.scrollWidth:this.galleryContainer.nativeElement.clientWidth}},{key:"scaleGallery",value:function(){var e=this,t=0,i=0;this.gallery.slice(this.rowIndex,this.rowIndex+this.rowsPerPage).forEach((function(n){var a=e.calcOriginalRowWidth(n);if(n!==e.gallery[e.gallery.length-1]){var r=(e.getGalleryWidth()-(n.length-1)*e.calcImageMargin())/a;n.forEach((function(n){n.width=n[e.minimalQualityCategory].width*r,n.height=n[e.minimalQualityCategory].height*r,i=Math.max(i,n.height),e.checkForAsyncLoading(n,t++)}))}else n.forEach((function(n){n.width=n[e.minimalQualityCategory].width,n.height=n[e.minimalQualityCategory].height,i=Math.max(i,n.height),e.checkForAsyncLoading(n,t++)}))})),this.minimalQualityCategory="preview_xs",this.refreshNavigationErrorState(),this.changeDetectorRef.detectChanges()}},{key:"checkForAsyncLoading",value:function(e,t){var i=this.imageElements.toArray();e.galleryImageLoaded||i.length>0&&i[t]&&this.isScrolledIntoView(i[t].nativeElement)?(e.galleryImageLoaded=!0,e.srcAfterFocus=e[this.minimalQualityCategory].path):e.srcAfterFocus=""}},{key:"isScrolledIntoView",value:function(e){return!0}},{key:"refreshNavigationErrorState",value:function(){this.leftArrowInactive=0==this.rowIndex,this.rightArrowInactive=this.rowIndex>this.gallery.length-this.rowsPerPage}}]),e}();function N(e,t){if(1&e){var i=l.ic();l.hc(0,"div",1),l.hc(1,"ion-header"),l.hc(2,"ion-toolbar",2),l.hc(3,"ion-title",3),l.hc(4,"ion-grid"),l.hc(5,"ion-row"),l.hc(6,"ion-col",4),l.hc(7,"ion-buttons"),l.hc(8,"ion-button",5),l.pc("click",(function(e){return l.Cc(i),l.rc().presentGalleryPopover(e)})),l.hc(9,"ion-label"),l.Jc(10),l.gc(),l.dc(11,"ion-icon",6),l.gc(),l.gc(),l.gc(),l.hc(12,"ion-col",7),l.Jc(13),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(14,"div",8),l.dc(15,"gallery",9),l.gc(),l.gc()}if(2&e){var n=l.rc();l.Qb(10),l.Kc(n.gallery.title),l.Qb(3),l.Lc(" ",n.gallery.date," "),l.Qb(2),l.wc("galleryName",n.gallery.name)("metadataUri",n.metadataUri)}}L.\u0275fac=function(e){return new(e||L)(l.cc(d),l.cc(u.a),l.cc(l.j))},L.\u0275cmp=l.Wb({type:L,selectors:[["gallery"]],viewQuery:function(e,t){var i;1&e&&(l.Gc(p,!0),l.Oc(f,!0)),2&e&&(l.zc(i=l.qc())&&(t.galleryContainer=i.first),l.zc(i=l.qc())&&(t.imageElements=i))},hostBindings:function(e,t){1&e&&l.pc("scroll",(function(e){return t.triggerCycle(e)}),!1,l.Bc)("resize",(function(e){return t.windowResize(e)}),!1,l.Bc)},inputs:{providedImageMargin:["flexBorderSize","providedImageMargin"],providedImageSize:["flexImageSize","providedImageSize"],providedGalleryName:["galleryName","providedGalleryName"],providedMetadataUri:["metadataUri","providedMetadataUri"],rowsPerPage:["maxRowsPerPage","rowsPerPage"]},outputs:{viewerChange:"viewerChange"},features:[l.Ob],decls:8,vars:7,consts:[[1,"galleryContainer"],["galleryContainer",""],[1,"innerGalleryContainer"],["class","imagerow",3,"margin-bottom","hidden",4,"ngFor","ngForOf"],["class","pagerContainer",3,"hidden",4,"ngIf"],["class","content-outer center-content-vertical center-content-horizontal",4,"ngIf"],[1,"imagerow",3,"hidden"],["class","thumbnail",3,"width","height","src","background","margin-right","click",4,"ngFor","ngForOf"],[1,"thumbnail",3,"src","click"],["imageElement",""],[1,"pagerContainer",3,"hidden"],["src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0yNCw0NkMxMS45LDQ2LDIsMzYuMSwyLDI0UzExLjksMiwyNCwyczIyLDkuOSwyMiwyMlMzNi4xLDQ2LDI0LDQ2eiBNMjQsNEMxMyw0LDQsMTMsNCwyNGMwLDExLDksMjAsMjAsMjAgICBjMTEsMCwyMC05LDIwLTIwQzQ0LDEzLDM1LDQsMjQsNHoiLz48L2c+PGc+PHBvbHlnb24gcG9pbnRzPSIyNy42LDM2LjcgMTQuOSwyNCAyNy42LDExLjMgMjkuMSwxMi43IDE3LjgsMjQgMjkuMSwzNS4zICAiLz48L2c+PC9zdmc+",1,"pager","left",3,"ngClass","click"],["src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0yNCw0NkMxMS45LDQ2LDIsMzYuMSwyLDI0UzExLjksMiwyNCwyczIyLDkuOSwyMiwyMlMzNi4xLDQ2LDI0LDQ2eiBNMjQsNEMxMyw0LDQsMTMsNCwyNHM5LDIwLDIwLDIwczIwLTksMjAtMjAgICBTMzUsNCwyNCw0eiIvPjwvZz48Zz48cG9seWdvbiBwb2ludHM9IjIxLjQsMzYuNyAxOS45LDM1LjMgMzEuMiwyNCAxOS45LDEyLjcgMjEuNCwxMS4zIDM0LjEsMjQgICIvPjwvZz48L3N2Zz4=",1,"pager","right",3,"ngClass","click"],[1,"content-outer","center-content-vertical","center-content-horizontal"],[1,"content-inner"],["color","dark"]],template:function(e,t){1&e&&(l.hc(0,"div",0,1),l.hc(2,"div",2),l.Ic(3,b,2,4,"div",3),l.sc(4,"slice"),l.gc(),l.Ic(5,j,3,7,"div",4),l.Ic(6,D,3,0,"div",5),l.gc(),l.dc(7,"viewer")),2&e&&(l.Qb(3),l.wc("ngForOf",l.tc(4,3,t.gallery,t.rowIndex,t.rowIndex+t.rowsPerPage)),l.Qb(2),l.wc("ngIf",!t.rightArrowInactive||!t.leftArrowInactive),l.Qb(1),l.wc("ngIf",!t.hasRenderedFinal))},directives:[n.i,n.j,v,n.h,r.z],pipes:[n.m],styles:[".innerGalleryContainer[_ngcontent-%COMP%]{position:relative}.galleryContainer[_ngcontent-%COMP%]{height:100%;width:100%;overflow:hidden}.innerGalleryContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child{margin-right:-1px!important}.galleryContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{filter:brightness(50%);transition:all .2s ease-out;cursor:pointer}.imagerow[_ngcontent-%COMP%]{margin-right:1px;overflow:hidden;display:flex}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.asyncLoadingContainer[_ngcontent-%COMP%]{position:absolute;background-color:transparent;height:0;width:0;bottom:120px}.pagerContainer[_ngcontent-%COMP%]{margin:40px auto;width:180px}@media (max-width:700px){.pagerContainer[_ngcontent-%COMP%]{margin:40px auto;width:150px}}.pager[_ngcontent-%COMP%]{display:block;height:60px}@media (max-width:700px){.pager[_ngcontent-%COMP%]{display:block;height:45px}}.pager.inactive[_ngcontent-%COMP%]{opacity:.15}.pager.left[_ngcontent-%COMP%]{float:left}.pager.right[_ngcontent-%COMP%]{float:right}.content-outer[_ngcontent-%COMP%]{height:calc(100vh - 180px)}ion-spinner[_ngcontent-%COMP%]{width:75px;height:75px}"]});var A=function(){function e(t,i,n){_classCallCheck(this,e),this.utilsService=t,this.activatedRoute=i,this.popoverController=n}return _createClass(e,[{key:"metadataUri",get:function(){return this.gallery?"assets/images/gallery/".concat(this.gallery.name,"/data.json"):void 0}},{key:"ionViewDidEnter",value:function(){var e=this;this.activatedRoute.params.subscribe((function(t){e.gallery=e.utilsService.galleryData.find((function(e){return e.name===t.galleryName})),e.utilsService.setTitle(e.gallery.title+" Gallery")}))}},{key:"presentGalleryPopover",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popoverController.create({event:e,component:s.a});case 2:t.sent.present();case 3:case"end":return t.stop()}}),t,this)})))}}]),e}();A.\u0275fac=function(e){return new(e||A)(l.cc(g.a),l.cc(c.a),l.cc(r.I))},A.\u0275cmp=l.Wb({type:A,selectors:[["app-gallery"]],decls:2,vars:1,consts:[["class","content-outer page-outer",4,"ngIf"],[1,"content-outer","page-outer"],["color","primary"],[1,"content-inner","title","grid"],["size","6"],[1,"title-button",3,"click"],["slot","end","name","caret-down"],["size","6",1,"ion-text-right","gallery-date"],[1,"content-inner","gallery"],[3,"galleryName","metadataUri"]],template:function(e,t){1&e&&(l.hc(0,"ion-content"),l.Ic(1,N,16,4,"div",0),l.gc()),2&e&&(l.Qb(1),l.wc("ngIf",t.gallery))},directives:[r.j,n.j,r.m,r.C,r.B,r.l,r.w,r.i,r.d,r.c,r.r,r.n,L],styles:[".title-button[_ngcontent-%COMP%]{margin-bottom:2px}.title-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:20px!important}.title-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:14px;margin-left:4px}.gallery-date[_ngcontent-%COMP%]{padding-top:14px}.content-inner.gallery[_ngcontent-%COMP%]{min-height:calc(100% - 56px)}"]});var O=[{path:"",component:A}],S=function e(){_classCallCheck(this,e)};S.\u0275mod=l.ac({type:S}),S.\u0275inj=l.Zb({factory:function(e){return new(e||S)},imports:[[c.j.forChild(O)],c.j]});var k=function e(){_classCallCheck(this,e)};k.\u0275mod=l.ac({type:k}),k.\u0275inj=l.Zb({factory:function(e){return new(e||k)},providers:[d],imports:[[n.b,a.a,u.b,r.D]]});var P=function e(){_classCallCheck(this,e)};P.\u0275mod=l.ac({type:P}),P.\u0275inj=l.Zb({factory:function(e){return new(e||P)},imports:[[n.b,a.a,r.D,S,k]]})}}]);