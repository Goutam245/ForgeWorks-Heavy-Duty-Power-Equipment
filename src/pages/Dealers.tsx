import { useState } from "react";
import { Search, MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const dealers = [
  { id: 1, name: "Midwest Power Equipment", address: "1234 Industrial Blvd, Milwaukee, WI 53202", phone: "(414) 555-0101", hours: "Mon-Fri 7am-6pm, Sat 8am-3pm", rating: 4.9, distance: "2.3 mi", services: ["Sales", "Service", "Parts"], authorized: true },
  { id: 2, name: "Great Lakes Machinery", address: "5678 Commerce Dr, Chicago, IL 60601", phone: "(312) 555-0202", hours: "Mon-Fri 8am-5pm, Sat 9am-2pm", rating: 4.7, distance: "89 mi", services: ["Sales", "Parts"], authorized: true },
  { id: 3, name: "Prairie State Equipment", address: "910 Highway 20, Rockford, IL 61101", phone: "(815) 555-0303", hours: "Mon-Sat 7am-5pm", rating: 4.8, distance: "112 mi", services: ["Sales", "Service", "Parts", "Rental"], authorized: true },
  { id: 4, name: "Northern Tool & Power", address: "2200 Lake Ave, Minneapolis, MN 55401", phone: "(612) 555-0404", hours: "Mon-Fri 7:30am-6pm", rating: 4.6, distance: "337 mi", services: ["Sales", "Service"], authorized: true },
];

const Dealers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDealers = dealers.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h1 className="text-3xl md:text-5xl font-black">Find a Dealer</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Locate an authorized ForgeWorks dealer near you for expert advice, service, and support.
          </p>
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter city, state, or zip code..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
              aria-label="Search dealers"
            />
          </div>
        </div>
      </section>

      <section className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Map placeholder */}
          <div className="bg-muted rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:min-h-[500px] flex items-center justify-center border">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm text-muted-foreground mt-1">Map integration ready for implementation</p>
            </div>
          </div>

          {/* Dealer list */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{filteredDealers.length} dealers found</p>
            {filteredDealers.map((dealer) => (
              <div key={dealer.id} className="bg-card rounded-xl border p-5 card-hover">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{dealer.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span className="text-sm font-medium">{dealer.rating}</span>
                      <span className="text-sm text-muted-foreground ml-2">{dealer.distance}</span>
                    </div>
                  </div>
                  {dealer.authorized && (
                    <span className="badge-category text-[10px]">Authorized</span>
                  )}
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />{dealer.address}</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" />{dealer.phone}</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />{dealer.hours}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dealer.services.map((s) => (
                    <span key={s} className="px-2 py-1 text-xs rounded-md bg-muted font-medium">{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={`tel:${dealer.phone}`} className="btn-cta text-sm py-2">Call Now</a>
                  <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium border rounded-lg hover:bg-muted transition-colors">
                    Directions <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dealers;
