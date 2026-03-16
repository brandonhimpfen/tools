---
layout: default
title: Trip Budget Splitter
description: Split a total trip budget into daily and category targets based on travel style.
permalink: /trip-budget-splitter/
tool_js: /assets/js/tools/budget.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Travel Planning Tool</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Trip Budget Splitter</h1>
<p class="text-secondary">Turn a total budget into daily targets and category allocations so you can see how much room you likely have for lodging, food, transit, activities, and miscellaneous costs.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3">
<div class="col-md-6"><label class="form-label" for="bTotal">Total budget</label><input id="bTotal" class="form-control" type="number" min="0" step="0.01" value="2500"></div>
<div class="col-md-6"><label class="form-label" for="bDays">Trip days</label><input id="bDays" class="form-control" type="number" min="1" value="10"></div>
<div class="col-md-6"><label class="form-label" for="bStyle">Travel style</label><select id="bStyle" class="form-select"><option value="budget">Budget</option><option value="balanced" selected>Balanced</option><option value="comfort">Comfort</option></select></div>
<div class="col-md-6"><label class="form-label" for="bBuffer">Contingency buffer</label><select id="bBuffer" class="form-select"><option value="0.05">5%</option><option value="0.1" selected>10%</option><option value="0.15">15%</option><option value="0.2">20%</option></select></div>
<div class="col-12"><button class="btn btn-brand" id="bCalcBtn" type="button">Split budget</button></div>
</div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Budget split</h2><p class="text-secondary mb-3">See a daily target and rough category allocations.</p><div class="tool-output" id="bResult" style="display:none;"></div></div></div>
</div></div></section>