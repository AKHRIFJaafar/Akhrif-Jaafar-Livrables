class App extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {



      
        return (
     
    
          
   
<div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <form className="sign-in-htm" action="./api/Pointeur/login.php" method="GET">
              <div className="group">
                <label htmlFor="user" className="label">email</label>
                <input id="email" name="email" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="password" name="password" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
              </div>
              <div className="group">
               <input type="submit" className="button" defaultValue="Sign In" />
              </div>
              <div className="hr" />
              
            </form>
            <form className="sign-up-htm" action="./api/Pointeur/signup.php" method="POST">
              <div className="group">
                <label htmlFor="user" className="label">lastname</label>
                <input id="lastname" name="lastname" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="user" className="label">email</label>
                <input id="email" name="email" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="password" name="password" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Confirm Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
           
              <div className="group">
            
              <input type="submit" className="button" defaultValue="Sign Up" />
            
              </div>
             

             
            </form>
          </div>
        </div>
      </div>
         
         
        


        
        )
    }
}