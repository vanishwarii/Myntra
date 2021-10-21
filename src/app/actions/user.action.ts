import { User } from "../models/User";
export class AddUser {
    static readonly type = '[Users] Add';

    constructor(public style: User) {}
}