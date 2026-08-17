export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  color: 'clay-coral' | 'clay-yellow' | 'clay-blue' | 'clay-mint' | 'clay-pink' | 'clay-lilac';
  initial: string;
}

// mock: testimonios de familias
export const testimonials: Testimonial[] = [
  {
    quote:
      'Mi hijo de 5 años pasa una hora entera con el kit sin pedirme el tablet. Eso no había pasado nunca. NUNCA.',
    name: 'Carmen Vidal',
    role: 'Mamá de Leo, 5 años',
    color: 'clay-pink',
    initial: 'C',
  },
  {
    quote:
      'Lo usamos en clase con 24 niños. La guía docente está tan bien hecha que hasta los más inquietos se enganchan.',
    name: 'Raúl Jiménez',
    role: 'Maestro de infantil',
    color: 'clay-blue',
    initial: 'R',
  },
  {
    quote:
      'Las misiones por niveles son un acierto: mi hija de 8 ya modela mejor que yo. Y el olor a vainilla es adictivo.',
    name: 'Ana Beltrán',
    role: 'Mamá de Val, 8 años',
    color: 'clay-mint',
    initial: 'A',
  },
];