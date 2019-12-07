"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_js_1 = require("../api.js");
var constants_js_1 = require("../constants.js");
var ButtonComponent_js_1 = __importDefault(require("./ButtonComponent.js"));
var BaseComponent_js_1 = __importDefault(require("./BaseComponent.js"));
var GalleryCellComponent_js_1 = __importDefault(require("./GalleryCellComponent.js"));
var ImageComponent_js_1 = __importDefault(require("./ImageComponent.js"));
var InputComponent_js_1 = __importDefault(require("./InputComponent.js"));
var GalleryComponent = /** @class */ (function (_super) {
    __extends(GalleryComponent, _super);
    function GalleryComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initTemplate = function () {
            _this.template = document.createElement('div');
            _this.template.classList.add('gallery');
            // define panel
            _this.galleryPanel = document.createElement('div');
            _this.galleryPanel.classList.add('gallery__panel');
            // define container
            _this.galleryContainer = document.createElement('div');
            _this.galleryContainer.classList.add('gallery__container');
            // define input
            _this.input = new InputComponent_js_1.default({
                id: 'imageAmountInput',
                target: _this.galleryPanel,
            });
            // define buttons
            _this.generateButton = new ButtonComponent_js_1.default({
                id: 'generateButton',
                target: _this.galleryPanel,
                content: 'Generate images',
                onClickHandler: _this.generateImages,
            });
            _this.clearButton = new ButtonComponent_js_1.default({
                id: 'clearButton',
                target: _this.galleryPanel,
                content: 'Clear gallery',
                onClickHandler: _this.removeImages,
            });
            // add elements to gallery
            _this.galleryPanel.appendChild(_this.generateButton.template);
            _this.galleryPanel.appendChild(_this.clearButton.template);
            _this.template.appendChild(_this.galleryPanel);
            _this.template.appendChild(_this.galleryContainer);
            _this.target.appendChild(_this.template);
        };
        _this.getImages = function () {
            api_js_1.apiGetImages()
                .then(function (response) {
                if (response) {
                    console.log(response);
                    for (var _i = 0, _a = Object.entries(response); _i < _a.length; _i++) {
                        var _b = _a[_i], id = _b[0], image = _b[1];
                        if (!_this.images[id]) {
                            _this.images[id] = new ImageComponent_js_1.default({
                                id: id,
                                target: _this.template,
                                content: image,
                            });
                        }
                    }
                    _this.fillGallery();
                }
            });
        };
        _this.fillGallery = function () {
            Object.values(_this.images)
                .forEach(function (imageComponent) {
                if (!document.getElementById(imageComponent.id)) {
                    new GalleryCellComponent_js_1.default({
                        id: imageComponent.id,
                        target: _this.galleryContainer,
                        content: imageComponent,
                        onRemove: _this.removeImageById,
                    });
                }
            });
        };
        _this.generateImages = function () {
            for (var i = 0; i < (_this.input.template.value || 5); i++) {
                var id = constants_js_1.random(1, 1000);
                var imageData = {
                    id: id,
                    src: constants_js_1.PICSUM_URL + "id/" + id + "/200/200",
                };
                if (!_this.images[id]) {
                    _this.images[id] = new ImageComponent_js_1.default({
                        id: id,
                        target: _this.template,
                        content: imageData,
                    });
                    api_js_1.apiSetImage(imageData)
                        .then(function (response) {
                        console.log('setImage', response);
                    });
                }
            }
            _this.fillGallery();
        };
        _this.removeImageById = function (imageId) {
            var confirmation = confirm('Do you want to remove this image?');
            if (confirmation) {
                api_js_1.apiRemoveImageById(imageId)
                    .then(function () {
                    delete _this.images[imageId];
                    _this.galleryContainer.removeChild(document.getElementById(imageId));
                });
            }
        };
        _this.removeImages = function () {
            var confirmation = confirm('Do you want to remove all images?');
            if (confirmation) {
                api_js_1.apiRemoveImages()
                    .then(function () {
                    while (_this.galleryContainer.firstChild) {
                        _this.galleryContainer.removeChild(_this.galleryContainer.firstChild);
                    }
                    _this.images = {};
                });
            }
        };
        _this.images = {};
        _this.initTemplate();
        _this.getImages();
        return _this;
    }
    return GalleryComponent;
}(BaseComponent_js_1.default));
exports.default = GalleryComponent;
;
