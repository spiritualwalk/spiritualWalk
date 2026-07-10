import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/mahabodhi-2.jpg",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[380px] w-full flex items-center overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center w-full">
        <p className="eyebrow text-gold-soft mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl text-white font-medium">{title}</h1>
        {subtitle && <p className="quote-text text-gold-soft/90 text-lg mt-5 max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
