import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: "New Research Grant Awarded for Renewable Energy",
    description: "Our university has been awarded a $5 million grant for groundbreaking research in renewable energy technologies.",
    date: "2023-05-15",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
  },
  {
    id: 2,
    title: "Annual Career Fair: Connect with Top Employers",
    description: "Join us for our annual career fair on June 1st, featuring over 50 top employers from various industries.",
    date: "2023-05-20",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
  },
  {
    id: 3,
    title: "Alumni Spotlight: Sarah Johnson Named Fortune 500 CEO",
    description: "Alumna Sarah Johnson, '15, has been named CEO of a Fortune 500 company. Read her inspiring journey from campus to corporate leadership.",
    date: "2023-05-25",
    category: "Alumni",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
  },
  {
    id: 4,
    title: "New Sports Complex Opening Next Month",
    description: "Our state-of-the-art sports complex will open its doors next month, featuring Olympic-sized pools and cutting-edge training facilities.",
    date: "2023-05-28",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
  },
];

export default function NewsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <Card key={item.id} className={`overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}>
            <div className="relative h-48 md:h-64">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-2 py-1 text-sm">
                {item.category}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl hover:text-primary transition-colors">
                <Link href={`/news/${item.id}`}>{item.title}</Link>
              </CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}