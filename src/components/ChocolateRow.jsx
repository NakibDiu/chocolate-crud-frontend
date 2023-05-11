import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ChocolateRow = ({ chocolate, chocolates, setChocolates }) => {
  const { category, country, name, photoUrl, _id } = chocolate;
  let categoryName = "";
  if (category === "0") {
    categoryName = "Premium";
  } else if (category === "1") {
    categoryName = "Dark";
  } else if (category === "2") {
    categoryName = "Milk";
  } else if (category === "3") {
    categoryName = "Flavoured";
  } else {
    categoryName = "Artisanal";
  }

  const handleDeleteChocolate = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/delete/${_id}`, {
          method: "DELETE", 
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = chocolates.filter((choco) => choco._id !== _id)
              setChocolates(remaining);
            }
          });
      }
    });
  };

  return (
    <tr className="border-b border-solid border-b-gray-300">
      <td className="py-8">
        <img
          src={photoUrl}
          alt="photo"
          className="w-[70px] h-[70px] bg-gray-400 rounded-lg"
        />
      </td>
      <td className="text-base text-center text-gray-500">{name}</td>
      <td className="text-base text-center text-gray-500">{country}</td>
      <td className="text-base text-center text-gray-500">{categoryName}</td>
      <td className="flex items-center justify-center gap-3 py-8">
        <Link to={`/chocolates/update/${_id}`}>
          <button className="w-12 h-12 rounded-lg action-bg flex justify-center items-center">
            <FiEdit size={24} />
          </button>
        </Link>
        <button
          className="w-12 h-12 rounded-lg action-bg flex justify-center items-center"
          onClick={handleDeleteChocolate}
        >
          <RxCross2 size={24} />
        </button>
      </td>
    </tr>
  );
};

export default ChocolateRow;
