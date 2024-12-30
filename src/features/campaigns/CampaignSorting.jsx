import { useSearchParams } from "react-router-dom";

function CampaignSorting({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <select
        className="p-3 text-lg bg-gray-100 rounded-lg"
        onChange={handleChange}
      >
        {data?.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CampaignSorting;
