import Breadcrumbs from '@/components/organisms/Breadcrumbs';

// @ts-ignore
export default function Layout({ children }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Breadcrumbs />
      <main>{children}</main>
    </div>
  );
}
