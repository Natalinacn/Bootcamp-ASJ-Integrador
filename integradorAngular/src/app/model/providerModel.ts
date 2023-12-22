export interface ProvidersModel {
  id: number;
  razonSocial: string;
  rubro: string;
  calleYAltura: string;
  cp: string;
  localidad: string;
  ciudad: string;
  provincia: string;
  pais: string;
  web: string;
  telefono: string;
  email: string;
  cuit: string;
  condicionIva: string;
  personaResponsable: {
    nombreResp: string;
    apellidoResp: string;
    telefonoResp: string;
    emailResp: string;
    rolResp: string;
  };
}
