---
layout: default
title: Itinerary Sanity Check
description: Paste a day-by-day itinerary and get lightweight warnings about overpacked days.
permalink: /itinerary-sanity-check/
tool_js: /assets/js/tools/itinerary.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7">
<span class="eyebrow">Travel Planning Tool</span>
<h1 class="display-6 fw-bold mt-2 mb-3">Itinerary Sanity Check</h1>
<p class="text-secondary">Paste a rough itinerary to spot days that may be overpacked, time-heavy, or too tight for travel-day reality.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4">
  <label class="form-label" for="iText">Itinerary</label>
  <textarea id="iText" class="form-control" rows="12" placeholder="Day 1: Arrive&#10;Check in&#10;Museum&#10;Dinner&#10;&#10;Day 2: 09:00 walking tour&#10;12:00 lunch&#10;14:00 train"></textarea>
  <div class="mt-3"><button class="btn btn-brand" id="iCheckBtn" type="button">Run check</button></div>
</div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Assessment</h2><p class="text-secondary mb-3">Get a simple summary and warnings.</p><div class="tool-output" id="iResult" style="display:none;"></div></div></div>
</div></div></section>