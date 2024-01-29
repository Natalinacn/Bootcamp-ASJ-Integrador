import { Province } from "./provinceModel";

export interface City{
    idCity:number,
	city: string;
    province: Province;
}