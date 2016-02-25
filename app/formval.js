System.register([], function(exports_1) {
    function formValidator(val) {
        if (val.value.match(/^123/)) {
            console.log('from function');
            return { inval: true };
        }
    }
    exports_1("formValidator", formValidator);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=formval.js.map