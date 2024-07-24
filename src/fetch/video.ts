interface User {
    name: string
    age: string
}

// eslint-disable-next-line default-param-last
async function getVideos(currentPage = 0, slug: ''): Promise<User[]> {
  const headers: Headers = new Headers();
  const request: RequestInfo = new Request(`${process.env.NEXT_PUBLIC_URL}/api/videos?page=${currentPage}${slug ? `&slug=${slug}` : ''}`, {
    method: 'GET',
    headers,
  });
  return fetch(request)
    .then((res) => res.json())
    .then((res) => res as User[]);
}

// Example POST
async function createVideo(user: User): Promise<void> {
  const headers: Headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');

  const request: RequestInfo = new Request('/users', {
    method: 'POST',
    headers,
    // Convert the user object to JSON and pass it as the body
    body: JSON.stringify(user),
  });

  return fetch(request)
    .then((res) => {
      console.log('got response:', res);
    });
}

export { getVideos, createVideo };
