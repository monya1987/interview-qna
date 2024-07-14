import { NextRequest } from 'next/server';
import client from '@/mongodb';
import type { ApiVideos } from '@/global';
import Videos from './model';

type Slug = Pick<Partial<ApiVideos>, 'library'>;

export async function GET(req: NextRequest) {
  const SHOW_PER_PAGE = 3;
  const { searchParams } = new URL(req.url);
  const currentPage = searchParams.get('page') || 0;
  const slug = searchParams.get('slug') || '';
  const q:Slug = {};
  if (slug) {
    // @ts-ignore
    q.library = slug;
  }
  console.log('slug', slug);
  try {
    const db = client;
    const records = await db
      .collection('videos')
      .find(q)
      .skip(Number(currentPage) * SHOW_PER_PAGE)
      .limit(SHOW_PER_PAGE)
      .toArray();

    const totalRecords = await db
      .collection('videos')
      .countDocuments(q);

    return Response.json({ data: records, totalPages: Math.ceil(totalRecords / SHOW_PER_PAGE) });
  } catch (e) {
    console.error(e);
    return Response.json(500);
  }
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
