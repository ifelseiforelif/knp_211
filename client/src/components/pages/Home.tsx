import { useEffect } from "react"
import ListOfProducts from "./ListOfProducts";
import ExchangeRates from "../ExchangeRates";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { fetchRates } from "../../state/exchange-rates/exchange-rates-slice";
import { getProducts } from "../../state/products/products-slice";


export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { date, rates } = useSelector((state: RootState) => state.exchangeRates);

  useEffect(() => {
    dispatch(fetchRates(new Date().toISOString().slice(0, 10)));
    dispatch<any>(getProducts());
  }, [dispatch, date]);

  return (
    <>
      <div className="col col-sm-9 mx-auto">
        {rates.length > 0 && <div><h2 className="mt-5 mb-4">Курси валют НБУ</h2><ExchangeRates ccs={["USD", "EUR", "PLN"]} rates={rates}/></div>}
        <div>
          <h1 className="mt-5 mb-4">Товари</h1>
          <ListOfProducts/>
        </div>
      </div>
    </>
  );
}
