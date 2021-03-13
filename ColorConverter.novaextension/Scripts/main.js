const { hexToRgba, rgbaToHex } = require('./colors.js');

exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

// Invoked by the "Hex to RGB " command
nova.commands.register("color.hexToRgb", (editor) => {
    // Replaces the selected text with Base-64-encoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = hexToRgba(text, false);
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});

// Invoked by the "Hex (ARGB) to RGB " command
nova.commands.register("color.hexArgbToRgb", (editor) => {
    // Replaces the selected text with Base-64-encoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = hexToRgba(text, true);
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});

// Invoked by the "RGB to Hex" command
nova.commands.register("color.rgbToHex", (editor) => {
    // Replaces the selected text with Base-64-encoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = rgbaToHex(text, false);
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});

// Invoked by the "RGB to Hex (ARGB)" command
nova.commands.register("color.rgbToHexArgb", (editor) => {
    // Replaces the selected text with Base-64-encoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = rgbaToHex(text, true);
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});