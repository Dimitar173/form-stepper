
import * as zod from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";


const schema = zod.object({
  password : zod.string().nonempty({message:"This filed is required"}).min(8)
})

const Index= () => {
  const { register, handleSubmit, errors } = useForm({
      resolver: zodResolver(schema)
    });

    const submitForm = (data:any) => {
      console.log(data);
    };
  return (
     <div>
       <form onSubmit={handleSubmit(submitForm)}>
       <FormControlLabel
          control={
            <Checkbox  color="primary" ref={register} name="checkbox" />
          }
          label="Choose between therapiest or client"
        />
          
       <p> {errors.password?.message} </p>
       <input type= "submit" name= "Next"/> 
      </form>
     </div>
   
  )
}
export default Index;





