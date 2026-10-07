import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa",
  alternates: { canonical: "/empresa" },
};

export default function EmpresaPage() {
  return (
    <main lang="es" className="container px-3">
      <p>NOMBRE DE EMPRESA: JORDI ENRIC ROIG RAMIS</p>
    </main>
  );
}
