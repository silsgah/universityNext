import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap size={32} />
          <span className="text-xl font-bold">University Portal</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/academics" className="hover:underline">Academics</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
            <li><Link href="/admissions" className="hover:underline">Admissions</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}