import { get } from '@vercel/edge-config';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // メンテナンスモードの状態を取得
  const maintenanceMode = await get('maintenanceMode');

  // メンテナンスモードが有効なら、404ページにリダイレクト
  if (maintenanceMode) {
    request.nextUrl.pathname = '/404';
    return NextResponse.rewrite(request.nextUrl);
  }

  // メンテナンスモードでない場合は次の処理に進む
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.css$).*)',
};
