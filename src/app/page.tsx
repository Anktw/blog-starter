"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Star, Zap } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Blogs | Blog Starter App",
  description: "All the blogs are written in MDX format, you can use this app to create your own blog easily.",
};

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black my-16 text-white overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
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

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Animated Logo/Icon */}
        <div
          className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative mt-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-float">
              <Zap className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-2xl blur-lg animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-shimmer">
            Blog Starter
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Description */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            This is blog-starter-app built using mdx
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col items-center sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <a href="https://unkit.site/writings/How-to-Create-a-Markdown-Blog-in-Next.js" target="_blank" rel="noopener noreferrer">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Read Documentation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </a>
          <Link href="/blogs">
          <button className="cursor-pointer group px-8 py-4 border border-gray-600 rounded-full font-semibold text-lg transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
            <span className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Go to Blogs
            </span>
          </button>
          </Link>
        </div>
        
        {/* Feature Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            { icon: Star, title: "Mdx components", desc: "Shipped with beautiful MDX components, you have to just use them in your markdown" },
            { icon: Zap, title: "SSR", desc: "Better performance with server-side rendering" },
            { icon: Github, title: "View Source", desc: "View Source on GitHub", link: "https://github.com/Anktw/blog-starter" },
          ].map((feature, index) => (
            <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer" className="group p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-900/70 hover:scale-105 animate-fadeInUp cursor-pointer"
              style={{ animationDelay: `${1200 + index * 200}ms` }}>
            
              <feature.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}
