export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/sitemap" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>123 University Ave, City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@university.edu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary">Facebook</a>
              <a href="#" className="hover:text-secondary">Twitter</a>
              <a href="#" className="hover:text-secondary">Instagram</a>
              <a href="#" className="hover:text-secondary">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 University Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}