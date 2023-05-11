import { NavLink, useLoaderData } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import ChocolateRow from "./ChocolateRow";
import { useState } from "react";

const Chocolates = () => {
  const initialChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(initialChocolates);
  return (
    <div className="mx-5">
      <NavLink
        to="/chocolates/add"
        className="flex items-center gap-2 py-3 px-4 rounded-lg border border-solid border-gray-500 w-fit cursor-pointer"
      >
        <FiPlus size={24} />
        <h2 className="font-medium text-xl leading-8 text-center">
          New Chocolate
        </h2>
      </NavLink>
      {/* chocolates */}
      <table className="w-full my-8 border-collapse">
        <thead className="rounded-lg th-bg">
          <tr>
            <th className="px-4 py-5">Image</th>
            <th className="px-4 py-5">Name</th>
            <th className="px-4 py-5">Country/Factory</th>
            <th className="px-4 py-5">Category</th>
            <th className="px-4 py-5">Action</th>
          </tr>
        </thead>
        <tbody>
          {chocolates.map((choco) => (
            <ChocolateRow
              key={choco._id}
              chocolate={choco}
              chocolates={chocolates}
              setChocolates={setChocolates}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chocolates;
