
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState} from 'react';
import { Avatar } from './Avatar'
import { Coment } from './Coment'

import style from './Poste.module.css'

interface author {
    nome: string;
    cargo: string;
    avatarUrl: string
}
interface content {
    type: 'paragrafo' | 'link';
    content: string
}
export interface posteType {
    id:number;
    author: author;
    publishedAt: Date;
    content: content[];
}
interface postProps{
    post: posteType;
}



export function Poste({post}: postProps){
    const { avatarUrl, nome, cargo} = post.author;
    
    const [ coment, setComent ] = useState<string[]>([]);
    const [ newComents, setNewComents ] = useState<string>('')
   

    const publishedAtFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedAtDateFormattedToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    function handlerComent(event: FormEvent){
        event.preventDefault()
        setComent([...coment, newComents])
        setNewComents("")
    }
    function handlerNewComents(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("")
        setNewComents(event.target.value)
    }
    function handlerInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Campo Obrigatório")
    }
    function deletarComents(deletList: string){
        const deletarComentario = coment.filter(coment => {
            return coment !== deletList;
        });
        setComent(deletarComentario);
    }
    const isDisableValue = newComents.length === 0
  return(
     <article className={style.poste}>
          <header>
              <div className={style.author}>
                  <Avatar src={avatarUrl} />
                  <div className={style.authorInfo}>
                      <strong>{nome}</strong>
                      <span>{cargo}</span>
                  </div>
              </div>
              <time title={publishedAtFormatted} dateTime={post.publishedAt.toISOString()}>
                   {publishedAtDateFormattedToNow}
                </time>
          </header>
          <div className={style.content}>
            {post.content.map((line) => {
                if(line.type === 'paragrafo'){
                    return <p key={line.content}>{line.content}</p>
                }else if ( line.type === 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
            })}
          </div>
        <form onSubmit={handlerComent} className={style.comentForm}>
            <strong>Deixe seu cometário</strong>
                    <textarea 
                        name='comentar'
                        value={newComents}
                        onChange={handlerNewComents}
                        placeholder='comentar....' 
                        onInvalid={handlerInvalid}
                        required
                        />
             <footer>
                <button type='submit' disabled={isDisableValue}> Publicar</button>
           </footer>
        </form>
        <div className={style.comentList}>
                { coment.map(coment => {
                    return (
                        <Coment
                            key={coment} 
                            cometar={coment} 
                            ondeletarComents={deletarComents}
                        />)
                })}
        </div>
     </article>
  )
}