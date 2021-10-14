import { useFormService } from '../../../hooks/useFormService';
import { FormConsultSerivce } from '../../components/formConsultService';
import { Header } from '../../components/header';
import { SolarInformation } from '../../components/solarInformation';
import styles from './available.module.scss';

export function AvailableServices(){

  const { resultConsultSunModule, hasConsultResult, isLoadingInfo } = useFormService();

  return(
    <>
      {isLoadingInfo && (
        <div className={styles.overflow}>
          <div className={styles.spiner}></div>
        </div>
      )}
      <Header />
      <section className={styles.home}>
        <section className={styles.homeContent}>
          <div className={styles.formAction}>
            <h1>A sua inteligência em energia solar!</h1>
            <p>
              Oferecemos os melhores equipamentos
              e profissionais de energia solar espalhados por todo Brasil.
            </p>

            <p>Preencha os campos abaixo para fazer uma simulação gratuita</p>
            <FormConsultSerivce />
          </div>

          <div className={styles.resultServices}>
            {hasConsultResult ? (
              <>
                <h1>Aqui está o resultado da sua consulta</h1>
                <SolarInformation resultSolarInfo={resultConsultSunModule}/>
              </>
            ) : (
              <h1>Faça uma simulação para obter as melhores condições</h1>
            )}
          </div>
        </section>
      </section>
    </>
  );
}