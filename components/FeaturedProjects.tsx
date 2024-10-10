import { ProjectCard } from '@/components/ProjectCard'
import { Button } from "@/components/ui/button"

const featuredProjects = [
  { id: 1, title: "Anime-themed Cafe", category: "Food & Drink", progress: 75, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 15 },
  { id: 2, title: "AI Anime Translator", category: "Technology", progress: 60, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 20 },
  { id: 3, title: "Anime Drawing Tool", category: "Design", progress: 40, image: "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 30 },
  { id: 4, title: "Anime Character Jewelry", category: "Fashion", progress: 85, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", daysLeft: 10 },
]

export function FeaturedProjects() {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}