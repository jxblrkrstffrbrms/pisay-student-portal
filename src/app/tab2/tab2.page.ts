import { Component } from '@angular/core';
import { IonHeader, IonFab, IonDatetime, IonFabButton, IonFabList, IonToolbar, IonIcon, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonDatetime, IonFab, IonFabButton, IonIcon, IonFabList, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle,IonCardSubtitle, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

}
