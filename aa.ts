export type Tags = "Animador Live 2D" | "Emotes" | "Arte" | "Modelo" | "etc";

export interface Artista {
  name: string;
  desc: string;
  tags: Tags[];
}

export interface UserInfo {
  name: string;
  twitter: string;
  discord: string;
  email: string;
}

export interface Pedido {
  type: Tags;
  desc: string;
  information: UserInfo;
}

// ^^^
export interface Galeria {}
