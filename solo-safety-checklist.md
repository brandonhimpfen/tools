---
layout: default
title: Solo Safety Checklist
description: Build a destination-agnostic solo travel safety checklist that you can copy and customize.
permalink: /solo-safety-checklist/
tool_js: /assets/js/tools/safety.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Solo Travel Tool</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Solo Safety Checklist</h1>
<p class="text-secondary">Build a simple checklist based on trip type and accommodation type, then copy it for your own notes.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3">
<div class="col-md-6"><label class="form-label" for="sTripType">Trip type</label><select id="sTripType" class="form-select"><option value="city" selected>City break</option><option value="road">Road trip</option><option value="nature">Nature or outdoors</option></select></div>
<div class="col-md-6"><label class="form-label" for="sAccommodation">Accommodation</label><select id="sAccommodation" class="form-select"><option value="hotel" selected>Hotel</option><option value="hostel">Hostel</option><option value="rental">Rental</option></select></div>
<div class="col-12"><div class="tool-inline-actions"><button class="btn btn-brand" id="sBuildBtn" type="button">Build checklist</button><button class="btn btn-soft" id="sCopyBtn" type="button">Copy</button></div></div>
</div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Checklist</h2><p class="text-secondary mb-3">Build and copy a customizable checklist.</p><div class="tool-output" id="sResult" style="display:none;"></div></div></div>
</div></div></section>