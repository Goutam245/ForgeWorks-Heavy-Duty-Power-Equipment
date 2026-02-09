import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, Grid3X3, List, X } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "name", label: "Name A-Z" },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "name": result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return result;
  }, [selectedCategories, sortBy, priceRange]);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container-wide py-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><a href="/" className="hover:text-accent">Home</a></li>
          <li>/</li>
          <li className="font-medium text-foreground">Products</li>
        </ol>
      </nav>

      <div className="container-wide pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black">All Products</h1>
            <p className="text-muted-foreground mt-1">{filteredProducts.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm px-3 py-2 rounded-lg border bg-card focus:ring-2 focus:ring-accent focus:outline-none"
              aria-label="Sort products"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg border bg-card text-sm font-medium"
              aria-label="Toggle filters"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${filtersOpen ? "fixed inset-0 z-50 bg-card p-6 overflow-auto" : "hidden"} lg:block lg:static lg:w-64 flex-shrink-0`}>
            <div className="flex items-center justify-between lg:hidden mb-6">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters"><X className="h-5 w-5" /></button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="w-4 h-4 rounded border-2 text-accent focus:ring-accent"
                    />
                    <span className="text-sm group-hover:text-accent transition-colors">{cat.name}</span>
                    <span className="text-xs text-muted-foreground ml-auto">({cat.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price range */}
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">Price Range</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="spec-value">${priceRange[0].toLocaleString()}</span>
                <span>–</span>
                <span className="spec-value">${priceRange[1].toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={0}
                max={10000}
                step={100}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full mt-3 accent-[hsl(var(--safety-orange))]"
                aria-label="Maximum price"
              />
            </div>

            {selectedCategories.length > 0 && (
              <button
                onClick={() => setSelectedCategories([])}
                className="text-sm text-accent font-medium hover:underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Active filters */}
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((id) => {
                  const cat = categories.find((c) => c.id === id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleCategory(id)}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
                    >
                      {cat?.name} <X className="h-3 w-3" />
                    </button>
                  );
                })}
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg font-medium text-muted-foreground">No products match your filters.</p>
                <button onClick={() => { setSelectedCategories([]); setPriceRange([0, 10000]); }} className="mt-4 text-accent font-medium hover:underline">
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
