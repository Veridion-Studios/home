"use client";

import { usePathname } from 'next/navigation';
import Navbar from './navbar';

export default function NavbarVisibility() {
  const pathname = usePathname();
  // Hide navbar on /chatbot and any subroutes
  if (pathname.startsWith('/chatbot')) {
    return null;
  }
  return <Navbar />;
}
