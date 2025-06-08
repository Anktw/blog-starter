import { getBlogs } from "@/lib/blogs"
import { ArrowUpRight, Calendar } from "lucide-react"
import Link from "next/link";

export default async function Blogs() {
    const blogs = await getBlogs();

    if (!blogs || blogs.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                        animation: "gridMove 20s linear infinite",
                    }}
                />
            </div>
            {/* Main Content */}
            <div className="relative z-20 max-w-4xl mx-auto px-4 py-16 my-6">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <Link
                        href="/"
                        className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                        ← Back to Home
                    </Link>
                    <h1 className="text-5xl mb-16 md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-shimmer">
                        My Blogs
                    </h1>
                </div>

                {/* Blog Grid */}
                    {blogs.map((blog, index) => (
                        <Link
                            key={blog.id}
                            href={`/blogs/${blog.title.replace(/\s+/g, "-").toLowerCase()}`}
                            className="block group animate-fadeInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl transition-all duration-500 hover:border-purple-500/50 hover:bg-gray-900/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:via-transparent group-hover:to-blue-500/20 rounded-2xl transition-all duration-500 -z-10" />

                                <div className="flex items-start justify-between">
                                    <div className="flex-1 pr-4">
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-all duration-300 mb-3 group-hover:translate-x-2">
                                            {blog.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 leading-relaxed">
                                            {blog.desc}
                                        </p>

                                        {/* Meta Information */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>
                                                    {new Date(blog.date).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                            <ArrowUpRight className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}