import React, { useReducer } from 'react'
import { cardActions, cardInitialState, cardReducer, ComputerCardType, PlayerCardType } from './card-reducer'
import { CardContext } from './cardContext'


const CardState: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(cardReducer, cardInitialState)
    const cadrFunctions = {
        addPlayerCount: (playerCount: number) => dispatch(cardActions.setPlayerCount(playerCount)),
        addComputerCount: (computerCount: number) => dispatch(cardActions.setComputerCount(computerCount)),
        setAboutGameVizible: (setAboutGameVizible: boolean) => dispatch(cardActions.setAboutGameVizible(setAboutGameVizible)),
        setRound: (round: number) => dispatch(cardActions.setRound(round)),
        setRoundWinner: (roundWinner: string) => dispatch(cardActions.setRoundWinner(roundWinner)),
        setPlayerCardVizible: (playerCardVizible: boolean) => dispatch(cardActions.setPlayerCardVizible(playerCardVizible)),
        setComputerCardVizible: (computerCardVizible: boolean) => dispatch(cardActions.setComputerCardVizible(computerCardVizible)),
        setComputerCardData: (payload: ComputerCardType) => { dispatch(cardActions.setComputerCardData(payload)) },
        setPlayerCardData: (payload: PlayerCardType) => dispatch(cardActions.setPlayerCardData(payload)),
        setNextRoundVizible: (nextRoundVizible: boolean) => dispatch(cardActions.setNextRoundVizible(nextRoundVizible)),
        setPlayerName: (name:string) => dispatch(cardActions.setPlayerName(name))
    }


    return (
        <CardContext.Provider value={{ ...state, ...cadrFunctions }}>
            {children}
        </CardContext.Provider>
    )
}
export default CardState

