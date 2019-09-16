import { ElementBase } from './elementBase';

export class ImageElement extends ElementBase {
    constructor() {
        super();
        this.image = {
            url: "",
            altText: "",
            link: ""
        }
    }
    image: any
}