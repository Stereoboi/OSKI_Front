// type Params = {
//   standingsId: string;
// };

export default function HomePageLayout({
  children,
}: // params: { standingsId },
{
  children: React.ReactNode;
  // params: Params;
}) {
  return <section className="px-12 lg:px-48">{children}</section>;
}
