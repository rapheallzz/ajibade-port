export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

// TODO(stephen): Add verified client / colleague testimonials when available
export const testimonials: Testimonial[] = [];
