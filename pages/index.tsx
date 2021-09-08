import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Ecommerce de ejemplo</h1>
      <Link href="/list">
        <a>Ver Productos</a>
      </Link>
    </div>
  );
}
