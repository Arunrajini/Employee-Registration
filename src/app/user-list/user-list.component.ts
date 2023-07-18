import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  orderBy
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit  {
  title = 'ang-fire';
  userData!: Observable<any[]>;

  constructor(private firestore: Firestore) {
    this.getData();
  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'users');
    const q = query(collectionInstance, orderBy('EmployeeName'));
    this.userData = collectionData(q, { idField: 'id' });
  }

  // deleteData(id:string){
  //   const docInstance = doc(this.firestore,'users',id);
  //   deleteDoc(docInstance)
  //   .then(()=>{
  //     console.log("delete data")

  //   })
  // }
}
