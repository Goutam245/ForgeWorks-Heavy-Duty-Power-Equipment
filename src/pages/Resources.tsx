import { useState } from "react";
import { Search, FileText, Video, BookOpen, Download, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

const resources = [
  { id: 1, title: "Titan 9500W Generator Owner's Manual", type: "Manual", format: "PDF", size: "4.2 MB", category: "Generators" },
  { id: 2, title: "Generator Maintenance Best Practices", type: "Guide", format: "PDF", size: "2.1 MB", category: "Generators" },
  { id: 3, title: "How to Size a Generator for Your Needs", type: "Video", format: "MP4", size: "45 min", category: "Generators" },
  { id: 4, title: "HydraFlow 3000 Setup & Operation", type: "Video", format: "MP4", size: "12 min", category: "Pumps" },
  { id: 5, title: "Pump Selection Guide", type: "Guide", format: "PDF", size: "3.5 MB", category: "Pumps" },
  { id: 6, title: "IronClad Compressor Maintenance Schedule", type: "Manual", format: "PDF", size: "1.8 MB", category: "Compressors" },
  { id: 7, title: "Welding Safety & Best Practices", type: "Guide", format: "PDF", size: "2.9 MB", category: "Welders" },
  { id: 8, title: "Pressure Washer Application Guide", type: "Case Study", format: "PDF", size: "5.1 MB", category: "Washers" },
];

const typeIcons: Record<string, typeof FileText> = {
  Manual: FileText,
  Guide: BookOpen,
  Video: Video,
  "Case Study": FileText,
};

const Resources = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filtered = resources.filter((r) => {
    if (search && !r.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (typeFilter && r.type !== typeFilter) return false;
    return true;
  });

  const types = [...new Set(resources.map((r) => r.type))];

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h1 className="text-3xl md:text-5xl font-black">Resource Center</h1>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Manuals, guides, videos, and technical documentation for all ForgeWorks products.
          </p>
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
              aria-label="Search resources"
            />
          </div>
        </div>
      </section>

      <section className="container-wide section-padding">
        {/* Type filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setTypeFilter("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!typeFilter ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
          >
            All
          </button>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${typeFilter === t ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
            >
              {t}s
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((res) => {
            const Icon = typeIcons[res.type] || FileText;
            return (
              <button
                key={res.id}
                className="flex items-start gap-4 p-5 rounded-xl border bg-card text-left card-hover"
              >
                <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm leading-tight">{res.title}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="badge-category text-[10px] py-0.5">{res.type}</span>
                    <span>{res.format} • {res.size}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{res.category}</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No resources found matching your search.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Resources;
