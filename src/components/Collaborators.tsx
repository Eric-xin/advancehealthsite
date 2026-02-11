import Image from "next/image";

const collaborators = [
  {
    name: "Collaborator 1",
    image: "/collaborator/Open Incubator Logo-2.png",
  },
  {
    name: "Collaborator 2",
    image: "/collaborator/Trinity-Main-Logo.jpg",
  },
  // {
  //   name: "Collaborator 3",
  //   image: "/collaborators/collaborator3.png",
  // },
  // {
  //   name: "Collaborator 4",
  //   image: "/collaborators/collaborator4.png",
  // },
];

export default function Collaborators() {
  return (
    <section id="collaborators" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Our Collaborators
        </h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={collaborator.image}
                alt={collaborator.name}
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
