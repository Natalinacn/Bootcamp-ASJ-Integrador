export interface ProvidersModel {
  idProvider: number;
  providerCode: string;
  businessName: string;
  cuit: string;
  industry: string;
  address: {
    streetAndNumber: string;
    postalCode: string;
    locality: string;
    city: string;
    province: string;
    country: string;
  };
  contact: {
    website: string;
    phone: string;
    email: string;
  };
  IvaCondition: {
    idIvaCondition?: number;
    ivaCondition: string;
  };
  responsiblePerson: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
  };
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
