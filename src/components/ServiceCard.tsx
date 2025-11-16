import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  services: string[];
  price: string;
  iconColor?: string;
}

export const ServiceCard = ({ icon: Icon, title, services, price, iconColor = "primary" }: ServiceCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary group-hover:bg-primary",
    secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary",
    accent: "bg-accent/10 text-accent group-hover:bg-accent",
  };

  return (
    <Card className="group overflow-hidden border-0 bg-card p-6 shadow-medium transition-all hover:-translate-y-2 hover:shadow-large">
      <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${colorClasses[iconColor as keyof typeof colorClasses]} transition-all group-hover:text-white`}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>
      <ul className="mb-4 space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            {service}
          </li>
        ))}
      </ul>
      <div className="mb-4 border-t pt-4">
        <p className="text-sm text-muted-foreground">Starting From</p>
        <p className="text-2xl font-bold text-foreground">{price}</p>
      </div>
      <Button variant="ghost" className="group/btn w-full justify-between p-0 text-primary hover:bg-transparent">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </Card>
  );
};
