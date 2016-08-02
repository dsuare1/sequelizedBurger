var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (data) {
			cb(data);
		});
	},
	updateOne: function (queryCondition, cb) {
		orm.updateOne('burgers', queryCondition, function (data) {
			cb();
		});
	},
	replaceOne: function(queryCondition, cb) {
		orm.replaceOne('burgers', queryCondition, function(data) {
			cb();
		});
	},
	deleteOne: function(queryCondition, cb) {
		orm.deleteOne('burgers', queryCondition, function(data) {
			cb();
		});
	},
	insertOne: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function (data) {
			cb();
		});
	}
};

module.exports = burger;
