import React, { useState, useEffect } from "react";
import styles from "../components/CountriesFlag.module.css";

export const CountriesFlag = () => {
  const [data, setData] = useState([]);
  const getCountriesData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      // console.log(
      //   countries[0].flags.svg,
      //   countries[0].name.common,
      //   "countries"
      // );
      setData(countries);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCountriesData();
  }, []);
  return (
    <>
      <h1>Countries and their Flags</h1>

      <div className={styles.container}>
        {/* <h1>Countries and their Flags</h1> */}
        {data.map((item) => {
          return (
            <div key={item.cca3} className={styles.card}>
              <img
                className={styles.flag}
                src={item.flags.svg}
                alt={`Flag of ${item.name.common}`}
              />
              <h3 className={styles.text}>{item.name.common}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
