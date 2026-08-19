import Image from "next/image";
import { supabase } from "@/lib/supabase";

const wasteColors: Record<string, string> = {
  Plastik: "bg-blue-500 border-blue-500",
  Kertas: "bg-yellow-500 border-yellow-500",
  Organik: "bg-green-500 border-green-500",
  B3: "bg-red-500 border-red-500",
};

export default async function JenisSampah() {
  const { data, error } = await supabase
    .from("jenis_sampah")
    .select("*")
    .order("id");

  if (error) {
    return <p>Failed to load table.</p>;
  }

  return (
    <section className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((waste) => {
        const color =
          wasteColors[waste.nama] ||
          "bg-gray-500 border-gray-00";

        return (
          <article
            key={waste.id}
            className={`overflow-hidden rounded-2xl border ${color} shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg`}
          >
            {waste.img && (
              <div className="relative h-48 w-full">
                <Image
                  src={waste.img}
                  alt={waste.nama}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-bold">
                {waste.nama}
              </h2>

              <p className="mt-3 text-white-700">
                {waste.desc}
              </p>

              <div className="mt-5">
                <p className="font-semibold">
                  Cara pembuangan
                </p>

                <p className="text-white-700">
                  {waste.pembuangan}
                </p>
              </div>

              <div className="mt-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    waste.daur_ulang
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {waste.daur_ulang
                    ? "Dapat didaur ulang"
                    : "Tidak dapat didaur ulang"}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}