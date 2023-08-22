import styles from "@/styles/Home.module.css";

export default function Home() {
  let name = "test"
  const test = () => {
    fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({name}),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <div>
      <button onClick={test}>test</button>
    </div>
  );
}
