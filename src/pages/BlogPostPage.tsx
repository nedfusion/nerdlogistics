import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, Tag, Share2, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import Section from '../components/common/Section';

// Sample blog post data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Logistics in Nigeria: Trends to Watch',
    date: 'May 10, 2025',
    author: 'Oluwaseun Adeyemi',
    authorRole: 'Chief Executive Officer',
    authorImage: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=120',
    category: 'Industry Insights',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4246091/pexels-photo-4246091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    content: `
      <p class="mb-4">The logistics industry in Nigeria is undergoing a significant transformation, driven by technological advancements, changing consumer expectations, and evolving business models. As one of the fastest-growing economies in Africa, Nigeria's logistics sector is poised for tremendous growth in the coming years.</p>
      
      <h2 class="text-2xl font-bold my-6">Digital Transformation</h2>
      
      <p class="mb-4">Digital technologies are revolutionizing the logistics landscape in Nigeria. From real-time tracking systems to automated warehouse operations, technology is enhancing efficiency and transparency across the supply chain.</p>
      
      <p class="mb-4">Key technological trends include:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Advanced tracking systems that provide real-time visibility</li>
        <li>AI-powered route optimization for fuel efficiency and faster deliveries</li>
        <li>Blockchain technology for secure and transparent documentation</li>
        <li>Warehouse automation and robotics for improved inventory management</li>
      </ul>
      
      <p class="mb-4">At Nerd Logistics, we're embracing these technologies to deliver superior service to our clients. Our investments in digital platforms have already yielded significant improvements in operational efficiency and customer satisfaction.</p>
      
      <h2 class="text-2xl font-bold my-6">E-commerce Growth</h2>
      
      <p class="mb-4">The rapid expansion of e-commerce in Nigeria is creating new opportunities and challenges for logistics providers. With more consumers shopping online, there's an increasing demand for reliable, efficient, and cost-effective delivery services.</p>
      
      <p class="mb-4">The e-commerce boom has led to:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Increased focus on last-mile delivery solutions</li>
        <li>Growing demand for same-day and next-day delivery options</li>
        <li>Development of micro-fulfillment centers in urban areas</li>
        <li>Integration of logistics platforms with e-commerce systems</li>
      </ul>
      
      <div class="bg-primary-50 p-6 rounded-lg my-8">
        <h3 class="text-xl font-semibold mb-3">Expert Insight</h3>
        <p class="italic text-neutral-700">"The future of logistics in Nigeria will be shaped by those who can successfully integrate technology with operational expertise. Companies that invest in digital transformation while maintaining a deep understanding of local market conditions will lead the industry."</p>
        <p class="mt-2 font-medium">— Ibrahim Garba, Technology Director, Nerd Logistics</p>
      </div>
      
      <h2 class="text-2xl font-bold my-6">Infrastructure Development</h2>
      
      <p class="mb-4">Infrastructure remains a critical factor in the evolution of Nigeria's logistics sector. The government's focus on improving roads, ports, and other transportation infrastructure is creating new opportunities for logistics providers.</p>
      
      <p class="mb-4">Key infrastructure developments include:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Expansion of major highways connecting key commercial centers</li>
        <li>Modernization of port facilities to reduce congestion and processing times</li>
        <li>Development of inland dry ports to facilitate cargo movement</li>
        <li>Investment in alternative transportation modes, such as rail</li>
      </ul>
      
      <p class="mb-4">These improvements are reducing transit times and costs, making it easier for logistics companies to provide reliable service across the country.</p>
      
      <h2 class="text-2xl font-bold my-6">Sustainability Focus</h2>
      
      <p class="mb-4">As environmental concerns gain prominence globally, Nigerian logistics companies are increasingly focusing on sustainability. This includes adopting fuel-efficient vehicles, optimizing routes to reduce emissions, and implementing eco-friendly packaging solutions.</p>
      
      <p class="mb-4">At Nerd Logistics, we're committed to reducing our environmental impact through:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Gradual transition to fuel-efficient and alternative fuel vehicles</li>
        <li>Implementation of AI-powered route optimization to reduce fuel consumption</li>
        <li>Use of sustainable packaging materials</li>
        <li>Waste reduction initiatives across our operations</li>
      </ul>
      
      <h2 class="text-2xl font-bold my-6">Conclusion</h2>
      
      <p class="mb-4">The future of logistics in Nigeria is bright, with technology, e-commerce growth, infrastructure development, and sustainability driving innovation and improvement. At Nerd Logistics, we're excited to be at the forefront of these trends, continuously evolving our services to meet the changing needs of our clients.</p>
      
      <p class="mb-4">By staying ahead of industry trends and maintaining our commitment to excellence, we're confident in our ability to provide world-class logistics solutions across Nigeria for years to come.</p>
    `,
    tags: ['Logistics', 'Technology', 'Nigeria', 'Supply Chain', 'E-commerce'],
    relatedPosts: ['2', '3', '6'],
  },
  // Other blog posts would be defined here
];

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // Find the blog post with the matching ID (in a real app, you'd fetch from an API)
  const post = blogPosts.find((post) => post.id === postId);
  
  // If post not found, we could render a 404 component
  if (!post) {
    return (
      <div className="container py-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn btn-primary">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${post.image})` }}></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary-50 text-primary-950 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-300">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <a
                        key={index}
                        href="#"
                        className="inline-block bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-800 text-sm px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Share</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="bg-primary-950 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href="#"
                      className="bg-primary-950 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href="#"
                      className="bg-primary-950 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 bg-neutral-50 rounded-lg p-6">
              <div className="flex gap-4 items-start">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{post.author}</h3>
                  <p className="text-neutral-500 text-sm mb-3">{post.authorRole}</p>
                  <p className="text-neutral-700">
                    With extensive experience in the logistics industry, Oluwaseun provides valuable insights on emerging trends and best practices in supply chain management.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Post Navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="#" className="group">
                <div className="flex items-center text-neutral-500 group-hover:text-primary-700 transition-colors">
                  <ChevronLeft size={16} className="mr-2" />
                  <span>Previous Post</span>
                </div>
                <div className="font-medium group-hover:text-primary-700 transition-colors">
                  How to Optimize Your Supply Chain
                </div>
              </a>
              
              <a href="#" className="group text-right">
                <div className="flex items-center justify-end text-neutral-500 group-hover:text-primary-700 transition-colors">
                  <span>Next Post</span>
                  <ChevronRight size={16} className="ml-2" />
                </div>
                <div className="font-medium group-hover:text-primary-700 transition-colors">
                  The Impact of AI on Logistics Operations
                </div>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-neutral-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
                
                <div className="space-y-6">
                  <a href="#" className="flex gap-4 group">
                    <img 
                      src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                      alt="Supply Chain Resilience"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-primary-700 transition-colors">
                        Supply Chain Resilience: Lessons from Recent Challenges
                      </h4>
                      <div className="text-neutral-500 text-sm mt-1">April 28, 2025</div>
                    </div>
                  </a>
                  
                  <a href="#" className="flex gap-4 group">
                    <img 
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                      alt="Choosing a Logistics Partner"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-primary-700 transition-colors">
                        How to Choose the Right Logistics Partner
                      </h4>
                      <div className="text-neutral-500 text-sm mt-1">May 5, 2025</div>
                    </div>
                  </a>
                  
                  <a href="#" className="flex gap-4 group">
                    <img 
                      src="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                      alt="Technology in Freight Management"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-primary-700 transition-colors">
                        Technology Innovations in Freight Management
                      </h4>
                      <div className="text-neutral-500 text-sm mt-1">April 8, 2025</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                
                <div className="space-y-2">
                  <a 
                    href="#" 
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-white transition-colors"
                  >
                    <span>Industry Insights</span>
                    <span className="bg-primary-100 text-primary-950 text-xs rounded-full px-2 py-1">12</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-white transition-colors"
                  >
                    <span>Business Tips</span>
                    <span className="bg-primary-100 text-primary-950 text-xs rounded-full px-2 py-1">8</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-white transition-colors"
                  >
                    <span>Supply Chain</span>
                    <span className="bg-primary-100 text-primary-950 text-xs rounded-full px-2 py-1">15</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-white transition-colors"
                  >
                    <span>Sustainability</span>
                    <span className="bg-primary-100 text-primary-950 text-xs rounded-full px-2 py-1">6</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-white transition-colors"
                  >
                    <span>Technology</span>
                    <span className="bg-primary-100 text-primary-950 text-xs rounded-full px-2 py-1">10</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-neutral-50">
        <div className="bg-primary-950 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience Premium Logistics Services?</h2>
          <p className="text-neutral-300 mb-6">
            Discover how Nerd Logistics can optimize your supply chain and transportation needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/quote" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Get a Free Quote
            </a>
            <a href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Contact Our Team
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPostPage;