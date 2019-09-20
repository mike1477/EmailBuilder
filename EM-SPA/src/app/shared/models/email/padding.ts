export class Padding {

    constructor();
    constructor(obj: Padding)
    constructor(obj?: any) {
        this.top = obj && obj.top || 0;
        this.right = obj && obj.right || 0;
        this.bottom = obj && obj.bottom || 0;
        this.left = obj && obj.left || 0;
    }

    top: number;
    right: number;
    bottom: number;
    left: number;

    static create(): Padding {
        return new Padding();
    }

    static duplicate(padding: Padding): Padding {
        var newPadding = new Padding(padding);
        return newPadding;
    }
}