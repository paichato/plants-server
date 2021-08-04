module.exports = function paginate(model) {
    return (req, res, next) => {
        const _page = parseInt(req.query._page);
        const _limit = parseInt(req.query._limit);
        const startIndex = (_page - 1) * _limit;
        const endIndex = _page * _limit;

        const result = {};

        if (endIndex < model.length) {
            result.next = {
                page: _page + 1,
                limit: _limit
            };
        };
        if (startIndex > 0) {
            result.previous = {
                page: _page - 1,
                limit: _limit,
            };
        }
        result.results = (_page && _limit) ? model.slice(startIndex, endIndex) : model;
        res.paginatedResult = result;
        next();
    }
}