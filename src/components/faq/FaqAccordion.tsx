import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import type { FaqItem } from "@/i18n/translations";
import { cn } from "@/utils/cn";

type FaqAccordionProps = {
  items: FaqItem[];
  categories: Record<string, string>;
  allLabel: string;
  searchPlaceholder: string;
  noResults: string;
};

export default function FaqAccordion({
  items,
  categories,
  allLabel,
  searchPlaceholder,
  noResults,
}: FaqAccordionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return items.filter((item) => {
      const categoryMatch =
        activeCategory === "all" || item.category === activeCategory;
      const searchMatch =
        !normalized ||
        item.question.toLowerCase().includes(normalized) ||
        item.answer.toLowerCase().includes(normalized);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, items, query]);

  const categoryKeys = Object.keys(categories).filter((key) => key !== "all");

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="h-12 w-full rounded-full border border-white/10 bg-delta-black px-4 text-sm text-white outline-none placeholder:text-delta-lightGray/40 focus:border-delta-orange"
          />
          <div className="mt-4 grid gap-2">
            <CategoryButton
              active={activeCategory === "all"}
              label={allLabel}
              onClick={() => setActiveCategory("all")}
            />
            {categoryKeys.map((key) => (
              <CategoryButton
                key={key}
                active={activeCategory === key}
                label={categories[key]}
                onClick={() => setActiveCategory(key)}
              />
            ))}
          </div>
        </div>
      </aside>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-8 text-center text-delta-lightGray">
            {noResults}
          </div>
        ) : (
          filtered.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article
                key={`${item.category}-${item.question}`}
                className="rounded-lg border border-white/10 bg-delta-nearBlack"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center gap-4 p-5 text-start"
                >
                  <span className="flex-1 font-semibold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-delta-orange transition",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen ? (
                  <p className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-delta-lightGray/70">
                    {item.answer}
                  </p>
                ) : null}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}

function CategoryButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-start text-sm font-medium transition",
        active
          ? "bg-delta-orange text-delta-black"
          : "bg-delta-black text-delta-lightGray/70 hover:text-white"
      )}
    >
      {label}
    </button>
  );
}
