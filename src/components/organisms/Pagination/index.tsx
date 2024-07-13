'use client';

import Pagination from 'react-bootstrap/Pagination';
import NextLink from 'next/link';
import './style.scss';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}

export default function Pages({ currentPage, totalPages }: PaginationProps) {
  // const showNext = currentPage !== totalPages;
  // const showPrev = currentPage !== 1;
  const totalPagesArr = Array.from({ length: totalPages }, (_, index) => index + 1);
  if (totalPages <= 1) {
    return null;
  }
  // console.log(currentPage, totalPages);
  return (
    <Pagination>
      {/* {showPrev && <Pagination.Prev />} */}
      {totalPagesArr.map((page) => (
        <Pagination.Item as="span" key={page} active={currentPage === page}>
          <NextLink href={`?page=${page}`}>{page}</NextLink>
        </Pagination.Item>
      ))}
      {/* <Pagination.Next style={{ visibility: 'hidden' }} /> */}
    </Pagination>
  );
}
