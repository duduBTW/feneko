import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div
      className="default-container"
      style={{
        // width: "100vw",
        height: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://media.tenor.com/images/9ef462cf5eb6455b463ad83ee128e418/tenor.gif"
        alt="fubuki lost"
      />
      <br />
      <br />
      <h1>404</h1>
      <h2>{t("common:404")}</h2>
    </div>
  );
}
