import { createContext, useState } from "react";
import { toast } from "react-toastify";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  console.log(basket);

  //!sepete ürün ekleyen ve miktar arttıran fonksiyon
  const addToBasket = (product) => {
    //sepette eleman kontrolü
    const found = basket.find((i) => i.id === product.id);

    if (!found) {
      //sepette ürün yoksa
      setBasket(basket.concat({ ...product, amount: 1 }));

      toast.success("sepete ürün eklendi");
    } else {
      //sepette ürün varsa bir arttır
      const updated = { ...found, amount: found.amount + 1 };

      //sepette güncelenen elemanı güncel değerini ekle
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));

      //sepeti güncelle
      setBasket(newBasket);
      toast.info(`ürün miktarı güncellendi: ${updated.amount}`);
    }
  };

  //!sepetten ürün silen fonksiyon
  const removeFromBasket = (delete_id) => {
    //id'si bilinen ürünü sepetten sil
    const filtred = basket.filter((i) => i.id !== delete_id);
    //sepeti güncelle
    setBasket(filtred);
    toast.error("Ürün sepetten kaldırıldı");
  };

  //!ürün miktarını azaltan fonksiyon
  const decreaseAmount = (delete_id) => {
    //azaltılacak ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    //eğer ürünün miktarı 1 den fazla ise
    if (found.amount > 1) {
      //miktarı güncelle
      const updated = { ...found, amount: found.amount - 1 };

      //diziye aktar

      const newBasket = basket.map((i) => (i.id == updated.id ? updated : i));

      //sepeti güncelle
      setBasket(newBasket);
      toast.info(`Ürün miktarı azaltıldı: ${updated.amount}`);
    } else {
      //ürün miktarı 1 e eşit ise
      removeFromBasket(delete_id);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        addToBasket,
        removeFromBasket,
        decreaseAmount,
      }}
    >
      {/*  */}
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
