import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { JokeComponent } from './joke/joke.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './joke/joke.service';

@NgModule({
  declarations: [
    AppComponent,
    //Add dialog component name below
    GenericDialogComponent,
    JokeComponent
  ],
  entryComponents:[
    //Also add dialog component name below
    GenericDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Add module below
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
