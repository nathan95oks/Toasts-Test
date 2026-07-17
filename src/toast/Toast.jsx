import React from "react";

const getToastConfig = (type = "") => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes("success")) {
        return {
            icon: "✓",
            color: "#10b981", // elegant green
            iconBg: "rgba(16, 185, 129, 0.1)"
        };
    }
    if (lowerType.includes("error")) {
        return {
            icon: "✗",
            color: "#ef4444", // elegant red
            iconBg: "rgba(239, 68, 68, 0.1)"
        };
    }
    return {
        icon: "ℹ",
        color: "#3b82f6", // elegant blue
        iconBg: "rgba(59, 130, 246, 0.1)"
    };
};

export default function Toast({ type, message, onClose }) {
    const config = getToastConfig(type);

    return (
        <div className="toast-item">
            <div
                className="toast-icon-container"
                style={{
                    color: config.color,
                    backgroundColor: config.iconBg
                }}
            >
                {config.icon}
            </div>
            <div className="toast-message">{message}</div>
            <button className="toast-close-btn" onClick={onClose} aria-label="Close notification">
                ✕
            </button>
        </div>
    );
}