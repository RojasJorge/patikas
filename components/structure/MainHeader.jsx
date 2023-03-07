import Menu from "./Menu";

const MainHeader = ({ headerTitle }) => {
  return (
    <>
      <header>
        <Menu />
        <h1 className={`header--primary mb-5 mt-5 section`}>
          <span className="text display-1">{headerTitle}</span>
        </h1>
      </header>
    </>
  );
};

export default MainHeader;
