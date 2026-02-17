import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Heart, School } from "lucide-react";

const timelineItems = [
  {
    title: "Needfinding, Analisi, Sintesi",
    desc: "Fase di ricerca iniziale che include sondaggi e interviste sul campo presso i mercatini dell'usato.",
    link: "https://docs.google.com/presentation/d/10X-FlHwe-61pFHnp4qmAcY-1cgci-hrdb-doqe3AAJ0/edit?usp=sharing",
    color: "#4f60f0",
  },
  {
    title: "Refinement e Project Focus",
    desc: "Restringimento del problema e definizione della nostra proposta di valore (Value Proposition).",
    link: "https://docs.google.com/presentation/d/1ZpOMXYYlZDetonScIpYy9J62oiiAmacNZXHVjh8xlAI/edit?usp=sharing",
    color: "#f04fb1",
  },
  {
    title: "Task, Storyboard e Primi Prototipi",
    desc: "Visualizzazione del viaggio dell'utente (User Journey) attraverso storyboard e creazione dei primi prototipi low-fi.",
    link: "https://docs.google.com/presentation/d/1lHfnMqQueOsIoCaOHQr-0zlyww_74uWqWOAIHriA1F0/edit?usp=sharing",
    color: "#4ff08f",
  },
  {
    title: "Valutare l'Usabilità",
    desc: "Valutazione euristica e feedback di esperti per identificare problemi di usabilità.",
    link: "https://docs.google.com/document/d/1si9uNRpJ2qqKaNvJ6C6w8FKtIuf0DCoNLOI2FXXPt-k/edit?usp=sharing",
    color: "#f0df4f",
  },
  {
    title: "User Testing",
    desc: "Sessioni di think-aloud con utenti reali per validare le nostre decisioni di design.",
    link: "https://drive.google.com/file/d/1kxOHvf_sYEktXEjg7-ZSrT-tTC5AAibP/view?usp=sharing",
    color: "#4f60f0",
  },
  {
    title: "Prototipo High Fidelity",
    desc: "Il prototipo interattivo finale su Figma che mostra l'esperienza REE completa.",
    link: "https://happy-coast-67456315.figma.site",
    color: "#f04fb1",
  },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Timeline del Progetto
          </h2>
          <p className="text-muted-foreground">
            Passa il mouse per esplorare il nostro percorso, clicca per vedere i
            dettagli.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative mb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4f60f0] via-[#f04fb1] to-[#4ff08f] opacity-20 transform -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } relative group`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-1/2 top-1/2 w-4 h-4 bg-background border-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 group-hover:scale-150"
                    style={{ borderColor: item.color }}
                  />

                  {/* Content Card */}
                  <div
                    className={`w-1/2 ${
                      isEven ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block outline-none w-full"
                    >
                      <motion.div
                        className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                        whileHover={{ y: -5 }}
                      >
                        <div
                          className={`absolute top-0 left-0 w-1 h-full transition-all duration-300`}
                          style={{
                            backgroundColor: item.color,
                            opacity: hoveredIndex === index ? 1 : 0.5,
                          }}
                        />

                        <h3
                          className="text-xl font-bold mb-2 flex items-center gap-2"
                          style={{
                            justifyContent: isEven ? "flex-end" : "flex-start",
                          }}
                        >
                          {item.title}
                          <ExternalLink className="w-4 h-4 opacity-50" />
                        </h3>

                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-muted-foreground pt-2">
                                {item.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </a>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Thank You Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-24 pt-12 border-t border-border/50 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-secondary/30 rounded-full">
              <School className="w-8 h-8 text-foreground" />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">
            Un Ringraziamento Speciale
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Il team Catalyst desidera ringraziare il{" "}
            <span className="font-semibold text-foreground">
              Politecnico di Milano
            </span>{" "}
            per il supporto durante questo percorso. Un ringraziamento
            particolare va alle professoresse{" "}
            <span className="font-semibold text-foreground">
              Maristella Matera
            </span>{" "}
            e{" "}
            <span className="font-semibold text-foreground">Ludovica Piro</span>{" "}
            per la loro guida esperta e i preziosi feedback che hanno reso
            possibile REE.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/80">
            <span>Realizzato con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>dal Team Catalyst</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
