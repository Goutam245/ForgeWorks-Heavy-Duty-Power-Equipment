import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft, Download, Shield, Truck, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container-wide section-padding text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/products" className="mt-4 inline-block text-accent hover:underline">Back to Products</Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const specEntries = Object.entries(product.specs);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container-wide py-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li>/</li>
          <li><Link to="/products" className="hover:text-accent">Products</Link></li>
          <li>/</li>
          <li className="font-medium text-foreground truncate">{product.name}</li>
        </ol>
      </nav>

      <div className="container-wide pb-16">
        {/* Product hero */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="bg-muted rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {product.badge && <span className="badge-category self-start mb-3">{product.badge}</span>}
            <h1 className="text-3xl md:text-4xl font-black leading-tight">{product.name}</h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Power</p>
                <p className="mt-1 spec-value text-lg font-bold">{product.power}</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Weight</p>
                <p className="mt-1 spec-value text-lg font-bold">{product.weight}</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-3xl font-black">${product.price.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">MSRP</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/quote" className="btn-cta flex-1 sm:flex-none text-center">Request a Quote</Link>
              <Link to="/dealers" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                Find a Dealer
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {[
                { icon: Shield, text: `${product.specs.Warranty || "Standard"} Warranty` },
                { icon: Truck, text: "Free Shipping" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-accent" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="specs" className="mt-16">
          <TabsList className="w-full justify-start bg-muted rounded-xl p-1 h-auto flex-wrap">
            <TabsTrigger value="specs" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm px-6 py-2.5">Specifications</TabsTrigger>
            <TabsTrigger value="resources" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm px-6 py-2.5">Resources</TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm px-6 py-2.5">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-8">
            <div className="bg-card rounded-xl border overflow-hidden">
              <table className="w-full">
                <tbody>
                  {specEntries.map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                      <td className="px-6 py-3 text-sm font-medium w-1/3">{key}</td>
                      <td className="px-6 py-3 text-sm spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="mt-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Owner's Manual", type: "PDF", size: "4.2 MB" },
                { name: "Quick Start Guide", type: "PDF", size: "1.1 MB" },
                { name: "Parts Diagram", type: "PDF", size: "2.8 MB" },
                { name: "CAD Drawing", type: "DWG", size: "6.5 MB" },
              ].map((doc) => (
                <button
                  key={doc.name}
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-accent transition-colors text-left"
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Download className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Reviews coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-card rounded-xl border">
            {[
              { q: "What fuel type does this require?", a: "This unit runs on standard unleaded gasoline. Always use fresh fuel and follow the fuel recommendations in the owner's manual." },
              { q: "Is this covered under warranty?", a: `Yes, this product comes with a ${product.specs.Warranty || "standard"} warranty covering manufacturing defects and component failures under normal use.` },
              { q: "Where can I purchase this product?", a: "Our products are available through our nationwide network of authorized dealers. Use our dealer locator to find one near you." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="px-6 text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="px-6 text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
