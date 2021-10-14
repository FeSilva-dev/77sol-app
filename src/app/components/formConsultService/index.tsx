import { useState } from 'react';
import styles from './form.module.scss';

export function FormConsultSerivce(){
  const [structureType, setStructureType] = useState("");
  const [energyValue, setEnergyValue] = useState("");
  const [zipCode, setZipCode] = useState("");
  
  return(
    <h1>Oi</h1>
  );
}