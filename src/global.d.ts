// import { MongoClient } from 'mongodb';

// declare global {
//     const globalThis: any;
//     const _mongoClientPromise: Promise<MongoClient>;
// }

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
