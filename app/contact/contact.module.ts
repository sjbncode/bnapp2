import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';


import { SharedModule }        from '../shared/shared.module';

import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';

import { UserService }             from '../core/user.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [SharedModule,ContactRoutingModule,NgbModule],
  declarations: [ ContactComponent],
  exports:      [ ContactComponent ],
  providers:    [ ContactService,UserService ]
})
export class ContactModule { }