"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    // constructor(public collection: number[] | string) {}
    sort() {
        const { length } = this.collection;
        //! we can also check for types and then perform action based on types but that is bad approach by using type guard
        //? When (|) union operator is use for types typescript will only give access to those properties which are common in both types  if we use type guard (typeof , instanceof) for performing action based on types than all the properties will be access
        // ! if(this.collection instanceof Array){
        //    //* it will give access to all properties of array because here typescript now that we are performing action on arrays
        //! }
        //! if ( typeof this.collection === 'string'){
        //* it will give access to all properties of strings because here typescript now that we are performing action on strings
        //!}
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
