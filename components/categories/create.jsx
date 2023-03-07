import { Form, Input, Button } from "antd";
import dbClient from "../../database";

const { Item } = Form;
const { TextArea } = Input;

const CategoryForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (fields) => {
    const response = await dbClient.create({
      _type: "category",
      title: "John Appleseed",
      slug: "john-appleseed",
      description: "the description",
    });

    console.log("response -->>", response);
  };
  return (
    <>
      <Form
        name="categories"
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Item name="title" label="Título">
          <Input size="large" />
        </Item>
        <Item name="slug" label="Slug" rules={[{ required: true }]}>
          <Input size="large" />
        </Item>
        <Item
          name="description"
          label="Descripción"
          rules={[{ required: true }]}
        >
          <TextArea rows={4} />
        </Item>
        <Button htmlType="submit" type="primary">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default CategoryForm;
