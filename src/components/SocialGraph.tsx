import React, { useMemo } from "react";
import ForceGraph2D from "react-force-graph-2d";

type NodeData = {
  id: string;
  name: string;
  group: "user" | "friend" | "suggested";
};

type LinkData = {
  source: string;
  target: string;
};

const GraphView: React.FC = () => {
  const data = useMemo(() => {
    // --- NODOS --------------------------------------------------------------
    const nodes: NodeData[] = [
      // Usuario actual
      { id: "1", name: "Tú", group: "user" },

      // Amigos directos (12)
      { id: "2", name: "Ana", group: "friend" },
      { id: "3", name: "Luis", group: "friend" },
      { id: "4", name: "Marta", group: "friend" },
      { id: "5", name: "Pablo", group: "friend" },
      { id: "6", name: "Sofía", group: "friend" },
      { id: "7", name: "Carlos", group: "friend" },
      { id: "8", name: "Dani", group: "friend" },
      { id: "9", name: "Elena", group: "friend" },
      { id: "10", name: "Jorge", group: "friend" },
      { id: "11", name: "Nora", group: "friend" },
      { id: "12", name: "Raúl", group: "friend" },
      { id: "13", name: "Irene", group: "friend" },

      // Sugeridos / resto de la red (23)
      { id: "14", name: "Valeria", group: "suggested" },
      { id: "15", name: "Hugo", group: "suggested" },
      { id: "16", name: "Andrés", group: "suggested" },
      { id: "17", name: "Beto", group: "suggested" },
      { id: "18", name: "Camila", group: "suggested" },
      { id: "19", name: "Diego", group: "suggested" },
      { id: "20", name: "Emilia", group: "suggested" },
      { id: "21", name: "Fabi", group: "suggested" },
      { id: "22", name: "Gina", group: "suggested" },
      { id: "23", name: "Héctor", group: "suggested" },
      { id: "24", name: "Isabel", group: "suggested" },
      { id: "25", name: "Julio", group: "suggested" },
      { id: "26", name: "Karen", group: "suggested" },
      { id: "27", name: "Leo", group: "suggested" },
      { id: "28", name: "María", group: "suggested" },
      { id: "29", name: "Nicolás", group: "suggested" },
      { id: "30", name: "Oscar", group: "suggested" },
      { id: "31", name: "Paula", group: "suggested" },
      { id: "32", name: "Quinn", group: "suggested" },
      { id: "33", name: "Rosa", group: "suggested" },
      { id: "34", name: "Sergio", group: "suggested" },
      { id: "35", name: "Tania", group: "suggested" },
      { id: "36", name: "Ulises", group: "suggested" },
    ];

    // --- ARISTAS -----------------------------------------------------------
    // Conexiones del usuario actual con sus amigos directos
    const links: LinkData[] = [
      { source: "1", target: "2" },
      { source: "1", target: "3" },
      { source: "1", target: "4" },
      { source: "1", target: "5" },
      { source: "1", target: "6" },
      { source: "1", target: "7" },
      { source: "1", target: "8" },
      { source: "1", target: "9" },
      { source: "1", target: "10" },
      { source: "1", target: "11" },
      { source: "1", target: "12" },
      { source: "1", target: "13" },

      // Conexiones entre amigos (cliques y triángulos para densidad)
      { source: "2", target: "3" },
      { source: "2", target: "4" },
      { source: "3", target: "4" },
      { source: "3", target: "5" },
      { source: "4", target: "6" },
      { source: "5", target: "6" },
      { source: "5", target: "7" },
      { source: "6", target: "8" },
      { source: "7", target: "8" },
      { source: "7", target: "9" },
      { source: "8", target: "9" },
      { source: "9", target: "10" },
      { source: "10", target: "11" },
      { source: "11", target: "12" },
      { source: "12", target: "13" },
      { source: "10", target: "13" },

      // Puentes de amigos hacia sugeridos (para amigos en común)
      { source: "2", target: "14" },
      { source: "2", target: "15" },
      { source: "3", target: "15" },
      { source: "3", target: "16" },
      { source: "4", target: "16" },
      { source: "4", target: "17" },
      { source: "5", target: "17" },
      { source: "5", target: "18" },
      { source: "6", target: "18" },
      { source: "6", target: "19" },
      { source: "7", target: "19" },
      { source: "7", target: "20" },
      { source: "8", target: "20" },
      { source: "8", target: "21" },
      { source: "9", target: "21" },
      { source: "9", target: "22" },
      { source: "10", target: "22" },
      { source: "10", target: "23" },
      { source: "11", target: "23" },
      { source: "11", target: "24" },
      { source: "12", target: "24" },
      { source: "12", target: "25" },
      { source: "13", target: "25" },
      { source: "13", target: "26" },

      // Más conexiones cruzadas para crear múltiples "amigos en común"
      { source: "2", target: "16" },
      { source: "3", target: "17" },
      { source: "4", target: "18" },
      { source: "5", target: "19" },
      { source: "6", target: "20" },
      { source: "7", target: "21" },
      { source: "8", target: "22" },
      { source: "9", target: "23" },
      { source: "10", target: "24" },
      { source: "11", target: "25" },
      { source: "12", target: "26" },

      // Pequeños clusters de sugeridos (subcomunidades)
      { source: "14", target: "15" },
      { source: "15", target: "16" },
      { source: "16", target: "17" },
      { source: "17", target: "18" },
      { source: "18", target: "19" },

      { source: "20", target: "21" },
      { source: "21", target: "22" },
      { source: "22", target: "23" },
      { source: "23", target: "24" },
      { source: "24", target: "25" },

      { source: "26", target: "27" },
      { source: "27", target: "28" },
      { source: "28", target: "29" },
      { source: "29", target: "30" },
      { source: "30", target: "31" },

      // Enlaces entre clusters (para caminos más largos)
      { source: "19", target: "21" },
      { source: "25", target: "27" },
      { source: "31", target: "33" },

      // Grupo final con conexiones internas
      { source: "32", target: "33" },
      { source: "33", target: "34" },
      { source: "34", target: "35" },
      { source: "35", target: "36" },
      { source: "32", target: "36" },

      // Puentes de amigos a ese grupo final
      { source: "2", target: "32" },
      { source: "6", target: "33" },
      { source: "9", target: "34" },
      { source: "11", target: "35" },
      { source: "13", target: "36" },
    ];

    return { nodes, links };
  }, []);

  const getNodeColor = (group: NodeData["group"]) => {
    switch (group) {
      case "user": return "#1976d2";      // Azul
      case "friend": return "#43a047";    // Verde
      case "suggested": return "#ff9800"; // Naranja
      default: return "#ccc";
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <ForceGraph2D
        graphData={data}
        nodeLabel={(node: any) => node.name}
        nodeAutoColorBy="group"
        cooldownTicks={120}
        linkDirectionalParticles={1}
        linkDirectionalParticleSpeed={0.004}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.name as string;
          const fontSize = Math.max(10, 14 / globalScale);
          ctx.font = `${fontSize}px Sans-Serif`;

          // Dibuja el nodo
          ctx.fillStyle = getNodeColor(node.group);
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI, false);
          ctx.fill();

          // Etiqueta
          const textWidth = ctx.measureText(label).width;
          const bckgW = textWidth + fontSize * 0.4;
          const bckgH = fontSize + fontSize * 0.3;

          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.fillRect(node.x - bckgW / 2, node.y + 8, bckgW, bckgH);

          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillStyle = "#333";
          ctx.fillText(label, node.x, node.y + 10);
        }}
        linkColor={() => "rgba(150,150,150,0.6)"}
        linkWidth={1.2}
        onNodeClick={(node: any) => {
          alert(`Has hecho clic en ${node.name}`);
        }}
      />
    </div>
  );
};

export default GraphView;
