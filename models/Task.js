import {v4 as hash} from 'uuid';

export default class Task {
    id = '';
    desc = '';
    completeOn = null
    constructor(desc ) {
        this.desc = desc;
        this.id = hash()
        this.completeOn = null
    }
}