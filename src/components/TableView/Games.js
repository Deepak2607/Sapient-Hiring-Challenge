import React, { Component } from 'react';
import axios from 'axios';
import './Style.css';
import Game from "./Game";
import Navbarr from "../Layout/Navbar";
import Selection from "../Layout/Selection";
import {Button, Icon, Pagination, Table} from 'react-materialize';


class Games extends Component{
    
    constructor(){
        super();    
        this.state={
            games:[],
            filteredGames:[],
            query: '',
            activePage:1,
            render: false ,
            platforms:[],
            platform:"Choose Platform",
        } 
    }
        
        componentDidMount= ()=> {
            //fetching games details
            axios.get("https://deepak2607.github.io/Sapient_jsondata.json").then(response=>{
                
                const games= response.data; 
                let id=0;
                const updatedGames= games.map(game=>{
                    id++;
                    return{
                        ...game,
                        id:id   
                    }
                })
                console.log(updatedGames);  
                
                this.setState({
                    games:updatedGames,
                    filteredGames:updatedGames,
                });
            })
            setTimeout(() => { 
                this.setState({render: true})
            }, 1000)
        }
        
    
        //function to handle change in search bar of games
        handleInputChange= (event)=> {
            
            let query= event.target.value;
            let filteredData = this.state.games.filter(game => {
                return game.title.toString().toLowerCase().includes(query.toLowerCase());
            });
            
            console.log(filteredData);
            this.setState({
                query:query,
                filteredGames:filteredData,
                activePage:1
            })
        }
        
        //function to handle selection of a platform
        onSelect=(event)=> {               
            
            console.log(event.target.value);

            let platformGames;
            if(event.target.value=="All Games"){
                platformGames= this.state.games;
            }else{
                platformGames= this.state.games.filter(game=> {
                    return game.platform == event.target.value;
                }) 
            }

            this.setState({
                filteredGames:platformGames,
                platform:event.target.value,
                activePage:1,
                query: ''
            });   
        }
        
        //sorting the games based on release year (in ascending order)
        sortByYearAsc= ()=> {
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(a.release_year)  - parseInt(b.release_year);
              })
              
              this.setState({
                  filteredGames:sortedGames,
                  activePage:1
              })
          }
          
        //sorting the games based on release year (in descending order)
        sortByYearDsc=()=> {
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(b.release_year)  - parseInt(a.release_year);
              })
              
              this.setState({
                  filteredGames:sortedGames,
                  activePage:1
              })
          }
          
        //sorting the games based on score (in ascending order)
        sortByScoreAsc=()=> {
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(a.score*10)  - parseInt(b.score*10);
              })
              
              this.setState({
                  filteredGames:sortedGames,
                  activePage:1
              })
          }
          
        //sorting the games based on score (in descending order)
        sortByScoreDsc=()=> {
              
              let sortedGames;
              sortedGames= this.state.filteredGames.sort((a,b)=>{
                 return parseInt(b.score*10)  - parseInt(a.score*10);
              })
              
              this.setState({
                  filteredGames:sortedGames,
                  activePage:1
              })
          }
         
       
          
    render(){ 
        
            if(this.state.render==false){
              return <h4 className="text">loading...</h4>
            }
        
            return(  
                <div className="container-fluid text">
                <Navbarr query= {this.state.query} handleInputChange={this.handleInputChange}/>
                
                <div className="container">
                <Selection onSelect={this.onSelect} platforms={this.state.platforms} />
                </div>
                
                <Pagination
                  activePage={this.state.activePage} maxButtons={10}
                  items={Math.ceil(this.state.filteredGames.length/8) }
                  onSelect={(activePage)=> {this.setState({activePage:activePage})}}       
                  leftBtn={<Icon>chevron_left</Icon>}
                  rightBtn={<Icon>chevron_right</Icon>}
                />
                           
                <Table>
                  <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Platform</th>
                        <th>Score
                        <span style={{marginLeft:"5px"}}>
                          <div>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByScoreDsc}>↑</Button>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByScoreAsc}>↓</Button>
                          </div>
                        </span>
                        </th>
                        <th>Genre</th>
                        <th>Editors Choice</th>
                        <th>Release Year 
                        <span style={{marginLeft:"5px"}}>
                          <div>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByYearDsc}>↑</Button>
                          <Button node="a" small style={{color:"white"}} waves="light" onClick={this.sortByYearAsc}>↓</Button>
                          </div>
                        </span>
                        </th>
                        <th>Game Link</th>
                      </tr>
                  </thead>
                
                   <tbody>
                    {this.state.filteredGames.slice(((this.state.activePage-1) * 8), ((this.state.activePage-1) * 8) + 8).map(game => {
                      
                        let array = game.url.split("/"); 
                        let game_link= `https://in.ign.com/${array[2]}`;
                
                        return(
                            <Game key={game.id} id={game.id} title={game.title} url={game.url} platform={game.platform} score={game.score} genre={game.genre} editors_choice={game.editors_choice} release_year={game.release_year} link={game_link} /> )}
                        )}
                   </tbody>
                </Table>                   
                  
                </div>
            );
     }     
}

export default Games;
