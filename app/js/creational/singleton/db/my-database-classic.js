"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDataBaseClassic = void 0;
class MyDataBaseClassic {
    constructor() {
        this.Users = [];
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new MyDataBaseClassic();
        }
        return this.instance;
    }
    Add(user) {
        this.Users.push(user);
    }
    Remove() {
        this.Users.pop();
    }
    show() {
        for (const user of this.Users) {
            console.log(user);
        }
    }
}
exports.MyDataBaseClassic = MyDataBaseClassic;
MyDataBaseClassic.instance = null;
//# sourceMappingURL=my-database-classic.js.map