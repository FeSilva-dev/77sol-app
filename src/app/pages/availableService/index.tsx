import { FormConsultSerivce } from '../../components/formConsultService';
import { Header } from '../../components/header';
import styles from './available.module.scss';

export function AvailableServices(){

  return(
    <>
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
            {/* <FormConsultSerivce /> */}
          </div>

          <div className={styles.resultServices}>
            <h1>Aqui está o resultado da sua consulta</h1>
          </div>
        </section>
      </section>
    </>
  );
}