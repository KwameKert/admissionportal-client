import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { DashboardService} from '../../service/dashboard.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  isLoading: boolean = true;
  dataSource = new MatTableDataSource<any>();

  displayedColumns = ['transactionId', 'amount', 'date'];


  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['approved', 'pending', 'rejected'];
  public pieChartData: number[]  ;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private _dashboardService: DashboardService, private ngxService: NgxUiLoaderService,) { }
  ngOnInit(): void {
    this.fetchDashboard();
  }


  fetchDashboard(){
    this.ngxService.start();
      this._dashboardService.fetchDashboard().subscribe(data=>{

        let result = data.data
        this.pieChartData = result.applications;
        this.dataSource = new MatTableDataSource(result.transactions);
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;

      }, error=>{

      })
      this.ngxService.stop();
  }


 

}
