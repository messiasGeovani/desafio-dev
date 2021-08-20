import { ITransaction } from "../interfaces/ITransaction";
import dayjs from "../plugins/dayjs";

function getTransactionType(code: number) {
  switch (code) {
    case 1:
      return "Débito";

    case 2:
      return "Boleto";

    case 3:
      return "Financiamento";

    case 4:
      return "Crédito";

    case 5:
      return "Recebimento Empréstimo";

    case 6:
      return "Vendas";

    case 7:
      return "Recebimento TED";

    case 8:
      return "Recebimento DOC";

    case 9:
      return "Aluguel";

    default:
      return "Desconhecido";
  }
}

function getTransactionDate(dateInfo: string) {
  const date = dayjs(dateInfo);

  if (!date.isValid()) {
    return "Desconhecido";
  }

  return date.format("YYYY-MM-DD");
}

function getTransactionValue(value: number) {
  return value / 100;
}

function getTransactionHour(dateInfo: string) {
  const date = dayjs.utc(dateInfo);

  if (!date.isValid()) {
    return "Desconhecido";
  }

  return date.format("HH:mm");
}

export function parseTransactionData(data: string): ITransaction[] {
  const transactions = data
    .split("\n")
    .filter((transactionString) => transactionString.length === 80);

  if (!transactions.length) {
    return [];
  }

  const parsedData = transactions.map((transaction) => ({
    type: getTransactionType(Number(transaction.substring(0, 1))),
    date: getTransactionDate(transaction.substring(1, 9)),
    value: getTransactionValue(Number(transaction.substring(9, 19))),
    cpf: transaction.substring(19, 30),
    cardNumber: transaction.substring(30, 42),
    hour: getTransactionHour(
      transaction.substring(1, 9) + transaction.substring(42, 48)
    ),
    store: {
      owner: transaction.substring(48, 62).trim(),
      name: transaction.substring(62, 81).trim(),
    },
  }));

  return parsedData;
}
