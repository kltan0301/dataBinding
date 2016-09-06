import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { InterpolationComponent } from './interpolation.component';
import { PropertyBindComponent } from './propertyBind.component';
import { PropChild } from './propertyBindChild.component';
import { EventBind } from './eventBind.component';
import { EventChild } from './eventBindChild.component';
import { SiblingComponent } from './sibling.component';
import { Child1 } from './sibling.child1.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  InterpolationComponent,
                  PropertyBindComponent,
                  PropChild,
                  EventBind,
                  EventChild,
                  SiblingComponent,
                  Child1
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
