const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://Ngothanhtuan123:Ngothanhtuan123@cluster0.6vlqj.mongodb.net/f8-courses?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            },
        );
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
