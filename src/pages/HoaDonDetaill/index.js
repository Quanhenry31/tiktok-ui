import React from 'react';
import { Space, Table, Button, Popconfirm, Pagination } from 'antd';
import { EditTwoTone, DeleteTwoTone, EyeOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Create from './Create';
import UpdatePayment from './Edit';
import SearchProduct from './Search';
import { useDebounce } from '~/hooks';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const Payment = () => {
  const navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  const [create, setCreateBtn] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [isdelete, setIsdelete] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const debounceValue = useDebounce(searchValue, 1000);
  const handleSearch = () => {
    console.log(debounceValue);
    axios
      .get('http://localhost:5000/orderDetails/search?q=' + debounceValue)
      .then((response) => setListOfPosts(response.data.data));
  };

  const columns = [
    {
      title: 'ProductID',
      dataIndex: 'productID',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'OrderID',
      dataIndex: 'orderID',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'AllMoney',
      dataIndex: 'allMoney',
    },
    {
      title: 'Action',

      render: (_, record) => (
        <Space size="middle">
          <InboxOutlined onClick={() => handleEyeProduct(record)} />
          <EyeOutlined onClick={() => handleEyeOrderDetail(record)} />
          <EditTwoTone
            twoToneColor="#f57800"
            style={{ cursor: 'pointer', margin: '0 0px' }}
            onClick={() => {
              setIsUpdateModalOpen(true);
              setDataUpdate(record);
            }}
          />
          <Popconfirm
            placement="leftTop"
            title={'Xác nhận xóa ?'}
            description={'Bạn có chắc chắn muốn xóa mục này ?'}
            onConfirm={() => handleDeleteProduct(record)}
            okText="Xác nhận"
            okButtonProps={{ style: { backgroundColor: '#3B82F6' } }}
            cancelText="Hủy"
          >
            <span style={{ cursor: 'pointer' }}>
              <DeleteTwoTone twoToneColor="#ff4d4f" />
            </span>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleDeleteProduct = (data) => {
    axios.delete('http://localhost:5000/orderDetails/' + data.id);
    setIsdelete(true);
  };

  const renderHeader = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
        <div>
          <SearchProduct value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div>
          <Button onClick={() => setCreateBtn(true)} className="bg-blue-500" icon={<PlusOutlined />} type="primary">
            Thêm mới
          </Button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const savedSearchValue = localStorage.getItem('eyeOrderId');
    if (savedSearchValue) {
      setSearchValue(savedSearchValue);
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, [debounceValue]);

  const handleEyeOrderDetail = (data) => {
    localStorage.setItem('eyeOrderDetailId', data.orderID);
    navigate(config.routes.hoaDon);
    console.log(data.orderID);
  };
  const handleEyeProduct = (data) => {
    localStorage.setItem('eyeProductId', data.productID);
    navigate(config.routes.sanPham);
    console.log(data);
  };
  useEffect(() => {
    axios.get('http://localhost:5000/orderDetails').then((response) => {
      setListOfPosts(response.data.data);
      setIsdelete(false);
    });
  }, [create, dataUpdate, isdelete]);
  return (
    <>
      <Table title={renderHeader} rowKey={'id'} columns={columns} dataSource={listOfPosts} />
      <Create isCreateModalOpen={create} setIsCreateModalOpen={setCreateBtn} />
      <UpdatePayment
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};
export default Payment;
