export default function MapSection() {
  return (
    <section className="relative h-[420px] w-full grayscale-[15%] contrast-[1.05]">
      <iframe
        title="Sacred Buddhist circuit map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234567.0!2d84.99!3d24.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </section>
  );
}
