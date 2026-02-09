import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Headphones, Award, Star, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import heroBg from "@/assets/hero-bg.jpg";
import { categories, products, testimonials, stats } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt="Industrial equipment at work on a construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.4)] to-[rgba(15,23,42,0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.95)] via-[rgba(15,23,42,0.85)] to-[rgba(15,23,42,0.3)]" />
        <div className="relative container-wide">
          <div className="max-w-2xl">
            <span className="badge-category animate-slide-up [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">Engineered for the Everyday</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-white animate-slide-up-delay [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.7),0_8px_24px_rgba(0,0,0,0.4)]">
              Built to
              <span className="block text-accent">Outperform.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-100/90 max-w-lg animate-slide-up-delay-2 [text-shadow:0_2px_4px_rgba(0,0,0,0.6),0_4px_8px_rgba(0,0,0,0.4)]">
              Heavy-duty power equipment engineered for professionals who demand reliability. Backed by 50 years of American engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up-delay-2">
              <Link to="/products" className="btn-cta text-base">
                Explore Products <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/dealers" className="btn-outline-hero text-base">
                Find a Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-card border-b">
        <div className="container-wide py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, text: "Industry-Leading Warranty" },
            { icon: Truck, text: "Free Shipping $500+" },
            { icon: Headphones, text: "24/7 Tech Support" },
            { icon: Award, text: "50+ Years Engineering" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">Product Categories</h2>
              <p className="mt-2 text-muted-foreground">Professional-grade equipment for every application.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="group relative aspect-square rounded-xl overflow-hidden card-hover"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--industrial-blue))] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-bold text-[hsl(var(--warm-white))]">{cat.name}</h3>
                  <p className="text-xs text-[hsl(var(--warm-white))]/70">{cat.count} Products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">Our most popular heavy-duty equipment.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-5xl font-black text-accent">{stat.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">What Professionals Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl border p-6 card-hover">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-[hsl(var(--industrial-blue))/90]" />
        <div className="relative container-wide section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[hsl(var(--warm-white))]">Ready to Power Up?</h2>
          <p className="mt-4 text-lg text-[hsl(var(--warm-white))]/70 max-w-xl mx-auto">
            Connect with our team or visit an authorized dealer to find the right equipment for your needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-cta text-base">Request a Quote</Link>
            <Link to="/dealers" className="btn-outline-hero text-base">Find a Dealer</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
