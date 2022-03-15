"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(lefIndex, rightIndex) {
        return (this.data[lefIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(lefIndex, rightIndex) {
        const data = this.data.split('');
        [data[lefIndex], data[rightIndex]] = [data[rightIndex], data[lefIndex]];
        this.data = data.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
