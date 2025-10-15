import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ChevronRight } from 'lucide-react';
import Section from '../components/common/Section';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

const BlogPage: React.FC = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Logistics in Nigeria: Trends to Watch',
      excerpt: 'Explore the emerging trends in Nigeria\'s logistics industry and how technology is transforming the sector.',
      date: 'May 10, 2025',
      author: 'Oluwaseun Adeyemi',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/4246091/pexels-photo-4246091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'How to Choose the Right Logistics Partner for Your Business',
      excerpt: 'Selecting the right logistics provider is crucial for your business success. Learn the key factors to consider.',
      date: 'May 5, 2025',
      author: 'Ngozi Okonkwo',
      category: 'Business Tips',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      readTime: '7 min read',
    },
    {
      id: '3',
      title: 'Supply Chain Resilience: Lessons from Recent Global Challenges',
      excerpt: 'Learn how businesses can build more resilient supply chains in the face of global disruptions and uncertainties.',
      date: 'April 28, 2025',
      author: 'Ibrahim Garba',
      category: 'Supply Chain',
      image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      readTime: '6 min read',
    },
    {
      id: '4',
      title: 'Sustainable Logistics: Reducing Environmental Impact',
      excerpt: 'Discover how logistics companies are implementing eco-friendly practices to reduce carbon footprint.',
      date: 'April 20, 2025',
      author: 'Chioma Okafor',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      readTime: '4 min read',
    },
    {
      id: '5',
      title: 'Last-Mile Delivery Optimization: Strategies for Success',
      excerpt: 'Explore effective strategies for optimizing the most challenging part of the delivery process.',
      date: 'April 15, 2025',
      author: 'Oluwaseun Adeyemi',
      category: 'Logistics Tips',
      image: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      readTime: '5 min read',
    },
    {
      id: '6',
      title: 'Technology Innovations Transforming Freight Management',
      excerpt: 'From IoT to AI: How new technologies are revolutionizing freight management and transportation.',
      date: 'April 8, 2025',
      author: 'Ibrahim Garba',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      readTime: '8 min read',
    },
  ];

  const categories = [
    'Industry Insights',
    'Business Tips',
    'Supply Chain',
    'Sustainability',
    'Logistics Tips',
    'Technology',
    'Case Studies',
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4068365/pexels-photo-4068365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Logistics Insights</h1>
            <p className="text-xl text-neutral-200">
              Expert insights, industry trends, and practical tips for optimizing your logistics operations.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Link to={`/blog/${featuredPost.id}`} className="group">
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div>
                <span className="inline-block bg-primary-50 text-primary-950 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary-700 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-neutral-600 mb-4">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-neutral-500 text-sm">
                  <User size={16} className="mr-1" />
                  <span>{featuredPost.author}</span>
                  <span className="mx-3">•</span>
                  <Clock size={16} className="mr-1" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-3">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Categories</h3>
              
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-white transition-colors"
                  >
                    <span>{category}</span>
                    <ChevronRight size={16} className="text-neutral-400" />
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-neutral-600 mb-4">
                  Stay updated with the latest insights and industry news.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="form-input"
                  />
                  <button type="button" className="btn btn-primary w-full">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recent Posts */}
      <Section
        title="Latest Articles"
        subtitle="Explore our recent insights and expert advice on logistics and supply chain management."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="card overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-neutral-500 text-sm mb-3">
                  <span className="bg-primary-50 text-primary-950 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-neutral-500 text-sm">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-white">
        <div className="bg-primary-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-neutral-700 mb-6">
              Are you a logistics professional with insights to share? We welcome guest posts from industry experts.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Our Editorial Team
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;