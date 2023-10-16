import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import "@styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StateProvider>
          <DataProviders>
            <AuthProviders>
              <>{children}</>
            </AuthProviders>
          </DataProviders>
        </StateProvider>
      </body>
    </html>
  );
}
