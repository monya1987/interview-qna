import Page from '@/components/pages/videos';
import Pagination from '@/components/organisms/Pagination';

type PageProps = {
  params: {
    slug: string
  }
  // eslint-disable-next-line react/require-default-props
  searchParams?: {
    query?: string;
    page?: string;
  };
}
const AVAILABLE_SLUGS = ['react', 'vue', 'angular'];
async function VideosPage({ params, searchParams = {} }: PageProps) {
  const { slug } = params;
  const hasSlug = slug && AVAILABLE_SLUGS.includes(slug[0]);
  const currentPage = Number(searchParams?.page) || 1;
  const res = await fetch(`${process.env.URL}/api/videos?page=${currentPage}${hasSlug ? `&slug=${slug}` : ''}`);
  const { data, totalPages } = await res.json();

  return (
    <>
      <h1>{slug}</h1>
      <Page data={data} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
export default VideosPage;
