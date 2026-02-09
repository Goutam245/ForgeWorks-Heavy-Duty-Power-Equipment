import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-card rounded-xl border overflow-hidden card-hover flex flex-col"
    >
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 badge-category">{product.badge}</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-bold text-lg leading-tight group-hover:text-accent transition-colors">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="spec-value">{product.power}</span>
          <span>•</span>
          <span className="spec-value">{product.weight}</span>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toLocaleString()}</span>
          <span className="flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            View Details <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
