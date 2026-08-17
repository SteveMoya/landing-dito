export interface GalleryItem {
  emoji: string;
  color: 'clay-coral' | 'clay-yellow' | 'clay-blue' | 'clay-mint' | 'clay-pink' | 'clay-lilac';
  alt: string;
  size: 'sm' | 'md' | 'lg';
}

// mock: galería de creaciones
export const gallery: GalleryItem[] = [
  { emoji: '🦕', color: 'clay-mint', alt: 'Dinosaurio de plastilina', size: 'lg' },
  { emoji: '🌈', color: 'clay-coral', alt: 'Arcoíris de plastilina', size: 'sm' },
  { emoji: '🐌', color: 'clay-yellow', alt: 'Caracol de plastilina', size: 'md' },
  { emoji: '🚀', color: 'clay-blue', alt: 'Cohete de plastilina', size: 'md' },
  { emoji: '🧁', color: 'clay-pink', alt: 'Cupcake de plastilina', size: 'sm' },
  { emoji: '🦋', color: 'clay-lilac', alt: 'Mariposa de plastilina', size: 'md' },
  { emoji: '🐙', color: 'clay-coral', alt: 'Pulpo de plastilina', size: 'sm' },
  { emoji: '🏰', color: 'clay-mint', alt: 'Castillo de plastilina', size: 'lg' },
];