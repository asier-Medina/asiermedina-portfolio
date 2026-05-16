export interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}
export type FormErrors = {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
};

