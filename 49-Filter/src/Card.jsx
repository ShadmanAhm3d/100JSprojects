import React from "react";

const Card = ({ data, searched_item }) => {
  if (!data) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const filteredData = searched_item
    ? data.filter((card) => card.name.toLowerCase() === searched_item.toLowerCase())
    : data;

  return (
    <div className="h-full flex gap-6 flex-wrap justify-center items-center w-full p-4">
      {filteredData.length > 0 ? (
        filteredData.map((card, index) => (
          <div
            key={index}
            className="card w-[200px] h-[250px] bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-700">{card.name}</h3>
            <p className="text-sm text-gray-500 text-center">Age: {card.age}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No matching results</p>
      )}
    </div>
  );
};

export default Card;

