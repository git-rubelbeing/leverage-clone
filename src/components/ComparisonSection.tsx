import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ComparisonSection = () => {
  const weAre = [
    "Aligned execution team.",
    "Extension of your team.",
    "Full-stack support.",
    "ROI-focused and accountable.",
    "Structured with PMs & SOPs.",
    "Scalable with your growth.",
    "Embedded in your workflow & rhythm.",
    "Synced across EST & BST.",
  ];

  const weAreNot = [
    "Transactional vendor.",
    "Gig-based freelancers.",
    "Isolated, unaccountable workers.",
    "Hourly, outcome-agnostic service.",
    "Disorganized with unclear roles.",
    "Rigid and inflexible staffing.",
    "High-churn, low-loyalty vendor.",
    "Unavailable when it counts.",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-5xl">
          Who Are We — And Who Are We Not
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-2 border-secondary bg-secondary/5 p-8 shadow-medium">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">We Are</h3>
            </div>
            <ul className="space-y-3">
              {weAre.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-2 border-border bg-card p-8 shadow-medium">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <X className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">We Are Not</h3>
            </div>
            <ul className="space-y-3">
              {weAreNot.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
