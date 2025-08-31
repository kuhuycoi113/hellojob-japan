export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-muted/40">
      <main>{children}</main>
    </div>
  );
}
