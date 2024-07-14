'use client';

import Pagination from 'react-bootstrap/Pagination';
import NextLink from 'next/link';
import './style.scss';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}

export default function Pages({ currentPage, totalPages }: PaginationProps) {
  const totalPagesArr = Array.from({ length: totalPages }, (_, index) => index);
  if (totalPages <= 1) {
    return null;
  }
  return (
    <Pagination>
      {totalPagesArr.map((page) => (
        <Pagination.Item as="span" key={page} active={currentPage === page}>
          <NextLink href={`?page=${page}`}>{page + 1}</NextLink>
        </Pagination.Item>
      ))}
    </Pagination>
  );
}
