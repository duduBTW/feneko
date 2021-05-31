import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { Button, SelecionarTipoContainer } from "@/src/selecionarTipo/styles";
import { Title } from "@/src/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypes } from "../redux/actions/orderActions";
import { RootModel } from "../redux/reducers";
import { OrderModel, orderType } from "../redux/reducers/orderReducer";
import CardTipo from "./card";
import useTranslation from "next-translate/useTranslation";

export interface TipoModel {
  type: orderType;
  labelPt: string;
  labelEn?: string;
  descPt?: string;
  descEn?: string;
  image: string;
}

const tipos: TipoModel[] = [
  {
    image:
      "https://media.discordapp.net/attachments/670725281270726687/838124910387265546/cute.png",

    labelPt: "Arte",
    descPt:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores optio adipisci sequi ipsam vero eum harum, perferendis distinctio maxime?",
    descEn:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores optio adipisci sequi ipsam vero eum harum, perferendis distinctio maxime?",
    labelEn: "Art",
    type: "art",
  },
  {
    image: "https://pbs.twimg.com/media/E0nea50VgAAB2d_?format=jpg&name=medium",
    labelPt: "vTuber",
    labelEn: "vTuber",
    descPt:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores optio adipisci sequi ipsam vero eum harum, perferendis distinctio maxime?",
    descEn:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores optio adipisci sequi ipsam vero eum harum, perferendis distinctio maxime?",
    type: "vtuber",
  },
  {
    image:
      "https://media.discordapp.net/attachments/670725281270726687/838124875109367849/reimu.png?width=416&height=701",
    labelPt: "Design",
    labelEn: "Design",
    descPt:
      "Portugues: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores optio adipisci sequi ipsam vero eum harum, perferendis distinctio maxime?",
    descEn:
      "Ingles: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores optio adipisci sequi ipsam vero eum harum, perferendis distinctio maxime?",
    type: "design",
  },
];

export default function SelecionarTipo() {
  const order = useSelector<RootModel, OrderModel>((state) => state.order);
  const [selecionados, setSelecionados] = useState<number[]>(
    order.orders.map((order) => tipos.findIndex((tipo) => tipo.type === order))
  );

  const dispatch = useDispatch();
  const history = useRouter();

  const { t } = useTranslation();

  const addSelecionado = (data: number) => {
    if (!!selecionados.includes(data)) {
      setSelecionados((s) => s.filter((sItem) => sItem !== data));
    } else {
      setSelecionados((s) => [...s, data]);
    }
  };

  const continueOrder = () => {
    dispatch(
      setTypes(selecionados.map((selecionado) => tipos[selecionado].type))
    );

    history.push("/pedido");
  };

  return (
    <SelecionarTipoContainer>
      <Title>{t("common:tituloSelecionarTipo")}</Title>
      <div className="cards">
        {tipos.map((tipo, index) => (
          <CardTipo
            selected={!!selecionados.includes(index)}
            index={index}
            onClick={addSelecionado}
            data={tipo}
          />
        ))}
      </div>

      <div className="button-container">
        <AnimatePresence exitBeforeEnter={true}>
          {selecionados.length > 0 ? (
            <Button
              whileHover={{
                y: -5,
              }}
              whileTap={{
                y: 5,
              }}
              exit={{ x: 300 }}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={continueOrder}
            >
              {t("common:continuar")}
            </Button>
          ) : (
            <motion.div
              className="selectMore"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{
                x: 200,
                opacity: 0,
              }}
            >
              {t("common:umOuMias")}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SelecionarTipoContainer>
  );
}
