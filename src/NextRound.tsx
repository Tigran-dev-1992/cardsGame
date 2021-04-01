import React from 'react'
import { PlayFunction } from 'use-sound/dist/types'

type PropsType = {
    playerName: string
    round: number
    roundWinner: string
    playerCount: number
    computerCount: number
    setNextRoundVizible: (nextRoundVizible: boolean) => void
    setRound: (round: number) => void
    addPlayerCount: (playerCount: number) => void
    addComputerCount: (computerCount: number) => void
    setComputerCardVizible: (computerCardVizible: boolean) => void
    setPlayerCardVizible: (playerCardVizible: boolean) => void
    userWinStop: (id?: string | undefined) => void
    computerWinStop: (id?: string | undefined) => void
    gameEndStop: (id?: string | undefined) => void
}
const NextRound: React.FC<PropsType> = ({
    roundWinner, round, playerCount, computerCount, playerName,
    setNextRoundVizible, setRound, addPlayerCount, addComputerCount,
    setComputerCardVizible, setPlayerCardVizible, userWinStop,
    computerWinStop,gameEndStop
}) => {


    const handleClick = () => {
        roundWinner === playerName ? userWinStop() : computerWinStop()
        setComputerCardVizible(false)
        setPlayerCardVizible(false)
        setNextRoundVizible(false)
        setRound(round + 1)
    }
    const newGame = () => {
        gameEndStop()
        setComputerCardVizible(false)
        setPlayerCardVizible(false)
        setNextRoundVizible(false)
        setRound(1)
        addPlayerCount(0)
        addComputerCount(0)
    }


    return (
        <div className='nextRound d-flex flex-column align-items-center justify-content-center'>
            {playerCount < 5 && computerCount < 5
                ? <div className='text-center'>
                    <div className="nextRound__info">
                        {roundWinner === "draw"
                            ? `In ${round} round not winner!!!`
                            : <div>
                                {`In ${round} round win ${roundWinner} !!!`}
                                <div className="nextRound__img">
                                    {roundWinner === playerName
                                        ? <img src="https://www.clipartmax.com/png/full/191-1917338_programmer-computer-programming-clip-art-programador-informatico.png" alt="" />
                                        : <img src="https://www.primolo.de/sites/default/files/user_generated_content/website_content_images/5048-kumlehn/computer.gif" alt="" />
                                    }
                                </div>
                            </div>
                        }
                    </div>

                    <div className="nextRound__button">
                        <div className="nextRound__button text-center">
                            <div className="nextRound__button__info">
                                Go to next round
                            </div>
                            <button onClick={handleClick} className="btn btn-primary" >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                : <div className="gameOver__button text-center">
                    <div className="gameOver__button__info">
                        Play end, {roundWinner === "computer" ? roundWinner : "you"} win !!!
                        <div className="nextRound__img">
                            {roundWinner === playerName
                                ? <img src="https://www.clipartmax.com/png/full/191-1917338_programmer-computer-programming-clip-art-programador-informatico.png" alt="" />
                                : <img src="https://www.primolo.de/sites/default/files/user_generated_content/website_content_images/5048-kumlehn/computer.gif" alt="" />
                            }
                        </div>
                    </div>
                    <button onClick={newGame} className="btn btn-primary" >Play Again</button>
                </div>
            }
        </div>
    )
}
export default NextRound