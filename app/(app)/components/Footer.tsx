import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t shadow-sm mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About TravelEase</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              TravelEase is your one-stop platform for all your travel needs. Book flights, hotels, and more with ease.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/search" className="text-sm hover:text-blue-500 transition-colors">Search</Link></li>
              <li><Link href="/book" className="text-sm hover:text-blue-500 transition-colors">Book</Link></li>
              <li><Link href="/ancillaries" className="text-sm hover:text-blue-500 transition-colors">Ancillaries</Link></li>
              <li><Link href="#" className="text-sm hover:text-blue-500 transition-colors">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Email: support@travelease.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}