"use client";

import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import { ArrowRight, Clock, Filter, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BlogCard = ({ blog }: { blog: typeof blogs[0] }) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg flex flex-col h-full">
      <div className="h-56 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-gray-400">{blog.date}</span>
          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
            {blog.tags[0]}
          </span>
        </div>
        <Link href={`/blog/${blog.slug}`}>
          <h3 className="text-xl font-bold mb-3 text-primary hover:text-primary/80">
            {blog.title}
          </h3>
        </Link>
        <p className="text-gray-300 mb-4 flex-grow">{blog.description}</p>
        
        <div className="flex items-center mt-auto">
          {blog.authorImage ? (
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-10 h-10 rounded-full mr-3"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
              {blog.author.charAt(0)}
            </div>
          )}
          <span className="text-sm text-gray-300">{blog.author}</span>
        </div>
      </div>
    </div>
  );
};

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract all unique tags from blogs
  const allTags = Array.from(
    new Set(blogs.flatMap((blog) => blog.tags))
  ).sort();

  // Filter blogs based on active filter and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesFilter = 
      activeFilter === "all" || 
      blog.tags.includes(activeFilter);
    
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  // Sort blogs by date (newest first)
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Featured blogs
  const featuredBlogs = blogs.filter(blog => blog.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 pt-24 pb-16 mx-auto">
        {/* Featured blogs section */}
        {featuredBlogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured <span className="text-primary">Articles</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogs.slice(0, 2).map((blog) => (
                <div 
                  key={blog.id}
                  className="bg-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg"
                >
                  <div className="lg:flex">
                    <div className="lg:w-2/5 h-64 lg:h-auto">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 lg:w-3/5 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-400">{blog.date}</span>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                          {blog.tags[0]}
                        </span>
                      </div>
                      <Link href={`/blog/${blog.slug}`}>
                        <h3 className="text-2xl font-bold mb-3 text-primary hover:text-primary/80">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-gray-300 mb-4 flex-grow">{blog.description}</p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          {blog.authorImage ? (
                            <img
                              src={blog.authorImage}
                              alt={blog.author}
                              className="w-10 h-10 rounded-full mr-3"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                              {blog.author.charAt(0)}
                            </div>
                          )}
                          <span className="text-sm text-gray-300">{blog.author}</span>
                        </div>
                        
                        <Link href={`/blog/${blog.slug}`}>
                          <Button
                            variant="ghost"
                            className="text-primary p-0 group hover:bg-transparent hover:no-underline"
                          >
                            Read More{" "}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Main blogs section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-3xl font-bold">
              Latest <span className="text-primary">Articles</span>
            </h2>
            
            {/* Search input for mobile */}
            <div className="w-full md:hidden mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 bg-card border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-xl sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </h3>
                  <div className="relative hidden md:block">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    <Button
                      variant={activeFilter === "all" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveFilter("all")}
                    >
                      All Articles
                    </Button>
                    
                    {allTags.map((tag) => (
                      <Button
                        key={tag}
                        variant={activeFilter === tag ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveFilter(tag)}
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog list */}
            <div className="lg:col-span-3">
              {sortedBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {sortedBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              ) : (
                <div className="bg-card p-8 rounded-xl text-center">
                  <p className="text-gray-300 mb-4">
                    No articles found matching your criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setActiveFilter("all");
                      setSearchQuery("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}