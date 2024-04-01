import React from "react";

interface Props {
  image: string;
  phone?: string;
  email: string;
  institutionName: string;
  address: {
    region: string;
    woreda: string;
    zone: string;
    summary: string;
  };
}

const Card = ({ image, phone, email, address, institutionName }: Props) => {
  return (
    <div className="transform bg-white shadow-md rounded-3xl transition duration-300 hover:scale-105 hover:cursor-pointer gap-7 my-4 py-5 px-6 sm:mx-auto mx-2 sm:w-4/5 xl:w-3/5">
      <div className="flex gap-4">
        <img src={image} className="h-40 w-60 rounded-3xl" />
        <div className="flex-col">
          <p className="text-blue-500">
            {address.summary + " " + address.region}
          </p>
          <h1 className="text-2xl font-poppins font-bold">{institutionName}</h1>
          <div className="flex gap-2 mb-3">
            <img src="./assets/location.svg" alt="" />
            <p className="font-poppins text-black font-">3 Kilo Meters away</p>
          </div>
          <div className="flex gap-2">
            <img src="./assets/phone.svg" alt="" />
            <p className="text-lg font-medium">{phone}</p>
          </div>
          <p className="text-lg font-medium">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
