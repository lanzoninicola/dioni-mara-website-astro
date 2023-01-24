export default function StickyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sticky top-[1px] z-0 overflow-hidden bg-clip-border">
      {children}
    </div>
  );
}
