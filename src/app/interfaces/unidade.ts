export interface Unidade {
  id: string,
  nome: string,
  endereco: string,
  numero: string,
  complemento: string,
  cep: string,
  localizacao: {
    type: string,
    coordinates: Array<number>
  },
  status: boolean
}
