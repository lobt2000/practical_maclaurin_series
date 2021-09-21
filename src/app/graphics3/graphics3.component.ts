import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { SubscriptService } from '../services/subscript.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-graphics3',
  templateUrl: './graphics3.component.html',
  styleUrls: ['./graphics3.component.scss']
})
export class Graphics3Component implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  graphInfo: any;
  constructor(private SubscriptService: SubscriptService) { }

  ngOnInit(): void {
    this.SubscriptService.graphInfo.subscribe(res => {
      if (res) {
        this.graphInfo = res;
        this.buildChart();
      } else {
        this.graphInfo = null;
      }
    });

  }
  buildChart(): void {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: this.graphInfo.Delta16
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Графік відносної похибки для 16 розрядної сітки",
        align: "center"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.graphInfo.x
      }
    };
  }

}
