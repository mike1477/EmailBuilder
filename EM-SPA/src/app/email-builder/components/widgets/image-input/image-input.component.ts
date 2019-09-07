import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent implements OnInit {
  imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

  setImage(imageUrl: string){
    console.log(this.imageUrl);
  }

}
