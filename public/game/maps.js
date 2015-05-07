var keys = {
	'w': 'walkable',
	'x': 'not walkable',
}

var maps = {
	"pallet_town": {
		"image": "pallet_town.png",
		"dimensions": {
			"width": 20,
			"height": 18,
		},
		"start_position": {
			"x": 5,
			"y": 6,
		},
		"collision_matrix": 
			[
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'x', 'w', 'w', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'x', 'w', 'w', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'w', 'w', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
			],
		"events": 
			[
				{ "id": 0, "coordinates": {"x": 3, "y": 5}, "method": "interact", "type": "message", "content": "Ash's house", "flags": null, "next": null },
				{ "id": 1, "coordinates": {"x": 5, "y": 5}, "method": "interact", "type": "message", "content": "The door is locked...", "flags": null, "next": null },
				{ "id": 2, "coordinates": {"x": 11, "y": 5}, "method": "interact", "type": "message", "content": "Gary's house", "flags": null, "next": null },
				{ "id": 3, "coordinates": {"x": 13, "y": 5}, "method": "interact", "type": "message", "content": "The door is locked...", "flags": null, "next": null },
				{ "id": 4, "coordinates": {"x": 7, "y": 9}, "method": "interact", "type": "message", "content": "Welcome to Pallet Town", "flags": null, "next": null },
				{ "id": 5, "coordinates": {"x": 12, "y": 11}, "method": "interact", "type": "message", "content": "The door is locked...", "flags": null, "next": null },
				{ "id": 6, "coordinates": {"x": 13, "y": 13}, "method": "interact", "type": "message", "content": "Professor Oak's Pokemon Labratory", "flags": null, "next": null },
				{ "id": 7, "coordinates": {"x": 8, "y": -1}, "method": "walk", "type": "exit", "destination": {"map": "route_1", "coordinates": {"x": 7, "y": 35} } },
				{ "id": 8, "coordinates": {"x": 9, "y": -1}, "method": "walk", "type": "exit", "destination": {"map": "route_1", "coordinates": {"x": 8, "y": 35} } }
			],
		"flags": {},
	},
	"route_1": {
		"image": "route_1.png",
		"dimensions": {
			"width": 16,
			"height": 36,
		},
		"collision_matrix": 
			[
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'w', 'x', 'x', 'x', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'w', 'w', 'x', 'x', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'w', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
				[ 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ],
			],
		"events": 
			[
				{ "id": 0, "coordinates": {"x": null, "y": null}, "method": "auto", "type": "message", "content": "Welcome to Route 1", "flags": null, "next": null },
				{ "id": 1, "coordinates": {"x": 6, "y": 27}, "method": "interact", "type": "message", "content": "Route 1", "flags": null, "next": null },
				{ "id": 2, "coordinates": {"x": 7, "y": 36}, "method": "walk", "type": "exit", "destination": {"map": "pallet_town", "coordinates": {"x": 8, "y": 0} } },
				{ "id": 3, "coordinates": {"x": 8, "y": 36}, "method": "walk", "type": "exit", "destination": {"map": "pallet_town", "coordinates": {"x": 9, "y": 0} } }
			],
		/*
		"exits": 
			[
				{ "coordinates": {"x": 7, "y": 36}, "destination": {"map": "pallet_town", "coordinates": {"x": 8, "y": 0} } },
				{ "coordinates": {"x": 8, "y": 36}, "destination": {"map": "pallet_town", "coordinates": {"x": 9, "y": 0} } }
			],
		*/
		"flags": {},
	},
};