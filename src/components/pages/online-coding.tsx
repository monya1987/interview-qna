'use client';

import CodeBlocks from '@/components/organisms/CodeBlocks';
import { useEffect, useState } from 'react';
import type { ApiCoding } from '@/global';

async function getData() {
  const res = await fetch('http://localhost:3000/api/onlineCoding.json');
  return res.json();
}
function CodeBlockDemo() {
  const [data, setData] = useState<ApiCoding[]>([]);
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);
  return (
    <>
      <h1>Задачи с онлайн собеседований</h1>
      <CodeBlocks data={data} />
    </>
  );
}

export default CodeBlockDemo;
