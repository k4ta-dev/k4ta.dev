import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Mock blog post data - replace with actual data source later
const blogPostsData: Record<string, { title: string; date: string; content: string }> = {
  '1': {
    title: 'Getting Started with Linux',
    date: '2024-10-15',
    content: `
# Getting Started with Linux

Linux has been an incredible journey for me. What started as curiosity turned into a passion for understanding how operating systems work at a fundamental level.

## Why Linux?

The freedom, customization, and control that Linux offers is unmatched. Whether you're running Arch, Debian, or any other distro, you're in complete control of your system.

## My Setup

I primarily use Arch-based distributions for development work. The rolling release model keeps me on the cutting edge, and the AUR is a treasure trove of software.

## Tips for Beginners

1. Start with a user-friendly distro like Ubuntu or Linux Mint
2. Don't be afraid of the terminal - it's your best friend
3. Read the documentation (RTFM is real advice)
4. Join communities and ask questions

The Linux community is incredibly helpful and welcoming. Don't hesitate to reach out when you're stuck!
    `,
  },
  '2': {
    title: 'Building Scalable APIs',
    date: '2024-09-20',
    content: `
# Building Scalable APIs

Designing APIs that can handle growth is both an art and a science. Here are some lessons I've learned along the way.

## Key Principles

- **Keep it simple**: Start with REST, add complexity only when needed
- **Version your API**: Breaking changes happen, plan for them
- **Document everything**: Your future self will thank you
- **Think about rate limiting**: Protect your resources

## Tech Stack Considerations

I typically reach for Node.js with Express for quick prototypes, but Python with FastAPI is also excellent for more complex systems.

## Database Design

Choose the right tool for the job:
- PostgreSQL for relational data
- MongoDB for flexible schemas
- Redis for caching and sessions

Remember: premature optimization is the root of all evil. Build for today's needs, architect for tomorrow's scale.
    `,
  },
  '3': {
    title: 'Smart Contract Development',
    date: '2024-08-10',
    content: `
# Smart Contract Development

Building smart contracts for production is a unique challenge. The immutability of blockchain means mistakes are costly.

## Security First

Every line of Solidity code needs scrutiny. Common vulnerabilities include:
- Reentrancy attacks
- Integer overflow/underflow
- Access control issues
- Gas optimization problems

## Testing is Critical

I cannot stress this enough: test everything. Use Hardhat or Foundry for comprehensive test suites.

## Gas Optimization

Gas costs matter. Some tips:
- Use appropriate data types
- Minimize storage operations
- Batch operations when possible
- Consider using events for data that doesn't need on-chain storage

## Audits

For production contracts handling real value, professional audits are non-negotiable. Budget for them from the start.

The blockchain space moves fast, but security principles remain constant. Stay paranoid, stay safe.
    `,
  },
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="brand-border text-center py-8">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="button-like inline-block">
            [ Back to Blog ]
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
      <Link to="/blog" className="inline-flex items-center gap-2 button-like">
        <ArrowLeft size={16} />
        [ Back to Blog ]
      </Link>

      <div className="brand-border">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-accent-blue">{post.title}</h1>
          <p className="text-sm opacity-75">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed">{post.content}</div>
        </div>
      </div>
    </div>
  );
}
