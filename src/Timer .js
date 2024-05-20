import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 30,
            delay: 5
        };
    }

    componentDidMount() {
        this.delayTimer = setInterval(() => {
            this.setState(prevState => ({
                delay: prevState.delay - 1
            }));
        }, 1000);
    }

    componentDidUpdate() {
        const { delay, seconds } = this.state;

        if (delay === 0 && seconds > 0) {
            if (!this.timer) {
                this.timer = setInterval(() => {
                    this.setState(prevState => ({
                        seconds: prevState.seconds - 1
                    }));
                }, 1000);
            }
        } else if (seconds === 0) {
            this.setState({
                seconds: 30,
                delay: 5
            });
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    componentWillUnmount() {
        clearInterval(this.delayTimer);
        clearInterval(this.timer);
    }

    render() {
        const { seconds, delay } = this.state;

        return (
            <div className={`container ${delay === 0 ? 'timer-started' : ''}`}>
                {delay > 0 ? (
                    <p>Timer will start in: {delay} seconds</p>
                ) : (
                    <div>
                        {seconds > 0 ? (
                            <p>Timer: {seconds} seconds</p>
                        ) : (
                            <p>Timer's up!</p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Timer;
