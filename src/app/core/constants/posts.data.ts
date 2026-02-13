import { toUrl } from '../utils/url';

export interface PostData {
  title: string;
  subtitle: string;
  date: string;
  dateISO: string;
  tags: [string, string][];
  slug: string;
}

export interface MultiLang {
  [key: string]: PostData[];
}

const tagsEs : [string, string][] = ['Diseño de Lenguajes', 'Filosofía', 'Personal', 'Principios de Programación', 'Programación', 'Programación Funcional'].map(tag => {
  return [tag, toUrl(tag)]
})

const tagsEn: [string, string][] = ['Language Design', 'Philosophy', 'Personal', 'Programming Principles', 'Programming', 'Functional Programming'].map((tag, ix) => {
  return [tag, tagsEs[ix][1]]
})


const POSTS_DATA_ES: PostData[] = [
  {
    title: 'La semántica del silencio en el diseño de software',
    subtitle: 'Lo que los lenguajes no dicen define lo que podemos crear',
    date: '12 mar. 2026',
    dateISO: '2026-03-12',
    tags: [tagsEs[0], tagsEs[1], tagsEs[3]]
  },
  {
    title: 'Inmutabilidad: El ancla en el caos del estado compartido',
    subtitle: 'Lecciones de programación funcional para sistemas robustos',
    date: '01 mar. 2026',
    dateISO: '2026-03-01',
    tags: [tagsEs[5], tagsEs[4], tagsEs[3]]
  },
  {
    title: 'Arquitectura funcional: El fin de los efectos secundarios',
    subtitle: 'Cómo la pureza transforma la mantenibilidad del software',
    date: '24 feb. 2026',
    dateISO: '2026-02-24',
    tags: [tagsEs[5], tagsEs[3], tagsEs[4]]
  },
  {
    title: 'La estética del código y la filosofía del diseño',
    subtitle: 'Buscando la belleza en la estructura lógica',
    date: '10 feb. 2026',
    dateISO: '2026-02-10',
    tags: [tagsEs[1], tagsEs[0], tagsEs[2]]
  },
  {
    title: 'Sistemas de tipos: Un diálogo entre el hombre y la máquina',
    subtitle: 'La rigurosidad como herramienta de pensamiento',
    date: '28 ene. 2026',
    dateISO: '2026-01-28',
    tags: [tagsEs[4], tagsEs[2], tagsEs[3]]
  },
  {
    title: 'De la imperativa a la declaración: Un viaje personal',
    subtitle: 'Redescubriendo el placer de programar sin estados',
    date: '15 ene. 2026',
    dateISO: '2026-01-15',
    tags: [tagsEs[5], tagsEs[0], tagsEs[4]]
  },
  {
    title: 'Límites del lenguaje y fronteras del software',
    subtitle: 'Lo que no podemos expresar, no podemos construir',
    date: '02 ene. 2026',
    dateISO: '2026-01-02',
    tags: [tagsEs[1], tagsEs[0], tagsEs[3]]
  },
  {
    title: 'Abstracciones fallidas y el coste de la complejidad',
    subtitle: 'Por qué menos es siempre más en el diseño técnico',
    date: '20 dic. 2025',
    dateISO: '2025-12-20',
    tags: [tagsEs[3], tagsEs[2], tagsEs[0]]
  },
  {
    title: 'El lenguaje como extensión del pensamiento funcional',
    subtitle: 'Explorando la semántica de la inmutabilidad',
    date: '05 dic. 2025',
    dateISO: '2025-12-05',
    tags: [tagsEs[5], tagsEs[0], tagsEs[4]]
  },
  {
    title: 'Ética y lógica en el desarrollo moderno',
    subtitle: 'La responsabilidad detrás de cada abstracción',
    date: '22 nov. 2025',
    dateISO: '2025-11-22',
    tags: [tagsEs[1], tagsEs[2], tagsEs[3]]
  },
  {
    title: 'Paradigma funcional: Una necesidad, no un lujo',
    subtitle: 'Resolviendo problemas complejos con funciones simples',
    date: '15 nov. 2025',
    dateISO: '2025-11-15',
    tags: [tagsEs[5], tagsEs[4], tagsEs[3]]
  },
  { title: 'La tiranía de la libertad',
    subtitle: 'La evolución que el razonamiento exige',
    date: '08 nov. 2025',
    dateISO: '2025-11-08',
    tags: [tagsEs[0], tagsEs[1], tagsEs[2], tagsEs[3], tagsEs[4], tagsEs[5]]
  }
].map(post => {
  return {...post, slug: toUrl(post.title)}
});

