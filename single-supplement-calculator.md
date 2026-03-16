---
layout: default
title: Single Supplement Calculator
description: Compare solo traveler pricing against shared-occupancy pricing and estimate the markup.
permalink: /single-supplement-calculator/
tool_js: /assets/js/tools/single-supplement.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Solo Travel Tool</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Single Supplement Calculator</h1>
<p class="text-secondary">Measure the extra amount a solo traveler pays when pricing is based around shared occupancy.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3">
<div class="col-md-6"><label class="form-label" for="sShared">Shared-occupancy price</label><input id="sShared" class="form-control" type="number" min="0" step="0.01" value="1800"></div>
<div class="col-md-6"><label class="form-label" for="sSolo">Solo traveler price</label><input id="sSolo" class="form-control" type="number" min="0" step="0.01" value="2600"></div>
<div class="col-md-6"><label class="form-label" for="sNights">Number of nights</label><input id="sNights" class="form-control" type="number" min="1" step="1" value="7"></div>
<div class="col-md-6"><label class="form-label" for="sCurrency">Currency symbol</label><input id="sCurrency" class="form-control" type="text" value="$" maxlength="5"></div>
<div class="col-12"><button class="btn btn-brand" id="sCalcBtn" type="button">Calculate supplement</button></div>
</div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Result</h2><p class="text-secondary mb-3">See the supplement amount and markup percentage.</p><div class="tool-output" id="sResult" style="display:none;"></div></div></div>
</div></div></section>