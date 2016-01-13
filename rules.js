function Player(id, name, position, cash) {
	this.id = id;
	this.name = name;
	this.cash = cash;
	this.position = position;
	this.jail_time = 0;
	this.get_out_of_jail_cards = 0;

	this.withdraw = function(amount) {
		this.cash -= amount;
		if(this.cash < 0)
			// PLAYER LOSS
	}
}

var chance = [];
function draw_from_chance() {

}

var chest = [];
function draw_from_chest() {

}

function roll() {
	return [Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1)];
}

function move(doubles_series, player, roll) {
	var d1, d2 = roll;
	// IS DOUBLES
	if(d1 == d2) {
		// IN JAIL
		if(player.position == -1) {
			player.position = 10;
			player.jail_time = 0;
		}
		// 3 DOUBLES -> GO TO JAIL
		else if(double_series == 2) {
			player.position = -1;
			return;
		}
		// NORMAL MOVE CONTINUES
		else {
			double_series += 1;
		}
	} else {
		double_series = 0;
		// IN JAIL
		if(player.position == -1) {
			// LEAVING JAIL
			if(player.jail_time == 2) {
				player.jail_time = 0;
				if(player.get_out_of_jail_cards > 0)
					player.get_out_of_jail_cards -= 1;
				else
					player.withdraw(50);
			} else {
				player.jail_time += 1;
				return;
			}
		}
	}

	var new_position = player.position + d1 + d2;
	// PASS GO
	if(new_position > 39) {
		new_position %= 40;
		player.cash += 200;
	}
	// CHANCE
	if(new_position == 7 || new_position == 22) {
		var draw = draw_from_chance();
		// GO DIRECTLY TO JAIL...
		if(draw == 0) {

		}
		// GET OUT OF JAIL FREE
		else if(draw == 1) {

		}
		// +$20
		// +$50
		// -$15
		// PAY EACH PLAYER $50
		// WITHDRAW $25 * HOUSES + $100 * HOTELS
		// ADVANCE TO GO +$200
		// ADVANCE TO READING RAILROAD
		// ADVANCE TO NEAREST RAILROAD DOUBLE RENT (X2)
		// ADVANCE TO NEAREST UTILITY DECUPLE RENT
		// GO BACK 3 SPACES
		// ADVANCE TO ST. CHARLES PL
		// ADVANCE TO ILLINOIS AVE
		// ADVANCE TO BOARDWALK
	}
	// COMMUNITY CHEST
	else if(new_position == 2 || new_position == 33) {
		var draw = draw_from_chest();
		// GO DIRECTLY TO JAIL...
		if(draw == 0) {

		}
		// GET OUT OF JAIL FREE
		else if(draw == 1) {

		}
		// +$200
		// +$100 (X3)
		// +$50
		// +$25
		// +$20
		// +$10
		// -$100
		// -$50 (X2)
		// ADVANCE TO GO
		// RECEIVE $10 FROM EACH PLAYER
		// PAY $40 * HOUSES + $115 * HOTELS
	}
	// NORMAL PROPERTY RULES
	else {
		pay_rent(player, new_position);
	}
}

function pay_rent(player, position) {
	
}

function Property(id, name, owner, buildings) {
	this.id = id;
	this.name = name;
	this.owner = owner;
	this.buildings = buildings;
}

function Buildings(houses, hotels) {
	this.houses = houses;
	this.hotels = hotels;
}

var building_banned = [5, 12, 15, 25, 28, 35];
var no_buildings = Buildings(0, 0);
var properties = [Property(-1, 'Jail', -1, no_buildings),
				  Property(0, 'Go', -1, no_buildings),
				  Property(1, 'Mediteranean Avenue', 0, no_buildings),
				  Property(2, 'Community Chest 1', -1, no_buildings),
				  Property(3, 'Baltic Avenue', 0, no_buildings),
				  Property(4, 'Income Tax', -1, no_buildings),
				  Property(5, 'Reading Railroad', 0, no_buildings),
				  Property(6, 'Oriental Avenue', 0, no_buildings),
				  Property(7, 'Chance 1', -1, no_buildings),
				  Property(8, 'Vermont Avenue', 0, no_buildings),
				  Property(9, 'Connecticut Avenue', 0, no_buildings),
				  Property(10, 'Just Visiting Jail', -1, no_buildings),
				  Property(11, 'St. Charles Place', 0, no_buildings),
				  Property(12, 'Electric Company', 0, no_buildings),
				  Property(13, 'States Avenue', 0, no_buildings),
				  Property(14, 'Virginia Avenue', 0, no_buildings),
				  Property(15, 'Pennsylvania Railroad', 0, no_buildings),
				  Property(16, 'St. James Place', 0, no_buildings),
				  Property(17, 'Community Chest 2', -1, no_buildings),
				  Property(18, 'Tennessee Avenue', 0, no_buildings),
				  Property(19, 'New York Avenue', 0, no_buildings),
				  Property(20, 'Free Parking', -1, no_buildings),
				  Property(21, 'Kentucky Avenue', 0, no_buildings),
				  Property(22, 'Chance 2', -1, no_buildings),
				  Property(23, 'Indiana Avenue', 0, no_buildings),
				  Property(24, 'Illinois Avenue', 0, no_buildings),
				  Property(25, 'B. & O. Railroad', 0, no_buildings),
				  Property(26, 'Atlantic Avenue', 0, no_buildings),
				  Property(27, 'Ventnor Avenue', 0, no_buildings),
				  Property(28, 'Water Works', 0, no_buildings),
				  Property(28, 'Marvin Gardens', 0, no_buildings),
				  Property(30, 'Go To Jail', -1, no_buildings),
				  Property(31, 'Pacific Avenue', 0, no_buildings),
				  Property(32, 'North Carolina Avenue', 0, no_buildings),
				  Property(33, 'Community Chest 3', -1, no_buildings),
				  Property(34, 'Pennsylvania Avenue', 0, no_buildings),
				  Property(35, 'Short Line', 0, no_buildings),
				  Property(36, 'Chance 3', -1, no_buildings),
				  Property(37, 'Park Place', 0, no_buildings),
				  Property(38, 'Luxury Tax', -1, no_buildings),
				  Property(39, 'Boardwalk', 0, no_buildings)]