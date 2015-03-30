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
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'm', 'm', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'g', 'g', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'z', 'x', 'z', 'x', 'x', 'f', 'f', 'f', 'z', 'x', 'z', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'x', 'x', 'x', 'z', 'f', 'f', 'x', 'x', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'z', 'x', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', 'x', 'x', 'z', 'x', 'x', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'c', 'c', 'c', 'c', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'c', 'w', 'w', 'c', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				[ 'x', 'f', 'f', 'f', 'c', 'w', 'w', 'c', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'x', ],
				[ 'x', 'x', 'f', 'f', 'c', 'w', 'w', 'c', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
			],
		"events": 
			[
				{ "coordinates": {"x": 3, "y": 5}, "type": "message", "content": "Ash's house", "flags": null },
				{ "coordinates": {"x": 5, "y": 5}, "type": "message", "content": "The door is locked...", "flags": null },
				{ "coordinates": {"x": 11, "y": 5}, "type": "message", "content": "Gary's house", "flags": null },
				{ "coordinates": {"x": 13, "y": 5}, "type": "message", "content": "The door is locked...", "flags": null },
				{ "coordinates": {"x": 7, "y": 9}, "type": "message", "content": "Welcome to Pallet Town", "flags": null },
				{ "coordinates": {"x": 12, "y": 11}, "type": "message", "content": "The door is locked...", "flags": null },
				{ "coordinates": {"x": 13, "y": 13}, "type": "message", "content": "Professor Oak's Pokemon Labratory", "flags": null },
			],
		"flags": {},
		"battleOdds": 0.2,
		"pokemon": 
			[
				{ "species": "Squirtle", "frequency": 10, "minLevel": 1, "maxLevel": 4 },
			],
	},
};