import { ConsultInformationResult, Installments, Kit } from '../../../types/SunModule';
import { formatCurrency } from '../../../utils/formatCurrency';
import styles from './solar.module.scss';

interface solarInformationProps{
  resultSolarInfo: ConsultInformationResult;
}

export function SolarInformation({resultSolarInfo}: solarInformationProps){
  return(
    <section className={styles.solarContent}>
      <div className={styles.solarTitle}>
        <div className={styles.instalationValue}>
          <h2>Valor da instalação: {formatCurrency(resultSolarInfo.valor_instalacao)}</h2>
        </div>
        <h2>Logo de cara você tera uma economia de: {formatCurrency(resultSolarInfo.economia)}</h2>
        <h3>Potencial Solar: <span>{resultSolarInfo.potencial}</span> </h3>
      </div>

      <div className={styles.solarIntegrators}>
        <h2>Quantidade de integradores</h2>
        <div className={styles.quantityIntegrators}>
          <p>Minimo: {resultSolarInfo.integradores_minimo}</p>
          <p>Máximo: {resultSolarInfo.integradores_maximo}</p>
        </div>
      </div>

      <div className={styles.solarKits}>
        <h2>Dá uma olhada nos nossos kits</h2>
        <div className={styles.solarKit}>
          {resultSolarInfo.kit.map((kit: Kit) => (
            <div className={styles.kit} key={kit.id}>
              <h3>{kit.titulo}</h3>
              <img src={kit.url} alt={kit.titulo} />
              <p>Potencia do módulo: {kit.potenciaModulo || kit.potenciaInversor}</p>
              <p>Quantidade: {kit.qtde}</p>
              <p>Valor: {formatCurrency(kit.valor)}</p>
              <a href={kit.datasheet} target="_blank" rel="noreferrer">Mais detalhes</a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.solarInstallment}>
        <h2>Parcelas</h2>
        <div className={styles.installments}>
          {resultSolarInfo.parcelamento.map((insalt: Installments, index: number) => (
            <div className={styles.installment} key={index}>
              <p>Numero de parcelas: {insalt.parcelas}</p>
              <p>Taxa minima: {formatCurrency(insalt.taxa_minina)}</p>
              <p>Taxa máxima: {formatCurrency(insalt.taxa_maxima)}</p>
              <p>Valor minimo: {formatCurrency(insalt.valor_minimo)}</p>
              <p>Valor máximo: {formatCurrency(insalt.valor_maximo)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}