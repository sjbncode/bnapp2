import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { SharedModule }        from '../shared/shared.m';
import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';

@NgModule({

  imports:      [ CommonModule, FormsModule,SharedModule],
  declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  exports:      [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ClimsModule { }