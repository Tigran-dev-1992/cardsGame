//@ts-ignore
import Aos from 'aos'
import React, { FormEvent,useContext, useEffect, useState } from 'react'
import { CardContext } from './reducer/cardContext'



const AboutGame = () => {
    const context = useContext(CardContext)

    useEffect(() => { Aos.init({ duration: 1500 }) }, [])

    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const handlerSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value.trim()) {
            context?.setPlayerName(value)
            context?.setAboutGameVizible(false)
            setValue("")
        }else{
            setError(true)
        }

    }

    if(!context?.aboutGameVizible){
        return null
    }
    return (
        <div className="aboutGame d-flex flex-column align-items-center justify-content-center" data-aos="zoom-in">
            <div className="text-center about__info">
                Hi!!! This is a simple card game where the user plays with a computer. The winner is the one who  win five times with the hight card.
                Enter your name and go to play!!!
            </div>
            <div className="about__form text-center mt-4">
                <form onSubmit={handlerSubmit}>
                    <input type="text" className="form-control" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} value= {value} onFocus={()=>setError(false)}/>
                    <span className="error">{error&&"Enter your name please"}</span>
                    <button className="btn btn-primary mt-2" >Go to play</button>
                </form>
            </div>
        </div>
    )
}
export default AboutGame