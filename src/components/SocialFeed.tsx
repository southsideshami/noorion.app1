"use client";
import React from 'react';
import { Heart, MessageCircle, Share, Clock } from 'lucide-react';

interface SocialFeedProps {
  isLoggedIn: boolean;
}

const SocialFeed: React.FC<SocialFeedProps> = ({ isLoggedIn }) => {
  const mockPosts = [
    {
      id: 1,
      author: "Aisha Ahmed",
      avatar: "AA",
      content: "Just finished reading Surah Al-Kahf. The lessons about patience and faith are truly inspiring. May Allah guide us all to the straight path.",
      likes: 24,
      comments: 8,
      timeAgo: "2 hours ago",
      category: "Quran Reflection"
    },
    {
      id: 2,
      author: "Omar Hassan",
      avatar: "OH",
      content: "Attended an amazing lecture on the importance of family in Islam today. The speaker emphasized how our homes should be places of peace and worship.",
      likes: 31,
      comments: 12,
      timeAgo: "4 hours ago",
      category: "Islamic Knowledge"
    },
    {
      id: 3,
      author: "Fatima Zahra",
      avatar: "FZ",
      content: "Beautiful morning prayer at the masjid. The sense of community and unity during salah is something I cherish deeply.",
      likes: 18,
      comments: 5,
      timeAgo: "6 hours ago",
      category: "Community"
    }
  ];

  return (
    <div className="space-y-6">
      {!isLoggedIn && (
        <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 text-center">
          <p className="text-ivory mb-3">
            Join the community to see more posts and connect with fellow Muslims
          </p>
          <button className="bg-gold text-dark px-6 py-2 rounded-full font-medium hover:bg-gold/80 transition-colors">
            Sign Up
          </button>
        </div>
      )}
      
      {mockPosts.map((post) => (
        <div key={post.id} className="bg-dark/50 rounded-xl p-6 border border-ivory/10">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-olive/20 rounded-full flex items-center justify-center">
                <span className="text-olive font-semibold">{post.avatar}</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-gold">{post.author}</span>
                <span className="text-xs text-ivory/60 bg-olive/10 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <p className="text-ivory mb-4 leading-relaxed">{post.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-1 text-ivory/70 hover:text-gold transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-ivory/70 hover:text-gold transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-ivory/70 hover:text-gold transition-colors">
                    <Share className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-1 text-ivory/50">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{post.timeAgo}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialFeed; 