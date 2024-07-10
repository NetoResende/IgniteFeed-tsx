import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Coment.module.css";
import  {Avatar}  from "./Avatar";
import { useState } from "react";

interface comentsProps {
  cometar: string;
  ondeletarComents: (umParametro: string)=>void;
}

export function Coment({ cometar, ondeletarComents }: comentsProps) {
  const [lickcount, setLickCount] = useState(0);

  function handlerCount() {
    setLickCount((state) => {
      return state + 1;
    });
  }
  function handlerDeletar() {
    ondeletarComents(cometar);
  }
  return (
    <div className={style.coment}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1718465388901-9c628510c01e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={style.comentBox}>
        <div className={style.comentContent}>
          <header>
            <div className={style.authorEndTime}>
              <strong>Neto Resende</strong>
              <time
                title="19 de junho de 2024 as 16:05"
                dateTime="19-06-2024 as 16:05"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handlerDeletar} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{cometar}</p>
        </div>
        <footer>
          <button onClick={handlerCount}>
            <ThumbsUp />
            Aplaudir<span>{lickcount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
