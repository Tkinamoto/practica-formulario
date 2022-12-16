import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, Input, Radio, Select } from "antd";
import { Option } from "antd/es/mentions";

const Formulario = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2> Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="nombre"
          render={({ field: { value, onChange } }) => {
            return (
              <div>
                <label>Nombre</label>
                <Input
                  type="text"
                  placeholder="Escribe aqui tu nombre aqui tu nombre"
                  size="large"
                  value={value}
                  onChange={onChange}
                ></Input>
              </div>
            );
          }}
        />
        <br></br>
        <Controller
          control={control}
          name="dirrecion"
          render={({ field: { value, onChange } }) => {
            return (
              <div>
                <label>dirrecion</label>
                <Input
                  type="text"
                  placeholder="Escribe aqui tu nombre aqui tu nombre"
                  size="large"
                  value={value}
                  onChange={onChange}
                ></Input>
              </div>
            );
          }}
        />
        <br></br>
        <Controller
          control={control}
          name="edad"
          render={({ field: { value, onChange } }) => {
            return (
              <div>
                <label>Edad</label>
                <Input
                  type="number"
                  size="small"
                  placeholder="Escribe aqui tu edad"
                  onChange={onChange}
                  value={value}
                ></Input>
              </div>
            );
          }}
        />
        <br></br>
        <Controller
          control={control}
          name="pais"
          render={({ field: { value, onChange } }) => {
            return (
              <div>
                <label>pais</label>
                <div>
                  <Select onChange={onChange} value={value}>
                    <Option value="Colombia">Colombia</Option>
                    <Option value="Venezuela">Venezuela</Option>
                    <Option value="Ecuador">Ecuador</Option>
                  </Select>
                </div>
              </div>
            );
          }}
        />
        <br></br>
        <h3>Lenguaje Favorito</h3>
        <Controller
          control={control}
          name="lenguaje"
          render={({ field: { value, onChange } }) => {
            return (
              <Radio.Group onChange={onChange} value={value}>
                <Radio type="radio" value="Css">
                  Css
                </Radio>
                <br></br>
                <Radio type="radio" value="JavaScript">
                  JavaScript
                </Radio>
                <br></br>
                <Radio type="radio" value="Html">
                  Html
                </Radio>
              </Radio.Group>
            );
          }}
        />
        <Controller
          control={control}
          name="envio"
          render={({ field: { value, onChange } }) => {
            return (
              <div onChange={onChange}>
                <Checkbox id="envio" checked={value}>
                  pagar envio express?
                </Checkbox>
              </div>
            );
          }}
        />

        <div>
          <label>Nombre</label>
          <input
            {...register("firstname", {
              required: true,
              minLength: 5,
              maxLength: 10,
            })}
          ></input>
        </div>

        <div>
          <Input type="submit" value="envio"></Input>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
