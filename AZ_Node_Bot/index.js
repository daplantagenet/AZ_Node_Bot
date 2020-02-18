
module.exports = async function (context, req) {
    context.log('Bot generating unique tweets...');
    let now = new Date();
    context.res = {
        body: "Bot generating unique tweets... " + now.toISOString() + "T" + now.toTimeString()
    };
};