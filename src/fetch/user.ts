interface User {
    name: string
    age: string
}
// https://github.com/sohamkamani/typescript-examples/tree/main/rest-http-api-call

// Example GET
async function getUsers(): Promise<User[]> {
  const headers: Headers = new Headers();
  const request: RequestInfo = new Request('./users.json', {
    method: 'GET',
    headers,
  });
  return fetch(request)
    .then((res) => res.json())
    .then((res) => res as User[]);
}

// Example POST
async function createUser(user: User): Promise<void> {
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

export { getUsers, createUser };
