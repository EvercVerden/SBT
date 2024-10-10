import Image from 'next/image';
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "JTL Fund Reaches $10 Million in Successful Campaigns",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: "JTL Fund, the innovative crowdfunding platform, has achieved a significant milestone by facilitating over $10 million in successful campaign funding..."
  },
  {
    title: "New Partnership Announced with Tech Giant",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    content: "In a move set to revolutionize the crowdfunding industry, JTL Fund has announced a strategic partnership with a leading tech company..."
  },
  {
    title: "JTL Fund Expands to International Markets",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: "Following its domestic success, JTL Fund is proud to announce its expansion into international markets, starting with Europe and Asia..."
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
          About JTL Fund
        </h1>
        
        <section className="mb-24 max-w-3xl mx-auto">
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            JTL Fund is a cutting-edge crowdfunding platform dedicated to bringing innovative ideas to life. Our mission is to connect visionary creators with passionate backers, fostering a community of innovation and creativity.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            Founded in 2023, JTL Fund has quickly become a leader in the crowdfunding space, helping thousands of projects reach their funding goals and turn dreams into reality.
          </p>
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all px-8 py-3 text-lg">
              Our Story
            </Button>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
                <Image src={item.image} alt={item.title} width={400} height={200} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.content}</p>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Be part of the JTL Fund community and help shape the future of crowdfunding. Whether you're a creator with a groundbreaking idea or a backer looking to support innovation, there's a place for you here.
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all px-12 py-4 text-xl">
            Get Started Today
          </Button>
        </section>
      </main>
    </div>
  );
}