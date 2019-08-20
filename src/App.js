import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4, price: 1.75 },
			{ id: 2, value: 0, price: 3.99 },
			{ id: 3, value: 0, price: 5 },
			{ id: 4, value: 0, price: 9.99 }
		]
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value === 0
			? (counters[index].value = 0)
			: counters[index].value--;
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
	};

	getTotalPrice = () => {
		let price = 0;
		price = this.state.counters
			.map(c => c.value * c.price)
			.reduce((total, amount) => total + amount);
		price = "£" + price.toFixed(2);
		return price;
	};

	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={
						this.state.counters.filter(c => c.value > 0).length
					}
					totalPrice={this.getTotalPrice()}
				/>
				<main className="container">
					<Counters
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
						counters={this.state.counters}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
