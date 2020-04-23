import React from 'react';
import {Select} from 'react-materialize';

const Selection =(props)=>{
    
        return(            
            <div className="container">
                <Select onChange={props.onSelect} 
                  id="Select-9" multiple={false} 
                  options={{
                    classes: '',
                    dropdownOptions: {
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }
                  }}
                >
                    <option disabled value="">Choose Platform</option>
                    <option value="All Games">All Games</option>
                    <option value="PlayStation Vita">PlayStation Vita</option>
                    <option value="iPad">iPad</option>
                    <option value="Xbox 360">Xbox 360</option>
                    <option value="PlayStation 3">PlayStation 3</option>
                    <option value="Macintosh">Macintosh</option>
                    <option value="PC">PC</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Nintendo DS">Nintendo DS</option>
                    <option value="Nintendo 3DS">Nintendo 3DS</option>
                    <option value="Android">Android</option>
                    <option value="Wii">Wii</option>
                    <option value="PlayStation 4">PlayStation 4</option>
                    <option value="Wii U">Wii U</option>
                    <option value="Linux">Linux</option>
                    <option value="PlayStation Portable">PlayStation Portable</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="Nintendo 64">Nintendo 64</option>
                    <option value="Saturn">Saturn</option>
                    <option value="Lynx">Lynx</option>
                    <option value="Game Boy">Game Boy</option>
                    <option value="Game Boy Color">Game Boy Color</option>
                    <option value="NeoGeo Pocket Color">NeoGeo Pocket Color</option>
                    <option value="Game.Com">Game.Coms</option>
                    <option value="Dreamcast">Dreamcast</option>
                    <option value="Dreamcast VMU">Dreamcast VMU</option>
                    <option value="WonderSwan">WonderSwan</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Nintendo 64DD">Nintendo 64DD</option>
                </Select>          
            </div>
        );   
}

export default Selection;