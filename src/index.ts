import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartDirective } from './google-chart.directive';

export * from './google-chart.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleChartDirective
  ],
  exports: [
    GoogleChartDirective
  ]
})
export class GoogleChartModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GoogleChartModule,
      providers: []
    };
  }
}
