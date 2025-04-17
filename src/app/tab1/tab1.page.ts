import { Component, HostListener } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonFabList, 
  IonIcon, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { globeOutline, logoFacebook, helpCircleOutline, bulbOutline, eyeOutline, 
  starOutline, trophyOutline, shieldCheckmarkOutline, peopleOutline, 
  sparklesOutline, megaphoneOutline, notificationsOutline, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';

interface Announcement {
    title: string;
    date: string;
    description: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, 
    IonFabList, IonIcon, ExploreContainerComponent, IonGrid, IonCol, IonRow, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel],
})
export class Tab1Page {
  isScrolled = false;
  cardsVisible = false;

  constructor() {
    addIcons({add,notificationsOutline,megaphoneOutline,globeOutline,logoFacebook,helpCircleOutline,bulbOutline,eyeOutline,starOutline,trophyOutline,shieldCheckmarkOutline,peopleOutline,sparklesOutline});
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset;
    this.isScrolled = scrollPosition > 50;
    
    if (scrollPosition > 100) {
      this.cardsVisible = true;
    }
  }

  announcements: Announcement[] = [
    {
      title: 'Registration for New School Year',
      date: 'Deadline: June 15, 2024',
      description: 'All students are required to complete their registration for the upcoming school year.'
    },
    {
      title: 'Science Fair 2024',
      date: 'Date: July 20-22, 2024',
      description: 'Join us for the annual Science Fair showcasing innovative projects from our students.'
    },
    {
      title: 'Final Examination Schedule',
      date: 'March 15-20, 2024',
      description: 'Please check the examination schedule and prepare accordingly.'
    }
  ];
}
