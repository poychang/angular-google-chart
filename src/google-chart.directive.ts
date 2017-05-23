import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { element } from 'protractor';

declare var google: any;

@Directive({
  selector: '[GoogleChart]'
})
export class GoogleChartDirective implements OnChanges {

  _element: any;
  /** 表格包 */
  @Input('chartPackage') chartPackage = 'corechart';
  /** 表格類型 */
  @Input('chartType') chartType: string;
  /** 表格設定 */
  @Input('chartOptions') chartOptions: Object;
  /** 表格資料 */
  @Input('chartData') chartData: Object;

  constructor(private element: ElementRef) {
    this._element = this.element.nativeElement;
  }

  ngOnChanges(): void {
    google.charts.load('current', { 'packages': [this.chartPackage] });
    // setTimeout(() => this.drawGraph(), 1000);
    this.drawGraph();
  }

  drawGraph() {
    google.charts.setOnLoadCallback(function () {
      const wrapper = new google.visualization.ChartWrapper({
        chartType: this.chartType,
        dataTable: this.chartData,
        options: this.chartOptions || {}
      });
      wrapper.draw(this._element);
    }.bind(this));
  }
}
