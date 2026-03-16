---
layout: default
title: Carry-on Weight Helper
description: Estimate carry-on weight using a bag weight, an airline limit, and common item weights.
permalink: /carry-on-weight-helper/
tool_js: /assets/js/tools/carryon.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Travel Utility</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Carry-on Weight Helper</h1>
<p class="text-secondary">Estimate whether your carry-on is likely to fit within an airline weight limit using approximate weights for common travel items.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4">
  <div class="row g-3">
    <div class="col-md-6"><label class="form-label" for="cBag">Bag weight (kg)</label><input id="cBag" class="form-control" type="number" step="0.1" value="1.8"></div>
    <div class="col-md-6"><label class="form-label" for="cLimit">Airline limit (kg)</label><input id="cLimit" class="form-control" type="number" step="0.1" value="7.0"></div>
    <div class="col-12"><label class="form-label" for="cItems">Items, one per line</label><textarea id="cItems" class="form-control" rows="7" placeholder="laptop&#10;charger&#10;shoes&#10;jeans"></textarea></div>
    <div class="col-12"><button class="btn btn-brand" id="cCalcBtn" type="button">Estimate weight</button></div>
  </div>
</div>
<p class="tool-note mt-3 mb-0">Unknown items default to 0.3 kg. Actual airline rules and scales vary.</p>
</div>
<div class="col-lg-5">
  <div class="result-card rounded-4 p-4 shadow-sm tool-shell">
    <h2 class="h4">Estimate</h2>
    <p class="text-secondary mb-3">Generate a rough weight breakdown from your list.</p>
    <div class="tool-output" id="cResult" style="display:none;"></div>
  </div>
</div>
</div></div></section>