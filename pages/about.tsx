import Layout from "@/components/Layout";
import Link from "next/link";

export default function about() {
  return (
    <Layout>
      <div>
        <div className="w-80 mx-auto bg-green-400">
          <h1>ABOUT PAGE</h1>
          <Link href="/">go to home page</Link>
        </div>
      </div>
    </Layout>
  );
}
