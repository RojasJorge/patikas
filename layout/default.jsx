import Head from "next/head";
import MainHeader from "../components/structure/MainHeader";
import Categories from "../components/categories";
import { ConfigProvider } from "antd";
import MainFooter from "../components/structure/MainFooter";
// import {BackgroundSite1} from "../components/misc/background";

const MainLayout = ({ children, title }) => {
  return (
    <>
      {/* <BackgroundSite1 /> */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#E2A636",
          },
          components: {
            Alert: {
              colorInfoBg: "#F4EFE9",
              colorInfoBorder: "#E2A636",
            },
          },
        }}
      >
        <Head>
          <title>{title} | Patika's</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Open+Sans:wght@300;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div id="page-container">
          <div id="content-wrap">
            <div className="container">
              <MainHeader headerTitle={title} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-2 sidebar">
                  <Categories />
                </div>
                <div className="col">
                  <div className="container" style={{minHeight: 300}}>{children}</div>
                </div>
              </div>
            </div>
          </div>
          <MainFooter />
        </div>
      </ConfigProvider>
    </>
  );
};

export default MainLayout;
