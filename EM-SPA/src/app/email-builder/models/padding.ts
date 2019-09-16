export class Padding {
    constructor() {
        this.top = this.right = this.bottom = this.left = 10;
    }
    top: number;
    right: number;
    bottom: number;
    left: number;

    static create(): Padding {
        return new Padding();
    }

    static duplicate(padding: Padding): Padding {
        var newPadding = new Padding();
        newPadding.bottom = padding.bottom;
        newPadding.left = padding.left;
        newPadding.right = padding.right;
        newPadding.top = padding.top;
        return newPadding;
    }
}