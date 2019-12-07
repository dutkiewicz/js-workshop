"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIREBASE_URL = 'https://frontend-workshop.firebaseio.com/zborowski/';
exports.PICSUM_URL = "https://picsum.photos/";
exports.random = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