const POSTS_DATA_EN: PostData[] = [
  {
    title: 'The Semantics of Silence in Software Design',
    subtitle: 'What languages leave unsaid defines what we can create',
    date: 'Mar 12, 2026',
    dateISO: '2026-03-12',
    tags: [tagsEn[0], tagsEn[1], tagsEn[3]],
    slug: POSTS_DATA_ES[0].slug
  },
  {
    title: 'Immutability: The Anchor in the Chaos of Shared State',
    subtitle: 'Functional programming lessons for robust systems',
    date: 'Mar 01, 2026',
    dateISO: '2026-03-01',
    tags: [tagsEn[5], tagsEn[4], tagsEn[3]],
    slug: POSTS_DATA_ES[1].slug
  },
  {
    title: 'Functional Architecture: The End of Side Effects',
    subtitle: 'How purity transforms software maintainability',
    date: 'Feb 24, 2026',
    dateISO: '2026-02-24',
    tags: [tagsEn[5], tagsEn[3], tagsEn[4]],
    slug: POSTS_DATA_ES[2].slug
  },
  {
    title: 'Code Aesthetics and the Philosophy of Design',
    subtitle: 'Seeking beauty within logical structures',
    date: 'Feb 10, 2026',
    dateISO: '2026-02-10',
    tags: [tagsEn[1], tagsEn[0], tagsEn[2]],
    slug: POSTS_DATA_ES[3].slug
  },
  {
    title: 'Type Systems: A Dialogue Between Man and Machine',
    subtitle: 'Rigorousness as a tool for thought',
    date: 'Jan 28, 2026',
    dateISO: '2026-01-28',
    tags: [tagsEn[4], tagsEn[2], tagsEn[3]],
    slug: POSTS_DATA_ES[4].slug
  },
  {
    title: 'From Imperative to Declarative: A Personal Journey',
    subtitle: 'Rediscovering the joy of programming without state',
    date: 'Jan 15, 2026',
    dateISO: '2026-01-15',
    tags: [tagsEn[5], tagsEn[0], tagsEn[4]],
    slug: POSTS_DATA_ES[5].slug
  },
  {
    title: 'Limits of Language and the Frontiers of Software',
    subtitle: 'What we cannot express, we cannot build',
    date: 'Jan 02, 2026',
    dateISO: '2026-01-02',
    tags: [tagsEn[1], tagsEn[0], tagsEn[3]],
    slug: POSTS_DATA_ES[6].slug
  },
  {
    title: 'Failed Abstractions and the Cost of Complexity',
    subtitle: 'Why less is always more in technical design',
    date: 'Dec 20, 2025',
    dateISO: '2025-12-20',
    tags: [tagsEn[3], tagsEn[2], tagsEn[0]],
    slug: POSTS_DATA_ES[7].slug
  },
  {
    title: 'Language as an Extension of Functional Thought',
    subtitle: 'Exploring the semantics of immutability',
    date: 'Dec 05, 2025',
    dateISO: '2025-12-05',
    tags: [tagsEn[5], tagsEn[0], tagsEn[4]],
    slug: POSTS_DATA_ES[8].slug
  },
  {
    title: 'Ethics and Logic in Modern Development',
    subtitle: 'The responsibility behind every abstraction',
    date: 'Nov 22, 2025',
    dateISO: '2025-11-22',
    tags: [tagsEn[1], tagsEn[2], tagsEn[3]],
    slug: POSTS_DATA_ES[9].slug
  },
  {
    title: 'Functional Paradigm: A Necessity, Not a Luxury',
    subtitle: 'Solving complex problems with simple functions',
    date: 'Nov 15, 2025',
    dateISO: '2025-11-15',
    tags: [tagsEn[5], tagsEn[4], tagsEn[3]],
    slug: POSTS_DATA_ES[10].slug
  },
  {
    title: 'The Tyranny of Freedom',
    subtitle: 'The evolution that reasoning demands',
    date: 'Nov 08, 2025',
    dateISO: '2025-11-08',
    tags: [tagsEn[0], tagsEn[1], tagsEn[2], tagsEn[3], tagsEn[4], tagsEn[5]],
    slug: POSTS_DATA_ES[11].slug
  }]

export const POSTS_DATA: MultiLang = {
  es: POSTS_DATA_ES,
  en: POSTS_DATA_EN,
}
