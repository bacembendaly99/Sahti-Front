import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragAndDropDirective} from '../dragAndDrop/drag-and-drop.directive';



@NgModule({
  declarations: [DragAndDropDirective],
  imports: [
    CommonModule,
  ],
  exports: [DragAndDropDirective],
})
export class DirectivesModuleModule { }
