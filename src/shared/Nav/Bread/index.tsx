import React, { useState } from "react";
import locs from "./items";
import { GrFormNext } from "react-icons/gr";
import { BreadContainer, BreadItem } from "./styles";
import { useSelector } from "react-redux";
import { RootModel } from "@/src/redux/reducers";
import { GlobalModel } from "@/src/redux/reducers/globalReducers";
import { useRouter } from "next/dist/client/router";

export default function Bread() {
  const { loc: current } = useSelector<RootModel, GlobalModel>(
    (state) => state.global
  );
  const history = useRouter();

  if (!current) return null;
  let last = locs.find((item) => item.id === current);
  if (!last) return null;
  let stack = [last];

  while (last?.before) {
    last = locs.find((item) => item.id === last?.before);
    //@ts-ignore
    stack = [last, ...stack];
  }

  const redirect = (link: string) => history.push(link);

  return (
    <BreadContainer>
      {stack.map((item) => (
        <>
          <BreadItem
            onClick={() => redirect(item.link)}
            active={item.id === current}
          >
            <GrFormNext className="icon" />
            <div className="label">{item?.name}</div>
          </BreadItem>
        </>
      ))}
    </BreadContainer>
  );
}
