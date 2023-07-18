import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  Firestore,
  collection,
  addDoc

} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  title = 'ang-fire';
  userData!: Observable<any>;


  constructor(private firestore: Firestore,public route:Router) { } 

  addData(data: any) {
    
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, data.value)
      .then(() => {
     
        console.log('Data Saved Successfully');
        this.route.navigate(['/listuser'])
      })
      .catch((err) => {
        console.log(err);
      })
  } 
 
  
}

