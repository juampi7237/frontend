import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export default function ProductRow({ id, name, description, price }) {
  const { handlerProductSelectedForm, handlerRemoveProduct } = useContext(ProductContext);

  const onRemoveProduct = (id) => {
    handlerRemoveProduct(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>${price}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() =>
            handlerProductSelectedForm({
              id,
              name,
              description,
              price,
            })
          }
        >
          update
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveProduct(id)}>
          remove
        </button>
      </td>
    </tr>
  );
} 