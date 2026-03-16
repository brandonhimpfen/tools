---
layout: default
title: Home
description: Brandon Travel Tools is a merged tools site with travel intelligence calculators, packing and planning utilities, and lightweight creator tools.
---

<section class="hero-section py-5 py-lg-6">
  <div class="container position-relative">
    <div class="row align-items-center g-4 g-xl-5">
      <div class="col-lg-7">
        <span class="eyebrow">Brandon Travel Tools</span>
        <h1 class="display-4 fw-bold mt-3 mb-3">One merged tools site for travel planning, practical utilities, and lightweight web helpers.</h1>
        <p class="hero-copy mb-4">This version keeps the Brandon Travel design system and combines the original travel intelligence tools with the tools from the other two mini sites.</p>
        <div class="d-flex flex-wrap gap-3">
          <a class="btn btn-brand btn-lg" href="#all-tools">Explore all tools</a>
          <a class="btn btn-soft btn-lg" href="#planning-tools">Start with planning</a>
        </div>
        <div class="hero-metrics row row-cols-1 row-cols-sm-3 g-3 mt-4">
          <div class="col"><div class="metric-card"><div class="metric-value">25</div><div class="metric-label">Merged tools</div></div></div>
          <div class="col"><div class="metric-card"><div class="metric-value">5</div><div class="metric-label">Tool groups</div></div></div>
          <div class="col"><div class="metric-card"><div class="metric-value">1</div><div class="metric-label">Unified design system</div></div></div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="hero-panel shadow-soft">
          <div class="hero-panel-top">
            <span class="badge badge-brand">Merged Collection</span>
            <h2 class="h3 mt-3 mb-2">A cleaner single home for all three mini sites.</h2>
            <p class="text-secondary mb-0">Use the travel intelligence tools for trip decisions, the practical travel utilities for logistics, and the creator tools for quick everyday tasks.</p>
          </div>
          <div class="hero-tool-list mt-4">
            <a class="mini-tool-link" href="{{ '/travel-friction-score/' | relative_url }}"><span>Travel Friction Score</span><small>Trip difficulty snapshot</small></a>
            <a class="mini-tool-link" href="{{ '/trip-budget-splitter/' | relative_url }}"><span>Trip Budget Splitter</span><small>Daily and category targets</small></a>
            <a class="mini-tool-link" href="{{ '/packing-tool/' | relative_url }}"><span>Packing Tool</span><small>Packing list generator</small></a>
            <a class="mini-tool-link" href="{{ '/time-zone-converter/' | relative_url }}"><span>Time Zone Converter</span><small>Timezone-aware conversion</small></a>
            <a class="mini-tool-link" href="{{ '/password-generator/' | relative_url }}"><span>Password Generator</span><small>Quick utility</small></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="all-tools" class="py-5">
  <div class="container">
    <div class="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
      <div>
        <span class="eyebrow">All Tools</span>
        <h2 class="h1 mt-2 mb-2">Browse the merged collection</h2>
      </div>
      <p class="section-copy mb-0">Everything from the three mini sites is now grouped in one place under the design-site theme.</p>
    </div>
    <div class="row g-4 tool-grid-cards">
      <div class="col-md-6 col-xl-4"><a class="feature-card h-100 text-decoration-none" href="{{ '/travel-friction-score/' | relative_url }}"><div class="feature-icon">TF</div><span class="tool-kicker">Planning</span><h3 class="h4 mt-3 mb-2">Travel Friction Score</h3><p class="text-secondary mb-0">Estimate how demanding a trip may feel across time, routing, language, and entry friction.</p></a></div>
      <div class="col-md-6 col-xl-4"><a class="feature-card h-100 text-decoration-none" href="{{ '/visa-complexity-calculator/' | relative_url }}"><div class="feature-icon">VC</div><span class="tool-kicker">Planning</span><h3 class="h4 mt-3 mb-2">Visa Complexity Calculator</h3><p class="text-secondary mb-0">Assess likely administrative burden before you book.</p></a></div>
      <div class="col-md-6 col-xl-4"><a class="feature-card h-100 text-decoration-none" href="{{ '/trip-intelligence-report/' | relative_url }}"><div class="feature-icon">TI</div><span class="tool-kicker">Planning</span><h3 class="h4 mt-3 mb-2">Trip Intelligence Report</h3><p class="text-secondary mb-0">Generate a compact operational trip briefing.</p></a></div>
      <div class="col-md-6 col-xl-4"><a class="feature-card h-100 text-decoration-none" href="{{ '/flight-connectivity-analyzer/' | relative_url }}"><div class="feature-icon">FA</div><span class="tool-kicker">Flight</span><h3 class="h4 mt-3 mb-2">Flight Connectivity Analyzer</h3><p class="text-secondary mb-0">Compare route quality and network strength.</p></a></div>
      <div class="col-md-6 col-xl-4"><a class="feature-card h-100 text-decoration-none" href="{{ '/layover-risk-estimator/' | relative_url }}"><div class="feature-icon">LR</div><span class="tool-kicker">Flight</span><h3 class="h4 mt-3 mb-2">Layover Risk Estimator</h3><p class="text-secondary mb-0">Estimate missed-connection risk from your assumptions.</p></a></div>
      <div class="col-md-6 col-xl-4"><a class="feature-card h-100 text-decoration-none" href="{{ '/airport-buffer-calculator/' | relative_url }}"><div class="feature-icon">AB</div><span class="tool-kicker">Flight</span><h3 class="h4 mt-3 mb-2">Airport Buffer Calculator</h3><p class="text-secondary mb-0">Work backward from departure time to a leave-by time.</p></a></div>
    </div>
  </div>
