
module.exports = async function (context, req) {
    context.log('Generating unique tweets...');
    let now = new Date();
    context.res = {
        body: "The date & time now is: " + now.toISOString() + "T" + now.toTimeString()
    };
};