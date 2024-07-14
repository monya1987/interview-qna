export const Libraries = {
  react: 'react',
  vue: 'vue',
  angular: 'angular',
  vanilla: 'vanilla',
} as const;

export type NextPage = {
    params: {
        slug: string
    }
    // eslint-disable-next-line react/require-default-props
    searchParams?: {
        query?: string;
        page?: string;
    };
}

export type ApiVideos = {
    '_id': string,
    'name': string,
    'date': string,
    'library': typeof Libraries[keyof typeof Libraries],
    'ylink': string,
    'isMocked': boolean,
    'hasCoding': boolean,
    'grade': string
}

export type ApiCoding = {
  id: 1,
  title: string,
  code: string,
};
