---
layout: default
title: Airport Buffer Calculator
description: Estimate when to leave for the airport using departure time, airport type, transit time, and extra buffer.
permalink: /airport-buffer-calculator/
tool_js: /assets/js/tools/airport-buffer.js
---


<section class="py-5">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-7">
        <span class="eyebrow">Flight & Aviation Tool</span>
        <h1 class="display-6 fw-bold mt-2 mb-3">Airport Buffer Calculator</h1>
        <p class="text-secondary">Estimate a practical leave-by time before heading to the airport. This tool helps you work backward from departure time using airport arrival assumptions, transit time, and your own extra buffer.</p>

        <div class="tool-form card border-0 shadow-sm p-4 mt-4">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="aFlight">Flight departure time</label>
              <input id="aFlight" class="form-control" type="time" value="12:30">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="aType">Flight type</label>
              <select id="aType" class="form-select">
                <option value="domestic" selected>Domestic</option>
                <option value="international">International</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="aTransit">Travel time to airport (minutes)</label>
              <input id="aTransit" class="form-control" type="number" min="0" value="60">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="aAdd">Extra buffer (minutes)</label>
              <input id="aAdd" class="form-control" type="number" min="0" value="20">
            </div>
            <div class="col-12">
              <button class="btn btn-brand" id="aCalcBtn" type="button">Calculate buffer</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="result-card rounded-4 p-4 shadow-sm tool-shell">
          <h2 class="h4">Recommendation</h2>
          <p class="text-secondary mb-3">Use the form to estimate when you should leave and when you should arrive at the airport.</p>
          <div class="tool-output" id="aResult" style="display:none;"></div>
        </div>
      </div>
    </div>
  </div>
</section>