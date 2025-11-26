import { Category, CategoryValueType } from '@/app/type/category';

// Projectの型を定義
export type Project = {
  name: string; // プロジェクト名
  image: string; // プロジェクト画像のパス
  category: CategoryValueType[]; // Categoryの値の配列
  skills: string[]; // 使用技術の配列
  githubUrl?: string; // GitHubのリポジトリURL
  projectUrl: string; // プロジェクトURL
  description: string; // 説明文
  detailImages?: string[]; // 詳細ページで使用する画像
  period: string; //　期間
};

export const projects: Project[] = [
  {
    name: 'トビタテ!留学Japan',
    image: '/assets/projects/tobitate.png',
    category: [Category.LARAVEL, Category.WORK],
    skills: ['Laravel', 'HTML', 'CSS', 'Javascript', 'AWS', 'WordPress', 'Docker', 'Git', 'MySQL'],
    projectUrl: 'https://tobitate-mext.jasso.go.jp/',
    description: `留学生向けサイトの開発において、クライアントとのメールでのやり取りを通じて、文言修正やレイアウト調整をはじめ、バックエンドのバグ調査・修正にも対応しました。システムが4つのリポジトリに分かれていたため、各リポジトリの仕様を確認しながら、バグが発生しないよう日々改修作業を進めました。
                  さらに、S3に画像を保存する機能を改修し、従来のマウント保存方式から直接S3に保存できるように変更。これにより、運用の効率化を図ることができました。
                  また、ドメイン移管作業では、リリース手順書の作成をはじめ、テスト項目の洗い出しからテスト実施まで一貫して担当し、システムの移行がスムーズに進行するようサポートしました。`,
    detailImages: ['tobitate-image1.png', 'tobitate-image2.png', 'tobitate-image3.png'],
    period: '1年',
  },
  {
    name: 'MYヘルスケアクラウド',
    image: '/assets/projects/hcloud.png',
    category: [Category.LARAVEL, Category.WORK],
    skills: ['Laravel', 'Bootstrap', 'Vue.js', 'Docker', 'Git', 'MySQL', 'AWS'],
    projectUrl: 'https://www.hcloud.jp/',
    description: `B to B 向けヘルスケアWebサービスの開発において、バグの調査・修正を行い、システムの安定性を確保しました。クライアントとの密なやり取りを通じて、有休情報のダウンロード機能や従業員人数集計バッジ、インボイス機能の改修などを担当。特に、業務効率化に直結する機能改善を実施しました。
                  フロントエンドはVue.jsを使用しており、ユーザーインターフェースの改善にも貢献。クライアントのニーズに応じて、柔軟に対応しながら機能追加や改修を行いました。`,
    period: '1年',
  },
  {
    name: '引越しれんらく帳',
    image: '/assets/projects/hikkoshi.png',
    category: [Category.LARAVEL, Category.WORK],
    skills: ['Laravel', 'HTML', 'Bootstrap', 'Javascript', 'Jquery', 'Docker', 'Git', 'MySQL', 'AWS'],
    projectUrl: 'https://www.hikkoshi-line.com/',
    description: `B to C 向け引っ越しWebサービスの開発において、LaravelとjQueryを使用し、さまざまな改善作業を行いました。主な作業内容としては、バグ調査および修正、バージョンアップ作業（バージョンアップに伴うバグ修正、レイアウト崩れ修正、テスト）を実施し、システムの安定性と使い勝手の向上を図りました。
                  また、Yahoo認証機能の改修や、手続き別提供エリア除外機能の追加を行い、ユーザー体験をよりスムーズにしました。さらに、SFTPファイル送信機能の改修や住所マスタメンテナンスを実施し、データ管理の効率化に貢献しました。
                  その他にも、必要な機能改修を行い、サービスの品質向上をサポートしました。全体的に、クライアントのニーズに対応し、システムの信頼性と利便性を向上させることに注力しました。`,
    detailImages: ['hikkoshi-image1.png', 'hikkoshi-image2.png', 'hikkoshi-image3.png', 'hikkoshi-image4.png'],
    period: '1年',
  },
  {
    name: 'クロスゼロ for ビジネス',
    image: '/assets/projects/x-zero-business.png',
    category: [Category.NEXTJS, Category.WORK],
    skills: ['Next.js', 'Firebase', 'MUI', 'Tailwind CSS', 'T3-Turbo', 'Git'],
    projectUrl: 'https://x-zero.jp/',
    description: `B to B 向け総合防災アプリの開発において、Next.js と Firebase を中心に、一部では T3-Turbo 環境も活用しながら、幅広い業務に携わりました。
                  具体的には、建設オプションの一覧画面および詳細画面の新規追加（管理画面）や、掲示板・メンバー管理機能の改修、避難所マップのフィルター機能の改善など、利用者の利便性と管理性を向上させる開発を行いました。
                  また、申し込み画面の新規作成に加え、マニュアルのHTMLコーディングやテスト実施も担当し、ユーザー向けのドキュメント整備と品質保証にも貢献しました。
                  フロントエンドからバックエンド、運用面まで幅広く関わり、機能性と実用性の両立を意識した開発を行いました。`,
    detailImages: ['x-zero-image1.png', 'x-zero-image2.png', 'x-zero-image3.png'],
    period: '1年',
  },
  {
    name: 'クロスゼロ for ビジネス (スマホアプリ)',
    image: '/assets/projects/x-zero-business-mobile.png',
    category: [Category.REACTNATIVE, Category.WORK],
    skills: ['React Native', 'Firebase', 'Git'],
    projectUrl:
      'https://apps.apple.com/jp/app/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%BC%E3%83%AD-for%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9-%E4%BC%81%E6%A5%AD%E5%90%91%E3%81%91%E9%98%B2%E7%81%BD%E3%82%A2%E3%83%97%E3%83%AA-%E5%AE%89%E5%90%A6%E7%A2%BA%E8%AA%8D/id1602301346',
    description: `B to B向け総合防災アプリの開発において、React Native と Firebase を用いたモバイルアプリの改修・機能追加を担当しました。
                  掲示板やメンバー管理機能の改修をはじめ、掲示板におけるリアクション機能の改善、表示切替機能の追加、災害時専用の「災害モード」機能の開発など、ユーザーの利便性と緊急時の実用性を意識した開発を行いました。
                  また、避難所マップのフィルター機能の改修、さらにアプリ内にレビューを表示する機能の新規追加など、多角的に機能拡充を図りました。
                  ユーザーの使いやすさと、緊急時における確実な情報提供を両立させるため、UI/UXの改善にも意識を向けながら、幅広い機能開発に携わりました。`,
    detailImages: ['x-zero-mobile-image1.png', 'x-zero-mobile-image2.png', 'x-zero-mobile-image3.png'],
    period: '1年',
  },
  // {
  //   name: 'Laravel sns',
  //   image: '/assets/projects/laravel-sns.png',
  //   category: [Category.LARAVEL, Category.PERSONAL],
  //   skills: ['Laravel', 'Bootstrap', 'Vue.js', 'Firebase', 'PostgreSQL', 'Docker', 'Git', 'Laravel Cloud'],
  //   githubUrl: 'https://github.com/ka-3007/laravel_sns/',
  //   projectUrl: 'https://laravel-sns-deploy-main-lck0qf.laravel.cloud/',
  //   description: `LaravelとDockerを使ってSNS風のWebアプリケーションを開発しました。Docker Composeを利用し、Laravel、PostgreSQL、Nginxなどのサービスを独立したコンテナとして構成することで、開発環境と本番環境間での差異を最小限に抑えました。
  //                 機能面では、Laravelの標準的な認証機能を活用し、ユーザー登録、ログイン機能に加えて、ユーザー同士がフォローし合える機能も実装しています。さらに、画像の保存にはFirebase Storageを採用し、ユーザーがアップロードした画像をクラウド上に保存します。Vue.jsを一部導入し、「いいね」機能や画像のプレビュー表示を実現。フロントエンドとバックエンドの連携により、スムーズなユーザー体験を提供しています。 `,
  //   detailImages: [
  //     'laravel-sns-image1.png',
  //     'laravel-sns-image2.png',
  //     'laravel-sns-image3.png',
  //     'laravel-sns-image4.png',
  //     'laravel-sns-image5.png',
  //   ],
  //   period: '1週間',
  // },
  // {
  //   name: '家計簿アプリ',
  //   image: '/assets/projects/household.png',
  //   category: [Category.NEXTJS, Category.PERSONAL],
  //   skills: ['Next.js', 'Firebase', 'MUI', 'Git', 'Vercel'],
  //   githubUrl: 'https://github.com/ka-3007/household-next-app',
  //   projectUrl: 'https://household-next-app.vercel.app/',
  //   description: `このアプリは、家計簿管理を簡単かつ効率的に行えるWebアプリケーションです。Next.jsで実装されており、シングルページアプリケーションとして動作します。Firebase Authenticationを使用してユーザー認証を行い、収支や収入を簡単に登録できます。登録した収支はカレンダーに表示され、月ごとの収入・支出・合計を一目で把握することができます。
  //                 また、基本的なカテゴリに加えて、ユーザー自身でカスタムカテゴリを追加することができ、より詳細に収支を管理することができます。月別の収支サマリーを視覚的に表示し、カテゴリごとのグラフも確認できるため、収支状況を簡単に理解することができます。`,
  //   detailImages: ['household-image1.png', 'household-image2.png', 'household-image3.png', 'household-image4.png'],
  //   period: '2週間',
  // },
  {
    name: 'Portfolio',
    image: '/assets/projects/portfolio.png',
    category: [Category.NEXTJS, Category.PERSONAL],
    skills: ['Next.js', 'Firebase', 'Tailwind CSS', 'Git', 'Vercel'],
    githubUrl: 'https://github.com/ka-3007/Portfolio',
    projectUrl: 'https://portfolio-five-blond-82.vercel.app/',
    description: `このポートフォリオサイトは、Next.jsを使用して構築したシングルページのランディングページです。訪問者がスムーズに情報を得られるよう、構成やデザインにおいて「シンプルさ」と「分かりやすさ」を重視しました。
                  主に自身がこれまでに携わってきたプロジェクトや使用している技術スタックを紹介しており、エンジニアとしてのスキルや経験を視覚的にも分かりやすく伝えられるよう工夫しています。`,
    detailImages: ['portfolio-image1.png', 'portfolio-image2.png', 'portfolio-image3.png', 'portfolio-image4.png'],
    period: '4日',
  },
  {
    name: 'wikiシステム',
    image: '/assets/projects/wiki.png',
    category: [Category.NEXTJS, Category.PERSONAL],
    skills: ['Next.js', 'Firebase', 'Git', 'Vercel', 'Tailwind CSS'],
    projectUrl: 'https://wiki-system-master.vercel.app/',
    description: `このWikiシステムは、Next.jsとFirebaseを基盤として構築したユーザー参加型の情報共有プラットフォームです。
                  ユーザー自身がWikiページを作成・編集できるほか、各ページにはコメント機能も備えており、知識を補完したり意見交換を行ったりと、共同編集型のコミュニケーションが可能です。技術スタックの特性を活かし、リアルタイムで反映される編集や高速なページ遷移など、スムーズな操作体験を提供することを目指しています。
                  なお、本システムは現在も開発を進めている段階のため、一部に不具合が発生する可能性があります。`,
    detailImages: ['wiki-image1.png', 'wiki-image2.png'],
    period: '1年',
  },
  {
    name: 'デスクSNS',
    image: '/assets/projects/desklog.png',
    category: [Category.NEXTJS, Category.LARAVEL, Category.PERSONAL],
    skills: ['Next.js', 'Laravel', 'Git', 'Vercel', 'PostgreSQL', 'AWS', 'Docker', 'CSS'],
    projectUrl: 'https://desklog-seven.vercel.app/',
    description: `このデスクSNSは、Next.js を用いたフロントエンドと Laravel によるバックエンドで構築した、デスク環境の共有に特化したSNSアプリです。
                  ユーザーは自身のデスクまわりを写真と説明文とともに投稿でき、その投稿はタイムラインへ流れ、フォローしているユーザーのデスクをまとめて閲覧できます。投稿にはコメントを残すことができ、気になったデスクやアイテムについて意見を交わしたり、作業環境の工夫を共有したりと、ゆるやかなコミュニケーションが生まれる仕組みになっています。
                  また、検索機能により、特定のアイテムを探したり、好みのワークスペースを見つけやすい構成を意識しています。
                  デスクという個性が表れる空間を共有し、他のユーザーとつながりながら新しい発見を得られる場を目指して開発したサービスです。`,
    period: '1年',
  },
];
