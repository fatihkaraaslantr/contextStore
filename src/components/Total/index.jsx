import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { toast } from "react-toastify";

const Total = () => {
  const { basket } = useContext(BasketContext);

  //dizideki toplam amount miktarı hesaplama
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);

  //toplam fiyatı hesapla

  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  return (
    <div className="rounded my-5 shadow border p-4 d-flex flex-column justify-content-between">
      <div className="fs-5 ">
        <p>
          Sepette <span className="text-warning fw-bold">{totalAmount}</span>{" "}
          adet ürün var
        </p>
        <p>
          toplam fiyat{" "}
          <span className="text-warning fw-bold">{totalPrice.toFixed(2)}</span>{" "}
          $
        </p>
      </div>
      <button
        onClick={() => toast.success("sepet onaylandı")}
        className="btn btn-success py-2 px-2"
      >
        Sepeti Onayla
      </button>
    </div>
  );
};

export default Total;
