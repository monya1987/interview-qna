export const Libraries = {
  react: 'react',
  vue: 'vue',
  angular: 'angular',
  vanilla: 'vanilla',
} as const;

const QuestionTypesFE = {
  general: 'general',
  browser: 'browser',
  ts: 'ts',
  hr: 'hr',
  css: 'css',
  html: 'html',
  webpack: 'webpack',
} as const;

export const QuestionTypes = { ...Libraries, ...QuestionTypesFE } as const;

export type NextPage = {
    params: {
        slug: string
    }
    searchParams: {
        query?: string;
        page?: string;
    };
}

export type ApiQuestions = {
    '_id': string,
    'question': string,
    'answer': string,
    'labels': typeof QuestionTypes[keyof typeof QuestionTypes][],
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
