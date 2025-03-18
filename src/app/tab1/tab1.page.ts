import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonFabList, 
  IonIcon, IonGrid, IonCol, IonRow, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { globeOutline, logoFacebook, helpCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, 
    IonFabList, IonIcon, ExploreContainerComponent, IonGrid, IonCol, IonRow, IonCard],
})
export class Tab1Page {
  constructor() {
    addIcons({globeOutline, logoFacebook, helpCircleOutline })
  }
}
