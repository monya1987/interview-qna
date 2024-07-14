'use client';

import { ApiVideos, Libraries } from '@/global';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Link from '@/components/molecules/Link';

type PageProps = {
  data: ApiVideos[];
}

export default function VideosPage({ data }: PageProps) {
  // const ddd = Object.groupBy(data, ({ library }) => library);
  // console.log('Object.values(Libraries)', Object.values(Libraries));
  return (
    <div>
      <h1>Videos Page</h1>
      <p>
        Filter by:
        <Link href="/videos">All</Link>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {Object.values(Libraries).map((name, index) => (<Link key={index} href={`/videos/${name}`}>{name}</Link>))}
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
            _id, name, grade, isMocked, hasCoding, library, date,
          }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{grade}</td>
              <td>{library}</td>
              <td>
                <Badge bg={isMocked ? 'success' : 'info'}>
                  {isMocked ? 'Yes' : 'No'}
                </Badge>
              </td>
              <td>
                <Badge bg={hasCoding ? 'success' : 'info'}>
                  {hasCoding ? 'Yes' : 'No'}
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
