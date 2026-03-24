'use client';

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { AiFillBulb, AiFillGithub } from 'react-icons/ai';

import ZennIconLink from './common/ZennIconLink';

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // form.current が null でないことを確認
    const formElement = form.current;

    if (!formElement) {
      console.error('Form element is not available');
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_Email_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_Email_JS_TEMPLATE_ID!,
        formElement, // formElement を使用
        process.env.NEXT_PUBLIC_Email_JS_PUBLIC_KEY!,
      )
      .then(
        (result) => {
          formElement.reset(); // reset() メソッドを呼び出す
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section
      className="w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10">
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>

        {/* 左下  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p>
              最後までご覧いただきありがとうございました。
              <br />
              このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
              <br />
              もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
            </p>
            {/* sns */}
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5>SNS</h5>
                <div className="flex gap-5">
                  <ZennIconLink />
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ka-3007/" className="text-3xl">
                    <AiFillGithub />
                  </a>
                  {/* <a target="_blank" rel="noopener noreferrer" href="" className="text-3xl">
                    <AiFillTwitterSquare />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* 右下メールフォーム */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="お名前"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="メールアドレス"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="タイトル"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <textarea
                name="message"
                id="message"
                rows={7}
                placeholder="内容"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-darkblue text-white font-medium py-3 px-6 rounded hover:shadow-lg 
                  hover:bg-darkblue/75"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
