import { Component, OnInit } from '@angular/core';
import { ActivityService, Activity } from '../services/activity.service';
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
    newActivity = {
        title: '',
        description: '',
        deadline: new Date().toISOString()
    };
    
    pendingActivities: Activity[] = [];

    constructor(
        private activityService: ActivityService,
        private alertController: AlertController
    ) {}

    ngOnInit() {
        this.loadActivities();
    }

    async loadActivities() {
        try {
            this.pendingActivities = await this.activityService.getPendingActivities();
            this.pendingActivities.sort((a, b) => 
                new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
            );
        } catch (error) {
            console.error('Error loading activities:', error);
            this.showAlert('Error', 'Failed to load activities');
        }
    }

    async addActivity() {
        if (!this.newActivity.title || !this.newActivity.deadline) {
            await this.showAlert('Error', 'Please fill in all required fields');
            return;
        }

        try {
            await this.activityService.addActivity(this.newActivity);
            this.newActivity = {
                title: '',
                description: '',
                deadline: new Date().toISOString()
            };
            await this.loadActivities();
            await this.showAlert('Success', 'Activity added successfully');
        } catch (error) {
            console.error('Error adding activity:', error);
            await this.showAlert('Error', 'Failed to add activity');
        }
    }

    async markAsComplete(activityId: string | undefined) {
        if (!activityId) {
            await this.showAlert('Error', 'Activity ID is missing');
            return;
        }
        try {
            await this.activityService.markAsComplete(activityId);
            await this.loadActivities();
        } catch (error) {
            console.error('Error marking activity as complete:', error);
            await this.showAlert('Error', 'Failed to update activity');
        }
    }

    async deleteActivity(activityId: string | undefined) {
        if (!activityId) {
            await this.showAlert('Error', 'Activity ID is missing');
            return;
        }
        try {
            await this.activityService.deleteActivity(activityId);
            await this.loadActivities();
        } catch (error) {
            console.error('Error deleting activity:', error);
            await this.showAlert('Error', 'Failed to delete activity');
        }
    }

    getTimeRemaining(deadline: string): string {
        const now = new Date();
        const dueDate = new Date(deadline);
        const diff = dueDate.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        if (days < 0) return 'Overdue';
        if (days === 0) return 'Due today';
        return `${days} days remaining`;
    }

    getDueDateColor(deadline: string): string {
        const days = Math.floor(
            (new Date(deadline).getTime() - new Date().getTime()) / 
            (1000 * 60 * 60 * 24)
        );
        
        if (days < 0) return 'danger';
        if (days === 0) return 'warning';
        if (days <= 3) return 'primary';
        return 'success';
    }

    private async showAlert(header: string, message: string) {
        const alert = await this.alertController.create({
            header,
            message,
            buttons: ['OK']
        });
        await alert.present();
    }
}
