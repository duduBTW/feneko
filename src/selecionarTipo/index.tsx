import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { Button, SelecionarTipoContainer } from "pages/selecionarTipo/styles";
import { Title } from "pages/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypes } from "../redux/actions/orderActions";
import { RootModel } from "../redux/reducers";
import { OrderModel, orderType } from "../redux/reducers/orderReducer";
import CardTipo from "./card";

export interface TipoModel {
  type: orderType;
  label: string;
  image: string;
}

const tipos: TipoModel[] = [
  {
    image:
      "https://media.discordapp.net/attachments/670725281270726687/838124910387265546/cute.png",
    label: "Arte",
    type: "art",
  },
  {
    image:
      "https://media.discordapp.net/attachments/670725281270726687/838124917924691968/rushia.jpeg",
    label: "vTuber",
    type: "vtuber",
  },
  {
    image:
      "https://media.discordapp.net/attachments/670725281270726687/838124875109367849/reimu.png?width=416&height=701",
    label: "Design",
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

    history.push("pedido");
  };

  return (
    <SelecionarTipoContainer>
      <Title>Selecione o tipo</Title>
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
              transition={{
                delay: 0.3,
              }}
              exit={{ x: 300 }}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={continueOrder}
            >
              Continuar
            </Button>
          ) : (
            <motion.div
              className="selectMore"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200, opacity: 0 }}
            >
              Selecione um ou mais items para continuar
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SelecionarTipoContainer>
  );
}
