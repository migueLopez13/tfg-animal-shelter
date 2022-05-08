import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManteinanceComponent } from './manteinance.component';
import { ManteinanceRouting } from './manteinance-routing.module';

@NgModule({
  declarations: [ManteinanceComponent],
  imports: [CommonModule, ManteinanceRouting],
})
export class ManteinanceModule {}
