import { NextResponse } from 'next/server';

export async function GET() {
  // ส่ง environment variables ที่ต้องการให้ client-side ใช้งาน
  const config = {
    apiEndpoint: process.env.API_ENDPOINT,
  };

  return NextResponse.json(config);
}
