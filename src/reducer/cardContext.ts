import { createContext } from "react";
import { CardInitialStateType, ComputerCardType, PlayerCardType } from "./card-reducer";

type CardFunctionsType = {
    addPlayerCount: (playerCount :number) => void
    addComputerCount: (computerCount:number) => void
    setAboutGameVizible: (setAboutGameVizible: boolean) => void
    setRound: (round:number) => void
    setRoundWinner: (roundWinner: string) => void
    setComputerCardData: (payload: ComputerCardType) =>void
    setPlayerCardData: (payload: PlayerCardType) => void
    setNextRoundVizible: (nextRoundVizible: boolean) => void
    setPlayerCardVizible: (playerCardVizible: boolean) => void
    setComputerCardVizible: (computerCardVizible: boolean) => void 
    setPlayerName: (name: string) => void
}
type ContextValueType = CardFunctionsType&CardInitialStateType|null

export const CardContext = createContext<ContextValueType>(null)