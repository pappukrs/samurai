// src/components/CommunityBlog.tsx
'use client'
import { motion } from "framer-motion";

const blogPosts = [
  { id: 1, title: "How to Make the Most of Your Co-Living Experience", excerpt: "Co-living spaces are more than just a place to stay. Here are some tips to enhance your stay and meet new people." },
  { id: 2, title: "5 Benefits of Living in a Shared Space", excerpt: "Shared spaces provide a sense of community, comfort, and convenience. Here's why they are the future of housing." },
  { id: 3, title: "The Importance of Socializing in Co-Living", excerpt: "Building connections is vital in a co-living environment. This blog explores the social dynamics of co-living spaces." },
];

const CommunityBlog = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Community Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-blue-600 mt-4 block hover:underline">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityBlog;
