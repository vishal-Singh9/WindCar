import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Fleet', href: '/cars' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Contact', href: '/contact' }
    ],
    Support: [
      { label: 'Help Center', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'FAQ', href: '#' }
    ],
    Connect: [
      { label: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
      { label: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
      { label: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2.5-5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' },
      { label: 'LinkedIn', href: '#', icon: 'M21 21h-4v-6.75a3.25 3.25 0 00-6.5 0V21h-4V9h4v12zM7 21H3V9h4v12zM5 7a2 2 0 110-4 2 2 0 010 4z' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="footer-container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-bold">
              WindCar
            </Link>
            <p className="text-gray-400 mt-4">
              Experience luxury and performance with our premium car rental service.
              Drive your dreams today with our exceptional fleet of vehicles.
            </p>
            <div className="flex space-x-4 mt-4">
              {footerLinks.Connect.map((social) => (
                <Link key={social.label} href={social.href} className="p-2 bg-gray-800 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).slice(0, 2).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>&copy; {currentYear} WindCar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-offset="0"
          className="font-medium text-center p-5 aos-init aos-animate bg-gray-900 text-white text-lg md:text-xl rounded-lg shadow-lg"
        >
          Designed & Developed By <br />
          <a
            className="text-yellow-400 hover:underline font-semibold transition duration-300 ease-in-out gap-2"
            href="https://github.com/vishal-Singh9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vishal Singh
          </a>
        </div>

      </div>
    </footer>
  )
}
