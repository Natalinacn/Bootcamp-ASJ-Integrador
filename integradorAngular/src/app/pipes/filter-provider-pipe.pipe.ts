import { Pipe, PipeTransform } from '@angular/core';
import { ProvidersModel } from '../model/providerModel';

@Pipe({
  name: 'filterProviderPipe'
})
export class FilterProviderPipePipe implements PipeTransform {

  transform(providers: ProvidersModel[], criteria: string): ProvidersModel[] {
    console.log('Filtering with criteria:', criteria);
    if(!criteria || criteria === ''){
      return providers
    }
    const lowerCaseCriteria = criteria.toLowerCase();
    return providers.filter(provider=>
      provider.businessName.toLowerCase().includes(lowerCaseCriteria) ||
      provider.providerCode.toLowerCase().includes(lowerCaseCriteria)
      );
    
  }

}
