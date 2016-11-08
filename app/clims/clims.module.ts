import { NgModule }           from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import { ClimsService }     from './shared/clims.service';
import { ContactComponent }   from './contact.component';

@NgModule({

  imports:      [ SharedModule],
  declarations: [ ContactComponent],
  exports:      [ ContactComponent ],
  providers:    [ ClimsService ]
})
export class ClimsModule { }