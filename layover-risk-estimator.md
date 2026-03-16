---
layout: default
title: Layover Risk Estimator
description: Estimate connection risk using layover length, airport complexity, terminal change, and border or security re-clearance.
permalink: /layover-risk-estimator/
---

<section class="py-5">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-7">
        <span class="eyebrow">Flight & Aviation Tool</span>
        <h1 class="display-6 fw-bold mt-2 mb-3">Layover Risk Estimator</h1>
        <p class="text-secondary">This tool estimates the risk associated with a layover. It is useful when comparing itineraries that look similar on price but differ in operational risk.</p>

        <form id="layover-risk-form" class="tool-form card border-0 shadow-sm p-4 mt-4">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="layover-minutes">Layover length in minutes</label>
              <input class="form-control" type="number" id="layover-minutes" min="30" max="600" value="85">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="layover-airport">Airport complexity</label>
              <select class="form-select" id="layover-airport">
                <option value="10">Low</option>
                <option value="20" selected>Moderate</option>
                <option value="30">High</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="layover-terminal">Terminal change</label>
              <select class="form-select" id="layover-terminal">
                <option value="0">No</option>
                <option value="15" selected>Possible or yes</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="layover-reclear">Border or security re-clearance</label>
              <select class="form-select" id="layover-reclear">
                <option value="0">No</option>
                <option value="20" selected>Yes</option>
              </select>
            </div>
            <div class="col-12">
              <button class="btn btn-brand" type="submit">Estimate risk</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-5">
        <div id="layover-risk-result" class="result-card rounded-4 p-4 shadow-sm">
          <h2 class="h4">Result</h2>
          <p class="text-secondary mb-3">Add connection details to estimate layover risk.</p>
          <div class="result-score">--</div>
          <div class="result-label mt-2">Waiting for input</div>
          <p class="small text-secondary mt-3 mb-0">This estimate is directional. Weather, delays, and airline procedures can change the real risk materially.</p>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-lg-8 narrow-content">
        <h2 class="h3">What increases layover risk</h2>
        <p>Short connections, complex terminals, and any need to reclear security or immigration raise the chance that a layover becomes stressful or fails entirely. A slightly longer connection is often worth the tradeoff.</p>
        <p>Related tool: <a href="{{ '/flight-connectivity-analyzer/' | relative_url }}">Flight Connectivity Analyzer</a>.</p>
      </div>
    </div>
  </div>
</section>
