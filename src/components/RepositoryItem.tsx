
 interface RepositoryItemProps{
   nomeDaProp:{
     name:string;
     description:string;
     html_url:string;
   }
 }
 
 export function RepositoryItem(props:RepositoryItemProps){
    return(
        <li>
          <strong>{props.nomeDaProp.name}</strong>
          <p>{props.nomeDaProp.description}</p>

          <a href={props.nomeDaProp.html_url}>
            Acessar Repositório
            </a>
        </li>
    )
}