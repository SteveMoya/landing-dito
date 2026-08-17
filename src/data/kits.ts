export interface Kit {
  name: string;
  tagline: string;
  price: string;
  description: string;
  color: 'clay-coral' | 'clay-yellow' | 'clay-blue' | 'clay-mint';
  badge?: string;
  ages: string;
  includes: string[];
}

export const kits: Kit[] = [
  {
    name: 'Kit Básico',
    tagline: 'Los primeros 6 colores',
    price: '18€',
    description: 'Masas suaves, herramientas básicas y 10 misiones para empezar.',
    color: 'clay-coral',
    ages: '3+',
    includes: ['6 masas suaves', '2 herramientas de modelado', 'Guía de 10 misiones'],
  },
  {
    name: 'Kit Volcán de Colores',
    tagline: 'El favorito de la casa',
    price: '32€',
    description: 'Masas que brillan, texturas y el reto estrella: el volcán en erupción.',
    color: 'clay-yellow',
    badge: 'MÁS VENDIDO',
    ages: '5+',
    includes: ['12 masas con texturas', 'Set de moldes geométricos', 'Reto Volcán paso a paso'],
  },
  {
    name: 'Kit Explorador',
    tagline: 'Crea mundos enteros',
    price: '39€',
    description: 'Animales, castillos y naves: 20 misiones de mundo abierto.',
    color: 'clay-blue',
    ages: '6+',
    includes: ['15 masas + bote de recarga', 'Herramientas avanzadas', '20 misiones de mundo'],
  },
  {
    name: 'Kit Escuela',
    tagline: 'Para aulas y grupos',
    price: '120€',
    description: 'Paquete para 25 niños con guía docente y progreso por edades.',
    color: 'clay-mint',
    ages: '3-12',
    includes: ['50 masas surtidas', 'Guía docente', 'Rúbricas por edad'],
  },
];