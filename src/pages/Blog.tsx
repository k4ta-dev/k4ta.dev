import { Link } from 'react-router-dom';

// Mock blog data - replace with actual data source later
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Linux',
    date: '2024-10-15',
    excerpt: 'My journey into the world of Linux and why I fell in love with it.',
  },
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
      <div className="brand-border">
        <h1 className="text-3xl font-bold mb-6 text-accent-blue">[ Blog ]</h1>
        <p className="mb-6 opacity-90">
          Thoughts, tutorials, and experiences from my journey in software development. Also some life stuff... Idk, 
          mostly ment for future myself when i get eventual dementia.
        </p>
      </div>

      <div className="space-y-4">
        {blogPosts.length === 0 ? (
          <div className="brand-border text-center py-8">
            <p className="opacity-75">No posts yet. Check back soon!</p>
          </div>
        ) : (
          blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block brand-border hover:bg-accent-blue hover:text-white transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <span className="text-sm opacity-75 whitespace-nowrap ml-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <p className="opacity-90">{post.excerpt}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
