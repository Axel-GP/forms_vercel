import {React} from 'react';
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';


function Form (){
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) =>
    console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nombre:
                <input {...register("Nombre",{ required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
            </label>

            <label>
                Apellido:
                <input {...register("Apellido",{ required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
            </label>
            
            <label>
                Género:
                <select {...register("Genero",{ required: true})}>   
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                    <option value="otro">Otro</option>
                </select>
            </label>

            <label>
                Edad:
                <input type="number" {...register("Edad",{ required: true, min:18})} />
            
            </label>

            <input type="submit" />
        </form>
    )
}
export default Form;