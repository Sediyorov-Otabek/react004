import React, { useState } from "react";
import "./main.scss";
import rasm from "../../assets/rasm.jfif";
const main = () => {
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");
  const [price, setprice] = useState("");
  const [desc, setdesc] = useState("");
  const handleCreate = (e) => {
    e.preventDefault();
    let obj = {
      id: new Date().getTime(),
      value,
      img: rasm,
      price,
      desc,
    };
    setdata((p) => [...p, obj]);
    setvalue("");
    setprice;
    setdesc;
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
        <label htmlFor="">kitob narxi</label>
        <input
          required
          className="b bg-slate-100"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          type="text"
        />
        <label htmlFor="">kitob izohi</label>
        <input
          required
          className="b bg-slate-100"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
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
