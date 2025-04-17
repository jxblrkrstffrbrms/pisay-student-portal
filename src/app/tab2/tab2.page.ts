import { Component, OnInit } from '@angular/core';
//import { ActivityService, Activity } from '../services/activity.service';
import { AlertController, IonContent, IonCard, IonCardContent, IonItem, IonInput, IonTextarea, 
  IonDatetime, IonDatetimeButton, IonModal, IonButton, IonList, IonItemSliding, IonItemOptions, 
  IonItemOption, IonIcon, IonBadge, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonContent, IonCard, IonCardContent, IonItem, IonInput, IonTextarea, 
      IonDatetime, IonDatetimeButton, IonModal, IonButton, IonList, IonItemSliding, IonItemOptions, 
      IonItemOption, IonIcon, IonBadge, IonCardHeader, IonCardTitle, IonCardSubtitle]
})
export class Tab2Page implements OnInit {
   

    constructor(
        //private activityService: ActivityService,
        private alertController: AlertController
    ) {}

    ngOnInit() {
    }

    
}
