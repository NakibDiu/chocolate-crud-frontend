import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
  const initialChocolateData = useLoaderData();
  const { category, country, name, photoUrl, _id } = initialChocolateData;
  const navigate = useNavigate();

  const handleUpdateChocolate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photoUrl = form.photo.value;

    const updatedChocolate = { name, country, category, photoUrl };

    fetch(`http://localhost:5000/chocolates/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <Link
        to="/"
        className="flex items-center gap-2 pb-8 border-b border-solid border-b-gray-200"
      >
        <BiArrowBack size={24} />
        <p className="text-xl leading-8 font-medium text-gray-700">
          All Chocolates
        </p>
      </Link>
      <div className="mt-8 bg-[#f3f3f3] rounded-lg py-12">
        <div className="space-y-2">
          <h1 className="text-2xl text-center text-black font-semibold">
            Update {name}
          </h1>
          <p className="text-base text-gray-600 text-center">
            Use the below form to update a new product
          </p>
        </div>
        <form
          className="mt-12 w-4/5 mx-auto space-y-8"
          onSubmit={handleUpdateChocolate}
        >
          <div className="space-y-4">
            <label
              htmlFor="name"
              className="text-base font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className=" block w-full p-5 pr-0 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm lg:text-lg"
              placeholder="Chocolate Name"
              defaultValue={name}
            />
          </div>
          <div className="space-y-4">
            <label
              htmlFor="country"
              className="text-base font-semibold text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              className=" block w-full p-5 pr-0 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm lg:text-lg"
              placeholder="Enter Country Name"
              defaultValue={country}
            />
          </div>
          <div className="space-y-4">
            <label
              htmlFor="category"
              className="text-base font-semibold text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              className=" block w-full p-5 pr-0 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm lg:text-lg"
              defaultValue={category}
            >
              <option
                value="0"
                className="text-sm lg:text-lg font-medium text-gray-800"
              >
                Premium
              </option>
              <option
                value="1"
                className="text-sm lg:text-lg font-medium text-gray-800"
              >
                Dark
              </option>
              <option
                value="2"
                className="text-sm lg:text-lg font-medium text-gray-800"
              >
                Milk
              </option>
              <option
                value="3"
                className="text-sm lg:text-lg font-medium text-gray-800"
              >
                Flavored
              </option>
              <option
                value="4"
                className="text-sm lg:text-lg font-medium text-gray-800"
              >
                Artisanal
              </option>
            </select>
          </div>
          <div className="space-y-4">
            <label
              htmlFor="photo"
              className="text-base font-semibold text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className=" block w-full p-5 pr-0 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm lg:text-lg"
              placeholder="Enter Photo Url"
              defaultValue={photoUrl}
            />
          </div>
          <button
            type="submit"
            className="w-full text-center text-xl font-semibold py-4 btn-bg rounded-lg text-white "
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateChocolate;
