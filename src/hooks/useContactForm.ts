import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";

import type {
  ContactFormData,
  FormErrors,
} from "../models/ContactModel";

// ── Credenciales EmailJS ──────────────────────────────
// useContactForm.ts
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ─────────────────────────────────────────────────────

export function useContactForm() {

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const [errors, setErrors]         = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [sendError, setSendError]   = useState<string | null>(null);

  // ── Validación — sin cambios ──────────────────────
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Nombre obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "Email obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato inválido";
    }
    if (!formData.reason.trim())   newErrors.reason  = "Motivo obligatorio";
    if (!formData.message.trim())  newErrors.message = "Mensaje obligatorio";
    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    setSendError(null);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", reason: "", message: "" });
    setErrors({});
    setSuccess(false);
    setSendError(null);
  };

  // ── Submit — ahora con EmailJS ────────────────────
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSendError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.reason,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", email: "", reason: "", message: "" });
      setErrors({});

    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    success,
    sendError,
    handleChange,
    resetForm,
    handleSubmit,
  };
}