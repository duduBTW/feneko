export const transform = (staticStr: any, ...tags: any) => {
  let oneEmpty = false;
  for (let i = 0; i < tags.length; i++) {
    if (!tags[i]) oneEmpty = true;
  }

  if (oneEmpty) return null;

  let srt = staticStr[0];
  for (let i = 0; i < tags.length; i++) {
    srt += tags[i] + staticStr[i + 1];
  }
  return srt;
};

export default [
  {
    id: 1,
    name: "Selecione o tipo",
    link: transform`/selecionarTipo`,
  },
  {
    id: 2,
    before: 1,
    name: "Informações do Pedido",
    link: transform`/pedido`,
  },
  {
    id: 3,
    before: 2,
    name: "Selecionar Artista",
    link: transform`/selecionarArtista`,
  },
  {
    id: 4,
    before: 2,
    name: "Finalizar",
    link: transform`/finalizar`,
  },
];
