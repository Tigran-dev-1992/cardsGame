import React, { useContext, useEffect, useState } from 'react';
//@ts-ignore
import Aos from 'aos'
//@ts-ignore
import { CSSTransition } from 'react-transition-group';
import closeCard from './Cards/spades/closekards.gif'
import NextRound from './NextRound';
import Players from './Players';
import { CardContext } from './reducer/cardContext';
import useSound from 'use-sound';
import clickUrl from './sound/click.mp3';
import computerWinUrl from './sound/computerWin.mp3';
import userWinUrl from './sound/userWin.mp3';
import gameEndUrl from './sound/gameEnd.mp3';










function Card() {
    const [click] = useSound(clickUrl, {
        sprite: {
            in: [0, 2000]
        }
    })
    const [computerWin, { ...soundC }] = useSound(computerWinUrl)
    const [userWin, { ...soundU }] = useSound(userWinUrl)
    const [gameEnd, { ...soundG }] = useSound(gameEndUrl)
    const computerWinStop = soundC.stop
    const userWinStop = soundU.stop
    const gameEndStop = soundG.stop



    useEffect(() => { Aos.init({ duration: 1500 }) }, [])



    const [cardShake, setCardShake] = useState(false)

    const { ...card } = useContext(CardContext)
    const {
        playerName, deck, playerCount,
        computerCount, round, roundWinner,
        playerCardData, computerCardData, nextRoundVisible,
        playerCardVizible, computerCardVizible,
        addPlayerCount, addComputerCount, setAboutGameVizible,
        setRound, setRoundWinner, setComputerCardData,
        setPlayerCardData, setNextRoundVizible, setPlayerCardVizible,
        setComputerCardVizible } = { ...card }





    const userCard = deck[playerCardData.playerSuitNum][playerCardData.playerCardIndex].card
    const computerCard = deck[computerCardData.computerSuitNum][computerCardData.computerCardIndex].card




    const getWinner = (userCardIndex: number, computerCardIndex: number) => {
        setNextRoundVizible(true)
        setCardShake(false)
        if (userCardIndex > computerCardIndex) {
            playerCount === 4 ? gameEnd() : userWin()
            setRoundWinner(playerName)
            addPlayerCount(playerCount + 1)
        }
        else if (userCardIndex < computerCardIndex) {
            computerCount === 4 ? gameEnd() : computerWin()
            setRoundWinner("computer")
            addComputerCount(computerCount + 1)
        } else {
            computerWin()
            setRoundWinner("draw")
        }
    }



    const getNumber = (max: number, min: number) => (Math.floor(Math.random() * (max - min + 1)) + min)

    const openCards = () => {
        setCardShake(true)
        click({ id: "in" })
        const playerSuitNum = getNumber(3, 0)
        const playerCardIndex = getNumber(12, 0)
        const computerSuitNum = getNumber(3, 0)
        const computerCardIndex = getNumber(12, 0)
        setPlayerCardData({ playerSuitNum, playerCardIndex })
        setComputerCardData({ computerSuitNum, computerCardIndex })
        setTimeout(() => {
            setPlayerCardVizible(true)
        }, 1500)
        setTimeout(() => {
            setComputerCardVizible(true)
        }, 3000)
        setTimeout(() => {
            getWinner(playerCardIndex, computerCardIndex)
        }, 4000)
    }





    const nextRoundProps = {
        round, playerName, roundWinner, computerCount,
        playerCount, setNextRoundVizible,
        setRound, addPlayerCount,
        addComputerCount, setComputerCardVizible,
        setPlayerCardVizible, computerWinStop, userWinStop,
        gameEndStop
    }

    const playersProps = {
        computerCount, playerCount, round,
        setAboutGameVizible, setComputerCardVizible,
        setPlayerCardVizible, setNextRoundVizible, setRound,
        addPlayerCount, addComputerCount
    }

    return (
        <div className="cards" data-aos="zoom-in">
            <CSSTransition in={nextRoundVisible} classNames={"nextRound"} timeout={500} mountOnEnter unmountOnExit>
                <NextRound {...nextRoundProps} />
            </CSSTransition>
            <Players {...playersProps} />
            <div className="cards__body d-flex justify-content-around ">
                <div className="playerCard text-center">
                    <div className="playerCard__text">
                        Playercard
                    </div>
                    {playerCardVizible
                        ? <img src={userCard} alt="dfhdh" className="openCard" />
                        : <img src={closeCard} alt="dfhdh" className={`${cardShake ? "shake" : ""}`} />
                    }

                </div>

                <div className="computerCard text-center">
                    <div className="computerCard__text">
                        Computercard
                    </div>
                    {computerCardVizible
                        ? <img src={computerCard} alt="dfhdh" className="openCard" />
                        : <img src={closeCard} alt="dfhdh" className={`${cardShake ? "shake" : ""}`} />
                    }
                </div>
            </div>
            <div className="cards__button text-center">
                <button onClick={openCards} disabled={cardShake} className="btn btn-primary" >Open Cards</button>
            </div>

        </div>
    );
}

export default Card;
