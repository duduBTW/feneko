import { instance } from "@/shared/api";
import ButtonsBottom from "@/shared/Buttons/Bottom";
import { FinalizarContainer } from "@/src/finalizar/styles";
import { IFenekoTipoPedido } from "@/src/models/itemPedido";
import { ItemPedidoCompact, ItemPedidoCompactString } from "@/src/pedido/item";
import { RootModel } from "@/src/redux/reducers";
import { OrderModel } from "@/src/redux/reducers/orderReducer";
import { Title } from "@/src/styles";
import { Box, CircularProgress } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Finalizar() {
  const { t, lang } = useTranslation();
  const [formData, setFormData] = useState({});

  const handleClange = (e: any) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { orders, descriptions, otderItems } = useSelector<
    RootModel,
    OrderModel
  >((state) => state.order);
  const [tipoPedidos, setTipoPedido] = useState<IFenekoTipoPedido[] | null>(
    null
  );

  const history = useRouter();

  useEffect(() => {
    if (!(orders?.length > 0)) history.push("/selecionarTipo");

    fetchData();
  }, [orders]);

  const fetchData = async () => {
    const { data: pedidos } = await instance.get(`/api/pedido/item`, {
      params: { pedido: orders },
    });

    setTipoPedido(pedidos);
  };

  function sendEmail(e: any) {
    setLoading(true);
    e.preventDefault();
    let data = "";

    tipoPedidos?.map((tipoPedido) => {
      data = data += ItemPedidoCompactString({
        image: tipoPedido.image,
        // @ts-ignore
        types: tipoPedido.tags,
        title: lang == "en" ? tipoPedido.titleEn : tipoPedido.titlePt,
        desc: lang == "en" ? tipoPedido.descEn : tipoPedido.descPt,
        type: tipoPedido._id,
        otderItems,
        descriptions,
        lang,
        descricao: t("common:descricao"),
        tipo: t("common:tipo"),
        naoInformada: t("common:naoInformada"),
      });
    });

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_av1dv5l",
        template_id: "template_usjp05d",
        user_id: "user_dTFVIjGTrm0Gwpqyeygih",
        template_params: {
          data: data,
          ...formData,
        },
      })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => setSuccess(false))
      .finally(() => {
        setLoading(false);
      });
  }

  if (success) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        mt={6}
      >
        <h2>{t("common:sucess")}</h2>
        <br />
        <DoneIcon fontSize="large" style={{ color: "#015150" }} />
      </Box>
    );
  }

  if (loading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        mt={6}
      >
        <h2>{t("common:loading")}</h2>
        <br />
        <CircularProgress size={22} style={{ color: "#015150" }} />
      </Box>
    );
  }

  return (
    <FinalizarContainer className="default-container">
      <div className="finish">
        <Title style={{ fontSize: 42 }}>{t("common:tituloFormulario")}</Title>
        <br />
        <br />
        <form onSubmit={sendEmail}>
          <div className="input">
            <label htmlFor="name">{t("common:nome")}</label>
            <input onChange={handleClange} name="name" />
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input onChange={handleClange} name="email" />
          </div>
          <div className="input">
            <label htmlFor="discord">Discord</label>
            <input onChange={handleClange} name="discord" />
          </div>

          <ButtonsBottom
            nextType={"submit"}
            backLabel={t("common:voltar")}
            onCancel={() => history.push("/pedido")}
            nextLabel={t("common:finalizar")}
            onSubmit={() => {}}
          />
        </form>
        <br />
        <br />
      </div>
      {!tipoPedidos ? (
        <CircularProgress />
      ) : (
        <div className="info">
          <Title style={{ fontSize: 32, paddingLeft: 50 }}>
            {t("common:tituloInfoPedidos")}
          </Title>

          {tipoPedidos.map((tipoPedido) => {
            return (
              <ItemPedidoCompact
                key={tipoPedido._id}
                image={tipoPedido.image}
                // @ts-ignore
                types={tipoPedido.tags}
                title={lang == "en" ? tipoPedido.titleEn : tipoPedido.titlePt}
                desc={lang == "en" ? tipoPedido.descEn : tipoPedido.descPt}
                type={tipoPedido._id}
              />
            );
          })}
        </div>
      )}
    </FinalizarContainer>
  );
}

Finalizar.loc = 4;
