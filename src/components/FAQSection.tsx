import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How can I be assured of the performance level of your team?",
      answer: "We maintain high performance standards through rigorous recruitment, ongoing training, and clear KPI tracking. Our team members are carefully selected for their expertise and commitment to excellence. We provide regular performance reports and maintain transparent communication throughout our partnership.",
    },
    {
      question: "Are your teams fluent in English and capable of customer interactions?",
      answer: "Yes, all our team members are fluent in English and trained specifically for customer-facing roles. We prioritize communication skills during recruitment and provide ongoing training to ensure professional, clear, and effective interactions with your customers and stakeholders.",
    },
    {
      question: "What are your hours of operation?",
      answer: "We operate flexibly across multiple time zones, including EST and BST. Our teams can work during North American business hours or provide round-the-clock support based on your needs. We adapt our schedule to match your workflow and ensure seamless collaboration.",
    },
    {
      question: "What are the terms of engagement with your agency?",
      answer: "We offer flexible engagement models starting with quarterly commitments. Our packages begin at $2,997/month for specialized services. We focus on building long-term partnerships with clear deliverables, regular check-ins, and scalable solutions that grow with your business needs.",
    },
    {
      question: "What resources support your offshoring operations?",
      answer: "We provide comprehensive support including dedicated project managers, established SOPs, and access to premium tools and platforms. Our team has licenses for major CRMs, project management tools, design software, and AI-powered solutions to ensure efficient execution of all tasks.",
    },
    {
      question: "Which software and tools do you use to manage projects and tasks?",
      answer: "We work with industry-leading platforms including HubSpot, Salesforce, Monday, Asana, Notion, WordPress, Adobe Creative Suite, and many more. We can either use our existing licenses or integrate seamlessly with your current tech stack to maintain consistency in your workflows.",
    },
  ];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Still have questions? Mail us at{" "}
            <a href="mailto:sales@getlevrg.com" className="text-primary hover:underline">
              sales@getlevrg.com
            </a>
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-card px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
