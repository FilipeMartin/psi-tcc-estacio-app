export interface CargaExercicio {
  id: string,
  nomeCargaExercicio: string,
  status: boolean,
  exercicios: Array<Exercicio>
}

export interface Exercicio {
  id: string,
  nome: string,
  quantidadeSeries: number,
  quantidadeRepeticoes: number,
  videoExemplo: string,
  caminhoVideo: string,
  status: boolean
}
