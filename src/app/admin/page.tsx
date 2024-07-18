import NextLink from 'next/link';

export default function AdminsPage() {
  return (
    <div>
      <p>
        Add new video
        <NextLink href="admin/videos">link</NextLink>
      </p>
      <p>
        Add new question
        <NextLink href="admin/questions">link</NextLink>
      </p>
    </div>
  );
}
