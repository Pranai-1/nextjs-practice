//If you put this layout page outside of this folder the slug will be undefined


export default async function Layout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
  }) {
    const {slug}=await params
    return (
      <div>
        <h1>Current Slug: {slug}</h1>
        {children}
      </div>
    );
  }
  