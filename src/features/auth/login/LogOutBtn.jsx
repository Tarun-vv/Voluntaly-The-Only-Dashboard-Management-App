import { useLogout } from "./useLogout";

function LogOutBtn() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      onClick={logout}
      disabled={isLoading}
      className="p-2 text-lg font-bold text-white bg-blue-400 rounded-lg"
    >
      Log out
    </button>
  );
}

export default LogOutBtn;
