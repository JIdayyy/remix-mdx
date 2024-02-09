import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "1.8" }}>
      <h1>Home</h1>
      <p>Welcome</p>
    </div>
  );
}
