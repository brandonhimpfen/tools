---
layout: default
title: Passport Validity Checker
description: Check passport expiry dates against common three-month and six-month travel validity rules.
permalink: /passport-validity-checker/
tool_js: /assets/js/tools/passport-validity.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Travel Utility</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Passport Validity Checker</h1>
<p class="text-secondary">Check whether your passport expiry date appears to satisfy common additional-validity rules after the end of a trip.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4">
<div class="row g-3">
<div class="col-md-6"><label class="form-label" for="pExpiry">Passport expiry date</label><input id="pExpiry" class="form-control" type="date"></div>
<div class="col-md-6"><label class="form-label" for="pReturn">Trip end or departure from destination</label><input id="pReturn" class="form-control" type="date"></div>
<div class="col-md-6"><label class="form-label" for="pRule">Validity rule to check</label><select id="pRule" class="form-select"><option value="none">No additional validity rule</option><option value="3m" selected>At least 3 months after trip end</option><option value="6m">At least 6 months after trip end</option></select></div>
<div class="col-md-6"><label class="form-label" for="pBlank">Minimum blank visa pages wanted</label><select id="pBlank" class="form-select"><option value="0">Not checking blank pages</option><option value="1">1 blank page</option><option value="2" selected>2 blank pages</option><option value="4">4 blank pages</option></select></div>
<div class="col-md-6"><label class="form-label" for="pPages">Blank pages remaining</label><input id="pPages" class="form-control" type="number" min="0" step="1" placeholder="Optional"></div>
<div class="col-12"><button class="btn btn-brand" id="pCalcBtn" type="button">Check validity</button></div>
</div>
</div>
<p class="tool-note mt-3 mb-0">Always verify official rules for your nationality, destination, and visa type before travel.</p>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Result</h2><p class="text-secondary mb-3">Run a basic validity check from your dates.</p><div class="tool-output" id="pResult" style="display:none;"></div></div></div>
</div></div></section>