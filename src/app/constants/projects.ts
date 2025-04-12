import { Category, CategoryValueType } from '@/app/type/category';

// Projectの型を定義
export type Project = {
  name: string; // プロジェクト名
  image: string; // プロジェクト画像のパス
  category: CategoryValueType[]; // Categoryの値の配列
  skills: string[]; // 使用技術の配列
  projectUrl: string; // プロジェクトURL
  deployed: boolean; // デプロイされたかどうか
};

export const projects: Project[] = [
  {
    name: 'トビタテ!留学Japan',
    image: '/assets/projects/tobitate.png',
    category: [Category.LARAVEL, Category.WORK],
    skills: ['Laravel', 'HTML', 'CSS', 'Javascript', 'AWS', 'WordPress', 'Docker', 'Git', 'MySQL'],
    projectUrl: 'https://tobitate-mext.jasso.go.jp/',
    deployed: true,
  },
  {
    name: '引越しれんらく帳',
    image: '/assets/projects/hikkoshi.png',
    category: [Category.LARAVEL, Category.WORK],
    skills: ['Laravel', 'HTML', 'Bootstrap', 'Javascript', 'Jquery', 'Docker', 'Git', 'MySQL', 'AWS'],
    projectUrl: 'https://www.hikkoshi-line.com/',
    deployed: true,
  },
  {
    name: 'MYヘルスケアクラウド',
    image: '/assets/projects/hcloud.png',
    category: [Category.LARAVEL, Category.WORK],
    skills: ['Laravel', 'Bootstrap', 'Vue.js', 'Docker', 'Git', 'MySQL', 'AWS'],
    projectUrl: 'https://www.hcloud.jp/',
    deployed: true,
  },
  {
    name: 'クロスゼロ for ビジネス',
    image: '/assets/projects/x-zero-business.png',
    category: [Category.NEXTJS, Category.WORK],
    skills: ['Next.js', 'Firebase', 'Tailwind CSS', 'Git'],
    projectUrl: 'https://x-zero.jp/',
    deployed: true,
  },
  {
    name: 'クロスゼロ for ビジネス (スマホアプリ)',
    image: '/assets/projects/x-zero-business-mobile.png',
    category: [Category.REACTNATIVE, Category.WORK],
    skills: ['React Native', 'Firebase', 'Git'],
    projectUrl:
      'https://apps.apple.com/jp/app/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%BC%E3%83%AD-for%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9-%E4%BC%81%E6%A5%AD%E5%90%91%E3%81%91%E9%98%B2%E7%81%BD%E3%82%A2%E3%83%97%E3%83%AA-%E5%AE%89%E5%90%A6%E7%A2%BA%E8%AA%8D/id1602301346',
    deployed: true,
  },
  {
    name: 'クロスゼロ for ファミリー (スマホアプリ)',
    image: '/assets/projects/x-zero-family-mobile.png',
    category: [Category.REACTNATIVE, Category.WORK],
    skills: ['React Native', 'Firebase', 'Git'],
    projectUrl:
      'https://apps.apple.com/jp/app/%E9%98%B2%E7%81%BD%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%BC%E3%83%AD-for-%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC/id1668290965',
    deployed: true,
  },
];
