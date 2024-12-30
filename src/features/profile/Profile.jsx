import Heading from "../../components/Heading";
import Signin from "../auth/signin/Signin";

function Profile() {
  return (
    <div>
      <Heading type="h2" marginBottom={6}>Create new user</Heading>
      <Signin />
    </div>
  );
}

export default Profile;
