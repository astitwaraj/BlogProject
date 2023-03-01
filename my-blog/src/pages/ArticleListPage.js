import articles from "./article-content";
import { Link } from "react-router-dom";
const ArticleListPage = () => {
  return (
    <>
        <h1>Articles </h1>
    {
    articles.map(arti => (
      <div>
        <h3><Link key={arti.name} to={`/articles/${arti.name}`}>{arti.title}</Link></h3>
        <p>{arti.content[0].substring(0,150) }....</p>
      </div>
    ))}
    </>
  
  );
}
export default ArticleListPage;