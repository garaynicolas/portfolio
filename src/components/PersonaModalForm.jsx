import { useContext } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { PersonaForm } from "./PersonaForm";
import { PortfolioContext } from "../context/PortfolioContext";

export const PersonaModalForm = () => {
  return (
    <div className="abrir-modal animacion fadeIn">
      <div
        className="modal"
        style={{ display: "block", align: "center", top: "25%" }}
        tabIndex="-1"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Información</h5>
            </div>
            <div className="modal-body">
              <PersonaForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
