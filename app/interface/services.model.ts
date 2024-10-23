interface ServiceStep {
    number: string;
    description?: string;
    detail?: string;
  }
  
  interface ServiceData {
    header:string;
    general_production: {
      title: string;
      subtitle: string;
      steps: ServiceStep[];
    };
    ploonet_quickserve: {
      title: string;
      subtitle: string;
      steps: {
        number: string;
        icon: string;
        description: string;
        detail: string;
      }[];
    };
  }
  
  declare const services: ServiceData;
  
  export type IServices = typeof services;
  