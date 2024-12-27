import { useSearchParams } from "react-router-dom";

function Filter({ data, filterValue, end = false, marginBottom = 0 }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(filter) {
    searchParams.set("funds", filter);
    setSearchParams(searchParams);
  }

  return (
    <div
      className={`${end ? "flex justify-end" : ""} ${marginBottom ? `mb-${marginBottom}` : ""}`}
    >
      {data?.map((el) => (
        <button
          className={`p-2 text-lg transition-all duration-100 bg-gray-100 text-black rounded-lg hover:bg-blue-400 hover:text-white ${filterValue === el.value ? "text-white bg-blue-400" : ""} `}
          onClick={() => handleFilter(el.value)}
          key={el.value}
        >
          {el.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
