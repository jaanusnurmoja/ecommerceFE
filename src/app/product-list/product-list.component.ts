import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {isModuleMetadata} from "@angular/compiler-cli";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.httpService.getProducts()
      .subscribe(
        data => this.productList = data
    )
  }

}
