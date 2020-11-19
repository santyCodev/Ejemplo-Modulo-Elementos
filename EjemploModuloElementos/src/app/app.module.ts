import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementosModule } from './modules/elementos/elementos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
