"use client";

import { useEffect, useState } from "react";

import Brand from "./components/Brand";
import { Gpts } from "./types/gpts";
import GptsList from "./components/GptsList";
import Search from "./components/Search";

export default () => {
  const [gpts, setGpts] = useState<Gpts[]>([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_GPTS_API_KEY || "";

  const fetchGpts = async () => {
    setLoading(true);
    const resp = await fetch("https://api.apigpts.dev/gpts?random=true", {
      method: "get",
      headers: {
        "Authorization": API_KEY
      },
    });
    setLoading(false);

    if (resp.ok) {
      const res = await resp.json();
      if (res) {
        setGpts(res);
      }
    }
  };
  useEffect(() => {
    fetchGpts();
  }, []);

  return (
    <>
      <Brand count={16184} />
      <Search setGpts={setGpts} setLoading={setLoading} />
      <GptsList gpts={gpts} loading={loading} />
    </>
  );
};
