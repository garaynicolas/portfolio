import { usePortfolio } from "../hooks/usePortfolio";
import { PortfolioContext } from "./PortfolioContext";

export const PortfolioProvider = ({children}) => {
  const {
    persona,
    personaForm,
    visibleForm,
    setPersona,
    setPersonaForm,
    setVisibleForm,
    openForm,
    closeForm,
    handlerEditPersona
  } = usePortfolio();

  return (
    <PortfolioContext.Provider
      value={{
        persona,
        personaForm,
        visibleForm,
        setPersona,
        setPersonaForm,
        setVisibleForm,
        openForm,
        closeForm,
        handlerEditPersona
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
