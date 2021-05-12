import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import service from '../../services';


 




const CreateUser = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
 service.userServicesAPI.createUser(data).then((response)=>console.log(response.data)).catch((error)=>console.log(error))
}
    return (<div>
      <h5>Create Users</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("firstName")} />
        <input type="text" {...register("lastName")} />
        <input type="text" {...register("email")} />
        <input type="text" {...register("password")} />
        <input type="text" {...register("mobile")} />
        <input type="text" {...register("address")} />
        <input type="submit" value="Submit" />

      </form>
  </div>)
 }

export default CreateUser;