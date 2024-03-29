import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div>
				<span className="badge badge-success">
					{this.formatPrice()}
				</span>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm m-2"
				>
					+
				</button>
				<button
					onClick={() => this.props.onDecrement(this.props.counter)}
					className="btn btn-secondary btn-sm m-2"
				>
					-
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}
	formatPrice() {
		let price = "£";
		price += this.props.counter.price.toFixed(2);
		return price;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
