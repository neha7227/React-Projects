import React, { useState, useEffect } from "react";
import styles from "../components/CountriesFlag.module.css";
import SearchCountries from "./SearchCountries";

export const CountriesFlag = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const getCountriesData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      console.log(
        countries[3].flags.svg,
        countries[3].name.common,
        "countries"
      );
      setData(countries);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // console.error(error);
    }
  };
  useEffect(() => {
    getCountriesData();
  }, []);

  // useEffect(() => {
  //   let timerID = 0;
  //   if (title) {
  //     timerID = setTimeout(() => {
  //       getCountriesData();
  //     }, 5000);
  //   }
  //   return () => {
  //     clearTimeout(timerID);
  //   };
  // }, [title]);

  const filteredCountries = data.filter((country) =>
    country.name.common.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <>
      <h1>Countries and their Flags</h1>
      <SearchCountries value={title} ChangedValue={setTitle} />
      {/* {data.includes({ title }) ?  */}

      <div className={styles.container}>
        {/* <h1>Countries and their Flags</h1> */}
        {filteredCountries.map((item) => {
          return (
            <div key={item.cca3} className={styles.card}>
              <img
                className={styles.flag}
                src={item.flags.svg}
                alt={`Flag of ${item.name.common}`}
              />
              <h2 className={styles.text}>{item.name.common}</h2>
            </div>
          );
        })}
      </div>

      {/* )} */}
    </>
  );
};
