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
var BaseComponent_js_1 = __importDefault(require("./BaseComponent.js"));
var GalleryCellComponent = /** @class */ (function (_super) {
    __extends(GalleryCellComponent, _super);
    function GalleryCellComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initTemplate = function (_a) {
            var content = _a.content, onRemove = _a.onRemove;
            _this.template = document.createElement('div');
            // define cell
            _this.template.setAttribute('id', content.id);
            _this.template.classList.add('gallery__cell');
            // define image element
            _this.imageElement = document.createElement('div');
            _this.imageElement.classList.add('gallery__image');
            _this.imageElement.appendChild(content.template);
            // define image title
            _this.imageTitleElement = document.createElement('div');
            _this.imageTitleElement.classList.add('gallery__image-title');
            _this.imageTitleElement.innerText = content.title;
            // define remove button
            _this.removeButton = document.createElement('div');
            _this.removeButton.classList.add('gallery__remove_button');
            _this.removeButton.innerText = 'X';
            _this.removeButton.addEventListener('click', function () { return onRemove(content.id); });
            // add elements to cell
            _this.template.appendChild(_this.imageElement);
            _this.template.appendChild(_this.imageTitleElement);
            _this.template.appendChild(_this.removeButton);
            _this.target.appendChild(_this.template);
        };
        _this.initTemplate(props);
        return _this;
    }
    return GalleryCellComponent;
}(BaseComponent_js_1.default));
exports.default = GalleryCellComponent;
;
