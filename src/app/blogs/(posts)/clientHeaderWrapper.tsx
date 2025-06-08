"use client";

import { usePathname } from 'next/navigation';
import BlogHeader from './blogHeader';
import { Blogs } from '@/lib/blogs';

export default function ClientHeaderWrapper({ blogs }: { blogs: Blogs[] }) {
    const pathname = usePathname();
    const slug = pathname.split('/').pop() || '';

    return <BlogHeader blogs={blogs} slug={slug} />;
}
