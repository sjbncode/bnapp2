import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BnChartDirective }  from './plugin/chartjs.directive'; 


@NgModule({
  imports:      [ CommonModule,NgbModule],
  declarations: [ AwesomePipe, HighlightDirective,BnChartDirective ],
  exports:      [ AwesomePipe, HighlightDirective,
                  CommonModule, FormsModule ,NgbModule,BnChartDirective]
})
export class SharedModule { }