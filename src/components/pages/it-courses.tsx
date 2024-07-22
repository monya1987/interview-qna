'use client';

// @ts-nocheck
import React from 'react';

const USERS_URL = 'https://example.com/api/users';
const RECORDS_BY_PAGE = 3;
export default function Table() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [totalRecords, setTotalRecords] = React.useState(0);
  const totalPages = Math.ceil(totalRecords / RECORDS_BY_PAGE);

  React.useEffect(() => {
    const getData = async () => {
      await fetch(`${USERS_URL}?page=${currentPage}`).then((res) => res.json()).then((data) => {
        // console.log(data);
        setUsers(data.results);
        setTotalRecords(data.count);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
        setIsError(true);
      });
    };
    getData();
  }, [currentPage]);
  const next = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  const first = () => {
    setCurrentPage(0);
  };
  const last = () => {
    setCurrentPage(totalPages);
  };
  // if (isError) {
  //   return <p>Error</p>;
  // }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="pagination">
        <button disabled={isLoading || currentPage === 0} type="button" className="first-page-btn" onClick={first}>first</button>
        <button disabled={isLoading || currentPage === 0} type="button" className="previous-page-btn" onClick={prev}>previous</button>
        <button disabled={isLoading || currentPage === totalPages} type="button" className="next-page-btn" onClick={next}>next</button>
        <button disabled={isLoading || currentPage === totalPages} type="button" className="last-page-btn" onClick={last}>last</button>
      </section>
    </div>
  );
}
