import { get } from '@vercel/edge-config';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // メンテナンスモードの状態を取得
  const maintenanceMode = await get('maintenanceMode');

  // メンテナンスモードが有効なら、404ページにリダイレクト
  if (maintenanceMode) {
    return NextResponse.redirect(new URL('/404', request.url));
  }

  // メンテナンスモードでない場合は次の処理に進む
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.css$).*)',
};
