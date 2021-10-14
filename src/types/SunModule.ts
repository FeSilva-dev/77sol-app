export interface ConsultInformationResult {
  co2: number;
  economia: number;
  integradores_maximo: number;
  integradores_minimo: number;
  integradores_regiao: number;
  irradiancia: number;
  irradiancia_maxima: number;
  irradiancia_minima: number;
  potencial: string;
  valor_instalacao: number;
  parcelamento: Installments[];
  kit: Kit[];
};

export interface Installments {
  parcelas: number;
  taxa_maxima: number;
  taxa_minina: number;
  valor_maximo: number;
  valor_minimo: number;
};

export interface Kit {
  custo: number;
  datasheet: string;
  descricao: string;
  id: number;
  potenciaModulo: string;
  qtde: number;
  titulo: string;
  url: string;
  valor: number;
  potenciaInversor: string;
};