import { ClientHeader } from "@/components/layout/client-header";
import { Footer } from "@/components/layout/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
