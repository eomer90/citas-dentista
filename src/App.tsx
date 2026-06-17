import "./App.css";
import { useState } from "react";
import ModalCita from "./components/ModalCita";
import PaginaPrincipal from "./components/paginaPrincipal";

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <PaginaPrincipal abrirModal={() => setModalAbierto(true)} />
      <ModalCita
        abierto={modalAbierto}
        cerrarModal={() => setModalAbierto(false)}
      />
    </>
  );
}

export default App;
