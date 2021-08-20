import styled from "styled-components";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { fadeAnimation, moveAnimation } from "../../styles/animations";

export const Container = styled.div`
  max-height: 80vh;
  min-width: 90%;
  /* height: 50%; */
  padding: 30px;
  border-radius: 4px;
  box-shadow: 2px 2px 6px #dbdbdb;

  background: #fff;

  animation: ${fadeAnimation} linear 0.2s, ${moveAnimation} 0.2s backwards;

  > form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 15px;
  border: 1px solid #dde4ff;
  border-radius: 4px;
  margin-top: 5px;
  padding-left: 45px;
  padding-right: 10px;
  position: relative;
  left: -10px;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline-color: #a0afeb;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    height: 50px;

    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #5666a5;
      color: white;
    }

    & + tr:hover {
      background-color: #ddd;
    }

    &:nth-child(even) {
      background: #f2f2f2;
    }
  }
`;

export const TableWrapper = styled.div`
  overflow-y: auto;
  height: 55vh;
  margin-top: 30px;

  thead th {
    position: sticky;
    top: 0;
  }
`;

export const SearchIcon = styled(SearchAlt)`
  width: 20px;
  height: 20px;

  color: lightgray;

  position: relative;
  right: -25px;
  bottom: -3px;
  z-index: 3;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 4px;
  color: white;
  background: #798ad1;
  cursor: pointer;

  &:hover {
    background: #5666a5;
  }
`;
