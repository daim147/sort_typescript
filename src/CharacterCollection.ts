import { Sorter } from './Sorter';

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(lefIndex: number, rightIndex: number): boolean {
    return (
      this.data[lefIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(lefIndex: number, rightIndex: number): void {
    const data = this.data.split('');
    [data[lefIndex], data[rightIndex]] = [data[rightIndex], data[lefIndex]];
    this.data = data.join('');
  }
}
