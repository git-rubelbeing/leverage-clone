import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  ArrowRight,
  Clock,
  DollarSign,
  Battery,
  Hash,
  Video,
  Globe,
  Linkedin,
  Database,
  Headphones,
  Briefcase,
  Building2,
  Users,
  Settings,
  Smartphone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Music,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import operationalWheel from "@/assets/operational-wheel.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Offshore Your Way to Profits
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                Stop doing $5/hr tasks.
                <br />
                <span className="text-secondary">Focus on $500/hr value creation.</span>
              </h1>
              <p className="mb-8 text-lg text-white/90 md:text-xl">
                Let Get Levrg be your Sales & Marketing Resource.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="group text-lg shadow-large">
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-lg text-white backdrop-blur-sm hover:bg-white/20"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroBanner}
                alt="Professional team collaboration"
                className="rounded-2xl shadow-large"
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">Who do we serve?</h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Founder-led companies. Small-to-medium businesses with 1–500 employees that are resource-constrained.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-5xl">
            You're Not Alone. We've Been There.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-card p-8 text-center shadow-medium">
              <Clock className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-3 text-xl font-bold text-foreground">Time</h3>
              <p className="text-muted-foreground">Buried in admin tasks, no time to grow.</p>
            </Card>
            <Card className="border-0 bg-card p-8 text-center shadow-medium">
              <DollarSign className="mx-auto mb-4 h-12 w-12 text-secondary" />
              <h3 className="mb-3 text-xl font-bold text-foreground">Money</h3>
              <p className="text-muted-foreground">Paying premium rates for basic work.</p>
            </Card>
            <Card className="border-0 bg-card p-8 text-center shadow-medium">
              <Battery className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-3 text-xl font-bold text-foreground">Energy</h3>
              <p className="text-muted-foreground">Doing it all, burning out fast.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* How We Help Section */}
      <section id="how-we-help" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-5xl">
            How do we help you?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-muted-foreground">
            We Fix What's Slowing You Down
          </p>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src={operationalWheel}
                alt="Revenue Operational Support"
                className="mx-auto rounded-2xl shadow-medium"
              />
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground md:text-4xl">
                Stop Your Team From Doing $5/hr Tasks.
              </h3>
              <p className="mb-6 text-lg text-muted-foreground">
                Forget about compromising quality with our outstanding offshore talents.
              </p>
              <div className="space-y-4 rounded-xl bg-primary/5 p-6">
                <p className="text-lg font-semibold text-foreground">You can't maximize profits if…</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Your employee costs are skyrocketing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Your team is stuck doing non revenue-generating work.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 rounded-xl bg-secondary/10 p-6">
                <p className="mb-2 text-lg font-semibold text-foreground">
                  We enable you with talented sales & marketing resources
                </p>
                <p className="text-3xl font-bold text-secondary">Starting at $2,497/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-4 text-lg font-semibold text-primary">On-Demand resources you can turn on like a lightswitch</p>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
              Focus on growing your business while reducing costs and improving margins
            </h2>
          </div>

          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">GO DEEP INTO A CAPABILITY:</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={Hash}
                title="Social Media and Content Marketing"
                services={["Copy-Caption Writing", "Image Designing", "Blog Writing", "Content Strategy"]}
                price="$2,997/mo"
                iconColor="primary"
              />
              <ServiceCard
                icon={Video}
                title="Video Editing"
                services={["Shorts", "Long Videos", "Podcasts", "Motion Graphics"]}
                price="$2,997/mo"
                iconColor="secondary"
              />
              <ServiceCard
                icon={Globe}
                title="Website Optimization"
                services={["Regular Content Updates", "Plugin & Theme Updates", "Security Monitoring", "On-page SEO"]}
                price="$2,997/mo"
                iconColor="accent"
              />
              <ServiceCard
                icon={Linkedin}
                title="LinkedIn Campaign"
                services={["Campaign Design", "Database Development", "LinkedIn Prospecting", "Response Management"]}
                price="$2,997/mo"
                iconColor="primary"
              />
              <ServiceCard
                icon={Database}
                title="Sales Data & CRM Optimization"
                services={["Email/LinkedIn Prospecting", "Database Enrichment", "Pre/Post Meeting Summaries", "CRM Updates"]}
                price="$2,997/mo"
                iconColor="secondary"
              />
              <ServiceCard
                icon={Headphones}
                title="Go-To-Market"
                services={["Support Ticket Management", "Customer Request Management", "CRM Updates", "SOP Creation & Editing"]}
                price="$2,997/mo"
                iconColor="accent"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">GO WIDE ACROSS CAPABILITIES:</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ServiceCard
                icon={Briefcase}
                title="Agency Fulfillment"
                services={["Sales Data & CRM Optimization", "LinkedIn Campaign", "Video Editing", "Social Media and Content Marketing", "Activate Services Anytime as Needed"]}
                price="$3,997/mo"
                iconColor="primary"
              />
              <ServiceCard
                icon={Building2}
                title="Internal Agencies"
                services={["Social Media and Content Marketing", "Video Editing", "Website Optimization", "LinkedIn Campaign", "Sales Data and CRM Optimization"]}
                price="$3,997/mo"
                iconColor="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* People Process Technology Section */}
      <section id="people-process-tech" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-5xl">
            People, Process, Technology- In-A-Box
          </h2>

          <div className="mb-16 grid gap-12 md:grid-cols-3">
            <Card className="border-0 bg-card p-8 shadow-medium">
              <Users className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-2xl font-bold text-foreground">People</h3>
              <p className="mb-6 text-muted-foreground">
                Our teams work on your schedule. Whether you need support during North American hours or prefer progress to happen while you sleep, the choice is yours.
              </p>
              <div className="rounded-lg bg-muted p-4">
                <p className="mb-4 font-semibold text-foreground">Our Professional Team Is Ready To Serve You</p>
                <img src={teamPhoto} alt="Our team" className="rounded-lg" />
              </div>
            </Card>

            <Card className="border-0 bg-card p-8 shadow-medium">
              <Settings className="mb-4 h-12 w-12 text-secondary" />
              <h3 className="mb-4 text-2xl font-bold text-foreground">Process</h3>
              <p className="mb-6 text-muted-foreground">
                We have existing Standard Operating Procedures (SOPs) ready to go for every capability. Take advantage of our "plug-in-play" model, and/or we alter an existing SOP to match your existing workflow.
              </p>
              <div className="rounded-lg bg-secondary/10 p-4">
                <p className="font-semibold text-foreground">Access to our internal SOP Library on Thinkific</p>
                <p className="mt-2 text-sm text-muted-foreground">Templates, workflows, and playbooks used by our team to execute fast and scale smarter.</p>
              </div>
            </Card>

            <Card className="border-0 bg-card p-8 shadow-medium">
              <Smartphone className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-4 text-2xl font-bold text-foreground">Technology</h3>
              <p className="mb-6 text-muted-foreground">
                We already have licenses and workflows with the following platforms. Or, we can leverage yours.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Project Management:</span> Trello, Notion, Asana, ClickUp, Monday</p>
                <p><span className="font-semibold text-foreground">CRMs:</span> HubSpot, Salesforce, Zoho, Microsoft Dynamic</p>
                <p><span className="font-semibold text-foreground">Creative:</span> Adobe Suite, Figma, Canva</p>
                <p><span className="font-semibold text-foreground">AI Tools:</span> ChatGPT, Clay, Gemini Pro, Descript</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team-Based Model Section */}
      <section id="team-model" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-5xl">
            Why the Team-Based Model is Best for SMBs
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
            Small and mid-sized businesses don't just need help—they need leverage. Our team-based model gives you that leverage.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Cost-Efficiency", description: "Access top global talent at a fraction of the cost." },
              { title: "Scalability", description: "Scale up or down without the complexity of internal hiring." },
              { title: "Cultural Alignment", description: "We are a team that understands your voice, brand, and goals." },
              { title: "Accountability & Results", description: "KPI-tracked, SOP-backed execution focused on outcomes, not hours." }
            ].map((item, index) => (
              <Card key={index} className="border-0 bg-card p-6 shadow-medium">
                <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-5xl">
            Still Unsure? See what founders like you say about us!
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              name="Joseph Hillock"
              role="Marketing Manager"
              company="Client Focus LLC"
              quote="Smart strategy, audience alignment, and truly expert support from Get Levrg."
            />
            <TestimonialCard
              name="Aizat Paharodzi"
              role="Creative Video Lead"
              company="2X"
              quote="Flawless teamwork—Get Levrg made everything smooth and effortless."
            />
            <TestimonialCard
              name="Jennifer King"
              role="Co-founder and CEO"
              company="DeStor RevOps"
              quote="A wave of sharp, strategic responses—executed flawlessly by Get Levrg."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section id="about" className="bg-gradient-to-br from-primary via-primary to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to experience the offshoring advantage?
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Schedule a meeting to let us walk you through the perks and benefits of offshoring. Or explore the services in detail.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="group text-lg shadow-large">
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-lg text-white backdrop-blur-sm hover:bg-white/20"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-primary">Get Levrg</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                We help founders and CEOs navigate the murky waters of scaling offshore talent.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Music className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Pages</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-muted-foreground hover:text-primary">Services</a></li>
                <li><a href="#resources" className="text-muted-foreground hover:text-primary">Resources</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>416-409-4999</li>
                <li>sales@getlevrg.com</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Office Addresses</h4>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="mb-1 font-medium text-foreground">Canada:</p>
                  <p>2 Bloor Street West, Suite 700<br />Toronto, Ontario M4W 3E2</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">Bangladesh:</p>
                  <p>Apartment- A3, Plot No Suvastu Batayan<br />House 12, Road No 6, Banani, Dhaka 1212</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>Copyright©2025 All rights Reserved | GetLevrg</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
