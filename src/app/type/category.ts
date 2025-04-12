export const Category = {
  ALL: '全て',
  WORK: '実務開発',
  PERSONAL: '個人開発',
  NEXTJS: 'Nextjs',
  REACTNATIVE: 'React Native',
  LARAVEL: 'Laravel',
} as const;
export type CategoryValueType = (typeof Category)[keyof typeof Category];
