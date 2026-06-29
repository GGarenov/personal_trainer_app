import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { blogCategories, type BlogCategory } from "./blogImages";

export const BLOG_PAGE_SIZE = 6;
export const BLOG_HERO_CLASS = "min-h-[40vh] md:min-h-[48vh]";

export function categoryToSlug(category: BlogCategory): string {
  return category.toLowerCase();
}

export function slugToCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => categoryToSlug(category) === slug);
}

export function getCategoryBasePath(category: BlogCategory): string {
  return `/blog/category/${categoryToSlug(category)}`;
}

export async function getSortedBlogPosts() {
  return (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function getBlogPageCount(posts: CollectionEntry<"blog">[]) {
  return Math.max(1, Math.ceil(posts.length / BLOG_PAGE_SIZE));
}

export function getBlogPagePosts(
  posts: CollectionEntry<"blog">[],
  page: number,
) {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return posts.slice(start, start + BLOG_PAGE_SIZE);
}

export function getBlogPagePath(basePath: string, page: number) {
  return page <= 1 ? `${basePath}/` : `${basePath}/page/${page}/`;
}
