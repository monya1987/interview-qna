import { NextRequest, NextResponse } from 'next/server';
import client from '@/mongodb';
import Videos from './model';
// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  const SHOW_PER_PAGE = 3;
  const { searchParams } = new URL(request.url);
  const currentPage = searchParams.get('page') || 1;
  const slug = searchParams.get('slug') || 9999;
  try {
    const db = client;
    const movies = await db
      .collection('videos')
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
    return Response.json({ data: movies });
  } catch (e) {
    console.error(e);
  }

  console.log('API', slug);
  const res = await fetch('http://localhost:3000/api/video.json', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
  });

  const data = await res.json();
  const totalPages = Math.ceil(data.length / SHOW_PER_PAGE);
  let filteredData = data;
  if (slug) {
    filteredData = filteredData.filter((item: any) => item.library.toLowerCase() === slug);
  }
  const pageData = filteredData.slice((Number(currentPage) * SHOW_PER_PAGE - SHOW_PER_PAGE), (Number(currentPage) * SHOW_PER_PAGE));
  // TODO fucking JSON go to MONGO

  return Response.json({ data: pageData, totalPages });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newItem = new Videos(data);
    const db = client;
    await db
      .collection('videos')
      .insertOne(newItem);
    return Response.json(200);
  } catch (e) {
    console.log(e);
    return Response.json(500);
  }
}
