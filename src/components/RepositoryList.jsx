
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
const repository = {
    name:'unfold',
    description:'Forms em React',
    link:'http//github/reporitory'
    
}
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem nomeDaProp ={repository} />
        <RepositoryItem nomeDaProp ={repository} />
        
      </ul>
    </section>
  );
}
