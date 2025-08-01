"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Users,
  LogOut,
  Settings,
  Menu,
  X,
  Home,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { isAdminEmail } from "@/utils/constants";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check if user is authorized admin
  const isAuthorized = isAdminEmail(user?.primaryEmailAddress?.emailAddress);

  useEffect(() => {
    // Only redirect if Clerk has finished loading
    if (isLoaded) {
      // If no user and not on sign-in page, redirect to sign-in
      if (!user && pathname !== "/admin/sign-in") {
        router.push("/admin/sign-in");
        return;
      }

      // If user exists but not authorized and not on sign-in page, redirect to home
      if (user && !isAuthorized && pathname !== "/admin/sign-in") {
        router.push("/");
        return;
      }
    }
  }, [user, isLoaded, isAuthorized, pathname, router]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("admin-sidebar");
      const menuButton = document.getElementById("mobile-menu-button");

      if (
        sidebarOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
      </div>
    );
  }

  // If on sign-in page, render children without layout
  if (pathname === "/admin/sign-in") {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  // If not authorized or no user, don't render anything (redirect will happen)
  if (!user || !isAuthorized) {
    return null;
  }

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      current: pathname === "/admin",
    },
    {
      name: "Blogs",
      href: "/admin/blogs",
      icon: FileText,
      current: pathname.startsWith("/admin/blogs"),
    },
    {
      name: "Careers",
      href: "/admin/careers",
      icon: Users,
      current: pathname.startsWith("/admin/careers"),
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      current: pathname === "/admin/settings",
    },
  ];

  const handleLogout = async () => {
    await signOut();
    router.push("/admin/sign-in");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <aside
        id="admin-sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 shadow-xl transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-gray-50/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">
                Z
              </span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">ZENEXGEN</h1>
              <p className="text-xs text-gray-500 -mt-1">Admin Panel</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {/* Back to Website Link */}
          <Link
            href="/"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 group mb-4 border border-gray-200"
          >
            <Home className="mr-3 h-4 w-4 group-hover:text-primary transition-colors" />
            <span>Back to Website</span>
          </Link>

          {/* Navigation Items */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group",
                item.current
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 transition-colors",
                  item.current
                    ? "text-primary-foreground"
                    : "text-gray-500 group-hover:text-primary"
                )}
              />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Admin Profile & Logout */}
        <div className="p-4 border-t border-gray-200 bg-gray-50/30">
          <div className="flex items-center mb-4 p-3 bg-white rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mr-3 shadow-sm">
              <span className="text-sm font-bold text-primary-foreground">
                {user?.firstName?.charAt(0)?.toUpperCase() ||
                  user?.emailAddresses[0]?.emailAddress
                    ?.charAt(0)
                    ?.toUpperCase() ||
                  "A"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {user?.fullName || user?.firstName || "Admin User"}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.primaryEmailAddress?.emailAddress ||
                  "admin@zenexgen.com"}
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:pl-72">
        {/* Mobile Top Bar */}
        <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <Button
              id="mobile-menu-button"
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold text-gray-900">
              {navigation.find((item) => item.current)?.name || "Admin Panel"}
            </h1>
            <div className="w-9" /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen bg-gray-50">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
