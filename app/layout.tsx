"use client";
import Fetch from "@components/items/Fetch";
import Loading from "@components/items/Loading";
import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "@styles/global.css";
import { ContractProvider } from "@context/ContractProviders";
import { Sepolia } from "@thirdweb-dev/chains";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider
          activeChain={Sepolia}
          clientId={process.env.CLIENT_ID}
        >
          <ContractProvider>
            <StateProvider>
              <DataProviders>
                <AuthProviders>
                  <Fetch />
                  <Loading />
                  <>{children}</>
                </AuthProviders>
              </DataProviders>
            </StateProvider>
          </ContractProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
