import {Formik, Form,Field,ErrorMessage} from 'formik'
import TextInput from './components/TextInput'
import CheckBox from './components/CheckBox'
import Select from './components/Select'
import Radio from './components/Radio'
const validate = (values) => {

  const errors = {}
  if(!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }
  if(!values.radio){
    errors.radio="Requerido"
  }
  return errors
}
function App() {
  return (
    <Formik
    initialValues={{ name:'',lastname:'', email:'',chancho:"",radio:""}}
    validate={validate}
    onSubmit={values => console.log(values)}
    >
     
     <Form >
        <TextInput name="name" label="Nombre" />
         <br/>
      
         <TextInput name="lastname" label="Apellido" />
         <br/>
         <TextInput name="email" label="Correo" />
         <br/>
         <Select label="Tipo de chancho" name="chancho">
            <option value="" >Seleccione chancho</option>
            <option value="feli" >Felipe</option>
            <option value="chancho" >Chancho feliz</option>
          </Select>
        <CheckBox name="accept">
            Aceptar terminos y condiciones
        </CheckBox>
        <br/>
        <Radio name="radio" value="chanchito1" label="Chanchito 1" />
        <Radio name="radio2" value="chanchito2" label="Chanchito 2" />
        <ErrorMessage  name="radio"/>
      <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
