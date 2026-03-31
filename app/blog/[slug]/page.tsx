import { BlogPostSection } from "@/components/features/blog/BlogPostSection";
import { getPostBySlug } from "@/lib/blog-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return <BlogPostSection post={post} />;
}

