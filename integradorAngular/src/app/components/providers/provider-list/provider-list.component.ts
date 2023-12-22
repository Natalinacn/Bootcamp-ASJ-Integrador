import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
})
export class ProviderListComponent implements OnInit {
  providersData: any[] = [];

  constructor(public providersService: ProvidersService) {}

  ngOnInit(): void {
    // this.providersData = this.providersService.getHardcodedProviders();

  }
}
