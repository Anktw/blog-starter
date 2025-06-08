import { Blogs } from "@/lib/blogs";
import { Calendar } from "lucide-react";

export default function BlogHeader({ 
    blogs,
    slug 
}: { 
    blogs: Blogs[];
    slug: string;
}) {
    const blog = blogs.find(
        (b: Blogs) => b.title.replace(/\s+/g, '-').toLowerCase() === slug.toLowerCase()
    );
    if (!blog) {
        return null;
    }
    
    return (
        <header className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {blog.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {blog.desc}
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </div>
        </header>
    );
}