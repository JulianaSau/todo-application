import { Component, Fragment } from "react";

export default class AnimatedItems extends Component {
	componentDidMount() {
		this.initialPositions = this.getElementPositions();
	}

	componentDidUpdate(prevProps) {
		let newChild = null;
		let newPositions;

		// Check if new item has been added
		if (prevProps.children.length !== this.props.children.length) {
			newChild = this.returnNewChild(prevProps);
			newPositions = this.getElementPositions(newChild);
		}
		else {
			newPositions = this.getElementPositions();
		}

		Object.keys(newPositions).forEach(key => {
			const newData = newPositions[key];
			let prevData;
			let deltaX;
			let deltaY;

			if (newData.isNewElement) {
				deltaX = 0;
				deltaY = -newData.clientRect.height / 4;
      }
			else {
				prevData = this.initialPositions[key];
				deltaX = prevData.clientRect.left - newData.clientRect.left;
				deltaY = prevData.clientRect.top - newData.clientRect.top;
			}

			requestAnimationFrame(() => {
				const child = this.container.children[newData.index];
				child.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
				child.style.transition = 'all 0s';
				if (newData.isNewElement) {
					child.style.opacity = '0';
				}

				requestAnimationFrame(() => {
					child.style.transition = 'all 0.5s';
					child.style.transform = 'translate3d(0, 0, 0)';
					if (newData.isNewElement) {
						child.style.opacity = '1';
					}
				});

			});
		});
		this.initialPositions = newPositions;
	}

	render() {
		return (
			<div ref={el => this.container = el} className='item-container'>
				{this.props.children}
			</div>
		);
	}

	// find new child that was added to the dom by diff against initial values on mount
	returnNewChild = (prevProps) => {
		return this.props.children.filter(item => {
			const isMatch = prevProps.children.some(prevItem => {
				return item.key === prevItem.key;
			});
			if (!isMatch) {
				return item;
			}
		})
	}

	getElementPositions = (newChild = null) => {
		const { children } = this.props;
		const data = Array.from(this.container.children).reduce((obj, el, index) => {
			obj[children[index].key] = {
				index,
				clientRect: el.getBoundingClientRect(),
				isNewElement: newChild ? newChild[0].key === children[index].key : false,
			};
			return obj;
		}, {});
		return data;
	}
}