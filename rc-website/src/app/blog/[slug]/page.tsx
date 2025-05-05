import { getBlogBySlug, getAllBlogSlugs } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define Promise-based types for props
type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const params = await paramsPromise;
  const { slug } = params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${blog.title} - Robotics Collective Blog`,
    description: blog.description,
    keywords: [...blog.tags, "blog", "robotics", "article"],
  };
}

export default async function BlogPostPage({
  params: paramsPromise,
}: {
  params: PageParams;
}) {
  const params = await paramsPromise;
  const { slug } = params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Format date for display
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  // Estimate reading time (average reading speed: 200 words per minute)
  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-24 mx-auto">
        {/* Main content - centered */}
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button
              variant="outline"
              className="mb-6 flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Button>
          </Link>

          <article className="bg-card rounded-xl overflow-hidden">
            {/* Featured image */}
            <div className="h-[400px] w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article content */}
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {blog.title}
              </h1>

              {/* Article metadata - centered */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              {/* Author info - centered */}
              <div className="flex items-center justify-center mb-8">
                {blog.authorImage ? (
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-4">
                    {blog.author.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-medium">{blog.author}</p>
                  <p className="text-sm text-gray-400">Author</p>
                </div>
              </div>

              {/* Article body */}
              <div className="prose prose-invert max-w-none mx-auto">
                {blog.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-medium mb-3 flex items-center justify-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {blog.tags.map((tag) => (
                    <Link href={`/blog?tag=${tag}`} key={tag}>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors cursor-pointer">
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share buttons */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3 flex items-center justify-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share this article
                </h3>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}