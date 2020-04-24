import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';


interface DialogConfiguration {
  data: {
    title:string;
    trackingNumber:number;
    fileName:string;
    approvedTiersSubmitted:number;
    errors:number;
    button1Text:string;
    button2Text:string;
    templateUrl:string;
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
    {data:
       { title:"Do you want to submit the following file?",
         trackingNumber:1234,
         fileName:"File name",
         approvedTiersSubmitted: 23,
         errors: 250,
         button1Text:'Submit',
         button2Text:'Cancel',
         templateUrl:'./generic-dialog.component.html'
       },
      width:'400px'
    }

    //You can also pass in data 
    this.dialog.open(GenericDialogComponent, dialogConfig)
  }
}
