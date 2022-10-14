class History {
    constructor() {
        this.clear();
    }

    clear() {
        this.record = [];
        this.index = 0;
        return this.record;
    }

    add(data) {
        this.record.length = this.index;
        this.record[this.index] = data;
        this.index++;
        return this.record;
    }

    undo() {
        if (this.index > 1) this.index--;
        return this.current();
    }

    redo() {
        if (this.index < this.record.length) this.index++;
        return this.current();
    }

    current() {
        return this.record[this.index - 1];
    }
}