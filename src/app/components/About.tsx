import React from 'react';
import { AiFillBulb } from 'react-icons/ai';

function About() {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="about">
      <div className=" max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span className="">
              <AiFillBulb className="w-4 h-4" />
            </span>
            自己紹介
          </p>
        </div>
        {/* メイン文 */}
        <div className="mt-7">
          <div className="mt-6 text-gray-600 text-lg md:text-xl leading-9 space-y-6">
            <p>
              私は19歳でエンジニアとしてのキャリアをスタートし、以来、主にLaravelやNext.jsといったフレームワークを用いたWebアプリケーションの開発・改修に携わってまいりました。
            </p>
            <p>
              バックエンドからフロントエンドまで幅広く対応できるフルスタックエンジニアとして、機能実装やバグ修正といった開発業務はもちろんのこと、プロジェクトの要件整理や仕様設計、開発後のデプロイ作業、さらにはリリースに向けた手順書の作成など、多岐にわたる工程に関わってきた経験があります。
            </p>
            <p>
              また、開発スキルだけでなく、クライアント様との折衝や要望のヒアリング、進捗共有など、対外的なコミュニケーションにも積極的に取り組んでまいりました。チーム内においても、メンバー同士の意見交換や技術的なナレッジ共有を通じて、より良いプロダクトを目指すための協力体制を大切にしています。
            </p>
            <p>
              日々の業務の中では、「ユーザーにとって本当に価値のあるプロダクトとは何か」を常に意識しながら、ただ動くだけのシステムではなく、「使いやすく・わかりやすく・信頼できる」サービスの提供を心がけております。
            </p>
            <p>
              今後も技術力の向上に努めるとともに、周囲とのコミュニケーションを大切にしながら、より多くの人々に喜ばれるプロダクト作りに貢献していきたいと考えております。
            </p>
          </div>
        </div>

        {/* 軽い実績 */}
        <div className="mt-10">
          <div className="w-full">
            <ul className="flex justify-between gap-10 flex-col md:flex-row">
              <li className="w-full shadow-sm">
                <div className="w-full text-center  py-[30px] md:py-[60px] rounded-md bg-whitesmoke ">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">6+</h3>
                  <span>携わったプロジェクト</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center  py-[30px] md:py-[60px] rounded-md bg-whitesmoke ">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">2+</h3>
                  <span>実務経験年数</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
