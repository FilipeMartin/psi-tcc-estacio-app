import { Professor } from './professor';
export interface Avaliacao {
  id: string,
  alunoId: string,
  professorId: string,
  professor: Professor,
  altura: number,
  peso: number,
  imc: number,
  ombro: number,
  bracoDireito: number,
  bracoEsquerdo: number,
  anteBracoDireito: number,
  anteBracoEsquerdo: number,
  peitoral: number,
  cintura: number,
  abdomem: number,
  quadril: number,
  pernaDireita: number,
  pernaEsquerda: number,
  panturrilhaDireita: number,
  panturrilhaEsquerda: number,
  dataAvaliacao: string
}
