import { Component, inject } from '@angular/core';

import { TrickStore } from '../core/trick-store';

interface LearnCard {
  title: string;
  image: string;
  text: string;
}

@Component({
  standalone: true,
  templateUrl: './guide.page.html',
})
export class GuidePage {
  readonly store = inject(TrickStore);
  readonly positions: LearnCard[] = [
    {
      title: 'Soul grind',
      image: '/assets/imgs/learn/learn_soulgrind.png',
      text: 'Quando pelo menos um patins trava usando a soul plate. Pode aparecer em base normal, negativa, topside e outras variacoes.',
    },
    {
      title: 'Groove / H-block',
      image: '/assets/imgs/learn/learn_groovegrind.png',
      text: 'Quando o encaixe acontece no groove do frame, sem usar a soul plate como ponto principal do grind.',
    },
    {
      title: 'Frontside',
      image: '/assets/imgs/learn/learn_frontsidegrind.png',
      text: 'Base de groove em que frente do corpo e patins apontam para o obstaculo. Muitos nomes assumem frontside sem falar isso.',
    },
    {
      title: 'Backside',
      image: '/assets/imgs/learn/learn_backsidegrind.png',
      text: 'Base de groove com o corpo virado para fora do obstaculo. Em nomes de manobra, costuma ser marcado como backside ou back.',
    },
  ];

  readonly edges: LearnCard[] = [
    {
      title: 'Positive soul',
      image: '/assets/imgs/learn/learn_positivesoulgrind.png',
      text: 'O lado mais comum da soul plate. Normalmente o nome da manobra ja assume essa posicao.',
    },
    {
      title: 'Negative soul',
      image: '/assets/imgs/learn/learn_negativesoulgrind.png',
      text: 'A soul plate entra pelo lado interno. Quando aparece, o nome geralmente ganha o termo negative.',
    },
    {
      title: 'Positive groove',
      image: '/assets/imgs/learn/learn_posgroove.png',
      text: 'O lado externo do groove/frame segurando o lock. Ajuda a entender truques como royale e torque.',
    },
    {
      title: 'Negative groove',
      image: '/assets/imgs/learn/learn_neggroove.png',
      text: 'O lado interno do groove/frame segurando o lock. E uma leitura tecnica, mas ajuda muito na progressao.',
    },
  ];

  readonly concepts: LearnCard[] = [
    {
      title: 'Normal vs Acid',
      image: '/assets/imgs/learn/learn_soulvsacid.png',
      text: 'Em muitos soul grinds, o patins que nao esta na soul plate pode ficar em posicao normal ou virar para uma leitura acid.',
    },
    {
      title: 'Canais do frame',
      image: '/assets/imgs/learn/learn_framechannels.png',
      text: 'Em frames de quatro rodas, os espacos entre rodas formam canais. Eles explicam chamadas como channel 11 ou channel 33.',
    },
  ];

  readonly progression = [
    'Comece por Makio e derive para Mizou, Soul, Acid, Sidewalk e PStar.',
    'Treine Frontside antes de puxar Front Royale, Full Torque, Backslide, Torque e Unity.',
    'Repita a mesma logica no Backside para ganhar leitura dos dois lados do obstaculo.',
    'Quando travar no lado natural, comece a repetir switch para abrir mais linhas.',
  ];

  readonly styleTips = [
    'Patine bastante fora das manobras para ganhar conforto geral.',
    'Solte joelhos, costas e bracos; rigidez mata fluxo.',
    'Repita ate a manobra parecer natural, nao apenas acertada uma vez.',
    'Misture grind, air, grab e spin no seu tempo.',
    'Baixe bem nos grinds, recolha pernas no ar e coloque corpo na manobra.',
  ];

  readonly channels = [
    {
      name: 'Acosta Blades',
      lang: 'English',
      image: '/assets/imgs/learn/yt_acostablades.jpg',
      url: 'https://www.youtube.com/channel/UC9FH1mkHLFQuPPEPu9CfR1A/videos',
    },
    {
      name: 'Aggressive Mall',
      lang: 'English',
      image: '/assets/imgs/learn/yt_aggressivemall.jpg',
      url: 'https://www.youtube.com/user/aggressivemall/playlists',
    },
    {
      name: 'Back to Blading',
      lang: 'English',
      image: '/assets/imgs/learn/yt_backtoblading.jpg',
      url: 'https://www.youtube.com/channel/UCWuWxe37l9_cqgHFwtICixg/playlists',
    },
    {
      name: 'Felipe Zambardino',
      lang: 'Portuguese',
      image: '/assets/imgs/learn/yt_felipezambardino.jpg',
      url: 'https://www.youtube.com/playlist?list=PLCs2ChXJoYZ94Vn5oSvyqH7BiO6XS9M6t',
    },
    {
      name: 'Ricardo Lino',
      lang: 'English',
      image: '/assets/imgs/learn/yt_ricardolino.jpg',
      url: 'https://www.youtube.com/channel/UC_cMnM6u3xJ3yeW1jzIHgaQ/playlists',
    },
  ];
}
