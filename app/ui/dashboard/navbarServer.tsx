import { cookies } from "next/headers";
import Navbar from "./navbar";

const NavbarServer = () => {
  const user = JSON.parse(cookies().get('currentUser')?.value || '{}');

  return (
    <Navbar token={user?.token || ''} />
  );
};

export default NavbarServer;