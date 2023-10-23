import ThemeLayout from "@components/items/ThemeLayout";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeLayout>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/UI%2Fphoto_2023-10-23_13-51-09.jpg?alt=media&token=8db78992-056c-4a94-88ae-047344948b65&_gl=1*1di7lp1*_ga*MTAyMjQwNTAxNS4xNjk4MDI4NjI0*_ga_CW55HF8NVT*MTY5ODA0MzU5My40LjEuMTY5ODA0MzkzNi41Mi4wLjA."
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover object-top"
        />
      </div>
      {children}
    </ThemeLayout>
  );
}
