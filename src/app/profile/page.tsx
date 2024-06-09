"use client";

import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const onSignOut = async () => {
    try {
      await axios.get("/api/users/signout");
      toast.success("Signout successful");
      router.push("/signin");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast.error(errorMessage, { duration: 3000 });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative w-full">
      <nav className="z-50">
        <div className="w-full bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex grow justify-end">
              <button
                onClick={onSignOut}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Lorem ipsum dolor sit amet consectetur dicta.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Docs
              </button>
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
