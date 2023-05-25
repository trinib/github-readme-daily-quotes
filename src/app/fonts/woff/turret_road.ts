const turret_road =
	'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';

export { turret_road };
