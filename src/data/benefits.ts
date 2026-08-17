export interface Benefit {
  icon: 'sparkles' | 'brain' | 'heart' | 'shield' | 'leaf' | 'star';
  title: string;
  description: string;
  color: 'clay-coral' | 'clay-yellow' | 'clay-blue' | 'clay-mint' | 'clay-pink' | 'clay-lilac';
}

export const benefits: Benefit[] = [
  {
    icon: 'sparkles',
    title: 'Imaginación sin techo',
    description: 'Las misiones tienen final abierto: no hay una respuesta correcta, hay cien.',
    color: 'clay-pink',
  },
  {
    icon: 'brain',
    title: 'Habilidades reales',
    description: 'Coordinación ojo-mano, planificación y paciencia — entrenadas con las manos.',
    color: 'clay-yellow',
  },
  {
    icon: 'heart',
    title: 'Tiempo en familia',
    description: 'Misiones para hacer juntos, con niveles para papás que no saben modelar.',
    color: 'clay-coral',
  },
  {
    icon: 'shield',
    title: 'Materiales seguros',
    description: 'Certificado CE y EN71. Sin gluten, sin pegamento tóxico, sin piezas peligrosas.',
    color: 'clay-mint',
  },
  {
    icon: 'leaf',
    title: 'Plastilina que respira',
    description: 'Nuestra masa base es 80% vegetal y 100% compostable. El planeta también juega.',
    color: 'clay-lilac',
  },
  {
    icon: 'star',
    title: 'Apta para pantalla-cero',
    description: 'Misiones en papel e instrucciones visuales. El teléfono se queda en el bolsillo.',
    color: 'clay-blue',
  },
];