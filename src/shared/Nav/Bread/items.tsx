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
    namePt: "Selecione o tipo",
    nameEn: "Select Type",
    link: transform`/selecionarTipo`,
  },
  {
    id: 2,
    before: 1,
    namePt: "Informações do Pedido",
    nameEn: "Order Information",
    link: transform`/pedido`,
  },
  {
    id: 3,
    before: 2,
    namePt: "Selecionar Artista",
    nameEn: "Select Artist",
    link: transform`/selecionarArtista`,
  },
  {
    id: 4,
    before: 2,
    namePt: "Finalizar",
    nameEn: "Finish",
    link: transform`/finalizar`,
  },
];
