export interface CreateStep {
  num: string;
  title: string;
  description: string;
  color: 'clay-coral' | 'clay-yellow' | 'clay-blue' | 'clay-mint';
}

export const steps: CreateStep[] = [
  {
    num: '1',
    title: 'Abre la caja',
    description: 'Masas que no manchan, no se secan y huelen a vainilla. Seguras desde los 3 años.',
    color: 'clay-coral',
  },
  {
    num: '2',
    title: 'Elige una misión',
    description: 'Cada caja trae retos con niveles: de la bolita perfecta al castillo de 3 torres.',
    color: 'clay-yellow',
  },
  {
    num: '3',
    title: 'Mueve las manos',
    description: 'Amasa, aplasta, enrolla y une. La motricidad fina se entrena jugando, no en fichas.',
    color: 'clay-blue',
  },
  {
    num: '4',
    title: 'Muestra y sigue',
    description: 'Fotografía la creación y súbela al mural de Dito. Mañana, otra misión.',
    color: 'clay-mint',
  },
];