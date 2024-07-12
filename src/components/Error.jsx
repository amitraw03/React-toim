import { useRouteError } from "react-router-dom";

const Error = () => {
    const err=useRouteError();
    return (
      <div>
          <h1>{err.status} : {err.statusText}</h1>
          <h2>Oopsie..!!</h2>
          <h2>Something Went Wrong!!..</h2>

      </div>
  
    )
  }
  
  export default Error;