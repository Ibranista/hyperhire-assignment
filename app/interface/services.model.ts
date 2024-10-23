export interface ServiceStep {
    number: string;
    description?: string;
    detail?: string;
  }
  
  export interface ServiceData {
    header: string;
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
  
  export type IServices = ServiceData;
  