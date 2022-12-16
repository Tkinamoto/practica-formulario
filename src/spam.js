import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    Typography,
    Checkbox,
    Input,
    Select,
    Button,
    ConfigProvider,
    Divider,
    DatePicker,
} from "antd";
import TextArea from "antd/es/input/TextArea";


const EjercisioPropio1 = () => {
    const [EstadoFormulario, setEstadoFormulario] = useState({
        paso1: true,
        paso2: false,
    })

    const Contador = useRef(0)

    const { Title, Paragraph } = Typography;

    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
        watch,
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        console.log(data);
    };

    function conErrores(data) {
        console.log(data, "error");
    }

    useEffect(() => {
        Contador.current = Contador.current + 1
        console.log("Hola me estoy cambiando", Contador.current);
    }, [EstadoFormulario])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, conErrores)}>
                <Title>EjercisioPropio1</Title>
                <Divider></Divider>

                {EstadoFormulario.paso1 && <><Controller
                    control={control}
                    name="campo1"
                    rules={{ required: true }}
                    render={({ field, fieldState: { error } }) => {
                        return (
                            <ConfigProvider theme={{ token: { colorPrimary: "#0000FF" } }}>
                                <Title level={3}>PASO 1</Title>
                                <Input placeholder="espacio 1" status={error ? "error" : ""} {...field}></Input>
                            </ConfigProvider>
                        );
                    }} /><Paragraph>
                        {errors.campo1?.type === "required" ? "este campo es obligatorio" : ""}
                    </Paragraph>
                    <Button type="primary" htmlType="submit" onClick={() => {
                        if (isValid === true) {
                            setEstadoFormulario(EstadoFormulario => {
                                return {
                                    ...EstadoFormulario, paso2: true, paso1: false
                                }
                            })
                        }
                    }}>SIGUIENTE</Button>

                    <Divider></Divider></>
                }

                {EstadoFormulario.paso2 && <><Controller
                    control={control}
                    name="campo2"
                    rules={{ required: true }}
                    render={({ field, fieldState: { error } }) => {
                        return (
                            <ConfigProvider theme={{ token: { colorPrimary: "#0000FF" } }}>
                                <Title level={3}>PASO 2</Title>
                                <Input placeholder="espacio 1" status={error ? "error" : ""} {...field}></Input>
                            </ConfigProvider>
                        );
                    }} /><Paragraph>
                        {errors.campo2?.type === "required" ? "este campo es obligatorio" : ""}
                    </Paragraph>
                    <Button type="primary" htmlType="submit">ENVIAR</Button>
                </>
                }

            </form>
        </div>
    );
}
export default EjercisioPropio1;