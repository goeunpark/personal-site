import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
