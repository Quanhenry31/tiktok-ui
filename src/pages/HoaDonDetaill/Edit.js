import { Modal, Input, Upload, Image, Form, Row, Col, message, Select } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatePayment = (props) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } = props;

  const [form] = Form.useForm();

  const [manufactures, setManufactures] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        productID: dataUpdate.productID,
        orderID: dataUpdate.orderID,
        quantity: dataUpdate.quantity,
        allMoney: dataUpdate.allMoney,
      });
    }
  }, [dataUpdate]);

  const handleCloseUpdateModal = () => {
    form.resetFields();
    setIsUpdateModalOpen(false);
    setDataUpdate(null);
  };

  const onFinish = async (values) => {
    const { productID, orderID, quantity, allMoney } = values;
    if (dataUpdate) {
      const data = {
        id: dataUpdate.id,
        productID,
        orderID,
        quantity,
        allMoney,
      };
      axios.put('http://localhost:5000/orderDetails/' + dataUpdate.id, data);
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
            <Form.Item
              label="ProductID"
              name="productID"
              rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={48} md={24}>
            <Form.Item
              label="OrderID"
              name="orderID"
              rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={48} md={24}>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={48} md={24}>
            <Form.Item
              label="AllMoney"
              name="allMoney"
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

export default UpdatePayment;
