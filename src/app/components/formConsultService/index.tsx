import { useState } from 'react';
import { useFormService } from '../../../hooks/useFormService';
import styles from './form.module.scss';

export function FormConsultSerivce(){
  const { consultAvailableService } = useFormService();

  const [structureType, setStructureType] = useState("");
  const [energyValue, setEnergyValue] = useState("");
  const [zipCode, setZipCode] = useState("");

  function showInformation(){

    const obj = {
      zipCode: "asdsad",
      structureType: "asdas",
      energyValue: "asdas111"
    }

    consultAvailableService(obj);

  }

  return(
    <button onClick={showInformation}>Clique</button>
  );
}