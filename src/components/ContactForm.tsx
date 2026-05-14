import { useContactForm } from "../hooks/useContactForm";

export default function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    success,
    sendError,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} noValidate>

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="error-message" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="error-message" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="reason">Rol</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            aria-describedby={errors.reason ? "reason-error" : undefined}
          >
            <option value="">Selecciona un rol</option>
            <option value="Particular">Particular</option>
            <option value="Empresa">Empresa</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.reason && (
            <span id="reason-error" className="error-message" role="alert">
              {errors.reason}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntame en qué puedo ayudar..."
            rows={5}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="error-message" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>

        {/* Error de red / EmailJS */}
        {sendError && (
          <p className="error-message" role="alert" style={{ marginTop: "1rem" }}>
            {sendError}
          </p>
        )}

        {/* Éxito */}
        {success && (
          <p className="success-message" role="status">
            ¡Mensaje enviado! Te responderé lo antes posible.
          </p>
        )}

      </form>
    </div>
  );
}