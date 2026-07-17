import Toast from "./Toast";


export default function ToastContainer({ toasts, onClose }) {
    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} onClose={() => onClose(toast.id)} />
            ))}
        </div>
    )
}