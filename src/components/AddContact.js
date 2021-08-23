import React from 'react';

class AddContact extends React.Component{
    state = {   
        name:"",
        email:"",
    }

    add = (e)=>{
        e.preventDefault();
        if(this.state.name === ""||this.state.email===""){
            
            alert("All fields are mandatory!")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        // Programatically Navigating with history
        this.props.history.push("/");

    };
    render(){

        return(
            <div className="ui main">
                <h2>AddContact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name
                            <input type="text" name="name"
                             placeholder="Enter Name"
                             value={this.state.name}
                            onChange={ (e)=> this.setState({name:e.target.value})}></input>
                        </label>
                    </div>
                    <div className="field">
                        <label>Email
                            <input type="email" name="email"
                             placeholder="Enter Email"
                             value={this.state.email}
                             onChange={(e)=>this.setState({email:e.target.value})}></input>
                        </label>
                    </div>
                    <button className="ui button blue">Add</button>

                </form>
            </div>
        )
    }
}

export default AddContact;