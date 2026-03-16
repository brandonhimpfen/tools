---
layout: default
title: Checklist Builder
description: Build a custom checklist and save it locally in your browser.
permalink: /checklist-builder/
tool_js: /assets/js/tools/checklist.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Travel Utility</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Checklist Builder</h1>
<p class="text-secondary">Create a lightweight checklist for travel or trip prep and save it locally in your browser for later.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4">
  <div class="row g-3">
    <div class="col-md-6"><label class="form-label" for="clName">Checklist name</label><input id="clName" class="form-control" type="text" placeholder="Example: Europe carry-on"></div>
    <div class="col-md-6"><label class="form-label" for="clItem">Add item</label><input id="clItem" class="form-control" type="text" placeholder="Example: eSIM activation"></div>
    <div class="col-12"><div class="tool-inline-actions"><button class="btn btn-brand" id="clAddBtn" type="button">Add item</button><button class="btn btn-soft" id="clSaveBtn" type="button">Save</button><button class="btn btn-soft" id="clLoadBtn" type="button">Load</button><button class="btn btn-soft" id="clClearBtn" type="button">Clear</button></div></div>
  </div>
</div>
<p class="tool-note mt-3 mb-0">Saved to localStorage in your browser. No server is used.</p>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Checklist</h2><p class="text-secondary mb-3">Add items and build your list.</p><div class="tool-output" id="clResult" style="display:none;"></div></div></div>
</div></div></section>