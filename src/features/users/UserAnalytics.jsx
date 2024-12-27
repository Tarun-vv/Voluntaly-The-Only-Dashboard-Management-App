import UserRoleBarGraph from "./UserRoleBarGraph";
import UserVolunteerInEachCampaign from "./UserVolunteerInEachCampaign";

function UserAnalytics() {
  return (
    <div className="grid grid-cols-[1.5fr_0.8fr]">
      <div>
        <UserVolunteerInEachCampaign />
      </div>
      <div className="self-end">
        <UserRoleBarGraph />
      </div>
    </div>
  );
}

export default UserAnalytics;
