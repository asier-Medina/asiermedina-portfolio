import { useContactForm } from "../hooks/useContactForm";

export default function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    success,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Rol</label>
          <select name="reason" value={formData.reason} onChange={handleChange}>
            <option value="">Selecciona un rol</option>
            <option value="consulta">Particular</option>
            <option value="dudas">Empresa</option>
            <option value="otro">Otro</option>
          </select>
          {errors.reason && <span className="error-message">{errors.reason}</span>}
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntame en qué puedo ayudar..."
            rows={5}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>

        {success && (
          <p className="success-message">
            ¡Mensaje enviado correctamente!
          </p>
        )}
      </form>
    </div>
  );
}