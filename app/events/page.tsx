import { redirect } from 'next/navigation';

export default async function Page() {
  redirect('https://luma.com/veridionstudios');
  // This will never render, but satisfies Next.js's requirement for a component
}