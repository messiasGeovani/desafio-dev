export interface ITransaction {
  type: string;
  date: string;
  value: number;
  cpf: string;
  cardNumber: string;
  hour: string;
  store: {
    owner: string;
    name: string;
  };
}
