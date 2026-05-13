type ContactCardProps = {
  title: string;
  body: string;
  email: string;
};

export default function ContactCard({ title, body, email }: ContactCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-delta-nearBlack p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-delta-lightGray/65">{body}</p>
      <a
        href={`mailto:${email}`}
        className="mt-5 inline-flex text-sm font-semibold text-delta-orange hover:text-white"
      >
        {email}
      </a>
    </article>
  );
}
