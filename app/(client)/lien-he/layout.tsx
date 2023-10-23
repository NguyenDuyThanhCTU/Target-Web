export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgILC2hs044LQuv9zQW8Yus3ykAYdGkrL-VCoYURF3kLi0CqZq2upFI3LPqRgyaCCpunHWmPPiKoewmoJJ4n_xbCGOT0-CW-ou5OL_xF0lXSS1oM42as_i4wAZ-hl_iJ-0YjtJqqkPd22etKVgMDG7DS5dXvxRSdcUhbWxWqZLQNj1j626URnaT8SAY/s16000/Tau-cao-toc-Trung-Trac-khoi-hanh.JPG"
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover"
        />
      </div>
      {children}
    </>
  );
}
