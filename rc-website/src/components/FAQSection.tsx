"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * A single FAQ entry. The `answer` field accepts any React node so that
 * rich‑text coming from a CMS (e.g. Markdown, PortableText) can be dropped in
 * without additional parsing logic.
 */
export interface FAQItem {
  /** A unique and stable value – ideally the CMS slug */
  id: string;
  question: string;
  answer: React.ReactNode;
}

type AccordionSingleProps = Omit<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  "type" | "value"
> & {
  type: "single";
  collapsible?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

type AccordionMultipleProps = Omit<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  "type" | "value"
> & {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export interface FAQSectionProps {
  /**
   * Section heading. If you want to keep the primary‑color highlight, include
   * the word you want highlighted in `highlightWord` instead.
   */
  title?: string;
  /** The word inside the title that should receive the primary‑color class. */
  highlightWord?: string;
  /**
   * Array of FAQ items. In most cases this will come straight from your CMS
   * as JSON. If omitted, `defaultItems` are rendered.
   */
  items?: FAQItem[];
  /**
   * Forwarded props for the underlying Accordion. Useful if you want to switch
   * to `multiple` mode or adjust other shadcn/ui accordion options from the
   * page level.
   */
  accordionProps?: Omit<AccordionProps, "type" | "collapsible" | "className">;
  /**
   * Whether the accordion items can be collapsed after expanding.
   * Only applies when type is "single".
   */
  collapsible?: boolean;
  /**
   * The type of accordion behavior: "single" allows only one item open at a time,
   * "multiple" allows multiple items to be open simultaneously.
   */
  type?: "single" | "multiple";
}

/**
 * Fallback data so the component renders out‑of‑the‑box before the CMS is
 * connected. Feel free to delete once you have real data.
 */
const defaultItems: FAQItem[] = [
  {
    id: "what-is-rc",
    question: "What is Robotics Collective .?",
    answer: (
      <>
        Robotics Collective e.V. is a non‑profit organisation that unites
        individuals, researchers, and industry partners to accelerate robotics adaption and intelligent robotics system developement.
      </>
    ),
  },
  {
    id: "how-to-join",
    question: "How can I join the collective?",
    answer:
      "Fill out the membership form or schedule a call with us if you are a company/research institute",
  },
  {
    id: "need-experience",
    question: "Do I need technical experience to join?",
    answer:
      "Not at all. We welcome everyone from curious beginners to experienced roboticists. Beyond the technical side, skills in organization, marketing, and partnership management are essential to keeping things running and growing — so if that’s your strength, we’d love to have you on board.",
  },
  {
    id: "project-types",
    question: "What types of projects do you incubate?",
    answer:
      "We work on all kinds of projects that push embodied AI forward — like mobile robots, machine learning for perception, mechanical design, and human-robot interaction. From building something new or improving existing systems. We also encourage everyone to explore their own ideas, with the support and inspiration of the community.",
  },
  {
    id: "events",
    question: "How often do you host events & workshops?",
    answer:
      "We host a community meetup in Aachen every six months, usually at the beginning of each semester. In addition, we meet weekly on Saturdays and sometimes during the week for smaller sessions. We also organize ad-hoc hackathons and deep-dive workshops throughout the year. Become a community member to stay up-to-date and participate in future events.",
  },
  {
    id: "orm-status",
    question: "What happened to open robotic metaverse?",
    answer:
      "open robotic metaverse has transitioned from an independent association into a dedicated open-source project living on github, continuing to develop the vision of browser‑based simulation.",
  },
];

const highlightSentence = (
  title: string,
  highlightWord: string | undefined
): React.ReactNode => {
  if (!highlightWord || !title.includes(highlightWord)) return title;
  const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
  return parts.map((part, idx) =>
    part.toLowerCase() === highlightWord.toLowerCase() ? (
      <span key={idx} className="text-primary">
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  highlightWord = "Asked",
  items = defaultItems,
  accordionProps,
  collapsible = true,
  type = "single",
}) => {
  // Separate accordionProps into common props and type-specific props
  const { value, defaultValue, onValueChange, ...restAccordionProps } =
    accordionProps || {};

  // Create properly typed accordion props based on the type
  const accordionConfig =
    type === "single"
      ? {
          type: "single" as const,
          collapsible,
          value: typeof value === "string" ? value : undefined,
          defaultValue:
            typeof defaultValue === "string" ? defaultValue : undefined,
          onValueChange: onValueChange as ((value: string) => void) | undefined,
        }
      : {
          type: "multiple" as const,
          value: Array.isArray(value) ? value : undefined,
          defaultValue: Array.isArray(defaultValue) ? defaultValue : undefined,
          onValueChange: onValueChange as
            | ((value: string[]) => void)
            | undefined,
        };

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {highlightSentence(title, highlightWord)}
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion
            className="w-full"
            {...accordionConfig}
            {...restAccordionProps}
          >
            {items.map(({ id, question, answer }) => (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger className="text-lg font-medium">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {typeof answer === "string" ? <p>{answer}</p> : answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
