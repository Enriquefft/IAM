// FaqList.tsx — React island for the FAQ accordion.
// section-faq.jsx:44-67. Uses Radix Accordion for keyboard nav and aria-expanded.
// Hydrated with client:visible — see Faq.astro.
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FaqItemData } from "./data";

interface Props {
  readonly items: readonly FaqItemData[];
}

export function FaqList({ items }: Props) {
  return (
    // section-faq.jsx:46 — first item defaultOpen
    <Accordion type="single" collapsible defaultValue="faq-0">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          {/* section-faq.jsx:55-60 — trigger styling */}
          <AccordionTrigger className="py-5 font-sans text-h5 font-semibold text-text-primary hover:no-underline text-left">
            {item.q}
          </AccordionTrigger>
          {/* section-faq.jsx:61-65 — content styling */}
          <AccordionContent className="pb-5 pr-8 text-body text-text-secondary leading-relaxed">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
