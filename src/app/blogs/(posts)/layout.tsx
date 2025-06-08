import { getBlogs } from '@/lib/blogs';
import ClientHeaderWrapper from './clientHeaderWrapper';

export const revalidate = 3600;

export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const blogs = await getBlogs();

    return (
        <div>
            <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
                <main className="max-w-[60ch] mx-auto w-full space-y-6">
                    <ClientHeaderWrapper blogs={blogs} />
                    {children}
                </main>
            </div>
        </div>
    )
}