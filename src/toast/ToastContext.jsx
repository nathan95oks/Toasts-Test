import { createContext, useContext, useRef, useCallback, useState } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext(null);
let idCounter = 0;
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const timers = useRef({});

    const remove = useCallback((id) => {
        setToasts((current) => current.filter((t) => t.id !== id));

        if (timers.current[id]) {
            clearTimeout(timers.current[id]);
            delete timers.current[id];
        }
    }, []);

    const show = useCallback(({ type = "success", message, duration = 3000 }) => {
        idCounter += 1;
        const id = idCounter;
        const newToast = { id, type, message };
        setToasts((current) => [...current, newToast]);

        const timeoutId = setTimeout(() => {
            remove(id);
        }, duration);

        timers.current[id] = timeoutId;

    }, [remove]);

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            <ToastContainer
                toasts={toasts} onClose={remove}
            />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within ToastProvider");

    }
    return context;
}
