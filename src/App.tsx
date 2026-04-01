import { motion } from "motion/react";
import { 
  MapPin, 
  Users, 
  BedDouble, 
  Bath, 
  Wifi, 
  Coffee, 
  Car, 
  Wind, 
  Mountain, 
  Umbrella, 
  Star,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const AIRBNB_LINK = "https://www.airbnb.com/rooms/1364807887616369034?unique_share_id=132222d9-cc33-4d44-b5f8-a4fab09bbe68&viralityEntryPoint=1&s=76&source_impression_id=p3_1775070287_P3EbH_1am5Tc_AUa";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)] font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl font-semibold tracking-tight ${isScrolled ? 'text-[var(--color-forest)]' : 'text-white drop-shadow-md'}`}>
            La Casa María
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[var(--color-stone)] hover:text-[var(--color-forest)]' : 'text-white/90 hover:text-white drop-shadow-md'}`}>The Home</a>
            <a href="#amenities" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[var(--color-stone)] hover:text-[var(--color-forest)]' : 'text-white/90 hover:text-white drop-shadow-md'}`}>Amenities</a>
            <a href="#gallery" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[var(--color-stone)] hover:text-[var(--color-forest)]' : 'text-white/90 hover:text-white drop-shadow-md'}`}>Gallery</a>
            <a href="#location" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[var(--color-stone)] hover:text-[var(--color-forest)]' : 'text-white/90 hover:text-white drop-shadow-md'}`}>Location</a>
            <a 
              href={AIRBNB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-hover)] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-[var(--color-ink)]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-[var(--color-ink)]' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-ink)] font-medium py-2">The Home</a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-ink)] font-medium py-2">Amenities</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-ink)] font-medium py-2">Gallery</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-[var(--color-ink)] font-medium py-2">Location</a>
            <a 
              href={AIRBNB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-terracotta)] text-white px-6 py-3 rounded-full text-center font-medium mt-2"
            >
              Book on Airbnb
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/IMG_0926.JPG" 
            alt="Mountain view from La Casa María" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium mb-6">Yabucoa, Puerto Rico</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight text-balance">
              A Private Mountain Retreat
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light text-balance">
              Escape to the southeastern mountains of Puerto Rico. A 4-bedroom sanctuary for families, groups, and milestone celebrations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={AIRBNB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-hover)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Check Availability
              </a>
              <a 
                href="#about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all w-full sm:w-auto"
              >
                Explore the Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="bg-[var(--color-forest)] text-white py-8 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between gap-8 md:gap-4 text-center">
          <div className="flex flex-col items-center gap-2 w-[120px]">
            <Users className="w-6 h-6 text-[var(--color-gold)]" />
            <span className="font-medium">8 Guests</span>
          </div>
          <div className="flex flex-col items-center gap-2 w-[120px]">
            <BedDouble className="w-6 h-6 text-[var(--color-gold)]" />
            <span className="font-medium">4 Bedrooms</span>
          </div>
          <div className="flex flex-col items-center gap-2 w-[120px]">
            <Bath className="w-6 h-6 text-[var(--color-gold)]" />
            <span className="font-medium">2.5 Baths</span>
          </div>
          <div className="flex flex-col items-center gap-2 w-[120px]">
            <Mountain className="w-6 h-6 text-[var(--color-gold)]" />
            <span className="font-medium">Mountain Views</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] mb-6">
                Welcome to La Casa María
              </h2>
              <div className="space-y-6 text-lg text-[var(--color-stone)] leading-relaxed">
                <p>
                  Nestled in the lush, rolling hills of Guayabota, Yabucoa, La Casa María offers a serene escape from the everyday. This spacious 4-bedroom home is thoughtfully designed to bring families and friends together.
                </p>
                <p>
                  Wake up to panoramic valley views, sip your morning coffee as the mountain mist clears, and spend your evenings stargazing from the expansive terrace. Despite the secluded feel, you're just a short drive from some of Puerto Rico's most beautiful, uncrowded beaches.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4 p-4 bg-[var(--color-card)] rounded-2xl">
                    <div className="bg-[var(--color-gold)]/20 p-3 rounded-full">
                      <Star className="w-6 h-6 text-[var(--color-terracotta)] fill-[var(--color-terracotta)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Hosted by Tommy</p>
                      <p className="text-sm">Airbnb Superhost • 3 Years Hosting</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/IMG_0695.JPG" 
                alt="La Casa María exterior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-[var(--color-card)] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] mb-4">Everything You Need</h2>
            <p className="text-lg text-[var(--color-stone)] max-w-2xl mx-auto">
              Thoughtful touches and modern comforts to make your stay in the mountains unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: "Fast Wi-Fi", desc: "Stay connected" },
              { icon: Coffee, title: "Coffee Bar", desc: "Local PR beans" },
              { icon: Wind, title: "Fans", desc: "Cool mountain breeze (No A/C)" },
              { icon: Car, title: "Free Parking", desc: "On premises" },
              { icon: Umbrella, title: "Beach Gear", desc: "Chairs & towels" },
              { icon: Mountain, title: "Terrace", desc: "Valley views" },
              { icon: BedDouble, title: "Premium Linens", desc: "Hotel quality" },
              { icon: Users, title: "Family Friendly", desc: "Spacious living" },
            ].map((amenity, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <amenity.icon className="w-8 h-8 text-[var(--color-terracotta)] mb-4" />
                <h3 className="font-medium text-[var(--color-ink)] mb-1">{amenity.title}</h3>
                <p className="text-sm text-[var(--color-stone)]">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] mb-4">The Space</h2>
              <p className="text-lg text-[var(--color-stone)]">Take a look inside your mountain home.</p>
            </div>
            <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-[var(--color-terracotta)] font-medium hover:text-[var(--color-terracotta-hover)] transition-colors">
              See all photos on Airbnb <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden h-[300px] md:h-full"
            >
              <img src="/IMG_0703.JPG" alt="Front Exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden h-[250px] md:h-auto"
            >
              <img src="/IMG_0695.JPG" alt="Exterior View" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl overflow-hidden h-[250px] md:h-auto"
            >
              <img src="/IMG_0929.JPG" alt="Master Bedroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-terracotta)] font-medium">
              See all photos on Airbnb <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-[var(--color-forest)] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeIn}
              className="order-2 md:order-1 h-[400px] rounded-3xl overflow-hidden bg-gray-200"
            >
              {/* Map Placeholder - In a real app, use Google Maps iframe or API */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map of Yabucoa area" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6 text-[var(--color-gold)]">
                <MapPin className="w-6 h-6" />
                <span className="uppercase tracking-widest text-sm font-medium">The Neighborhood</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Guayabota, Yabucoa</h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed mb-8">
                <p>
                  Experience the authentic Puerto Rico. Located in the southeastern mountain interior, Yabucoa is known as "La Ciudad del Azúcar" (The Sugar City).
                </p>
                <p>
                  Here, you're surrounded by lush tropical vegetation and the sounds of the coquí at night. Yet, you are only a 10-15 minute drive from stunning, uncrowded beaches like Playa Lucía and Playa Guayanés.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-8">
                <div>
                  <p className="font-medium text-white text-xl mb-1">10 min</p>
                  <p className="text-sm text-white/70">to Playa Lucía</p>
                </div>
                <div>
                  <p className="font-medium text-white text-xl mb-1">55 min</p>
                  <p className="text-sm text-white/70">to SJU Airport</p>
                </div>
                <div>
                  <p className="font-medium text-white text-xl mb-1">20 min</p>
                  <p className="text-sm text-white/70">to Palmas del Mar</p>
                </div>
                <div>
                  <p className="font-medium text-white text-xl mb-1">45 min</p>
                  <p className="text-sm text-white/70">to El Yunque</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-[var(--color-cream)]">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-forest)] mb-6">Ready for your mountain escape?</h2>
          <p className="text-xl text-[var(--color-stone)] mb-10">
            Rates from $175–$275/night. Book directly through Airbnb for the best availability and secure payment.
          </p>
          <a 
            href={AIRBNB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-hover)] text-white px-10 py-5 rounded-full text-xl font-medium transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Check Dates & Book
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-ink)] text-white/60 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
          <div className="col-span-2">
            <h3 className="font-serif text-2xl text-white mb-4">La Casa María</h3>
            <p className="max-w-sm">A private 4-bedroom mountain home for up to 8 guests in Yabucoa, Puerto Rico.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">The Home</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Hosted by Tommy</li>
              <li><a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact via Airbnb</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} La Casa María. All rights reserved.</p>
          <p>Designed for direct booking.</p>
        </div>
      </footer>
    </div>
  );
}

