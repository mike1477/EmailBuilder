import { ElementBase } from './elementBase';
import { Padding } from '../padding';

export class ImageElement extends ElementBase {
    constructor() {
        super();
        this.image = {
            url: "https://drive.google.com/uc?id=1PN2nrHASs_A9krbLYLdpyDcxHiSNgjdZ",
            altText: "Empty-image",
            link: "https://drive.google.com/uc?id=1PN2nrHASs_A9krbLYLdpyDcxHiSNgjdZ"
        }
    }

    image: any;
    static create(): ImageElement {
        return new ImageElement;
    }

    static duplicate(image: ImageElement): ImageElement {
        var newElement = new ImageElement();
        newElement.alignment = image.alignment;
        newElement.autoWidth = image.autoWidth;
        newElement.backgroundColor = image.backgroundColor;
        newElement.padding = Padding.duplicate(image.padding);
        newElement.widthInPercentage = image.widthInPercentage;
        newElement.image = JSON.parse(JSON.stringify(image.image));
        return newElement;
    }
}