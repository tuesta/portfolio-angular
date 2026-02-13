import { toUrl } from '../utils/url';

export interface PostData {
  title: string;
  subtitle: string;
  date: string;
  dateISO: string;
  tags: string[];
  slug: string;
}

export const POSTS_DATA: PostData[] = [
  {
    title: 'La semántica del silencio en el diseño de software',
    subtitle: 'Lo que los lenguajes no dicen define lo que podemos crear',
    date: '12 mar. 2026',
    dateISO: '2026-03-12',
    tags: ['Diseño de Lenguajes', 'Filosofía', 'Principios de Programación']
  },
  {
    title: 'Inmutabilidad: El ancla en el caos del estado compartido',
    subtitle: 'Lecciones de programación funcional para sistemas robustos',
    date: '01 mar. 2026',
    dateISO: '2026-03-01',
    tags: ['Programación Funcional', 'Programación', 'Principios de Programación']
  },
  {
    title: 'Arquitectura funcional: El fin de los efectos secundarios',
    subtitle: 'Cómo la pureza transforma la mantenibilidad del software',
    date: '24 feb. 2026',
    dateISO: '2026-02-24',
    tags: ['Programación Funcional', 'Principios de Programación', 'Programación']
  },
  {
    title: 'La estética del código y la filosofía del diseño',
    subtitle: 'Buscando la belleza en la estructura lógica',
    date: '10 feb. 2026',
    dateISO: '2026-02-10',
    tags: ['Filosofía', 'Diseño de Lenguajes', 'Personal']
  },
  {
    title: 'Sistemas de tipos: Un diálogo entre el hombre y la máquina',
    subtitle: 'La rigurosidad como herramienta de pensamiento',
    date: '28 ene. 2026',
    dateISO: '2026-01-28',
    tags: ['Programación', 'Diseño de Lenguajes', 'Principios de Programación']
  },
  {
    title: 'De la imperativa a la declaración: Un viaje personal',
    subtitle: 'Redescubriendo el placer de programar sin estados',
    date: '15 ene. 2026',
    dateISO: '2026-01-15',
    tags: ['Programación Funcional', 'Personal', 'Programación']
  },
  {
    title: 'Límites del lenguaje y fronteras del software',
    subtitle: 'Lo que no podemos expresar, no podemos construir',
    date: '02 ene. 2026',
    dateISO: '2026-01-02',
    tags: ['Filosofía', 'Diseño de Lenguajes', 'Principios de Programación']
  },
  {
    title: 'Abstracciones fallidas y el coste de la complejidad',
    subtitle: 'Por qué menos es siempre más en el diseño técnico',
    date: '20 dic. 2025',
    dateISO: '2025-12-20',
    tags: ['Principios de Programación', 'Personal', 'Diseño de Lenguajes']
  },
  {
    title: 'El lenguaje como extensión del pensamiento funcional',
    subtitle: 'Explorando la semántica de la inmutabilidad',
    date: '05 dic. 2025',
    dateISO: '2025-12-05',
    tags: ['Programación Funcional', 'Diseño de Lenguajes', 'Programación']
  },
  {
    title: 'Ética y lógica en el desarrollo moderno',
    subtitle: 'La responsabilidad detrás de cada abstracción',
    date: '22 nov. 2025',
    dateISO: '2025-11-22',
    tags: ['Filosofía', 'Personal', 'Principios de Programación']
  },
  {
    title: 'Paradigma funcional: Una necesidad, no un lujo',
    subtitle: 'Resolviendo problemas complejos con funciones simples',
    date: '15 nov. 2025',
    dateISO: '2025-11-15',
    tags: ['Programación Funcional', 'Programación', 'Principios de Programación']
  },
  { title: 'La tiranía de la libertad',
    subtitle: 'La evolución que el razonamiento exige',
    date: '08 nov. 2025',
    dateISO: '2025-11-08',
    tags: ['Diseño de Lenguajes', 'Filosofía', 'Personal', 'Principios de Programación', 'Programación', 'Programación Funcional']
  }
].map(post => {
  console.log(toUrl(post.title))
  return {...post, slug: toUrl(post.title)}
});
