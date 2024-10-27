import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-20">
      <p className="text-4xl font-bold">For Nevigate to <Link href={"/contacts"}><span className="text-blue-700 hover:text-blue-400">Contacts</span></Link> </p>
      <p className="text-3xl font-semibold">You Must Log in </p>
      <p>If you did not register yet....</p>
      <Link href={"/signup"}><button className="btn">Resister</button></Link>
      <p>If you have acount</p>
      <Link href={"/api/auth/signin"}><button className="btn">Log In</button></Link>
    </div>
  );
}
