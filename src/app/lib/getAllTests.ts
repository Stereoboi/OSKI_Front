import { cookies } from "next/headers";

export async function getAllTests() {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sessionSig = cookieStore.get("session.sig");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/tests`, {
    headers: {
      "Content-Type": "application/json",
      credentials: "same-origin",
      Cookie: `session=${session?.value}; session.sig=${sessionSig?.value}`,
    },
  });
  const data = await res.json();

  return data;
}
