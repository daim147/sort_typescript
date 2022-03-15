import { Sorter } from './Sorter';
import { NumberCollections } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const character = new CharacterCollection('bhjqghgHAXGXSAxajddad');
const number = new NumberCollections([-231, 452, 213, -231, 21, -98765]);
const linkedList = new LinkedList();
linkedList.add(-231);
linkedList.add(2653);
linkedList.add(-231);

character.sort();
number.sort();
linkedList.sort();

console.log(character.data);
console.log(number.data);
linkedList.print();
