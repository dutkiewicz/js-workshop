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
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initTemplate = function (_a) {
            var content = _a.content, onClickHandler = _a.onClickHandler;
            _this.template = document.createElement('button');
            _this.template.innerText = content;
            _this.template.addEventListener('click', onClickHandler);
            _this.target.appendChild(_this.template);
        };
        _this.initTemplate(props);
        return _this;
    }
    return ButtonComponent;
}(BaseComponent_js_1.default));
exports.default = ButtonComponent;
;
