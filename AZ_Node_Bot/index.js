module.exports = async function (context, req) {
    context.log('Generating simplified...');
    context.res = {
        body: "Tests"
    };
};