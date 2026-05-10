"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  HelpCircle,
  Search,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useMemo, useState } from "react";
import { faqCategories, faqItems, type FaqCategory } from "@/config/faq";
import { cn } from "@/utils/cn";

type InteractiveFaqProps = {
  dictionary: {
    searchPlaceholder: string;
    noResults: string;
    all: string;
    reactionTitle: string;
    yes: string;
    no: string;
    thanks: string;
    categories: Record<FaqCategory, string>;
    items: Record<
      string,
      {
        question: string;
        answer: string;
      }
    >;
  };
};

type SelectedCategory = FaqCategory | "all";

export default function InteractiveFaq({ dictionary }: InteractiveFaqProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("all");
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const [feedback, setFeedback] = useState<Record<string, "yes" | "no">>({});

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return faqItems.filter((item) => {
      const question = dictionary.items[item.questionKey.split(".")[0]]?.question ?? "";
      const answer = dictionary.items[item.answerKey.split(".")[0]]?.answer ?? "";

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchesSearch =
        !normalizedQuery ||
        question.toLowerCase().includes(normalizedQuery) ||
        answer.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [query, selectedCategory, dictionary.items]);

  function getItemText(itemKey: string, field: "question" | "answer") {
    const baseKey = itemKey.split(".")[0];
    return dictionary.items[baseKey]?.[field] ?? "";
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <div className="rounded-[2rem] border border-white/10 bg-delta-nearBlack p-5 shadow-card">
          <div className="relative">
            <Search className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-delta-lightGray/40" />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={dictionary.searchPlaceholder}
              className="
                h-13 w-full rounded-full border border-white/10 bg-delta-black
                pe-4 ps-12 text-sm text-white outline-none transition
                placeholder:text-delta-lightGray/35
                focus:border-delta-orange focus:ring-2 focus:ring-delta-orange/20
              "
            />
          </div>

          <div className="mt-5 grid gap-2">
            <CategoryButton
              label={dictionary.all}
              active={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
            />

            {faqCategories.map((category) => (
              <CategoryButton
                key={category}
                label={dictionary.categories[category]}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[2rem] border border-delta-orange/20 bg-delta-orange/10 p-5">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-delta-orange" />
            <p className="text-sm leading-6 text-delta-lightGray/70">
              FAQ reactions are useful for detecting unclear parts before launch.
            </p>
          </div>
        </div>
      </aside>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const isOpen = openId === item.id;
              const selectedFeedback = feedback[item.id];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, delay: index * 0.025 }}
                  className={cn(
                    "overflow-hidden rounded-[2rem] border bg-delta-nearBlack shadow-card transition",
                    isOpen
                      ? "border-delta-orange/45 shadow-glow"
                      : "border-white/10 hover:border-delta-orange/25"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center gap-4 p-6 text-start"
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition",
                        isOpen
                          ? "bg-delta-orange text-delta-black"
                          : "bg-delta-black text-delta-orange"
                      )}
                    >
                      <HelpCircle className="h-5 w-5" />
                    </span>

                    <span className="flex-1 text-lg font-semibold text-white">
                      {getItemText(item.questionKey, "question")}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-delta-lightGray/60"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="ms-[60px] border-s border-delta-orange/25 ps-5">
                            <p className="text-base leading-8 text-delta-lightGray/70">
                              {getItemText(item.answerKey, "answer")}
                            </p>

                            <div className="mt-6 rounded-3xl border border-white/10 bg-delta-black p-4">
                              {selectedFeedback ? (
                                <motion.div
                                  initial={{ scale: 0.95, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  className="flex items-center gap-3 text-sm font-medium text-delta-orange"
                                >
                                  <Check className="h-5 w-5" />
                                  {dictionary.thanks}
                                </motion.div>
                              ) : (
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                  <p className="text-sm text-delta-lightGray/50">
                                    {dictionary.reactionTitle}
                                  </p>

                                  <div className="flex gap-2">
                                    <ReactionButton
                                      label={dictionary.yes}
                                      icon="up"
                                      onClick={() =>
                                        setFeedback((current) => ({
                                          ...current,
                                          [item.id]: "yes",
                                        }))
                                      }
                                    />
                                    <ReactionButton
                                      label={dictionary.no}
                                      icon="down"
                                      onClick={() =>
                                        setFeedback((current) => ({
                                          ...current,
                                          [item.id]: "no",
                                        }))
                                      }
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-white/10 bg-delta-nearBlack p-10 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-delta-orange/10">
                <Search className="h-7 w-7 text-delta-orange" />
              </div>

              <p className="mt-5 text-lg font-semibold text-white">
                {dictionary.noResults}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-11 items-center justify-between rounded-full px-4 text-sm font-medium transition",
        active
          ? "bg-delta-orange text-delta-black"
          : "bg-delta-black text-delta-lightGray/60 hover:text-white"
      )}
    >
      <span>{label}</span>
      {active ? <Check className="h-4 w-4" /> : null}
    </button>
  );
}

function ReactionButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: "up" | "down";
  onClick: () => void;
}) {
  const Icon = icon === "up" ? ThumbsUp : ThumbsDown;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex h-10 items-center justify-center gap-2 rounded-full
        border border-white/10 bg-delta-nearBlack px-4 text-sm font-medium
        text-delta-lightGray/70 transition
        hover:border-delta-orange hover:text-white
      "
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}