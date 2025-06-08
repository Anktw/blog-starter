export interface Blogs {
  id: number;
  title: string;
  desc: string;
  date: string;
}

export async function getBlogs(): Promise<Blogs[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
      {
        next: {
          revalidate: 3600 // 1 hour
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const responseData = await response.json();
    const blogs: Blogs[] = responseData.posts || [];


    return blogs.sort((a, b) => b.id - a.id);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
