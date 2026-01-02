"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { log } from "console";

export default function Home() {
  const [value, setValue] = useState(0);
  const [background, setBackground] = useState("white");
  const router = useRouter();
  // const [iput, setiput] = useState();

  const [input, setInput] = useState<string>("");
  console.log( "----------------" ,input);
  
  

useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans" style={{ backgroundColor: background }}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <input type="email" value={input} onChange={(e) => setInput(e.target.value)} />
      </main>
    </div>
  );
}
