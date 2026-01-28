// src/loaders/faq.ts
export type FAQ = { question: string; answer: string };

export async function loadFAQs(): Promise<FAQ[]> {
  try {
    const res = await fetch(
      `${import.meta.env.PUBLIC_COCKPIT_API}/content/items/faq`
    );
    if (!res.ok) return [];

    const data = await res.json();

    // If the JSON is an array already, just return it
		console.log(data);
    return Array.isArray(data) 
      ? data.map((item: any) => ({ question: item.question, answer: item.answer }))
      : [];
  } catch (err) {
    console.error("Error loading FAQs:", err);
    return [];
  }
}

