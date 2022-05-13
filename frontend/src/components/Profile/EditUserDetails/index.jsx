import { useState, useEffect } from 'react'
import { Form, Input, Button, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import connection from "../../../config.json";
import axios from "axios";

import Sidebar from "../../StackOverflow/Sidebar";
import './index.css'
import { Link } from 'react-router-dom';

const TextArea = Input.TextArea

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const EditUserDetails = () => {

    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [myform] = Form.useForm();

    useEffect(() => {
        let search = window.location.search
        
        const id = search.replace('?id=','')

        axios
            .get(`${connection.connectionURL}/api/user/find/` + id)
            .then((response) => {

                const { data } = response;

                myform.setFieldsValue({
                    ...data
                })

                setImageUrl(data.img)

            })
            .catch((err) => {
                throw err;
            });
    }, []);

    const onFinish = (values) => {
        let search = window.location.search
        
        const id = search.replace('?id=','')
        
        if (typeof values.img !== 'string') {
            const { md5 } = values.img.file.response.data;
            
            values.img = md5
        }
        
        console.log('Success:', values);

        axios.put(`${connection.connectionURL}/api/user/update/` + id,{
            ...values
        }).then(res=>{
            message.success("ok!")
        })

    };

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {

            const { md5 } = info.file.response.data;

            setImageUrl(md5)
            setLoading(false)

            return md5
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (<div className="stack_index">
        <div className="stack_index_content">
            <Sidebar />
            <div className="edit-user-details-page">
                <Form
                    name="basic"
                    form={myform}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        label="User Name"
                        name="username"
                        rules={[{ required: true, message: 'Please input your User Name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="About"
                        name="about"
                        rules={[{ required: true, message: 'Please input your About!' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item
                        label="Avatar"
                        name="img"
                        rules={[{ required: true, message: 'Please update your Avatar!' }]}
                    >
                        <Upload
                            name="file"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action={connection.connectionURL + "/api/upload"}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={connection.connectionURL + "/static/images/" + imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button style={{marginLeft:'10px'}}>
                            <Link to="/userprofile">
                            back
                            </Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>)
}

export default EditUserDetails