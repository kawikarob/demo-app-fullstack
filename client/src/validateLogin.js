export default function validateLogin(values) {
   let errors = {};
   if (!values.email) {
      errors.email = "Please enter your email address";
   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Please enter a valid email address";
   }
   if (!values.password) {
      errors.password = "Please enter your password";
   } else if (values.password.length < 8) {
      errors.password = "Password needs to be more than 8 characters";
   }

   return errors;
}
