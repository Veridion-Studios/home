"use client";

import { usePathname } from 'next/navigation';
import { Footer } from './footer';

export default function FooterVisibility() {
  const pathname = usePathname();
  if (pathname.startsWith('/chatbot') || pathname.startsWith('/editor')) {
    return null;
  }
  return <Footer />;
}
