export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export const site = {
  name: 'Dito',
  tagline: 'Crea. Juega. Vuelve a crear.',
  description:
    'Kits de plastilina creativa para niños de 3 a 12 años: masas suaves, herramientas seguras y retos que despiertan la imaginación.',
  url: 'https://dito.stevemoya.me',
  email: 'hola@dito.kids',
  founded: 2019,

  nav: [
    { label: 'Cómo se crea', href: '#como' },
    { label: 'Kits', href: '#kits' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Galería', href: '#galeria' },
  ] satisfies NavItem[],

  hero: {
    badge: 'Nuevo · Kit Volcán de Colores',
    title: { start: 'Manitas que crean,', accent: 'cerebros que vuelan.' },
    subtitle:
      'Dito es plastilina premium + retos de creación para que los peques pasen de la pantalla al mundo real, con las manos llenas de color.',
    primaryCta: 'Ver kits',
    secondaryCta: 'Cómo funciona',
  },

  stats: [
    { value: '1.200+', label: 'escuelas con Dito' },
    { value: '250.000', label: 'niños creadores' },
    { value: '98%', label: 'se desconectan de la pantalla' },
    { value: '40+', label: 'misiones de creación' },
  ],

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/dito.kids', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/ditokids', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@dito.kids', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@dito.kids', icon: 'youtube' },
  ] satisfies Social[],

  newsletter: {
    title: '1 misión de creación cada domingo',
    subtitle: 'Retos imprimibles y guías para familias creativas. Gratis.',
    placeholder: 'correo@familiar.com',
    button: 'Quiero misiones',
    success: '¡Misión aceptada! Revisa tu correo este domingo. 🎨',
  },

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;