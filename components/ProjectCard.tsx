import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'

export function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
      <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-indigo-500">{project.category}</span>
          <Heart className="h-5 w-5 text-pink-500 cursor-pointer transition-colors hover:text-red-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <Progress value={project.progress} className="h-2 mb-2" />
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span>{project.progress}% funded</span>
          <span>{project.daysLeft} days left</span>
        </div>
        <Button className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all">
          View Project
        </Button>
      </div>
    </div>
  )
}