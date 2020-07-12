import React, { Component ,Fragment} from 'react';
import './searchStyle.css'
class SearchComponent extends Component {
   constructor(props)
   {
       super(props);
       this.state={
           term:""
       }
   }
   
handleChnage = (e) =>
{
    this.setState({term : e.target.value});
}

handleSubmit =(e) =>
{
    e.preventDefault();
    this.props.formSubmit(this.state.term)
}
    render() {
        
        console.log(this.props.handleSubmit)
        return (
          <Fragment>
               <div className="search">
                   <form action="" onSubmit ={this.handleSubmit}>
                   <input type="text" placeholder=" Search"
                   value={this.state.term}
                   onChange ={this.handleChnage} />
                   <button><i className="fa fa-search"></i></button>
                   </form>
                  </div>
          </Fragment>

        );
    }
}

export default SearchComponent;