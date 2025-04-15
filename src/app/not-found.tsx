import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-green-400 px-4">
      <div className="text-left font-mono whitespace-nowrap">
        <h1 className="text-5xl font-bold mb-4">404: Not Found</h1>
        <p className="text-lg mb-6">{'//'} お探しのページは存在しないようです。</p>
        <p className="text-sm text-gray-400 mb-6">{'//'} このリンクが間違っていないか確認してください。</p>
        <Link
          href="/"
          className="inline-block mt-2 px-5 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition duration-300 rounded"
        >
          $ ホームに戻る
        </Link>
      </div>
    </div>
  );
}
