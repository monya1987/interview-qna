import { NextRequest } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  const SHOW_PER_PAGE = 3;
  const { searchParams } = new URL(request.url);
  const currentPage = searchParams.get('page') || 1;

  const res = await fetch('http://localhost:3000/api/video.json', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
  });

  const data = await res.json();
  const totalPages = Math.ceil(data.length / SHOW_PER_PAGE);
  const pageData = data.slice((Number(currentPage) * SHOW_PER_PAGE - SHOW_PER_PAGE), (Number(currentPage) * SHOW_PER_PAGE));
  // TODO fucking JSON go to MONGO

  return Response.json({ data: pageData, totalPages });
}
