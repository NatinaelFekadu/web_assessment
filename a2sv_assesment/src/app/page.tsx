"use client";
import Card from "@/components/Card";
import { useGetHospitalDataQuery } from "@/lib/features/api/apiSlice";
import { HospitalType } from "@/lib/features/hospital/type";
import React, { useState } from "react";

const Home = () => {
  const { data, error, isLoading } = useGetHospitalDataQuery();
  const [filteredData, setFilteredData] = useState<HospitalType[]>([]);

  const handleFilter = (
    event: React.ChangeEvent<HTMLInputElement>,
    hospitalData: HospitalType[]
  ) => {
    const { value } = event.target;
    const filtered = hospitalData.filter((data) =>
      data.institutionName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  if (error) {
    console.log(error);
    return (
      <h1 className="font-poppins text-3xl font-black text-center">Error</h1>
    );
  }

  if (isLoading) {
    return (
      <h1 className="font-poppins text-3xl font-black text-center">Loading</h1>
    );
  }

  if (data) {
    const hospitalData: HospitalType[] = data.data;
    const displayData = filteredData.length > 0 ? filteredData : hospitalData;

    return (
      <div>
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 mt-2 mx-auto p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          onChange={(e) => handleFilter(e, hospitalData)}
        />
        {displayData.map((data) => (
          <Card
            institutionName={data.institutionName}
            phone={data.phoneNumbers[0]}
            email={data.emails[0]}
            address={data.address}
            image={data.photo}
            key={data._id}
          />
        ))}
      </div>
    );
  }

  return null; // Return null if there's no data yet
};

export default Home;
