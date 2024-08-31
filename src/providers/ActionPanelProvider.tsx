import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ActionPanelContextProps {
  selectedAction: "deposit" | "withdraw" | null;
  setSelectedAction: (action: "deposit" | "withdraw" | null) => void;
  isModalOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
}

const ActionPanelContext = createContext<ActionPanelContextProps | undefined>(
  undefined
);

export const useActionPanel = () => {
  const context = useContext(ActionPanelContext);
  if (!context) {
    throw new Error(
      "useActionPanel must be used within an ActionPanelProvider"
    );
  }
  return context;
};

export const ActionPanelProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAction, setSelectedAction] = useState<
    "deposit" | "withdraw" | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAction(null);
  };

  return (
    <ActionPanelContext.Provider
      value={{
        selectedAction,
        setSelectedAction,
        isModalOpen,
        toggleModal,
        closeModal,
      }}
    >
      {children}
    </ActionPanelContext.Provider>
  );
};
