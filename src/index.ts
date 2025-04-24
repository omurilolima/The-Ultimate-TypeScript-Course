type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

// Intersection Type is used to combine two types in a new type
type UIWidget = Draggable & Resizable;

// To initialize this object, we need to all members of draggable and resizeable
let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};
