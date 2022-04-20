import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TestComponent],
  	providers: [],
  	exports: [TestComponent] })
export class TestComponentModule {
}
