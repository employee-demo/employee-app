import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getEmployee, deleteEmployee } from '../actions/employee';
import { Table, Button, Space, Alert, Spin, Modal} from 'antd';

const EmployeeContainer = ({history}) => {
  // initial state & function

  const selectionType='radio';
  const data = useSelector(state => state.employee.payload, shallowEqual);
  const ifRefresh = useSelector(state => state.employee.ifRefresh, shallowEqual);
  const [employeeId, setEmployeeId]=useState(null);
  const [ifVisible, setIfVisible]=useState(false);
  const [ifSelected, setIfSelected]=useState(false);

  const dispatch = useDispatch();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Serial Number',
      dataIndex: 'sn',
      key: 'sn',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Manager',
      key: 'ismanager',
      dataIndex: 'ismanager',
    },
    {
      title: 'Phone Number',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (data) => (
        <Space size="middle">
          <Button onClick={() =>ViewRow(data.id)} >Edit</Button>
        </Space>
      ),
    },
  ];

  const ViewRow = (id) => {
    history.push({ pathname: "/editemployee/"+id });
  };


  useEffect(() => {
    dispatch(getEmployee())
  }, [dispatch, ifRefresh]);

  const rowSelection = {
    onChange: (selectedRowKeys,selectedRows) => {
      setIfSelected(false)
      setEmployeeId(selectedRows[0].id)
    },
  }

  const detectToDeleteEmployee = () => {
    if (employeeId===null) {
      setIfSelected(true)
    }
    else {
      setIfVisible(true)
    }
  }

  const deleteSelectedEmployee = () => {
    setIfVisible(false)
    dispatch(deleteEmployee(employeeId))
  }

  const getDataItem = rows => (
    rows.map(row => ({
      ...row,
      key: row.id?row.id:"",
      sn: row.sn ? row.sn : "",
      name: row.name ? row.name : "",
      email: row.email ? row.email : "",
      ismanager: row.ismanager===true ? "YES": "NO",
      phone: row.phone ? row.phone : "",
      address: row.address ? row.address : "",
    }))
  )

  /*LIST OF FUNCTIOND END */
  return (
    <>

      {data? (
        <>
        {data.length>0?(
          <>
        {ifSelected?(
          <Alert message="Please select a record" type="error" showIcon />
        ):(<></>)}
      <Table 
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
       columns={columns} dataSource={getDataItem(data)} />
       <Button type="primary" onClick={()=>detectToDeleteEmployee(true)}>Delete selected records</Button>
       <Modal
          title="Please confirm"
          visible={ifVisible}
          onOk={()=>deleteSelectedEmployee()}
          onCancel={()=>setIfVisible(false)}
        >
          <p>Do you confirm to delete this record?</p>
        </Modal>
     </>) :(
       <><h1>No records</h1></>
     )
}
       </>
      ) : (
        <Spin tip="Loading..."></Spin>
      )
}
    </>
  )
}
export default React.memo(EmployeeContainer);