import { useState, useEffect } from "react";
import RateType from "../types/rate-type";


function ExchangeRates ({ ccs, rates }: { ccs: string[], rates: RateType[] }) {
    const [filteredRates, setFilteredRates] = useState(rates.filter(rate => ccs.includes(rate.cc)));
    const [sortOrder, setSortOrder] = useState<string>("");
    const [sortOrderText, setSortOrderText] = useState("Сортувати");
  
    useEffect(() => {
        setFilteredRates(rates.filter(rate => ccs.includes(rate.cc)));
    }, [rates, ccs]);
  
    const sortRatesByCurrencyNameAscending = () => {
        let sortedRates = [...filteredRates];
        sortedRates.sort((r1, r2) => r1.txt.localeCompare(r2.txt));
        setFilteredRates(sortedRates);
        setSortOrder("asc");
        setSortOrderText("Сортувати за спаданням");
    };
  
    const sortRatesByCurrencyNameDescending = () => {
        let sortedRates = [...filteredRates];
        sortedRates.sort((r1, r2) => r2.txt.localeCompare(r1.txt));
        setFilteredRates(sortedRates);
        setSortOrder("desc");
        setSortOrderText("Сортувати за зростанням");
    };
  
    const resetSorting = () => {
        setFilteredRates(rates.filter(rate => ccs.includes(rate.cc)));
        setSortOrder("");
        setSortOrderText("Сортувати");
    };
  
    const toggleSorting = () => {
        if (sortOrder === "asc") {
            sortRatesByCurrencyNameDescending();
        } 
        else {
            sortRatesByCurrencyNameAscending();
        }
    };

    return (
        <>
            <div className="exchange-rates-btn-wrapper">
                <button className="btn btn-primary" onClick={toggleSorting}>{sortOrderText}</button>
                {sortOrder !== "" && <button className="btn btn-primary" onClick={resetSorting}>Скинути сортування</button>}
            </div>
            <table className="exchange-rates-table mt-4" cellSpacing="0" cellPadding="0">
                <thead>
                    <tr className="exchange-rates-tr">
                        <th></th>
                        <th>Назва</th>
                        <th>Курс</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {filteredRates.map(rate => (
                    <tr className="exchange-rates-tr" key={rate.r030}>
                        <td>{rate.cc}</td>
                        <td>{rate.txt}</td>
                        <td>{rate.rate}</td>
                        <td>{rate.r030}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default ExchangeRates;