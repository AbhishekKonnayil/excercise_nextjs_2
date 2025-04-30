import Link from "next/link";
import React, { ReactNode } from "react";

const BlogPostLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Blog header */}
      <header className="bg-gray-900 text-white p-6"><h1>{title}</h1></header>
      {/* blog content */}
      <div className="flex flex-1">
        {/* sidebar */}
        <aside className="bg-gray-200 w-64 p-4">
          <ul>
            <li>
              <Link href="/blog/1" className="block py-2 hover:bg-gray-300">
                Post 1
              </Link>
            </li>
            <li>
              <Link href="/blog/2" className="block py-2 hover:bg-gray-300">
                Post 2
              </Link>
            </li>
            <li>
              <Link href="/blog/3" className="block py-2 hover:bg-gray-300">
                Post 3
              </Link>
            </li>
          </ul>
        </aside>
        <main className="p-4 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default BlogPostLayout;
