# 🧩 Prueba Técnica – Sistema de Toasts

## 🎯 Objetivo

Implementar un sistema de notificaciones reutilizable utilizando React.

El sistema debe permitir mostrar notificaciones desde cualquier parte de la aplicación mediante un hook personalizado.

---

## 🧱 Uso esperado

El sistema debe poder utilizarse de la siguiente forma:

```jsx
<ToastProvider>
    <App />
</ToastProvider>
```

```jsx
function App() {
    const toast = useToast();

    return (
        <>
            <button
                onClick={() =>
                    toast.show({
                        type: "success",
                        message: "Guardado correctamente",
                    })
                }
            >
                Success
            </button>

            <button
                onClick={() =>
                    toast.show({
                        type: "error",
                        message: "Ocurrió un error",
                    })
                }
            >
                Error
            </button>
        </>
    );
}
```

---

## 🎯 Resultado esperado

Al presionar un botón debe aparecer una notificación en pantalla.

Ejemplo:

```text
✔ Guardado correctamente

✖ Ocurrió un error
```

Las notificaciones deben mostrarse en la esquina superior derecha de la pantalla.

---

## ✅ Requisitos

El candidato debe implementar:

- Un componente `<ToastProvider>`.
- Un hook `useToast()`.
- Un único método `show()` que reciba un objeto con la siguiente estructura:

```ts
{
    type: "success" | "error";
    message: string;
}
```

- Mostrar múltiples notificaciones simultáneamente.
- Cada notificación debe desaparecer automáticamente después de **3 segundos**.
- No utilizar librerías externas para implementar el sistema de notificaciones.

---

## 📌 Consideraciones

- Puede utilizar cualquier funcionalidad nativa de React.
- El diseño visual no será evaluado.
- Se valorará una implementación clara, reutilizable y fácil de mantener.

---

## ⭐ Bonus (Opcional)

Si queda tiempo:

- Permitir cerrar una notificación manualmente.
- Agregar una animación simple de entrada y salida.
- Permitir configurar la duración de la notificación mediante una propiedad opcional:

```ts
toast.show({
    type: "success",
    message: "Guardado correctamente",
    duration: 5000,
});
```

---

## 📋 Criterios de evaluación

Se evaluarán, entre otros, los siguientes aspectos:

- Correcto uso de React.
- Organización y legibilidad del código.
- Diseño de la API del componente.
- Manejo del estado.
- Reutilización de la solución.
- Manejo de múltiples notificaciones.
- Correcta limpieza de timers (`setTimeout`).