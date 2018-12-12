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
    this.createSlide();
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

    createSlide(){
      let theSlide = document.getElementById("slider") as HTMLIonSlidesElement;
      let newSlide = document.createElement("ion-slide");   
      let card = document.createElement("ion-card") as HTMLIonCardElement;

      newSlide.setAttribute("class", "mySlide");

      let text = document.createElement("h2");
      text.innerHTML = "Overskrift";

      let image = document.createElement("img") as HTMLImageElement;
      image.setAttribute("class", "myImg")
      image.src = "../../assets/img/dawn.jpg";

      card.appendChild(text);
      card.appendChild(image);
      newSlide.appendChild(card);

      theSlide.appendChild(newSlide);     

    }
  
}

