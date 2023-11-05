import { cookies } from "next/headers";

export async function getTestById(id: string) {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sessionSig = cookieStore.get("session.sig");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/tests/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: `session=${session?.value}; session.sig=${sessionSig?.value}`,
    },
    credentials: "include",
  });
  const data = await res.json();

  return data;
}
