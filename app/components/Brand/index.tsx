"use client";

interface Props {
  count: number;
}

export default ({ count }: Props) => {
  return (
    <section className="relatve">
      <div className="mx-auto w-full max-w-7xl px-4 mt-12 md:mt-24">
        <div className="mx-auto w-full max-w-6xl text-center">
          <h1 className="text-3xl mt-4 font-bold md:text-7xl">
             Awesome Top GPTs Store
          </h1>
          <p className="mt-8 mb-8 md:mt-12 md:mb-12 text:lg md:text-4xl">
            <span className="font-bold text-[#F9B572]">16890</span> Awesome GPTs stored
          </p>
        </div>
      </div>
    </section>
  );
};
