

class Group {

    constructor(...init_elements) {
        this.elements = []
        for (let elem of init_elements) {
            this.elements.push(elem);
        }
    }

    add(element) {
        if (this.elements.indexOf(element) === -1) this.elements.push(element)
    }

    delete(element) {
        if (this.has(element)) {
            let index = this.elements.indexOf(element);
            this.elements.splice(index, 1);
            return this.elements;
        }
    }

    has(element) {
        if (this.elements.indexOf(element) === -1) return false
        return true
    }

    show() {
        console.log(this.elements);
    }

    static from(iterable) {
        return new Group(...iterable);
    }

    [Symbol.iterator] = function() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.counter = 0;
    }

    next() {
        if (this.group.elements[this.counter] === undefined) {
            return { done: true };
        } else {
            let value = this.group.elements[this.counter];
            this.counter++;
            return { value: value, done: false };
        }
    }
}


g_1 = new Group(1, 2, 3, 4)
g_1.add(2);
g_1.delete(2);
g_1.show();
for (elem of g_1) {
    console.log(`elem: ${elem}`);
}
console.log(`elements property in g1?: ${'elements' in g_1}`)

g_2 = Group.from([5, 6, 7, 8]);
g_2.show();
