import { Poste, posteType } from "./components/Poste.js"
import { Header } from "./components/Header.js"
import { SideBar } from "./components/SideBar.js"

import style from './App.module.css'
import './global.css'


const postar: posteType[] = [
         {
            id: 1,
            author: {
                    avatarUrl: "https://github.com/raimundoneto01.png" ,
                    nome: "Neto Resende",
                    cargo: "Web Developer"
                },
            content: [
                    { type: 'paragrafo', content: "Fala galera! "},
                    { type: 'paragrafo', content: 'Acabei de aprender como utilizar'},
                    { type:'paragrafo', content: "ReactJS e agora estou ansioso para mostrar meu novo trabalho em react com type script"},
                    { type: 'link', content: 'Jane.design/doctorcare'},
                    { type: 'link', content: 'Marcely.design/doctorcare'},
                ],
            publishedAt: new Date('06-06-2024 15:48:00'),
         },
        {
          id: 2,
          author: {
                    avatarUrl: "https://github.com/raimundogomes.png" ,
                    nome: "João Victor Resende Ribeiro",
                    cargo: "Desenvolvedor Full Stack"
                },
          content: [
                    { type: 'paragrafo', content: "Fala pessoas! "},
                    { type: 'paragrafo', content: 'Acabei de aprender como utilizar o git hub'},
                    { type:'paragrafo', content: "ReactJS novo trabalho em react com type script"},
                    { type: 'link', content: '##Jjkar.design/doctorcare'},
                    { type: 'link', content: '@Mayki.design/doctorcare'},
                ],
   publishedAt: new Date('01-06-2023 15:48:00'),
   }
];


export function App() {
  return (
    <div>
       <Header/>
        <div className={style.wrapper}>
            <SideBar/>
            <main>
              { postar.map(post=>{
                return (                 
                    <div key={post.id}>
                           <Poste 
                             post={post}
                          />          
                    </div>
                  )
              })}
            </main>
        </div>
    </div>
  )
}


