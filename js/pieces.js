function LPiece(){
	var state1 = [ [1, 0],
				   [1, 0],
				   [1, 1] ];

	var state2 = [ [0, 0, 1],
				   [1, 1, 1] ];

	var state3 = [ [1, 1], 
				   [0, 1],
				   [0, 1] ];

	var state4 = [ [1, 1, 1], 
				   [1, 0, 0] ];

	var states = [state1, state2, state3, state4];
	var curState = 0;

	var color = 0;
	var gridx = 4;
	var gridy = -3;

}

function ReverseLPiece(){
	var state1 = [ [0, 1],
				   [0, 1],
				   [1, 1] ];

	var state2 = [ [1, 1, 1],
				   [0, 0, 1] ];

	var state3 = [ [1, 1], 
				   [1, 0],
				   [1, 0] ];

	var state4 = [ [1, 0, 0], 
				   [1, 1, 1] ];

	var states = [state1, state2, state3, state4];
	var curState = 0;
	
	var color = 0;
	var gridx = 4;
	var gridy = -3;

}

function ZPiece(){
	var state1 = [ [1, 1, 0],
				   [0, 1, 1] ];

	var state2 = [ [0, 1], 
	               [1, 1],
	               [1, 0] ];

	var states = [state1, state2];
	var curState = 0;
	
	var color = 0;
	var gridx = 4;
	var gridy = -2;

}

function ReverseZPiece(){
	var state1 = [ [0, 1, 1],
				   [1, 1, 0] ];

	var state2 = [ [1, 0], 
	               [1, 1],
	               [0, 1] ];

	var states = [state1, state2];
	var curState = 0;
	
	var color = 0;
	var gridx = 4;
	var gridy = -2;

}

function TPiece(){
	var state1 = [ [1, 1, 1],
				   [0, 1, 0] ];

	var state2 = [ [1, 0],
				   [1, 1],
				   [1, 0] ];

	var state3 = [ [0, 1, 0],
				   [1, 1, 1] ];

	var state4 = [ [0, 1],
				   [1, 1],
				   [0, 1] ];

	var states = [state1, state2, state3, state4];
	
	var curState = 0;
	
	var color = 0;
	var gridx = 4;
	var gridy = -2;

}

function BlockPiece(){
	var state1 = [ [1, 1],
				   [1, 1] ];

	var states = [state1];
	
	var curState = 0;
	
	var color = 0;
	var gridx = 4;
	var gridy = -2;
}

function LinePiece(){
	var state1 = [ [1],
				   [1],
				   [1] ];

	var state2 = [ [1, 1, 1] ];

	var states = [state1, state2];
	
	var curState = 0;
	
	var color = 0;
	var gridx = 5;
	var gridy = -3;

}

function getRandomPiece(){
	var result = Math.floor(Math.random() * 7);
	var piece;

	switch(piece)
	{
		case(0): piece = new LPiece(); break;
		case(1): piece = new ZPiece(); break;
		case(2): piece = new TPiece(); break;
		case(3): piece = new BlockPiece(); break;
		case(4): piece = new LinePiece(); break;
		case(5): piece = new ReverseZPiece(); break;
		case(6): piece = new ReverseLPiece(): break;
	}

	piece.color = Math.floor(Math.random() * 8);
	return piece;


}