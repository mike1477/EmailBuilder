export class BackgroundImage {
    constructor()
    constructor(obj: BackgroundImage)
    constructor(obj?: any) {
        this.url = obj && obj.url;
        this.repeat = obj && obj.repeat;
        this.sizeInPercent = obj && obj.size;
        this.sizeInPixel = obj && obj.size;
    }
    url: string;
    repeat: string;
    sizeInPercent: number;
    sizeInPixel: number;

    static duplicate(obj: BackgroundImage): BackgroundImage {
        return new BackgroundImage(obj);
    }
}