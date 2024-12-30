import UserGrothLineGraph from "./UserGrothLineGraph";
import UserPieGraph from "./UserPieGraph";
import UserRoleBarGraph from "./UserRoleBarGraph";
import UserVolunteerInEachCampaign from "./UserVolunteerInEachCampaign";

function UserAnalytics() {
  return (
    <div>
      <div className="grid grid-cols-[1.5fr_0.8fr] gap-x-3 gap-y-6">
        <UserGrothLineGraph />
        <UserRoleBarGraph />

        <UserVolunteerInEachCampaign />
        <UserPieGraph />
      </div>
    </div>
  );
}

export default UserAnalytics;
