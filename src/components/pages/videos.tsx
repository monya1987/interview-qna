'use client';

import { useEffect, useState } from 'react';
import type { ApiVideos } from '@/global';

async function getVideos() {
  const res = await fetch('http://localhost:3000/api/video.json');
  return res.json();
}
export default function () {
  const [data, setData] = useState<ApiVideos[]>([]);
  useEffect(() => {
    getVideos().then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>Videos Page</h1>
      {data.map(({ id, name }) => (<p key={id}>{name}</p>))}
    </div>
  );
}
