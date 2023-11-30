"use client";

import { Gpts } from "@/app/types/gpts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

interface Props {
  gpts: Gpts[];
  loading: boolean;
}

export default ({ gpts, loading }: Props) => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 md:py-4 lg:py-4">
        {!loading ? (
          <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
            {gpts.map((item: Gpts, idx: number) => {
              return (
                <Link href={`https://chat.openai.com/g/${item.id}`} target="_blank" key={idx}>
                  <div className="mb-6 gap-6 overflow-hidden shadow-2xl rounded-2xl border-2 border-solid border-primary bg-white p-10">
                    <div className="mb-4 flex flex-row">
                      <LazyLoadImage
                        src={`${item.logo}`}
                        alt=""
                        className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                      />
                      <div className="flex flex-col">
                        <h6 className="text-base font-semibold">{item.name}</h6>
                        <p className="text-sm text-[#636262]">
                          {item.u_name}
                        </p>
                      </div>
                    </div>
                    <p className="mb-4 text-sm text-[#636262]">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto text-center">Loading GPTS...</div>
        )}
      </div>
    </section>
  );
};
