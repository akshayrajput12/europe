import BlogPage from "@/blog/page"

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function Page({ searchParams }: PageProps) {
  return <BlogPage searchParams={searchParams} />
}