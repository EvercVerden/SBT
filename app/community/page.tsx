"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import { Heart, MessageCircle, Share2, MoreHorizontal, Send } from 'lucide-react';

const initialPosts = [
  { id: 1, author: "AnimeGirl92", content: "Just launched my anime cafe project! Check it out and support if you can!", likes: 24, comments: 5, shares: 3, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { id: 2, author: "MangaMaster", content: "Looking for artists to collaborate on a new manga series. DM me if interested!", likes: 18, comments: 7, shares: 2, image: "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { id: 3, author: "CosplayKing", content: "Who's going to AnimeExpo this year? Let's meet up!", likes: 32, comments: 12, shares: 5, image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { id: 4, author: "OtakuDreamer", content: "Just finished watching the latest episode of My Hero Academia. No spoilers, but WOW!", likes: 45, comments: 20, shares: 8 },
  { id: 5, author: "AnimeTech", content: "Working on a new AI that can generate anime-style art. Beta testers needed!", likes: 56, comments: 23, shares: 15, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
];

const sampleComments = [
  { id: 1, author: "User1", content: "Great project! Can't wait to see it come to life." },
  { id: 2, author: "User2", content: "This looks amazing! How can I get involved?" },
  { id: 3, author: "User3", content: "I've been waiting for something like this. Count me in!" },
  { id: 4, author: "User4", content: "The concept art looks fantastic. When's the expected launch date?" },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ content: '', image: '' });
  const [expandedComments, setExpandedComments] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.content.trim()) {
      setPosts([
        { id: posts.length + 1, author: "CurrentUser", content: newPost.content, image: newPost.image, likes: 0, comments: 0, shares: 0 },
        ...posts
      ]);
      setNewPost({ content: '', image: '' });
    }
  };

  const toggleComments = (postId: number) => {
    setExpandedComments(expandedComments === postId ? null : postId);
  };

  const handleCommentSubmit = (postId: number) => {
    if (newComment.trim()) {
      console.log(`New comment for post ${postId}: ${newComment}`);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
          JTL Fund Community
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <form onSubmit={handleSubmit}>
            <Textarea 
              placeholder="What's happening?" 
              className="w-full mb-4 resize-none border-none focus:ring-0 text-xl"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            />
            <Input 
              type="text" 
              placeholder="Image URL (optional)" 
              className="w-full mb-4"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            />
            <div className="flex justify-between items-center">
              <div className="text-blue-500">
                {/* Add image upload icon here */}
              </div>
              <Button type="submit" className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold rounded-full px-6 hover:from-pink-600 hover:to-indigo-600 transition-all">
                Post
              </Button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h3 className="font-bold text-lg">{post.author}</h3>
                    <p className="text-gray-500 text-sm">@{post.author.toLowerCase()}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
              <p className="mb-4 text-gray-800">{post.content}</p>
              {post.image && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image src={post.image} alt="Post image" width={800} height={400} layout="responsive" className="object-cover" />
                </div>
              )}
              <div className="flex justify-between text-gray-500">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-red-500">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center space-x-2 hover:text-blue-500"
                  onClick={() => toggleComments(post.id)}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:text-green-500">
                  <Share2 className="h-5 w-5" />
                  <span>{post.shares}</span>
                </Button>
              </div>
              {expandedComments === post.id && (
                <div className="mt-4 space-y-4 border-t pt-4">
                  {sampleComments.map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      <div>
                        <p className="font-semibold">{comment.author}</p>
                        <p className="text-sm text-gray-600">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2 mt-4">
                    <Input 
                      placeholder="Add a comment..." 
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-grow"
                    />
                    <Button 
                      onClick={() => handleCommentSubmit(post.id)}
                      className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full hover:from-pink-600 hover:to-indigo-600"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}