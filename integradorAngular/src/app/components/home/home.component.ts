import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productQ : number = 0;
  providerQ : number = 0;
  purchaseQ : number = 0;

  constructor(private homeService : HomeService){}

  ngOnInit(): void {
    this.productQuantity();
    this.providerQuantity();
    this.purchaseQuantity();
    
  }
  
  productQuantity(){
    this.homeService.getProductQuantity().subscribe((data)=>{
      this.productQ = data;
    });
  }

  providerQuantity(){
    this.homeService.getProviderQuantity().subscribe((data)=>{
      this.providerQ= data;
    });
  }

  purchaseQuantity(){
    this.homeService.getPurchaseQuantity().subscribe((data)=>{
      this.purchaseQ = data;
    });
  }

}
