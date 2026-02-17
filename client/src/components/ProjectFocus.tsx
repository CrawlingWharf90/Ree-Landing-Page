import { motion, AnimatePresence } from "framer-motion";
import { Search, Share2, Truck } from "lucide-react";
import { useState } from "react";

const tasks = [
  {
    title: "Needfinding e Analisi",
    description:
      "Comprendere le barriere sociali al riuso. Abbiamo scoperto che la confusione e l'isolamento erano i blocchi principali.",
    fullDescription:
      "La nostra ricerca è iniziata con 94 risposte ai sondaggi e interviste dirette. Abbiamo identificato che le persone non sono solo pigre; si sentono disconnesse. Ci siamo concentrati sul colmare il divario tra interazione sociale e responsabilità ambientale.",
    icon: Search,
    color: "from-[#4f60f0] to-[#8090ff]",
    accent: "#4f60f0",
  },
  {
    title: "Connessione Comunitaria",
    description:
      "Creare un senso di appartenenza. REE non è solo un marketplace; è un coordinatore di eventi sociali.",
    fullDescription:
      "Lo 'Scambio' in REE rappresenta più che semplici oggetti: riguarda le storie. Abbiamo progettato l'interfaccia per evidenziare eventi locali, trasformando fredde transazioni in caldi incontri comunitari dove le persone condividono valori.",
    icon: Share2,
    color: "from-[#f04fb1] to-[#ff80d0]",
    accent: "#f04fb1",
  },
  {
    title: "Logistica Semplificata",
    description:
      "Risolvere il problema del trasporto pesante. Coordinare il trasporto per oggetti ingombranti come i mobili.",
    fullDescription:
      "Uno dei maggiori ostacoli era il trasporto di oggetti voluminosi. La nostra soluzione include un sistema logistico peer-to-peer dove gli utenti possono offrire 'passaggi'. Questo assicura che un armadio pesante non finisca in discarica solo perché il proprietario non ha un furgone.",
    icon: Truck,
    color: "from-[#4ff08f] to-[#80ffaf]",
    accent: "#4ff08f",
  },
];

export default function ProjectFocus() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f60f0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f04fb1]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            La Nostra Missione
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Ci siamo posti l'obiettivo di rispondere a una domanda:{" "}
            <span className="text-foreground font-medium italic">
              "Come trasformare il riuso da un'azione solitaria e complessa in
              una piacevole esperienza comunitaria?"
            </span>
          </p>
        </motion.div>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-4 h-96 w-full">
          {tasks.map((task, index) => {
            const isExpanded = expandedIndex === index;
            const isCollapsed =
              expandedIndex !== null && expandedIndex !== index;

            return (
              <motion.div
                key={task.title}
                layout
                // Flex values: Expanded=4, Default=1, Collapsed=0.5 (Wider tabs)
                animate={{
                  flex: isExpanded ? 4 : isCollapsed ? 0.5 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
                className={`
                  relative group overflow-hidden rounded-3xl bg-card border border-border/50 
                  cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500
                `}
              >
                {/* Background Gradient Blob */}
                <div
                  className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${task.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full w-full flex">
                  {/* LEFT SIDE: Fixed Width Container */}
                  <div
                    className={`
                      flex flex-col justify-center transition-all duration-500 flex-shrink-0
                      ${isCollapsed ? "items-center w-full px-0" : "w-80 px-8"}
                    `}
                  >
                    {/* Icon */}
                    <motion.div
                      layout
                      className={`
                        w-12 h-12 rounded-xl bg-gradient-to-br ${task.color} 
                        flex items-center justify-center shadow-md mb-4 flex-shrink-0
                      `}
                    >
                      <task.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title & Short Desc - Hidden when collapsed */}
                    <AnimatePresence mode="popLayout">
                      {!isCollapsed && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col"
                        >
                          <h3 className="text-xl font-bold mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                            {task.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {task.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* RIGHT SIDE: Full Description (Only visible when expanded) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <div className="flex-1 flex overflow-hidden">
                        {/* Vertical Divider */}
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-px h-3/4 bg-border/50 my-auto flex-shrink-0"
                        />

                        {/* Full Text Content */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: 0.15, duration: 0.3 }}
                          className="p-8 flex items-center"
                        >
                          <p className="text-base leading-7 text-foreground/90 min-w-[300px]">
                            {task.fullDescription}
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
