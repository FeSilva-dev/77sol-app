import { createContext, ReactNode, useContext, useState} from 'react';
import { RoutesSerices } from '../services/routesServices';
import { ConsultInformationResult } from '../types/SunModule';

interface FormServiceContextData {
  consultAvailableService: (energyInformation: FormServiceInput) => Promise<void>;
  resultConsultSunModule: ConsultInformationResult;
  hasConsultResult: boolean;
  isLoadingInfo: boolean;
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
  const [resultConsultSunModule, setResultConsultSunModule] = useState<any>({});
  const [hasConsultResult, setHasConsultResult] = useState(false);
  const [isLoadingInfo, setIsLoadingInfo] = useState(false);

  async function consultAvailableService(energyInformation: FormServiceInput){
    const { energyValue, structureType, zipCode } = energyInformation;
    setResultConsultSunModule([]);
    setHasConsultResult(false);
    setIsLoadingInfo(true);

    try{
      const response: any = await RoutesSerices.getAvailableServices(structureType, energyValue, zipCode);
      setResultConsultSunModule(response.data);
      setHasConsultResult(true);
      setIsLoadingInfo(false);
      
    }catch(error){
      alert("Failed to get information");
    }
  }

  return(
    <FormServiceContext.Provider 
      value={{
        consultAvailableService,
        resultConsultSunModule,
        hasConsultResult,
        isLoadingInfo
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