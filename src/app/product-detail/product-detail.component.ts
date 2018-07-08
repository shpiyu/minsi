import { Component, OnInit, Input } from '@angular/core';
import { MinProdAttr } from '../constants/constants';
import { ActivatedRoute } from '@angular/router';
import { StructuredProductsService } from '../services/structured-products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public cusip:string;
  public fetchError: boolean = false;
  
  public minProdAttr: MinProdAttr = {
    cusip: "",
    name: "",
    quantity: 0,
    marketValue: 0
  };

  constructor(private route: ActivatedRoute, private spService : StructuredProductsService) {
    this.route.params.subscribe((params)=>this.cusip = params['cusip'])
    this.spService.getProduct(this.cusip).then((res)=>{
      res.json().then((prod) => Object.assign(this.minProdAttr,prod))
                .catch((e)=>{this.fetchError = true; console.log(e);})
    });
  }

  ngOnInit() {
    
  }

}
