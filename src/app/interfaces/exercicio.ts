export interface CargaExercicio {
  id: string,
  alunoId: string,
  professorId: string,
  nomeCargaExercicio: string,
  exercicios: Array<Exercicio>
}

export interface Exercicio {
  id: string,
  cargaExerciciosId: string,
  nome: string,
  quantidadeSeries: number,
  quantidadeRepeticoes: number,
  caminhoVideo: string,
  peso: number
}
