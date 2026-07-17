import { useToast } from "./toast/ToastContext.jsx"

export default function App() {
  const { show } = useToast();
  return (
    <div>
      <button onClick={() => show({
        type: "success",
        message: "Guardado correctamente",
      })}>Success</button>
      <button onClick={() => show({
        type: "error",
        message: "Ocurrio un error",
      })}>Error</button>
      <button onClick={() => show({
        type: "success 5",
        message: "Ocurrio un error",
        duration: 5000
      })}>Success 5</button>
    </div>
  )
}