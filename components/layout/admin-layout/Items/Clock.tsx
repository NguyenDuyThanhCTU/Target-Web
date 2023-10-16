"use client";
import React, { Component, ReactNode } from "react";

interface ClockState {
  time: string;
}

class Clock extends Component<{}, ClockState> {
  private timerID: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render(): ReactNode {
    return (
      <div className="flex gap-3">
        <h1>Realtime Clock</h1>
        <div>{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
