import JenisSampah from "@/components/JenisSampah";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-green-700 px-6 py-20 text-center text-white">
        <h1 className="text-5xl font-bold">
          Recycle!
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg">
          Berbagai jenis sampah dan cara membuangnya dengan benar
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Jenis-jenis Sampah
        </h2>

        <p className="mt-2 text-gray-600">
          Ketahui bagaimana cara membuang berbagai jenis sampah dengan benar.
        </p>

        <JenisSampah />
      </section>
    </main>
  );
}