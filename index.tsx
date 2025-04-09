import Link from "next/link";

const posts = [
  {
    title: "Top 5 Platforms to Make Money with 60-Second Trading",
    slug: "top-5-platforms",
    category: "Comparison",
  },
  {
    title: "How I Earned My First $100 with 60s Strategy",
    slug: "first-100",
    category: "Case Study",
  },
  {
    title: "Top No-KYC Platforms to Trade in 2025",
    slug: "no-kyc",
    category: "Privacy",
  },
  {
    title: "Best Demo Accounts to Try for Free",
    slug: "demo-accounts",
    category: "For Beginners",
  },
  {
    title: "How to Make $20/day with 60s Trading",
    slug: "20-daily",
    category: "Strategy",
  },
  {
    title: "Binomo vs Quotex – Which is Better for Small Capital?",
    slug: "quotex-vs-binomo",
    category: "Comparison",
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Quotex Blog – Learn & Grow</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border rounded-xl p-6 hover:shadow-md transition bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500">Category: {post.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}