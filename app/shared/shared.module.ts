import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ CommonModule,NgbModule],
  declarations: [ AwesomePipe, HighlightDirective ],
  exports:      [ AwesomePipe, HighlightDirective,
                  CommonModule, FormsModule ,NgbModule]
})
export class SharedModule { }