import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  productList : any [] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadAllProducts();
  }

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((results:any)=>{
      this.productList = results.data;
    })
  }

}
