---
layout: default
title: Trip Intelligence Report
description: Generate a simple travel briefing based on route complexity, time zones, language environment, and administrative demands.
permalink: /trip-intelligence-report/
---

<section class="py-5">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-7">
        <span class="eyebrow">Travel Planning Tool</span>
        <h1 class="display-6 fw-bold mt-2 mb-3">Trip Intelligence Report</h1>
        <p class="text-secondary">Build a lightweight trip briefing that summarizes likely friction, administrative burden, and travel rhythm. This is useful for comparing options before a trip is booked.</p>

        <form id="trip-intelligence-form" class="tool-form card border-0 shadow-sm p-4 mt-4">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="trip-origin">Origin city</label>
              <input class="form-control" type="text" id="trip-origin" placeholder="Toronto" value="Toronto">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="trip-destination">Destination</label>
              <input class="form-control" type="text" id="trip-destination" placeholder="Lisbon" value="Lisbon">
            </div>
            <div class="col-md-4">
              <label class="form-label" for="trip-days">Trip days</label>
              <input class="form-control" type="number" id="trip-days" min="1" max="90" value="10">
            </div>
            <div class="col-md-4">
              <label class="form-label" for="trip-timezones">Time zones crossed</label>
              <input class="form-control" type="number" id="trip-timezones" min="0" max="12" value="5">
            </div>
            <div class="col-md-4">
              <label class="form-label" for="trip-connections">Connections</label>
              <input class="form-control" type="number" id="trip-connections" min="0" max="4" value="1">
            </div>
            <div class="col-md-6">
              <label class="form-label" for="trip-language">Language environment</label>
              <select class="form-select" id="trip-language">
                <option value="Easy">Mostly familiar</option>
                <option value="Moderate" selected>Mixed</option>
                <option value="Challenging">Mostly unfamiliar</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label" for="trip-admin">Administrative complexity</label>
              <select class="form-select" id="trip-admin">
                <option value="Low">Low</option>
                <option value="Moderate" selected>Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
            <div class="col-12">
              <button class="btn btn-brand" type="submit">Generate report</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-5">
        <div id="trip-intelligence-result" class="report-card rounded-4 p-4 shadow-sm">
          <h2 class="h4 mb-3">Trip briefing</h2>
          <p class="text-secondary mb-0">Enter trip details to generate a concise travel intelligence summary.</p>
        </div>
      </div>
    </div>
  </div>
</section>
