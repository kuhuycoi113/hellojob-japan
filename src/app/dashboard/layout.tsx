export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-blue-50/50">
      <main>{children}</main>
    </div>
  );
}
