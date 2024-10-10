import Link from 'next/link'
import { Carousel } from '@/components/Carousel'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { CreateProjectButton } from '@/components/CreateProjectButton'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <main className="container mx-auto px-4 pt-20 pb-16">
        <Carousel />
        <FeaturedProjects />
        <div className="text-center mt-16 mb-20">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
            Ready to Bring Your Ideas to Life?
          </h2>
          <Link href="/projects">
            <Button className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-pink-600 hover:to-indigo-600 transition-all">
              Explore All Projects
            </Button>
          </Link>
        </div>
        <WhyChooseUs />
        <CreateProjectButton />
      </main>
    </div>
  )
}