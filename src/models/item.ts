interface Item {
	id: number;
	name: string;
	description: string;
	picture: string;
	category: string;
	lastUpdated: string | number;
	votes: { positive: number; negative: number };
}
export default Item;
