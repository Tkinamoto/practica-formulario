import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  Checkbox,
  Input,
  Select,
  Radio,
  InputNumber,
  Button,
  ConfigProvider,
  Divider,
} from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";

const Hook = () => {
  const { Title, Paragraph } = Typography;

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  function conErrores(data) {
    console.log(data, "error");
  }
  return (
    <div>
      <Title>Hook</Title>
      <Divider></Divider>
      <form onSubmit={handleSubmit(onSubmit, conErrores)}>
        <p>{watch("nombre")}</p>
        <Controller
          control={control}
          name="nombre"
          rules={{ required: true, minLength: 3, maxLength: 15 }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
                <Input
                  status={error ? "error" : ""}
                  placeholder="Escribe tus nombres EJEMPLO: Lana Maria"
                  {...field}
                ></Input>
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.nombre?.type === "required"
            ? "Este campo es obligatorio"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.nombre?.type === "maxLength"
            ? "ha sobrepasado el limite de caracteres"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.nombre?.type === "minLength"
            ? "no cumple el minimo de caracteres requeridos"
            : ""}
        </Paragraph>

        <Divider></Divider>

        <Controller
          control={control}
          name="Apellidos"
          rules={{ required: true, minLength: 3, maxLength: 20 }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                <Input
                  status={error ? "error" : ""}
                  placeholder="Escribe tus apellidos EJEMPLO: Rohades Perez"
                  {...field}
                ></Input>
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.Apellidos?.type === "required"
            ? "Este campo es requerido"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Apellidos?.type === "minLength"
            ? "Este campo no cumple con el minimo requerido"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Apellidos?.type === "maxLength"
            ? "Este campo ha sobrepasado el maximo requerido"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Contraseña"
          rules={{ required: true, minLength: 10, maxLength: 20 }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                <Input
                  status={error ? "error" : ""}
                  placeholder="Contraseña"
                  {...field}
                />
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.Contraseña?.type === "required"
            ? "este espacio es obligatorio"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Contraseña?.type === "minLength"
            ? "Caracteres insuficientes"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Contraseña?.type === "maxLenght"
            ? "limite de caracteres excedidos"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Edad"
          rules={{ required: true, min: 18, max: 99 }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                <Input
                  status={error ? "error" : ""}
                  type="number"
                  placeholder="Escribe Tu Edad"
                  {...field}
                ></Input>
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.Edad?.type === "min"
            ? "No se permiten menores de 18 años."
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Edad?.type === "max" ? "Ya estas muerto awevoneado" : ""}
        </Paragraph>
        <Paragraph>
          {errors.Edad?.type === "required" ? "este campo es obligatorio" : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Telefono"
          rules={{
            required: true,
            validate: {
              TelefonoValido: (numero) => {
                if (numero.toString().length === 10) {
                  return true;
                } else return false;
              },
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                <InputNumber
                  status={error ? "error" : ""}
                  placeholder="Escribe Tu Numero"
                  {...field}
                ></InputNumber>
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.Telefono?.type === "required"
            ? "Este campo es obligatorio"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Telefono?.type === "TelefonoValido" ? "numero no valido" : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Dirreccion"
          rules={{
            required: true,
            validate: {
              esDirreccion: (numero) => {
                if (numero.toString().length > 4) {
                  return true;
                } else return false;
              },
              esDirreccion2: (numero2) => {
                if (numero2.toString().length === 5) {
                  return true;
                } else return false;
              },
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <div>
                <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                  <Input
                    status={error ? "error" : ""}
                    placeholder="Dirrecion"
                    {...field}
                  ></Input>
                </ConfigProvider>
              </div>
            );
          }}
        />
        <Paragraph>
          {errors.Dirreccion?.type === "required"
            ? "Este campo es obligatorio"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Dirreccion?.type === "esDirreccion"
            ? "Caracteres insuficientes"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Dirreccion?.type === "esDirreccion2"
            ? "Caracteres ecxedidos"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Cedula"
          rules={{
            required: true,
            maxLength: 10,
            minLength: 5
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <div>
                <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                  <InputNumber
                    status={error ? "error" : ""}
                    placeholder="Cedula"
                    {...field}
                  ></InputNumber>
                </ConfigProvider>
              </div>
            );
          }}
        />
        <Paragraph>
          {errors.Cedula?.type === "required"
            ? "Este campo es obligatorio"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Cedula?.type === "esNumero" ? "Caracteres insuficientes" : ""}
        </Paragraph>
        <Paragraph>
          {errors.Cedula?.type === "esNumero2" ? "Caracteres ecxedidos" : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="genero"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <div>
                <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                  <Select
                    status={error ? "error" : ""}
                    placeholder="cual es tu genero"
                    {...field}
                  >
                    <Option value="Mujer">Mujer</Option>
                    <Option value="Hombre">Hombre</Option>
                    <Option value="other">Helicoptero apache de combate</Option>
                    <Option value="gay">Bisexual</Option>
                  </Select>
                </ConfigProvider>
              </div>
            );
          }}
        />
        <Paragraph>
          {errors.genero?.type === "required"
            ? "este campo es obligatorio"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="estadoCivil"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                <Select
                  status={error ? "error" : ""}
                  {...field}
                  placeholder="Estado civil"
                >
                  <Option value="Soltero">Soltero(a)</Option>
                  <Option value="Casado">Casado(a)</Option>
                  <Option value="Divorciado">Divorciado(a)</Option>
                  <Option value="Separado">Separado(a)</Option>
                  <Option value="Viudo">Viudo(a)</Option>
                  <Option value="soy feo tu que crees">
                    soy feo tu que crees
                  </Option>
                </Select>
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.estadoCivil?.type === "required"
            ? "este campo es obligatorio"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="sitioWeb"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <div>
                <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                  <Input
                    status={error ? "error" : ""}
                    {...field}
                    addonBefore={
                      <Select defaultValue="http://" className="selectBefore">
                        <Option value="http://">http://</Option>
                        <Option value="https://">https://</Option>
                      </Select>
                    }
                    addonAfter={
                      <Select defaultValue=".com" className="select-after">
                        <Option value=".com">.com</Option>
                        <Option value=".jp">.jp</Option>
                        <Option value=".cn">.cn</Option>
                        <Option value=".org">.org</Option>
                      </Select>
                    }
                    defaultValue="mysite"
                  ></Input>
                </ConfigProvider>
              </div>
            );
          }}
        />
        <Paragraph>
          {errors.sitioWeb?.type === "required"
            ? "este campo es obligatorio"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Comida"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                <Select status={error ? "error" : ""} {...field} placeholder="COMIDAS">
                  <Option value="hamburgesas">
                    <Radio.Group>
                      <Radio value="1-1">Hamburgesa de carne</Radio>
                      <Radio value="1-2">
                        Hamburgesa con Extra carne
                      </Radio>
                      <Radio value="1-3">Hamburguesa Vegana</Radio>
                    </Radio.Group>
                  </Option>
                  <Option value="Hotdogs">
                    <Radio.Group>
                      <Radio value="2-1">Sencillo Hotdog</Radio>
                      <Radio value="2-2">Normal Hotdog</Radio>
                      <Radio value="2-3">Gran Hotdog</Radio>
                    </Radio.Group>
                  </Option>
                  <Option value="pollo" >
                    <Radio.Group disabled>
                      <Radio value="3-1">Pollo Asado</Radio>
                      <Radio value="3-2">Pollo a la Broster</Radio>
                      <Radio value="3-3">Pollo Frito</Radio>
                    </Radio.Group>
                  </Option>
                </Select>
              </ConfigProvider>
            );
          }}
        />
        <Divider></Divider>

        <Controller
          control={control}
          name="frutas"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <div>
                <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                  <Checkbox.Group status={error ? "error" : ""} {...field}>
                    <Checkbox value="pera">PERA</Checkbox>
                    <Checkbox value="mango">MANGO</Checkbox>
                    <Checkbox value="fresa">FRESA</Checkbox>
                  </Checkbox.Group>
                </ConfigProvider>
              </div>
            );
          }}
        />
        <Paragraph>
          {errors.frutas?.type === "required"
            ? "este campo es obligatorio"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="vehiculo"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => {
            return (
              <div>
                <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value="bicicleta">Bicicleta</Radio>
                    <Radio value="moto">Moto</Radio>
                    <Radio value="carro">Carro</Radio>
                  </Radio.Group>
                </ConfigProvider>
              </div>
            );
          }}
        />
        <Paragraph>
          {watch("vehiculo") === "moto" ? "me compre una moto" : ""}
        </Paragraph>
        <Paragraph>
          {errors.vehiculo?.type === "required"
            ? "este campo es obligatorio"
            : ""}
        </Paragraph>
        <Divider></Divider>
        {/* ------------------------------------------------------------------------------ */}
        <Controller
          control={control}
          name="Mayordeedad"
          render={({ field: { value, onChange } }) => {
            return (
              <Checkbox
                style={{ marginTop: "auto", marginBottom: "auto" }}
                onChange={(e) => {
                  onChange(e.target.checked);
                }}
                checked={value}
              > Eres mayor de Edad?</Checkbox>
            );
          }}

        />
        <Paragraph>
          {watch("Mayordeedad") === true ? " soy mayor de edad" : ""}
        </Paragraph>
        {watch("Mayordeedad") && (

          <><Controller
            control={control}
            name="cedula"
            rules={{ required: true, minLength: 5, maxLength: 10 }}
            render={({ field, fieldState: { error } }) => {
              return (
                <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                  <Input
                    status={error ? "error" : ""}
                    {...field}
                    placeholder="Ingrese cedula" />
                  <br></br>
                </ConfigProvider>
              );
            }}
          />
            <Paragraph>
              {errors.cedula?.type === "required"
                ? "este campo es obligatorio"
                : ""}
            </Paragraph>
            <Paragraph>
              {errors.cedula?.type === "minLength"
                ? "Este campo no cumple con el minimo requerido"
                : ""}
            </Paragraph>
            <Paragraph>
              {errors.cedula?.type === "maxLength"
                ? "Este campo ha sobrepasado el maximo requerido"
                : ""}
            </Paragraph>
          </>

        )
        }
        <Divider></Divider>

        <Controller
          control={control}
          name="TargetaDeCredito"
          render={({ field: { value, onChange } }) => {
            return (
              <Checkbox
                style={{ marginTop: "auto", marginBottom: "auto" }}
                onChange={(e) => {
                  onChange(e.target.checked);
                }}
                checked={value}
              > Tienes Targeta de credito?</Checkbox>
            );
          }}
        />
        <Paragraph>
          {watch("TargetaDeCredito") === true ? " tengo targeta de credito" : ""}
        </Paragraph>
        {watch("TargetaDeCredito") && (

          <>
            <Controller
              control={control}
              name="Targeta"
              rules={{ required: true, minLength: 5, maxLength: 10 }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                    <Input
                      type="number"
                      status={error ? "error" : ""}
                      {...field}
                      placeholder="Targeta de credito" />
                    <br></br>
                  </ConfigProvider>
                );
              }} /><Paragraph>
              {errors.Targeta?.type === "required"
                ? "este campo es obligatorio"
                : ""}
            </Paragraph><Paragraph>
              {errors.Targeta?.type === "minLength"
                ? "Este campo no cumple con el minimo requerido"
                : ""}
            </Paragraph><Paragraph>
              {errors.Targeta?.type === "maxLength"
                ? "Este campo ha sobrepasado el maximo requerido"
                : ""}
            </Paragraph>
          </>
        )
        }
        <Divider></Divider>

        <Controller
          control={control}
          name="Correo"
          rules={{
            required: true,
            minLength: 5,
            maxLength: 20,
            pattern: /^\S+@\S+$/i,
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                <Input
                  status={error ? "error" : ""}
                  {...field}
                  placeholder="Correo Electronico"
                />
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.Correo?.type === "required"
            ? "este campo es obligatorio"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Correo?.type === "maxLength"
            ? "ha sobrepasado el limite de caracteres"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Correo?.type === "minLength"
            ? "no cumple el minimo de caracteres requeridos"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Correo?.type === "pattern"
            ? "su correo debe tener @, mayusculas y numeros"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Descripcion"
          rules={{ required: true, minLength: 20, maxLength: 1000 }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                <TextArea
                  status={error ? "error" : ""}
                  {...field}
                  placeholder="Escribe tu descripcion"
                ></TextArea>
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.Descripcion?.type === "required"
            ? "este campo es obligatorio"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Descripcion?.type === "minLength"
            ? "contenido insuficiente"
            : ""}
        </Paragraph>
        <Paragraph>
          {errors.Descripcion?.type === "maxLength"
            ? "limite de texto excedido"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Controller
          control={control}
          name="Idioma"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <ConfigProvider theme={{ token: { colorPrimary: "0000FF" } }}>
                <Select
                  status={error ? "error" : ""}
                  {...field}
                  placeholder="Idioma"
                >
                  <Option value="Ingles">Ingles</Option>
                  <Option value="Español">Español</Option>
                  <Option value="ruso">ruso</Option>
                  <Option value="portuges">portuges</Option>
                  <Option value="">nada</Option>
                </Select>
              </ConfigProvider>
            );
          }}
        />
        <Paragraph>
          {errors.Idioma?.type === "required"
            ? "Este campo es obligatorio"
            : ""}
        </Paragraph>
        <Divider></Divider>

        <Button type="primary" htmlType="Submit">
          INICIAR
        </Button>
      </form>
    </div>
  );
};
export default Hook;
