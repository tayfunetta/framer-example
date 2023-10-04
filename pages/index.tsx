import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="w-80 mx-auto text-center text-4xl bg-red-300">
          <h2>Hello World HOO HOO</h2>
          <Link href="/about">go to about page</Link>
        </div>
      </div>
    </Layout>
  );
}
