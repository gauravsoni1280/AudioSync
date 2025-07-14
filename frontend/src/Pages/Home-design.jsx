import { Button } from "@/components/ui/button";
import {
  Music,
  Users,
  QrCode,
  ThumbsUp,
  DollarSign,
  Disc,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between py-4 mx-auto">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AudioSync
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary">
              Gallery
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062')] bg-cover bg-center opacity-10"></div>

          <div className="container flex flex-col items-center text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Party,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Music
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10">
              Create collaborative music queues for your parties. Let guests vote for songs, take control as a DJ, or
              let the crowd decide what plays next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
                Create a Party <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                Join a Party <QrCode className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070"
                width={1200}
                height={600}
                alt="AudioSync App"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                How AudioSync Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A seamless experience for hosts and guests to collaborate on the perfect playlist
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Disc className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Create a Party</h3>
                <p className="text-gray-600">Start a music session and get a unique code to share with your guests</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-full bg-secondary/10 mb-4">
                  <QrCode className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Join via Code or QR</h3>
                <p className="text-gray-600">Guests can join your party by entering a code or scanning a QR code</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-full bg-accent/10 mb-4">
                  <ThumbsUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vote for Songs</h3>
                <p className="text-gray-600">Everyone can add songs to the queue and upvote their favorites</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Disc className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">DJ Mode</h3>
                <p className="text-gray-600">
                  Party creators can take control as DJ and manually select songs from the queue
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-full bg-secondary/10 mb-4">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pay to Play</h3>
                <p className="text-gray-600">Skip the queue by paying to prioritize your song selection</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-full bg-accent/10 mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multiple Parties</h3>
                <p className="text-gray-600">Create and manage multiple independent party sessions</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                The Perfect Party Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how AudioSync transforms your gatherings with collaborative music control
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Sign Up & Create a Party</h3>
                      <p className="text-gray-600">
                        Create an account and start your first music party session in seconds
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Share Your Party Code</h3>
                      <p className="text-gray-600">
                        Invite friends with a unique code or let them scan your party's QR code
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Build the Queue Together</h3>
                      <p className="text-gray-600">
                        Everyone adds songs and votes to create the perfect collaborative playlist
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Enjoy the Music</h3>
                      <p className="text-gray-600">Songs play automatically based on votes or DJ selection</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1470"
                    width={800}
                    height={600}
                    alt="AudioSync in action"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                The Vibe
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the energy of AudioSync parties</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1074"
                  fill
                  alt="Party scene"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1470"
                  fill
                  alt="Concert crowd"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1571266028243-e4b94a9e1a20?q=80&w=1470"
                  fill
                  alt="DJ setup"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1574007557239-acf6863bc375?q=80&w=1528"
                  fill
                  alt="Phone with music app"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Start for free and upgrade as your parties grow</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col p-6 rounded-lg border bg-white shadow-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Free</h3>
                  <div className="mt-2 text-3xl font-bold">$0</div>
                  <p className="text-gray-500 mt-1">Forever</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>1 active party</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Up to 10 guests</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Basic queue management</span>
                  </li>
                </ul>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Get Started
                </Button>
              </div>

              <div className="flex flex-col p-6 rounded-lg border bg-white shadow-md relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="mt-2 text-3xl font-bold">$9.99</div>
                  <p className="text-gray-500 mt-1">per month</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>5 active parties</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Up to 50 guests per party</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>DJ mode</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Pay-to-play feature</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">Subscribe</Button>
              </div>

              <div className="flex flex-col p-6 rounded-lg border bg-white shadow-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Business</h3>
                  <div className="mt-2 text-3xl font-bold">$29.99</div>
                  <p className="text-gray-500 mt-1">per month</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Unlimited parties</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Unlimited guests</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Advanced DJ controls</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Parties?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Join thousands of hosts who are creating unforgettable music experiences with AudioSync
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 gap-2">
                Create Your First Party <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Music className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AudioSync
              </span>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-6 md:mb-0 justify-center">
              <a href="#features" className="text-sm text-gray-600 hover:text-primary">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-primary">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-primary">
                Pricing
              </a>
              <a href="#gallery" className="text-sm text-gray-600 hover:text-primary">
                Gallery
              </a>
              <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                Contact
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AudioSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

