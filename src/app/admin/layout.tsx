import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { global } from "styled-jsx/css";
import Link from "next/link";

import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Admin Header */}
          <header className="bg-blue-800 text-white p-4">
            <h1>Admin Panel</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link href="/admin/users">Users</Link>
                </li>
                <li>
                  <Link href="/admin/settings">Settings</Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* Main */}
          <div className="flex flex-1">
            <aside className="bg-blue-200 w-64 p-4">
              <ul>
                <li>
                  <Link
                    href="/category/technology"
                    className="block py-2 hover:bg-purple-300"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/design"
                    className="block py-2 hover:bg-purple-300"
                  >
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/business"
                    className="block py-2 hover:bg-purple-300"
                  >
                    Setings
                  </Link>
                </li>
              </ul>
            </aside>
            {/* Main content */}
            <main className="flex-1 p-6 bg-white">{children}</main>
          </div>
          {/* Footer */}
          <footer className="bg-purple-800 text-white text-center p-4 mt-4">
            <p>
              © 2024 YourGameSite. All rights reserved. "YourGameSite" is not
              affiliated with any game developers or publishers. This site is
              for informational and entertainment purposes only.{" "}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default AdminLayout;
