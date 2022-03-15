import { Sorter } from './Sorter';

export class NumberCollections extends Sorter {
  // data: number[]
  // constructor ( data: number[]){
  //     this.number = data
  // }

  constructor(public data: number[]) {
    super();
  } // is equitant to above solution

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }
}
