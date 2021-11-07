import { Unidade } from "./unidade";

export interface Professor {
  id: string,
  nomeCompleto: string,
  cpf: string,
  dataNascimento: string,
  email: string,
  telefoneCelular: string,
  login: string,
  unidades: Array<Unidade>
}
