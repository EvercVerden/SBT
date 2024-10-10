import Link from 'next/link'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'

const projects = [
  { id: 1, title: "Anime-themed Cafe", category: "Food & Drink", progress: 75, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 15 },
  { id: 2, title: "AI Anime Translator", category: "Technology", progress: 60, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 20 },
  { id: 3, title: "Anime Drawing Tool", category: "Design", progress: 40, image: "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 30 },
  { id: 4, title: "Anime Character Jewelry", category: "Fashion", progress: 85, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 10 },
  { id: 5, title: "Manga Publishing Platform", category: "Publishing", progress: 30, image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 45 },
  { id: 6, title: "Anime Music Festival", category: "Events", progress: 55, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 25 },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <main className="container mx-auto px-4">
        {/* Add top padding to create space between navbar and content */}
        <div className="pt-24">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
            Explore All Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}