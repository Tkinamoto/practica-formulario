import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    message,
    Typography,
    Checkbox,
    Input,
    Select,
    Button,
    ConfigProvider,
    Divider,
    DatePicker,
    Table,
    Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
<link rel="stylesheet" type="text/css" href="index.css" />

const Ejercisio1 = () => {

    const success = () => {
        message.success("REGISTRADO CORRECTAMENTE");
    };
    const error = () => {
        message.error = () => {
            message.success("Error vuelve a intentarlo")
        }
    };

    const [listaPersonas, setlistaPsronas] = useState([

    ])

    const columns = [{
        title: "Nombre",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Apellido",
        dataIndex: "lastName",
        key: "lastName",
    },
    {
        title: "Nombre de Usuario",
        dataIndex: "userName",
        key: "userName",
    },
    {
        title: "correo",
        dataIndex: "Correo",
        key: "Correo",
    },
    {
        title: "Edad",
        dataIndex: "Edad",
        key: "Edad",
    },
    {
        title: "Nacimiento",
        dataIndex: "DiaDeNacimiento",
        key: "DiaDeNacimiento",
    },
    {
        title: "Genero",
        dataIndex: "sexo",
        key: "sexo",
    },
    {
        title: "EstadoCivil",
        dataIndex: "estadoCivil",
        key: "estadoCivil",
    },
    {
        title: "cualidades",
        dataIndex: "Cualidades",
        key: "Cualidades",
    },
    {
        title: "descripcion",
        dataIndex: "Descripcion",
        key: "Descripcion",
    },
    {
        title: "Tienes Hijos?",
        dataIndex: "tienesHijos",
        key: "tienesHijos",
        render: (_, render) => {
            return (
                <p>{render.tienesHijos === true ? "si" : "no"}</p>
            )
        },
    },
    {
        title: "Cuantos Hijos Tienes",
        dataIndex: "cuantosHijosTienes",
        key: "cuantosHijosTienes",
    },

    ]


    const [EstadoFormulario, setEstadoFormulario] = useState({
        paso1: true,
        paso2: false,
        paso3: false,
    })

    const [EstadoPasos, setEstadoPasos] = useState({
        paso1: true,
        paso2: false,
        paso3: false,
    })

    const { Title, Paragraph } = Typography;

    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
        watch,
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {

        setlistaPsronas(listaPersonas => {
            return [
                ...listaPersonas, data
            ]
        })


    };

    function conErrores(data) {
        console.log(data, "error");
    };

    return (
        <div>
            <Title className="titulo1">Ejercisio</Title>

            {
                console.log(listaPersonas, "lista")
            }
            <div className="cajaDeSubtitulos"/* style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
            }} */>
                <h1 className="titulo1" style={{ color: EstadoPasos.paso1 === true ? "blue" : "black" }}>PASO 1</h1>
                <h1 className="titulo1" style={{ color: EstadoPasos.paso2 === true ? "blue" : "black" }}>PASO 2</h1>
                <h1 className="titulo1" style={{ color: EstadoPasos.paso3 === true ? "blue" : "black" }}>PASO 3</h1>

            </div>
            <Divider></Divider>

            <form onSubmit={handleSubmit(onSubmit, conErrores)}>
                <section className="section">

                    {EstadoFormulario.paso1 && <>
                        <div className="content-tot">
                            <Controller

                                control={control}
                                name="name"
                                rules={{ required: true, minLength: 3, maxLength: 15 }}
                                render={({ field, fieldState: { error } }) => {
                                    return (

                                        <ConfigProvider theme={{ token: { colorPrimary: "#0000FF" } }}>

                                            <Input status={error ? "error" : ""} placeholder="Escribe tu Nombre" {...field}
                                            ></Input>
                                        </ConfigProvider>
                                    );
                                }} /><Paragraph>
                                {errors.name?.type === "required" ? "Este campo es obligatorio" : ""}
                            </Paragraph><Paragraph>
                                {errors.name?.type === "maxLength"
                                    ? "ha sobrepasado el limite de caracteres" : ""}
                            </Paragraph><Paragraph>
                                {errors.name?.type === "minLength"
                                    ? "no cumple el minimo de caracteres requeridos"
                                    : ""}
                            </Paragraph><Controller
                                control={control}
                                name="lastName"
                                rules={{ required: true, minLength: 3, maxLength: 15 }}
                                render={({ field, fieldState: { error } }) => {
                                    return (
                                        <ConfigProvider theme={{ token: { colorPrimary: "#0000FF" } }}>
                                            <Input status={error ? "error" : ""} placeholder="Escribe tu Apellidos" {...field}
                                            ></Input>
                                        </ConfigProvider>
                                    );
                                }} /><Paragraph>
                                {errors.lastName?.type === "required" ? "Este campo es obligatorio" : ""}
                            </Paragraph><Paragraph>
                                {errors.lastName?.type === "maxLength"
                                    ? "ha sobrepasado el limite de caracteres" : ""}
                            </Paragraph><Paragraph>
                                {errors.lastName?.type === "minLength"
                                    ? "no cumple el minimo de caracteres requeridos"
                                    : ""}
                            </Paragraph><Controller
                                control={control}
                                name="userName"
                                rules={{ required: true, minLength: 5, maxLength: 15 }}
                                render={({ field, fieldState: { error } }) => {
                                    return (
                                        <ConfigProvider theme={{ token: { colorPrimary: "#0000FF" } }}>
                                            <Input status={error ? "error" : ""} placeholder="Escribe tu Nombre de Usuario" {...field}
                                            ></Input>
                                        </ConfigProvider>
                                    );
                                }} /><Paragraph>
                                {errors.lastName?.type === "required" ? "Este campo es obligatorio" : ""}
                            </Paragraph><Paragraph>
                                {errors.lastName?.type === "maxLength"
                                    ? "ha sobrepasado el limite de caracteres" : ""}
                            </Paragraph><Paragraph>
                                {errors.lastName?.type === "minLength"
                                    ? "no cumple el minimo de caracteres requeridos"
                                    : ""}
                            </Paragraph>
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
                                                placeholder="Correo Electronico" />
                                        </ConfigProvider>
                                    );
                                }} />
                            <Paragraph>
                                {errors.Correo?.type === "required"
                                    ? "este campo es obligatorio"
                                    : ""}
                            </Paragraph><Paragraph>
                                {errors.Correo?.type === "maxLength"
                                    ? "ha sobrepasado el limite de caracteres"
                                    : ""}
                            </Paragraph><Paragraph>
                                {errors.Correo?.type === "minLength"
                                    ? "no cumple el minimo de caracteres requeridos"
                                    : ""}
                            </Paragraph><Paragraph>
                                {errors.Correo?.type === "pattern"
                                    ? "su correo debe tener @, mayusculas y numeros"
                                    : ""}
                            </Paragraph>

                            <Controller
                                control={control}
                                name="Edad"
                                rules={{
                                    required: true,
                                    min: 18,
                                    max: 99,
                                }}
                                render={({ field, fieldState: { error } }) => {
                                    return (
                                        <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                                            <Input
                                                status={error ? "error" : ""}
                                                {...field}
                                                placeholder="Edad" />
                                        </ConfigProvider>
                                    );
                                }} />
                            <Paragraph>
                                {errors.Edad?.type === "required"
                                    ? "este campo es obligatorio"
                                    : ""}
                            </Paragraph>
                            <Paragraph>
                                {errors.Edad?.type === "max"
                                    ? "ha sobrepasado el limite de caracteres"
                                    : ""}
                            </Paragraph>
                            <Paragraph>
                                {errors.Edad?.type === "min"
                                    ? "no cumple el minimo de caracteres requeridos"
                                    : ""}
                            </Paragraph>

                            <Space>
                            <Button type="primary" htmlType="button" onClick={() => {

                                /* validación para pasar de pagina */

                                if (isValid === true) {
                                    setEstadoFormulario(EstadoFormulario => {
                                        return {
                                            ...EstadoFormulario, paso2: true, paso1: false, success
                                        }
                                    })

                                    
                                    setEstadoPasos(EstadoPasos => {
                                        return {
                                            ...EstadoPasos, paso2: true
                                        }


                                    })
                                }
                            }}>SIGUIENTE</Button>
                            </Space>
                            <Divider></Divider>
                        </div>
                    </>

                    }
                </section>

                {/* divicion de los pasos */}
                <section>
                    {
                        EstadoFormulario.paso2 && (
                            <>
                                <Title level={3}>Paso 2</Title>
                                <Controller
                                    control={control}
                                    name="DiaDeNacimiento"
                                    rules={{ required: true, minLength: 3, maxLength: 15 }}
                                    render={({ field, fieldState: { error } }) => {
                                        return (
                                            <DatePicker status={error ? "error" : ""}
                                                {...field} placeholder="Fecha de Nacimiento" />
                                        );
                                    }}
                                />
                                <Paragraph>
                                    {errors.DiaDeNacimiento?.type === "required" ? "Este campo es obligatorio" : ""}
                                </Paragraph>

                                <Controller
                                    control={control}
                                    name="sexo"
                                    rules={{ required: true }}
                                    render={({ field, fieldState: { error } }) => {
                                        return (
                                            <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                                                <Select placeholder="Elige tu Genero" status={error ? "error" : ""} {...field}>
                                                    <option value="Mujer">Mujer</option>
                                                    <option value="Hombre">Hombre</option>
                                                    <option value="Helicoptero">Helicoptero</option>
                                                    <option value="Bisexual">Bisexual</option>
                                                </Select>
                                            </ConfigProvider>
                                        );
                                    }}
                                />

                                <Paragraph>
                                    {errors.sexo?.type === "pattern"
                                        ? "su correo debe tener @, mayusculas y numeros"
                                        : ""}
                                </Paragraph>
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
                                                    <option value="Soltero">Soltero(a)</option>
                                                    <option value="Casado">Casado(a)</option>
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
                                <Button type="primary" htmlType="button" onClick={() => {

                                    /* validación para pasar de pagina */

                                    if (isValid === true) {
                                        setEstadoFormulario(EstadoFormulario => {
                                            return {
                                                ...EstadoFormulario, paso3: true, paso2: false, paso1: false
                                            }
                                        })

                                        setEstadoPasos(EstadoPasos => {
                                            return {
                                                ...EstadoPasos, paso3: true
                                            }


                                        })
                                    }
                                }}>SIGUIENTE</Button>
                            </>

                        )
                    }
                    <Divider></Divider>
                </section>
                {
                    EstadoFormulario.paso3 && <>
                        <Title level={3}>Paso 3</Title>
                        <Controller
                            control={control}
                            name="Cualidades"
                            render={({ field, fieldState: { error } }) => {
                                return (
                                    <><Title level={5}>Tus Cualidades</Title><ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                                        <Checkbox.Group status={error ? "error" : ""} {...field}>
                                            <Checkbox value="Honestidad">Honestidad</Checkbox>
                                            <Checkbox value="Sensibilidad">Sensibilidad</Checkbox>
                                            <Checkbox value="Empatia">Empatia</Checkbox>
                                            <Checkbox value="Valor">Valor</Checkbox>
                                            <Checkbox value="Humildad">Humildad</Checkbox>
                                        </Checkbox.Group>
                                    </ConfigProvider></>
                                );
                            }}
                        />
                        <Paragraph>
                            {errors.estadoCivil?.type === "required"
                                ? "este campo es obligatorio"
                                : ""}
                        </Paragraph>

                        <Controller
                            control={control}
                            name="Descripcion"
                            render={({ field, fieldState: { error } }) => {
                                return (
                                    <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                                        <TextArea placeholder="Describete aqui" status={error ? "error" : ""} {...field} />
                                    </ConfigProvider>
                                );
                            }}
                        />
                        <Paragraph>
                            {errors.Descripcion?.type === "required"
                                ? "este campo es obligatorio"
                                : ""}
                        </Paragraph>

                        <Controller
                            control={control}
                            name="tienesHijos"
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <ConfigProvider theme={{ token: { colorPrimary: "00b96b" } }}>
                                        <Checkbox
                                            style={{ marginTop: "auto", marginBottom: "auto" }}
                                            onChange={(e) => {
                                                onChange(e.target.checked);
                                            }}
                                            checked={value}
                                        > Tienes Hijo?</Checkbox>
                                    </ConfigProvider>
                                );
                            }}
                        />
                        <Paragraph>
                            {watch("tienesHijos") === true ? "Si Tengo Hijos" : ""}
                        </Paragraph>
                        {watch("tienesHijos") && (

                            <>
                                <Controller
                                    control={control}
                                    name="cuantosHijosTienes"
                                    rules={{ required: true, min: 1, max: 10 }}
                                    render={({ field, fieldState: { error } }) => {
                                        return (
                                            <Input
                                                type="number"
                                                status={error ? "error" : ""}
                                                {...field}
                                                placeholder="Cuentos Hijos Tienes" />
                                        );
                                    }} /><Paragraph>
                                    {errors.cuantosHijosTienes?.type === "required"
                                        ? "este campo es obligatorio"
                                        : ""}
                                </Paragraph><Paragraph>
                                    {errors.cuantosHijosTienes?.type === "min"
                                        ? "Este campo no cumple con el minimo requerido"
                                        : ""}
                                </Paragraph><Paragraph>
                                    {errors.cuantosHijosTienes?.type === "max"
                                        ? "Este campo ha sobrepasado el maximo requerido"
                                        : ""}
                                </Paragraph>
                            </>
                        )
                        }
                        <Divider></Divider>

                        <Button type="primary" htmlType="Submit">
                            GUARDAR
                        </Button>
                    </>

                }
                <Divider></Divider>
                <Table className="tyble" columns={columns} dataSource={listaPersonas} />










            </form>
        </div>
    );
};
export default Ejercisio1;