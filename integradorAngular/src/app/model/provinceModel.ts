import { Country } from "./countryModel"

export interface Province{
    idProvince:number,
	province: string;
    country: Country;
}