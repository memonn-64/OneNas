import { Reveal } from "./motion";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-forest pb-14 pt-32">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
      </div>
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow eyebrow-on-dark">
            {eyebrow}
          </p>
          <h1 className="heading-xl mt-5 max-w-4xl text-4xl text-white md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
