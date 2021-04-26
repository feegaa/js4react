////////////////////
//// Modularity ////
////////////////////


//////////////////////////////////
//// Named and default export ////
//////////////////////////////////
export function sing() {}

export default class MPerson {
    constructor(name) {
        this.name = name;
    }
    walk = () => this.name + " is walking!";
}
