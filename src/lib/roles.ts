import { auth } from "@clerk/nextjs/server";
import { Roles } from "./enums";

const getRole = (role: Roles) => {
  const { sessionClaims } = auth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return sessionClaims?.metadata?.role === role;
};

export default getRole;
