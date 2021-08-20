import { useState } from "react";
import { getStoreList, getTransactions } from "../../services/api";
import dayjs from "dayjs";
import {
  Container,
  SearchInput,
  TransactionsTable,
  SearchIcon,
  SearchButton,
  TableWrapper,
} from "./styles";
import { formatValue } from "../../utils/formatValue";
import { formatToCPF } from "../../utils/formatToCPF";

let transactionListInputTimer = null;

interface Store {
  id?: string;
  name?: string;
  owner?: string;
}

interface Transaction {
  id: string;
  type: string;
  date: Date;
  value: number;
  cpf: string;
  cardNumber: string;
  hour: string;
}

export function TransactionList() {
  const [storeList, setStoreList] = useState<Store[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedStore, setSelectedStore] = useState<Store>({});

  const fetchStore = async (value: string) => {
    const isAlreadySearched =
      storeList.length > 0 &&
      storeList.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      );

    if (isAlreadySearched.length > 0) {
      return;
    }

    const { status, data } = await getStoreList(value);

    if (status !== 200) {
      return;
    }

    if (!data.length) {
      alert("Nenhuma transação encontrada");
    }

    setStoreList(Array.from(new Set([...storeList, ...data])));
  };

  const handleSearchInput = (event) => {
    const isSelectedFromDataList = storeList.find(
      (store) => store.name === event.target.value
    );

    if (!event.target.value) {
      return setSearchText(event.target.value);
    }

    if (isSelectedFromDataList) {
      setSearchText(event.target.value);
      return setSelectedStore(isSelectedFromDataList);
    }

    clearTimeout(transactionListInputTimer);

    setSelectedStore({});
    setSearchText(event.target.value);

    transactionListInputTimer = setTimeout(
      () => fetchStore(event.target.value),
      250
    );
  };

  const handleSearchTransactions = async (event) => {
    event.preventDefault();

    if (!selectedStore.id) {
      return;
    }

    const { status, data } = await getTransactions(selectedStore.id);

    if (status !== 200) {
      alert("Erro ao pesquisar");
    }

    setTransactions(data);
  };

  return (
    <Container>
      <form onSubmit={handleSearchTransactions}>
        <SearchIcon />
        <SearchInput
          list="store-list"
          placeholder="Digite o nome de uma loja"
          value={searchText}
          onChange={handleSearchInput}
        />
        <datalist id="store-list">
          {storeList.map((store) => (
            <option key={store.id} value={store.name} />
          ))}
        </datalist>
        {Object.values(selectedStore).length > 0 && (
          <SearchButton>Pesquisar</SearchButton>
        )}
      </form>
      {transactions.length > 0 && (
        <TableWrapper>
          <TransactionsTable>
            <thead>
              <tr>
                <th>Tipo da transação</th>
                <th>Data</th>
                <th>Valor</th>
                <th>CPF</th>
                <th>Cartão utilizado</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>{dayjs(transaction.date).format("DD/MM/YYYY")}</td>
                  <td>R$ {formatValue(transaction.value)}</td>
                  <td>{formatToCPF(transaction.cpf)}</td>
                  <td>{transaction.cardNumber}</td>
                  <td>{transaction.hour}</td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        </TableWrapper>
      )}
    </Container>
  );
}
