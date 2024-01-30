import styled from "styled-components";
import { usePagination } from "./PaginationContext";
import { useEffect, useState } from "react";

const StyledPagination = styled.div`
  background-color: #f9f9f9;
  margin-top: 32px;
  height: 40px;
  padding-top: 16px;
  text-align: center;
`;

const StyledButton = styled.button<{ $on: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 2px;
  box-sizing: border-box;
  line-height: 24px;
  font-family: arial, sans-serif;
  border: solid 1px ${(props) => (props.$on ? "#e5e5e5" : "transparent")};
  background-color: ${(props) => (props.$on ? "#fff" : "transparent")};
  color: ${(props) => (props.$on ? "#03c75a" : "#333")};

  &:hover {
    text-decoration: underline;
  }
`;

export const Pagination = ({ boardId }: { boardId: number }) => {
  const { currentPage, articleLength, setCurrentPage, itemsPerPage } =
    usePagination(boardId);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const handlePageNumbers = () => {
    const newPageNumbers = [];
    for (let i = 1; i <= Math.ceil(articleLength! / itemsPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
    console.log(pageNumbers);
  };

  useEffect(() => {
    const newPageNumbers = [];
    for (let i = 1; i <= Math.ceil(articleLength! / itemsPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [currentPage, articleLength, itemsPerPage]);

  return (
    <StyledPagination>
      {pageNumbers.map((number, index) => (
        <StyledButton tabIndex={index}
          className="page"
          $on={number === currentPage}
          onClick={() => {
            setCurrentPage(number);
            handlePageNumbers();
          }}
        >
          {number}
        </StyledButton>
      ))}
    </StyledPagination>
  );
};
