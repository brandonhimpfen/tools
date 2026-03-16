---
layout: default
title: Hex RGB Converter
description: Convert full hex color values to RGB and RGB values back to hex.
permalink: /hex-rgb-converter/
tool_js: /assets/js/tools/hex-rgb.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7"><span class="eyebrow">Creator & Web Tool</span><h1 class="display-6 fw-bold mt-2 mb-3">Hex RGB Converter</h1><p class="text-secondary">Convert a six-character hex color value to RGB or convert an RGB value back to hex.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3"><div class="col-12"><label class="form-label" for="colorInput">Color value</label><input id="colorInput" class="form-control" type="text" placeholder="#27AE60 or rgb(39, 174, 96)"></div><div class="col-12"><button class="btn btn-brand" id="hexRgbBtn" type="button">Convert color</button></div></div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Result</h2><div id="hexRgbPreview" class="report-box mb-3" style="min-height:72px;"></div><div class="tool-output" id="hexRgbResult" style="display:none;"></div></div></div>
</div></div></section>