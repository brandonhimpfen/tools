---
layout: default
title: Simple Packing List Builder
description: Generate a quick packing list from trip type, trip duration, and optional custom items.
permalink: /simple-packing-list-builder/
tool_js: /assets/js/tools/simple-packing.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7"><span class="eyebrow">Travel Utility</span><h1 class="display-6 fw-bold mt-2 mb-3">Simple Packing List Builder</h1><p class="text-secondary">Build a fast starter packing list from trip type and a few custom items.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3">
<div class="col-md-6"><label class="form-label" for="trip-type">Trip type</label><select id="trip-type" class="form-select"><option value="beach">Beach</option><option value="mountains">Mountains</option><option value="city" selected>City</option><option value="international">International</option></select></div>
<div class="col-md-6"><label class="form-label" for="trip-duration">Trip duration in days</label><input id="trip-duration" class="form-control" type="number" min="1" value="5"></div>
<div class="col-12"><label class="form-label" for="special-items">Special items, comma separated</label><input id="special-items" class="form-control" type="text" placeholder="camera, medication, umbrella"></div>
<div class="col-12"><button class="btn btn-brand" id="simplePackingBtn" type="button">Build simple list</button></div>
</div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Packing list</h2><p class="text-secondary mb-3">See a quick starter list you can customize.</p><div class="tool-output" id="simplePackingResult" style="display:none;"></div></div></div>
</div></div></section>