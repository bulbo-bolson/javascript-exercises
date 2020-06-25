
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
}

function withBoxUnlocked(fun) {
    box.unlock();
    try {
        fun();
    } catch (e) {
        console.log(`catched exception ${e}`);
    } finally {
        box.lock();
    }
}

let goodFun = function() {
    console.log(`goodFunction: 4 + 4 = ${8}`);
}
let badFun = function() {
    console.log(`badFunction: ${0 * isdf}`);
}

console.log(`box is locked? ${box.locked}`);
withBoxUnlocked(goodFun);
withBoxUnlocked(badFun);
console.log(`box is locked? ${box.locked}`);

