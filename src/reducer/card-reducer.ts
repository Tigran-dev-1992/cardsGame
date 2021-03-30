import c_2 from '../Cards/clubs/c_2.gif'
import c_3 from '../Cards/clubs/c_3.gif'
import c_4 from '../Cards/clubs/c_4.gif'
import c_5 from '../Cards/clubs/c_5.gif'
import c_6 from '../Cards/clubs/c_6.gif'
import c_7 from '../Cards/clubs/c_7.gif'
import c_8 from '../Cards/clubs/c_8.gif'
import c_9 from '../Cards/clubs/c_9.gif'
import c_10 from '../Cards/clubs/c_10.gif'
import c_jack from '../Cards/clubs/c_jack.gif'
import c_queen from '../Cards/clubs/c_queen.gif'
import c_king from '../Cards/clubs/c_king.gif'
import c_ace from '../Cards/clubs/c_ace.gif'
// 
import d_2 from '../Cards/diamonds/d_2.gif'
import d_3 from '../Cards/diamonds/d_3.gif'
import d_4 from '../Cards/diamonds/d_4.gif'
import d_5 from '../Cards/diamonds/d_5.gif'
import d_6 from '../Cards/diamonds/d_6.gif'
import d_7 from '../Cards/diamonds/d_7.gif'
import d_8 from '../Cards/diamonds/d_8.gif'
import d_9 from '../Cards/diamonds/d_9.gif'
import d_10 from '../Cards/diamonds/d_10.gif'
import d_jack from '../Cards/diamonds/d_jack.gif'
import d_queen from '../Cards/diamonds/d_queen.gif'
import d_king from '../Cards/diamonds/d_king.gif'
import d_ace from '../Cards/diamonds/d_ace.gif'
// 
import h_2 from '../Cards/hearts/h_2.gif'
import h_3 from '../Cards/hearts/h_3.gif'
import h_4 from '../Cards/hearts/h_4.gif'
import h_5 from '../Cards/hearts/h_5.gif'
import h_6 from '../Cards/hearts/h_6.gif'
import h_7 from '../Cards/hearts/h_7.gif'
import h_8 from '../Cards/hearts/h_8.gif'
import h_9 from '../Cards/hearts/h_9.gif'
import h_10 from '../Cards/hearts/h_10.gif'
import h_jack from '../Cards/hearts/h_jack.gif'
import h_queen from '../Cards/hearts/h_queen.gif'
import h_king from '../Cards/hearts/h_king.gif'
import h_ace from '../Cards/hearts/h_ace.gif'
// 
import s_2 from '../Cards/spades/s_2.gif'
import s_3 from '../Cards/spades/s_3.gif'
import s_4 from '../Cards/spades/s_4.gif'
import s_5 from '../Cards/spades/s_5.gif'
import s_6 from '../Cards/spades/s_6.gif'
import s_7 from '../Cards/spades/s_7.gif'
import s_8 from '../Cards/spades/s_8.gif'
import s_9 from '../Cards/spades/s_9.gif'
import s_10 from '../Cards/spades/s_10.gif'
import s_jack from '../Cards/spades/s_jack.gif'
import s_queen from '../Cards/spades/s_queen.gif'
import s_king from '../Cards/spades/s_king.gif'
import s_ace from '../Cards/spades/s_ace.gif'


const SET_PLAYER_COUNT = 'SET_PLAYER_COUNT'
const SET_COMPUTER_COUNT = 'SET_COMPUTER_COUNT'
const SET_ABOUT_GAME_VIZIBLE = 'SET_ABOUT_GAME_VIZIBLE'
const SET_ROUND = 'SET_ROUND'
const SET_ROUND_WINNER = 'SET_ROUND_WINNER'
const SET_USER_CARD = 'SET_USER_CARD'
const SET_COMPUTER_CARD = 'SET_COMPUTER_CARD'
const SET_NEXT_ROUND_VIZIBLE = 'SET_NEXT_ROUND_VIZIBLE'
const SET_COMPUTER_CARD_VIZIBLE = 'SET_COMPUTER_CARD_VIZIBLE'
const SET_USER_CARD_VIZIBLE = 'SET_USER_CARD_VIZIBLE'
const SET_PLAYER_NAME = 'SET_PLAYER_NAME'


