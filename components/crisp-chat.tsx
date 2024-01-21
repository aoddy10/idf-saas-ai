"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { AppConfig } from "@/lib/config";

export const CrispChat = () => {
  useEffect(() => {
    // const crispId = AppConfig.CRISP_WEBSITE_ID as string;
    Crisp.configure("4979e094-010f-4e1f-b341-17ffc054cd66");
  }, []);

  return null;
};
