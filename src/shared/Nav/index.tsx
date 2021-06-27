import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useState } from "react";
import Bread from "./Bread";
import { NavContainer, SidenavContainer } from "./styles";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function NavBar() {
  const history = useRouter();
  const [open, setopen] = useState(false);
  const { t, lang } = useTranslation();
  const lisks = [
    {
      link: "/selecionarTipo",
      name: "common:navPedido",
    },
    {
      link: "/portfolio",
      name: "common:navPortfolio",
    },
    {
      link: "/artista",
      name: "common:navArtistas",
    },
  ];

  const redirect = (link: string) => {
    if (open) setopen(false);
    history.push(link);
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 780px)",
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 300);
    }
  }, [open]);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setopen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <>
      <NavContainer>
        <div className="content">
          <div className="items">
            <div className="title">
              <span>Feneko App</span>
            </div>
            <Bread />
          </div>
          {!isMobile ? (
            <div className="items">
              {lisks.map((link) => (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => redirect(link.link)}
                >
                  {t(link.name)}
                </div>
              ))}
              <select
                value={lang}
                onChange={async (e) => await setLanguage(e.target.value)}
                style={{ border: "none" }}
              >
                <option value="en">EN</option>
                <option value="pt-BR">PT-BR</option>
              </select>
            </div>
          ) : (
            <GiHamburgerMenu
              className="closeIcon"
              onClick={() => setopen(true)}
            />
          )}
        </div>
      </NavContainer>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <SidenavContainer
            initial={{
              x: "100%",
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              bounce: 0.8,
            }}
            animate={{ x: "0%" }}
          >
            <AiOutlineClose
              onClick={() => setopen(false)}
              className="closeIcon"
            />
            {lisks.map((link) => (
              <div
                style={{ cursor: "pointer", fontSize: "2rem" }}
                onClick={() => redirect(link.link)}
              >
                {t(link.name)}
              </div>
            ))}
          </SidenavContainer>
        )}
      </AnimatePresence>
    </>
  );
}
