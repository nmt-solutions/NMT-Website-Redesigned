import { useUser } from "@clerk/nextjs";
import { Roles } from "@/lib/enums";

const useAdmin = () => {
  const { user } = useUser();
  return user?.publicMetadata.role === Roles.Admin;
};

export default useAdmin;
