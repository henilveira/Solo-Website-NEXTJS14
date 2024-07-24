// session-utils.js
import { getServerSession } from "next-auth";
import { Session } from "next-auth";

export async function fetchSession(): Promise<Session | null> {
  return await getServerSession();
}
