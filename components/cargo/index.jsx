import { Table, Tag } from "antd";
// import History from "./timeline";

const columns = [
  {
    title: "Título",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Empresa",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Conductor",
    dataIndex: "driver",
    key: "driver",
  },
  {
    title: "Placa",
    dataIndex: "plate",
    key: "plage",
  },
  {
    title: "Licencia",
    dataIndex: "licenceNumber",
    key: "licenceNumber",
  },
  {
    title: "Estado",
    dataIndex: "status",
    key: "status",
    render: (text) => renderStatus(text),
  },
];

const renderStatus = (status) => {
  switch (status) {
    case "SUCCESS":
      return <Tag color="green">Finalizado</Tag>;
      break;

    case "ONHOLD":
      return <Tag color="default">En espera</Tag>;
      break;

    case "ENROUTE":
      return <Tag color="blue">En ruta</Tag>;
      break;

    case "PROBLEM":
      return <Tag color="red">Problema</Tag>;
      break;

    default:
      break;
  }
};

const rows = [
  {
    id: 1,
    title: "Chasis 45 pies",
    company: "Transportes Sosa.",
    driver: "Carlos Rivas",
    plate: "P99088-7",
    licenceNumber: "89898989s8df98",
    status: "ENROUTE",
  },
  {
    id: 2,
    title: "Cabezal Mercedes Benz",
    company: "Transportes Sosa.",
    driver: "Marlon Sosa",
    plate: "D89s9-7",
    licenceNumber: "Licence No.",
    status: "SUCCESS",
  },
  {
    id: 3,
    title: "Refrigerado",
    company: "Transportes Sosa.",
    driver: "Elmer Sicai",
    plate: "D8777s9-7",
    licenceNumber: "Licence No.",
    status: "ONHOLD",
  },
  {
    id: 4,
    title: "Plataforma N.",
    company: "Transportes Sosa.",
    driver: "Ricardo Navas",
    plate: "Q8898-7",
    licenceNumber: "licence no.",
    status: "PROBLEM",
  },
  {
    id: 5,
    title: "Chasis 45 pies",
    company: "Transportes Sosa.",
    driver: "Carlos Rivas",
    plate: "P99088-7",
    licenceNumber: "89898989s8df98",
    status: "ENROUTE",
  },
  {
    id: 6,
    title: "Cabezal Mercedes Benz",
    company: "Transportes Sosa.",
    driver: "Marlon Sosa",
    plate: "D89s9-7",
    licenceNumber: "Licence No.",
    status: "SUCCESS",
  },
  {
    id: 7,
    title: "Refrigerado",
    company: "Transportes Sosa.",
    driver: "Elmer Sicai",
    plate: "D8777s9-7",
    licenceNumber: "Licence No.",
    status: "ONHOLD",
  },
  {
    id: 8,
    title: "Plataforma N.",
    company: "Transportes Sosa.",
    driver: "Ricardo Navas",
    plate: "Q8898-7",
    licenceNumber: "licence no.",
    status: "PROBLEM",
  },
  {
    id: 9,
    title: "Chasis 45 pies",
    company: "Transportes Sosa.",
    driver: "Carlos Rivas",
    plate: "P99088-7",
    licenceNumber: "89898989s8df98",
    status: "ENROUTE",
  },
  {
    id: 10,
    title: "Cabezal Mercedes Benz",
    company: "Transportes Sosa.",
    driver: "Marlon Sosa",
    plate: "D89s9-7",
    licenceNumber: "Licence No.",
    status: "SUCCESS",
  },
  {
    id: 11,
    title: "Refrigerado",
    company: "Transportes Sosa.",
    driver: "Elmer Sicai",
    plate: "D8777s9-7",
    licenceNumber: "Licence No.",
    status: "ONHOLD",
  },
  {
    id: 12,
    title: "Plataforma N.",
    company: "Transportes Sosa.",
    driver: "Ricardo Navas",
    plate: "Q8898-7",
    licenceNumber: "licence no.",
    status: "PROBLEM",
  },
];

const Cargo = () => {
  const tableRow = (record, _index) => {
    switch (record.status) {
      case "ENROUTE":
        return "enroute";
        break;
      case "ONHOLD":
        return "onhold";
        break;
      case "SUCCESS":
        return "success";
        break;
      case "PROBLEM":
        return "problem";
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={rows}
        rowKey={(record) => record.id}
        // expandable={{
        //   expandedRowRender: (record) => <History />,
        // }}
        // rowClassName={(record, index) => tableRow(record, index)}
        size="large"
        style={{ width: "100%" }}
        bordered
      />
    </>
  );
};

export default Cargo;
