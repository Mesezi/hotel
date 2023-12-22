import React from "react";
import Container from "./Container";

const RoomForm = () => {
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Container>
      <form className="flex flex-col md:grid md:grid-cols-[1fr,1fr,2fr,1fr] w-full gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Check-in*</label>
          <input
            type="text"
            name=""
            placeholder="Check-in date"
            id=""
            className="border-b-[1px] h-12 outline-none placeholder:text-zinc-100/40 border-white bg-white/0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Check-out*</label>
          <input
            type="text"
            name=""
            placeholder="Check-out date"
            id=""
            className="border-b-[1px] h-12 outline-none placeholder:text-zinc-100/40 border-white bg-white/0"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Adults</label>
          <select
            name=""
            id=""
            className="outline-none border-[1px] h-12 px-3 placeholder:text-zinc-100/40 border-white bg-white/0"
          >
            <option defaultValue='1' className="text-black">
              1
            </option>
            {numbers.map((el: number, index:number) => (
              <option key={index} className="text-black">{el}</option>
            ))}
            <option value=""></option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Children</label>
          <select
            name=""
            id=""
            className="outline-none border-[1px] h-12 px-3 placeholder:text-zinc-100/40 border-white bg-white/0"
          >
            <option className="text-black">1</option>
            {numbers.map((el: number, index:number) => (
              <option key={index} className="text-black">{el}</option>
            ))}
            <option value=""></option>
          </select>
        </div>
        </div>
       

        <button
          className="text-black bg-white h-12 border-[1px] border-white text-center
         md:self-end capitalize tracking-wider font-semibold text-sm hover:text-white hover:bg-white/0 ease-in-out duration-300"
        >
          SEARCH
        </button>
      </form>
    </Container>
  );
};

export default RoomForm;
