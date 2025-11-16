import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const TestimonialCard = ({ name, role, company, quote }: TestimonialCardProps) => {
  return (
    <Card className="border-0 bg-card p-6 shadow-medium transition-all hover:shadow-large">
      <Quote className="mb-4 h-8 w-8 text-secondary" />
      <p className="mb-6 text-foreground">{quote}</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role} At {company}</p>
      </div>
    </Card>
  );
};
