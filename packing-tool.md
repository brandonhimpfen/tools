---
layout: default
title: Packing Tool
description: Generate a packing list based on trip length, climate, laundry access, and travel style.
permalink: /packing-tool/
tool_js: /assets/js/tools/packing.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Travel Utility</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Packing Tool</h1>
<p class="text-secondary">Generate a practical packing list that adjusts for trip length, climate, laundry access, and whether you are packing carry-on only or checking a bag.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4">
<div class="row g-3">
<div class="col-md-6"><label class="form-label" for="pDays">Trip length (days)</label><input id="pDays" class="form-control" type="number" min="1" value="7"></div>
<div class="col-md-6"><label class="form-label" for="pClimate">Climate</label><select id="pClimate" class="form-select"><option value="warm">Warm</option><option value="mixed" selected>Mixed</option><option value="cold">Cold</option></select></div>
<div class="col-md-6"><label class="form-label" for="pLaundry">Laundry access</label><select id="pLaundry" class="form-select"><option value="none">No laundry</option><option value="some" selected>Maybe once</option><option value="often">Easy access</option></select></div>
<div class="col-md-6"><label class="form-label" for="pStyle">Travel style</label><select id="pStyle" class="form-select"><option value="carryon" selected>Carry-on focused</option><option value="checked">Checked bag ok</option></select></div>
<div class="col-12"><div class="tool-inline-actions"><button class="btn btn-brand" id="pBuildBtn" type="button">Build list</button><button class="btn btn-soft" id="pCopyBtn" type="button">Copy list</button></div></div>
</div>
</div>
</div>
<div class="col-lg-5"><div class="report-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4 mb-3">Packing list</h2><p class="text-secondary mb-3">Build a list from the settings you choose.</p><div class="tool-output" id="pResult" style="display:none;"></div></div></div>
</div></div></section>