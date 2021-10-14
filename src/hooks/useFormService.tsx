import { createContext, ReactNode, useContext} from 'react';

interface FormServiceContextData {
  consultAvailableService: (energyInformation: FormServiceInput) => Promise<void>;
}

interface FormServiceInput {
  zipCode: string;
  structureType: string;
  energyValue: string;
}

interface FormServiceProviderProps {
  children: ReactNode;
}

const FormServiceContext = createContext<FormServiceContextData>(
  {} as FormServiceContextData
);

export function FormServiceProvider({children}: FormServiceProviderProps){

  async function consultAvailableService(energyInformation: FormServiceInput){
    console.log(energyInformation);
  }

  return(
    <FormServiceContext.Provider 
      value={{
        consultAvailableService
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