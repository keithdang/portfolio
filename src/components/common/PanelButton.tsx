import { ButtonProps } from "../../lib/interfaces"

const PanelButton:React.FC<{ obj: ButtonProps[], thefunc(x:string): void }> = (props) => {
    const buttonStyle = "btn button-color"
    const theButton = (item: ButtonProps) =>{
        if(item.hoverEnter && item.hoverLeave){
            return <button 
                type="button" 
                onMouseEnter={()=>props.thefunc(item.hoverEnter!!)} 
                onMouseLeave={()=>props.thefunc(item.hoverLeave!!)}
                className={buttonStyle}
            >{item.name}</button>
        }else if(item.hoverEnter){
            return <button 
            type="button" 
            onMouseEnter={()=>props.thefunc(item.hoverEnter!!)} 
            className={buttonStyle}
        >{item.name}</button>
        }else if(item.clickEnter){
            return <button 
            type="button" 
            onClick={()=>props.thefunc(item.clickEnter!!)} 
            className={buttonStyle}
        >{item.name}</button>
        }else{
            return <button 
                type="button" 
                className={buttonStyle}
            >{item.name}</button>
        }
    }

    return <div className="btn-group panel-button" role="group">
            {props.obj.map(item => {
                return theButton(item)
            })}
        </div>

}

export default PanelButton