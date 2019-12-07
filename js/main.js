"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GalleryComponent_js_1 = __importDefault(require("./components/GalleryComponent.js"));
var body = document.querySelector('body');
var galleryComponent = new GalleryComponent_js_1.default({
    target: body,
    content: null,
});
