//import { useForm } from "react-hook-form";

//import {yupResolver} from "@hookform/resolvers/yup";
//import * as yup from 'yup';

export const Login = () => {

    /*const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        phoneNumber: yup.number().positive().min(10).max(10).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null])
        .required(),
    });*/

/*const {register,handleSubmit} = useForm({
    resolver:yupResolver(schema),
});
   const onSubmit = (data) => {
    console.log(data);
   }*/
    return(
        <div className="login">
        <h2>Create New Account</h2>
        <button>1. Your Profile</button>
        <button>2. Business Information</button>
        <button>3. Additional Users</button>

        <h2>Your Profile</h2>
        <p>Enter the login information for your account. 
            You will <p>be able to create additional users after registering.</p></p>

        <form className="form-container"  >
      <div className="form-group">
        <div>First Name*</div>
        <input type="text" placeholder="Input your First Name"  />
      </div>
      
      <div className="form-group">
        <div>Last Name*</div>
        <input type="text" placeholder="Input your Last Name"  />
      </div>
      
      <div className="form-group">
        <div>Email*</div>
        <input type="email" placeholder="Input your Email"  />
      </div>
      
      <div className="form-group">
        <div>Phone Number*</div>
        <input type="number" placeholder="Input your Phone Number" />
      </div>
      
      <div className="form-group">
        <div>Password*</div>
        <input type="password" placeholder="Create Password" />
      </div>
      
      <div className="form-group">
        <div>Confirm Password*</div>
        <input type="password" placeholder="Confirm your Password" />
      </div>
    </form>
    <p className="back">&lt; Back to Login</p>
    <button className="next">Next Step &gt;</button>
        </div>
    )
};


/*onSubmit={handleSubmit(onSubmit)}
{...register("lastName")}
{...register("firstName")}
{...register("email")}
{...register("phoneNumber")}
{...register("password")} 
{...register("confirmPassword")}*/