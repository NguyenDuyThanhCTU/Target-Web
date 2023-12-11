export default function VideoPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-[100vw] p:h-[30vh] d:h-[700px] bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/7.jpg?alt=media&token=12603f1f-f948-4476-972b-b393a047fdf0)] bg-no-repeat bg-cover">
        <div className="w-full h-full bg-[rgba(0,0,0,0.16)]"></div>
      </div>
      {children}
    </>
  );
}
