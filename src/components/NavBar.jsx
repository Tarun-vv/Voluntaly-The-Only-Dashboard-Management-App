import LogOutBtn from "../features/auth/login/LogOutBtn";
import CurrentUser from "../features/profile/CurrentUser";

function NavBar() {
  return (
    <div className="flex items-center justify-end gap-6 p-5">
      <CurrentUser />
      <LogOutBtn />
    </div>
  );
}

export default NavBar;
