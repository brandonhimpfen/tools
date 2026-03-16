---
layout: default
title: Travel Friction Score
description: Estimate how difficult a trip may feel based on time zone change, language environment, entry requirements, routing, and trip length.
permalink: /travel-friction-score/
---

<section class="py-5">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-7">
        <span class="eyebrow">Travel Planning Tool</span>
        <h1 class="display-6 fw-bold mt-2 mb-3">Travel Friction Score</h1>
        <p class="text-secondary">Use this tool to estimate how much friction a trip may create. The score combines practical factors that often shape the travel experience more than price alone.</p>

        <form id="travel-friction-form" class="tool-form card border-0 shadow-sm p-4 mt-4">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="friction-timezones">Time zones crossed</label>
              <input class="form-control" type="number" id="friction-timezones" min="0" max="12" value="2">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="friction-connections">Flight connections</label>
              <input class="form-control" type="number" id="friction-connections" min="0" max="4" value="1">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="friction-language">Language barrier</label>
              <select class="form-select" id="friction-language">
                <option value="0">Low</option>
                <option value="10" selected>Moderate</option>
                <option value="20">High</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="friction-entry">Entry requirements</label>
              <select class="form-select" id="friction-entry">
                <option value="0">Simple</option>
                <option value="10" selected>Moderate</option>
                <option value="20">Complex</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="friction-duration">Trip length</label>
              <select class="form-select" id="friction-duration">
                <option value="12">Very short trip</option>
                <option value="8" selected>Short trip</option>
                <option value="4">Medium trip</option>
                <option value="0">Long trip</option>
              </select>
            </div>
            <div class="col-md-6 d-flex align-items-end">
              <button class="btn btn-brand w-100" type="submit">Calculate score</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-5">
        <div id="travel-friction-result" class="result-card rounded-4 p-4 shadow-sm">
          <h2 class="h4">Result</h2>
          <p class="text-secondary mb-3">Enter your trip details to estimate how much friction the trip may create.</p>
          <div class="result-score">--</div>
          <div class="result-label mt-2">Waiting for input</div>
          <p class="small text-secondary mt-3 mb-0">This score is directional rather than predictive. It is designed to support comparison between trip options.</p>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-lg-8 narrow-content">
        <h2 class="h3">How the score works</h2>
        <p>The model blends time zone disruption, routing complexity, language environment, administrative friction, and trip length. Very short trips tend to feel more demanding when they involve long travel or complex logistics because there is less time to absorb the friction.</p>
        <p>Related tools: <a href="{{ '/visa-complexity-calculator/' | relative_url }}">Visa Complexity Calculator</a> and <a href="{{ '/trip-intelligence-report/' | relative_url }}">Trip Intelligence Report</a>.</p>
      </div>
    </div>
  </div>
</section>
