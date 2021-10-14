import { FormEvent, useState } from 'react';
import { useFormService } from '../../../hooks/useFormService';
import InputMask from "react-input-mask";
import './form.scss';

export function FormConsultSerivce(){
  const { consultAvailableService } = useFormService();

  const [structureType, setStructureType] = useState("Fibrocimento-Madeira");
  const [energyValue, setEnergyValue] = useState(0);
  const [zipCode, setZipCode] = useState("");

  const allStructures: string[] = [
    "Fibrocimento-Madeira", 
    "Fibrocimento-Metalico", 
    "Ceramico", 
    "Metalico", 
    "Laje", 
    "Solo"
  ]

  function showInformation(event: FormEvent){
    event.preventDefault();

    if(energyValue <= 0){
      return alert("Insira um valor maior que 0");
    }

    if(zipCode.replaceAll('_', '').replace('-', '').length < 8){
      return alert("Insira um cep válido");
    }

    const informationForConsult = {
      zipCode,
      structureType: structureType.toLowerCase(),
      energyValue: Number(String(energyValue).replace(",", ""))
    };

    consultAvailableService(informationForConsult);
  }

  function selectStructure(structure: string){
    setStructureType(structure);
  }

  function handleChange({target}: any){
    const { value} = target;

    setZipCode(value);
  }

  return(
    <form className="formService" onSubmit={event => showInformation(event)}>
      <div className="formGroup">
        <label>Valor da conta de luz</label>
        <input 
          type="number" 
          placeholder="R$"
          value={energyValue}
          onChange={event => setEnergyValue(Number(event.target.value))}
        />
        <span>Utilize a vírgula para os centavos</span>
      </div>
      <div className="formGroup">
        <label>Cep da residência ou comercio</label>
        <InputMask 
          mask="99999-999" 
          onChange={handleChange} 
          value={zipCode}
          name="zip"
        />
      </div>
      <div className="structureOptions">
        {allStructures.map((structure: string, index: number) => (
          <div 
            className={`card ${structureType === structure ? 'active' : ''}`}
            key={index}
            onClick={() => selectStructure(structure)}
          >
            {structure}
          </div>
        ))}
      </div>
      <div className="submitButton">
        <button>Simule sua economia</button>
      </div>
    </form>
  );
}