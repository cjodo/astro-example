// src/components/FAQ/FAQItem.tsx
import { h } from "preact";

type FAQItemProps = { question: string; answer: string };

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="faq-item border-b py-3">
      <h3 className="font-semibold text-lg">{question}</h3>
      <p className="mt-1 text-gray-700">{answer}</p>
    </div>
  );
}

