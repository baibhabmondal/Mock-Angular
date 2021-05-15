
import {Component, Inject, OnInit} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import * as data from './data.json'

type Folder = {id: string, type: string, parentId: string|null, name: string}


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})


export class ParentComponent implements OnInit {
  animal: string = 'dog';
  name: string = 'tommy';
  currentFolderId = '';
  repeat = 1

  get currentFolderData(): Folder[] {


    // comes from Query Params
    // if we are inside a folder
    if(this.currentFolderId) {

      return this.allData.filter(data => data.parentId === this.currentFolderId)

    } else {
      // we are in root, hence parent = null

      return this.allData.filter(data => data.parentId == null);
    }


  };



  constructor(private route: ActivatedRoute, private router: Router) { }

  allData = data.data

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        // console.log(params)
        this.currentFolderId = params.folder // folder
      }
    )

  }


  goInsideFolder(id: string) {
   this.router.navigate([''], { queryParams: {folder: id}})
  }



  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogBox, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}

// @Component({
//   selector: 'dialog-box',
//   templateUrl: 'dialog-box.html',
// })
// export class DialogBox {

//   constructor(
//     public dialogRef: MatDialogRef<DialogBox>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
