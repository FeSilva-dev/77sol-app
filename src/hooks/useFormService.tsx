import { createContext, ReactNode, useContext, useState} from 'react';
import { RoutesSerices } from '../services/routesServices';
import { ConsultInformationResult } from '../types/SunModule';

interface FormServiceContextData {
  consultAvailableService: (energyInformation: FormServiceInput) => Promise<void>;
  resultConsultSunModule: ConsultInformationResult[];
};

interface FormServiceInput {
  zipCode: string;
  structureType: string;
  energyValue: number;
};

interface FormServiceProviderProps {
  children: ReactNode;
};

const FormServiceContext = createContext<FormServiceContextData>(
  {} as FormServiceContextData
);

export function FormServiceProvider({children}: FormServiceProviderProps){
  const [resultConsultSunModule, setResultConsultSunModule] = useState([]);

  async function consultAvailableService(energyInformation: FormServiceInput){
    const { energyValue, structureType, zipCode } = energyInformation;

    try{
      const response: any = await RoutesSerices.getAvailableServices(structureType, energyValue, zipCode);
      setResultConsultSunModule(response)
      
    }catch(error){
      alert("Failed to get information");
    }
  }

  return(
    <FormServiceContext.Provider 
      value={{
        consultAvailableService,
        resultConsultSunModule
      }}
    >
      {children}
    </FormServiceContext.Provider>
  )
}

export function useFormService(){
  const context = useContext(FormServiceContext);

  return context;
}