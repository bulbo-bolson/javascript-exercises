
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(vector) {
        let sum_x = this.x + vector.x;
        let sum_y = this.y + vector.y;
        return new Vec(sum_x, sum_y);
    }
    minus(vector) {
        let diff_x = Math.abs(this.x - vector.x);
        let diff_y = Math.abs(this.y - vector.y);
        return new Vec(diff_x, diff_y);
    }
}

a_vec = new Vec(2, 2);
b_vec = new Vec(2, 2);
