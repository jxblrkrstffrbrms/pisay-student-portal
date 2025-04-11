import { Injectable } from '@angular/core';
import { 
    getFirestore, 
    collection, 
    addDoc, 
    query, 
    where, 
    getDocs, 
    deleteDoc,
    doc,
    updateDoc 
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

export interface Activity {
    id?: string;
    title: string;
    description: string;
    deadline: string;
    userId: string;
    isCompleted: boolean;
    notificationsSent: {
        dayBefore: boolean;
        dayOf: boolean;
    };
}

@Injectable({
    providedIn: 'root'
})
export class ActivityService {
    private db = getFirestore();
    private functions = getFunctions();

    constructor() {}

    async addActivity(activity: Omit<Activity, 'id' | 'userId' | 'isCompleted' | 'notificationsSent'>) {
        const auth = getAuth();
        if (!auth.currentUser) throw new Error('No authenticated user');

        const newActivity: Omit<Activity, 'id'> = {
            ...activity,
            userId: auth.currentUser.uid,
            isCompleted: false,
            notificationsSent: {
                dayBefore: false,
                dayOf: false
            }
        };

        const docRef = await addDoc(collection(this.db, 'activities'), newActivity);
        return docRef.id;
    }

    async getPendingActivities() {
        const auth = getAuth();
        if (!auth.currentUser) throw new Error('No authenticated user');

        const q = query(
            collection(this.db, 'activities'),
            where('userId', '==', auth.currentUser.uid),
            where('isCompleted', '==', false)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Activity));
    }

    async markAsComplete(activityId: string) {
        const activityRef = doc(this.db, 'activities', activityId);
        await updateDoc(activityRef, {
            isCompleted: true
        });
    }

    async deleteActivity(activityId: string) {
        await deleteDoc(doc(this.db, 'activities', activityId));
    }

    async sendNotificationEmail(activity: Activity, type: 'dayBefore' | 'dayOf') {
        const sendEmail = httpsCallable(this.functions, 'sendActivityReminder');
        await sendEmail({ 
            activityId: activity.id,
            type 
        });
    }
} 