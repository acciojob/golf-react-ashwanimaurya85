import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: 0 }, // Initial position
        };
    }

    // Function to start the game
    startGame = () => {
        this.setState({
            renderBall: true,
        });
    }

    // Event handler for the ArrowRight keydown
    handleArrowRight = (event) => {
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState((prevState) => ({
                ballPosition: {
                    left: prevState.ballPosition.left + 5, // Move the ball 5 pixels to the right
                },
            }));
        }
    }

    componentDidMount() {
        // Add an event listener for the ArrowRight keydown
        document.addEventListener("keydown", this.handleArrowRight);
    }

    componentWillUnmount() {
        // Remove the event listener when the component unmounts to avoid memory leaks
        document.removeEventListener("keydown", this.handleArrowRight);
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div
                        className="ball"
                        style={{
                            position: "absolute",
                            left: this.state.ballPosition.left + "px",
                        }}
                    ></div>
                ) : (
                    <button className="start" onClick={this.startGame}>
                        Start
                    </button>
                )}
            </div>
        );
    }
}

export default App;
