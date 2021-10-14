import { ApiService } from "./baseApi";

export const RoutesSerices = {
  getAvailableServices: async(structure: string, energyValue: number, zipCode: string) => {
    const responseAvailable = 
      await ApiService.get(`busca-cep?estrutura=${structure}&valor_conta=${energyValue}&cep=${zipCode}`);

    return responseAvailable;
  }
}