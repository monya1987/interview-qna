'use client';

import type { ApiVideos } from '@/global';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Link from '@/components/molecules/Link';

type PageProps = {
  data: ApiVideos[];
}
export default function VideosPage({ data }: PageProps) {
  // const ddd = Object.groupBy(data, ({ library }) => library);
  // console.log(data);
  return (
    <div>
      <h1>Videos Page</h1>
      <p>
        Filter by:
        <Link href="/videos">All</Link>
        {' '}
        \
        {' '}
        <Link href="/videos/react">React</Link>
        {' '}
        \
        {' '}
        <Link href="/videos/angular">Angulart</Link>
        {' '}
        \
        {' '}
        <Link href="/videos/vue">Vue</Link>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Library</th>
            <th>Is Mocked</th>
            <th>Online coding</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({
            id, name, grade, mocked, coding, library, date,
          }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{grade}</td>
              <td>{library}</td>
              <td>
                <Badge bg={mocked ? 'success' : 'light'}>
                  {mocked ? 'Yes' : 'No'}
                </Badge>
              </td>
              <td>
                <Badge bg={coding ? 'success' : 'light'}>
                  {coding ? 'Yes' : 'No'}
                </Badge>
              </td>
              <td>{date}</td>
            </tr>
          ))}

        </tbody>
      </Table>

    </div>
  );
}
