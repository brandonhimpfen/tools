---
layout: default
title: Flight Connectivity Analyzer
description: Evaluate route quality using direct service, airport strength, alliance consistency, and connection structure.
permalink: /flight-connectivity-analyzer/
---

<section class="py-5">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-7">
        <span class="eyebrow">Flight & Aviation Tool</span>
        <h1 class="display-6 fw-bold mt-2 mb-3">Flight Connectivity Analyzer</h1>
        <p class="text-secondary">This tool estimates how strong a route appears from a network perspective. It is designed to help travelers compare route quality rather than search for fares.</p>

        <form id="flight-connectivity-form" class="tool-form card border-0 shadow-sm p-4 mt-4">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="connectivity-direct">Direct service</label>
              <select class="form-select" id="connectivity-direct">
                <option value="35">Yes</option>
                <option value="10" selected>No</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="connectivity-airport">Airport strength</label>
              <select class="form-select" id="connectivity-airport">
                <option value="30">Major hub pairing</option>
                <option value="20" selected>One major hub</option>
                <option value="10">Secondary airports</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="connectivity-alliance">Alliance consistency</label>
              <select class="form-select" id="connectivity-alliance">
                <option value="20">Strong</option>
                <option value="12" selected>Mixed</option>
                <option value="5">Weak</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="connectivity-connections">Connections required</label>
              <input class="form-control" type="number" id="connectivity-connections" min="0" max="3" value="1">
            </div>
            <div class="col-12">
              <button class="btn btn-brand" type="submit">Analyze route</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-5">
        <div id="flight-connectivity-result" class="result-card rounded-4 p-4 shadow-sm">
          <h2 class="h4">Result</h2>
          <p class="text-secondary mb-3">Provide route assumptions to estimate the strength of the connection.</p>
          <div class="result-score">--</div>
          <div class="result-label mt-2">Waiting for input</div>
          <p class="small text-secondary mt-3 mb-0">Higher scores suggest cleaner network structure and more straightforward routing.</p>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-lg-8 narrow-content">
        <h2 class="h3">What the analyzer considers</h2>
        <p>Direct flights, strong hubs, and coherent alliance structures usually make routes more resilient and easier to manage. Every added connection increases both travel time and operational dependence on upstream flight performance.</p>
        <p>Related tool: <a href="{{ '/layover-risk-estimator/' | relative_url }}">Layover Risk Estimator</a>.</p>
      </div>
    </div>
  </div>
</section>
