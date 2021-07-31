import { HomeContainer } from "@/src/home/styles";
import { Button } from "@/src/selecionarTipo/styles";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function Home() {
  const history = useRouter();
  return (
    <HomeContainer>
      <header>
        <div className="content">
          <motion.img
            src="https://placewaifu.com/image/1000/1000"
            whileHover={{ x: -10, y: -10 }}
          />
          <div className="info">
            <motion.h1 initial={{ x: 50 }} animate={{ x: 0 }}>
              Feneko
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur molestias vel pariatur ipsum, incidunt ab quaerat
              impedit voluptas modi earum, nam mollitia error adipisci,
              asperiores architecto beatae laboriosam enim?
            </motion.p>

            <Button
              onClick={() => history.push("/selecionarTipo")}
              style={{ width: "100%", padding: "15px 30px" }}
              whileHover={{
                y: -5,
              }}
              whileTap={{
                y: 5,
              }}
              exit={{ x: 300 }}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              See more
            </Button>
          </div>
        </div>
      </header>
    </HomeContainer>
  );
}
