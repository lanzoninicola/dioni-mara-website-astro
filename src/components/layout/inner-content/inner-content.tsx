interface InnerContentProps {
  children: React.ReactNode;
  clazzName?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export default function InnerContent({
  children,
  clazzName,
}: InnerContentProps) {
  return (
    <div
      className={`mx-auto h-full w-full max-w-7xl px-4 md:px-6 ${clazzName}`}
      data-element="inner-content"
    >
      {children}
    </div>
  );
}
