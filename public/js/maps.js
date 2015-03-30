var keys = {
	'x': 'solid object, no interaction',
	'z': 'solid object, interaction',
	'f': 'plain ground',
	'g': 'grass (monsters)',
	't': 'transport, move to another map',
	'm': 'transport and grass',
	'c': 'coastline',
	'w': 'water',
}

var maps = {
	"pallet_town": {
		"collision_matrix": 
			[
				['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'm', 'm', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'g', 'g', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'z', 'x', 'z', 'x', 'x', 'f', 'f', 'f', 'z', 'x', 'z', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'x', 'x', 'x', 'z', 'f', 'f', 'x', 'x', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'z', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'z', 'x', 'x', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'c', 'c', 'c', 'c', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'c', 'w', 'w', 'c', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				['x', 'f', 'f', 'f', 'c', 'w', 'w', 'c', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				['x', 'x', 'f', 'f', 'c', 'w', 'w', 'c', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
			],
		"events": 
			[
				{"type": "interact", "coordinates": {"x": 3, "y": 5}, "event": "message", "content": "Kyle's house.", "flags": null},
			],
		"flags": {},
	},
};