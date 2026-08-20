import { Component, inject } from '@angular/core';

import { TrickStore } from '../core/trick-store';

interface LearnCard {
  title: string;
  image: string;
  text: string;
}

interface DefinitionItem {
  term: string;
  description: string;
}

interface DefinitionGroup {
  eyebrow: string;
  title: string;
  image?: string;
  secondaryImage?: string;
  description?: string;
  items: DefinitionItem[];
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

  readonly definitionGroups: DefinitionGroup[] = [
    {
      eyebrow: 'Partes do boot',
      title: 'Basic aggressive skate overview',
      image: '/assets/imgs/learn/definitions/full-skate-overview.png',
      secondaryImage: '/assets/imgs/learn/definitions/boot-components.png',
      description:
        'A base do patins aggressive mistura boot, soul plate, frame e rodas. Cada marca muda desenho, rigidez e encaixe, mas estes nomes aparecem quase sempre.',
      items: [
        {
          term: '1. Liner',
          description:
            'Bota interna que fica entre pe e shell. Define conforto, ajuste e volume. Pode ter cadarco proprio, palmilha e materiais diferentes.',
        },
        {
          term: '2. Shell',
          description:
            'Casco principal do boot. Segura cuff, soul plate e outros componentes. Pode ser mais rigido ou flexivel, dependendo do plastico e do desenho.',
        },
        {
          term: '3. Buckle / strap',
          description:
            'Fechamento no topo do cuff. Mantem perna firme, controla flexao para frente e pode usar catraca, velcro ou tecido reforcado.',
        },
        {
          term: '4. Laces',
          description:
            'Cadarcos que apertam o shell no pe. Cadarco encerado de hockey costuma ajudar quem quer ajuste mais firme.',
        },
        {
          term: '5. Soul Plate',
          description:
            'Peca dura na sola do patins usada para travar soul grinds. O formato muda como soul, negative e alguns groove grinds encaixam.',
        },
        {
          term: '6. Cuff',
          description:
            'Parte que segura tornozelo e permite flexao para frente e para tras. Altura e rigidez mudam suporte, mobilidade e sensacao do boot.',
        },
        {
          term: 'Boot only',
          description:
            'Patins vendido sem frame, rodas e hardware do frame. Normalmente inclui tudo da soul plate para cima.',
        },
      ],
    },
    {
      eyebrow: 'Frame',
      title: 'Frame and components',
      image: '/assets/imgs/learn/definitions/frame-components.png',
      description:
        'Frame e rodas mudam velocidade, lock, estabilidade e risco de wheel bite. Aqui fica a linguagem de setup mais comum.',
      items: [
        {
          term: '1. Frame',
          description:
            'Chassi que segura rodas ou anti-rockers no boot. Pode ser flat, anti-rocker ou freestyle. Em muitos patins modernos usa padrao UFS.',
        },
        {
          term: '2. Groove / H-Block',
          description:
            'Area no meio do frame feita para travar grinds. Tamanho e formato influenciam lock, controle e sensacao em frontside, royale, mizou e outros.',
        },
        {
          term: '3. Axle bolts',
          description:
            'Parafusos que prendem rodas, rolamentos, anti-rockers ou H-block no frame. Podem ter macho/femea ou rosca direto no frame.',
        },
        {
          term: '4. Wheels / bearings',
          description:
            'Rodas de polyurethane com dois rolamentos por roda e spacer entre eles. Diametro permitido depende do frame.',
        },
        {
          term: '5. Anti-Rockers',
          description:
            'Rodas menores e duras no meio do frame. Aumentam espaco para groove, ajudam no lock e reduzem wheel bite.',
        },
      ],
    },
    {
      eyebrow: 'Tipos de frame',
      title: 'General frame types',
      items: [
        {
          term: 'Anti-Rocker',
          description:
            'Setup com rodas grandes nas pontas e anti-rockers no meio. Facilita grinds e evita wheel bite, mas vira menos e costuma ser mais lento.',
        },
        {
          term: 'Flat',
          description:
            'Setup com quatro rodas tocando o chao. Ganha velocidade, curva e estabilidade, mas exige frame bom para reduzir wheel bite nos grinds.',
        },
        {
          term: 'Freestyle',
          description:
            'Setup com duas rodas e nada no meio. Abre groove enorme para grinds, mas rolar sobre obstaculos fica pior e o frame pode sofrer mais no centro.',
        },
      ],
    },
    {
      eyebrow: 'Rodas',
      title: 'Wheel profiles and hardness',
      image: '/assets/imgs/learn/definitions/wheel-profiles.png',
      description:
        'Perfil e dureza da roda mudam controle, velocidade, grip e desgaste. Nao existe escolha unica: depende de superficie e estilo.',
      items: [
        {
          term: '1. Flat / Square profile',
          description:
            'Perfil mais reto, comum em rodas medias ou pequenas. Da estabilidade em saltos e landings, mas deixa curva e bowl menos soltos.',
        },
        {
          term: '2. Rounded profile',
          description:
            'Perfil arredondado, comum em rodas medias ou maiores. Vira melhor e anda mais rapido, com menos estabilidade em landings.',
        },
        {
          term: '3. Semi-Flat profile',
          description:
            'Meio termo entre flat e rounded. Busca equilibrar estabilidade, velocidade e curva.',
        },
        {
          term: '4. Bullet profile',
          description:
            'Perfil pontudo, comum em rodas maiores. Muito rapido e bom para curva/slide, mas menos estavel para aggressive tradicional.',
        },
        {
          term: 'Wheel hardness',
          description:
            'Dureza geralmente fica entre 88a e 95a. Numero menor da mais grip e gasta mais rapido; numero maior desliza mais e dura mais.',
        },
      ],
    },
    {
      eyebrow: 'Grinds',
      title: 'Types of grinds',
      items: [
        {
          term: 'Soul Grinds',
          description:
            'Grinds em que pelo menos um patins trava usando a soul plate, positiva ou negativa. Bin e Tokyo ainda entram aqui quando parte da soul participa.',
        },
        {
          term: 'Groove Grinds',
          description:
            'Grinds em que o lock principal vem do groove/H-block. Nenhum patins deve estar travado pela soul plate.',
        },
        {
          term: 'Special Name Grinds',
          description:
            'Grinds comuns que ganharam nome proprio por historia, regiao ou costume. O significado pode variar entre cenas.',
        },
        {
          term: 'Variation Grinds',
          description:
            'Elementos extras aplicados a grinds, como giro, lado, direcao, grab ou sequencia. Podem combinar com varias bases.',
        },
      ],
    },
    {
      eyebrow: 'Air',
      title: 'Types of air',
      items: [
        {
          term: 'Air',
          description:
            'Salto para cima, para fora ou por cima de algo, com tempo no ar. Pode entrar em grind, sair de grind ou combinar com grab/spin.',
        },
        {
          term: 'Drop',
          description:
            'Salto saindo de um ponto mais alto para pousar mais baixo. Em transicao costuma ser menos pesado que cair direto no flat.',
        },
        {
          term: 'Grabbed Air',
          description:
            'Air em que voce segura um ou os dois patins. Onde e como segura define o nome do grab.',
        },
        {
          term: 'Gaps / Transfers',
          description:
            'Air sobre um vazio ou transferencia de um obstaculo para outro, como de uma rampa para outra.',
        },
        {
          term: 'Spins / Flips',
          description:
            'Giros e flips adicionados a airs ou grabbed airs. Alguns deles definem o nome final da manobra.',
        },
      ],
    },
    {
      eyebrow: 'Outros truques',
      title: 'Other tricks',
      items: [
        {
          term: 'Cess Slides',
          description:
            'Slides no chao ou superficie sem lock real, usando posicao de grind com frame, soul plate ou ambos encostando.',
        },
        {
          term: 'Wall Rides',
          description:
            'Rolar com as rodas em superficie vertical por algum tempo antes de sair. Pode ser com um ou dois patins, em parede, caixa ou pilar.',
        },
      ],
    },
    {
      eyebrow: 'Vocabulario',
      title: 'Vocabulary',
      items: [
        {
          term: 'Drag foot / foot drag',
          description:
            'Quando voce pousa a manobra, mas um pe arrasta atras ou ao lado em vez de sair rolando limpo com os dois patins.',
        },
        {
          term: 'Getting on-top of your grind',
          description:
            'Achar posicao corporal ideal para ficar por cima do lock, manter equilibrio e sustentar o grind por mais distancia.',
        },
        {
          term: 'Full Commit / Fully Committed',
          description:
            'Entrar na manobra sem hesitar: salto confiante, dois pes no ar antes do lock, grab decidido quando a manobra pede.',
        },
        {
          term: 'Laced / Locked',
          description: 'Acertar a manobra do jeito pretendido, com lock correto e saida limpa.',
        },
        {
          term: 'Soul Foot / Leg',
          description:
            'Pe dominante para soul tricks. Se seu soul foot e o esquerdo, por exemplo, ele tende a ser o pe que trava makio e outros souls.',
        },
        {
          term: 'Snake / Snaked',
          description:
            'Cortar a linha de outra pessoa no skatepark, de proposito ou por falta de atencao. Perigoso e ruim para a sessao.',
        },
        {
          term: 'Switch',
          description:
            'Fazer pelo lado menos natural: outro pe, outra direcao de giro, outro shoulder em fakie ou qualquer caminho mais dificil que o seu normal.',
        },
        {
          term: 'Wheel Bite',
          description:
            'Quando a roda encosta no obstaculo durante o grind e freia o patins. Pode travar a manobra e derrubar.',
        },
      ],
    },
  ];
}
