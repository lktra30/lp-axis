/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let calInstance: any = null;

// Função para inicializar e abrir o Cal.com como modal
export async function openCalModal() {
  try {
    // Se já temos a instância, usa ela diretamente
    if (calInstance) {
      calInstance("modal", {
        calLink: "axis-br/15min"
      });
      return;
    }
    
    // Caso contrário, inicializa e armazena para uso futuro
    const cal = await getCalApi({"namespace":"15min"});
    calInstance = cal;
    
    // Configura a UI
    cal("ui", {
      "cssVarsPerTheme": {
        "dark": {"cal-brand":"#2f0f39"},
        "light": {"cal-brand":"#2f0f39"}
      },
      "hideEventTypeDetails": false,
      "layout": "month_view"
    });
    
    // Abre o modal
    cal("modal", {
      calLink: "axis-br/15min"
    });
  } catch (error) {
    console.error("Erro ao abrir Cal.com:", error);
  }
}

export default function Booking() {
  useEffect(() => {
    // Inicializa o Cal.com quando o componente monta
    (async function () {
      try {
        if (!calInstance) {
          const cal = await getCalApi({"namespace":"15min"});
          calInstance = cal;
          cal("ui", {"cssVarsPerTheme":{"dark":{"cal-brand":"#2f0f39"},"light":{"cal-brand":"#2f0f39"}},"hideEventTypeDetails":false,"layout":"month_view"});
        }
      } catch (error) {
        console.error("Erro ao inicializar Cal.com:", error);
      }
    })();
    
    // Limpa a referência quando o componente desmonta
    return () => {
      // Não podemos realmente "destruir" a instância do Cal.com, 
      // mas podemos limpar nossa referência
    };
  }, []);
  
  return (
    <button 
      onClick={openCalModal}
      className="cal-button"
    >
      Agendar 15 minutos
    </button>
  );
};
  