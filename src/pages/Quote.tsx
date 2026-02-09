import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Quote request submitted!", description: "We'll get back to you within 24 hours." });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container-wide section-padding text-center">
          <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="text-3xl font-black">Thank You!</h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Your quote request has been submitted. A ForgeWorks representative will contact you within 24 hours.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container-wide text-center">
          <h1 className="text-3xl md:text-4xl font-black">Request a Quote</h1>
          <p className="mt-2 text-primary-foreground/70">Get personalized pricing for your equipment needs.</p>
        </div>
      </section>

      <section className="container-wide section-padding max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name *</label>
              <input id="firstName" required className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-accent focus:outline-none" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name *</label>
              <input id="lastName" required className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-accent focus:outline-none" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
            <input id="email" type="email" required className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-accent focus:outline-none" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
            <input id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-accent focus:outline-none" />
          </div>
          <div>
            <label htmlFor="product" className="block text-sm font-medium mb-1">Product of Interest</label>
            <select id="product" className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-accent focus:outline-none">
              <option value="">Select a product...</option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border bg-card focus:ring-2 focus:ring-accent focus:outline-none resize-none" />
          </div>
          <button type="submit" className="btn-cta w-full justify-center text-base">
            <Send className="h-4 w-4" /> Submit Quote Request
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Quote;
