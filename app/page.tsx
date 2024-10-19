import SlideshowBanner from '@/components/SlideshowBanner';
import NewsSection from '@/components/NewsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SlideshowBanner />
      <div className="mt-8 flex justify-center space-x-4">
        <Link href="/login">
          <Button variant="default">Student Login</Button>
        </Link>
        <Link href="/admissions">
          <Button variant="outline">New Admissions</Button>
        </Link>
      </div>
      <NewsSection />
    </div>
  );
}