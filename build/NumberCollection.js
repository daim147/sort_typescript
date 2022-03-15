"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollections = void 0;
class NumberCollections {
    // data: number[]
    // constructor ( data: number[]){
    //     this.number = data
    // }
    constructor(data) {
        this.data = data;
    } // is equitant to above solution
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        [this.data[leftIndex], this.data[rightIndex]] = [
            this.data[rightIndex],
            this.data[leftIndex],
        ];
    }
}
exports.NumberCollections = NumberCollections;
