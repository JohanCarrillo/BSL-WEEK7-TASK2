abstract class Character {
	abstract get name(): string;

	introduce(): void {
		console.log(`I am ${this.name}`);
	}

	abstract usePower(): void;
	
	abstract speak(): void;
}

class Shrek extends Character {
	get name(): string {
		return 'Shrek';
	}

	usePower(): void {
		console.log(`${this.name} Fart and cook a rat`);
	}
	
	speak(): void {
		console.log('*Say something in ogre')
	}
}

class Donkey extends Character {
	get name(): string {
		return 'Donkey';
	}

	usePower(): void {
		console.log(`${this.name} F*** a dragonette and sing`);
	}
	
	speak(): void {
		console.log('*Talk about friendship')
	}
}

class LordFarquaad extends Character {

	get name(): string {
		return 'Lord Farquaad';
	}

	usePower(): void {
		console.log(`${this.name} Spend money and be short`);
	}
	
	speak(): void {
		console.log('*Say something about how ugly Shrek is');
	}
}
