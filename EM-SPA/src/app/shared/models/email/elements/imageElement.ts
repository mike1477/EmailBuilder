import { ElementBase } from './elementBase';

const defaultSrc = "https://drive.google.com/uc?id=1PN2nrHASs_A9krbLYLdpyDcxHiSNgjdZ";
const defaultAlt = "Image Not Found";
const defaultHref = "";
const defaultWidthInPercentage = 100;

export class ImageElement extends ElementBase {
    constructor();
    constructor(obj: ImageElement);
    constructor(obj?: any) {
        if (obj) super(obj);
        else super();

        var image = obj && obj.image || {}
        this.image = {
            src: image.src || defaultSrc,
            alt: image.alt || defaultAlt,
            href: image.href || defaultHref
        }
    }

    image: any;
    static create(): ImageElement {
        var newImage = new ImageElement();
        newImage.widthInPercentage = defaultWidthInPercentage;
        return newImage;
    }

    static duplicate(image: ImageElement): ImageElement {
        return new ImageElement(image);
    }
}