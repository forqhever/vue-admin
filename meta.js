module.exports = {
    helpers: {
        raw: function(options) {
            return options.fn(this)
        }
    },
    prompts: {
        name: {
            'type': 'string',
            'required': true,
            'message': 'Project name'
        },
        description: {
            'type': 'string',
            'required': false,
            'message': 'Project description',
            'default': 'A vue.js project based on forqhever/vue-admin template.'
        },
        author: {
            'type': 'string',
            'message': 'Author'
        },
    },
    completeMessage: 'Welcome to use forqhever/vue-admin template!\n\n {{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};