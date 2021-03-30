import React from 'react'


type PropsType = {
    playerCount: number
    computerCount: number
    round: number
    setAboutGameVizible: (setAboutGameVizible: boolean) => void
    setComputerCardVizible: (computerCardVizible: boolean) => void
    setPlayerCardVizible: (playerCardVizible: boolean) => void
    setNextRoundVizible: (nextRoundVizible: boolean) => void
    setRound: (round: number) => void
    addPlayerCount: (playerCount: number) => void
    addComputerCount: (computerCount: number) => void

}

const Players: React.FC<PropsType> = ({ playerCount, computerCount, round,
    setAboutGameVizible, setComputerCardVizible, setPlayerCardVizible
    , setNextRoundVizible, setRound, addPlayerCount, addComputerCount }) => {


    const endGame = () => {
        setComputerCardVizible(false)
        setPlayerCardVizible(false)
        setNextRoundVizible(false)
        setRound(1)
        addPlayerCount(0)
        addComputerCount(0)
        setAboutGameVizible(true)
    }

    return (
        <div className="players d-flex justify-content-between ">
            <div className="player ">
                <div className="player__img">
                    <img src="https://www.clipartmax.com/png/full/191-1917338_programmer-computer-programming-clip-art-programador-informatico.png" alt="Player" />
                </div>
                <div className="player__count text-center">
                    Count : {playerCount}
                </div>
            </div>
            <div className="round text-center pt-4">
                <div className="round__button">
                    <button className="btn btn-primary" onClick={endGame}>End</button>
                </div>
                Round  {round}
            </div>
            <div className="computer ">
                <div className="computer__img">
                    <img src="https://www.primolo.de/sites/default/files/user_generated_content/website_content_images/5048-kumlehn/computer.gif" alt="computer" />
                </div>
                <div className="computer__count text-center">
                    Count : {computerCount}
                </div>
            </div>
        </div>
    )
}

export default Players