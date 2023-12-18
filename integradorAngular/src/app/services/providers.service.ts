import { Injectable } from '@angular/core';
import { providers } from '../data/providers';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor() { }

  public getHardcodedProviders(){

    return providers;
    
  } 

}
