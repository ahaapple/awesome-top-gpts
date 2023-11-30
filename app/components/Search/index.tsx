"use client";

import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";

import { Gpts } from "@/app/types/gpts";

interface Props {
  setGpts: Dispatch<SetStateAction<Gpts[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}


export default ({ setGpts, setLoading }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [content, setContent] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleInputKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && !e.shiftKey) {
      if (e.keyCode !== 229) {
        e.preventDefault();
        handleSearch(content);
      }
    }
  };

  const API_KEY = process.env.NEXT_PUBLIC_GPTS_API_KEY || "";

  const handleSearch = async (question: string) => {
    if (!question) {
      return;
    }

    try {
      const uri = `https://api.apigpts.dev/gpts?search=${question}`;
      setLoading(true);
      const resp = await fetch(uri, {
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
    } catch (e) {
      console.log("search failed: ", e);
    }
  };

  return (
    <section className="relatve mt-10 mb-10">
      <div className="mx-auto w-full max-w-2xl px-4 text-center">
        <div className="flex items-center relative">
          <input
            type="text"
            className="flex-1 px-4 py-3 border-2 border-primary bg-white rounded-lg"
            placeholder="Search for GPTs you like"
            ref={inputRef}
            value={content}
            onChange={handleInputChange}
            onKeyDown={handleInputKeydown}
          />
        </div>
      </div>
    </section>
  );
};
