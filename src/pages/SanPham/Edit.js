import { Modal, Input, Upload, Image, Form, Row, Col, message, Select } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = (props) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } = props;

  const [form] = Form.useForm();

  const [manufactures, setManufactures] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        name: dataUpdate.name,
        modelCode: dataUpdate.modelCode,
        price: dataUpdate.price,
        year: dataUpdate.year,
        categoryID: dataUpdate.categoryID,
        image: `${dataUpdate.image}`,
        quantity: dataUpdate.quantity,
      });
    }
  }, [dataUpdate]);

  const handleCloseUpdateModal = () => {
    form.resetFields();
    setIsUpdateModalOpen(false);
    setDataUpdate(null);
  };

  const onFinish = async (values) => {
    const { name, modelCode, price, year, categoryID, image, quantity } = values;
    if (dataUpdate) {
      const data = {
        id: dataUpdate.id,
        name,
        modelCode,
        price,
        year,
        categoryID,
        image,
        quantity,
      };
      axios.put('http://localhost:5000/products/' + dataUpdate.id, data);
      handleCloseUpdateModal();
      message.success('Sửa thành công!');
    }
  };

  return (
    <Modal
      title="Cập nhật"
      open={isUpdateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseUpdateModal()}
      maskClosable={false}
      okButtonProps={{ style: { backgroundColor: '#3B82F6' } }}
    >
      <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
        <Row gutter={[15, 0]}>
          <Col span={48} md={24}>
            <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={48} md={24}>
            <Form.Item
              label="ModelCode"
              name="modelCode"
              rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={48} md={24}>
            <Form.Item label="Ảnh" name="image" rules={[{ required: true, message: 'Vui lòng chọn ảnh!' }]}>
              <Image width={150} height={100} src={dataUpdate?.image} />
            </Form.Item>
          </Col>

          <Col span={48} md={24}>
            <Form.Item
              label="Số lượng"
              name="quantity"
              rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={48} md={24}>
            <Form.Item
              label="Giá thành"
              name="price"
              rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={48} md={24}>
            <Form.Item label="year" name="year" rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={48} md={24}>
            <Form.Item
              label="categoryID"
              name="categoryID"
              rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default UpdateProduct;
