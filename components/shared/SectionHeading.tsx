type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-delta-lightGray/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}