import generatorImg from "@/assets/product-generators.jpg";
import pumpImg from "@/assets/product-pumps.jpg";
import compressorImg from "@/assets/product-compressors.jpg";
import welderImg from "@/assets/product-welders.jpg";
import lightingImg from "@/assets/product-lighting.jpg";
import washerImg from "@/assets/product-washers.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  power: string;
  weight: string;
  description: string;
  badge?: string;
  specs: Record<string, string>;
}

export const categories = [
  { id: "generators", name: "Generators", count: 24, image: generatorImg },
  { id: "pumps", name: "Pumps", count: 18, image: pumpImg },
  { id: "compressors", name: "Compressors", count: 15, image: compressorImg },
  { id: "welders", name: "Welders", count: 12, image: welderImg },
  { id: "lighting", name: "Lighting Towers", count: 9, image: lightingImg },
  { id: "washers", name: "Pressure Washers", count: 21, image: washerImg },
];

export const products: Product[] = [
  {
    id: "gen-titan-9500",
    name: "Titan 9500W Generator",
    category: "generators",
    subcategory: "Portable",
    image: generatorImg,
    price: 2499,
    rating: 4.8,
    reviewCount: 342,
    power: "9,500W",
    weight: "210 lbs",
    badge: "Best Seller",
    description: "The Titan 9500W delivers uncompromising power in a portable package. Built with a commercial-grade OHV engine, this generator provides reliable electricity for job sites, emergency backup, and heavy-duty applications.",
    specs: {
      "Running Watts": "9,500W",
      "Peak Watts": "12,000W",
      "Engine Type": "420cc OHV 4-Stroke",
      "Fuel Tank": "8 Gallons",
      "Run Time": "10 hrs @ 50% load",
      "Noise Level": "74 dB",
      "Outlets": "4x 120V, 1x 240V, 1x 30A RV",
      "Start Type": "Electric / Recoil",
      "Dimensions": '28.5" x 22" x 24"',
      "Warranty": "3-Year Commercial",
    },
  },
  {
    id: "pump-hydraflow-3000",
    name: "HydraFlow 3000 Pump",
    category: "pumps",
    subcategory: "Centrifugal",
    image: pumpImg,
    price: 1899,
    rating: 4.7,
    reviewCount: 189,
    power: "3,000 GPH",
    weight: "85 lbs",
    badge: "New",
    description: "Industrial-grade centrifugal pump designed for high-volume water transfer. Features self-priming capability and corrosion-resistant impeller for demanding environments.",
    specs: {
      "Flow Rate": "3,000 GPH",
      "Max Head": "130 ft",
      "Suction Size": '3"',
      "Discharge Size": '3"',
      "Engine": "208cc OHV",
      "Fuel Tank": "3.6 Gallons",
      "Self-Priming": "Yes, up to 26 ft",
      "Construction": "Cast Iron / Aluminum",
      "Dimensions": '22" x 18" x 20"',
      "Warranty": "2-Year",
    },
  },
  {
    id: "comp-ironclad-60",
    name: "IronClad 60-Gal Compressor",
    category: "compressors",
    subcategory: "Stationary",
    image: compressorImg,
    price: 1649,
    rating: 4.9,
    reviewCount: 267,
    power: "175 PSI",
    weight: "265 lbs",
    badge: "Top Rated",
    description: "Heavy-duty 60-gallon stationary compressor built for continuous shop use. Twin-cylinder cast iron pump delivers high CFM output with exceptional durability.",
    specs: {
      "Tank Size": "60 Gallons",
      "Max PSI": "175 PSI",
      "CFM @ 90 PSI": "15.8 CFM",
      "Motor": "5 HP / 240V",
      "Pump Type": "Twin-Cylinder Cast Iron",
      "Duty Cycle": "100% Continuous",
      "Oil-Free": "No (Oil-Lubricated)",
      "Noise Level": "82 dB",
      "Dimensions": '60" x 24" x 50"',
      "Warranty": "5-Year",
    },
  },
  {
    id: "weld-arcmaster-250",
    name: "ArcMaster 250 MIG Welder",
    category: "welders",
    subcategory: "MIG",
    image: welderImg,
    price: 2199,
    rating: 4.6,
    reviewCount: 156,
    power: "250A",
    weight: "95 lbs",
    description: "Professional MIG welder with advanced inverter technology. Provides smooth, stable arc performance across a wide range of materials and thicknesses.",
    specs: {
      "Amperage Range": "30-250A",
      "Input Power": "240V / 50A",
      "Wire Feed Speed": "50-600 IPM",
      "Duty Cycle": "60% @ 250A",
      "Wire Diameter": ".023-.045\"",
      "Welding Processes": "MIG, Flux-Core",
      "Material Thickness": '24 ga - 1/2"',
      "Spool Size": "10 lb",
      "Dimensions": '20" x 12" x 16"',
      "Warranty": "3-Year",
    },
  },
  {
    id: "light-beacon-4000",
    name: "Beacon 4000 Light Tower",
    category: "lighting",
    subcategory: "Diesel",
    image: lightingImg,
    price: 8999,
    rating: 4.8,
    reviewCount: 78,
    power: "4,000W Metal Halide",
    weight: "1,850 lbs",
    badge: "Pro Grade",
    description: "Towering illumination solution for large job sites and events. Hydraulic mast extends to 30 feet with 360° rotation for maximum coverage area.",
    specs: {
      "Light Output": "4x 1,000W Metal Halide",
      "Coverage Area": "5+ Acres",
      "Mast Height": "30 ft (Hydraulic)",
      "Rotation": "360° Manual",
      "Generator": "6kW Diesel",
      "Fuel Tank": "30 Gallons",
      "Run Time": "60+ hrs",
      "Tow Speed": "65 mph",
      "Dimensions": '15\' x 5.5\' x 8.5\' (towing)',
      "Warranty": "2-Year",
    },
  },
  {
    id: "wash-blastforce-4400",
    name: "BlastForce 4400 PSI Washer",
    category: "washers",
    subcategory: "Gas",
    image: washerImg,
    price: 899,
    rating: 4.7,
    reviewCount: 412,
    power: "4,400 PSI",
    weight: "88 lbs",
    badge: "Best Value",
    description: "Maximum cleaning power for the toughest jobs. Commercial-grade triplex pump and powerful engine deliver 4,400 PSI for stripping paint, removing concrete splatter, and deep cleaning.",
    specs: {
      "Max PSI": "4,400 PSI",
      "Flow Rate": "4.0 GPM",
      "Engine": "420cc OHV",
      "Pump": "Triplex Plunger (AAA)",
      "Hose Length": "50 ft",
      "Nozzles": "5 Quick-Connect",
      "Chemical Injection": "Downstream",
      "Wheels": '14" Pneumatic',
      "Dimensions": '36" x 26" x 38"',
      "Warranty": "3-Year Consumer / 1-Year Commercial",
    },
  },
];

export const testimonials = [
  {
    name: "Mike Richardson",
    role: "General Contractor",
    company: "Richardson Builds LLC",
    text: "The Titan 9500W has been bulletproof on our sites. We run it 12 hours a day, 6 days a week. Never missed a beat.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Facilities Manager",
    company: "Northwest Industrial Park",
    text: "Switched our entire fleet to ForgeWorks equipment. The build quality and after-sales support are in a different league.",
    rating: 5,
  },
  {
    name: "Dave Kowalski",
    role: "Ranch Owner",
    company: "Kowalski Farms",
    text: "The BlastForce pressure washer handles everything — barn siding, equipment, concrete pads. Worth every penny.",
    rating: 5,
  },
];

export const stats = [
  { value: "50+", label: "Years of Engineering" },
  { value: "2M+", label: "Units Sold Worldwide" },
  { value: "1,200+", label: "Authorized Dealers" },
  { value: "99.7%", label: "Customer Satisfaction" },
];
