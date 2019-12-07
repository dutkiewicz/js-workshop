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
var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(data) {
        var _this = _super.call(this, data) || this;
        _this.initTemplate = function (_a) {
            var content = _a.content;
            _this.template = document.createElement('img');
            _this.template.setAttribute('src', content.src);
            _this.target.appendChild(_this.template);
        };
        _this.title = data.content.id;
        _this.initTemplate(data);
        return _this;
    }
    return ImageComponent;
}(BaseComponent_js_1.default));
exports.default = ImageComponent;
;