</section>

<section id="planning-tools" class="py-5 section-tint border-top border-bottom">
  <div class="container">
    <div class="section-heading mb-4">
      <span class="eyebrow">Travel Planning</span>
      <h2 class="h1 mt-2">Decision support before you book</h2>
      <p class="section-copy mb-0">These tools focus on travel friction, budgets, visas, and the overall shape of the trip.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Planning</span><h3 class="h4 mt-2">Travel Friction Score</h3><p class="text-secondary">Score likely trip friction.</p><a class="tool-link" href="{{ '/travel-friction-score/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Planning</span><h3 class="h4 mt-2">Visa Complexity Calculator</h3><p class="text-secondary">Estimate entry and paperwork burden.</p><a class="tool-link" href="{{ '/visa-complexity-calculator/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Planning</span><h3 class="h4 mt-2">Trip Intelligence Report</h3><p class="text-secondary">Generate a compact trip briefing.</p><a class="tool-link" href="{{ '/trip-intelligence-report/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Planning</span><h3 class="h4 mt-2">Trip Budget Splitter</h3><p class="text-secondary">Break a budget into daily and category targets.</p><a class="tool-link" href="{{ '/trip-budget-splitter/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Planning</span><h3 class="h4 mt-2">Itinerary Sanity Check</h3><p class="text-secondary">Look for overpacked days and timing pressure.</p><a class="tool-link" href="{{ '/itinerary-sanity-check/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Solo Travel</span><h3 class="h4 mt-2">Single Supplement Calculator</h3><p class="text-secondary">Compare solo pricing against shared pricing.</p><a class="tool-link" href="{{ '/single-supplement-calculator/' | relative_url }}">Open tool</a></div></div></div>
    </div>
  </div>
</section>

<section id="utilities-tools" class="py-5">
  <div class="container">
    <div class="section-heading mb-4">
      <span class="eyebrow">Travel Utilities</span>
      <h2 class="h1 mt-2">Practical tools for trip logistics</h2>
      <p class="section-copy mb-0">Use these for packing, timing, travel docs, and other operational details.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Travel Utility</span><h3 class="h4 mt-2">Packing Tool</h3><p class="text-secondary">Build a fuller packing list from trip settings.</p><a class="tool-link" href="{{ '/packing-tool/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Travel Utility</span><h3 class="h4 mt-2">Simple Packing List Builder</h3><p class="text-secondary">Generate a faster starter list for a trip type.</p><a class="tool-link" href="{{ '/simple-packing-list-builder/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Travel Utility</span><h3 class="h4 mt-2">Carry-on Weight Helper</h3><p class="text-secondary">Estimate your bag weight from common items.</p><a class="tool-link" href="{{ '/carry-on-weight-helper/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Travel Utility</span><h3 class="h4 mt-2">Passport Validity Checker</h3><p class="text-secondary">Check common passport validity rules.</p><a class="tool-link" href="{{ '/passport-validity-checker/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Travel Utility</span><h3 class="h4 mt-2">Time Zone Converter</h3><p class="text-secondary">Timezone-aware date and time conversion.</p><a class="tool-link" href="{{ '/time-zone-converter/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Travel Utility</span><h3 class="h4 mt-2">Time Zone Converter Basic</h3><p class="text-secondary">A lighter quick-check alternative.</p><a class="tool-link" href="{{ '/time-zone-converter-basic/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Travel Utility</span><h3 class="h4 mt-2">Checklist Builder</h3><p class="text-secondary">Create and save browser-based checklists.</p><a class="tool-link" href="{{ '/checklist-builder/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Solo Travel</span><h3 class="h4 mt-2">Solo Safety Checklist</h3><p class="text-secondary">Build a destination-agnostic safety list.</p><a class="tool-link" href="{{ '/solo-safety-checklist/' | relative_url }}">Open tool</a></div></div></div>
    </div>
  </div>
</section>

<section id="creator-tools" class="py-5 section-tint border-top border-bottom">
  <div class="container">
    <div class="section-heading mb-4">
      <span class="eyebrow">Creator & Web Tools</span>
      <h2 class="h1 mt-2">Quick helpers beyond travel</h2>
      <p class="section-copy mb-0">The merged site also includes the creator and utility tools that lived in the other mini sites.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Web</span><h3 class="h4 mt-2">Hex RGB Converter</h3><p class="text-secondary">Convert between full hex and RGB color values.</p><a class="tool-link" href="{{ '/hex-rgb-converter/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Web</span><h3 class="h4 mt-2">HTML Ipsum Generator</h3><p class="text-secondary">Generate quick placeholder HTML snippets.</p><a class="tool-link" href="{{ '/html-ipsum-generator/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Creator</span><h3 class="h4 mt-2">Blog Membership ARR Calculator</h3><p class="text-secondary">Estimate ARR from member counts and pricing.</p><a class="tool-link" href="{{ '/blog-membership-arr-calculator/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Utility</span><h3 class="h4 mt-2">Password Generator</h3><p class="text-secondary">Generate a random password from selected sets.</p><a class="tool-link" href="{{ '/password-generator/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Utility</span><h3 class="h4 mt-2">Temperature Converter</h3><p class="text-secondary">Convert between Celsius and Fahrenheit.</p><a class="tool-link" href="{{ '/temperature-converter/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Everyday</span><h3 class="h4 mt-2">Reaction Time Test</h3><p class="text-secondary">Test how fast you click after a color change.</p><a class="tool-link" href="{{ '/reaction-time-test/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Everyday</span><h3 class="h4 mt-2">Cat Age Converter</h3><p class="text-secondary">Rough cat-to-human age conversion.</p><a class="tool-link" href="{{ '/cat-age-converter/' | relative_url }}">Open tool</a></div></div></div>
      <div class="col-md-6 col-xl-3"><div class="tool-card card h-100 border-0 shadow-soft"><div class="card-body"><span class="tool-kicker">Everyday</span><h3 class="h4 mt-2">Dog Age Converter</h3><p class="text-secondary">Rough dog-to-human age conversion.</p><a class="tool-link" href="{{ '/dog-age-converter/' | relative_url }}">Open tool</a></div></div></div>
    </div>
  </div>
</section>

<section class="py-5">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4"><div class="principle-card h-100"><h3 class="h5">Merged without losing the base design</h3><p class="text-secondary mb-0">The final site keeps the design-site theme, layout, and styling, while bringing in the tools that previously lived in the other two mini sites.</p></div></div>
      <div class="col-lg-4"><div class="principle-card h-100"><h3 class="h5">Tool pages normalized</h3><p class="text-secondary mb-0">The imported tools were converted into the same general page structure so the site feels more consistent from page to page.</p></div></div>
      <div class="col-lg-4"><div class="principle-card h-100"><h3 class="h5">Ready for further cleanup</h3><p class="text-secondary mb-0">This merged version gives you a clean base for future deduping, category refinement, and copy polishing without juggling separate mini sites.</p></div></div>
    </div>
  </div>
</section>
