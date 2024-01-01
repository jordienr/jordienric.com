import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PriceTag = ({ pricetag }: { pricetag: "free" | "paid" }) => {
  const classNames = cn(
    "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium mr-2",
    {
      "bg-green-100 text-green-800": pricetag === "free",
      "bg-orange-100 text-orange-800": pricetag === "paid",
    }
  );
  return (
    <span className={classNames}>{pricetag === "free" ? "Free" : "Paid"}</span>
  );
};

export function FAQ() {
  return (
    <Accordion
      type="multiple"
      className="w-full bg-white rounded-xl border shadow-sm"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>How did you make your website?</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>
              Nextjs 13 app router, TailwindCSS, TypeScript and Framer motion.
            </li>
            <li>Deployed to Vercel ▲.</li>
            <li>Components by RadixUI and Shadcn.</li>
            <li>
              The code is open and you can{" "}
              <Link
                className="text-blue-500 underline"
                href="https://github.com/jordienr/jordienric.com"
                target="_blank"
              >
                find it here.
              </Link>
            </li>
          </ul>
          <br />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What resources did you use to learn web development?
        </AccordionTrigger>
        <AccordionContent>
          <p>Here they are sorted by impact on my learning:</p>
          <ul className="flex mt-4 flex-col gap-1.5">
            <li>
              <PriceTag pricetag="free" />
              Trying to replicate cool things I see in the web
            </li>
            <li>
              <PriceTag pricetag="free" />
              Reading the code in open source repos
            </li>
            <li>
              <PriceTag pricetag="free" />
              Reading the docs of the tools I use
            </li>
            <li>
              <PriceTag pricetag="free" />
              Youtube
            </li>
            <li>
              <PriceTag pricetag="paid" />
              Frontend Masters
            </li>
            <li>
              <PriceTag pricetag="paid" />
              BuildUI
            </li>
            <li>
              <PriceTag pricetag="paid" />
              Frontend FYI
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger>How long have you been coding?</AccordionTrigger>
        <AccordionContent>Since 2016.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
