"use client"

import { hello } from "@monorepo-env/libs";
export default function Home() {
  return (
    <>
      <h1>monorepo-env</h1>
      <button onClick={hello}>hello!!</button>
    </>
  );
}
