export type ApiVideos = {
    'id': number,
    'name': string,
    'date': string,
    'library': 'React' | 'Vue' | 'Angular',
    'link': string,
    'mocked': boolean,
    'coding': boolean,
    'grade': string
}

export type ApiCoding = {
  id: 1,
  title: string,
  code: string,
};
