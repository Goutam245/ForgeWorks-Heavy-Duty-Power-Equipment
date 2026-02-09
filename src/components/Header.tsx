import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Phone, MapPin } from "lucide-react";
import { categories } from "@/data/products";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <a href="tel:1-800-555-0199" className="flex items-center gap-1 hover:text-accent transition-colors" aria-label="Call us">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">1-800-555-0199</span>
            </a>
            <Link to="/dealers" className="flex items-center gap-1 hover:text-accent transition-colors">
              <MapPin className="h-3 w-3" />
              <span className="hidden sm:inline">Find a Dealer</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Free Shipping on Orders $500+</span>
            <Link to="/support" className="hover:text-accent transition-colors">Support</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-black text-xl md:text-2xl tracking-tight text-primary" aria-label="ForgeWorks Home">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-black text-lg md:text-xl">
              F
            </div>
            <span>FORGE<span className="text-accent">WORKS</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                to="/products"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive("/products") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                Products <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Mega menu */}
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card rounded-xl shadow-2xl border p-6 grid grid-cols-3 gap-4 animate-slide-up">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <img src={cat.image} alt={cat.name} className="w-12 h-12 rounded-md object-cover" loading="lazy" />
                      <div>
                        <div className="text-sm font-semibold group-hover:text-accent transition-colors">{cat.name}</div>
                        <div className="text-xs text-muted-foreground">{cat.count} Products</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { path: "/dealers", label: "Find a Dealer" },
              { path: "/resources", label: "Resources" },
              { path: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path) ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/quote" className="btn-cta hidden md:inline-flex text-sm">
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b shadow-lg p-4 animate-slide-up">
            <div className="container-wide">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search products, resources, dealers..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  autoFocus
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b shadow-lg animate-slide-up">
            <nav className="container-wide py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              <Link to="/products" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg font-medium hover:bg-muted transition-colors">Products</Link>
              <Link to="/dealers" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg font-medium hover:bg-muted transition-colors">Find a Dealer</Link>
              <Link to="/resources" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg font-medium hover:bg-muted transition-colors">Resources</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg font-medium hover:bg-muted transition-colors">About</Link>
              <Link to="/quote" onClick={() => setMobileOpen(false)} className="btn-cta mt-2 text-center">Get a Quote</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
