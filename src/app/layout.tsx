import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unicontabilidadedigital.com"),
  title: {
    default: "Uni Contabilidade Digital | A contabilidade vai além dos números",
    template: "%s | Uni Contabilidade Digital",
  },
  description:
    "Contabilidade 100% digital com atendimento humano de verdade. Abertura de empresa, contabilidade mensal, planejamento tributário e departamento pessoal para empresas de todos os portes, em todo o Brasil.",
  keywords: [
    "contabilidade digital",
    "contador online",
    "abertura de empresa",
    "planejamento tributário",
    "contabilidade Vila Velha",
    "contabilidade Espírito Santo",
    "trocar de contador",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.unicontabilidadedigital.com",
    siteName: "Uni Contabilidade Digital",
    title: "Uni Contabilidade Digital | A contabilidade vai além dos números",
    description:
      "Contabilidade 100% digital com atendimento humano de verdade. Cuide do seu negócio enquanto a Uni cuida da burocracia.",
    images: [{ url: "/brand/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uni Contabilidade Digital",
    description:
      "Contabilidade 100% digital com atendimento humano de verdade.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
