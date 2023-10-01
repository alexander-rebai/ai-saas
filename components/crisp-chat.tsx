"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("745a8da8-eac2-4f2b-9d47-ca6590ac8f7b");
  }, []);

  return null;
};
