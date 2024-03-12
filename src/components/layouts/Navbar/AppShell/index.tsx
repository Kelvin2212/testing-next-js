import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import(".."));

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const disablseNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={roboto.className}>
      {!disablseNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
