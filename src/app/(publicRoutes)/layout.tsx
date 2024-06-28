import CursorWrapper from "@/components/CursorWrapper";
import Header from "@/components/Header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CursorWrapper>
      <Header />
      {children}
    </CursorWrapper>
  );
}
