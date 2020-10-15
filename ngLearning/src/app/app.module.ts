import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { TextBoxComponent } from './text-box/text-box.component';
import { TitlePipe } from './title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    TextBoxComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
