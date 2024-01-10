import {useField} from 'formik'


const CheckBox= ({children,...props})=>{
const [field,meta]= useField({...props, type:"checkbox"})
//console.log(field)
return(
    <div>
        <input type="checkbox" {...field} {...props} />
        {children}
        {meta.touched && meta.error? <div> {meta.error} </div>: null  }
    </div>
)

}

export default CheckBox