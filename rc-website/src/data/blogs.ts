export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  authorImage?: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export const blogs: Blog[] = [
  {
    id: "intro-robotics",
    slug: "introduction-to-robotics",
    title: "Introduction to Robotics: Where Hardware Meets Software",
    description: "Discover the fascinating world of robotics and how the combination of hardware and software is shaping our future.",
    image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 2, 2025",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: "Robotics is a fascinating interdisciplinary field that combines engineering, computer science, and many other disciplines to create machines that can perform tasks autonomously or semi-autonomously.\n\nAt its core, robotics involves the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing. These technologies deal with automated machines that can take the place of humans in dangerous environments or manufacturing processes, or resemble humans in appearance, behavior, or cognition.\n\nMany of today's robots are inspired by nature, contributing to the field of bio-inspired robotics. The concept of creating machines that can operate autonomously dates back to classical times, but research into the functionality and potential uses of robots did not grow substantially until the 20th century.\n\nToday, robotics is a rapidly growing field, as technological advances continue; researching, designing, and building new robots serve various practical purposes, whether domestically, commercially, or militarily. Many robots do jobs that are hazardous to people, such as defusing bombs, finding survivors in unstable ruins, and exploring mines and shipwrecks.\n\nRobotics is also used in STEM (science, technology, engineering, and mathematics) as a teaching aid. The advent of nanorobots, microscopic robots that can be injected into the human body, could revolutionize medicine and human health.",
    tags: ["robotics", "technology", "automation", "engineering"],
    featured: true
  },
  {
    id: "ai-robotics",
    slug: "artificial-intelligence-in-robotics",
    title: "The Role of Artificial Intelligence in Modern Robotics",
    description: "Explore how AI is revolutionizing robotics and enabling machines to learn, adapt, and make autonomous decisions.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 28, 2025",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: "Artificial Intelligence (AI) has become an integral component of modern robotics, fundamentally changing how robots perceive, learn, and interact with the world around them.\n\nIn the past, robots were primarily programmed to follow specific instructions for predetermined tasks. Today, AI-powered robots can learn from their experiences, adapt to new situations, and even make autonomous decisions based on the data they collect.\n\nMachine learning, a subset of AI, enables robots to recognize patterns and improve their performance over time without explicit programming. For instance, a robot can learn to identify objects by analyzing thousands of labeled images, a process known as supervised learning.\n\nReinforcement learning, another important approach, allows robots to learn optimal behaviors through trial and error, receiving rewards for desired actions and penalties for undesired ones. This method has proven particularly effective for teaching robots complex tasks like walking, grasping objects, or playing games.\n\nComputer vision, enhanced by deep learning algorithms, gives robots the ability to interpret and understand visual information from the world, enabling them to navigate environments, recognize objects, and interact with humans more naturally.\n\nNatural Language Processing (NLP) facilitates human-robot communication, allowing people to give commands or ask questions in everyday language rather than through specialized programming interfaces.\n\nThe integration of AI and robotics has led to significant advancements in various fields, from manufacturing and healthcare to exploration and entertainment. As these technologies continue to evolve, we can expect robots to become even more intelligent, versatile, and integrated into our daily lives.",
    tags: ["artificial intelligence", "machine learning", "robotics", "technology"],
    featured: true
  }
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((blog) => blog.slug);
}