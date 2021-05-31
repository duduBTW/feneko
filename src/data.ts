export type Tags =
  | "animador"
  | "emotes"
  | "arte"
  | "modelo"
  | "overlay"
  | "alerta";

export interface Arte {
  type: "video" | "image";
  url: string;
  ratio?: string;
}

export interface ArtistaModelo {
  id: number;
  name: string;
  desc: string;
  profilePic: string;
  tags: Tags[];
  artes: Arte[];
  defSelected?: number;
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

export const dataArtista: ArtistaModelo[] = [
  {
    id: 1,
    profilePic:
      "https://pbs.twimg.com/media/Ew_pEEyVkAMwvQw?format=jpg&name=medium",
    name: "Miro",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero possimus voluptas earum tempore. Assumenda sit sint necessitatibus ipsum suscipit.",
    tags: ["animador", "modelo"],
    artes: [
      {
        type: "image",
        url: "https://pbs.twimg.com/media/Ez0LzvAVoAErSp1?format=png&name=900x900",
        ratio: "1/2",
      },
      {
        type: "image",
        url: "https://pbs.twimg.com/media/EzKF3KdVEAs75TU?format=png&name=900x900",
        ratio: "1/2",
      },
      {
        type: "image",
        url: "https://pbs.twimg.com/media/EySHTGJVoAAAV7L?format=jpg&name=large",
        ratio: "2/1",
      },
      {
        type: "image",
        url: "https://pbs.twimg.com/media/Ev2fhghVIAM85r8?format=jpg&name=medium",
        ratio: "1/2",
      },
    ],
  },
  {
    id: 2,
    profilePic:
      "https://th.bing.com/th/id/OIP.z-8dC4vcz6JBGuxWKbwy3AHaF6?pid=ImgDet&rs=1",
    name: "duduBTW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tags: ["animador", "modelo", "emotes"],
    artes: [
      {
        type: "image",
        url: "https://external-preview.redd.it/QZeMyXxQcO6XyqukE7XAyL-HWl_SlHEL-GXiUCCfr7A.png?auto=webp&s=05e09592be8e8097a4a8d979052ce9f503065f7d",
        ratio: "1/1",
      },
      {
        type: "image",
        url: "https://pm1.narvii.com/6227/6fb793d6fd389efec2e228c7f12c2992c8e799a9_hq.jpg",
        ratio: "1/1",
      },
      {
        type: "image",
        url: "https://i.redd.it/azbdxw7dnjxz.jpg",
        ratio: "1/1",
      },
      {
        type: "image",
        url: "https://img00.deviantart.net/0560/i/2016/226/7/4/new_game__hifumi_3__by_sorakuuhaku-dadwtnx.png",
        ratio: "2/1",
      },
    ],
  },
  {
    id: 3,
    profilePic:
      "https://th.bing.com/th/id/OIP.z-8dC4vcz6JBGuxWKbwy3AHaF6?pid=ImgDet&rs=1",
    name: "Teste",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tags: ["arte", "emotes"],
    artes: [
      {
        type: "image",
        url: "https://pbs.twimg.com/media/E1bTKbUUcAYIt8S?format=jpg&name=4096x4096",
        ratio: "1/1",
      },
      {
        type: "image",
        url: "https://pbs.twimg.com/media/E1iz31nWUAUteGR?format=jpg&name=large",
        ratio: "1/1",
      },
      {
        type: "image",
        url: "https://pbs.twimg.com/media/E1iz31lXoAM2ubU?format=png&name=large",
        ratio: "1/1",
      },
    ],
  },
];
