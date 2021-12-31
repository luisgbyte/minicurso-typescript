// Interfaces

// definição
interface Game {
  title?: string;
}

interface DLC2 {
  extra?: string;
}

// interseção | extend

interface GameCollection extends Game, DLC2 { }

// implements

class CreateGame2 implements GameCollection { }

// declarar função
interface getSimilars {
  (title: string): void;
}

// =================== Diferenças ==================== //
// interface ID extends number { }

// não consigo definir tuplas na interface *
interface Tuple {
  0: number;
  1: number;
}

[1, 2, 3] as Tuple;

// Pode ter múltiplas declarações e ele une de mesmo nome

interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "bla",
  b: "foo"
}

// vantagem: quando estiver criando libs, prefira Interfaces, porque são mais extensíveis
