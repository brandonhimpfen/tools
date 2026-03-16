---
layout: default
title: Temperature Converter
description: Convert temperatures between Celsius and Fahrenheit.
permalink: /temperature-converter/
tool_js: /assets/js/tools/temperature.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7"><span class="eyebrow">Utility Tool</span><h1 class="display-6 fw-bold mt-2 mb-3">Temperature Converter</h1><p class="text-secondary">Convert a temperature between Celsius and Fahrenheit.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3"><div class="col-md-6"><label class="form-label" for="temp">Temperature</label><input id="temp" class="form-control" type="number" step="0.01" placeholder="25"></div><div class="col-md-6"><label class="form-label" for="unit">Current unit</label><select id="unit" class="form-select"><option value="celsius">Celsius</option><option value="fahrenheit">Fahrenheit</option></select></div><div class="col-12"><button class="btn btn-brand" id="tempBtn" type="button">Convert temperature</button></div></div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Converted value</h2><p class="text-secondary mb-3">See the converted temperature.</p><div class="tool-output" id="temperatureResult" style="display:none;"></div></div></div>
</div></div></section>