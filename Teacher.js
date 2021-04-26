////////////////////
//// Modularity ////
////////////////////

import MPerson from "./Person";

export class MTeacher extends MPerson {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach = () => "Teaching!";
}