import { ApiService } from "./baseApi";

export const routesSerices = {
  getAvailableServices: async(structure: string, energyValue: string, zipCode: string) => {
    const responseAvailable = 
      await ApiService.get(`busca-cep?estrutura=${structure}&valor_conta=${energyValue}&cep=${zipCode}`);

    return responseAvailable.data;
  }
}