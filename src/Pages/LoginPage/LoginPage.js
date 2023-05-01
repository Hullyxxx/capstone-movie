import { Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { localUserServ } from "../../service/localService";
import { userServ } from "../../service/userService";
import { USER_LOGIN } from "../../redux/constant/UserContant";
import Lottie from "lottie-react";
import bg_animate from '../../assets/animate_login.json'
import { setLoginAction, setLoginActionService } from "../../redux/action/userAction";
import { setUserLogin } from "../../toolkit/userSlice";

const LoginPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    userServ
      .postLogin(values)
      .then((res) => {
        message.success("Login thành công");
        // lưu thông tin user vào localStorage
        localUserServ.set(res.data.content);
        dispatch(setLoginAction(res.data.content));
        // chuyển hướng user tới home page
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
        console.log(err);
      });
  };

  const onFinishThunk = (values) => {
    //callback to use navigate
    let onSuccess = () => {
      message.success("Login thành công");
      // lưu thông tin user vào localStorage

      // chuyển hướng user tới home page
      navigate("/");
    }

    dispatch(setLoginActionService(values, onSuccess))
  }

  const onFinishToolKit = (values) => {
    console.log("Success:", values);
    userServ
      .postLogin(values)
      .then((res) => {
        message.success("Login thành công");
        // lưu thông tin user vào localStorage
        localUserServ.set(res.data.content);
        //dispatch(setLoginAction(res.data.content));
        dispatch(setUserLogin(res.data.content))
        // chuyển hướng user tới home page
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen w-sceen flex bg-orange-500 justify-center items-center">
      <div className="container mx-auto p-5 bg-white rounded flex flex-col desktop:flex-row">
        <div className="w-full desktop:w-1/2 h-full">
          <Lottie animationData={bg_animate} loop={true} />
        </div>
        <div className="w-full desktop:w-1/2 h-full">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinishToolKit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              className="flex justify-center items-center"
            >
              <Button
                className="bg-orange-500 hover:text-white hover:border-hidden"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
