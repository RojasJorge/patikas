import { Alert } from "antd";
import { useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { alert_and_news } from "../database";
import { isBoolean } from "lodash";

const AlertsAndNews = () => {
  const notifications = useStoreState((state) => state.general.notifications);

  useEffect(() => {
    alert_and_news();
  }, [notifications]);

  return (
    <>
      <div className="row">
        {notifications.length > 0
          ? notifications.map((item, key) => {
              if (item.status) {
                return (
                  <div className="col-12" key={key}>
                    <Alert
                      message={item.title}
                      description={`El estado es: ${isBoolean(item.status)} ${
                        item.description
                      }`}
                      type={item.type}
                      className={`mb-4 animate__animated ${item?.classes}`}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
    </>
  );
};

export default AlertsAndNews;
