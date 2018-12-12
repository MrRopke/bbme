import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera';
@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  constructor() { }

  camera : Camera;

  ngOnInit() {
  }

  imageSrc : string;

  changeImage(){
    console.log("Trykket");

    // let cameraOptions = {
    //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //   destinationType: this.camera.DestinationType.FILE_URI,      
    //   quality: 100,
    //   targetWidth: 1000,
    //   targetHeight: 1000,
    //   encodingType: this.camera.EncodingType.JPEG,      
    //   correctOrientation: true
    // }

    this.camera.getPicture()
    .then(file_uri => this.imageSrc = file_uri,
    err => console.log(err));  
    }
  
}

