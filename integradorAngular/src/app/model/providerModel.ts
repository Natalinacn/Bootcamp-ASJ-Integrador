export interface ProvidersModel {
  idProvider: number;
  providerCode: string;
  businessName: string;
  img: string;
  cuit: string;
  website: string;
  phone: string;
  email: string;
  industry: {
    idIndustry: number;
    industry: string;
  }
  address: {
    idAddress: number;
    streetAndNumber: string;
    postalCode: string;
    city: {
      idCity: number;
      city: string;
      province: {
        idProvince: number;
        province: string;
        country: {
          idCountry: number;
          country: string;
        },
      }
    }
  };
  ivaCondition: {
    idIvaCondition: number;
    ivaCondition: string;
  };
  responsiblePerson: {
    idResponsiblePerson: number,
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
