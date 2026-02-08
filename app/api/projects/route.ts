import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Project from '@/server/models/Project'
import { MOCK_PROJECTS } from '@/lib/mock-data'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Attempt DB connection
    try {
      if (!process.env.MONGODB_URI) throw new Error("No Mongo URI");
      await connectDB()
      const projects = await Project.find({}).sort({ priority: -1, createdAt: -1 })
      return NextResponse.json(projects)
    } catch (dbError) {
      console.warn("Database connection failed or missing URI, serving MOCK DATA:", dbError);
      return NextResponse.json(MOCK_PROJECTS)
    }
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Final fallback to mock data even if something else broke
    return NextResponse.json(MOCK_PROJECTS)
  }
}
