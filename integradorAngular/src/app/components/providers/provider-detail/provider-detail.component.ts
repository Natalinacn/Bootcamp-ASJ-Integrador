import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { ProvidersModel } from 'src/app/model/providerModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit{

  provider!: ProvidersModel;

  constructor(
    public providerService: ProvidersService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.providerService.getPoviderById(id).subscribe((data)=>{
      this.provider = data;
    });
  }





}
