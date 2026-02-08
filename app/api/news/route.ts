import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import News from '@/server/models/News'
import { MOCK_NEWS } from '@/lib/mock-data'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    try {
      if (!process.env.MONGODB_URI) throw new Error("No Mongo URI");
      await connectDB()
      const news = await News.find({}).sort({ createdAt: -1 })
      return NextResponse.json(news)
    } catch (dbError) {
      console.warn("Database connection failed or missing URI, serving MOCK DATA:", dbError);
      return NextResponse.json(MOCK_NEWS)
    }
  } catch (error) {
    return NextResponse.json(MOCK_NEWS)
  }
}
