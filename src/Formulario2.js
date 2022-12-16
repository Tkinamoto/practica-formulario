import React from "react";
import { useForm } from "react-hook-form";
import { Input, /* Cascader, Select, Space */ } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
//import { Option } from "antd/es/mentions";

const Formulario2 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Formulario2</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombres</label>
          <Input
            size="large"
            type="text"
            placeholder="escribe aqui tus nombres"
            {...register("1")}
          ></Input>
        </div>
        <br></br>

        <div>
          <label>Apellidos</label>
          <Input
            prefix={<UserOutlined />}
            type="text"
            placeholder="escribe aqui tus apellidos"
            {...register("2")}
          ></Input>
        </div>
        <br></br>

        <div>
          <label>Edad</label>
          <Input
            size="small"
            type="number"
            placeholder="escribe aqui tu edad"
            {...register("3")}
          ></Input>
        </div>
        <br></br>

        <div>
          <label>Numero</label>
          <Input
            type="number"
            placeholder="escribe aqui tu numero de telefono"
            {...register("4")}
          ></Input>
        </div>
        <br></br>

        <div>
          <label>Barra de busqueda</label>
          <Input type="text" addonBefore="http://" addonAfter=".com" defaultValue="html" {...register("5")}></Input>
        </div>
        <br></br>

        <div>
        <label>Barra de busqueda 2</label>
          <Input addonAfter={<SettingOutlined></SettingOutlined>} defaultValue="html" {...register("6")}></Input>
        </div>
        <br></br>

        <div>
        <label>Barra de busqueda 3</label>
          <Input addonBefore="http://" suffix=".com" defaultValue="html" {...register("7")}></Input>
        </div>
        <br></br>
        
        <Input type="submit" value="enviar"></Input>
      </form>
    </div>
  );
};

export default Formulario2;
