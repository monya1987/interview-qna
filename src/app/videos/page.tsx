import Page from '@/components/pages/videos';
import Pagination from '@/components/organisms/Pagination';

type SerchParams = {
  // eslint-disable-next-line react/require-default-props
  searchParams?: {
    query?: string;
    page?: string;
  };
}
async function VideosPage({ searchParams = {} }: SerchParams) {
  const currentPage = Number(searchParams?.page) || 1;
  const res = await fetch(`${process.env.URL}/api/videos?page=${currentPage}`);
  const { data, totalPages } = await res.json();

  return (
    <>
      <Page data={data} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
export default VideosPage;
