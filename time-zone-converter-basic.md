---
layout: default
title: Time Zone Converter Basic
description: Convert a simple time between a small set of common time zones.
permalink: /time-zone-converter-basic/
tool_js: /assets/js/tools/time-zone-basic.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7"><span class="eyebrow">Utility Tool</span><h1 class="display-6 fw-bold mt-2 mb-3">Time Zone Converter Basic</h1><p class="text-secondary">A lightweight alternative to the main time zone converter using a smaller set of common zones.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3">
<div class="col-md-4"><label class="form-label" for="basic-from-time">Your local time</label><input id="basic-from-time" class="form-control" type="time"></div>
<div class="col-md-4"><label class="form-label" for="basic-from-zone">From</label><select id="basic-from-zone" class="form-select"><option value="America/Toronto">Toronto</option><option value="America/Los_Angeles">Los Angeles</option><option value="Europe/London">London</option><option value="Europe/Paris">Paris</option><option value="Asia/Tokyo">Tokyo</option></select></div>
<div class="col-md-4"><label class="form-label" for="basic-to-zone">To</label><select id="basic-to-zone" class="form-select"><option value="Europe/London">London</option><option value="America/Toronto">Toronto</option><option value="America/Los_Angeles">Los Angeles</option><option value="Europe/Paris">Paris</option><option value="Asia/Tokyo">Tokyo</option></select></div>
<div class="col-12"><button class="btn btn-brand" id="basicTzBtn" type="button">Convert time</button></div>
</div></div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Converted time</h2><p class="text-secondary mb-3">Use this lighter version for quick checks.</p><div class="tool-output" id="basicTzResult" style="display:none;"></div></div></div>
</div></div></section>