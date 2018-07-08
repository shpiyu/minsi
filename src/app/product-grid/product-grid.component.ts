import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StructuredProductsService } from '../services/structured-products.service'

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  public rowSelection: string = "single";

  private gridApi;

  public columnDefs: Array<object> = [{ headerName: 'CUSIP', field: 'cusip' }, { headerName: 'Offering Name', field: 'name' }, { headerName: 'Market Value', field: 'marketValue' }, { headerName: 'Quantity', field: 'quantity' }];

  public rowData: Array<object>;

  constructor(private router: Router, private spService: StructuredProductsService) { 
    spService.fetchStructuredProducts().then(prods => this.rowData=prods);
  }

  ngOnInit() {
  }

  public onGridReady(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }

  public onSelectionChanged(){
    let selectedRows = this.gridApi.getSelectedRows();
    selectedRows.forEach((row, index)=>{
      this.router.navigate(['/detail',row.cusip])
    })
  }

}
