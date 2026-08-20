export type TrickLevel = 'Estreante' | 'Iniciante' | 'Amador' | 'Elite' | 'Sem nivel';

export interface Trick {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  level: TrickLevel;
  family: string;
  category: string;
  baseLock: string;
  variations: string[];
  badges: string[];
  guideNote: string;
  hasAsset: boolean;
  assetType: 'gif' | 'prompt';
  assetPrompt: string;
}

export const levelOrder: TrickLevel[] = ['Estreante', 'Iniciante', 'Amador', 'Elite'];

export interface GuideEntry {
  title: string;
  kind: 'conceito' | 'base' | 'variacao';
  description: string;
  tip: string;
}

export const grindGuide: GuideEntry[] = [
  {
    title: 'Grind',
    kind: 'conceito',
    description: 'Tipo geral da manobra: deslizar ou travar no obstaculo usando soul plate, frame, H-block, groove ou combinacoes desses pontos.',
    tip: 'Leia primeiro onde o patins encaixa. O nome vem depois; o encaixe manda na tecnica.',
  },
  {
    title: 'Base e switch',
    kind: 'base',
    description: 'Base e seu lado natural. Switch espelha aproximacao, lado do obstaculo e pe que comanda o encaixe.',
    tip: 'Treine a mesma manobra nos dois sentidos antes de subir velocidade.',
  },
  {
    title: 'Topside',
    kind: 'variacao',
    description: 'O pe de soul cruza por cima do obstaculo para encaixar do outro lado.',
    tip: 'Quadril aberto e joelho dobrado protegem a leitura e a saida.',
  },
  {
    title: 'Alley-oop / True',
    kind: 'variacao',
    description: 'Entradas contra o fluxo ou pelo giro menos natural da base.',
    tip: 'Ombro e direcao resolvidos primeiro; velocidade so depois.',
  },
  {
    title: 'Unity / Savannah',
    kind: 'base',
    description: 'Manobras em que passagem e cruzamento dos pes fazem parte obrigatoria da leitura.',
    tip: 'Se o cruzamento atrasa, a manobra perde identidade mesmo com o slide acontecendo.',
  },
];
