import React, { useState } from "react";
import "./main.scss";
import rasm from "../../assets/rasm.jfif";
const main = () => {
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");
  const handleCreate = (e) => {
    e.preventDefault();
    let obj = {
      id: new Date().getTime(),
      value,
      img: rasm,
      price: 50000,
      desc: "A book description is a brief overview of the plot, main characters, and themes of the story. It's an important tool that helps in book promotion and sales. Many times, book descriptions also include information about the author. This helps to build credibility and establish a connection with the reader.z",
    };
    setdata((p) => [...p, obj]);
    setvalue("");
  };
  console.log(data);
  return (
    <div className="section container items-center justify-center w-100 border-solid bg-red-200">
      <form
        className=" form flex flex-col w-72 bg-red-300 "
        onSubmit={handleCreate}
      >
        <label htmlFor="">kitob nomi</label>
        <input
          required
          className="b bg-slate-100"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          type="text"
        />
        <button className="btn text-red-900">Creat</button>
      </form>
      <div className="f flex flex-wrap gap-2">
        {data?.map((e) => (
          <div
            className="card w-72 flex-col bg-clip-padding bg-slate-200"
            key={e.id}
          >
            <div>
              <img src={e.img} alt="" />
            </div>
            <b className="t text-center">{e.value}</b>
            <i className="t text-center text-teal-400">{e.price} so'm</i>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default main;
