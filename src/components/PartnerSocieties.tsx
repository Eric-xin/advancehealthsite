import Image from "next/image";

const partnerSocieties = [
  {
    name: "Partner Society 1",
    image: "/partners/partner1.png",
  },
  {
    name: "Partner Society 2",
    image: "/partners/partner2.png",
  },
  {
    name: "Partner Society 3",
    image: "/partners/partner3.png",
  },
  {
    name: "Partner Society 4",
    image: "/partners/partner4.png",
  },
];

export default function PartnerSocieties() {
  return (
    <section id="partners" className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Partner Societies
        </h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {partnerSocieties.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={200}
                height={128}
                className="h-32 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
