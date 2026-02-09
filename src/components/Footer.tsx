import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Stay Ahead of the Curve</h3>
            <p className="text-primary-foreground/70 text-sm mt-1">Get product updates, industry tips, and exclusive deals.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn-cta whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="container-wide py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/products?category=generators" className="hover:text-accent transition-colors">Generators</Link></li>
            <li><Link to="/products?category=pumps" className="hover:text-accent transition-colors">Pumps</Link></li>
            <li><Link to="/products?category=compressors" className="hover:text-accent transition-colors">Compressors</Link></li>
            <li><Link to="/products?category=welders" className="hover:text-accent transition-colors">Welders</Link></li>
            <li><Link to="/products?category=lighting" className="hover:text-accent transition-colors">Lighting Towers</Link></li>
            <li><Link to="/products?category=washers" className="hover:text-accent transition-colors">Pressure Washers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/resources" className="hover:text-accent transition-colors">Resource Center</Link></li>
            <li><Link to="/warranty" className="hover:text-accent transition-colors">Warranty Info</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent transition-colors">About ForgeWorks</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link to="/press" className="hover:text-accent transition-colors">Press</Link></li>
            <li><Link to="/dealers" className="hover:text-accent transition-colors">Dealer Network</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> 1-800-555-0199</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@forgeworks.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" /> 4200 Industrial Pkwy<br/>Milwaukee, WI 53202</li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Facebook, Youtube, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Social media">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 ForgeWorks Industries. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-primary-foreground transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
