 export function RepositoryItem(props){
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