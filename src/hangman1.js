import React, { Component } from "react";
import image0 from "./images/image0.jpg";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";
import {randomword} from "./words";
import Button from "@mui/material/Button";

class Hangman1 extends Component
{
    constructor()
    {
        super();
        this.state={
            mistake:0,
            guessed:new Set([]),
            answer:randomword()
        };
        this.maxwrong=10;
        this.images=[
            image0,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10
        ];
    }

    guessedWord = () =>
    {
        return this.state.answer.split("").map((letter)=>(this.state.guessed.has(letter) ? letter : " _ "));

    };
    handleGuess = (guessedLetter) =>
    {
        this.setState({
            guessed:this.state.guessed.add(guessedLetter),
            mistake:this.state.mistake + (this.state.answer.includes(guessedLetter) ? 0 : 1)
        });

    };
    generateButton  = () =>
    {
        return "abcdefghijklmnopqrstuvwxyz".split("")
        .map((letter)=>(
            <Button 
            variant="text" 
            key={letter}
            value={letter}
            onClick={()=>this.handleGuess(letter)}
            disabled={this.state.guessed.has(letter)}>
                {letter}
                </Button>
            ));
    };
    
    render () 
    {
        var gameState =this.generateButton();
        const gameOver=this.state.mistake>=this.maxwrong;
        const isWon=this.guessedWord().join("")=== this.state.answer;
        if(isWon)
        {
            gameState="You won"

        }
        if(gameOver)
        {
            gameState="You Loss it"
        }
        console.log(gameState);
        return(
            <>
            <div align="center">
                <h3>Hangman Game</h3>
                <div>
                    Wrong Guess:{this.state.mistake} of {this.maxwrong}
                    <br/><br/>
                    <img src={this.images[this.state.mistake]}/>
                    <p>Guess the programming language</p>
                    <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
                    <p styel={{width:"50%"}}>{gameState}</p>
                    
                </div>
            </div>
            </>
        );
    }
}

export default Hangman1;