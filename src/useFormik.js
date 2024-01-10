import {useFormik} from 'formik'
function App() {
  const formik= useFormik({
    initialValues:{
      name:'',
      lastName:'',
      email:'',
    },
    validate:(values)=>{
      const errors={}
        if((!values.name)){
          errors.name='Requerido'
        } else if(values.name.length<5){
          errors.name='El nombre es muy corto'
        }
      return errors
    },
    onSubmit: values => console.log(values)
  })
  return (
    <form onSubmit={formik.handleSubmit} >
      <label>Nombre</label>
      <input 
       type='text'  {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name? <div>{formik.errors.name}</div>: null}
      <br/>
         <label>Apellido</label>
      <input 
      name='lastName' type='text' onChange={formik.handleChange} value={formik.values.lastName}
      /><br/>
         <label>Email</label>
      <input 
      name='email' type='email' onChange={formik.handleChange} value={formik.values.email}
      /><br/>
    <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
