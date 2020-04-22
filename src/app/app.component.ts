import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';


interface DialogConfiguration {
  data: {
    title:string;
    content:string;
    button1Text:string;
    button2Text:string;
    includeCheckbox?:boolean;
  },
  width: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generic-dialog';
  
  //inject the MatDialog service
  constructor(private dialog:MatDialog){
  }
  
  
  openModal() {

    // let optionalConfigObject = {height:'400px', width:'600px'}
    //use the MatDialog service to open the dialog by passing in the dialog component name
    // and add optional config object if you like
    

    let dialogConfig: DialogConfiguration = 
    { data:
       { title:'Title',
         content:'Cont en tad fadsfff ffff fffff ffffffff ffffffff fffffffffffff ffffffffff ffffffffffff fffffffffffff fffffffffffff ffffffffff ffffffff',
         button1Text:'Update',
         button2Text:'Cancel',
         includeCheckbox:true
       },
       width:'400px'
    }

    //You can also pass in data 
    this.dialog.open(GenericDialogComponent, dialogConfig)
  }
}
