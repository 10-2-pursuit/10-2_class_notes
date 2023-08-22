import { Link } from "react-router-dom";

export default function ProductList({ products, type }) {
  return (
    <section>
      <h2>All {type}</h2>
      <article className="products">
        <ul>
          {products.map((product) => {
            return (
              <Link to={`/${type.toLowerCase()}/${product.id}`}>
                <li key={product.id}>
                  <h4>{product.name}</h4>
                  <img src={product.image} alt={product.name} />
                </li>
              </Link>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
