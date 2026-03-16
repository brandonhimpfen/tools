---
layout: default
title: Dog Age Converter
description: Convert a dog's age into a rough human-equivalent age.
permalink: /dog-age-converter/
tool_js: /assets/js/tools/dog-age.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7"><span class="eyebrow">Everyday Calculator</span><h1 class="display-6 fw-bold mt-2 mb-3">Dog Age Converter</h1><p class="text-secondary">Convert a dog's age into a simple human-equivalent estimate.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3"><div class="col-md-6"><label class="form-label" for="dogAge">Dog age in years</label><input id="dogAge" class="form-control" type="number" min="0" step="0.1" value="5"></div><div class="col-12"><button class="btn btn-brand" id="dogAgeBtn" type="button">Convert age</button></div></div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Result</h2><p class="text-secondary mb-3">See an approximate human-equivalent age.</p><div class="tool-output" id="dogAgeResult" style="display:none;"></div></div></div>
</div></div></section>