const spades = [s_2, s_3, s_4, s_5, s_6, s_7, s_8, s_9, s_10, s_jack, s_queen, s_king, s_ace]
const hearts = [h_2, h_3, h_4, h_5, h_6, h_7, h_8, h_9, h_10, h_jack, h_queen, h_king, h_ace]
const diamonds = [d_2, d_3, d_4, d_5, d_6, d_7, d_8, d_9, d_10, d_jack, d_queen, d_king, d_ace]
const clubs = [c_2, c_3, c_4, c_5, c_6, c_7, c_8, c_9, c_10, c_jack, c_queen, c_king, c_ace]

const getNewArray = (arr: Array<string>) => {
    return arr.map((card, i) => {
        return { card: card, value: i }
    })
}

const spadesData = getNewArray(spades)
const heartsData = getNewArray(hearts)
const diamondsData = getNewArray(diamonds)
const clubsData = getNewArray(clubs)


export const cardInitialState = {
    deck: [spadesData, heartsData, diamondsData, clubsData],
    playerCount: 0,
    computerCount: 0,
    aboutGameVizible: true,
    round: 1,
    roundWinner: "computer",
    nextRoundVisible: false,
    playerCardVizible: false,
    computerCardVizible: false,
    playerName: "",
    playerCardData: {
        playerSuitNum: 0,
        playerCardIndex: 0
    },
    computerCardData: {
        computerSuitNum: 0,
        computerCardIndex: 0
    }
}

export type PlayerCardType = {
    playerSuitNum: number;
    playerCardIndex: number
}
export type ComputerCardType = {
    computerSuitNum: number;
    computerCardIndex: number
}

export type CardInitialStateType = typeof cardInitialState

export const cardActions = {
    setPlayerCount: (playerCount: number) => ({ type: SET_PLAYER_COUNT, playerCount } as const),
    setComputerCount: (computerCount: number) => ({ type: SET_COMPUTER_COUNT, computerCount } as const),
    setAboutGameVizible: (aboutGameVizible: boolean) => ({ type: SET_ABOUT_GAME_VIZIBLE, aboutGameVizible } as const),
    setRound: (round: number) => ({ type: SET_ROUND, round } as const),
    setRoundWinner: (roundWinner: string) => ({ type: SET_ROUND_WINNER, roundWinner } as const),
    setPlayerCardData: (payload: PlayerCardType) => ({ type: SET_USER_CARD, payload } as const),
    setComputerCardData: (payload: ComputerCardType) => ({ type: SET_COMPUTER_CARD, payload } as const),
    setNextRoundVizible: (nextRoundVisible: boolean) => ({ type: SET_NEXT_ROUND_VIZIBLE, nextRoundVisible } as const),
    setPlayerCardVizible: (playerCardVisible: boolean) => ({ type: SET_USER_CARD_VIZIBLE, playerCardVisible } as const),
    setComputerCardVizible: (computerCardVizible: boolean) => ({ type: SET_COMPUTER_CARD_VIZIBLE, computerCardVizible } as const),
    setPlayerName: (name: string) => ({ type: SET_PLAYER_NAME, name } as const)
}


type ProprtisType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<ProprtisType<T>>


export type CardActionsType = InferActionsType<typeof cardActions>


export const cardReducer = (state: CardInitialStateType = cardInitialState, action: CardActionsType): CardInitialStateType => {
    switch (action.type) {
        case SET_PLAYER_COUNT:
            return {
                ...state, playerCount: action.playerCount
            }
        case SET_COMPUTER_COUNT:
            return {
                ...state, computerCount: action.computerCount
            }
        case SET_ABOUT_GAME_VIZIBLE :
            return {
                ...state, aboutGameVizible: action.aboutGameVizible
            }
        case SET_ROUND:
            return {
                ...state, round: action.round
            }
        case SET_ROUND_WINNER:
            return {
                ...state, roundWinner: action.roundWinner
            }
        case SET_USER_CARD:
            return {
                ...state, playerCardData: { ...action.payload }
            }
        case SET_COMPUTER_CARD:
            return {
                ...state, computerCardData: { ...action.payload }
            }
        case SET_NEXT_ROUND_VIZIBLE:
            return {
                ...state, nextRoundVisible: action.nextRoundVisible
            }
        case SET_COMPUTER_CARD_VIZIBLE:
            return {
                ...state, computerCardVizible: action.computerCardVizible
            }
        case SET_USER_CARD_VIZIBLE:
            return {
                ...state, playerCardVizible: action.playerCardVisible
            }
        case SET_PLAYER_NAME:
            return {
                ...state, playerName: action.name
            }
        default: return state
    }

}



