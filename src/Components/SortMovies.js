import React from 'react';
import SortButton from './SortButton';
import './SortMovies.css';


class SortMovies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            buttonActive:2
        }
        
    }
   
sortByRating=()=>{
    const val='vote_average.desc';
    this.setState({
        buttonActive:2
    });
    this.props.sortByValue(val);
}
sortByYear=()=>{
    const val='release_date.desc';
    this.setState({
        buttonActive:1
    });
  this.props.sortByValue(val);

}
        render(){
      
                return(
                    <div className='c-sorting-movies'>
                        <div id="btns">
                        <SortButton 
                            sortBy={this.sortByRating}
                            isActive={this.state.buttonActive === '2' ? true : false}
                            title="highest raiting" />
                            <SortButton 
                            sortBy={this.sortByYear}
                            isActive={this.state.buttonActive ==='1' ? true : false}
                            title="latest movies" />
                              
                        </div>
                    </div>
                    )
         }
}
export default SortMovies;      