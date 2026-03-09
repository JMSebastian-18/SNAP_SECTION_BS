import { useState } from "react";

export const Login = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
    };

    const inputStyle = {
        width: "100%",
        padding: "10px 14px",
        border: "1.5px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.2s",
        fontFamily: "inherit",
    };

    const labelStyle = {
        display: "block",
        fontSize: "13px",
        fontWeight: "500",
        marginBottom: "6px",
        color: "#374151",
    };

    const requiredStar = <span style={{ color: "#ef4444", marginLeft: "2px" }}>*</span>;

    return (
        <div
            style={{
                maxWidth: "480px",
                margin: "40px auto",
                padding: "32px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                fontFamily: "'Segoe UI', sans-serif",
            }}
        >
            <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "24px", color: "#111827" }}>
                Login
            </h2>
            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>Email Address {requiredStar}</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#1a7a5e")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
            </div>
            <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>password {requiredStar}</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#1a7a5e")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
            </div>

            

            {/* Consent */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    style={{ accentColor: "#1a7a5e", width: "16px", height: "16px", cursor: "pointer" }}
                />
                <label htmlFor="consent" style={{ fontSize: "13px", color: "#374151", cursor: "pointer" }}>
                    I accept the terms and conditions {requiredStar}
                </label>
            </div>

            {/* Submit */}
            <button
                onClick={handleSubmit}
                style={{
                    width: "100%",
                    padding: "14px",
                    background: "#1a7a5e",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#155f49")}
                onMouseLeave={(e) => (e.target.style.background = "#1a7a5e")}
            >
                Login
            </button>
            
        </div>
    );
}