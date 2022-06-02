abstract class Character {
	abstract get name(): string;

	introduce(): void {
		console.log(`I am ${this.name}`);
	}

	abstract usePower(): void;
}

class Shrek extends Character {
	get name(): string {
		return 'Shrek';
	}

	usePower(): void {
		console.log('Fart');
	}
}

class Donkey extends Character {
	get name(): string {
		return 'Donkey';
	}

	usePower(): void {
		console.log('Sing');
	}
}

class LordFarquaad extends Character {

	get name(): string {
		return 'Lord Farquaad';
	}

	usePower(): void {
		console.log('Spend money');
	}
}