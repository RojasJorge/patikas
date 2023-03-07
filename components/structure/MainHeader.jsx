import Menu from "./Menu";

const MainHeader = ({ headerTitle, showTopMenu, titleClass }) => {
  return (
    <div className="row">
      <div className="col">
        <header>
          {showTopMenu && <Menu />}
          <h1 className={`${titleClass} header--primary mb-5 mt-5 section`}>
            <span className="text display-1">{headerTitle}</span>
          </h1>
        </header>
      </div>
    </div>
  );
};

export default MainHeader;
