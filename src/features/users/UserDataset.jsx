import { useSearchParams } from "react-router-dom";
import { useCampaigns } from "../campaigns/useCampaigns";
import { useUsers } from "./useUsers";

const PAGE_SIZE = 8;

function UserDataset() {
  const { users, isLoading, error } = useUsers();

  const { campaigns } = useCampaigns();
  function campaignNameCalculator(id) {
    const campaign = campaigns?.find((campaign) => campaign.campaignId === id);
    return campaign.name;
  }
  function volunteerRoleColorGenerator(role) {
    if (role === "Coordinator") {
      return "text-yellow-500";
    } else if (role === "Volunteer") {
      return "text-blue-500";
    } else if (role === "Manager") {
      return "text-orange-500";
    }
  }

  let result = users;

  const count = result.length;

  const [searchParams, setSearchParams] = useSearchParams();
  // FIXME: try using the || OR operator
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (currentPage) {
    const from = (currentPage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;

    result = result.slice(from, to);
  }

  if (pageCount <= 1) return null;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="grid grid-cols-[100px_230px_320px_250px_120px_270px]  overflow-y-auto w-[900px]  mb-4 ">
        <div className="p-2 text-xl bg-blue-400">User ID</div>
        <div className="p-2 text-xl bg-yellow-400">Volunteer name</div>
        <div className="p-2 text-xl bg-red-400">Email</div>
        <div className="p-2 text-xl bg-green-400">Phone No</div>
        <div className="p-2 text-xl bg-violet-400">Role</div>
        <div className="p-2 text-xl bg-indigo-400">Campaign Name</div>

        {result?.map((user) => (
          <>
            <div className="p-1 text-lg">
              {`${user.user_id}`.padStart(3, "0")}
            </div>
            <div className="p-1 text-lg">{user.name}</div>
            <div className="p-1 text-lg">{user.email}</div>
            <div className="p-1 text-lg">{user.phone}</div>
            <div
              className={`p-1 text-lg ${volunteerRoleColorGenerator(user.role)}`}
            >
              {user.role}
            </div>
            <div className="p-1 text-lg">
              {campaignNameCalculator(user.campaign_id)}
            </div>
          </>
        ))}
      </div>

      <div>
        <p className="text-lg">
          Showing {/* 10 is the magic number */}
          <span style={{ fontWeight: "bold" }}>
            {(currentPage - 1) * PAGE_SIZE + 1}
          </span>{" "}
          to{" "}
          <span style={{ fontWeight: "bold" }}>
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>{" "}
          of <span style={{ fontWeight: "bold" }}>{count}</span> results
        </p>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="p-2 mr-3 transition-all duration-300 bg-gray-100 rounded-lg hover:bg-blue-400 hover:text-white"
        >
          &larr; Prev
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="p-2 transition-all duration-300 bg-gray-100 rounded-lg hover:bg-blue-400 hover:text-white"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default UserDataset;

/*
<div className="p-4 text-lg bg-gray-100 ">User ID</div>
      <div className="p-4 text-lg bg-gray-100 ">Name</div>
      <div className="p-4 text-lg bg-gray-100 ">Email</div>
      <div className="p-4 text-lg bg-gray-100 ">Phone No</div>
      <div className="p-4 text-lg bg-gray-100 ">Role</div>
      <div className="p-4 text-lg bg-gray-100 ">Campaign</div>

      {users?.map((volunteer) => (
        <>
          <p className="p-3 text-base">
            {`${volunteer.user_id}`.padStart(3, "0")}
          </p>
          <p className="p-3 text-base">{volunteer.name}</p>
          <p className="p-3 text-base">{volunteer.email}</p>
          <p className="p-3 text-base">{volunteer.phone}</p>
          <p
            className={`p-3 text-base font-bold ${
              volunteer.role === "Volunteer"
                ? "text-green-400 rounded-full"
                : volunteer.role === "Coordinator"
                  ? "text-blue-400 rounded-full"
                  : "text-red-400 rounded-full"
            }`}
          >
            {volunteer.role}
          </p>
          <p className="p-3 text-base">{volunteer.campaign_id}</p>
        </>
      ))}

*/
