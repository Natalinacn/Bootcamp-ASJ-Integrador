export interface ProvidersModel {
  id: number;
  providerCode: string;
  businessName: string;
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
  fiscalData: {
    cuit: string;
    taxCondition: string;
  };
  responsiblePerson: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
  };
}
