import type { NextPage } from 'next'
import { useForm } from 'react-hook-form';


const Home: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
 
  console.log(watch('name'))
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>name</label>
      <input 
      type={'text'} 
      id='name'
      {...register("name")}
      />

      <label htmlFor='email'> Email </label>
      <input
      type={'text'} 
      id="email"
      {...register("email")}
      />   
      
      <input type="submit" />

    </form>
  )
}

export default Home
