// components/motion/TypingTitle.tsx

type TypingTitleProps = {
  text: string;
  className?: string;
  speedMs?: number;
};

export default function TypingTitle({ text, className }: TypingTitleProps) {
  return <h1 className={className}>{text}</h1>;
}