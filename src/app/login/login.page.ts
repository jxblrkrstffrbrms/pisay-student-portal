import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { globeOutline, logoFacebook, helpCircleOutline, peopleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonFabList, IonIcon, IonCard, 
  IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonInput, IonButton, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton, 
    IonFabList, IonIcon, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonInput,
  IonButton, IonCol, IonGrid, IonRow, ]
})
export class LoginPage implements OnInit {

  constructor(private router:Router) {
    addIcons({helpCircleOutline,logoFacebook,globeOutline,peopleOutline});
}

  ngOnInit() {
  }

  submitForm(){
      this.router.navigate(['tabs']);
  }

  

}
