---
layout: default
title: Reaction Time Test
description: Test your reaction time by clicking when the box changes color.
permalink: /reaction-time-test/
tool_js: /assets/js/tools/reaction-time.js
---


<section class="py-5"><div class="container"><div class="row g-5 align-items-stretch">
<div class="col-lg-7"><span class="eyebrow">Everyday Test</span><h1 class="display-6 fw-bold mt-2 mb-3">Reaction Time Test</h1><p class="text-secondary">Wait for the box to change color, then click as quickly as you can.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4">
  <div id="reaction-box" class="reaction-box"></div>
  <div class="mt-3"><button class="btn btn-brand" id="resetReactionBtn" type="button">Reset test</button></div>
</div>
</div>
<div class="col-lg-5"><div class="result-card rounded-4 p-4 shadow-sm tool-shell"><h2 class="h4">Result</h2><p class="text-secondary mb-3">Your latest reaction time will appear here.</p><div class="tool-output" id="reactionResult"></div></div></div>
</div></div></section>