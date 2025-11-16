import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Offshore Your Way to Profits
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Stop doing $5/hr tasks.
              <br />
              <span className="text-secondary">Focus on $500/hr value creation.</span>
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Let us be your Sales & Marketing Resource. Delegate tasks and focus on what matters most.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="group text-lg shadow-large">
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-lg text-white backdrop-blur-sm hover:bg-white/20">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
              Who do we serve?
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Founder-led companies. Small-to-medium businesses with 1–500 employees that are resource-constrained.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
              Offshore Services to Eliminate Your Bottlenecks
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Delegate tasks clogging your workflow to boost your productivity, efficiency, and growth simultaneously.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group cursor-pointer overflow-hidden border-0 bg-card p-8 shadow-medium transition-all hover:-translate-y-2 hover:shadow-large">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Go Deep</h3>
              <p className="mb-6 text-muted-foreground">
                Dive deep into specialized capabilities with dedicated offshore teams focused on your specific needs.
              </p>
              <Button variant="ghost" className="group/btn p-0 text-primary hover:bg-transparent">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 bg-card p-8 shadow-medium transition-all hover:-translate-y-2 hover:shadow-large">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-white">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Go Wide</h3>
              <p className="mb-6 text-muted-foreground">
                Scale across multiple business functions with versatile teams that adapt to your growing needs.
              </p>
              <Button variant="ghost" className="group/btn p-0 text-primary hover:bg-transparent">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 bg-card p-8 shadow-medium transition-all hover:-translate-y-2 hover:shadow-large">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-white">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Learn</h3>
              <p className="mb-6 text-muted-foreground">
                Access resources, guides, and expertise to master offshoring and maximize your business efficiency.
              </p>
              <Button variant="ghost" className="group/btn p-0 text-primary hover:bg-transparent">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Why Choose Us
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
                Revolutionizing the Offshoring Approach
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                We focus on maximizing your profitability and operational efficiency, specializing in recruiting and managing offshore talent to take your company to new heights of success.
              </p>
              <ul className="space-y-4">
                {[
                  "Maximize profitability with cost-effective solutions",
                  "Access top-tier offshore talent worldwide",
                  "Streamline operations and boost efficiency",
                  "Scale your business without overhead costs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <div className="flex h-full items-center justify-center">
                  <Users className="h-48 w-48 text-primary/20" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-primary/5" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Let's discuss how our offshore services can help you focus on what truly matters while we handle the rest.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="group text-lg shadow-large">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-lg text-white backdrop-blur-sm hover:bg-white/20">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Get Levrg. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
