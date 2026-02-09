import { Link } from "react-router-dom";
import { ArrowRight, Target, Telescope, Diamond, Calendar, Award, Users, Globe, Star, Wrench, Shield, Zap, Cpu, Leaf, Recycle, Droplets, Sun, Factory, FlaskConical, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const milestones = [
  { year: "1998", title: "The Beginning", description: "Founded with a vision to create American-made heavy-duty equipment. Started with a team of 12 engineers and our first hydraulic press model." },
  { year: "2003", title: "Expansion", description: "Opened second manufacturing facility and expanded product line to include excavation equipment. Reached 1,000 units sold." },
  { year: "2008", title: "Innovation Breakthrough", description: "Launched proprietary SmartControl™ technology, revolutionizing operator efficiency and fuel consumption. Won Industry Innovation Award." },
  { year: "2012", title: "Going Global", description: "Established international dealer network across 15 countries. Opened European distribution center." },
  { year: "2015", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification, demonstrating commitment to quality management systems and continuous improvement." },
  { year: "2018", title: "20 Year Anniversary", description: "Celebrated 20 years of excellence with the launch of our most advanced product line. Surpassed 250,000 units produced." },
  { year: "2022", title: "Sustainability Commitment", description: "Announced carbon-neutral manufacturing goal by 2030. Launched EcoPerformance™ line with 40% reduced emissions." },
  { year: "2024", title: "Next Generation", description: "Introduced AI-powered diagnostics and IoT connectivity across entire product range. Expanded dealer network to 45 countries." },
  { year: "2025", title: "Today", description: "Leading the industry with innovative solutions, serving 10,000+ customers globally, continuing our legacy of American engineering excellence." },
];

const leadership = [
  { name: "John Anderson", title: "Chief Executive Officer", bio: "With over 30 years in heavy equipment manufacturing, John leads our vision for innovation and global growth. Previously VP of Engineering at a major industrial firm, he brings deep expertise and a passion for quality." },
  { name: "Sarah Martinez", title: "Chief Operating Officer", bio: "Sarah oversees all manufacturing operations, ensuring every product meets rigorous quality standards. Her 20+ years in industrial operations management and Six Sigma Black Belt certification drive operational excellence." },
  { name: "Dr. Michael Chen", title: "VP of Engineering & Innovation", bio: "Michael leads our R&D team in developing next-generation equipment technology. With a PhD in Mechanical Engineering from MIT and 50+ patents, he's at the forefront of hydraulic systems innovation." },
  { name: "Jennifer Williams", title: "VP of Customer Success", bio: "Jennifer ensures customers receive world-class support and training. With 15 years in industrial equipment sales and service, she built our global dealer network from the ground up." },
  { name: "Robert Taylor", title: "Chief Financial Officer", bio: "Robert brings 25 years of financial leadership in industrial manufacturing. His strategic vision has guided our investments in R&D and global expansion while maintaining strong financial discipline." },
  { name: "Lisa Nakamura", title: "Head of Quality Control", bio: "Lisa oversees our multi-stage quality inspection process across all facilities. Her expertise in industrial testing standards ensures every product exceeds performance specifications before shipping." },
];

const facilities = [
  { name: "Main Manufacturing Campus", location: "Houston, TX", size: "300,000 sq ft", details: ["24/7 operations", "ISO 9001 certified", "350+ skilled employees", "On-site R&D laboratory"] },
  { name: "Hydraulics Specialization Center", location: "Milwaukee, WI", size: "150,000 sq ft", details: ["Hydraulic systems production", "Testing & validation center", "Custom fabrication capabilities"] },
  { name: "Distribution & Training Hub", location: "Atlanta, GA", size: "50,000 sq ft", details: ["Customer training center", "Parts distribution", "Service & support headquarters"] },
];

const certifications = [
  "ISO 9001:2015 — Quality Management",
  "ISO 14001:2015 — Environmental Management",
  "OSHA Safety Standards Compliance",
  "EPA Tier 4 Emissions Compliant",
  "CE Marking (European Conformity)",
  "ANSI/ASME Safety Standards",
  "UL Listed Components",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={heroBg} alt="ForgeWorks manufacturing facility" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.4)] to-[rgba(15,23,42,0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.95)] via-[rgba(15,23,42,0.85)] to-[rgba(15,23,42,0.3)]" />
        <div className="relative container-wide">
          <span className="badge-category [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">Our Story</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.7)]">
            Building Tomorrow's Infrastructure<br />
            <span className="text-accent">with Today's Innovation</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-100/90 max-w-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">
            For over 25 years, we've been the trusted partner for professionals who demand reliability, durability, and performance from their heavy-duty equipment.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-black">Who We Are</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 1998, ForgeWorks has grown from a small American engineering firm into a leading manufacturer of heavy-duty power equipment trusted by professionals across 45 countries. Our commitment to quality, innovation, and customer service has made us the go-to choice for contractors, manufacturers, and industrial operators who refuse to compromise.</p>
              <p>What sets us apart is our unwavering dedication to American engineering excellence. Every product we design undergoes rigorous testing and quality control to ensure it meets the demanding standards of real-world applications. We don't just build equipment — we build partnerships that last decades.</p>
              <p>Today, we serve thousands of customers worldwide through a network of 1,200+ authorized dealers, offering not just products, but comprehensive support, training, and service that keeps your operations running smoothly.</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, value: "25+", label: "Years of Excellence" },
                { icon: Factory, value: "500K+", label: "Units Produced" },
                { icon: Globe, value: "45", label: "Countries Served" },
                { icon: Star, value: "4.8/5", label: "Customer Rating" },
                { icon: Users, value: "10,000+", label: "Customers Worldwide" },
                { icon: Wrench, value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl border p-4 text-center card-hover">
                  <stat.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-black text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-muted rounded-xl p-6">
              <h3 className="font-bold mb-3">Certifications</h3>
              <ul className="space-y-2">
                {certifications.slice(0, 4).map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-accent shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", text: "To deliver heavy-duty engineered products that exceed industry standards and empower professionals to complete their projects safely, efficiently, and profitably." },
              { icon: Telescope, title: "Our Vision", text: "To be the global leader in heavy-duty equipment innovation, recognized for our commitment to sustainability, technological advancement, and the success of our customers." },
              { icon: Diamond, title: "Our Values", text: "Quality First · Innovation Driven · Customer Focused · Safety Paramount · Integrity Always · Sustainability Minded" },
            ].map((card) => (
              <div key={card.title} className="bg-card rounded-xl border p-8 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <card.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`md:flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="bg-card rounded-xl border p-6 card-hover inline-block text-left">
                      <span className="text-sm font-bold text-accent">{m.year}</span>
                      <h3 className="text-lg font-bold mt-1">{m.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" style={{ top: `${i * (100 / (milestones.length - 1))}%` }} />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Leadership Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Industry veterans with decades of combined experience driving innovation in heavy-duty equipment manufacturing.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="bg-card rounded-xl border p-6 card-hover">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="text-sm text-accent font-medium">{person.title}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">World-Class Facilities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Over 500,000 square feet of state-of-the-art manufacturing across three US locations, equipped with cutting-edge CNC machinery and robotic assembly.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div key={f.name} className="bg-card rounded-xl border p-6 card-hover">
                <div className="flex items-center gap-2 mb-1">
                  <Factory className="h-5 w-5 text-accent" />
                  <h3 className="font-bold">{f.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{f.location} · {f.size}</p>
                <ul className="mt-4 space-y-2">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-3 w-3 text-accent shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Uncompromising Quality</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Every product undergoes rigorous multi-stage testing. Our quality isn't just a promise — it's backed by industry-leading certifications.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border p-8">
              <h3 className="font-bold text-lg mb-4">Testing & Validation</h3>
              <ul className="space-y-3">
                {["100% component inspection", "Load testing to 150% rated capacity", "1,000+ hour endurance testing", "Environmental stress testing (-40°F to 130°F)", "Safety system verification", "Field validation with real customers"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-accent shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl border p-8">
              <h3 className="font-bold text-lg mb-4">Certifications & Compliance</h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-accent shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & R&D */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Innovation That Drives Industry Forward</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Zap, title: "Electrification & Hybrid", text: "Next-gen electric and hybrid powertrains delivering full performance with zero emissions." },
              { icon: Cpu, title: "Automation & AI", text: "Machine learning for predictive maintenance, optimized performance, and operator assistance." },
              { icon: Globe, title: "IoT Connectivity", text: "Real-time monitoring, remote diagnostics, and fleet management through our cloud platform." },
              { icon: Recycle, title: "Sustainable Manufacturing", text: "Renewable energy, recycled materials, and circular economy principles across operations." },
              { icon: Shield, title: "Advanced Safety", text: "Collision avoidance, presence detection, and emergency response technologies." },
              { icon: FlaskConical, title: "Materials Science", text: "Advanced alloys and composites for lighter, stronger, longer-lasting equipment." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl border p-6 card-hover">
                <item.icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Patents Held" },
              { value: "$12M+", label: "Annual R&D Investment" },
              { value: "25", label: "Dedicated Engineers" },
              { value: "15%", label: "Revenue → Innovation" },
            ].map((s) => (
              <div key={s.label} className="bg-muted rounded-xl p-6">
                <div className="text-2xl md:text-3xl font-black text-accent">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Building a Sustainable Future</h2>
          <p className="text-center text-primary-foreground/70 mb-12 max-w-2xl mx-auto">Our sustainability commitment goes beyond compliance — it's integral to our business strategy.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              { icon: Leaf, label: "Carbon Neutral Manufacturing" },
              { icon: Recycle, label: "100% Recyclable Packaging" },
              { icon: Droplets, label: "50% Water Reduction" },
              { icon: Sun, label: "75% Renewable Energy" },
              { icon: Factory, label: "Zero Waste to Landfill" },
            ].map((goal) => (
              <div key={goal.label} className="bg-primary-foreground/10 rounded-xl p-5 text-center">
                <goal.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-sm font-semibold">{goal.label}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">2030 Goal</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "30%", label: "Emissions Reduced Since 2020" },
              { value: "85%", label: "Waste Recycled or Repurposed" },
              { value: "2.5MW", label: "Solar Capacity Installed" },
              { value: "40%", label: "Lower Emissions (Eco Line)" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-accent">{stat.value}</div>
                <div className="text-xs text-primary-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-black">Ready to Partner With Us?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Connect with our team to learn how ForgeWorks equipment can power your next project.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-cta text-base">Request a Quote <ArrowRight className="h-5 w-5" /></Link>
            <Link to="/dealers" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold border-2 border-primary text-primary rounded-lg transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Find a Dealer</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
