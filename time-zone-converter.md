---
layout: default
title: Time Zone Converter
description: Convert a date and time between common travel time zones.
permalink: /time-zone-converter/
tool_js: /assets/js/tools/time-zone.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Travel Utility</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Time Zone Converter</h1>
<p class="text-secondary">Convert a date and time between common travel time zones using timezone-aware logic that can handle daylight saving differences more carefully.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3">
<div class="col-md-6"><label class="form-label" for="tzDate">Date</label><input id="tzDate" class="form-control" type="date"></div>
<div class="col-md-6"><label class="form-label" for="tzTime">Time</label><input id="tzTime" class="form-control" type="time"></div>
<div class="col-md-6"><label class="form-label" for="tzFrom">From time zone</label><select id="tzFrom" class="form-select"></select></div>
<div class="col-md-6"><label class="form-label" for="tzTo">To time zone</label><select id="tzTo" class="form-select"></select></div>
<div class="col-12"><div class="tool-inline-actions"><button class="btn btn-brand" id="tzConvertBtn" type="button">Convert time</button><button class="btn btn-soft" id="tzSwapBtn" type="button">Swap</button></div></div>
</div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Converted time</h2><p class="text-secondary mb-3">Compare the same instant across two time zones.</p><div class="tool-output" id="tzResult" style="display:none;"></div></div></div>
</div></div></section>