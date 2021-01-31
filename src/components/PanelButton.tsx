import { ButtonProps } from "../lib/interfaces"

const PanelButton:React.FC<{ obj: ButtonProps[], thefunc(x:string): void }> = (props) => {

    const theButton = (item: ButtonProps) =>{
        if(item.hoverEnter){
            return <button 
                type="button" 
                onMouseEnter={()=>props.thefunc(item.hoverEnter!!)} 
                onMouseLeave={()=>props.thefunc(item.hoverLeave!!)} 
                className="btn btn-primary"
            >{item.name}</button>
        }else if(item.clickEnter){
            return <button 
            type="button" 
            onClick={()=>props.thefunc(item.clickEnter!!)} 
            className="btn btn-primary"
        >{item.name}</button>
        }else{
            return <button 
                type="button" 
                className="btn btn-primary"
            >{item.name}</button>
        }
    }

    return <div className="btn-group" role="group">
            {props.obj.map(item => {
                return theButton(item)
            })}
        </div>

}

export default PanelButton