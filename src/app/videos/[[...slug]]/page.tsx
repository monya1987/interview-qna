import Page from '@/components/pages/videos';
import Pagination from '@/components/organisms/Pagination';
import { NextPage, Libraries } from '@/global';

async function VideosPage({ params, searchParams = {} }: NextPage) {
  const { slug } = params;
  const hasSlug = slug && Object.keys(Libraries).includes(slug[0]);
  const currentPage = Number(searchParams?.page) || 0;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/videos?page=${currentPage}${hasSlug ? `&slug=${slug}` : ''}`);
    const { data, totalPages } = await res.json();
    return data && (
    <>
      <h1>{slug}</h1>
      <Page data={data} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
    );
  } catch (e) {
    return (<p>Request Error</p>);
  }
}
export default VideosPage;
