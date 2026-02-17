import { motion } from "framer-motion";
import { ExternalLink, User as UserIcon } from "lucide-react";

import luisImg from "../assets/team/luis.jpg";
import nadavImg from "../assets/team/nadav.jpg";
import giosiaImg from "../assets/team/giosia.jpg";
import niccoloImg from "../assets/team/niccolo.jpg";
import chiaraImg from "../assets/team/chiara.jpg";
import sofiaImg from "../assets/team/sofia.jpg";

const teamMembers = [
  {
    name: "Luis Irusta",
    website: "",
    image: luisImg,
    color: "bg-[#4f60f0]/10 text-[#4f60f0]",
  },
  {
    name: "Nadav Moscovici",
    website: "https://www.nadavmoscovici.com",
    image: nadavImg,
    color: "bg-[#f04fb1]/10 text-[#f04fb1]",
  },
  {
    name: "Giosia Pacilli",
    website: "",
    image: giosiaImg,
    color: "bg-[#4ff08f]/10 text-[#4ff08f]",
  },
  {
    name: "Niccolò Papini",
    website: "",
    image: niccoloImg,
    color: "bg-[#f0df4f]/10 text-[#f0df4f]",
  },
  {
    name: "Chiara Santovito",
    website: "",
    image: chiaraImg,
    color: "bg-[#4f60f0]/10 text-[#4f60f0]",
  },
  {
    name: "Sofia Sardelli",
    website: "",
    image: sofiaImg,
    color: "bg-[#f04fb1]/10 text-[#f04fb1]",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">Il Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Le menti dietro Catalyst e REE, dedicate a trasformare il riuso
            urbano.
          </p>
        </motion.div>

        {/* Grid adapted for square cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => {
            const hasLink = member.website && member.website.trim() !== "";
            const hasImage = member.image && member.image.trim() !== "";

            // Determine wrapper: <a> if link exists, <div> otherwise
            const Wrapper = hasLink ? "a" : "div";
            const wrapperProps = hasLink
              ? {
                  href: member.website,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block h-full w-full",
                }
              : {
                  className: "block h-full w-full",
                };

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative aspect-square rounded-3xl overflow-hidden border border-border/50 bg-card 
                  transition-all duration-300 shadow-sm
                  ${hasLink ? "cursor-pointer hover:shadow-2xl" : "cursor-default"}
                `}
              >
                {/* @ts-ignore */}
                <Wrapper {...wrapperProps}>
                  <CardContent
                    member={member}
                    hasImage={hasImage}
                    hasLink={hasLink}
                  />
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper component
function CardContent({
  member,
  hasImage,
  hasLink,
}: {
  member: any;
  hasImage: boolean;
  hasLink: boolean;
}) {
  return (
    <>
      {/* 1. Background Image or Placeholder */}
      <div className="absolute inset-0 z-0 bg-secondary/30 flex items-center justify-center">
        {hasImage ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <UserIcon className="w-24 h-24 text-muted-foreground/20" />
        )}
      </div>

      {/* 2. Standard Info (Name) - Visible by default at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-background/90 via-background/60 to-transparent">
        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
      </div>

      {/* 3. Hover Overlay (Only if website exists) */}
      {hasLink && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          {/* UPDATED TEXT STYLING */}
          <p className="text-white font-bold text-2xl mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-8 leading-tight">
            Visita il sito di {member.name}
          </p>
          <ExternalLink className="w-8 h-8 text-white/90 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75" />
        </div>
      )}
    </>
  );
}
