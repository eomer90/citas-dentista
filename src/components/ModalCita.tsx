import { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import api from "../services/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ModalCitaProps {
  abierto: boolean;
  cerrarModal: () => void;
}

function ModalCita({ abierto, cerrarModal }: ModalCitaProps) {
  const [horariosOcupados, setHorariosOcupados] = useState<string[]>([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [fecha, setFecha] = useState<Date | null>(null);
  const [horario, setHorario] = useState("");

  const horarios = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  const limpiarFormulario = () => {
    setNombre("");
    setTelefono("");
    setSucursal("");
    setFecha(null);
    setHorario("");
  };

  useEffect(() => {
    if (!fecha) return;
    cargarHorarios();
  }, [fecha, sucursal]);

  useEffect(() => {
    setFecha(null);
    setHorario("");
  }, [sucursal]);

  if (!abierto) return null;

  const fechaFormateada = fecha ? fecha.toISOString().split("T")[0] : "";

  const esFechaValida = (date: Date) => {
    const diaSemana = date.getDay();
    if (diaSemana === 0) return false;
    if (sucursal === "Zinacantepec" && diaSemana === 1) {
      return false;
    }
    return true;
  };

  const cerrar = () => {
    limpiarFormulario();
    cerrarModal();
  };

  const estaDeshabilitado = (hora: string) => {
    const ocupado = horariosOcupados.includes(hora);
    let horaPasada = false;
    if (fecha) {
      const hoy = new Date();
      const esHoy =
        fecha.getDate() === hoy.getDate() &&
        fecha.getMonth() === hoy.getMonth() &&
        fecha.getFullYear() === hoy.getFullYear();
      if (esHoy) {
        const [h, m] = hora.split(":").map(Number);
        const fechaHora = new Date();
        fechaHora.setHours(h, m, 0, 0);
        horaPasada = fechaHora <= hoy;
      }
    }
    return ocupado || horaPasada;
  };

  const cargarHorarios = async () => {
    try {
      const res = await api.get(`/citas/${fechaFormateada}/${sucursal}`);
      setHorariosOcupados(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const agendarCita = async () => {
    if (!horario) {
      alert("Selecciona un horario");
      return;
    }
    try {
      await api.post("/citas", {
        nombre,
        telefono,
        sucursal,
        fecha: fechaFormateada,
        horario,
      });
      alert("Cita agendada correctamente");
      limpiarFormulario();
      cerrarModal();
    } catch (error: any) {
      alert(error.response?.data?.mensaje || "Error al registrar cita");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="cerrar-modal" onClick={cerrar}>
          ✕
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            agendarCita();
          }}
        >
          <h2>Agenda tu cita</h2>
          <input
            required
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            required
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            pattern="[0-9]{10}"
            title="Ingresa un número de 10 dígitos"
          />
          <select
            required
            value={sucursal}
            onChange={(e) => setSucursal(e.target.value)}
          >
            <option value="" disabled>
              Selecciona una sucursal
            </option>
            <option value="Metepec">Sucursal Metepec</option>
            <option value="Zinacantepec">Sucursal Zinacantepec</option>
          </select>
          {sucursal && (
            <div className="datepicker-container">
              <DatePicker
                selected={fecha}
                onChange={(date: Date | null) => setFecha(date)}
                filterDate={esFechaValida}
                minDate={new Date()}
                placeholderText="Selecciona una fecha"
                dateFormat="dd/MM/yyyy"
                className="datepicker"
              />
              <FaCalendarAlt className="datepicker-icon" />
            </div>
          )}
          {fecha && (
            <>
              <h3>Selecciona un horario</h3>

              <div className="horarios">
                {horarios.map((hora) => {
                  const deshabilitado = estaDeshabilitado(hora);

                  return (
                    <button
                      type="button"
                      key={hora}
                      disabled={deshabilitado}
                      className={`horario-card
        ${horario === hora ? "horario-seleccionado" : ""}
        ${deshabilitado ? "horario-ocupado" : ""}`}
                      onClick={() => setHorario(hora)}
                    >
                      {hora}
                    </button>
                  );
                })}
              </div>
            </>
          )}
          <button type="submit" className="btn-whatsapp">
            Agendar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalCita;
