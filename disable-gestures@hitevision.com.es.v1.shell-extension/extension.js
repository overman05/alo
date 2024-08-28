

// When the extension is enabled, disable the gestures
function enable() {
	global.stage.get_actions().forEach(a => a.enabled = false);
}

// When the extension is disabled, enable the gestures
function disable() {
	global.stage.get_actions().forEach(a => a.enabled = true);
}
